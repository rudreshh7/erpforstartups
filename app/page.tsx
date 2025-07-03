import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavBar } from "@/components/landing/tubelight-navbar";
import {
  BarChart3,
  Users,
  CheckSquare,
  DollarSign,
  Building2,
  Package,
} from "lucide-react";

export default async function Home() {
  const user = await currentUser();

  // Redirect authenticated users to dashboard
  if (user) {
    redirect("/dashboard");
  }

  const navItems = [
    { name: "Home", url: "#home", icon: "home" },
    { name: "Features", url: "#features", icon: "check-square" },
    { name: "About", url: "#about", icon: "info" },
    { name: "Contact", url: "#contact", icon: "mail" },
  ];

  const features = [
    {
      icon: Users,
      title: "Employee Management",
      description:
        "Manage your team, departments, and HR processes efficiently",
    },
    {
      icon: CheckSquare,
      title: "Project & Task Management",
      description:
        "Track projects and tasks with Kanban boards and progress monitoring",
    },
    {
      icon: DollarSign,
      title: "Finance & Invoicing",
      description:
        "Handle invoices, expenses, and financial tracking seamlessly",
    },
    {
      icon: BarChart3,
      title: "CRM & Analytics",
      description:
        "Manage leads, customer relationships, and business insights",
    },
    {
      icon: Building2,
      title: "Departments & Roles",
      description:
        "Organize teams by departments with role-based access control",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track products, stock levels, and vendor relationships",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* TubeLight Navbar */}
      <NavBar items={navItems} showAuth={true} />

      {/* Hero Section */}
      <div id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              ERP System for
              <span className="text-blue-600"> Tech Startups</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your startup operations with our comprehensive ERP
              solution. Manage employees, projects, finances, and growth - all
              in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        id="features"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything Your Startup Needs
          </h2>
          <p className="text-xl text-gray-600">
            Built specifically for growing tech companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built for Modern Startups
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our ERP system is designed specifically for tech startups, providing
            all the tools you need to scale efficiently and manage your growing
            team and operations.
          </p>
        </div>
      </div>

      {/* Contact/CTA Section */}
      <div id="contact" className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Scale Your Startup?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of tech startups using our ERP system to streamline
            operations
          </p>
          <p className="text-lg text-blue-100">
            Get started by signing up in the navigation above
          </p>
        </div>
      </div>
    </div>
  );
}
