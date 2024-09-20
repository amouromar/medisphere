import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "../src/app/page";

// Utility function to test
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

// Unit tests for utility function
describe("formatCurrency", () => {
  it("formats whole numbers correctly", () => {
    expect(formatCurrency(1000)).toBe("$1,000.00");
  });

  it("formats decimal numbers correctly", () => {
    expect(formatCurrency(1234.56)).toBe("$1,234.56");
  });

  it("handles zero correctly", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });

  it("handles negative numbers correctly", () => {
    expect(formatCurrency(-500)).toBe("-$500.00");
  });
});

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

// Component render test
describe("LandingPage", () => {
  it("renders the landing page correctly", () => {
    render(<LandingPage />);

    // Check if the main heading is present
    expect(
      screen.getByRole("heading", { name: /welcome to pharmacare/i })
    ).toBeInTheDocument();

    // Check if the "Get Started" button is present
    expect(
      screen.getByRole("link", { name: /get started/i })
    ).toBeInTheDocument();

    // Check if the "Learn More" button is present
    expect(
      screen.getByRole("link", { name: /learn more/i })
    ).toBeInTheDocument();

    // Check if the footer is present
    expect(
      screen.getByText(/© 2023 pharmacare\. all rights reserved\./i)
    ).toBeInTheDocument();
  });
});
