import type { NavItem } from "@/lib/types";

export const site = {
  name: "Explorer & V.B.B. English Medium School",
  shortName: "Explorer & V.B.B.",
  location: "Sayan, Surat, Gujarat",
  email: "info@explorervbbschool.in",
  phones: ["+91 9427472781", "+91 9762330236"],
  address:
    "V.B.B. & Explorer English Medium School, Adarsh Nagar, Behind Thakor Dwar Society, Sayan, Surat, Gujarat, India",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Activities", href: "/activities" },
  { label: "AI Learning", href: "/ai-learning" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  quick: navigation,
  admissions: [
    { label: "Admissions Process", href: "/admissions#process" },
    { label: "Documents Required", href: "/admissions#documents" },
    { label: "FAQ", href: "/admissions#faq" },
  ],
};
