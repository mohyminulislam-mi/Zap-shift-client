import React from "react";
import serviceIcon from "../../../assets/service.png";

const OurServices = () => {
  const ServiceData = [
    {
      icon: <img src={serviceIcon} alt="service image" />,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: <img src={serviceIcon} alt="service image" />,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      icon: <img src={serviceIcon} alt="service image" />,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      icon: <img src={serviceIcon} alt="service image" />,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      icon: <img src={serviceIcon} alt="service image" />,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      icon: <img src={serviceIcon} alt="service image" />,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 py-8">
      <div className="text-center lg:px-52 px-10">
        <h1 className="font-bold text-4xl text-white">Our Services</h1>
        <p className="text-gray-300 my-4">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 items-center">
        {ServiceData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-xl p-4.5 h-[250px] shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-4xl mt-2">{service.icon}</span>
            <h1 className="my-4 font-bold text-lg">{service.title}</h1>
            <p className="text-center text-gray-600 text-sm px-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
