import React from "react";
import Image from "next/image";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "/icons/graph-line.png", // Replace with your icon path
      title: "Increased Return On Investment",
      description:
        "Experience the financial rewards of our dedicated vacation rentals management services. Key One Holiday Homes not only ensures increased ROI but also maximizes the potential of your vacation home in Dubai.",
    },
    {
      icon: "/icons/vector.png", // Replace with your icon path
      title: "Reduced Workload",
      description:
        "Increased efficiency and more time for what matters - that is what Key One Holiday Homes promises you with comprehensive short-term rental property management solutions.",
    },
    {
      icon: "/icons/person-male.png", // Replace with your icon path
      title: "Hassle-Free Management",
      description:
        "With Key One Holiday Homes' comprehensive suite of services, ensuring seamless bookings, top-notch guest experiences, and a worry-free income stream, you can confidently entrust your vacation home, knowing that every detail is handled with precision and care.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800">
          Let The Professionals Manage Your Holiday Home
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Maximize your investment and let our dedicated team at Key One Holiday
          Homes handle the details, ensuring a seamless renting experience for
          both you and your guests.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {benefit.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
