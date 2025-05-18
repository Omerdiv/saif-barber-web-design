
import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/966501899860", "_blank");
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 backdrop-blur-lg ${
        isScrolled ? "bg-white/70 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-50">
          <h1 className="font-bold text-2xl">صالون سيف للحلاقة</h1>
        </Link>

        {/* Navigation for desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-2 space-x-reverse">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'text-primary after:scale-x-100' : ''}`}
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'text-primary after:scale-x-100' : ''}`}
              >
                حولنا
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`nav-link ${isActive('/services') ? 'text-primary after:scale-x-100' : ''}`}
              >
                خدماتنا
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className={`nav-link ${isActive('/gallery') ? 'text-primary after:scale-x-100' : ''}`}
              >
                معرض الأعمال
              </Link>
            </li>
            <li>
              <Link 
                to="/faq" 
                className={`nav-link ${isActive('/faq') ? 'text-primary after:scale-x-100' : ''}`}
              >
                الاسئلة الشائعة
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact buttons */}
        <div className="hidden md:flex items-center space-x-2 space-x-reverse">
          <Button variant="outline" className="text-foreground flex items-center">
            <Phone className="h-4 w-4 ml-2" />
            <span dir="ltr">+966 50 189 9860</span>
          </Button>
          <Button className="flex items-center" onClick={handleWhatsAppClick}>
            <MessageSquare className="h-4 w-4 ml-2" />
            واتساب
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden z-50" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 backdrop-blur-xl bg-white/90 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <nav className="mb-8">
            <ul className="flex flex-col items-center space-y-6">
              <li>
                <Link
                  to="/"
                  className={`nav-link text-xl ${isActive('/') ? 'text-primary' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`nav-link text-xl ${isActive('/about') ? 'text-primary' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  حولنا
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`nav-link text-xl ${isActive('/services') ? 'text-primary' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className={`nav-link text-xl ${isActive('/gallery') ? 'text-primary' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  معرض الأعمال
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className={`nav-link text-xl ${isActive('/faq') ? 'text-primary' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  الاسئلة الشائعة
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col space-y-4">
            <Button variant="outline" className="text-foreground flex items-center justify-center">
              <Phone className="h-4 w-4 ml-2" />
              <span dir="ltr">+966 50 189 9860</span>
            </Button>
            <Button className="flex items-center justify-center" onClick={handleWhatsAppClick}>
              <MessageSquare className="h-4 w-4 ml-2" />
              واتساب
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
