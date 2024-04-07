

const CVData = [
  {
    section: "Personal Information",
    details: {
      Name: "Nagy György",
      Address: "6726 Szeged",
      Phone: "+36 30-544-0969",
      Email: "gyorgynagy1986@gmail.com",
    },
  },
  {
    section: "Skills",
    details: {
      "Programming Languages": ["JavaScript", "TypeScript"],
      "Frameworks/Libraries": ["React", "Next.JS", "Node.js"],
      Databases: ["Firebase", "MongoDB"],
      Tools: ["Git", "NextAuth.js", "Stripe"],
      "CSS Frameworks/Libraries": [
        "Tailwind CSS",
        "MUI",
        "Bootstrap",
        "Styled-components:",
        "Semantic UI",
      ],
      "Styling Preprocessors": ["SCSS"],
    },
  },
  {
    section: "Work Experience",
    positions: [
     
      {
        Position: "Freelancer fullstack developer ",
        Company: "sole proprietorship",
        Duration: "2021 - Present",
        Experience: [
          "End-to-End web development projects",
          "Client needs assessment and consultations",
          "Close collaboration with UX/UI designers.",
          "Custom development solutions",
          "Comprehensive website optimization",
          "Maintenance and support",
        ],
      },
      {
        Position: "Web and customer manager (system admin, team leader)",
        Company: "ToP Designer Kft",
        Duration: "2017 - Present",
        Experience: [
          "Outstanding customer management in Englis",
          "Skilled in managing web environments for continuous availability and high user satisfaction",
          "Familiarity with various web technologies and platforms or efficient troubleshooting",
          "Proven track record of overseeing and maintaining web infrastructure to meet organizational goals.",
        ],
      },
     
    ],
  },
  {
    section: "Education",
    details: {
      FieldOfStudy: "Hungarian language and literature",
      Institution: "University of Szeged",
      Year: "2013 - 2017",
    },
  },

  {
    section: "Certifications",
    certificates: [
      {
        Name: "Node.js, Express, MongoDB, The Complete Boorcamp: Jonas Schmedtmann",
        Institute: "Udemy",
        Year: "2022",
      },
      {
        Name: "The Ultimate React Course : Jonas Schmedtmann",
        Institute: "Udemy",
        Year: "2021",
      },

      {
        Name: "Advance CSS and SCSS: Jonas Schmedtmann",
        Institute: "Udemy",
        Year: "2021",
      },
      {
        Name: "Complete JavaScript Course: Jonas Schmedtmann",
        Institute: "Udemy",
        Year: "2020",
      },
      {
        Name: "Figma - UI/UX : Caleb Kingston",
        Institute: "Udemy",
        Year: "2020",
      },
      {
        Name: "Indonesian language certificate",
        Institute: "Universitas Muhammadiyah Surakarta",
        Year: "2016-2017",
      },
    ],
  },
];

export default JSON.stringify(CVData, null, 2);
