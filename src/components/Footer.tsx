
import React from "react";
import { Phone, Clock, MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
            معلومات الاتصال
          </h3>
          <div className="flex items-start space-x-4 space-x-reverse">
            <MapPin className="h-5 w-5 text-primary mt-1" />
            <p>
              3693 عمار بن ياسر - رضي الله عنهما -، غبيرة، الرياض 12665 7025،
              الرياض 12219، المملكة العربية السعودية
            </p>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <Phone className="h-5 w-5 text-primary" />
            <p dir="ltr">+966 50 189 9860</p>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <Clock className="h-5 w-5 text-primary" />
            <p>ساعات العمل: 10 ص–12 ظ (كل أيام الأسبوع)</p>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <Instagram className="h-5 w-5 text-primary" />
            <p dir="ltr">@saif_barber_riyadh</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
            روابط سريعة
          </h3>
          <div className="grid grid-cols-1 gap-2">
            <Link to="/" className="text-gray-400 hover:text-white transition">
              الرئيسية
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-white transition">
              حولنا
            </Link>
            <Link to="/services" className="text-gray-400 hover:text-white transition">
              خدماتنا
            </Link>
            <Link to="/gallery" className="text-gray-400 hover:text-white transition">
              معرض الأعمال
            </Link>
            <Link to="/faq" className="text-gray-400 hover:text-white transition">
              الاسئلة الشائعة
            </Link>
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
            خريطة الموقع
          </h3>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              title="Saif Barber Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.7127853321787!2d46.735626475332!3d24.621727384155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0538cadc2b19%3A0xa300ff603a08ddef!2z2LXYp9mE2YjZhiDYs9mK2YEg2YTZhNit2YTYp9mC2Kk!5e0!3m2!1sar!2s!4v1716583261058!5m2!1sar!2s"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 mt-12 pt-4 border-t border-gray-700">
        <div className="flex justify-center">
          <p>© {new Date().getFullYear()} صالون سيف للحلاقة - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
