import React from "react";

const projects = [
  {
    title: "Plataforma Coletiva",
    description:
      "Landing page single page com React e Firestore. Cards dinâmicos, painel administrativo funcional e integração com botões de redirecionamento para comunidade e cursos.",
    technologies: "React, Firestore",
    link: "https://www.plataformacoletiva.com.br/",
  },
  {
    title: "Aracaju Turismo",
    description:
      "Aplicação web focada em turismo na cidade de Aracaju, com interface amigável e navegação intuitiva para explorar atrações turísticas.",
    technologies: "Next.js, React, Vercel",
    link: "https://aracaju-turismo-84pptdqye-anthonys-projects-b8d7e3fd.vercel.app/",
  },
  {
    title: "Lista de Tarefas",
    description:
      "Aplicação para gerenciamento de tarefas diárias, com interface limpa e funcionalidades para adicionar, editar e remover tarefas.",
    technologies: "Next.js, React, Vercel",
    link: "https://lista-de-tarefas-self.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Portfólio de Anthony E. N. Alves</h1>
        <p>Desenvolvedor Full Stack | Python, React, Next.js, TypeScript, PostgreSQL</p>
      </header>

      <section style={styles.projectsSection}>
        <h2>Projetos</h2>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
            <p style={styles.projectTech}>
              <strong>Tecnologias:</strong> {project.technologies}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Ver Projeto
            </a>
          </div>
        ))}
      </section>

      <footer style={styles.footer}>
        <h2>Contato</h2>
        <p>Telefone: (79) 9 9960-6943</p>
        <p>
          Email:{" "}
          <a
            href="mailto:anthonydev.contato@gmail.com"
            style={styles.footerLink}
          >
            anthonydev.contato@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/anthonyema260"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.footerLink}
          >
            github.com/anthonyema260
          </a>
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    padding: "30px 20px",
    boxSizing: "border-box",
    color: "#e0e0e0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    textAlign: "center",
    marginBottom: 50,
  },
  projectsSection: {
    marginBottom: 50,
  },
  projectCard: {
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 25,
    marginBottom: 25,
    boxShadow: "0 4px 12px rgba(0,0,0,0.7)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "default",
  },
  projectCardHover: {
    transform: "scale(1.02)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.9)",
  },
  projectTitle: {
    color: "#90caf9",
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 16,
    lineHeight: 1.5,
    marginBottom: 12,
  },
  projectTech: {
    fontStyle: "italic",
    color: "#b0bec5",
    marginBottom: 15,
  },
  link: {
    display: "inline-block",
    padding: "10px 18px",
    backgroundColor: "#42a5f5",
    color: "#fff",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: "600",
    boxShadow: "0 3px 8px rgba(66,165,245,0.6)",
    transition: "background-color 0.3s ease",
  },
  footer: {
    borderTop: "1px solid #333",
    paddingTop: 25,
    textAlign: "center",
    fontSize: 14,
    color: "#999",
  },
  footerLink: {
    color: "#90caf9",
    textDecoration: "none",
  },
};