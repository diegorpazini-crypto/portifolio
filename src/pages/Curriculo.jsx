import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiExternalLink } from 'react-icons/fi';
import './Curriculo.css';

function Curriculo() {
  

  return (
    <div className="home-root">
      <motion.header className="hero" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="hero-content">
          <h1>Curriculo Online</h1>
          <p>Currículo e certificados carregados localmente.</p>
        </div>
      </motion.header>

      <div className="container">
        <motion.section className="cv-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <div className="card">
            <div className="card-header">
              <h1>Diego Rodrigues Pazini</h1>
              <p className="subtitle">Irei resolver os problemas que estiverem em meu alcance conforme a política da empresa e demonstrar meu talento e força de vontade para contribuir com a equipe, visando o crescimento e o comprometimento com a empresa.</p>
            </div>
            <div className="exp-item"></div>
            <div className="card-body">
              <h2>Contato:</h2>
              <div className="contact-details">
                <div className="contact-row">
                  <div className="contact-item">
                    <span className="contact-label">Email:</span>
                    <span className="contact-value">diegorpazini@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Celular:</span>
                    <span className="contact-value">(11) 91085-4603</span>
                  </div>
                </div>
              </div>
            <div className="exp-item"></div>
              <h2 style={{marginTop:16}}>Experiência:</h2>
              <ul className="exp-list">
                <li className="exp-item">
                  <div className="exp-company"><h3>Escritório Despachante Águia.</h3></div>
                  <div className="exp-raw">Atuando como Auxiliar Administrativo.</div>
                  <div className="exp-role">2013-2015</div>
                </li>
                <li className="exp-item">
                  <div className="exp-company">Santa Casa de Misericórdia de Fernandópolis</div>
                  <div className="exp-raw">Atuando como Auxiliar Administrativo.</div>
                  <div className="exp-raw">2015-2016</div>
                </li>
                <li className="exp-item">
                  <div className="exp-company">Papelaria Aquarius</div>
                  <div className="exp-raw">Atuando como Auxiliar de Depósito.</div>
                  <div className="exp-role">2018</div>
                </li>

                <li className="exp-item">
                  <div className="exp-company">Pintor</div>
                  <div className="exp-raw">Atuando como Autônomo</div>  
                  <div className="exp-role">2022</div>
                </li>

                <li className="exp-item">
                  <div className="exp-company">TAC Etiquetas/KADE-Etiquetas Industria e Comércio Ltda.</div>
                  <div className="exp-raw">Atuando como Controle da Qualidade</div>
                  <div className="exp-role">28/02/2023 á 10/07/2024</div>
                </li>
                <li className="exp-item">
                  <div className="exp-company">Formi Plast</div>
                  <div className="exp-raw">Atuando como Auxiliar de Produção.</div>
                  <div className="exp-role">1° Semestre 2025</div>
                </li>
                <li className="exp-item">
                  <div className="exp-company">Auto Posto Prime Mania</div>
                  <div className="exp-raw">Atuando como Frentista</div>  
                  <div className="exp-role">2° Semestre 2025</div>
                </li>

             <h2 style={{marginTop:16}}>Formação:</h2>
                <ul className="exp-list">
                  <li className="exp-item">
                    <div className="exp-role">Informática intermediária</div>
                    <div className="exp-raw">Curso Complementar em Digitação (2014).</div>
                  </li>
                </ul>
              </ul>

            </div>
          </div>
        </motion.section>

        <motion.aside className="cv-preview" initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ delay: 0.15 }}>
          <div className="card">
            <h3>Certificados</h3>
            <ul className="cert-list">
              <li className="cert-item">
                <FiFileText className="cert-icon" />
                <a href="/certs/Certificado.pdf" target="_blank" rel="noreferrer" className="cert-link">Certificado.pdf</a>
                <a href="/certs/Certificado.pdf" target="_blank" rel="noreferrer" className="external" title="Abrir PDF"><FiExternalLink/></a>
              </li>
            </ul>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}

export default Curriculo;
