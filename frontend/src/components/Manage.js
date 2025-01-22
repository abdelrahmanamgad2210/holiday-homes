import React from "react";
import Image from "next/image";

const ManageSection = () => {
  const properties = [
    "/properties/property1.png",
    "/properties/property2.png",
    "/properties/property3.png",
    "/properties/property4.png",
  ];  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800">We Manage For</h2>
        <p className="text-gray-600 mt-2">
          Find out how much you can maximize your income with Key One Holiday Homes
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="relative w-full h-48 overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={property}
                alt={`Property ${index + 1}`}
                layout="fill" // Makes the image fill the container
                objectFit="cover" // Ensures the image maintains aspect ratio
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManageSection;
