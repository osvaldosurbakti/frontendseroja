import React from "react";
import ContactForm from "../../components/pages/hubungiKami/ContactForm";
import WhatsAppButton from "../../components/pages/hubungiKami/WhatsAppButton";

const HubungiKami = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Hubungi Kami</h2>

        {/* Formulir Kontak */}
        <div className="mb-12">
          <ContactForm />
        </div>

        {/* Tombol WhatsApp */}
        <div className="text-center">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
};

export default HubungiKami;
