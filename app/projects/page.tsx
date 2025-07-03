"use client";

import { useState } from "react";
import { ERPLayout } from "@/components/layout/erp-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  Calendar,
  Users,
  DollarSign,
  MoreVertical,
} from "lucide-react";

// Mock data
const projects = [
  {
    id: 1,
    name: "Mobile App Redesign",
    description: "Complete overhaul of the mobile application UI/UX",
    status: "IN_PROGRESS",
    budget: 500000,
    startDate: "2024-01-15",
    endDate: "2024-03-30",
    members: ["Priya Sharma", "Amit Patel", "Sneha Reddy"],
    tasksCompleted: 12,
    totalTasks: 20,
  },
  {
    id: 2,
    name: "API Integration",
    description: "Integrate third-party payment and notification APIs",
    status: "PLANNING",
    budget: 200000,
    startDate: "2024-02-01",
    endDate: "2024-04-15",
    members: ["Rajesh Kumar", "Amit Patel"],
    tasksCompleted: 3,
    totalTasks: 15,
  },
  {
    id: 3,
    name: "Website Launch",
    description: "Launch new company website with modern design",
    status: "COMPLETED",
    budget: 150000,
    startDate: "2023-10-01",
    endDate: "2023-12-15",
    members: ["Sneha Reddy", "Priya Sharma"],
    tasksCompleted: 25,
    totalTasks: 25,
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "PLANNING":
      return "bg-yellow-100 text-yellow-800";
    case "IN_PROGRESS":
      return "bg-blue-100 text-blue-800";
    case "COMPLETED":
      return "bg-green-100 text-green-800";
    case "ON_HOLD":
      return "bg-gray-100 text-gray-800";
    case "CANCELLED":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusText = (status: string) => {
  return status
    .replace("_", " ")
    .toLowerCase()
    .replace(/^./, (str) => str.toUpperCase());
};

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ERPLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600">
              Manage and track your project progress
            </p>
          </div>
          <Button className="flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
                <span
                  className={`inline-flex px-2 py-1 text-xs font-medium rounded-full w-fit ${getStatusBadge(
                    project.status
                  )}`}
                >
                  {getStatusText(project.status)}
                </span>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">{project.description}</p>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>
                      {project.tasksCompleted}/{project.totalTasks} tasks
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{
                        width: `${
                          (project.tasksCompleted / project.totalTasks) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />₹
                    {project.budget.toLocaleString()} budget
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(project.startDate).toLocaleDateString()} -{" "}
                    {new Date(project.endDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    {project.members.length} members
                  </div>
                </div>

                {/* Team Members */}
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">Team</p>
                  <div className="flex -space-x-2">
                    {project.members.slice(0, 3).map((member, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white"
                        title={member}
                      >
                        {member
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    ))}
                    {project.members.length > 3 && (
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-medium border-2 border-white">
                        +{project.members.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <Plus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600">
                  Get started by creating your first project.
                </p>
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Project
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </ERPLayout>
  );
}
