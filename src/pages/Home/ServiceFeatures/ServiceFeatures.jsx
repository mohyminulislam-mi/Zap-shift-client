import React from "react";
import livePaking from "../assets/live-tracking.png";
import deleviry from "../assets/safe-delivery.png";

const ServiceFeatures = () => {
  const features = [
    {
      title: "Live Parcel Tracking",
      text: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
      icon: livePaking,
    },
    {
      title: "100% Safe Delivery",
      text: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      icon: deleviry,
    },
    {
      title: "24/7 Call Center Support",
      text: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      icon: deleviry,
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <div className="border-t-2 border-dashed border-gray-400 mb-10"></div>

      <div className="flex flex-col gap-8">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 
                       flex flex-col md:flex-row items-center md:items-start gap-6 
                       hover:shadow-md transition-all"
          >
            <img src={item.icon} alt="" className="w-32 sm:w-40 mx-auto md:mx-0" />

            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-gray-800 text-lg sm:text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-b-2 border-dashed border-gray-400 mt-10"></div>
    </section>
  );
};

export default ServiceFeatures;