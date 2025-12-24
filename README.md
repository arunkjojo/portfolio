# Arun Jojo - Senior Software Engineer Portfolio

Are dynamic, high-performance portfolio website built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS v4**. This project showcases a modern, dark-themed aesthetic with glassmorphism effects and fluid animations.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-purple?style=for-the-badge&logo=framer)

---

## 🎨 Visual Summary & Design System

### Aesthetic: "Glass & Void"
The design follows a high-contrast dark theme (`bg-slate-950`) accented with vibrant gradients and glassmorphism.

*   **Primary Colors**: Slate 950 (Background), Blue 500/600 (Accents), Purple 500 (Gradients).
*   **Typography**: `Inter` font family for clean, geometric readability.
*   **Visual Effects**:
    *   **Glassmorphism**: Translucent cards (`bg-white/5 backdrop-blur-lg`) with subtle borders.
    *   **Glow**: Background radial gradients and blur effects to create depth.
    *   **Motion**: Smooth element entry and hover states using `framer-motion`.

### Key Design Tokens
Most tokens are handled dynamically via Tailwind utility classes, but consistent patterns include:
*   `glass-card`: `bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl`
*   `glass-nav`: `bg-slate-950/70 backdrop-blur-md border-b border-white/10`

---

## 🏗️ Implementation & Architecture

This project is built on the **Next.js App Router** architecture, emphasizing React Server Components (RSC) where possible and Client Components for interaction.

### Modular Directory Structure
```
/app
├── layout.tsx         # Root layout (Metadata, Font, Navbar, Footer)
├── page.tsx           # Home page assembling sections (Hero, About, etc.)
├── global.css         # Tailwind v4 configuration & global styles
├── projects/
│   ├── page.tsx       # Full projects list
│   └── [slug]/        # Dynamic Project Case Study (SSG/SSR)
└── resume/
    └── page.tsx       # PDF Resume Viewer
```

### Components (`/components`)
*   **Sections**: Modular page sections (`Hero`, `About`, `Projects`, `Skills`, `Contact`) for easy reorganization.
*   **UI Elements**: Reusable atoms like buttons and cards are embedded within sections or `ui/` (future scalable).
*   **Navbar/Footer**: Global navigation components.

### Data Management (`/constants`)
All content is decoupled from components. This allows for easy updates without touching the codebase.
*   `content.ts`: Site-wide strings (Hero title, About text).
*   `projects.ts`: Array of project objects (title, slug, tags, images).
*   `skills.ts`: Categorized skill lists.
*   `resume.ts`: Resume configuration.

---

## 🚀 Features

*   **Dynamic Routing**: Project details pages are generated dynamically (`/projects/[slug]`) based on the data constants.
*   **Responsive Design**: Fully responsive layout from mobile to large desktop screens.
*   **Performance**:
    *   Optimized Images (`next/image`).
    *   Code Splitting (Next.js default).
    *   Server Side Rendering (SSR) for initial load.
*   **Animations**: Scroll-triggered entrance animations for sections and cards.
*   **Resume Viewer**: Integrated PDF viewer with fallback and direct download.

---

## 🛠️ Getting Started

### Prerequisites
*   Node.js 18+
*   npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/arunkjojo/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

4.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

---

## 📄 License

[MIT](LICENSE) © 2025 Arun Jojo
