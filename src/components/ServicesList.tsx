
import React from "react";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface Service {
  name: string;
  description: string;
  duration: string;
  image: string;
}

const services: Service[] = [
  {
    name: "حلاقة رجالية",
    description: "قص احترافي يناسب كل الأذواق",
    duration: "30 دقيقة",
    image: "/lovable-uploads/8b6fe6e7-c0d8-4220-bb5a-99f553340352.png"
  },
  {
    name: "حلاقة شعر أطفال",
    description: "أجواء مرحة للأطفال برسومات على الكرسي",
    duration: "25 دقيقة",
    image: "/lovable-uploads/2374055e-516a-467a-9df9-a493e7e2a8d9.png"
  },
  {
    name: "تشذيب ذقن وشارب",
    description: "تصميم متقن باستخدام ماكينة متطورة",
    duration: "20 دقيقة",
    image: "/lovable-uploads/429a519e-ac2f-4d0f-ad78-e4e90ce136be.png"
  },
  {
    name: "قصات عصرية",
    description: "أحدث القصات وفق الموضة العالمية",
    duration: "45 دقيقة",
    image: "/lovable-uploads/511dc986-62d2-4c4c-b107-1c71880847cf.png"
  },
  {
    name: "علاج الشعر وتغذيته",
    description: "حمامات زيت طبيعية وتقنيات متطورة",
    duration: "60 دقيقة",
    image: "/lovable-uploads/43a25d28-cf84-49ff-84a3-916788e49ba9.png"
  },
  {
    name: "العناية بالبشرة بعد الحلاقة",
    description: "تدليك وتنظيف عميق للوجه",
    duration: "30 دقيقة",
    image: "/lovable-uploads/78faf805-d573-4c90-b6be-e12161a792ec.png"
  },
];

const ServicesList = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="backdrop-blur-lg bg-white/50 rounded-lg overflow-hidden shadow-glow border border-red-500 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-gray-500 mb-4">
                <Clock className="h-4 w-4 ml-1" />
                <span>{service.duration}</span>
              </div>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open("https://wa.me/966501899860", "_blank")}
              >
                احجز
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
