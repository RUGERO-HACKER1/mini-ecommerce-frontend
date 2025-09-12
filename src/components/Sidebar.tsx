export default function Sidebar() {
  const categories = [
    "Men's Clothing",
    "Women's Clothing",
    "Accessories",
    "Shoes",
    "Jewellery",
    "Bags & Backpacks",
    "Watches",
  ];

  return (
    <aside className="bg-yellow-400 text-gray-900 w-64 p-6 space-y-4 font-medium">
      <h2 className="text-lg uppercase">SHOP BY CATEGORIES</h2>
      <ul className="space-y-2">
        {categories.map((cat, idx) => (
          <li key={idx} className="hover:underline cursor-pointer">{cat}</li>
        ))}
      </ul>
      <div className="mt-6 bg-green-600 text-white text-center py-2 rounded-full w-24">
        $35
      </div>
    </aside>
  );
}
