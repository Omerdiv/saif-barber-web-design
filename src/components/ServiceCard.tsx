
import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
  image?: string;
}

const ServiceCard = ({ icon, title, className, image }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg p-6 text-center card-hover backdrop-blur-lg bg-white/50 border border-red-500 shadow-glow overflow-hidden",
        className
      )}
    >
      {image && (
        <div className="mb-4 h-48 overflow-hidden rounded">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
      )}
      <div className="text-4xl mb-4 text-primary flex justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default ServiceCard;
