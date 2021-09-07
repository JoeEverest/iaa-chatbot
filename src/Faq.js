const Faq = [
  {
    id: "1",
    message: "Hello, In which part do you need assistance?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      {
        value: 1,
        label: "1. Entry Qualifications",
        trigger: "3",
      },
      { value: 2, label: "2. Modes of application", trigger: "18" },
      { value: 3, label: "3. Contact Information", trigger: "23" },
      { value: 4, label: "4. Welfare and guidance services", trigger: "22" },
      { value: 5, label: "5. Blended learning", trigger: "28" },
      {
        value: 6,
        label: "6. Evening programmes",
        trigger: "29",
      },
      {
        value: 7,
        label: "7. Tuition fees",
        trigger: "30",
      },
    ],
  },
  {
    id: "3",
    message: "What level do you want to apply for?",
    trigger: "4",
  },
  {
    id: "4",
    options: [
      { value: 1, label: "Diploma (3 years from form 4)", trigger: "13" },
      {
        value: 2,
        label: "Diploma (2 years from form 6 or Certificate) ",
        trigger: "12",
      },
      { value: 3, label: "Bachelor's Degree", trigger: "5" },
      { value: 4, label: "Master's Degree", trigger: "16" },
    ],
  },
  {
    id: "5",
    message: "What is your desired major?",
    trigger: "6",
  },
  //Bachelor's Degree
  {
    id: "6",
    options: [
      { value: 1, label: "Accountancy", trigger: "7" },
      {
        value: 2,
        label: "Accountancy with Information Technology",
        trigger: "7",
      },
      { value: 3, label: "Banking with Apprenticeship", trigger: "7" },
      { value: 4, label: "Business Management", trigger: "7" },
      { value: 5, label: "Computer Science", trigger: "7" },
      { value: 6, label: "Finance and Banking", trigger: "7" },
      { value: 7, label: "Information Technology", trigger: "7" },
      { value: 8, label: "Cyber Security", trigger: "7" },
      { value: 9, label: "Credit Management", trigger: "7" },
      { value: 10, label: "Economics and Finance", trigger: "7" },
      { value: 11, label: "Economics and Taxation", trigger: "7" },
      { value: 12, label: "Education with Computer Science", trigger: "7" },
      {
        value: 13,
        label: "Insurance and Risk Management with Apprenticeship",
        trigger: "7",
      },
      { value: 14, label: "Library & Information Studies", trigger: "7" },
      {
        value: 15,
        label: "Procurement and Logistics Management",
        trigger: "7",
      },
      {
        value: 16,
        label: "Tourism and Hospitality with Apprenticeship",
        trigger: "7",
      },
      { value: 17, label: "Human Resources Management", trigger: "7" },
      { value: 18, label: "Military Science", trigger: "7" },
    ],
  },
  {
    id: "7",
    message:
      "Entry Requirements are: Form 6 leaver  with  two principal passes which MUST make an aggregate of 4.0 points as a minimum or Foundation Programme of the OUT with a minimum GPA of 3.0 or NTA Level 6 with the GPA of 3.0. Apply at",
    trigger: "34",
  },
  {
    id: "8",
    message: "Any other questions?",
    trigger: "9",
  },
  {
    id: "9",
    options: [
      { value: 1, label: "Yes", trigger: "10" },
      { value: 2, label: "No", trigger: "11" },
    ],
  },
  {
    id: "10",
    message: "What would you like to know?",
    trigger: "2",
  },
  {
    id: "11",
    message: "Good Bye",
    end: true,
  },
  //Dip 2 Years
  {
    id: "12",
    options: [
      { value: 1, label: "Accountancy", trigger: "14" },
      { value: 2, label: "Accountancy with IT", trigger: "14" },
      { value: 3, label: "Computer Networking", trigger: "14" },
      { value: 4, label: "Computer Science", trigger: "14" },
      { value: 5, label: "Economics and Finance", trigger: "14" },
      { value: 6, label: "Finance and Banking", trigger: "14" },
      { value: 7, label: "Information Technology", trigger: "14" },
      { value: 8, label: "Insurance and Risk Management", trigger: "14" },
      { value: 9, label: "Mobile Application Development", trigger: "14" },
      { value: 10, label: "Multimedia", trigger: "14" },
      { value: 11, label: "Business Management", trigger: "14" },
      { value: 12, label: "Business Management with Chinese", trigger: "14" },
      {
        value: 13,
        label: "Procurement and Logistics Management",
        trigger: "14",
      },
      { value: 14, label: "Strategic Studies", trigger: "14" },
      { value: 15, label: "Human Resources Management", trigger: "14" },
    ],
  },
  // Dip 3 years
  {
    id: "13",
    options: [
      { value: 1, label: "Accountancy", trigger: "15" },
      { value: 2, label: "Accountancy with IT", trigger: "15" },
      { value: 3, label: "Computer Networking", trigger: "15" },
      { value: 4, label: "Computer Science", trigger: "15" },
      { value: 5, label: "Economics and Finance", trigger: "15" },
      { value: 6, label: "Finance and Banking", trigger: "15" },
      { value: 7, label: "Information Technology", trigger: "15" },
      { value: 8, label: "Insurance and Risk Management", trigger: "15" },
      { value: 9, label: "Library & Information Studies", trigger: "15" },
      { value: 10, label: "Mobile Application Development", trigger: "15" },
      { value: 11, label: "Multimedia", trigger: "15" },
      {
        value: 12,
        label: "Records, Archive & Information Management",
        trigger: "15",
      },
      { value: 13, label: "Business Management", trigger: "15" },
      { value: 14, label: "Business Management with Chinese", trigger: "15" },
      {
        value: 15,
        label: "Procurement and Logistics Management",
        trigger: "15",
      },
      { value: 16, label: "Strategic Studies", trigger: "15" },
      { value: 17, label: "Human Resources Management", trigger: "15" },
    ],
  },
  {
    id: "14",
    message:
      "Minimum Entry Qualifications:\n Form VI (six) with at least one principal pass and one subsidiary with total points not below 1.5 or\n An appropriate  equivalent  Certificate with second class or B average OR\n NTA Level 4. Apply at",
    trigger: "34",
  },
  {
    id: "15",
    message:
      "Minimum Entry Qualifications:\n Form IV (four) with at least four passes in relevant subjects OR	\n Any other equivalent qualification \n Apply at",
    trigger: "34",
  },
  {
    id: "16",
    options: [
      { value: 1, label: "Business Administration", trigger: "7" },
      { value: 2, label: "Finance and Investment", trigger: "7" },
      { value: 3, label: "Accountancy", trigger: "7" },
      { value: 4, label: "Accounting and Finance", trigger: "7" },
      {
        value: 5,
        label: "Business Administration in Human Resources Management",
        trigger: "7",
      },
      {
        value: 6,
        label: "Business Administration in Information Technology Management",
        trigger: "7",
      },
      {
        value: 7,
        label: "Business Administration In Leadership and Governance",
        trigger: "7",
      },
      {
        value: 8,
        label: "Business Administration in Procurement and Supplies Management",
        trigger: "7",
      },
      { value: 9, label: "Information Security", trigger: "7" },
      {
        value: 10,
        label: "Science in Project Planning and Management",
        trigger: "7",
      },
      { value: 11, label: "Arts in Peace and Security Studies", trigger: "7" },
      { value: 12, label: "Finance and Banking", trigger: "7" },
    ],
  },
  {
    id: "17",
    message:
      "General Minimum Entry Qualifications: Bachelor Degree with at least a Second Class from an approved Institution of Higher Learning OR A second Class Advanced Diploma from a recognized Institute or equivalent qualifications OR A professional qualification recognized by Professional bodies  OR Candidates with a PASS degree will be considered upon producing evidence of having obtained an examined Postgraduate Diploma. Apply at",
    trigger: "34",
  },
  {
    id: "18",
    message: "Application can be done through the following:",
    trigger: "19",
  },
  {
    id: "19",
    message: "1. Through IAA online application. Apply at",
    trigger: "35",
  },
  {
    id: "20",
    message:
      "2. By downloading application forms from IAA website and send the duly filled forms to IAA",
    trigger: "21",
  },
  {
    id: "21",
    message:
      "3. By collecting application forms directly to IAA or her campuses and return the duly filled forms to the same campus.",
    trigger: "8",
  },
  {
    id: "22",
    message:
      "Yes, the Institute provides students’ welfare and guidance services.",
    trigger: "26",
  },
  {
    id: "23",
    message: `Institute of Accountancy Arusha
      Main Campus
      Mob: +255 763 462109
      Tel: +255 27 2970232
      Fax: +255 27 2970234
      P.O.Box 2798
      Njiro Hill, Arusha
      Tanzania
      Email: iaa@iaa.ac.tz`,
    trigger: "24",
  },
  {
    id: "24",
    message: `Institute of Accountancy Arusha
      Dar-es-Salaam Campus
      ATTN: Campus Manager
      Mob: +255 655289545
      Tel: +255 222864823
      TTCL Building, Kijitonyama, Dar es Saalam
      Email: CM_DSM@iaa.ac.tz`,
    trigger: "25",
  },
  {
    id: "25",
    message: `Institute of Accountancy Arusha
      Babati Campus
      ATTN: Campus Manager
      Mob: +255 784244616
      Tel: +255 272970205
      P. O Box 26 Babati,  Manyara
      Email: CM_BBT@iaa.ac.tz`,
    trigger: "8",
  },
  {
    id: "26",
    message:
      "Students are guided and supported throughout their stay at the Institute and their welfare are attended accordingly.",
    trigger: "27",
  },
  {
    id: "27",
    message:
      "Though each worker is ready to offer guidance and support to the students, the directorate of Post and Undergraduate Studies, Dean of Students, Registrar’s Office and Students’ Organization (IAASO) are at the front line to support and guide students at the Institute.",
    trigger: "8",
  },
  {
    id: "28",
    message: `Yes, IAA offers online training for Masters programmes,
    and for Bachelor's Degree in Business Management and Diploma in Records and Information Management.`,
    trigger: "37",
  },
  {
    id: "29",
    message:
      "Yes IAA has evening classes for all Masters programmes, for undergraduate programmes, evening classes conducted BUT on request.",
    trigger: "8",
  },
  {
    id: "30",
    message:
      "Tuition fees are classified into two categories. We have fees for computing programmes and fees for non-computing programmes.",
    trigger: "31",
  },
  {
    id: "31",
    message:
      "See the attached fee structure for your program from the IAA website",
    trigger: "32",
  },
  {
    id: "32",
    component: (
      <a class="custom" href="https://iaa.ac.tz/programmesList">
        https://iaa.ac.tz/programmesList
      </a>
    ),
    asMessage: true,
    trigger: "33",
  },
  {
    id: "33",
    message: "Tuition fees can be paid in three Instalments (40%: 20% & 40%)",
    trigger: "8",
  },
  {
    id: "34",
    component: (
      <a class="custom" href="https://iaa.ac.tz/oas">
        https://iaa.ac.tz/oas
      </a>
    ),
    asMessage: true,
    trigger: "8",
  },
  {
    id: "35",
    component: (
      <a class="custom" href="https://iaa.ac.tz/oas">
        https://iaa.ac.tz/oas
      </a>
    ),
    asMessage: true,
    trigger: "36",
  },
  {
    id: "36",
    message:
      "Or send us SMS or WhatsApp through +255742 833 444 for assistance",
    trigger: "20",
  },
  {
    id: "37",
    message: `For more undergraduate programmes, preparations are in progress.`,
    trigger: "8",
  },
];

export default Faq;
