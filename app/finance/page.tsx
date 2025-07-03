"use client";

import { useState } from "react";
import { ERPLayout } from "@/components/layout/erp-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Receipt,
  Calendar,
} from "lucide-react";

// Mock data
const transactions = [
  {
    id: 1,
    type: "INCOME",
    amount: 50000,
    description: "Client payment for Q1 project",
    category: "Project Revenue",
    date: "2024-01-15",
    createdBy: "Rajesh Kumar",
  },
  {
    id: 2,
    type: "EXPENSE",
    amount: 15000,
    description: "Office rent for January",
    category: "Rent",
    date: "2024-01-01",
    createdBy: "Priya Sharma",
  },
  {
    id: 3,
    type: "EXPENSE",
    amount: 8000,
    description: "Software licenses",
    category: "Software",
    date: "2024-01-10",
    createdBy: "Amit Patel",
  },
  {
    id: 4,
    type: "INCOME",
    amount: 30000,
    description: "Consulting services",
    category: "Services",
    date: "2024-01-20",
    createdBy: "Sneha Reddy",
  },
  {
    id: 5,
    type: "EXPENSE",
    amount: 12000,
    description: "Team lunch and events",
    category: "Team Events",
    date: "2024-01-18",
    createdBy: "Priya Sharma",
  },
];

const getTransactionColor = (type: string) => {
  return type === "INCOME" ? "text-green-600" : "text-red-600";
};

const getTransactionIcon = (type: string) => {
  return type === "INCOME" ? TrendingUp : TrendingDown;
};

export default function FinancePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "" || transaction.type === selectedType;
    return matchesSearch && matchesType;
  });

  // Calculate totals
  const totalIncome = transactions
    .filter((t) => t.type === "INCOME")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "EXPENSE")
    .reduce((sum, t) => sum + t.amount, 0);

  const netProfit = totalIncome - totalExpenses;

  return (
    <ERPLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Finance</h1>
            <p className="text-gray-600">
              Track income, expenses, and financial health
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Receipt className="h-4 w-4 mr-2" />
              View Invoices
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Transaction
            </Button>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                Total Income
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                ₹{totalIncome.toLocaleString()}
              </div>
              <p className="text-xs text-gray-600 mt-1">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <TrendingDown className="h-4 w-4 mr-2 text-red-500" />
                Total Expenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                ₹{totalExpenses.toLocaleString()}
              </div>
              <p className="text-xs text-gray-600 mt-1">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-blue-500" />
                Net Profit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`text-2xl font-bold ${
                  netProfit >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                ₹{netProfit.toLocaleString()}
              </div>
              <p className="text-xs text-gray-600 mt-1">This month</p>
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
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Types</option>
                <option value="INCOME">Income</option>
                <option value="EXPENSE">Expense</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Transactions List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredTransactions.map((transaction) => {
                const Icon = getTransactionIcon(transaction.type);
                return (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-2 rounded-full ${
                          transaction.type === "INCOME"
                            ? "bg-green-100"
                            : "bg-red-100"
                        }`}
                      >
                        <Icon
                          className={`h-4 w-4 ${getTransactionColor(
                            transaction.type
                          )}`}
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {transaction.description}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{transaction.category}</span>
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(transaction.date).toLocaleDateString()}
                          </span>
                          <span>by {transaction.createdBy}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-lg font-semibold ${getTransactionColor(
                          transaction.type
                        )}`}
                      >
                        {transaction.type === "INCOME" ? "+" : "-"}₹
                        {transaction.amount.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500 uppercase">
                        {transaction.type}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredTransactions.length === 0 && (
              <div className="text-center py-12">
                <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No transactions found
                </h3>
                <p className="text-gray-600">
                  Add your first transaction to get started.
                </p>
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Transaction
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </ERPLayout>
  );
}
