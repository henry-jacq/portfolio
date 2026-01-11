# Personal Portfolio

A modern, animated portfolio website built with React and Vite. Features a dark gradient theme, smooth scroll animations, and a clean single-page design to showcase projects, skills, and professional experience.

## ✨ Features

- 🎨 Dark gradient theme (indigo/purple) with glassmorphism effects
- 📱 Fully responsive design with mobile navigation menu
- 🎭 Smooth scroll animations powered by Framer Motion
- 🚀 Lightning-fast development with Vite 7 and HMR
- 🎯 Dynamic SEO with environment-based meta tags
- 📊 Interactive timeline components for experience and education
- 💼 Project showcase with image cards and external links
- 📧 Integrated contact form via Formspree
- 🔗 Social media links (GitHub, LinkedIn, Twitter/X, Medium, Upwork)
- 🎨 Skill visualization with animated progress bars

## 🛠️ Tech Stack

- **React 19** - UI library with latest features
- **Vite 7** - Next-generation build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Production-ready animation library
- **React Icons** - Popular icon library (Simple Icons)
- **Lucide React** - Beautiful icon set for UI elements
- **Formspree** - Form backend for contact submissions

## 📋 Prerequisites

- **Node.js** (version 18 or higher recommended)
- **npm** (or yarn/pnpm)
- **Formspree account** (free tier available for contact form)

## 🚀 Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

Or if you prefer using yarn or pnpm:
```bash
yarn install
# or
pnpm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```bash
cp .env.example .env
```

Then edit `.env` with your personal information:

```env
VITE_NAME=Your Name
VITE_ROLE=Your Role/Title
VITE_EMAIL=your.email@example.com
VITE_LOCATION=Your City, Country
VITE_GITHUB=https://github.com/yourusername
VITE_LINKEDIN=https://linkedin.com/in/yourusername
VITE_TWITTER=https://twitter.com/yourusername
VITE_MEDIUM=https://yourusername.medium.com
VITE_UPWORK=https://www.upwork.com/freelancers/~yourprofileid
VITE_FORMSPREE_KEY=your_formspree_form_id
```

**Note:** Get your Formspree key by creating a free account at [formspree.io](https://formspree.io) and creating a new form.

### 3. Run the Development Server

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173` (or the port shown in your terminal).

Open your browser and navigate to the URL to see your portfolio!

## 📜 Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement (default: http://localhost:5173)
- **`npm run build`** - Build the project for production (outputs to `dist/` folder)
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   └── image.svg        # Hero section profile image
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ProjectCard.jsx   # Project display card component
│   │   ├── TimelineDot.jsx   # Timeline marker component
│   │   ├── TimelineItem.jsx  # Timeline entry component
│   │   └── TimelineLine.jsx  # Timeline vertical line
│   ├── config/
│   │   ├── profile.js        # Personal info (from env variables)
│   │   ├── projects.js       # Project data array
│   │   ├── skills.js         # Skills grouped by category
│   │   └── experience.js     # Work experience & education
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles & Tailwind imports
├── .env                      # Environment variables (create this)
├── .env.example              # Environment variables template
├── .gitignore
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── postcss.config.cjs        # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── vite.config.js            # Vite configuration
```

## 🎨 Customization Guide

### Update Personal Information

Edit the `.env` file with your details. The app reads from these environment variables at build time.

### Modify Projects

Edit `src/config/projects.js`:

```javascript
export const PROJECTS = [
  {
    title: "Project Name",
    description: "Brief description",
    tags: ["Tag1", "Tag2"],
    links: [
      { label: "GitHub", url: "https://github.com/..." },
      { label: "Live Demo", url: "https://..." }
    ],
    imageUrl: "https://..."
  }
];
```

### Update Skills

Edit `src/config/skills.js` to add/remove skill categories and items:

```javascript
export const SKILLS = [
  {
    category: "Category Name",
    items: [
      { name: "Skill Name", level: 85 } // level: 0-100
    ]
  }
];
```

### Modify Experience & Education

Edit `src/config/experience.js` to update work history and education:

```javascript
export const EXPERIENCE = {
  work: [
    {
      company: "Company Name",
      position: "Your Position",
      duration: "Start - End",
      description: "What you did..."
    }
  ],
  education: [
    {
      institution: "School Name",
      degree: "Degree Name",
      duration: "Start - End",
      description: "Additional info..."
    }
  ]
};
```

### Change Theme Colors

The color scheme uses Tailwind classes in `src/App.jsx`. Key colors:
- Background gradient: `from-[#0B0F1A] via-[#111827] to-[#1E1B4B]`
- Primary accent: `indigo-500`, `indigo-600`
- Secondary accent: `purple-500`
- Text: `text-[#E5E7EB]`, `text-gray-400`

### Customize Animations

Animation variants are defined using Framer Motion in `src/App.jsx`:
- `fadeUp` - Main fade-in and slide-up animation
- Adjust `duration`, `ease`, and `transition` properties as needed

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

This will create a `dist/` folder with all the optimized files ready for deployment.

To preview the production build:

```bash
npm run preview
```

## 🚢 Deployment

The portfolio can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in project settings
4. Deploy

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in site settings

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
3. Run `npm run deploy`

**Important:** Remember to add all environment variables to your hosting platform's settings before deploying.

## 🔧 Key Features Explained

### Contact Form Integration
The contact form uses Formspree for backend handling. Form submissions are sent to your Formspree endpoint without requiring a custom backend. States handled: idle, sending, success, error.

### Smooth Scroll Navigation
Navigation links use `scrollIntoView` with smooth behavior. Mobile menu automatically closes on navigation.

### SEO Optimization
Dynamic document title injection based on profile name and role from environment variables.

### Responsive Design
- Mobile: Hamburger menu, stacked layout
- Tablet: 2-column grid for projects and skills
- Desktop: Full navigation bar, optimized spacing

## 📝 License

This project is open source and available for personal and commercial use. Feel free to customize it for your own portfolio.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit a pull request.

---

Built with ❤️ using React, Vite, and Tailwind CSS
