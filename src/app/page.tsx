import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-8xl">MediSphere</h1>
        <p className="text-2xl text-gray-400">
          MediSphere is a comprehensive pharmacy store management system
          designed to streamline pharmacy operations and enhance customer
          experience. Built as a Progressive Web App (PWA), MediSphere offers a
          unified platform for managing inventory, prescriptions, and sales
          while providing a seamless and engaging experience for both pharmacy
          staff and customers.
        </p>
      </main>
      <footer>
        By Amour Omar
      </footer>
    </div>
  );
}
