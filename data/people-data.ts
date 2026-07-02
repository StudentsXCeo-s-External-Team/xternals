// people-data.ts — Centralized data for Our People page
// OOP pattern: add/remove people here only. No JSX changes needed.

import { PersonCardProps, BoardMemberProps } from "@/components/PersonCard";

// ── Board of Executive ─────────────────────────────────────────
export const EXECUTIVES: PersonCardProps[] = [
  {
    name: "Nicholas Audric Adonis Mathew",
    role: "Chief Executive Officer",
    imageSrc: "/images/boards/ceo-nicholas.jpg",
    variant: "executive",
  },
  {
    name: "Alisya Mutiara Arsyisi",
    role: "General Secretary",
    imageSrc: "/images/boards/general-secretary-alisya.jpg",
    variant: "executive",
  },
  {
    name: "Andhika Pratama",
    role: "Controller",
    imageSrc: "/images/boards/controller-andhika.jpg",
    variant: "executive",
  },
];

// ── Board of Management ────────────────────────────────────────
export const MANAGEMENT: PersonCardProps[] = [
  {
    name: "Richard Hans",
    role: "Manager of Technology Development",
    imageSrc: "/boards/MTD.JPG",
    variant: "management",
  },
  {
    name: "Hasna Choirunnisa",
    role: "Manager of Analytics & Research",
    imageSrc: "/boards/MAR.jpg",
    variant: "management",
  },
  {
    name: "Fatimah Janahtun Azzahra",
    role: "Manager of Operation",
    imageSrc: "/boards/MO.JPG",
    variant: "management",
  },
  {
    name: "Dhia Najma Shafa Jinan",
    role: "Manager of Operation",
    imageSrc: "/boards/MO_2.JPG",
    variant: "management",
  },
  {
    name: "Rendy Putra Bastanta Sitepu",
    role: "Manager of Operation",
    imageSrc: "/boards/MO_3.jpg",
    variant: "management",
  },
  {
    name: "Aqila Syakirah",
    role: "Manager of Social Media Specialist",
    imageSrc: "/boards/MSMS.jpg",
    variant: "management",
  },
  {
    name: "Refaya Luvi Azizy",
    role: "Manager of External Affairs",
    imageSrc: "/boards/MEA.JPG",
    variant: "management",
  },
  {
    name: "Salma Haaniyah El Aliyyah",
    role: "Manager of Creative",
    imageSrc: "/boards/MCVD.JPG",
    variant: "management",
  },
  {
    name: "Alexandra Victoria Gunawan",
    role: "Manager of Talent Management",
    imageSrc: "/boards/MTM.JPG",
    variant: "management",
  },
  {
    name: "Darmanto",
    role: "Manager of Learning & Development",
    imageSrc: "/boards/darma.jpg",
    variant: "management",
  },
  {
    name: "Nursyafina Apriliani Syukri",
    role: "Manager of Employer Branding",
    imageSrc: "/boards/MEB.JPG",
    variant: "management",
  },
  {
    name: "Muhammad Dzulfiqar Dhiaulhaq",
    role: "Manager of Corporate Partnership",
    imageSrc: "/boards/MCP.JPEG",
    variant: "management",
  },
  {
    name: "Trisha Nadhirah",
    role: "Manager of Business Unit",
    imageSrc: "/boards/MBF.JPG",
    variant: "management",
  },
];

