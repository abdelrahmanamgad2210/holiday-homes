import Image from "next/image";

const PropertySection = () => {
  return (
    <section  className="bg-gray-50 py-10">
      <div id="About" className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
        {/* Images Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-3/4 h-auto">
            <Image
              src="/img/img1.png" // Public folder path
              alt="Luxury Living Room"
              layout="responsive" // Maintains aspect ratio
              width={800} // Original width of the image
              height={600} // Original height of the image
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="absolute w-1/2 h-auto bottom-[-20px] left-10">
            <Image
              src="/img/img2.png" // Public folder path
              alt="Modern Interior"
              layout="responsive"
              width={400}
              height={300}
              className="rounded-lg shadow-lg border border-gray-200"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Premier Property Management for the Chosen Ones
          </h2>
          <p className="mt-4 text-gray-600">
            Experience exceptional property management tailored exclusively
            for discerning property owners. We elevate your investment with
            unparalleled professionalism and personalized attention, ensuring
            your property reaches its fullest potential. Trust us to provide
            the finest care that only the select few can appreciate.
          </p>
          <button className="mt-6 px-6 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
