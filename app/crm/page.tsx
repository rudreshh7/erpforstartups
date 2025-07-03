"use client";

import { useState } from "react";
import { ERPLayout } from "@/components/layout/erp-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  Filter,
  Phone,
  Mail,
  Building,
  Calendar,
  DollarSign,
  MoreVertical,
} from "lucide-react";

// Mock data
const leads = [
  {
    id: 1,
    name: "TechCorp Solutions",
    contactPerson: "Arun Mehta",
    email: "arun@techcorp.com",
    phone: "+91 98765 12345",
    company: "TechCorp Solutions",
    status: "QUALIFIED",
    source: "LinkedIn",
    value: 250000,
    createdAt: "2024-01-10",
    lastActivity: "2024-01-20",
  },
  {
    id: 2,
    name: "StartupXYZ",
    contactPerson: "Kavya Singh",
    email: "kavya@startupxyz.com",
    phone: "+91 98765 12346",
    company: "StartupXYZ",
    status: "NEW",
    source: "Website",
    value: 150000,
    createdAt: "2024-01-15",
    lastActivity: "2024-01-15",
  },
  {
    id: 3,
    name: "Digital Innovations",
    contactPerson: "Rahul Gupta",
    email: "rahul@digitalinn.com",
    phone: "+91 98765 12347",
    company: "Digital Innovations",
    status: "PROPOSAL",
    source: "Referral",
    value: 400000,
    createdAt: "2024-01-05",
    lastActivity: "2024-01-18",
  },
  {
    id: 4,
    name: "E-commerce Plus",
    contactPerson: "Neha Sharma",
    email: "neha@ecomplus.com",
    phone: "+91 98765 12348",
    company: "E-commerce Plus",
    status: "WON",
    source: "Cold Email",
    value: 300000,
    createdAt: "2023-12-20",
    lastActivity: "2024-01-22",
  },
  {
    id: 5,
    name: "FinTech Startup",
    contactPerson: "Vikram Patel",
    email: "vikram@fintech.com",
    phone: "+91 98765 12349",
    company: "FinTech Startup",
    status: "LOST",
    source: "LinkedIn",
    value: 200000,
    createdAt: "2023-12-15",
    lastActivity: "2024-01-10",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "NEW":
      return "bg-blue-100 text-blue-800";
    case "CONTACTED":
      return "bg-yellow-100 text-yellow-800";
    case "QUALIFIED":
      return "bg-purple-100 text-purple-800";
    case "PROPOSAL":
      return "bg-orange-100 text-orange-800";
    case "NEGOTIATION":
      return "bg-indigo-100 text-indigo-800";
    case "WON":
      return "bg-green-100 text-green-800";
    case "LOST":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function CRMPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "" || lead.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Calculate metrics
  const totalLeads = leads.length;
  const qualifiedLeads = leads.filter(
    (l) =>
      l.status === "QUALIFIED" ||
      l.status === "PROPOSAL" ||
      l.status === "NEGOTIATION"
  ).length;
  const wonDeals = leads.filter((l) => l.status === "WON").length;
  const totalValue = leads
    .filter((l) => l.status === "WON")
    .reduce((sum, l) => sum + l.value, 0);

  const statuses = [
    "NEW",
    "CONTACTED",
    "QUALIFIED",
    "PROPOSAL",
    "NEGOTIATION",
    "WON",
    "LOST",
  ];

  return (
    <ERPLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">CRM</h1>
            <p className="text-gray-600">
              Manage leads and customer relationships
            </p>
          </div>
          <Button className="flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Lead
          </Button>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {totalLeads}
              </div>
              <p className="text-xs text-gray-600 mt-1">All time</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Qualified Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">
                {qualifiedLeads}
              </div>
              <p className="text-xs text-gray-600 mt-1">Active pipeline</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Won Deals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {wonDeals}
              </div>
              <p className="text-xs text-gray-600 mt-1">Closed deals</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                ₹{totalValue.toLocaleString()}
              </div>
              <p className="text-xs text-gray-600 mt-1">From won deals</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Statuses</option>
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status.replace("_", " ")}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leads List */}
        <div className="grid gap-6">
          {filteredLeads.map((lead) => (
            <Card key={lead.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                      {lead.company.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {lead.company}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {lead.contactPerson}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <div className="flex items-center">
                          <Mail className="h-3 w-3 mr-1" />
                          {lead.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          {lead.phone}
                        </div>
                        <div className="flex items-center">
                          <Building className="h-3 w-3 mr-1" />
                          {lead.source}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-1">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(
                            lead.status
                          )}`}
                        >
                          {lead.status}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 space-x-4">
                        <div className="flex items-center">
                          <DollarSign className="h-3 w-3 mr-1" />₹
                          {lead.value.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(lead.lastActivity).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLeads.length === 0 && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No leads found
                </h3>
                <p className="text-gray-600">
                  Start building your pipeline by adding your first lead.
                </p>
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Lead
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </ERPLayout>
  );
}
