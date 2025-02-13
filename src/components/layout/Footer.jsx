import React from "react";
import { useTranslation } from "react-i18next"; // Import hook useTranslation
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation(); // Inisialisasi translasi

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Tentang Kami */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.about_us")}</h3>
            <p className="text-gray-400">
              {t("footer.about_description")}
            </p>
          </div>

          {/* Link Cepat */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.quick_links")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-blue-500 transition duration-300">
                  {t("footer.home")}
                </a>
              </li>
              <li>
                <a href="/tentang-kami" className="text-gray-400 hover:text-blue-500 transition duration-300">
                  {t("footer.about_us")}
                </a>
              </li>
              <li>
                <a href="/portofolio" className="text-gray-400 hover:text-blue-500 transition duration-300">
                  {t("footer.portfolio")}
                </a>
              </li>
              <li>
                <a href="/karir" className="text-gray-400 hover:text-blue-500 transition duration-300">
                  {t("footer.career")}
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.contact")}</h3>
            <ul className="text-gray-400 space-y-2">
              <li>{t("footer.email")}: info@serojamedan.com</li>
              <li>{t("footer.phone")}: +62 123 4567 890</li>
              <li>{t("footer.address")}: Jl. Contoh No. 123, Medan, Indonesia</li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.social_media")}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} {t("footer.copyright")}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
