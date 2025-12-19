const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

async function extract() {
  const docxPath = path.resolve(__dirname, '..', 'Currículo Diego.docx');
  const altDocxPath = path.resolve(__dirname, '..', '(Atualizado) Currículo Diego.docx');
  let source;
  if (fs.existsSync(altDocxPath)) source = altDocxPath;
  else if (fs.existsSync(docxPath)) source = docxPath;
  else {
    console.error('Arquivo DOCX do currículo não encontrado. Procure por "(Atualizado) Currículo Diego.docx" no diretório do projeto.');
    process.exit(1);
  }

  try {
    const result = await mammoth.convertToHtml({ path: source });
    const html = result.value; // string

    // Heurística: extrair seções por headings ou por linhas que contenham palavras-chave
    const text = html.replace(/<[^>]+>/g, '\n').replace(/\r/g, '\n');
    const lines = text.split(/\n+/).map(l => l.trim()).filter(Boolean);

    // Encontrar email e telefone simples
    const joined = lines.join('\n');
    const emailMatch = joined.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    const phoneMatch = joined.match(/(\+?\d[\d\s().-]{6,}\d)/);

    // Extrair possíveis seções: Procura por títulos comuns em PT
    const sections = {};
    const headings = ['Dados Pessoais','Dados Pessoais:', 'Informações Pessoais','Formação','Experiência','Experiências','Resumo','Resumo Profissional','Certificados','Cursos','Experiência Profissional','Objetivo','Competências','Habilidades','Experiências Profissionais'];
    let current = 'other';
    sections[current] = [];
    for (const line of lines) {
      const h = headings.find(hd => line.toLowerCase().startsWith(hd.toLowerCase()));
      if (h) {
        current = h;
        sections[current] = [];
        continue;
      }
      sections[current].push(line);
    }

    // Montar objeto profile com heurística simples
    const profile = {
      name: lines[0] || '',
      email: emailMatch ? emailMatch[0] : '',
      phone: phoneMatch ? phoneMatch[0] : '',
      title: sections['Objetivo'] ? sections['Objetivo'][0] || '' : '',
      summary: (sections['Resumo Profissional'] && sections['Resumo Profissional'].join(' ')) || (sections['Resumo'] && sections['Resumo'].join(' ')) || '',
      experiences: [],
      education: [],
      certificates: []
    };

    // Heurística para experiências: buscar linhas que contenham anos ou cargos
    const expLines = (sections['Experiência'] || sections['Experiências'] || sections['Experiência Profissional'] || sections['Experiências Profissionais'] || []).slice();
    for (let i = 0; i < expLines.length; i++) {
      const ln = expLines[i];
      // se linha contém ' - ' ou ' | ' ou ' — ' pode separar cargo/empresa
      const parts = ln.split(/\s[-|—|–|\t]\s|\s\|\s|\s—\s/).map(s=>s.trim());
      if (parts.length >= 2) {
        profile.experiences.push({ role: parts[0], company: parts[1], raw: ln });
      } else if (/\d{4}/.test(ln)) {
        profile.experiences.push({ raw: ln });
      } else if (ln.toLowerCase().includes('cargo') || ln.toLowerCase().includes('função') || ln.toLowerCase().includes('atuou como')) {
        profile.experiences.push({ raw: ln });
      }
    }

    // Educação
    const eduLines = sections['Formação'] || [];
    for (const l of eduLines) profile.education.push(l);

    // Certificados/cursos
    const certLines = sections['Certificados'] || sections['Cursos'] || [];
    for (const l of certLines) profile.certificates.push({ title: l, file: null });

    // Save JSON to src/data/profile.json (overwrite)
    const outPath = path.resolve(__dirname, '..', 'src', 'data', 'profile.json');
    fs.writeFileSync(outPath, JSON.stringify(profile, null, 2), 'utf8');
    console.log('Profile JSON escrito em', outPath);
  } catch (err) {
    console.error('Erro ao extrair DOCX:', err);
    process.exit(1);
  }
}

extract();
