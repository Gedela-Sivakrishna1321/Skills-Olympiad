import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {

  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   message: "",
  // });

  // const [errors, setErrors] = useState({
  //   phone: "",
  // });

  // const [successMessage, setSuccessMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData({ ...formData, [id]: value });

  //   // Clear errors as the user types
  //   if (id === "phone") {
  //     setErrors({ ...errors, phone: "" });
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Validate contact number
  //   if (!/^\d{10}$/.test(formData.phone)) {
  //     setErrors({ phone: "Contact number must be exactly 10 digits." });
  //     return; // Prevent form submission
  //   }

  //   // If validation passes
  //   // alert("Form submitted successfully!");
  //   console.log("Form Data - ", formData);
  //   setFormData({
  //       name: "",
  //       phone: "",
  //       message: "",
  //     })
  //   // You can add further actions here, such as sending the form data to a server
  //    // Submit form data to Google Sheets
  //    const scriptURL = "https://script.google.com/macros/s/AKfycbwd5ETyZQfDLd8cLcv62W_L_QTBQ719KZ3bCh_CU_88-fgLMDX9iO0UTfiM6bXnf4tK/exec";

  //    try {
  //      const response = await fetch(scriptURL, {
  //        method: "POST",
  //        headers: {
  //          "Content-Type": "application/json",
  //        },
  //        body: JSON.stringify(formData),
  //      });
 
  //      const result = await response.json();
  //      if (result.success) {
  //        setSuccessMessage("Form submitted successfully!");
  //        setFormData({ name: "", phone: "", message: "" }); // Reset form
  //      } else {
  //        setErrorMessage("Failed to submit. Please try again.");
  //      }
  //    } catch (error) {
  //      console.error("Error submitting form:", error);
  //      setErrorMessage("Error submitting form. Please try again.");
  //    }
  // };

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? We're here to help and would love to hear from you.
          </p>
        </div>
        {/* md:grid-cols-2 lg:grid-cols-3 */}
        <div className="grid w-full place-items-center   gap-8">
          {/* Phone Contact */}
          <div className="bg-gray-50 p-8 flex flex-col items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg max-w-md w-full">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Phone</h3>
            </div>
            <a
              href="tel:+916370317882"
              className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              +91 6370317882
            </a>
          </div>

        </div>
          {/* Email */}
          {/* <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Email</h3>
            </div>
            <a
              href="mailto:contact@example.com"
              className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              contact@example.com
            </a>
          </div> */}

          {/* Office Hours */}
          {/* <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Office Hours</h3>
            </div>
            <p className="text-lg text-gray-600">
              Mon - Fri: 9:00 AM - 6:00 PM
            </p>
          </div> */}

        {/* Contact Form
        <div className="mt-16 max-w-2xl mx-auto">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contact Number
            </label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:ring-2 ${
                errors.phone
                  ? "focus:ring-red-500"
                  : "focus:ring-blue-500 focus:border-transparent"
              }`}
              placeholder="Your contact number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
    </div>
    {successMessage && (
        <p className="mt-4 text-green-500 text-center">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
      )} */}
      </div>
    </section>
  );
}
