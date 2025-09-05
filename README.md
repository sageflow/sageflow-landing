# SageFlow Landing Page

A modern, responsive landing page for SageFlow - a comprehensive platform empowering students to build healthy habits and mental wellness.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fast Loading**: Optimized for performance with minimal dependencies
- **Accessible**: Built with accessibility best practices
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Sections

1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Main value proposition with call-to-action buttons
3. **Why Choose SageFlow**: Overview of the platform benefits
4. **Features**: Detailed showcase of 9 key features:
   - Mental Health Support
   - Habit Tracking
   - Academic Profiling
   - Assessment Suite
   - Safe Reporting
   - Weekly Wellness Checks
   - Daily Learning Engagement
   - Personalized Daily Routines
   - Family Integration
5. **Call-to-Action**: Conversion section for different user types
6. **Footer**: Links and company information

## Technology Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with Flexbox and Grid
- **Custom React Hooks**: Reusable logic for scrolling, animations, and interactions
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family
- **Performance Optimizations**: React.memo, Intersection Observer API, throttled scroll events

## Deployment to GitHub Pages

### Option 1: Using GitHub Web Interface

1. Create a new repository on GitHub
2. Upload all files (`index.html`, `styles.css`, `script.js`, `README.md`)
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" as source
5. Choose "main" branch and "/ (root)" folder
6. Click Save

### Option 2: Using Git Commands

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: SageFlow landing page"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/sageflow-landing.git

# Push to GitHub
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
```

### Option 3: Using GitHub CLI

```bash
# Create repository and push
gh repo create sageflow-landing --public --push

# Enable GitHub Pages
gh api repos/:owner/:repo/pages -X POST -f source.branch=main -f source.path=/
```

## Local Development

To run the React application locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Customization

### Colors
The site uses CSS custom properties for easy theming. Main colors:
- Primary: Orange gradient (#f59e0b to #f97316)
- Secondary: Purple gradient (#8b5cf6 to #7c3aed)
- Accent: Blue (#6366f1)

### Fonts
Using Inter font family from Google Fonts. To change fonts, update the Google Fonts link in `index.html` and the font-family in `styles.css`.

### Content
All content can be easily modified in the React components located in `src/components/`. Each section is a separate component for better maintainability.

### React Features
- **Custom Hooks**: `useRipple`, `useScrollSpy`, `useSmoothScroll` for reusable functionality
- **Performance Optimizations**: Components use React.memo where appropriate
- **Error Boundaries**: Graceful error handling with fallback UI
- **Accessibility**: ARIA labels and semantic HTML throughout
- **Modern React Patterns**: Functional components with hooks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images and icons
- Minimal JavaScript
- CSS animations using hardware acceleration
- Lazy loading for better performance

## License

This project is licensed under the MIT License.

## Contact

For questions or support regarding this landing page, please contact the development team.
