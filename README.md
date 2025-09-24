# 🚀 Avi Tuchband - Portfolio

A modern, responsive portfolio website showcasing my journey as a **Fullstack & Cloud Engineer** with expertise in **AI/ML, Cloud Technologies, and Modern Web Development**.

## 🌟 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Projects Showcase](#projects-showcase)
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup)
- [Deployment](#deployment)
- [Contact](#contact)

## 🎯 About

This portfolio represents my professional journey and technical expertise:

- **5+ years** of software development experience
- **Fullstack & Cloud Engineer** specializing in Next.js, Spring Boot, and Python
- Strong background in **cloud-native architectures** (GCP, AWS, Kubernetes)
- Hands-on experience with **Generative AI, LLMs, and AI Agents**
- Currently working as **Backend & Infrastructure Engineer** at Bank Discount

## ✨ Features

### 🎨 Modern Design
- **Responsive Design** - Optimized for all devices
- **Dark/Light Mode** - Seamless theme switching
- **Smooth Animations** - Powered by Framer Motion
- **Modern UI Components** - Clean and professional interface

### 📱 Interactive Sections
- **Hero Section** - Dynamic introduction with animated elements
- **About Me** - Detailed professional background
- **Experience Timeline** - Complete career and education journey
- **Projects Showcase** - Interactive project cards with live demos
- **Skills Display** - Comprehensive technology stack
- **Contact Form** - Functional contact form with email integration

### 🔗 Enhanced Project Features
- **GitHub Integration** - Direct links to source code
- **Live Demos** - Links to deployed applications
- **Server/Client Labels** - Clear distinction for full-stack projects
- **Technology Tags** - Visual representation of tech stack used

## 🛠️ Tech Stack

### Frontend
- **Next.js 13.5** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Backend & Integration
- **React Email** - Email template system
- **Resend** - Email delivery service
- **Vercel** - Deployment platform

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🎮 Projects Showcase

### 🤖 AI & Machine Learning
- **AI RAG Agent** - Restaurant review Q&A with LangChain & ChromaDB
- **AI Search Agent** - Multi-source research with LangGraph & GPT-4o
- **MCP Bookmark Manager** - AI-integrated bookmark management

### 🌐 Full-Stack Applications
- **Employee Management System** - Complete CRUD dashboard
- **Question Trivia** - Real-time trivia application
- **Car Rental** - Modern car showcase with search capabilities

### ☁️ Cloud & Microservices
- **Transaction Bank Project** - Spring Boot microservice
- **Customer Complaints Management** - Java enterprise application
- **Calculator API** - Node.js API with JWT authentication

## 🚀 Getting Started

### Prerequisites

- **Node.js 22.x** (specified in `.nvmrc`)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Avitoohband/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:8000](http://localhost:8000)

## ⚙️ Environment Setup

### Node.js Version Management

This project uses **Node.js 22.x**. The version is specified in:
- `.nvmrc` - For nvm users
- `.node-version` - For nodenv/n users
- `package.json` - Engine specification

**Using nvm:**
```bash
nvm use
```

**Using nodenv:**
```bash
nodenv install
```

### Available Scripts

- `npm run dev` - Start development server on port 8000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** - Automatic deployments on push to main branch

The project includes `vercel.json` with Node.js 22.x runtime configuration.

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm run start
   ```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   ├── Experience.tsx     # Experience timeline
│   ├── Projects.tsx       # Projects showcase
│   └── ...
├── context/               # React contexts
├── lib/                   # Utility functions and data
│   ├── data.ts           # Portfolio data
│   ├── hooks.ts          # Custom hooks
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── .nvmrc               # Node.js version
├── vercel.json          # Vercel configuration
└── README.md            # This file
```

## 🎨 Customization

### Adding New Projects

1. **Add project images** to `/public/` directory
2. **Import images** in `lib/data.ts`
3. **Add project data** to `projectsData` array:

```typescript
{
  id: "unique-id",
  title: "Project Title",
  description: "Project description...",
  tags: ["Tech1", "Tech2"],
  imageUrl: projectImg,
  githubUrl: "https://github.com/username/repo", // Optional
  deploymentUrl: "https://your-demo.com", // Optional
}
```

### Updating Experience

Modify the `experiencesData` array in `lib/data.ts` to add new experiences or education.

### Customizing Styles

- **Global styles**: Edit `app/globals.css`
- **Component styles**: Modify Tailwind classes in components
- **Theme colors**: Update Tailwind configuration

## 📧 Contact Integration

The contact form uses:
- **React Email** for template rendering
- **Resend** for email delivery
- **React Hot Toast** for user feedback

Configure your `RESEND_API_KEY` in environment variables.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Avi Tuchband**
- 📧 Email: avitoohband@gmail.com
- 💼 LinkedIn: [linkedin.com/in/avituchband](https://www.linkedin.com/in/avituchband/)
- 🐱 GitHub: [github.com/Avitoohband](https://github.com/Avitoohband)
- 📍 Location: Tel Aviv, Israel

---

⭐ **If you found this portfolio inspiring, please give it a star!** ⭐

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS