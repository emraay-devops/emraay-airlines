# Emraay Airlines - Luxury Private Jet Charter

A stunning NextJS application showcasing a premium private jet charter service. Built with modern web technologies and featuring a luxurious, professional design.

## ✈️ Features

### **Homepage**
- **Hero Section**: Stunning private jet imagery with compelling call-to-action
- **Fleet Showcase**: Display of premium aircraft with specifications
- **Services Overview**: Key service highlights with icons
- **Professional Navigation**: Clean, modern navigation with backdrop blur
- **Responsive Design**: Optimized for all device sizes

### **Booking System**
- **Interactive Form**: Comprehensive flight booking form
- **Aircraft Selection**: Choose from different private jet options
- **Contact Information**: Secure customer data collection
- **Special Requests**: Custom requirements handling
- **Process Overview**: Clear booking workflow explanation

### **Design Elements**
- **Luxury Aesthetics**: Premium color scheme and typography
- **High-Quality Images**: Professional private jet photography
- **Smooth Animations**: Subtle hover effects and transitions
- **Modern UI Components**: Clean, professional interface elements
- **Accessibility**: Proper contrast and keyboard navigation

## 🚀 Technology Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Icons**: Heroicons React
- **Images**: Next.js Image Optimization
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd emraay-airlines
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### **Color Palette**
- **Primary**: Blue gradients (slate-900 → blue-900 → slate-800)
- **Accent**: Blue-600 for CTAs and highlights
- **Text**: White and blue-200 for readability
- **Backgrounds**: Semi-transparent white overlays

### **Typography**
- **Headings**: Bold, large sizes for impact
- **Body**: Clean, readable font sizes
- **Hierarchy**: Clear visual hierarchy with size and weight

### **Components**
- **Cards**: Rounded corners with backdrop blur
- **Buttons**: Gradient backgrounds with hover states
- **Forms**: Clean inputs with proper focus states
- **Navigation**: Transparent with backdrop blur

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🖼️ Image Assets

All images are optimized using Next.js Image component:
- **private-jet-1.jpg**: Hero section aircraft
- **private-jet-2.jpg**: Bombardier Global 7500
- **private-jet-3.jpg**: Cessna Citation X
- **luxury-interior.jpg**: Premium cabin interior
- **emraay-airlines-logo.svg**: Company logo

## 🔧 Customization

### **Adding New Aircraft**
1. Add aircraft data to the fleet section in `page.tsx`
2. Include new images in `/public/images/`
3. Update booking form options in `book/page.tsx`

### **Modifying Services**
1. Edit the services section in `page.tsx`
2. Update icons and descriptions as needed
3. Maintain consistent styling with existing components

### **Branding Changes**
1. Update logo in `/public/images/emraay-airlines-logo.svg`
2. Modify color scheme in Tailwind classes
3. Update metadata in `layout.tsx`

## 📋 Project Structure

```
emraay-airlines/
├── public/
│   └── images/           # Image assets
├── src/
│   ├── app/
│   │   ├── book/         # Booking page
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Homepage
│   └── components/       # Reusable components
├── package.json
└── README.md
```

## 🎯 Learning Objectives

This project demonstrates:
- **Next.js App Router**: Modern routing and layout system
- **TypeScript**: Type-safe React development
- **Tailwind CSS**: Utility-first styling approach
- **Responsive Design**: Mobile-first design principles
- **Component Architecture**: Reusable, maintainable code
- **Image Optimization**: Next.js image handling
- **Form Handling**: React form state management
- **Modern UI/UX**: Professional design patterns

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### **Other Platforms**
- **Netlify**: Static site deployment
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## 📞 Support

For questions or issues:
- **Email**: info@emraayairlines.com
- **Phone**: +1 (555) 123-4567
- **Emergency**: +1 (555) 911-HELP

## 📄 License

© 2024 Emraay Airlines. All rights reserved.

---

**Built with ❤️ for luxury aviation enthusiasts**