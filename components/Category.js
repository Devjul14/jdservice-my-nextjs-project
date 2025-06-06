"use client";

import React, { useEffect, useState } from "react";
import {
  TruckIcon,
  WrenchScrewdriverIcon,
  QueueListIcon,
  SparklesIcon,
  UsersIcon,
  StopCircleIcon,
} from "@heroicons/react/24/outline";

// Mapping antara nama string di database dan komponen ikon
const iconMap = {
  TruckIcon: TruckIcon,
  WrenchScrewdriverIcon: WrenchScrewdriverIcon,
  QueueListIcon: QueueListIcon,
  SparklesIcon: SparklesIcon,
  UsersIcon: UsersIcon,
  StopCircleIcon: StopCircleIcon,
  // Tambahkan ikon lain sesuai kebutuhan
};

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/servicecategory");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Select a category to get started
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            if (!iconMap[category.icon]) {
              console.warn("❗ Icon tidak ditemukan untuk:", category.icon);
            }

            const IconComponent = iconMap[category.icon] || SparklesIcon;

            return (
              <div
                key={category.category_id}
                className="flex items-center bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex-shrink-0 mr-6">
                  <IconComponent className="w-8 h-8 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {category.category_name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
