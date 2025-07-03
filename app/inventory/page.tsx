"use client";

import { useState } from "react";
import { ERPLayout } from "@/components/layout/erp-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  Package,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

// Mock data
const inventory = [
  {
    id: 1,
    name: "MacBook Pro 16-inch",
    sku: "LAPTOP-MBP-16",
    category: "Electronics",
    currentStock: 5,
    minStock: 2,
    price: 250000,
    supplier: "Apple Store",
    lastUpdated: "2024-01-20",
  },
  {
    id: 2,
    name: "Office Chairs",
    sku: "FURN-CHAIR-001",
    category: "Furniture",
    currentStock: 1,
    minStock: 3,
    price: 15000,
    supplier: "Office Depot",
    lastUpdated: "2024-01-18",
  },
  {
    id: 3,
    name: "Company T-shirts",
    sku: "APPAREL-TSHIRT",
    category: "Merchandise",
    currentStock: 50,
    minStock: 10,
    price: 500,
    supplier: "Custom Prints",
    lastUpdated: "2024-01-15",
  },
  {
    id: 4,
    name: "Wireless Mouse",
    sku: "ACC-MOUSE-001",
    category: "Accessories",
    currentStock: 0,
    minStock: 5,
    price: 2500,
    supplier: "Tech Store",
    lastUpdated: "2024-01-22",
  },
  {
    id: 5,
    name: "Standing Desks",
    sku: "FURN-DESK-002",
    category: "Furniture",
    currentStock: 8,
    minStock: 2,
    price: 35000,
    supplier: "Ergo Solutions",
    lastUpdated: "2024-01-19",
  },
];

const getStockStatus = (currentStock: number, minStock: number) => {
  if (currentStock === 0) {
    return { status: "OUT_OF_STOCK", color: "text-red-600", bg: "bg-red-100" };
  } else if (currentStock <= minStock) {
    return {
      status: "LOW_STOCK",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    };
  } else {
    return { status: "IN_STOCK", color: "text-green-600", bg: "bg-green-100" };
  }
};

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate metrics
  const totalItems = inventory.length;
  const lowStockItems = inventory.filter(
    (item) => item.currentStock <= item.minStock && item.currentStock > 0
  ).length;
  const outOfStockItems = inventory.filter(
    (item) => item.currentStock === 0
  ).length;
  const totalValue = inventory.reduce(
    (sum, item) => sum + item.currentStock * item.price,
    0
  );

  const categories = [...new Set(inventory.map((item) => item.category))];

  return (
    <ERPLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Inventory</h1>
            <p className="text-gray-600">
              Manage your inventory and stock levels
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <TrendingUp className="h-4 w-4 mr-2" />
              Stock In
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {totalItems}
              </div>
              <p className="text-xs text-gray-600 mt-1">In inventory</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Low Stock
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {lowStockItems}
              </div>
              <p className="text-xs text-gray-600 mt-1">Need restocking</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Out of Stock
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {outOfStockItems}
              </div>
              <p className="text-xs text-gray-600 mt-1">Urgent action needed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                ₹{totalValue.toLocaleString()}
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Current inventory value
              </p>
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
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Inventory List */}
        <Card>
          <CardHeader>
            <CardTitle>Inventory Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredInventory.map((item) => {
                const stockStatus = getStockStatus(
                  item.currentStock,
                  item.minStock
                );
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Package className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {item.name}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm text-gray-600">
                            SKU: {item.sku}
                          </span>
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                            {item.category}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Supplier: {item.supplier} • Updated:{" "}
                          {new Date(item.lastUpdated).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-900">
                          ₹{item.price.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">Unit price</div>
                      </div>

                      <div className="text-center">
                        <div
                          className={`text-lg font-semibold ${stockStatus.color}`}
                        >
                          {item.currentStock}
                        </div>
                        <div className="text-xs text-gray-500">
                          Min: {item.minStock}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${stockStatus.bg} ${stockStatus.color}`}
                        >
                          {stockStatus.status
                            .replace("_", " ")
                            .toLowerCase()
                            .replace(/^./, (str) => str.toUpperCase())}
                        </span>
                        {item.currentStock <= item.minStock && (
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        )}
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          Stock In
                        </Button>
                        <Button size="sm" variant="outline">
                          <TrendingDown className="h-4 w-4 mr-1" />
                          Stock Out
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredInventory.length === 0 && (
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No items found
                </h3>
                <p className="text-gray-600">
                  Add your first inventory item to get started.
                </p>
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </ERPLayout>
  );
}
