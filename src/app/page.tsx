import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            PharmaCare
          </Link>
          <div className="space-x-4">
            <Link href="/views/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/views/auth/register">
              <Button>Register</Button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to PharmaCare</h1>
          <p className="text-xl mb-8">
            Your trusted partner in health and wellness. Manage your
            prescriptions, order medications, and consult with healthcare
            professionals - all in one place.
          </p>
          <div className="space-x-4">
            <Link href="/views/auth/register">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/views/general-view/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-transparent">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            &copy; 2024 PharmaCare. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
