import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './Inicio.css';

function Inicio({ setCurrentPage }) {
  return (
    <div className="inicio-root">
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Olá, eu sou <span className="highlight">Diego Pazini</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Profissional dedicado com experiência em administração, controle de qualidade e diversas áreas de atuação. Comprometido com excelência e crescimento contínuo.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <button onClick={() => setCurrentPage('curriculo')} className="btn btn-primary">
              Ver Currículo
              <FiArrowRight />
            </button>
            <a href="#sobre" className="btn btn-secondary">
              Saiba Mais
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-graphic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="graphic-container">
            <svg className="device-graphic" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(124, 58, 237, 0.3)"/>
                  <stop offset="100%" stopColor="rgba(124, 58, 237, 0)"/>
                </radialGradient>
                <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(167, 139, 250, 1)"/>
                  <stop offset="100%" stopColor="rgba(124, 58, 237, 0.8)"/>
                </linearGradient>
              </defs>

              {/* Space background */}
              <circle cx="80" cy="60" r="40" fill="none" stroke="rgba(167, 139, 250, 0.1)" strokeWidth="1" opacity="0.5"/>
              <circle cx="320" cy="80" r="50" fill="none" stroke="rgba(167, 139, 250, 0.08)" strokeWidth="1" opacity="0.4"/>
              <circle cx="350" cy="280" r="45" fill="none" stroke="rgba(167, 139, 250, 0.1)" strokeWidth="1" opacity="0.5"/>
              
              {/* Stars */}
              <circle cx="50" cy="40" r="1.5" fill="rgba(255, 255, 255, 0.8)"/>
              <circle cx="100" cy="30" r="1" fill="rgba(255, 255, 255, 0.6)"/>
              <circle cx="150" cy="25" r="1.2" fill="rgba(255, 255, 255, 0.7)"/>
              <circle cx="320" cy="45" r="1" fill="rgba(255, 255, 255, 0.6)"/>
              <circle cx="370" cy="60" r="1.3" fill="rgba(255, 255, 255, 0.8)"/>
              <circle cx="40" cy="150" r="1.1" fill="rgba(255, 255, 255, 0.7)"/>
              <circle cx="380" cy="140" r="1" fill="rgba(255, 255, 255, 0.6)"/>
              <circle cx="70" cy="300" r="1.2" fill="rgba(255, 255, 255, 0.7)"/>
              <circle cx="330" cy="340" r="1" fill="rgba(255, 255, 255, 0.6)"/>
              <circle cx="200" cy="50" r="1.3" fill="rgba(255, 255, 255, 0.8)"/>
              
              {/* Planets */}
              <circle cx="100" cy="80" r="25" fill="rgba(167, 139, 250, 0.3)" opacity="0.6"/>
              <circle cx="100" cy="80" r="25" fill="none" stroke="rgba(167, 139, 250, 0.5)" strokeWidth="1.5" opacity="0.6"/>
              
              <circle cx="330" cy="310" r="35" fill="rgba(167, 139, 250, 0.2)" opacity="0.5"/>
              <circle cx="330" cy="310" r="35" fill="none" stroke="rgba(167, 139, 250, 0.4)" strokeWidth="1.5" opacity="0.5"/>

              {/* ROCKET - Center */}
              <g>
                {/* Rocket glow */}
                <circle cx="200" cy="180" r="60" fill="url(#glow)"/>
                
                {/* Rocket body */}
                <rect x="188" y="145" width="24" height="60" rx="6" fill="url(#rocketGradient)" stroke="rgba(167, 139, 250, 0.9)" strokeWidth="1.5"/>
                
                {/* Rocket window */}
                <circle cx="200" cy="160" r="6" fill="rgba(255, 255, 255, 0.8)" stroke="rgba(167, 139, 250, 0.7)" strokeWidth="1"/>
                
                {/* Rocket nose cone */}
                <polygon points="200,145 190,160 210,160" fill="rgba(220, 38, 38, 0.9)" stroke="rgba(167, 139, 250, 0.7)" strokeWidth="1"/>
                
                {/* Rocket fins */}
                <path d="M 188 190 L 178 205 L 190 195 Z" fill="rgba(59, 130, 246, 0.8)" stroke="rgba(167, 139, 250, 0.6)" strokeWidth="1"/>
                <path d="M 212 190 L 222 205 L 210 195 Z" fill="rgba(59, 130, 246, 0.8)" stroke="rgba(167, 139, 250, 0.6)" strokeWidth="1"/>
                
                {/* Rocket flame */}
                <polygon points="200,200 192,215 200,210 208,215" fill="rgba(245, 158, 11, 0.9)" opacity="0.9"/>
                <polygon points="200,202 195,212 200,208 205,212" fill="rgba(252, 191, 73, 0.8)" opacity="0.8"/>
                <polygon points="200,203 197,210 200,206 203,210" fill="rgba(255, 255, 255, 0.7)" opacity="0.7"/>
              </g>
              
              {/* Decorative circles */}
              <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1"/>
              <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(124, 58, 237, 0.1)" strokeWidth="1"/>
              
              {/* Devices - laptops/tablets */}
              <g transform="translate(150, 100)" opacity="0.8">
                <rect x="0" y="0" width="120" height="80" rx="8" fill="rgba(124, 58, 237, 0.3)" stroke="rgba(167, 139, 250, 0.6)" strokeWidth="2"/>
                <rect x="5" y="5" width="110" height="65" rx="4" fill="rgba(124, 58, 237, 0.1)" stroke="rgba(167, 139, 250, 0.4)" strokeWidth="1"/>
                <line x1="0" y1="82" x2="120" y2="82" stroke="rgba(167, 139, 250, 0.3)" strokeWidth="3"/>
              </g>
              
              <g transform="translate(140, 160)" opacity="0.7">
                <rect x="0" y="0" width="100" height="140" rx="12" fill="rgba(167, 139, 250, 0.4)" stroke="rgba(167, 139, 250, 0.8)" strokeWidth="2"/>
                <rect x="6" y="8" width="88" height="120" rx="8" fill="rgba(15, 23, 42, 0.8)" stroke="rgba(124, 58, 237, 0.6)" strokeWidth="1"/>
                <line x1="12" y1="16" x2="88" y2="16" stroke="rgba(167, 139, 250, 0.5)" strokeWidth="1"/>
                <line x1="12" y1="24" x2="88" y2="24" stroke="rgba(167, 139, 250, 0.4)" strokeWidth="1"/>
                <line x1="12" y1="32" x2="70" y2="32" stroke="rgba(167, 139, 250, 0.4)" strokeWidth="1"/>
              </g>
              
              <g transform="translate(220, 140)" opacity="0.7">
                <rect x="0" y="0" width="70" height="120" rx="10" fill="rgba(167, 139, 250, 0.4)" stroke="rgba(167, 139, 250, 0.8)" strokeWidth="2"/>
                <rect x="4" y="6" width="62" height="104" rx="6" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(124, 58, 237, 0.6)" strokeWidth="1"/>
                <rect x="18" y="6" width="34" height="8" rx="4" fill="rgba(0, 0, 0, 0.8)"/>
              </g>

              {/* Decorative dots */}
              <circle cx="100" cy="280" r="3" fill="rgba(167, 139, 250, 0.6)"/>
              <circle cx="130" cy="300" r="2" fill="rgba(167, 139, 250, 0.4)"/>
              <circle cx="280" cy="290" r="3" fill="rgba(167, 139, 250, 0.6)"/>
              <circle cx="310" cy="310" r="2" fill="rgba(167, 139, 250, 0.4)"/>
            </svg>
            
            <div className="graphic-circle"></div>
            <div className="graphic-elements"></div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="sobre"
        className="about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="about-container">
          <h2>Sobre Mim</h2>
          <div className="about-grid">
            <motion.div
              className="about-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Experiência</h3>
              <p>Mais de 10 anos em diversas funções administrativas, controle de qualidade e suporte operacional.</p>
            </motion.div>

            <motion.div
              className="about-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Valores</h3>
              <p>Comprometimento, responsabilidade e dedicação em todas as tarefas realizadas.</p>
            </motion.div>

            <motion.div
              className="about-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Objetivo</h3>
              <p>Contribuir com talento e força de vontade para o crescimento e sucesso da equipe.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Inicio;
