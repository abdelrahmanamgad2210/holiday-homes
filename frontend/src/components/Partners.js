import React from "react";
import Image from "next/image";

const Partners = () => {
  const partners = ["/logos/partner1.png", "/logos/partner2.png", "/logos/partner3.png"]; // Corrected paths

  return (
    <section id="partners" className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">Our Partners</h2>
        <div className="flex justify-center space-x-6">
          {partners.map((logo, index) => (
            <div key={index} className="w-32 h-32 relative">
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                layout="fill"
                objectFit="contain" // Ensures images are fully contained
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
