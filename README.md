# 🚀 Gabriel Rosati - Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)

**Portfolio pessoal com design cósmico e responsivo**

[🌐 **Live Demo**](https://gabriel-rosati.vercel.app/)

</div>

---

## ✨ **Sobre o Projeto**

Portfolio profissional desenvolvido com **React + Vite** e **Tailwind CSS**, apresentando um design moderno com tema cósmico, animações suaves e total responsividade. O projeto demonstra habilidades em desenvolvimento frontend, design UI/UX e boas práticas de código.

### 🎯 **Características Principais**

- 🌟 **Design Cósmico** - Tema espacial com estrelas animadas e gradientes
- 📱 **Totalmente Responsivo** - Otimizado para todos os dispositivos
- 🌙 **Tema Escuro/Claro** - Alternância automática com persistência
- ⚡ **Performance Otimizada** - Build otimizado com Vite
- 📧 **Formulário de Contato Funcional** - Integração com Formspree
- 📄 **Download de CVs** - Arquivos PDF em português e inglês
- 🔗 **Links Sociais** - LinkedIn e GitHub integrados

---

## 🛠️ **Tecnologias Utilizadas**

### **Frontend**
- **React 19.1.0** - Biblioteca JavaScript para interfaces
- **Vite 7.0.4** - Build tool e dev server
- **Tailwind CSS 4.1.11** - Framework CSS utilitário
- **Lucide React** - Ícones modernos e leves

### **Funcionalidades**
- **Formspree** - Backend para formulário de contato
- **React Router DOM** - Navegação SPA
- **Class Variance Authority** - Sistema de variantes de componentes

### **Ferramentas de Desenvolvimento**
- **ESLint** - Linting de código
- **TypeScript** - Tipagem estática (configurado)

---

## 🚀 **Como Executar**

### **Pré-requisitos**
- Node.js 18.x ou superior
- npm ou yarn

### **Instalação**

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/AboutME.git
cd AboutME/vite-project
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo desenvolvimento**
```bash
npm run dev
```

4. **Acesse o projeto**
```
http://localhost:5173
```

### **Build para Produção**
```bash
npm run build
```

### **Preview do Build**
```bash
npm run preview
```

---

## 📁 **Estrutura do Projeto**

```
vite-project/
├── public/
│   ├── CV-Gabriel-Rosati-PTBR.pdf
│   ├── CV-Gabriel-Rosati-EN.pdf
│   └── projects/
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx      # Seção "Sobre Mim"
│   │   ├── ContactSection.jsx    # Formulário de contato
│   │   ├── HeroSection.jsx       # Seção principal
│   │   ├── NavBar.jsx           # Navegação
│   │   ├── ProjectsSection.jsx   # Projetos em destaque
│   │   ├── SkillsSection.jsx     # Habilidades técnicas
│   │   ├── StarBackground.jsx    # Fundo animado
│   │   └── ThemeToggle.jsx       # Alternador de tema
│   ├── pages/
│   │   ├── Home.jsx             # Página principal
│   │   └── NotFound.jsx         # Página 404
│   ├── lib/
│   │   └── utils.js             # Utilitários
│   ├── assets/                  # Recursos estáticos
│   ├── App.jsx                  # Componente raiz
│   ├── main.jsx                 # Entry point
│   └── index.css                # Estilos globais
├── package.json
├── vite.config.js
└── vercel.json                  # Configuração Vercel
```

---

## 🎨 **Componentes Principais**

### **HeroSection**
- Apresentação inicial com animações de fade-in
- Call-to-action para projetos
- Indicador de scroll animado

### **AboutSection**
- Informações pessoais e profissionais
- Botões de download de CV (PT/EN)
- Cards de habilidades destacadas

### **SkillsSection**
- Grid de habilidades técnicas
- Filtros por categoria (Frontend, Backend, etc.)
- Animações de hover

### **ProjectsSection**
- Exibição de projetos em destaque
- Links para GitHub e demo
- Cards responsivos

### **ContactSection**
- Formulário funcional com Formspree
- Informações de contato
- Links para redes sociais

### **StarBackground**
- Fundo cósmico animado
- Estrelas e meteoros dinâmicos
- Performance otimizada

---

## 🌐 **Deploy**

### **Vercel (Recomendado)**
1. Conecte seu repositório GitHub
2. Selecione a pasta `vite-project`
3. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

### **Outras Plataformas**
- **Netlify** - Compatível com Vite
- **GitHub Pages** - Requer configuração adicional
- **Firebase Hosting** - Suporte completo

---

## 📧 **Configuração do Formulário**

O formulário de contato usa **Formspree**:

1. Crie uma conta em [formspree.io](https://formspree.io)
2. Crie um novo formulário
3. Substitua o ID no `ContactSection.jsx`:
```jsx
const FORMSPREE_ID = "seu-form-id-aqui";
```

---

## 🎯 **Personalização**

### **Cores e Tema**
Edite `src/index.css` para personalizar:
- Cores primárias e secundárias
- Gradientes cósmicos
- Animações de estrelas

### **Conteúdo**
Atualize os componentes para incluir:
- Suas informações pessoais
- Projetos reais
- Habilidades específicas
- Links de redes sociais

### **CVs**
Substitua os arquivos PDF em `public/`:
- `CV-Gabriel-Rosati-PTBR.pdf`
- `CV-Gabriel-Rosati-EN.pdf`

---

## 🔧 **Scripts Disponíveis**

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verificação de código
```

---

## 📱 **Responsividade**

O projeto é totalmente responsivo com breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### **Testado em:**
- ✅ iPhone SE (375px)
- ✅ iPad (768px)
- ✅ Desktop (1920px)
- ✅ Ultra-wide (2560px)

---

## 🚀 **Performance**

### **Lighthouse Score**
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### **Otimizações**
- Lazy loading de componentes
- Imagens otimizadas
- CSS purged automaticamente
- Bundle splitting

---

## 🤝 **Contribuição**

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 **Contato**

- **Email:** gtrosati@gmail.com
- **LinkedIn:** [Gabriel Rosati](https://www.linkedin.com/in/gabriel-tb-rosati/)
- **GitHub:** [MuketaUeda](https://github.com/MuketaUeda)

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

</div>
