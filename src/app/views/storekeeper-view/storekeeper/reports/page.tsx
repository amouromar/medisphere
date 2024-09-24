"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  FileText,
  Download,
  BarChart,
  PieChart,
  TrendingUp,
  DollarSign,
  Package,
  Users,
  CalendarIcon,
} from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";
import { cn } from "@/lib/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function DatePickerWithRange({
  className,
  date,
  setDate,
}: {
  className?: string;
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function ReportsTab() {
  const [reportType, setReportType] = useState("sales");
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(new Date().setDate(new Date().getDate() - 30)),
    to: new Date(),
  });
  const [generatedReport, setGeneratedReport] = useState<any[] | null>(null);
  const [chartData, setChartData] = useState<any | null>(null);
  const [filterValue, setFilterValue] = useState("");

  const generateReport = () => {
    // Simulating API call to generate report
    const dummyReports = {
      sales: [
        { date: "2023-08-25", product: "Aspirin", quantity: 100, revenue: 500 },
        {
          date: "2023-08-26",
          product: "Amoxicillin",
          quantity: 50,
          revenue: 750,
        },
        {
          date: "2023-08-27",
          product: "Lisinopril",
          quantity: 75,
          revenue: 600,
        },
        {
          date: "2023-08-28",
          product: "Metformin",
          quantity: 60,
          revenue: 450,
        },
        {
          date: "2023-08-29",
          product: "Amlodipine",
          quantity: 80,
          revenue: 560,
        },
        {
          date: "2023-08-30",
          product: "Omeprazole",
          quantity: 90,
          revenue: 630,
        },
        {
          date: "2023-08-31",
          product: "Levothyroxine",
          quantity: 70,
          revenue: 490,
        },
      ],
      inventory: [
        {
          product: "Aspirin",
          currentStock: 500,
          reorderPoint: 100,
          supplier: "PharmaCorp",
          lastRestocked: "2023-08-15",
        },
        {
          product: "Amoxicillin",
          currentStock: 200,
          reorderPoint: 50,
          supplier: "MediSupply",
          lastRestocked: "2023-08-10",
        },
        {
          product: "Lisinopril",
          currentStock: 300,
          reorderPoint: 75,
          supplier: "HealthDist",
          lastRestocked: "2023-08-20",
        },
        {
          product: "Metformin",
          currentStock: 250,
          reorderPoint: 60,
          supplier: "PharmaCorp",
          lastRestocked: "2023-08-18",
        },
        {
          product: "Amlodipine",
          currentStock: 180,
          reorderPoint: 40,
          supplier: "MediSupply",
          lastRestocked: "2023-08-22",
        },
      ],
      customers: [
        {
          name: "John Doe",
          totalOrders: 5,
          totalSpent: 250,
          lastOrderDate: "2023-08-28",
        },
        {
          name: "Jane Smith",
          totalOrders: 3,
          totalSpent: 180,
          lastOrderDate: "2023-08-25",
        },
        {
          name: "Bob Johnson",
          totalOrders: 7,
          totalSpent: 420,
          lastOrderDate: "2023-08-30",
        },
        {
          name: "Alice Brown",
          totalOrders: 4,
          totalSpent: 300,
          lastOrderDate: "2023-08-29",
        },
        {
          name: "Charlie Davis",
          totalOrders: 6,
          totalSpent: 350,
          lastOrderDate: "2023-08-27",
        },
      ],
    };

    setGeneratedReport(dummyReports[reportType as keyof typeof dummyReports]);

    // Generate chart data
    if (reportType === "sales") {
      setChartData({
        labels: dummyReports.sales.map((item) => item.date),
        datasets: [
          {
            label: "Revenue",
            data: dummyReports.sales.map((item) => item.revenue),
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
          {
            label: "Quantity",
            data: dummyReports.sales.map((item) => item.quantity),
            borderColor: "rgb(255, 99, 132)",
            tension: 0.1,
          },
        ],
      });
    } else if (reportType === "inventory") {
      setChartData({
        labels: dummyReports.inventory.map((item) => item.product),
        datasets: [
          {
            label: "Current Stock",
            data: dummyReports.inventory.map((item) => item.currentStock),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      });
    } else if (reportType === "customers") {
      setChartData({
        labels: dummyReports.customers.map((item) => item.name),
        datasets: [
          {
            label: "Total Spent",
            data: dummyReports.customers.map((item) => item.totalSpent),
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
          },
        ],
      });
    }
  };

  const downloadReport = () => {
    // In a real application, this would generate a CSV or PDF file for download
    alert("Downloading report...");
  };

  const filteredReport = generatedReport
    ? generatedReport.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(filterValue.toLowerCase())
        )
      )
    : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">
                  <div className="flex items-center">
                    <BarChart className="mr-2 h-4 w-4" />
                    Sales Report
                  </div>
                </SelectItem>
                <SelectItem value="inventory">
                  <div className="flex items-center">
                    <Package className="mr-2 h-4 w-4" />
                    Inventory Report
                  </div>
                </SelectItem>
                <SelectItem value="customers">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Customer Report
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <DatePickerWithRange date={dateRange} setDate={setDateRange} />
            <Button onClick={generateReport}>
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>

          {generatedReport && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Input
                  placeholder="Filter results..."
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  className="max-w-sm"
                />
                <Button variant="outline" onClick={downloadReport}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </div>

              <Tabs defaultValue="table" className="w-full">
                <TabsList>
                  <TabsTrigger value="table">Table</TabsTrigger>
                  <TabsTrigger value="chart">Chart</TabsTrigger>
                </TabsList>
                <TabsContent value="table">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        {Object.keys(generatedReport[0]).map((key) => (
                          <TableHead key={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredReport.map((row, index) => (
                        <TableRow key={index}>
                          {Object.values(row).map((value, valueIndex) => (
                            <TableCell key={valueIndex}>{value}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="chart">
                  {chartData && (
                    <div className="w-full h-[400px]">
                      {reportType === "sales" && (
                        <Line
                          data={chartData}
                          options={{ maintainAspectRatio: false }}
                        />
                      )}
                      {reportType === "inventory" && (
                        <Bar
                          data={chartData}
                          options={{ maintainAspectRatio: false }}
                        />
                      )}
                      {reportType === "customers" && (
                        <Pie
                          data={chartData}
                          options={{ maintainAspectRatio: false }}
                        />
                      )}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
