import Header from "../components/consistent/Header/Header";
import Footer from "../components/consistent/Footer/Footer";
import HeroSection from "../landing/HeroSection/HeroSection";
import WhoWeAreSection from "../landing/WhoWeAreSection/WhoWeAreSection";
import TeamSection from "../landing/TeamSection/TeamSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen text-center mx-auto max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <Header />
      <main className="flex-1 flex flex-col justify-center p-2 sm:p-2">
        <HeroSection />
        <WhoWeAreSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
