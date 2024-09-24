import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PillIcon,
  ShoppingCartIcon,
  CalendarIcon,
  VideoIcon,
  ClipboardListIcon,
  TruckIcon,
  ShieldIcon,
  HeartIcon,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
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

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Welcome to PharmaCare</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your comprehensive healthcare solution. Manage prescriptions,
            consult with pharmacists, and take control of your health journey.
          </p>
          <div className="space-x-4">
            <Link href="/views/auth/register">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<PillIcon className="h-10 w-10 text-blue-500" />}
              title="Prescription Management"
              description="Easily manage and refill your prescriptions online"
            />
            <FeatureCard
              icon={<ShoppingCartIcon className="h-10 w-10 text-blue-500" />}
              title="Online Pharmacy"
              description="Order medications and health products with home delivery"
            />
            <FeatureCard
              icon={<CalendarIcon className="h-10 w-10 text-blue-500" />}
              title="Appointment Scheduling"
              description="Book appointments with healthcare professionals"
            />
            <FeatureCard
              icon={<VideoIcon className="h-10 w-10 text-blue-500" />}
              title="Virtual Consultations"
              description="Connect with pharmacists through video calls"
            />
            <FeatureCard
              icon={<ClipboardListIcon className="h-10 w-10 text-blue-500" />}
              title="Health Records"
              description="Access and manage your health records securely"
            />
            <FeatureCard
              icon={<TruckIcon className="h-10 w-10 text-blue-500" />}
              title="Same-Day Delivery"
              description="Get your medications delivered on the same day"
            />
            <FeatureCard
              icon={<ShieldIcon className="h-10 w-10 text-blue-500" />}
              title="Secure & Confidential"
              description="Your health data is protected with advanced security"
            />
            <FeatureCard
              icon={<HeartIcon className="h-10 w-10 text-blue-500" />}
              title="Personalized Care"
              description="Receive tailored health recommendations and reminders"
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p>Create your account and set up your health profile</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Manage Prescriptions
              </h3>
              <p>Add your prescriptions and set up automatic refills</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Care</h3>
              <p>Consult with pharmacists and manage your health</p>
            </div>
          </div>
        </section>

        {/* Virtual Consultation CTA */}
        <section className="bg-blue-50 rounded-lg p-8 text-center mb-20">
          <h2 className="text-2xl font-bold mb-4">
            Need to speak with a pharmacist?
          </h2>
          <p className="mb-6">
            Our experienced pharmacists are available for virtual consultations
          </p>
          <Link href="/views/user-view/consultation">
            <Button size="lg">Book a Consultation</Button>
          </Link>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "PharmaCare has made managing my medications so much easier. I
                  love the automatic refills and reminders!"
                </p>
                <p className="font-semibold">- Sarah J.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "The virtual consultations are a game-changer. I can get
                  expert advice without leaving my home."
                </p>
                <p className="font-semibold">- Michael R.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "I feel more in control of my health with PharmaCare. The
                  personalized care plans are incredibly helpful."
                </p>
                <p className="font-semibold">- Emily T.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* App Preview */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Experience PharmaCare on the Go
              </h2>
              <p className="mb-6">
                Download our mobile app to manage your health anytime, anywhere.
              </p>
              <div className="flex space-x-4">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  width={120}
                  height={40}
                  alt="Download on the App Store"
                />
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  width={120}
                  height={40}
                  alt="Get it on Google Play"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=300"
                width={300}
                height={400}
                alt="PharmaCare Mobile App"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl mb-8">
            Join PharmaCare today and experience the future of healthcare
          </p>
          <Link href="/views/auth/register">
            <Button size="lg">
              Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PharmaCare</h3>
              <p className="text-sm text-gray-600">
                Your comprehensive healthcare solution
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/views/general-view/about"
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/views/general-view/services"
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/views/general-view/contact"
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <span className="sr-only">X</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-600">
              &copy; 2024 PharmaCare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
