# Modern Portfolio Website

A sleek, modern personal portfolio website built with React.js, TypeScript, TailwindCSS, and Framer Motion. Inspired by the design aesthetics of Cursor.dev and Apple.com.

## 🚀 Features

- **Modern Design**: Clean, minimal design with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Modular Components**: Well-structured, reusable components
- **TypeScript**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **ShadCN UI** - Modern UI components (inspired design)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx  # Sticky navigation with theme toggle
│   └── ProfileCard.tsx # Main profile card component
├── sections/           # Page sections
│   ├── Landing.tsx     # Hero section with profile
│   ├── Projects.tsx    # Featured projects
│   ├── Experience.tsx  # Professional experience timeline
│   └── Achievements.tsx # Awards and certifications
├── utils/              # Utility functions
│   ├── cn.ts          # Class name utility
│   └── theme.tsx      # Theme context and provider
├── App.tsx            # Main app component
├── index.tsx          # Entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Design Features

### Landing Page
- Hero section with animated title
- Profile card with social links
- Gradient backgrounds and modern typography

### Navigation
- Sticky navigation bar
- Smooth scroll to sections
- Active section highlighting
- Mobile-responsive menu
- Theme toggle button

### Sections
- **Projects**: Grid layout with hover effects
- **Experience**: Timeline design with alternating layout
- **Achievements**: Card-based layout with statistics

### Animations
- Page load animations
- Scroll-triggered animations
- Hover effects on interactive elements
- Smooth transitions between sections

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 🎯 Customization

### Personal Information
Update the profile information in `src/sections/Landing.tsx`:
```typescript
<ProfileCard
  name="Your Name"
  title="Your Title"
  description="Your description"
  github="https://github.com/yourusername"
  linkedin="https://linkedin.com/in/yourusername"
  email="your.email@example.com"
  website="https://yourwebsite.com"
/>
```

### Projects
Add your projects in `src/sections/Projects.tsx`:
```typescript
const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project',
    description: 'Project description',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/yourusername/project',
    live: 'https://demo.example.com'
  }
];
```

### Experience
Update your experience in `src/sections/Experience.tsx`:
```typescript
const experiences: Experience[] = [
  {
    id: '1',
    title: 'Your Position',
    company: 'Company Name',
    location: 'Location',
    period: '2020 - Present',
    description: ['Achievement 1', 'Achievement 2'],
    technologies: ['Tech 1', 'Tech 2']
  }
];
```

### Achievements
Add your achievements in `src/sections/Achievements.tsx`:
```typescript
const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Your Achievement',
    organization: 'Organization',
    year: '2023',
    description: 'Achievement description',
    type: 'award'
  }
];
```

## 🎨 Styling

The project uses TailwindCSS with custom CSS variables for theming. The color scheme supports both light and dark modes:

- **Primary**: Blue gradient (`from-blue-600 to-purple-600`)
- **Background**: White in light mode, dark gray in dark mode
- **Text**: Dark gray in light mode, light gray in dark mode

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style
- TypeScript for type safety
- Functional components with hooks
- Consistent naming conventions
- Modular component structure

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using React, TypeScript, and TailwindCSS 