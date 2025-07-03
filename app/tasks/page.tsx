"use client";

import { useState } from "react";
import { ERPLayout } from "@/components/layout/erp-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, MoreVertical, Calendar, Flag } from "lucide-react";

// Mock data
const tasks = [
  {
    id: 1,
    title: "Design login screen",
    description: "Create wireframes and mockups for the new login interface",
    status: "BACKLOG",
    priority: "HIGH",
    assignee: "Sneha Reddy",
    dueDate: "2024-01-20",
    project: "Mobile App Redesign",
  },
  {
    id: 2,
    title: "API integration for payments",
    description: "Integrate Razorpay payment gateway",
    status: "IN_PROGRESS",
    priority: "URGENT",
    assignee: "Amit Patel",
    dueDate: "2024-01-15",
    project: "API Integration",
  },
  {
    id: 3,
    title: "User testing session",
    description: "Conduct usability testing with 10 users",
    status: "REVIEW",
    priority: "MEDIUM",
    assignee: "Priya Sharma",
    dueDate: "2024-01-25",
    project: "Mobile App Redesign",
  },
  {
    id: 4,
    title: "Database optimization",
    description: "Optimize queries for better performance",
    status: "DONE",
    priority: "LOW",
    assignee: "Rajesh Kumar",
    dueDate: "2024-01-10",
    project: "API Integration",
  },
  {
    id: 5,
    title: "Setup CI/CD pipeline",
    description: "Configure automated deployment pipeline",
    status: "BACKLOG",
    priority: "MEDIUM",
    assignee: "Amit Patel",
    dueDate: "2024-01-30",
    project: "API Integration",
  },
];

const columns = [
  { id: "BACKLOG", title: "Backlog", color: "bg-gray-100" },
  { id: "IN_PROGRESS", title: "In Progress", color: "bg-blue-100" },
  { id: "REVIEW", title: "Review", color: "bg-yellow-100" },
  { id: "DONE", title: "Done", color: "bg-green-100" },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "URGENT":
      return "text-red-600";
    case "HIGH":
      return "text-orange-600";
    case "MEDIUM":
      return "text-yellow-600";
    case "LOW":
      return "text-green-600";
    default:
      return "text-gray-600";
  }
};

const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case "URGENT":
      return "🔴";
    case "HIGH":
      return "🟠";
    case "MEDIUM":
      return "🟡";
    case "LOW":
      return "🟢";
    default:
      return "⚪";
  }
};

export default function TasksPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTasksByStatus = (status: string) => {
    return filteredTasks.filter((task) => task.status === status);
  };

  return (
    <ERPLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
            <p className="text-gray-600">
              Track and manage tasks across all projects
            </p>
          </div>
          <Button className="flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            New Task
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((column) => {
            const columnTasks = getTasksByStatus(column.id);
            return (
              <div key={column.id} className="space-y-4">
                {/* Column Header */}
                <div className={`p-4 rounded-lg ${column.color}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">
                      {column.title}
                    </h3>
                    <span className="bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700">
                      {columnTasks.length}
                    </span>
                  </div>
                </div>

                {/* Tasks */}
                <div className="space-y-3">
                  {columnTasks.map((task) => (
                    <Card
                      key={task.id}
                      className="hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          {/* Task Header */}
                          <div className="flex items-start justify-between">
                            <h4 className="font-medium text-gray-900 text-sm leading-tight">
                              {task.title}
                            </h4>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 -mt-1"
                            >
                              <MoreVertical className="h-3 w-3" />
                            </Button>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {task.description}
                          </p>

                          {/* Priority */}
                          <div className="flex items-center text-xs">
                            <Flag
                              className={`h-3 w-3 mr-1 ${getPriorityColor(
                                task.priority
                              )}`}
                            />
                            <span className={getPriorityColor(task.priority)}>
                              {task.priority}
                            </span>
                          </div>

                          {/* Project Tag */}
                          <div className="inline-block">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {task.project}
                            </span>
                          </div>

                          {/* Footer */}
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(task.dueDate).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                {task.assignee
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Add Task Button */}
                  <Button
                    variant="outline"
                    className="w-full h-12 border-dashed border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {tasks.length}
              </div>
              <div className="text-sm text-gray-600">Total Tasks</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {getTasksByStatus("IN_PROGRESS").length}
              </div>
              <div className="text-sm text-gray-600">In Progress</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {getTasksByStatus("DONE").length}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">
                {
                  tasks.filter(
                    (t) =>
                      new Date(t.dueDate) < new Date() && t.status !== "DONE"
                  ).length
                }
              </div>
              <div className="text-sm text-gray-600">Overdue</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ERPLayout>
  );
}
