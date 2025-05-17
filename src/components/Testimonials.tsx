
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container mx-auto">
        <h2 className="heading-secondary text-center mb-12">آراء العملاء</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="موقع جميل جدأ موفقين ان شاء الله"
            author="مالك الأمين"
            date="منذ سنتين"
            className="animate-fade-in animate-delay-100"
          />
          <TestimonialCard
            quote="أحسن الصوالين التي زرتها"
            author="بلال النور"
            date="منذ سنتين"
            className="animate-fade-in animate-delay-200"
          />
          <TestimonialCard
            quote="موقع جميل يستحق الزيارة"
            author="بابكر سيف"
            date="منذ 3 سنوات"
            className="animate-fade-in animate-delay-300"
          />
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">
            نتشرف بزيارتك لصالوننا ونسعد بتقييمك لخدماتنا
          </h3>
          <Button
            className="button-primary"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/%D8%B5%D8%A7%D9%84%D9%88%D9%86+%D8%B3%D9%8A%D9%81+%D9%84%D9%84%D8%AD%D9%84%D8%A7%D9%82%D8%A9%E2%80%AD/@24.6217273,46.7378152,17z/data=!4m8!3m7!1s0x3e2f0538cadc2b19:0xa300ff603a08ddef!8m2!3d24.6217273!4d46.7378152!9m1!1b1!16s%2Fg%2F11sg_cwndr?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D",
                "_blank"
              )
            }
          >
            قيمنا على جوجل
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
