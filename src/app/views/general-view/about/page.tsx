import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  TrendingUp,
  Heart,
  Clock,
  Shield,
} from "lucide-react";
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Revolutionizing Healthcare
              </h2>
              <p className="mt-6 text-xl max-w-3xl">
                At PharmaCare, we're on a mission to make healthcare accessible,
                efficient, and personalized for everyone. Our innovative
                platform combines cutting-edge technology with compassionate
                care.
              </p>
              <div className="mt-10">
                <Link href="/views/auth/register">
                  <Button size="lg" variant="secondary">
                    Join Us Today
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <Image
                src="/images/background/bg-2.png"
                alt="PharmaCare App Interface"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose PharmaCare?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We offer a comprehensive suite of services designed to enhance
              your healthcare experience.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<CheckCircle className="h-8 w-8 text-blue-600" />}
                title="Easy Prescription Management"
                description="Manage all your prescriptions in one place, with automatic refills and reminders."
              />
              <FeatureCard
                icon={<Users className="h-8 w-8 text-blue-600" />}
                title="24/7 Customer Support"
                description="Our dedicated team is always ready to assist you with any questions or concerns."
              />
              <FeatureCard
                icon={<TrendingUp className="h-8 w-8 text-blue-600" />}
                title="Health Tracking"
                description="Monitor your health progress with our intuitive tracking tools and insights."
              />
              <FeatureCard
                icon={<Heart className="h-8 w-8 text-blue-600" />}
                title="Personalized Care Plans"
                description="Receive tailored health recommendations based on your unique profile."
              />
              <FeatureCard
                icon={<Clock className="h-8 w-8 text-blue-600" />}
                title="Quick Delivery"
                description="Get your medications delivered right to your doorstep in record time."
              />
              <FeatureCard
                icon={<Shield className="h-8 w-8 text-blue-600" />}
                title="Secure & Confidential"
                description="Your health data is protected with state-of-the-art security measures."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <TestimonialCard
              quote="PharmaCare has made managing my medications so much easier. I love the automatic refills and reminders!"
              author="Sarah J."
              role="Patient"
            />
            <TestimonialCard
              quote="As a healthcare provider, I appreciate how PharmaCare streamlines the prescription process. It's a game-changer."
              author="Dr. Michael R."
              role="Physician"
            />
            <TestimonialCard
              quote="The customer support team at PharmaCare is exceptional. They're always there when I need help."
              author="Emily T."
              role="Caregiver"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Join PharmaCare today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/views/auth/register">
                <Button size="lg" variant="secondary">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="./contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
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
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium text-gray-900">
          &ldquo;{quote}&rdquo;
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </CardContent>
    </Card>
  );
}
