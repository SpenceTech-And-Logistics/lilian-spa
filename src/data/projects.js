// LOGOS
// Put each organisation's logo in src/assets/images/logos/ (any subfolder of
// src/assets/images works) and set `logo` to the filename, e.g. "usaid.png".
// `logo` can also be a link: "https://...".
// If the file is missing, a lettered badge (`short`) is shown instead.
//
// Item shape:
//   title     - main heading on the card
//   subtitle  - line under it (the Act, the organisation, the party...)
//   logo      - logo filename or link
//   short     - letters for the fallback badge

export const sections = [
  {
    id: "regulations",
    label: "Regulations",
    intro: "Key Acts, Bills and regulations.",
    groups: [
      {
        title: "Key Acts & Bills",
        items: [
          {
            title: "The Social Health Insurance Act (No. 16 of 2023)",
            subtitle: "",
            logo: "sha.png",
            short: "SHA",
          },
          {
            title: "The Quality Health Care and Patient Safety Bill, 2025",
            subtitle: "",
            badge: "Key Bill",
            logo: "moh.png",
            short: "PA",
          },
          {
            title: "The Digital Health Act (No. 15 of 2023)",
            subtitle: "",
            logo: "dha.png",
            short: "DHA",
          },
          {
            title: "The Primary Health Care Act, No. 13 of 2023",
            subtitle: " ",
            logo: "moh.png",
            short: "MOH",
          },
        ],
      },
      {
        title: "Regulations",
        items: [
          {
            title: "Kenya Health Professionals Oversight Authority",
            subtitle: "Health Act, No. 21 of 2017",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfyqbl6Dq_g0Ee23xSOgb7U0P5m0399ZBUzp5uh8eig&s=10",
            short: "KHPOA",
          },

          {
            title: "Counselors and Psychologists Board",
            subtitle: "Counsellors and Psychologists Act, No. 14 of 2014",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMikSIhSYgLBnQgpEwugDyxLApgUh1AxGn1Qtkf49PGhId_VEaEhBt-7o&s=10",
            short: "CPB",
          },

          {
            title: "Clinical Officers Council of Kenya",
            subtitle:
              "Clinical Officers Council (Training, Registration, and Licensing), Cap. 260",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0gbFU-OxtpZM-VnwM5KxxRedXdLqvVmQY5Ol_fGOgA&s=10",
            short: "COC",
          },
          {
            title:
              "Kenya Medical Laboratory Technicians and Technologists Board",
            subtitle:
              "The Medical Laboratory Technicians and Technologists Act, No. 10 of 1999",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jHJb4cJSBI8hdEFaPPPNQpSBrEQni1dAh07Xp3nYbQ&s=10",
            short: "KMLTTB",
          },
          {
            title: "Nursing Council of Kenya",
            subtitle: "Nurses and Midwives Act, Cap. 257",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9rdySNqXtDkQbeB5q2oMOYWfnK9mewdCa7t9lheqlCA&s=10s",
            short: "NCK",
          },
          {
            title: "Health Records and Information Managers Board",
            subtitle:
              "Health Records and Information Managers Act, No. 15 of 2016",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbPXBPIDD1DzhNihg8UAWCsPbI0PLUfu5p0RUJUIwGg&s=10",
            short: "HRIMB",
          },
          {
            title: "Pharmacy and Poisons Board",
            subtitle: "Pharmacy and Poisons Act, Cap. 244",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg2YRPHr1stMaKbFWmJ6wSSEHu7FT3BvvGSRBdR-cXJQ&s=10",
            short: "PPB",
          },

          {
            title:
              "Kenya Nuclear Regulatory Authority (previously Radiation Protection Board)",
            subtitle: "Radiation Protection Act, Cap. 243",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHs09FaOvSVL5PNgQ-GYpgzVFL1j1yYhV7ogMPCI8KUg&s=10",
            short: "KNRA",
          },
        ],
      },
    ],
  },

  {
    id: "consultancy",
    label: "Consultancy",
    intro: "Organisations I have advised.",
    groups: [
      {
        title: "Major Clients",
        items: [
          {
            title: "United States Agency for International Development",
            subtitle: "",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZOkPBBsar1QpfsT33_mcr_4L98caei6NaKXXyrAMDrNCLX8VYl_7YwYa&s=10",
            short: "USAID",
          },
          {
            title: "PharmAccess Foundation",
            subtitle: "",
            logo: "https://www.pharmaccess.org/wp-content/uploads/2022/04/pa-logo-e1650980354537.png",
            short: "PAF",
          },
          {
            title: "Co-operative Bank",
            subtitle: "",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFec1aOEsodVBDlcpWkwhppq2-zZ5y_DhYDiIVx9G&s=10",
            short: "CB",
          },
          {
            title: "Waumini Sacco",
            subtitle: "",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVVbF-Kng4gT7rfy2cbNP4xGN6zkrbAHAbvNOXz8bxA&s=10",
            short: "WS",
          },
          {
            title: "Embu Farmers Sacco",
            subtitle: "Currently Nawiri Sacco",
            logo: "https://nawiri.co.ke/wp-content/uploads/2020/07/Nawiri-Sacco_Logo_Horizontal-1.png",
            short: "EFS",
          },
          {
            title: "Coffee Board of Kenya",
            subtitle: "",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5uomyW5G4teLV-DgRYG3HMauGOzZV2Ne80wAI4ecW8Q&s=10",
            short: "CBK",
          },
          {
            title: "Broadwalk Arms",
            subtitle: "Amendment to the Firearms Act",
            logo: "broadwalk.png",
            short: "Broadwalk Arms",
          },
          {
            title: "Kenya National Public Health Institute",
            subtitle: "",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JNmQ6TcRGtukPwqsifZAN8Y3qeGPZNoiTnAo9ltAeA&s=10",
            short: "KNPHI",
          },
          {
            title: "National Quality Control Laboratories",
            subtitle: "",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCz5igGDx3WpSGB5vRkHZjQUd0ax6kXNzVQca0ql0IhQ&s=10",
            short: "NQCL",
          },
        ],
      },
    ],
  },

  {
    id: "cases",
    label: "Cases",
    intro: "Court and dispute matters.",
    groups: [
      {
        title: "",
        items: [
          {
            title: "Election Petition",
            subtitle: "Senator, Kirinyaga",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdr9hh5JGVTOvdItfnWhe-ARMBi8ahr8ZQ0ViR5-ZHw&s=10",
            short: "KIR",
          },
          {
            title: "Budget Dispute",
            subtitle: "Machakos County",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_gnXQWM0geE17MEewuH5boCAzRRIGfQMCOPnB15CFA&s=10",
            short: "MCG",
          },
        ],
      },
    ],
  },
];

export default sections;
