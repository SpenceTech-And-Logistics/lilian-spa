import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

// All the text you are likely to edit lives here, in one place.

export const PROFILE = {
  name: "Lilian Manegene",
  tagline: "Wanjiku for Wanjiku",
  heroText:
    "Advocate. Consultant. Dispute Resolution Advisor. Mediator. Arbitrator. Lobbyist. Negotiator. Compliance Expert. Legislative Drafter.",
};

// Shown in the footer. Leave a value empty ("") to hide it.
export const CONTACT = {
  email: "",
  phone: "",
  phoneLink: "",
  location: "Nairobi, Kenya",
};

// Social links for the footer. An icon only appears when `href` is filled in.
export const SOCIALS = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "",
  },
  { icon: FaTwitter, label: "Twitter", href: "" },
  { icon: FaInstagram, label: "Instagram", href: "" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "" },
];

export const ROLES = [
  "Advocate",
  "Consultant",
  "Dispute Resolution Advisor",
  "Mediator",
  "Arbitrator",
  "Lobbyist",
  "Negotiator",
  "Compliance Expert",
  "Legislative Drafter",
];

// Positions held and jobs / consultancy roles
//   period      - small label on the card (the role, or the years)
//   title       - organisation or position
//   description - one line under the title
//   logo        - filename in src/assets/images/ (any subfolder) or a link
//   short       - letters shown if there is no logo
export const POSITIONS_HELD = [
  {
    period: "2007 - Present",
    title: "Advocate",
    description: "Admitted to the bar in 2004.",
    logo: "https://lsk.or.ke/wp-content/uploads/2023/03/logo.png",
    short: "ADV",
  },
  {
    period: "Consultant",
    title: "AllAfrica Advisors",
    description: "Policy. Compliance. Governance. Legislation.",
    logo: "data:image/png;base64,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",
    short: "AAA",
  },
  {
    period: "Consultant",
    title: "PharmAccess Foundation",
    description:
      "Policy. Legislation. Quality Health Care and Patient Safety Bill, 2025.",
    logo: "https://www.pharmaccess.org/wp-content/uploads/2022/04/pa-logo-e1650980354537.png",
    short: "PAF",
  },
  {
    period: "Consultant",
    title: "United States Agency for International Development (USAID)",
    description: "Policy and Legislation in Healthcare",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZOkPBBsar1QpfsT33_mcr_4L98caei6NaKXXyrAMDrNCLX8VYl_7YwYa&s=10",
    short: "USAID",
  },
  {
    period: "Consultant",
    title: "LMB & Partners",
    description: "Legal. Research. Compliance. Mediation. Negotiation.",
    logo: "",
    short: "LMB & Partners",
  },
  {
    period: "Consultant",
    title: "BroadWalk Arms",
    description: "Firearms Act",
    logo: "broadwalk.png",
    short: "BroadWalk Arms",
  },
  {
    period: "Consultant",
    title: "Women in Business",
    description: "",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJy6OanR_tcRiwqLqYEVru2oNfZSsK8_MNJyjPNQP1Q&s=10",
    short: "WIB",
  },
  {
    period: "Legal Advisor",
    title: "Maendeleo Ya Wanawake Nairobi",
    description: "",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiMi1XZoFnnyF_RRKsBbr6HxlLAV_VLMpApKWwat6nyA&s",
    short: "MYWO",
  },
  {
    period: "Advocate",
    title: "Manegene & Partners Advocates",
    description: "Managing Director",
    logo: "Manegene & Partners Advocates",
    short: "MPA",
  },
  {
    period: "Advocate",
    title: "Onesmus Githinji & Partners",
    description: "Associate Advocate",
    logo: "Onesmus Githinji & Partners",
    short: "OGP",
  },
];

// Professional and leadership roles
export const OTHER_POSITIONS = [
  {
    period: "Secretary",
    title: "Kenya National Chamber of Commerce and Industry",
    place: "",
    description: "Dispute Resolution Committee",
  },
  {
    period: "Patron",
    title: "Four Clover Africa Initiative",
    place: "",
    description: "",
  },
  {
    period: "Co-Founder",
    title: "SpenceTec and Logistics Limited",
    place: "",
    description: "",
  },
  {
    period: "Convenor",
    title: "My Dress My Choice",
    place: "",
    description: "",
  },
];
