
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="heading-primary text-center">الاسئلة الشائعة</h1>
          </div>
        </div>
        <FAQAccordion />
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
