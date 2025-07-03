"use client";

import { ERPLayout } from "@/components/layout/erp-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  Users,
  CheckSquare,
  DollarSign,
  TrendingUp,
  Clock,
} from "lucide-react";

// Mock data - in real app, this would come from API
const stats = [
  {
    title: "Total Employees",
    value: "24",
    icon: Users,
    trend: "+2 this month",
    trendUp: true,
  },
  {
    title: "Active Projects",
    value: "8",
    icon: CheckSquare,
    trend: "+1 this week",
    trendUp: true,
  },
  {
    title: "Monthly Revenue",
    value: "₹12,45,000",
    icon: DollarSign,
    trend: "+15% from last month",
    trendUp: true,
  },
  {
    title: "Pending Tasks",
    value: "42",
    icon: Clock,
    trend: "-5 today",
    trendUp: false,
  },
];

const recentActivities = [
  {
    id: 1,
    action: "New employee onboarded",
    user: "Priya Sharma",
    time: "2 hours ago",
  },
  {
    id: 2,
    action: "Project milestone completed",
    user: "Development Team",
    time: "4 hours ago",
  },
  {
    id: 3,
    action: "Invoice generated",
    user: "Amit Kumar",
    time: "6 hours ago",
  },
  {
    id: 4,
    action: "Leave request approved",
    user: "Sneha Patel",
    time: "1 day ago",
  },
];

export default function DashboardPage() {
  return (
    <ERPLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back! Here&apos;s what&apos;s happening in your startup.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-gray-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <p
                  className={`text-xs ${
                    stat.trendUp ? "text-green-600" : "text-red-600"
                  } flex items-center mt-1`}
                >
                  <TrendingUp
                    className={`h-3 w-3 mr-1 ${
                      stat.trendUp ? "" : "rotate-180"
                    }`}
                  />
                  {stat.trend}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-600">
                        {activity.user} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Users className="h-6 w-6 text-blue-500 mb-2" />
                  <p className="font-medium text-gray-900">Add Employee</p>
                  <p className="text-xs text-gray-600">
                    Onboard new team member
                  </p>
                </button>
                <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckSquare className="h-6 w-6 text-green-500 mb-2" />
                  <p className="font-medium text-gray-900">Create Project</p>
                  <p className="text-xs text-gray-600">Start new project</p>
                </button>
                <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <DollarSign className="h-6 w-6 text-yellow-500 mb-2" />
                  <p className="font-medium text-gray-900">Generate Invoice</p>
                  <p className="text-xs text-gray-600">Create client invoice</p>
                </button>
                <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Clock className="h-6 w-6 text-purple-500 mb-2" />
                  <p className="font-medium text-gray-900">Review Tasks</p>
                  <p className="text-xs text-gray-600">Check pending tasks</p>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ERPLayout>
  );
}
