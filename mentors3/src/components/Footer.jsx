import {
  Home,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  PhoneIcon as WhatsApp,
} from "lucide-react";
import { Link } from "react-router-dom";

const footerSections = {
  "About Us": [
    { name: "About Director Sir", link: "https://www.mentorsedu.com/who-we-are/about-director-sir/" },
    { name: "Director's Message", link: "https://www.mentorsedu.com/who-we-are/director-message/" },
    { name: "Why Only Mentors Eduserv", link: "https://www.mentorsedu.com/who-we-are/why-only-mentors-eduserv/" },
    { name: "Study Centres", link: "https://www.mentorsedu.com/who-we-are/study-centres/" },
    { name: "Achiever Campus", link: "https://www.mentorsedu.com/who-we-are/achiever-campus/" },
  ],
  "Foundation Course": [
    { name: "INFANT STEP", link: "https://www.mentorsedu.com/courses/foundation/" },
    { name: "PREP STEP", link: "https://www.mentorsedu.com/courses/foundation/#PREPSTEP" },
    { name: "FIRST STEP", link: "https://www.mentorsedu.com/courses/foundation/#FIRSTSTEP" },
    { name: "GENESIS", link: "https://www.mentorsedu.com/courses/foundation/#GENESIS" },
    { name: "CATAPULT", link: "https://www.mentorsedu.com/courses/foundation/#CATAPULT" },
  ],
  "Medical Course": [
    { name: "MEDICAL GROUND ZERO", link: "https://www.mentorsedu.com/courses/medical/#MEDICALGROUNDZERO" },
    { name: "MEDICAL COUNTDOWN", link: "https://www.mentorsedu.com/courses/medical/#MEDICALCOUNTDOWN" },
    { name: "MEDICAL REBOOST", link: "https://www.mentorsedu.com/courses/medical/#MEDICALREBOOST" },
  ],
  "Engineering Course": [
    { name: "GROUND ZERO", link: "https://www.mentorsedu.com/courses/engineering/#GROUNDZERO" },
    { name: "COUNTDOWN", link: "https://www.mentorsedu.com/courses/engineering/#COUNTDOWN" },
    { name: "REBOOST", link: "https://www.mentorsedu.com/courses/engineering/#REBOOST" },
  ],
};

const contactInfo = [
  {
    icon: Home,
    title: "Visit Centre",
    content:
      "2nd & 3rd Floor, Prateek tower Kalambagh Road, Rajendrapuri Ln, near SDO QUARTER, Muzaffarpur, Bihar 842001",
    link: "https://www.google.com/maps/dir//2nd+%26+3rd+Floor,+Prateek+tower+Kalambagh+Road,+Rajendrapuri+Ln,+near+SDO+QUARTER,+Muzaffarpur,+Bihar+842001/@26.109928,85.2975949,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39ed1134bb663039:0x5df1d1844c32aaf9!2m2!1d85.3799915!2d26.1099529?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Phone,
    title: "Give Us a Call",
    content: "9569668800",
    link: "tel:+919569668800",
    subContent: "(08:00 AM to 08:00 PM)",
  },
  {
    icon: Mail,
    title: "Send us a Message",
    content: "info@mentorsedu.com",
    link: "mailto:info@mentorsedu.com",
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/mentorsedu" },
  { icon: Twitter, href: "https://twitter.com/mentorsedu" },
  { icon: Youtube, href: "https://www.youtube.com/mentorsedu" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/mentorsedu" },
  { icon: Instagram, href: "https://www.instagram.com/mentorsedu" },
  { icon: WhatsApp, href: "https://wa.me/919569668800" },
];

export default function Footer() {
  return (
    <footer className="bg-[#4b2e2e] text-gray-100 pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Object.entries(footerSections).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.link}
                      className="hover:text-white transition-colors flex items-center gap-2 justify-center text-sm hover:underline"
                    >
                      <span className="text-base">›</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-t border-gray-500">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-800 mb-3 hover:bg-gray-200 transition-all">
                <info.icon className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-white">{info.title}</h4>
              <a
                href={info.link}
                className="text-sm leading-relaxed text-gray-300 hover:text-white transition-colors"
              >
                {info.content}
              </a>
              {info.subContent && (
                <p className="text-sm text-gray-400 mt-1">{info.subContent}</p>
              )}
            </div>
          ))}
        </div>

        {/* Corporate Address and Social Links */}
        <div className="flex flex-col items-center gap-3 py-6 border-t border-gray-500">
          <p className="text-sm text-gray-300 text-center">
            Corporate Office : Parus Lok Commercial Complex, 1st Floor, Boring
            Road Crossing, Near Quality Corner, Patna-800001
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-gray-400 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 pt-6 border-t border-gray-500">
          Copyright (c) 2025 Mentors Eduserv. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
