
import React from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  date: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  date,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "backdrop-blur-lg bg-white/50 rounded-lg p-6 shadow card-hover border border-red-500 shadow-glow",
        className
      )}
    >
      <div className="mb-4 text-4xl text-gray-300">"</div>
      <p className="text-lg font-medium mb-6">{quote}</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">– {author}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
