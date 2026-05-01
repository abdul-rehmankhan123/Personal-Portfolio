# 🚀 Portfolio - React + Vite + Tailwind CSS

Your portfolio has been successfully converted from vanilla HTML/CSS/JS to **React with Vite and Tailwind CSS**!

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

This will start the Vite development server, typically at `http://localhost:5173`

### 3. Build for Production
```bash
npm build
```

The optimized build will be generated in the `dist/` folder.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Internship.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles (Tailwind + custom CSS)
├── assets/                  # Images and resources
│   ├── images/
│   ├── icons/
│   └── resume/
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration
```

## 🎨 Styling

- **Tailwind CSS** for utility-based styling
- **Global CSS** in `src/index.css` for custom styles and animations
- **Component-level styling** using Tailwind classes

### Tailwind Classes Used
- Glass morphism effects: `.glass-card`
- Scroll reveal animations: `.scroll-reveal`
- Button styles: `.btn`, `.btn-primary`, `.btn-outline`
- Form styles: `.form-input`, `.form-textarea`

## 🔄 State Management

React hooks are used for state management:
- `useState` for form inputs and menu state
- `useEffect` for scroll effects and animations

## 📝 Making Changes

### Updating Component Data
Each component has its data defined at the top:

**Skills Component** (`src/components/Skills.jsx`):
```javascript
const skillsData = [
  { icon: '🐍', name: 'Python' },
  // ... more skills
]
```

**Projects Component** (`src/components/Projects.jsx`):
```javascript
const projectsData = [
  {
    id: 1,
    title: 'Project Name',
    description: '...',
    image: 'path/to/image',
    tags: ['React', 'Vite']
  },
  // ... more projects
]
```

Update these data objects to add/modify content.

### Adding New Components

1. Create a new file in `src/components/` (e.g., `NewComponent.jsx`)
2. Write your component
3. Import and use it in `src/App.jsx`

```javascript
import NewComponent from './components/NewComponent'

export default function App() {
  return (
    <div>
      {/* ... other components */}
      <NewComponent />
    </div>
  )
}
```

## 🔗 Contact Form Integration

The contact form currently shows a mock success message. To enable real email sending, integrate one of these services:

1. **EmailJS** - Client-side email sending
2. **FormSubmit.co** - Free form submission service
3. **Your own backend API**

Example with EmailJS:
```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  await emailjs.send('service_id', 'template_id', formData);
  // Show success message
};
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Tailwind's `md:` prefix is used for responsive styling.

## 🎭 Features

✅ Smooth navigation and scrolling
✅ Scroll reveal animations
✅ Responsive design
✅ Glass morphism effects
✅ Mobile hamburger menu
✅ Contact form with validation
✅ Fast performance with Vite
✅ Modern React best practices

## 📦 Dependencies

- **react** - UI library
- **react-dom** - React rendering
- **tailwindcss** - Utility-first CSS framework
- **vite** - Lightning-fast build tool

## 🚢 Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
# Deploy the `dist` folder to Netlify
```

### Option 3: GitHub Pages
Configure in `vite.config.js`:
```javascript
export default {
  base: '/portfolio/',
  // ...
}
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Font Awesome Icons](https://fontawesome.com)

## ✨ What's Changed

### From Vanilla JS:
- ❌ Manual DOM manipulation
- ❌ Direct event listeners
- ❌ Vanilla CSS classes

### To React:
- ✅ Component-based architecture
- ✅ State management with hooks
- ✅ Tailwind CSS utilities
- ✅ Better code organization
- ✅ Faster development experience

---

**Happy coding! 🎉**
