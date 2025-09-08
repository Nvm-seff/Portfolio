# 🚀 AI/ML Engineer Portfolio

A modern, cutting-edge professional portfolio for AI/ML Engineers built with Next.js. Features include 3D animations, interactive elements, and a futuristic design that showcases expertise in AI, Machine Learning, Blockchain, and Web3 technologies.

## ✨ Features

- **🎨 Futuristic Design**: Modern UI with neon accents, glassmorphism effects, and smooth animations
- **⚡ Next.js 14**: Latest React framework with App Router and TypeScript
- **📧 EmailJS Integration**: Contact form handling without backend dependencies
- **🎭 Framer Motion**: Smooth animations and micro-interactions
- **🎨 Tailwind CSS**: Utility-first CSS framework with custom design system
- **📱 Responsive**: Mobile-first design that works on all devices
- **🔧 3D Graphics**: Three.js integration for immersive experiences
- **📊 Interactive Components**: Animated skill bars, project showcases, and more
- **📅 Calendly Integration**: Direct meeting scheduling for potential clients

## 🏗️ Architecture

```
portfolio/
├── app/                    # Next.js app directory
│   ├── components/        # React components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Shared components
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills showcase
│   ├── Projects.tsx      # Projects portfolio
│   ├── Contact.tsx       # Contact form with Calendly
│   ├── Navigation.tsx    # Navigation bar
│   └── AnimatedBackground.tsx # 3D background
├── package.json           # Node.js dependencies
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Frontend Setup

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Contact Form Setup (Optional)

1. **Set up EmailJS:**
   - Create account at [EmailJS](https://www.emailjs.com/)
   - Create email service and template
   - Get your Service ID, Template ID, and Public Key

2. **Configure environment variables:**
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username
   ```

3. **Set up Calendly:**
   - Create account at [Calendly](https://calendly.com/)
   - Create your meeting types
   - Update the Calendly URL in the contact section

## 🎨 Customization

### Personal Information

Update the following files with your information:

- **Hero Section**: `components/Hero.tsx` - Change name and description
- **About Section**: `components/About.tsx` - Update personal details and stats
- **Skills Section**: `components/Skills.tsx` - Modify skill levels and categories
- **Projects Section**: `components/Projects.tsx` - Add your projects
- **Contact Section**: `components/Contact.tsx` - Update contact details

### Styling

- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Animations**: Adjust animation parameters in component files
- **Layout**: Customize spacing and grid layouts in component classes

### Backend Data

- **Projects**: Update mock data in `backend/main.py`
- **Skills**: Modify skills data structure
- **API Endpoints**: Add new endpoints as needed

## 🛠️ Development

### Available Scripts

```bash
# Frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Backend
cd backend
python main.py       # Start development server
```

### Code Quality

- **Frontend**: ESLint + Prettier configuration
- **Backend**: Black, isort, flake8, and mypy for Python
- **TypeScript**: Strict type checking enabled

## 🚀 Deployment

### Frontend (Vercel Recommended)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   npx vercel --prod
   ```

### Backend (Multiple Options)

1. **Railway**: Easy deployment with automatic scaling
2. **Render**: Free tier available with automatic deployments
3. **Heroku**: Traditional platform with good free tier
4. **DigitalOcean**: VPS deployment with full control

### Environment Variables

Create `.env.local` for frontend and `.env` for backend:

```bash
# Frontend (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:8000

# Backend (.env)
DATABASE_URL=postgresql://user:password@localhost/dbname
SECRET_KEY=your-secret-key
CORS_ORIGINS=http://localhost:3000,https://yourdomain.com
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load as needed
- **Optimized Animations**: Hardware-accelerated CSS animations
- **Minimal Bundle**: Tree-shaking and dead code elimination

## 🔧 Advanced Features

### 3D Graphics Integration

The portfolio includes Three.js integration for:

- Interactive 3D backgrounds
- Animated geometric shapes
- Particle systems
- WebGL-powered effects

### Animation System

Built with Framer Motion for:

- Page transitions
- Scroll-triggered animations
- Micro-interactions
- Performance-optimized animations

### API Integration

FastAPI backend provides:

- RESTful API endpoints
- Automatic API documentation
- CORS support
- Request validation
- Error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js Team** for the amazing React framework
- **FastAPI** for the high-performance Python web framework
- **Framer Motion** for smooth animations
- **Tailwind CSS** for the utility-first CSS framework
- **Three.js** for 3D graphics capabilities

## 📞 Support

If you have any questions or need help:

- Create an issue in this repository
- Check the [FastAPI documentation](https://fastapi.tiangolo.com/)
- Review the [Next.js documentation](https://nextjs.org/docs)

---

**Built with ❤️ and modern web technologies**
