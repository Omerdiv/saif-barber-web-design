
import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-scale-in">
          مستعد للتغيير؟
        </h2>
        <Button
          variant="secondary"
          size="lg"
          className="bg-white text-primary hover:bg-white/90"
        >
          احجز موعدك الآن
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
