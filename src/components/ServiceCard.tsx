
import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const ServiceCard = ({ icon, title, className }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "card-gradient rounded-lg p-6 text-center card-hover",
        className
      )}
    >
      <div className="text-4xl mb-4 text-primary flex justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default ServiceCard;
