# 🚀 Alphabet Mobility

> Transforming businesses with cutting-edge AI technology and software outsourcing solutions

[![Live Website](https://img.shields.io/badge/Live-alphabetmobility.org-blue?style=for-the-badge)](https://alphabetmobility.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Products](#products)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Contact](#contact)

---

## 🎯 About

**Alphabet Mobility** is a technology solutions company specializing in:

- 🤖 **AI & Machine Learning Development**
- 💻 **Software Outsourcing**
- 🌐 **Web & Mobile App Development**
- ☁️ **Cloud Solutions**
- ✅ **Quality Assurance**

We help forward-thinking companies transform their businesses through innovative technology solutions.

---

## ✨ Features

- **Modern UI/UX**: Built with React 19 and Framer Motion for smooth animations
- **Responsive Design**: Optimized for all devices using Tailwind CSS
- **Fast Performance**: Vite-powered development with optimized production builds
- **SEO Friendly**: Server-side rendering support
- **Type Safe**: Full TypeScript implementation
- **Component Library**: Comprehensive UI components using Radix UI

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19.2.0
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 4.1.14
- **Animations**: Framer Motion 12.23.24
- **UI Components**: Radix UI
- **Routing**: Wouter 3.3.5
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Framework**: Express 4.21.2
- **Build Tool**: Vite 7.1.9
- **Database ORM**: Drizzle ORM 0.39.3

### Development
- **Build Tool**: esbuild 0.25.0
- **Package Manager**: npm
- **Type Checking**: TypeScript
- **Bundler**: Vite

---

## 🎁 Products

### 1. C³ Bot
AI-powered chatbot with ChatGPT integration for 24/7 customer support.

### 2. USGT Toolkit
Universal Subtitle Generator Toolkit for multi-language video accessibility.

### 3. Talent Scan AI
AI-driven recruitment platform with resume parsing and candidate ranking.

### 4. Work Efficiency Tracker
Real-time productivity monitoring with AI-driven insights.

### 5. FresherReady
![FresherReady](attached_assets/fresher_logo.png)

Self-paced learning platform helping fresh graduates bridge the gap between education and employment.

**Features**:
- Technical training
- Communication coaching
- Aptitude preparation
- Direct job placement

### 6. Sreshta Edutech
![Sreshta Edutech](attached_assets/sreshta_edutech_logo.jpg)

Comprehensive educational platform with interactive courses and personalized learning paths.

**Features**:
- Self-paced learning
- Exam preparation
- Interactive content
- Real-time assessments
- Educator resources

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Darkunquie/AlphaMobility.git
cd AlphaMobility
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Run development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run dev:client       # Start Vite dev server only

# Production
npm run build           # Build for production
npm start              # Start production server

# Type Checking
npm run check          # Run TypeScript type checking

# Database
npm run db:push        # Push database schema changes
```

---

## 📦 Deployment

### Hostinger Deployment

The project is configured for easy deployment on Hostinger:

1. **Build the project**
```bash
npm run build
```

2. **Deploy files**
   - Upload contents of `dist/public/` to your hosting
   - Or use the included `DEPLOYMENT.md` guide for detailed instructions

### Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=production
PORT=5000
DATABASE_URL=your_database_url_here
```

---

## 📁 Project Structure

```
AlphaMobility/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utility functions
│   └── index.html
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── static.ts         # Static file serving
├── attached_assets/       # Images and assets
│   ├── fresher_logo.png
│   ├── sreshta_edutech_logo.jpg
│   └── generated_images/
├── dist/                 # Production build output
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Alphabet Mobility**

- 🌐 Website: [alphabetmobility.org](https://alphabetmobility.org)
- 📧 Email: info@alphabetmobility.com
- 💼 Careers: careers@alphabetmobility.com
- 📍 Location: Aditi Arcade, SAP Street, Ameerpet, Hyderabad, Telangana - 500038

### Office Hours
- Monday - Friday: 9:00 AM - 6:00 PM IST
- 24/7 Support Available

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with ❤️ by the Alphabet Mobility team
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

<p align="center">
  <strong>Ready to transform your business with AI?</strong><br>
  <a href="https://alphabetmobility.org/contact">Get Started Now</a>
</p>

---

<p align="center">Made with 💙 in India & USA</p>
