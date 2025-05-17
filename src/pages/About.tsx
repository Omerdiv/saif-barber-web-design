
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="heading-primary text-center">حولنا</h1>
          </div>
        </div>
        <AboutContent />
      </div>
      <Footer />
    </div>
  );
};

export default About;
