import React from "react";

const GoogleMapsEmbed = () => {
  return (
    <div className="mt-10 md:mt-0">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Lokasi Kami</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.025251491239!2d98.62496!3d3.5816739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312e52dac47f4b%3A0x5e3b00ed05abdf62!2sseroja%20medan%20group!5e0!3m2!1sen!2sid!4v1739625764862!5m2!1sen!2sid"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Seroja Medan Group"
      ></iframe>
    </div>
  );
};

export default GoogleMapsEmbed;
