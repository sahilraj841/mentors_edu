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
    { name: "About Director Sir", link: "/about-director-sir" },
    { name: "Director's Message", link: "/directors-message" },
    { name: "Why Only Mentors Eduserv", link: "/why-mentors" },
    { name: "Study Centres", link: "/study-centres" },
    { name: "Achiever Campus", link: "/achiever-campus" },
  ],
  "Foundation Course": [
    { name: "INFANT STEP", link: "/foundation/infant-step" },
    { name: "PREP STEP", link: "/foundation/prep-step" },
    { name: "FIRST STEP", link: "/foundation/first-step" },
    { name: "GENESIS", link: "/foundation/genesis" },
    { name: "CATAPULT", link: "/foundation/catapult" },
  ],
  "Medical Course": [
    { name: "MEDICAL GROUND ZERO", link: "/medical/ground-zero" },
    { name: "MEDICAL COUNTDOWN", link: "/medical/countdown" },
    { name: "MEDICAL REBOOST", link: "/medical/reboost" },
  ],
  "Engineering Course": [
    { name: "GROUND ZERO", link: "/engineering/ground-zero" },
    { name: "COUNTDOWN", link: "/engineering/countdown" },
    { name: "REBOOST", link: "/engineering/reboost" },
  ],
};

const contactInfo = [
  {
    icon: Home,
    title: "Visit Head Office",
    content:
      "Parus Lok Commercial Complex, 1st Floor, Boring Road Crossing, Patna-800001",
    link: "https://www.google.com/maps?q=Parus+Lok+Commercial+Complex,+1st+Floor,+Boring+Road+Crossing,+Patna-800001",
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
    <footer className="bg-[#4b2e2e] text-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerSections).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-xl font-semibold mb-6">{title}</h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.link}
                      className="hover:text-white transition-colors flex items-center gap-2 justify-center"
                    >
                      <span className="text-lg">›</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-500">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-800 mb-4">
                <info.icon className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
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
        <div className="flex flex-col items-center gap-4 py-8 border-t border-gray-500">
          <p className="text-sm text-gray-300 text-center">
            Corporate Office : Parus Lok Commercial Complex, 1st Floor, Boring
            Road Crossing, Near Quality Corner, Patna-800001
          </p>
          <div className="flex gap-4">
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
        <div className="text-center text-sm text-gray-400 pt-8 border-t border-gray-500">
          Copyright (c) 2025 Mentors Eduserv. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
