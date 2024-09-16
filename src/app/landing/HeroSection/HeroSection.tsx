import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex h-[85vh]">
      <div className="w-full lg:w-1/3 flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-primary mb-4">MediSphere</h1>
        <p className="text-lg text-gray-700 mb-8">
          Your comprehensive pharmacy store management system.
        </p>
        <div className="space-y-4">
          <Link
            href="/auth/login"
            className="bg-primary text-white py-2 px-4 rounded hover:bg-buttonHover w-full text-center"
          >
            Log In
          </Link>
          <Link
            href="/auth/signup"
            className="bg-primary text-white py-2 px-4 rounded hover:bg-buttonHover w-full text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full lg:w-2/3 h-full">
        <img src="/images/logo.png" alt="logo" className="w-64 h-64 mb-4" />
        <h1 className="text-gray-700 text-4xl font-bold">MediSphere</h1>
      </div>
    </section>
  );
}
