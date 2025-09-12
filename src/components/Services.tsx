export default function Services() {
  const services = [
    { icon: "🚚", label: "Free Shipping" },
    { icon: "🔒", label: "Secure Payment" },
    { icon: "↩️", label: "Easy Returns" },
    { icon: "📞", label: "24/7 Support" },
  ];

  return (
    <section className="bg-white p-6 rounded-xl shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {services.map((service, idx) => (
          <div key={idx} className="p-4 border rounded shadow">
            <div className="text-3xl mb-2">{service.icon}</div>
            <p className="text-sm font-medium text-gray-700">{service.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
