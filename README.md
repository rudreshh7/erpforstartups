# ShipFastEnhance

A modern, full-stack Next.js application featuring secure authentication, database management, and intelligent image optimization. Built for speed, security, and scalability.

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-6.10.1-2D3748?style=for-the-badge&logo=prisma)
![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge)
![ImageKit](https://img.shields.io/badge/ImageKit-Optimization-FF6B6B?style=for-the-badge)

## 🚀 Features

### ⚡ **Core Functionality**

- **User Authentication** - Secure login/signup with Clerk
- **Post Management** - Create, view, and manage posts
- **Image Uploads** - Drag-and-drop image uploads with real-time progress
- **Image Optimization** - Automatic image compression and CDN delivery
- **Responsive Design** - Mobile-first, modern UI with Tailwind CSS

### 🔐 **Security & Performance**

- **JWT-based Authentication** - Secure user sessions with Clerk
- **Database Security** - Prisma ORM with PostgreSQL
- **Image Security** - Server-side upload authentication
- **CDN Delivery** - Global image delivery via ImageKit
- **Real-time Optimization** - On-the-fly image transformations

## 🛠️ Tech Stack

### **Frontend**

- **Next.js 15.3.4** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React features

### **Backend**

- **Next.js API Routes** - Serverless backend functions
- **Prisma ORM** - Type-safe database client
- **PostgreSQL** - Production-grade database
- **Server-side Authentication** - Secure API endpoints

### **Services**

- **Clerk** - Complete authentication solution
- **ImageKit** - Image optimization and CDN
- **Vercel** - Deployment and hosting (ready)

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** database
- **Clerk** account and API keys
- **ImageKit** account and API keys

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd shipfastenhance
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
SIGNING_SECRET="your_clerk_signing_secret"

# Database
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"

# ImageKit
IMAGEKIT_PUBLIC_KEY="your_imagekit_public_key"
IMAGEKIT_PRIVATE_KEY="your_imagekit_private_key"
IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/your_imagekit_id"
IMAGEKIT_ID="your_imagekit_id"
```

### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) View database in Prisma Studio
npx prisma studio
```

### 5. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application!

## 📁 Project Structure

```
shipfastenhance/
├── app/
│   ├── api/
│   │   ├── posts/           # Post management endpoints
│   │   ├── upload-auth/     # ImageKit authentication
│   │   └── webhooks/        # Clerk webhooks
│   ├── components/
│   │   ├── PostInputs.tsx   # Post creation with image upload
│   │   └── PostCard.tsx     # Post display component
│   ├── generated/
│   │   └── prisma/          # Generated Prisma client
│   ├── utils/
│   │   └── uploadHelpers.ts # Upload utility functions
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with Clerk
│   └── page.tsx             # Home page
├── lib/
│   └── prisma.ts            # Prisma client instance
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── migrations/          # Database migrations
├── public/                  # Static assets
├── .env                     # Environment variables
└── package.json
```

## 🎯 Key Features Deep Dive

### 🔐 **Authentication with Clerk**

- **Social Login** - Google, GitHub, and more
- **Email/Password** - Traditional authentication
- **Session Management** - Automatic token refresh
- **Protected Routes** - Middleware-based protection
- **User Management** - Complete user lifecycle

### 🗄️ **Database with Prisma**

- **Type Safety** - End-to-end type safety
- **Migration System** - Version-controlled schema changes
- **Relationship Management** - User-Post relationships
- **Query Optimization** - Efficient database queries
- **Development Tools** - Prisma Studio for database exploration

### 🖼️ **Image Optimization with ImageKit**

- **Smart Upload** - Secure, server-authenticated uploads
- **Real-time Progress** - Visual upload feedback
- **Automatic Optimization** - Compression and format conversion
- **CDN Delivery** - Global content delivery network
- **Transformations** - On-the-fly image resizing and effects
- **Error Handling** - Comprehensive upload error management

## 🔧 Configuration

### **Clerk Setup**

1. Create account at [clerk.com](https://clerk.com)
2. Create new application
3. Copy API keys to `.env`
4. Configure sign-in/sign-up methods

### **ImageKit Setup**

1. Create account at [imagekit.io](https://imagekit.io)
2. Get your URL endpoint and API keys
3. Add credentials to `.env`
4. Configure upload settings

### **Database Setup**

1. Create PostgreSQL database
2. Update `DATABASE_URL` in `.env`
3. Run migrations with `npx prisma migrate dev`

## 🚦 API Endpoints

### **Authentication**

- `GET /api/webhooks/clerk` - User sync webhook

### **Posts**

- `POST /api/posts` - Create new post with optional image
- `GET /api/posts` - Fetch user posts (via page component)

### **Upload**

- `GET /api/upload-auth` - Generate secure upload credentials

## 🎨 UI Components

### **PostInputs Component**

- Text input for title and content
- File upload with drag-and-drop
- Real-time upload progress
- Image preview functionality
- Error handling and validation

### **PostCard Component**

- Responsive post display
- Optimized image rendering
- Timestamp and metadata
- Error-resistant image loading

## 📱 Responsive Design

- **Mobile-first** approach
- **Tailwind CSS** for consistent styling
- **Flexible layouts** that adapt to all screen sizes
- **Touch-friendly** interfaces for mobile devices

## 🔒 Security Features

- **Server-side Authentication** - All sensitive operations verified
- **CORS Protection** - Properly configured cross-origin requests
- **Input Validation** - Client and server-side validation
- **Secure File Uploads** - Time-limited, signed upload URLs
- **Environment Variables** - Sensitive data properly isolated

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### **Environment Variables for Production**

Ensure all environment variables are set in your deployment platform:

- Clerk keys
- Database URL (use connection pooling for production)
- ImageKit credentials

## 🧪 Development

### **Available Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### **Database Commands**

```bash
npx prisma studio          # Open database browser
npx prisma migrate dev     # Create and apply migration
npx prisma migrate reset   # Reset database
npx prisma generate        # Regenerate client
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check individual service docs (Clerk, Prisma, ImageKit)
- **Issues**: Create GitHub issues for bugs and feature requests
- **Community**: Join relevant Discord/Slack communities

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Clerk** - Seamless authentication solution
- **Prisma** - Excellent database toolkit
- **ImageKit** - Powerful image optimization platform
- **Tailwind CSS** - Beautiful utility-first CSS framework

---

**ShipFastEnhance** - Built with ❤️ for modern web development
