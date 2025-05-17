
import React from "react";
import { Button } from "@/components/ui/button";

interface Service {
  name: string;
  description: string;
  duration: string;
}

const services: Service[] = [
  {
    name: "حلاقة رجالية",
    description: "قص احترافي يناسب كل الأذواق",
    duration: "30 دقيقة",
  },
  {
    name: "حلاقة شعر أطفال",
    description: "أجواء مرحة للأطفال برسومات على الكرسي",
    duration: "25 دقيقة",
  },
  {
    name: "تشذيب ذقن وشارب",
    description: "تصميم متقن باستخدام ماكينة متطورة",
    duration: "20 دقيقة",
  },
  {
    name: "قصات عصرية",
    description: "أحدث القصات وفق الموضة العالمية",
    duration: "45 دقيقة",
  },
  {
    name: "علاج الشعر وتغذيته",
    description: "حمامات زيت طبيعية وتقنيات متطورة",
    duration: "60 دقيقة",
  },
  {
    name: "العناية بالبشرة بعد الحلاقة",
    description: "تدليك وتنظيف عميق للوجه",
    duration: "30 دقيقة",
  },
];

const ServicesList = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-right">
              <th className="p-4 border-b">الخدمة</th>
              <th className="p-4 border-b">الوصف</th>
              <th className="p-4 border-b">المدة</th>
              <th className="p-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="p-4 font-medium">{service.name}</td>
                <td className="p-4">{service.description}</td>
                <td className="p-4">{service.duration}</td>
                <td className="p-4">
                  <Button variant="outline">احجز</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesList;
