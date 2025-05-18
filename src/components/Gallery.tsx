
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const filters = [
  { id: "all", name: "الكل" },
  { id: "before-after", name: "قبل / بعد" },
  { id: "modern", name: "قصات عصرية" },
  { id: "classic", name: "كلاسيك" }
];

// This would normally be populated with actual images
const galleryItems = [
  {
    id: 1,
    category: ["before-after"],
    title: "قبل وبعد ",
    imageUrl: "/lovable-uploads/befor1.webp",
  },
  {
    id: 2,
    category: ["modern"],
    title: "قصة عصرية ",
    imageUrl: "/lovable-uploads/after1.webp",
  },
  {
    id: 3,
    category: ["classic"],
    title: "قصة كلاسيكية",
    imageUrl: "/lovable-uploads/after2.webp",
  },
  {
    id: 4,
    category: ["extras"],
    title: "تنظيف البشرة",
    imageUrl: "/lovable-uploads/after3.webp",
  },
  {
    id: 5,
    category: ["before-after"],
    title: "قبل وبعد - تشذيب اللحية",
    imageUrl: "/lovable-uploads/bear_1.webp",
  },
  {
    id: 6,
    category: ["modern"],
    title: "قصة عصرية بتدرج",
    imageUrl: "/lovable-uploads/bear_2.webp",
  },
  {
    id: 7,
    category: ["extras"],
    title: "قبل وبعد",
    imageUrl: "/lovable-uploads/after_4.webp",
  },
  {
    id: 8,
    category: ["extras"],
    title: "قبل وبعد",
    imageUrl: "/lovable-uploads/after1.webp",
  },
  {
    id: 9,
    category: ["extras"],
    title: "قبل وبعد",
    imageUrl: "/lovable-uploads/after2.webp",
  },
  {
    id: 10,
    category: ["extras"],
    title: "قبل وبعد",
    imageUrl: "/lovable-uploads/after3.webp",
  },
  {
    id: 11,
    category: ["extras"],
    title: "تصميم لحية",
    imageUrl: "/lovable-uploads/bear_1.webp",
  },
  {
    id: 12,
    category: ["extras"],
    title: "تصميم لحية",
    imageUrl: "/lovable-uploads/bear_2.webp",
  },
  {
    id: 13,
    category: ["extras"],
    title: "تصميم لحية",
    imageUrl: "/lovable-uploads/bear_3.webp",
  },
  {
    id: 14,
    category: ["extras"],
    title: "قبل وبعد",
    imageUrl: "/lovable-uploads/befor1.webp",
  },
  {
    id: 15,
    category: ["extras"],
    title: " قبل وبعد",
    imageUrl: "/lovable-uploads/befor2.webp",
  },
    {
    id: 16,
    category: ["extras"],
    title: "قبل وبعد",
    imageUrl: "/lovable-uploads/befor3.webp",
  },
  {
    id: 17,
    category: ["extras"],
    title: "قبل وبعد",
    imageUrl: "/lovable-uploads/before_4.webp",
  },
  {
    id: 18,
    category: ["extras"],
    title: "قصة اطفال",
    imageUrl: "/lovable-uploads/children_1.webp",
  },
  {
    id: 19,
    category: ["extras"],
    title: "قصة اطفال",
    imageUrl: "/lovable-uploads/children_2.webp",
  },
  {
    id: 20,
    category: ["extras"],
    title: "قصة شعر",
    imageUrl: "/lovable-uploads/hair_1.webp",
  },
  {
    id: 21,
    category: ["extras"],
    title: "قصة شعر",
    imageUrl: "/lovable-uploads/hair_2.webp",
  },
  {
    id: 22,
    category: ["extras"],
    title: "قصة شعر",
    imageUrl: "/lovable-uploads/hair_3.webp",
  },
  {
    id: 23,
    category: ["extras"],
    title: "قصة شعر",
    imageUrl: "/lovable-uploads/hair_4.webp",
  },
  {
    id: 24,
    category: ["extras"],
    title: "قصة شعر",
    imageUrl: "/lovable-uploads/hair_5.webp",
  },
  {
    id: 25,
    category: ["extras"],
    title: "قناع",
    imageUrl: "/lovable-uploads/skin_1.webp",
  },
  {
    id: 26,
    category: ["extras"],
    title: "تنظيف بشرة",
    imageUrl: "/lovable-uploads/wax1.webp",
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
