import React from "react";

export default function Category() {
  const categories = [
    {
      id: 1,
      name: "Clothes",
      count: 983,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-gray-500"
        >
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
          <path d="M3 6h18"></path>
          <path d="M16 10a4 4 0 01-8 0"></path>
        </svg>
      ),
    },
    {
      id: 2,
      name: "Ladies Bag",
      count: 142,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-gray-500"
        >
          <rect x="3" y="8" width="18" height="12" rx="2"></rect>
          <path d="M7 8V5a4 4 0 018 0v3"></path>
        </svg>
      ),
    },
    {
      id: 3,
      name: "Shoes",
      count: 476,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-gray-500"
        >
          <path d="M18.5 2l-12 10.5 5 5L22 6.5 18.5 2z"></path>
          <path d="M2 22l3-3"></path>
          <path d="M14 6l3 3"></path>
        </svg>
      ),
    },
    {
      id: 4,
      name: "Ornaments",
      count: 849,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-gray-500"
        >
          <circle cx="12" cy="12" r="8"></circle>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="M20 12h2"></path>
          <path d="M2 12h2"></path>
        </svg>
      ),
    },
    {
      id: 5,
      name: "Watches",
      count: 253,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-gray-500"
        >
          <circle cx="12" cy="12" r="7"></circle>
          <polyline points="12 9 12 12 13.5 13.5"></polyline>
          <path d="M16.51 17.35l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 019.83 1h4.35a2 2 0 012 1.82l.35 3.83"></path>
        </svg>
      ),
    },
    {
      id: 6,
      name: "Smart Phones",
      count: 94,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-gray-500"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold  text-gray-900 text-center mb-12">
          Select a category to get started
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center bg-base-100 p-6 rounded-lg hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 mr-6">{category.icon}</div>
              <div>
                <h3 className="text-lg font-medium text-gray-50">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.count} Available Products
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
