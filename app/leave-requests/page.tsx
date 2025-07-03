"use client";

import { ERPLayout } from "@/components/layout/erp-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, Clock, CheckCircle, XCircle } from "lucide-react";

// Mock data
const leaveRequests = [
  {
    id: 1,
    employeeName: "Priya Sharma",
    type: "ANNUAL",
    startDate: "2024-02-01",
    endDate: "2024-02-05",
    days: 5,
    reason: "Family vacation",
    status: "APPROVED",
    requestedAt: "2024-01-15",
  },
  {
    id: 2,
    employeeName: "Amit Patel",
    type: "SICK",
    startDate: "2024-01-25",
    endDate: "2024-01-26",
    days: 2,
    reason: "Flu symptoms",
    status: "PENDING",
    requestedAt: "2024-01-24",
  },
  {
    id: 3,
    employeeName: "Sneha Reddy",
    type: "PERSONAL",
    startDate: "2024-02-10",
    endDate: "2024-02-12",
    days: 3,
    reason: "House shifting",
    status: "REJECTED",
    requestedAt: "2024-01-20",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "APPROVED":
      return <CheckCircle className="h-5 w-5 text-green-600" />;
    case "REJECTED":
      return <XCircle className="h-5 w-5 text-red-600" />;
    case "PENDING":
      return <Clock className="h-5 w-5 text-yellow-600" />;
    default:
      return <Clock className="h-5 w-5 text-gray-600" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "APPROVED":
      return "bg-green-100 text-green-800";
    case "REJECTED":
      return "bg-red-100 text-red-800";
    case "PENDING":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getLeaveTypeColor = (type: string) => {
  switch (type) {
    case "ANNUAL":
      return "bg-blue-100 text-blue-800";
    case "SICK":
      return "bg-red-100 text-red-800";
    case "PERSONAL":
      return "bg-purple-100 text-purple-800";
    case "MATERNITY":
      return "bg-pink-100 text-pink-800";
    case "PATERNITY":
      return "bg-indigo-100 text-indigo-800";
    case "EMERGENCY":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function LeaveRequestsPage() {
  const approvedCount = leaveRequests.filter(
    (req) => req.status === "APPROVED"
  ).length;
  const pendingCount = leaveRequests.filter(
    (req) => req.status === "PENDING"
  ).length;
  const rejectedCount = leaveRequests.filter(
    (req) => req.status === "REJECTED"
  ).length;

  return (
    <ERPLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Leave Requests</h1>
            <p className="text-gray-600">
              Manage employee leave requests and time off
            </p>
          </div>
          <Button className="flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Request Leave
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {leaveRequests.length}
              </div>
              <p className="text-xs text-gray-600 mt-1">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Approved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {approvedCount}
              </div>
              <p className="text-xs text-gray-600 mt-1">Approved requests</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Pending
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {pendingCount}
              </div>
              <p className="text-xs text-gray-600 mt-1">Awaiting approval</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Rejected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {rejectedCount}
              </div>
              <p className="text-xs text-gray-600 mt-1">Rejected requests</p>
            </CardContent>
          </Card>
        </div>

        {/* Leave Requests List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Leave Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaveRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                      {request.employeeName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {request.employeeName}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getLeaveTypeColor(
                            request.type
                          )}`}
                        >
                          {request.type}
                        </span>
                        <span className="text-sm text-gray-600">
                          {request.days} day{request.days > 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(
                            request.startDate
                          ).toLocaleDateString()} -{" "}
                          {new Date(request.endDate).toLocaleDateString()}
                        </div>
                        <span>{request.reason}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-2">
                        {getStatusIcon(request.status)}
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(
                            request.status
                          )}`}
                        >
                          {request.status}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Requested:{" "}
                        {new Date(request.requestedAt).toLocaleDateString()}
                      </div>
                    </div>

                    {request.status === "PENDING" && (
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-green-600 border-green-600 hover:bg-green-50"
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </ERPLayout>
  );
}