// ── Board Members (optional section if needed) ─────────────────
export const BOARD_MEMBERS: BoardMemberProps[] = [
  {
    name: "Kenny Tang",
    role: "Technology Development",
    variant: "Data and Technology",
  },
  {
    name: "Dyah Zhafira Wibowo",
    role: "Technology Development",
    variant: "Data and Technology",
  },
  {
    name: "Nezzaluna Azzahra",
    role: "Technology Development",
    variant: "Data and Technology",
  },
  {
    name: "Lyonel Judson",
    role: "Technology Development",
    variant: "Data and Technology",
  },
  {
    name: "Stefan Luciano",
    role: "Technology Development",
    variant: "Data and Technology",
  },
  {
    name: "Timothy Immanuel",
    role: "Technology Development",
    variant: "Data and Technology",
  },

  // Analytics & Research
  {
    name: "Ashley Meliora",
    role: "Analytics & Research",
    variant: "Data and Technology",
  },
  {
    name: "Khalisha Zhurifah Sejati",
    role: "Analytics & Research",
    variant: "Data and Technology",
  },
  {
    name: "Nadine Keysha Joly Nugroho",
    role: "Analytics & Research",
    variant: "Data and Technology",
  },
  {
    name: "Fauzan Rizky Ramadhan",
    role: "Analytics & Research",
    variant: "Data and Technology",
  },
  {
    name: "Sabrina Purwasantiana",
    role: "Analytics & Research",
    variant: "Data and Technology",
  },
  {
    name: "Valsyahira Norayansha",
    role: "Analytics & Research",
    variant: "Data and Technology",
  },

  // Talent Management
  {
    name: "Hanif Muflih",
    role: "Talent Management",
    variant: "Human Resources",
  },
  {
    name: "Muh. Fathihah Fachry Amal",
    role: "Talent Management",
    variant: "Human Resources",
  },
  {
    name: "Allea Nurra Kirania",
    role: "Talent Management",
    variant: "Human Resources",
  },
  {
    name: "Nahran Aziza Aulia",
    role: "Talent Management",
    variant: "Human Resources",
  },
  {
    name: "Thara Nadda Ariezta",
    role: "Talent Management",
    variant: "Human Resources",
  },

  // Learning & Development
  {
    name: "Siti Rodiatul Ilaiah",
    role: "Learning & Development",
    variant: "Human Resources",
  },
  {
    name: "Naurah Arista Putri",
    role: "Learning & Development",
    variant: "Human Resources",
  },

  // Employer Branding
  {
    name: "Ammara Dyra Nafisa",
    role: "Employer Branding",
    variant: "Human Resources",
  },
  {
    name: "Paramadita Adnan",
    role: "Employer Branding",
    variant: "Human Resources",
  },
  {
    name: "Mardiana Suhrul Romdoni",
    role: "Employer Branding",
    variant: "Human Resources",
  },

  // Corporate Partnership
  {
    name: "I Putu Adi Ardana Yasa",
    role: "Corporate Partnership",
    variant: "Finance",
  },
  {
    name: "Salsabila Siahaan",
    role: "Corporate Partnership",
    variant: "Finance",
  },
  {
    name: "Jessica Clarice Wong",
    role: "Corporate Partnership",
    variant: "Finance",
  },
  {
    name: "Josephine Christy Then",
    role: "Corporate Partnership",
    variant: "Finance",
  },

  // Business Unit
  {
    name: "Marcel Antoni",
    role: "Business Unit",
    variant: "Finance",
  },
  {
    name: "Izabel Fathia Rafindria Saanin",
    role: "Business Unit",
    variant: "Finance",
  },
  {
    name: "Alya Noor Fathiah",
    role: "Business Unit",
    variant: "Finance",
  },
  {
    name: "Bagas Mardiansyah Sundawa",
    role: "Business Unit",
    variant: "Finance",
  },

  // Creative
  {
    name: "Rizqi Suryo",
    role: "Creative",
    variant: "Marketing",
  },
  {
    name: "Ananda Rahmania",
    role: "Creative",
    variant: "Marketing",
  },
  {
    name: "Chesa Arwendhita Alifia",
    role: "Creative",
    variant: "Marketing",
  },
  {
    name: "Sakurako Caya Katya Kato",
    role: "Creative",
    variant: "Marketing",
  },
  {
    name: "Mutya Syafitri",
    role: "Creative",
    variant: "Marketing",
  },

  // Social Media Specialist
  {
    name: "Keysha Khairunnisa",
    role: "Social Media Specialist",
    variant: "Marketing",
  },
  {
    name: "Luthfi Aqil Saputra",
    role: "Social Media Specialist",
    variant: "Marketing",
  },
  {
    name: "Zahra Khairunnisa",
    role: "Social Media Specialist",
    variant: "Marketing",
  },
  {
    name: "Evan Rizfi Novanda",
    role: "Social Media Specialist",
    variant: "Marketing",
  },
  {
    name: "Tesalonika Putri Christvia",
    role: "Social Media Specialist",
    variant: "Marketing",
  },

  // External Affairs
  {
    name: "Adinda Naura Adhyaksari",
    role: "External Affairs",
    variant: "Marketing",
  },
  {
    name: "Azemi Efan",
    role: "External Affairs",
    variant: "Marketing",
  },

  // Operations
  {
    name: "Bulan Khayangan",
    role: "Operations",
    variant: "Operations",
  },
  {
    name: "Elisabeth Michelle",
    role: "Operations",
    variant: "Operations",
  },
  {
    name: "Mas Moreno Ivander Athala",
    role: "Operations",
    variant: "Operations",
  },
  {
    name: "Novifrilita Karunia Suhardani",
    role: "Operations",
    variant: "Operations",
  },
  {
    name: "Mohammad Sang Panglima Anas",
    role: "Operations",
    variant: "Operations",
  },
  {
    name: "Naurazka Salsabila Aragani",
    role: "Operations",
    variant: "Operations",
  },
  {
    name: "Kalya Salsabila Arizya",
    role: "Operations",
    variant: "Operations",
  },
  {
    name: "Jesslein Felisha",
    role: "Operations",
    variant: "Operations",
  },
  {
    name: "Sri Rahayu Lestari",
    role: "Operations",
    variant: "Operations",
  },
  {
    name: "Anisya Syahwa Fitri",
    role: "Operations",
    variant: "Operations",
  },
  {
    name: "Yesha Trixie",
    role: "Operations",
    variant: "Operations",
  },
  {
    name: "Ilyasa",
    role: "Operation",
    variant: "Operations",
  },
];
