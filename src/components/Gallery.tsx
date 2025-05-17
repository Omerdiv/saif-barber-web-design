
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const filters = [
  { id: "all", name: "الكل" },
  { id: "before-after", name: "قبل / بعد" },
  { id: "modern", name: "قصات عصرية" },
  { id: "classic", name: "كلاسيك" },
  { id: "extras", name: "خدمات إضافية" },
];

// This would normally be populated with actual images
const galleryItems = [
  {
    id: 1,
    category: ["before-after"],
    title: "قبل وبعد - قصة كلاسيكية",
    imageUrl: "https://placehold.co/600x400/222/fff?text=قبل+/+بعد+1",
  },
  {
    id: 2,
    category: ["modern"],
    title: "قصة فيد عصرية",
    imageUrl: "https://placehold.co/600x400/222/fff?text=قصة+عصرية+1",
  },
  {
    id: 3,
    category: ["classic"],
    title: "قصة كلاسيكية",
    imageUrl: "https://placehold.co/600x400/222/fff?text=قصة+كلاسيكية+1",
  },
  {
    id: 4,
    category: ["extras"],
    title: "تنظيف البشرة",
    imageUrl: "https://placehold.co/600x400/222/fff?text=خدمة+إضافية+1",
  },
  {
    id: 5,
    category: ["before-after"],
    title: "قبل وبعد - تشذيب اللحية",
    imageUrl: "https://placehold.co/600x400/222/fff?text=قبل+/+بعد+2",
  },
  {
    id: 6,
    category: ["modern"],
    title: "قصة عصرية بتدرج",
    imageUrl: "https://placehold.co/600x400/222/fff?text=قصة+عصرية+2",
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category.includes(activeFilter));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            onClick={() => setActiveFilter(filter.id)}
            className="mb-2"
          >
            {filter.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg shadow-md card-hover"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
