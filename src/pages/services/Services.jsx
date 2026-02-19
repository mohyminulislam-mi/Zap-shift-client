import React from "react";

const Services = () => {
  const services = [
    {
      title: "Standard Delivery",
      desc: "2-3 diner moddhe nishchit delivery.",
      icon: "🚚",
    },
    {
      title: "Express Delivery",
      desc: "24 ghontar moddhe urgent parcel delivery.",
      icon: "⚡",
    },
    {
      title: "Cash on Delivery",
      desc: "Nishchinte ponno hate peye taka porishodh.",
      icon: "💸",
    },
    {
      title: "E-commerce Logistics",
      desc: "Online shop-er jonno special delivery support.",
      icon: "📦",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Amader Seba Shomuho
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="card-body items-center text-center">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h2 className="card-title font-bold">{s.title}</h2>
              <p>{s.desc}</p>
              <div className="card-actions mt-4">
                <button className="btn btn-primary btn-sm text-white">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
