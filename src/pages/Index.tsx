
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceHighlights from "@/components/ServiceHighlights";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServiceHighlights />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
