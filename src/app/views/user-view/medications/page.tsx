"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusIcon, SearchIcon } from "lucide-react";

// Mock data (replace with actual data fetching in production)
const mockMedications = [
  {
    id: 1,
    name: "Aspirin",
    description: "Pain reliever and fever reducer",
    price: 9.99,
  },
  {
    id: 2,
    name: "Lisinopril",
    description: "ACE inhibitor for high blood pressure",
    price: 14.99,
  },
  {
    id: 3,
    name: "Metformin",
    description: "Oral diabetes medicine",
    price: 12.99,
  },
  {
    id: 4,
    name: "Amlodipine",
    description: "Calcium channel blocker",
    price: 11.99,
  },
];

export default function MedicationCatalog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMedications = mockMedications.filter(
    (med) =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Medication Catalog
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-6">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search medications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMedications.map((medication) => (
              <Card key={medication.id}>
                <CardHeader>
                  <CardTitle>{medication.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    {medication.description}
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    ${medication.price.toFixed(2)}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <PlusIcon className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {filteredMedications.length === 0 && (
            <p className="text-center text-gray-500 mt-6">
              No medications found matching your search.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
