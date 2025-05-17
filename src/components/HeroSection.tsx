
import React from "react";
import { Button } from "@/components/ui/button";
import heroBackground from "../assets/hero-barber.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center pt-24 flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('/src/assets/hero-barber.jpg')`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            صالون سيف للحلاقة
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            خبرة تمتد لأكثر من 3 سنوات في قلب غبيرة، الرياض. استمتع بأرقى خدمات
            الحلاقة الرجالية، مع أجواء مريحة تناسب جميع الأعمار.
          </p>
          <Button className="button-primary text-lg" size="lg">
            احجز موعدك الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
