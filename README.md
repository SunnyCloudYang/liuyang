# Liu Yang - Professional Portfolio Website

A modern, responsive single-page profile website built with React and Vite.

## Features

- ✨ Modern and professional design with gradient hero section
- 📱 Fully responsive layout for all device sizes
- 🎨 Smooth animations and hover effects
- 📋 Comprehensive sections including:
  - Contact Information
  - Personal Profile
  - Career Goals
  - Education Timeline
  - Skills & Tools
  - Work Experience
  - Projects & Activities

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with animations and gradients
- **pnpm** - Fast, efficient package manager

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm

### Installation

```bash
# Navigate to the project directory
cd portfolio

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

The website will be available at `http://localhost:5173/`

### Build for Production

```bash
# Create a production build (outputs to docs/ folder)
pnpm build

# Preview the production build
pnpm preview
```

The static site will be built to the `docs` folder, ready for deployment. See `DEPLOYMENT.md` for detailed deployment instructions.

## Project Structure

```
portfolio/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Project dependencies
```

## Adding Your Images

### Profile Photo and School Badge

To add your profile image and university logo:

1. **Profile Photo**: Place your photo as `public/profile.jpg`
   - Recommended: 400x400px square image
   - Will display as a 140px circular photo on the left side of the header
   - Fallback: Shows "LY" initials if no image is provided

2. **School Badge**: Place the MUST logo as `public/must-logo.jpeg`
   - Recommended: 256x256px PNG or JPEG
   - Will display as a 100px circular badge on the right side of the header
   - Fallback: Gracefully hidden if no image is provided

### Project Feature Images

To add images for your projects:

3. **Douyin Project**: Place as `public/project-douyin.jpg`
   - Recommended: 400x240px (5:3 ratio)
   - Will display at 200x120px on the right side of the project card

4. **Charity Project**: Place as `public/project-charity.jpg`
   - Recommended: 400x240px (5:3 ratio)
   - Will display at 200x120px on the right side of the project card

See `PROJECT_IMAGES_GUIDE.md` for detailed instructions.

## Customization

To update the profile information:

1. Edit the content in `src/App.jsx`
2. Modify styles in `src/App.css` to change colors, fonts, or layout
3. The color scheme uses a professional black and white palette for a resume-like appearance

## Design Highlights

- **Hero Section**: Eye-catching gradient background with name and title
- **Timeline Design**: Visual timeline for education history
- **Card Layouts**: Modern card-based design for skills and projects
- **Hover Effects**: Interactive elements with smooth transitions
- **Mobile-First**: Responsive breakpoints at 768px and 480px

## License

© 2025 Liu Yang. All rights reserved.
