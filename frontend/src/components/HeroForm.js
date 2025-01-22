import { useState } from "react";
import axios from "axios";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    property_type: "",
    bedrooms: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/submit-lead", formData);
      alert("Lead submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        property_type: "",
        bedrooms: "",
        message: "",
      });
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      alert("Error submitting lead.");
    }
  };

  return (
    <section
      id="home"
      className="bg-cover bg-center bg-no-repeat py-10"
      style={{
        backgroundImage: `url('/img/Waterfront.png')`, // Updated path
      }}
    >
      <div className="container mx-auto text-center bg-white bg-opacity-80 p-6 rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-black">
          Welcome to Holiday Homes
        </h1>
        <p className="mb-8 text-black">Find your perfect holiday home today!</p>
        <form
          onSubmit={handleSubmit}
          className="border border-blue-300 space-y-4 max-w-md mx-auto p-4 rounded bg-white bg-opacity-90"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded text-black"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded text-black"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded text-black"
          />
          <select
            name="property_type"
            value={formData.property_type}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded text-black"
          >
            <option value="">Select Property Type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
          <input
            type="number"
            name="bedrooms"
            placeholder="Number of Bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded text-black"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded text-black"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
