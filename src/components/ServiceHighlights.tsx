
import React from "react";
import ServiceCard from "./ServiceCard";
import { Scissors, Razor, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiceHighlights = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="heading-secondary text-center mb-12">
          نظرة سريعة على الخدمات
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Scissors className="h-12 w-12" />}
            title="قص الشعر"
            className="animate-fade-in animate-delay-100"
          />
          <ServiceCard
            icon={<Razor className="h-12 w-12" />}
            title="تشذيب ذقن وشارب"
            className="animate-fade-in animate-delay-200"
          />
          <ServiceCard
            icon={<User className="h-12 w-12" />}
            title="حلاقة أطفال"
            className="animate-fade-in animate-delay-300"
          />
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link to="/services">عرض جميع الخدمات</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
