import React from "react";

function FolderItem() {
  const items = [
    { id: 1, icon: "📄", label: "Document" },
    { id: 2, icon: "🎨", label: "Product Design" },
    { id: 3, icon: "🖌️", label: "Wireframes" },
    { id: 4, icon: "🗺️", label: "Sitemap" },
    { id: 5, icon: "📧", label: "Email Contact" },
    { id: 6, icon: "📊", label: "Report" },
    { id: 7, icon: "🛒", label: "Amazon Orders" },
    { id: 8, icon: "📚", label: "Wikipedia Articles" },
    { id: 9, icon: "🐦", label: "Twitter Feed" },
    { id: 10, icon: "🌐", label: "VK Profile" },
    { id: 11, icon: "🧪", label: "Test Results" },
  ];

  return (
    <div className="flex-grow p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Files Uploaded</h2>
      <div className="grid grid-cols-6 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <div className="text-5xl mb-2">{item.icon}</div>
            <span className="text-sm font-medium text-gray-700">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FolderItem;
