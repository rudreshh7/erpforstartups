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
  Download,
  Eye,
  MoreVertical,
  Calendar,
  DollarSign,
} from "lucide-react";

// Mock data
const invoices = [
  {
    id: 1,
    invoiceNumber: "INV-2024-001",
    clientName: "TechCorp Solutions",
    clientEmail: "billing@techcorp.com",
    amount: 50000,
    tax: 9000,
    totalAmount: 59000,
    status: "PAID",
    issueDate: "2024-01-01",
    dueDate: "2024-01-31",
    paidAt: "2024-01-28",
    description: "Q1 Development Services",
  },
  {
    id: 2,
    invoiceNumber: "INV-2024-002",
    clientName: "StartupXYZ",
    clientEmail: "finance@startupxyz.com",
    amount: 35000,
    tax: 6300,
    totalAmount: 41300,
    status: "SENT",
    issueDate: "2024-01-15",
    dueDate: "2024-02-14",
    paidAt: null,
    description: "Website Development Project",
  },
  {
    id: 3,
    invoiceNumber: "INV-2024-003",
    clientName: "Digital Innovations",
    clientEmail: "accounts@digitalinn.com",
    amount: 75000,
    tax: 13500,
    totalAmount: 88500,
    status: "OVERDUE",
    issueDate: "2024-01-05",
    dueDate: "2024-01-20",
    paidAt: null,
    description: "Mobile App Development",
  },
  {
    id: 4,
    invoiceNumber: "INV-2024-004",
    clientName: "E-commerce Plus",
    clientEmail: "billing@ecomplus.com",
    amount: 42000,
    tax: 7560,
    totalAmount: 49560,
    status: "DRAFT",
    issueDate: "2024-01-20",
    dueDate: "2024-02-19",
    paidAt: null,
    description: "E-commerce Platform Setup",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "DRAFT":
      return "bg-gray-100 text-gray-800";
    case "SENT":
      return "bg-blue-100 text-blue-800";
    case "PAID":
      return "bg-green-100 text-green-800";
    case "OVERDUE":
      return "bg-red-100 text-red-800";
    case "CANCELLED":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function InvoicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "" || invoice.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Calculate metrics
  const totalInvoiced = invoices.reduce((sum, inv) => sum + inv.totalAmount, 0);
  const totalPaid = invoices
    .filter((inv) => inv.status === "PAID")
    .reduce((sum, inv) => sum + inv.totalAmount, 0);
  const totalOverdue = invoices
    .filter((inv) => inv.status === "OVERDUE")
    .reduce((sum, inv) => sum + inv.totalAmount, 0);
  const pendingAmount = totalInvoiced - totalPaid;

  const statuses = ["DRAFT", "SENT", "PAID", "OVERDUE", "CANCELLED"];

  return (
    <ERPLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Invoices</h1>
            <p className="text-gray-600">Create and manage client invoices</p>
          </div>
          <Button className="flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Create Invoice
          </Button>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Invoiced
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                ₹{totalInvoiced.toLocaleString()}
              </div>
              <p className="text-xs text-gray-600 mt-1">All time</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Paid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                ₹{totalPaid.toLocaleString()}
              </div>
              <p className="text-xs text-gray-600 mt-1">Received payments</p>
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
                ₹{pendingAmount.toLocaleString()}
              </div>
              <p className="text-xs text-gray-600 mt-1">Awaiting payment</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Overdue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                ₹{totalOverdue.toLocaleString()}
              </div>
              <p className="text-xs text-gray-600 mt-1">Past due date</p>
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
                  placeholder="Search invoices..."
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
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Invoices List */}
        <Card>
          <CardHeader>
            <CardTitle>Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredInvoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {invoice.invoiceNumber}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {invoice.clientName}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          Due: {new Date(invoice.dueDate).toLocaleDateString()}
                        </div>
                        <span>{invoice.description}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-1">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(
                            invoice.status
                          )}`}
                        >
                          {invoice.status}
                        </span>
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        ₹{invoice.totalAmount.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        (₹{invoice.amount.toLocaleString()} + ₹
                        {invoice.tax.toLocaleString()} tax)
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredInvoices.length === 0 && (
              <div className="text-center py-12">
                <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No invoices found
                </h3>
                <p className="text-gray-600">
                  Create your first invoice to get started.
                </p>
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Invoice
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </ERPLayout>
  );
}
