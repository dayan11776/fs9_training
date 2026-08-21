import React from "react";
import { ArrowUpRight } from "lucide-react";

const footerSections = [
  {
    title: "Quick links",
    links: ["So gehts", "Erfahrung", "Aligner", "Preise", "Standorte"],
  },
  {
    title: "Newz",
    links: ["Blog", "FAQ", "Lift Media", "Offene Stellen", "Presse kit"],
  },
  {
    title: "Behandlung",
    links: ["Gratis Termin", "Freunde einladen", "Patienteninformationen"],
  },
];

const socialLinks = ["Facebook", "Instagram", "Linkedin", "Pinterest"];
const legalLinks = ["Dateenschutz", "Impressum", "Cookie Policy", "AGBs"];

const Footer = () => {
  return (
    <footer className="bg-[#10265A] px-6 py-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr] lg:gap-20">
          <div>
            <div className="inline-flex border-4 border-white px-2 py-1 text-2xl font-black tracking-widest">
              LFT
            </div>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {socialLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="transition hover:text-blue-200"
                >
                  {link}
                </a>
              ))}
            </div>

            <form className="mt-20 max-w-sm">
              <label
                htmlFor="footer-email"
                className="block text-lg font-bold tracking-wide"
              >
                Wir halten dich auf dem laufenden
              </label>

              <div className="mt-6 flex items-center border-b border-white/20 pb-5">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Deine E-Mail Adresse"
                  className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white"
                />

                <button
                  type="submit"
                  className="flex h-9 w-9 items-center justify-center text-white transition hover:text-blue-200"
                  aria-label="Submit email"
                >
                  <ArrowUpRight size={24} strokeWidth={2.5} />
                </button>
              </div>
            </form>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-bold">{section.title}</h3>

                <ul className="mt-6 space-y-5 text-sm text-blue-100">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-8 text-xs md:flex-row md:items-center md:justify-between">
          <p>&copy; 2020 Lift Media.All right reserved</p>

          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {legalLinks.map((link) => (
              <a key={link} href="#" className="transition hover:text-blue-200">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
