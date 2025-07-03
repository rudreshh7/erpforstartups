"use client";

import { ERPLayout } from "@/components/layout/erp-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users, Building2 } from "lucide-react";

// Mock data
const departments = [
  {
    id: 1,
    name: "Engineering",
    description: "Software development and technical operations",
    employeeCount: 12,
    manager: "Rajesh Kumar",
  },
  {
    id: 2,
    name: "Product",
    description: "Product management and design",
    employeeCount: 5,
    manager: "Priya Sharma",
  },
  {
    id: 3,
    name: "Marketing",
    description: "Digital marketing and growth",
    employeeCount: 3,
    manager: "Amit Patel",
  },
  {
    id: 4,
    name: "Sales",
    description: "Business development and customer acquisition",
    employeeCount: 4,
    manager: "Sneha Reddy",
  },
];

export default function DepartmentsPage() {
  return (
    <ERPLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Departments</h1>
            <p className="text-gray-600">Organize your team into departments</p>
          </div>
          <Button className="flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Department
          </Button>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((department) => (
            <Card
              key={department.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        {department.name}
                      </CardTitle>
                      <p className="text-sm text-gray-600">
                        {department.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    {department.employeeCount} employees
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Manager
                      </p>
                      <p className="text-sm text-gray-600">
                        {department.manager}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Department CTA */}
        <Card className="border-dashed border-2 border-gray-300">
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Create New Department
              </h3>
              <p className="text-gray-600 mb-4">
                Organize your team by creating departments for different
                functions.
              </p>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Department
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ERPLayout>
  );
}
