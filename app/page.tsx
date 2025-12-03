
import Feature from "@/components/home/feature";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/hero";
import { PricingSection } from "@/components/home/pricing-section";
// import { HomeRedirect } from "@/components/home/home-redirect";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  // if (userId) {
  //   redirect("/dashboard");
  // }

  return (
    <div className="min-h-screen flex flex-col mesh-background-subtle">
      {/* <HomeRedirect /> */}
      <Header />
      <HeroSection />
      <Feature />
      <PricingSection />
      <Footer />
    </div>
  );
}
