# 🚀 ERP System for Tech Startups

A comprehensive Enterprise Resource Planning (ERP) system built specifically for tech startups. This modern, lightweight ERP solution helps growing companies streamline their operations without the complexity of enterprise-grade systems.

## ✨ Features

### 🏢 **Core Modules**

- **👥 Employee Management** - Manage team members, departments, and HR processes
- **🏗️ Project & Task Management** - Track projects with Kanban boards and progress monitoring
- **💰 Finance & Invoicing** - Handle invoices, expenses, and financial tracking
- **📊 CRM & Lead Management** - Manage customer relationships and sales pipeline
- **🏛️ Department Management** - Organize teams with role-based access control
- **🎯 Leave Management** - Employee time-off requests and approvals
- **📦 Inventory Management** - Track products, stock levels, and suppliers

### 🔧 **Technical Features**

- **Modern UI/UX** with Tailwind CSS and shadcn/ui components
- **Role-based Access Control** (Admin, Manager, Employee)
- **Real-time Dashboard** with business metrics and insights
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Type-safe** with TypeScript throughout
- **Database-first** approach with Prisma ORM

## 🛠️ Tech Stack

### Frontend

- **Next.js 15+** with App Router
- **React 19** with modern hooks
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **shadcn/ui** for components
- **Lucide React** for icons

### Backend

- **Next.js API Routes** for serverless functions
- **PostgreSQL** database
- **Prisma ORM** for database management
- **Zod** for data validation

### Authentication & Services

- **Clerk** for user authentication
- **ImageKit** for file uploads
- **Vercel** deployment ready

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd shipfastenhanced
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your credentials:

   - Clerk authentication keys
   - Database URL (PostgreSQL)
   - ImageKit credentials

4. **Set up the database**

   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📋 Environment Variables

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
SIGNING_SECRET=your_signing_secret

# Database
DATABASE_URL="postgresql://username:password@localhost:5432/erp_db"

# ImageKit (Optional)
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
IMAGEKIT_ID=your_imagekit_id
```

## 🏗️ Project Structure

```
├── app/
│   ├── api/                    # API routes
│   │   ├── departments/
│   │   ├── employees/
│   │   ├── projects/
│   │   ├── tasks/
│   │   └── invoices/
│   ├── components/             # React components
│   │   ├── layout/
│   │   └── ui/
│   ├── dashboard/              # Dashboard page
│   ├── employees/              # Employee management
│   ├── projects/               # Project management
│   ├── tasks/                  # Task management (Kanban)
│   ├── finance/                # Financial tracking
│   ├── invoices/               # Invoice management
│   ├── crm/                    # Customer relationship management
│   ├── departments/            # Department management
│   ├── leave-requests/         # Leave management
│   └── inventory/              # Inventory management
├── lib/
│   ├── prisma.ts              # Database client
│   ├── utils.ts               # Utility functions
│   └── validations.ts         # Zod schemas
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
└── components/ui/             # Reusable UI components
```

## 📊 Database Schema

The system includes comprehensive database models for:

- **Users & Authentication** - User profiles with roles
- **Organization Structure** - Departments and hierarchies
- **Project Management** - Projects, tasks, and assignments
- **HR Management** - Leave requests and payroll
- **Financial Management** - Invoices and transactions
- **CRM** - Leads, contacts, and activities
- **Inventory** - Items, stock movements, and vendors

## 🔐 Authentication & Authorization

- **Clerk Integration** for secure authentication
- **Role-based Access Control** with three levels:
  - **Admin** - Full system access
  - **Manager** - Department and project management
  - **Employee** - Limited access to personal data

## 🎨 UI/UX Features

- **Modern Design System** with consistent styling
- **Dark/Light Mode** support (ready)
- **Responsive Layout** for all screen sizes
- **Interactive Dashboard** with real-time metrics
- **Kanban Boards** for task management
- **Data Tables** with search and filtering
- **Modal Forms** for data entry
- **Toast Notifications** for user feedback

## 📈 Business Metrics

The dashboard provides key insights:

- Employee count and department distribution
- Project progress and completion rates
- Financial metrics (income, expenses, profit)
- Task completion and overdue tracking
- Lead conversion and sales pipeline
- Inventory levels and stock alerts

## 🔄 API Endpoints

### Core Resources

- `/api/employees` - Employee CRUD operations
- `/api/departments` - Department management
- `/api/projects` - Project lifecycle management
- `/api/tasks` - Task creation and updates
- `/api/invoices` - Invoice generation and tracking
- `/api/leads` - CRM lead management
- `/api/transactions` - Financial transactions

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push

### Other Platforms

- **Netlify** - Use adapter for Next.js
- **Railway** - Database and app hosting
- **PlanetScale** - Serverless MySQL database

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- Open an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Built with ❤️ for tech startups who want to scale efficiently**
