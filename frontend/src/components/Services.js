import React from "react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      icon: "/icons/phone.png", // Replace with your icon path
      title: "24/7 Customer Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id mauris nulla.",
    },
    {
      icon: "/icons/paper.png", // Replace with your icon path
      title: "Hassle Free Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id mauris nulla.",
    },
    {
      icon: "/icons/person-female.png", // Replace with your icon path
      title: "Housekeeping & Maintenance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id mauris nulla.",
    },
    {
      icon: "/icons/quill.png", // Replace with your icon path
      title: "Interior Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id mauris nulla.",
    },
    {
      icon: "/icons/graph-pie.png", // Replace with your icon path
      title: "Marketing & Advertising",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id mauris nulla.",
    },
    {
      icon: "/icons/checklist.png", // Replace with your icon path
      title: "In-Person Check in/Check out",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id mauris nulla.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div id="services" className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-green-300 rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition"
            >
              {/* Icon */}
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
