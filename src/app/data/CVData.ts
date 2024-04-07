 const CVData  = [
    {
        "section": "Personal Information",
        "details": {
          "Name": "Nagy György",
          "Address": "6726 Szeged",
          "Phone": "+36305440969",
          "Email": "gyorgynagy1986@gmail.com",
        }
      },
      {
        "section": "Objective",
        "content": "Motivated IT professional with 5+ years of experience in software development seeking a challenging position at a forward-thinking company where I can utilize my skills in software engineering to contribute to the company’s success and further develop my professional skills."
      },
      {
        "section": "Skills",
        "details": {
          "Programming Languages": ["JavaScript", "TypeScript"],
          "Frameworks/Libraries": ["React", "Next.JS", "Node.js"],
          "Databases": ["Firebase", "MongoDB",],
          "Tools": ["Git", "NextAuth.js", "Stripe"],
          "CSS Frameworks/Libraries": ["Tailwind CSS", "MUI", "Bootstrap", "Styled-components:", "Semantic UI"],
          "Styling Preprocessors": ["SCSS"],
        }
      },
      {
        "section": "Work Experience",
        "positions": [
          {
            "Position": "",
            "Company": "ToP Designer Kft",
            "Duration": "2017 - Present",
            "Responsibilities": [
              "Mentoring and supporting colleagues due to problems encountered during their work",
              "Responding to website visitors' inquiries for marketing purposes",
              "Creation of design elements for an online recruitment platform",
            ]
          },
          {
            "Position": "Freelancer fullstack developer ",
            "Company": "sole proprietorship",
            "Duration": "2022 - Present",
            "Responsibilities": [
              "Assisted in the development of software applications using Java and .NET frameworks.",
              "Contributed to the maintenance and updating of existing applications, resulting in a 10% decrease in bugs.",
              "Participated in regular team meetings and contributed ideas for system improvements."
            ]
          }
        ]
      },
      {
        "section": "Education",
        "details": {
          "Degree": "Bachelor of Science in Computer Science",
          "Institution": "State University",
          "Year": "2013 - 2017",
        }
      },
      {
        "section": "Certifications",
        "certificates": [
          {
            "Name": "Certified ScrumMaster (CSM)",
            "Institute": "Universitas Muhammadiyah Surakarta",
            "Year": "2016-2017"
          },
        
        ]
      },
      
];

export default JSON.stringify(CVData, null, 2);
