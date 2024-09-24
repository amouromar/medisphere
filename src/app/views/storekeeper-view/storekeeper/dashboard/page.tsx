"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Eye,
  Package,
  Truck,
  Plus,
  Edit,
  Trash2,
  BarChart2,
  RefreshCcw,
  ShoppingCart,
  Settings,
  TrendingUp,
  AlertCircle,
  FileText,
} from "lucide-react";
import Link from "next/link";
import ReportsTab from "../reports/page";

export default function StorekeeperDashboard() {
  // Overview State
  const [overviewData] = useState({
    totalOrders: 1234,
    inventoryItems: 5678,
    lowStockItems: 23,
    revenue: 12345,
  });

  // Orders State
  const [orders, setOrders] = useState([
    {
      id: "1",
      customer: "John Doe",
      date: "2023-09-20",
      total: 59.99,
      status: "Processing",
    },
    {
      id: "2",
      customer: "Jane Smith",
      date: "2023-09-19",
      total: 129.99,
      status: "Shipped",
    },
    {
      id: "3",
      customer: "Bob Johnson",
      date: "2023-09-18",
      total: 89.99,
      status: "Delivered",
    },
  ]);
  const [orderFilter, setOrderFilter] = useState("");
  const [orderStatusFilter, setOrderStatusFilter] = useState("");

  // Inventory State
  const [inventory, setInventory] = useState([
    {
      id: "1",
      name: "Aspirin",
      category: "Pain Relief",
      stock: 500,
      reorderPoint: 100,
      supplier: "PharmaCorp",
    },
    {
      id: "2",
      name: "Amoxicillin",
      category: "Antibiotics",
      stock: 200,
      reorderPoint: 50,
      supplier: "MediSupply",
    },
    {
      id: "3",
      name: "Lisinopril",
      category: "Blood Pressure",
      stock: 300,
      reorderPoint: 75,
      supplier: "HealthDist",
    },
  ]);
  const [inventoryFilter, setInventoryFilter] = useState("");
  const [inventoryCategoryFilter, setInventoryCategoryFilter] = useState("");
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    stock: 0,
    reorderPoint: 0,
    supplier: "",
  });

  // Storefront State
  const [categories, setCategories] = useState([
    { id: "1", name: "Pain Relief", featured: true, order: 1 },
    { id: "2", name: "Cold & Flu", featured: false, order: 2 },
    { id: "3", name: "Digestive Health", featured: true, order: 3 },
  ]);
  const [newCategory, setNewCategory] = useState({
    name: "",
    featured: false,
    order: 0,
  });
  const [featuredProducts, setFeaturedProducts] = useState([
    { id: "1", name: "Aspirin", category: "Pain Relief" },
    { id: "2", name: "Cough Syrup", category: "Cold & Flu" },
    { id: "3", name: "Antacid", category: "Digestive Health" },
  ]);
  const [newProduct, setNewProduct] = useState({ name: "", category: "" });

  // Filter functions
  const filteredOrders = orders.filter(
    (order) =>
      (order.customer.toLowerCase().includes(orderFilter.toLowerCase()) ||
        order.id.includes(orderFilter)) &&
      (orderStatusFilter === "All" ||
        orderStatusFilter === "" ||
        order.status === orderStatusFilter)
  );

  const filteredInventory = inventory.filter(
    (item) =>
      (item.name.toLowerCase().includes(inventoryFilter.toLowerCase()) ||
        item.id.includes(inventoryFilter)) &&
      (inventoryCategoryFilter === "All" ||
        item.category === inventoryCategoryFilter)
  );

  // Add functions
  const addInventoryItem = () => {
    setInventory([
      ...inventory,
      { ...newItem, id: (inventory.length + 1).toString() },
    ]);
    setNewItem({
      name: "",
      category: "",
      stock: 0,
      reorderPoint: 0,
      supplier: "",
    });
  };

  const addCategory = () => {
    setCategories([
      ...categories,
      { ...newCategory, id: (categories.length + 1).toString() },
    ]);
    setNewCategory({ name: "", featured: false, order: 0 });
  };

  const addProduct = () => {
    setFeaturedProducts([
      ...featuredProducts,
      { ...newProduct, id: (featuredProducts.length + 1).toString() },
    ]);
    setNewProduct({ name: "", category: "" });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Storekeeper Dashboard</h1>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="storefront">Storefront</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCard
              title="Total Orders"
              value={overviewData.totalOrders.toString()}
              icon={<ShoppingCart className="h-6 w-6" />}
              change={5.6}
            />
            <DashboardCard
              title="Inventory Items"
              value={overviewData.inventoryItems.toString()}
              icon={<Package className="h-6 w-6" />}
              change={-2.3}
            />
            <DashboardCard
              title="Low Stock Items"
              value={overviewData.lowStockItems.toString()}
              icon={<AlertCircle className="h-6 w-6" />}
              change={10.5}
            />
            <DashboardCard
              title="Revenue"
              value={`$${overviewData.revenue.toFixed(2)}`}
              icon={<TrendingUp className="h-6 w-6" />}
              change={8.7}
            />
          </div>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 mb-4">
                <Input
                  placeholder="Search by order ID or customer name"
                  value={orderFilter}
                  onChange={(e) => setOrderFilter(e.target.value)}
                  className="max-w-sm"
                />
                <Select
                  value={orderStatusFilter}
                  onValueChange={setOrderStatusFilter}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Statuses</SelectItem>
                    <SelectItem value="Processing">Processing</SelectItem>
                    <SelectItem value="Shipped">Shipped</SelectItem>
                    <SelectItem value="Delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>${order.total.toFixed(2)}</TableCell>
                      <TableCell>{order.status}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Package className="h-4 w-4 mr-1" />
                            Process
                          </Button>
                          <Button variant="outline" size="sm">
                            <Truck className="h-4 w-4 mr-1" />
                            Ship
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 mb-4">
                <Input
                  placeholder="Search by name or ID"
                  value={inventoryFilter}
                  onChange={(e) => setInventoryFilter(e.target.value)}
                  className="max-w-sm"
                />
                <Select
                  value={inventoryCategoryFilter}
                  onValueChange={setInventoryCategoryFilter}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Categories</SelectItem>
                    <SelectItem value="Pain Relief">Pain Relief</SelectItem>
                    <SelectItem value="Antibiotics">Antibiotics</SelectItem>
                    <SelectItem value="Blood Pressure">
                      Blood Pressure
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Item
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Inventory Item</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={newItem.name}
                          onChange={(e) =>
                            setNewItem({ ...newItem, name: e.target.value })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="category" className="text-right">
                          Category
                        </Label>
                        <Input
                          id="category"
                          value={newItem.category}
                          onChange={(e) =>
                            setNewItem({ ...newItem, category: e.target.value })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="stock" className="text-right">
                          Stock
                        </Label>
                        <Input
                          id="stock"
                          type="number"
                          value={newItem.stock}
                          onChange={(e) =>
                            setNewItem({
                              ...newItem,
                              stock: parseInt(e.target.value),
                            })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="reorderPoint" className="text-right">
                          Reorder Point
                        </Label>
                        <Input
                          id="reorderPoint"
                          type="number"
                          value={newItem.reorderPoint}
                          onChange={(e) =>
                            setNewItem({
                              ...newItem,
                              reorderPoint: parseInt(e.target.value),
                            })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="supplier" className="text-right">
                          Supplier
                        </Label>
                        <Input
                          id="supplier"
                          value={newItem.supplier}
                          onChange={(e) =>
                            setNewItem({ ...newItem, supplier: e.target.value })
                          }
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <Button onClick={addInventoryItem}>Add Item</Button>
                  </DialogContent>
                </Dialog>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Reorder Point</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInventory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.stock}</TableCell>
                      <TableCell>{item.reorderPoint}</TableCell>
                      <TableCell>{item.supplier}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </Button>
                          <Button variant="outline" size="sm">
                            <BarChart2 className="h-4 w-4 mr-1" />
                            Analytics
                          </Button>
                          <Button variant="outline" size="sm">
                            <RefreshCcw className="h-4 w-4 mr-1" />
                            Reorder
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="storefront">
          <Card>
            <CardHeader>
              <CardTitle>Storefront Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="categories">
                <TabsList>
                  <TabsTrigger value="categories">Categories</TabsTrigger>
                  <TabsTrigger value="featured">Featured Products</TabsTrigger>
                </TabsList>
                <TabsContent value="categories">
                  <div className="mb-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Add New Category
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Category</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                              htmlFor="categoryName"
                              className="text-right"
                            >
                              Name
                            </Label>
                            <Input
                              id="categoryName"
                              value={newCategory.name}
                              onChange={(e) =>
                                setNewCategory({
                                  ...newCategory,
                                  name: e.target.value,
                                })
                              }
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                              htmlFor="categoryOrder"
                              className="text-right"
                            >
                              Order
                            </Label>
                            <Input
                              id="categoryOrder"
                              type="number"
                              value={newCategory.order}
                              onChange={(e) =>
                                setNewCategory({
                                  ...newCategory,
                                  order: parseInt(e.target.value),
                                })
                              }
                              className="col-span-3"
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="categoryFeatured"
                              checked={newCategory.featured}
                              onCheckedChange={(checked) =>
                                setNewCategory({
                                  ...newCategory,
                                  featured: checked as boolean,
                                })
                              }
                            />
                            <Label htmlFor="categoryFeatured">Featured</Label>
                          </div>
                        </div>
                        <Button onClick={addCategory}>Add Category</Button>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Featured</TableHead>
                        <TableHead>Order</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {categories.map((category) => (
                        <TableRow key={category.id}>
                          <TableCell>{category.name}</TableCell>
                          <TableCell>
                            {category.featured ? "Yes" : "No"}
                          </TableCell>
                          <TableCell>{category.order}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="h-4 w-4 mr-1" />
                                Delete
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="featured">
                  <div className="mb-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Add Featured Product
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Featured Product</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="productName" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="productName"
                              value={newProduct.name}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  name: e.target.value,
                                })
                              }
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                              htmlFor="productCategory"
                              className="text-right"
                            >
                              Category
                            </Label>
                            <Select
                              value={newProduct.category}
                              onValueChange={(value) =>
                                setNewProduct({
                                  ...newProduct,
                                  category: value,
                                })
                              }
                            >
                              <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                              <SelectContent>
                                {categories.map((category) => (
                                  <SelectItem
                                    key={category.id}
                                    value={category.name}
                                  >
                                    {category.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button onClick={addProduct}>Add Product</Button>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {featuredProducts.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell>{product.name}</TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="h-4 w-4 mr-1" />
                                Remove
                              </Button>
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                Preview
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <ReportsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function DashboardCard({
  title,
  value,
  icon,
  change,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: number;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p
          className={`text-xs ${change >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {change >= 0 ? "↑" : "↓"} {Math.abs(change)}%
        </p>
      </CardContent>
    </Card>
  );
}
