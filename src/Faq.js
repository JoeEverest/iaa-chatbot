const Faq = [
  {
    id: "1",
    message: "Hello, how can I help you?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      {
        value: 1,
        label: "What are the qualifications to apply?",
        trigger: "3",
      },
      { value: 2, label: "What are the modes of application ?", trigger: "18" },
      { value: 3, label: "Contact Information", trigger: "23" },
      { value: 4, label: "Welfare and guidance services", trigger: "22" },
      { value: 5, label: "Does IAA provide online learning?", trigger: "28" },
      {
        value: 6,
        label: "Does IAA conduct evening programmes?",
        trigger: "29",
      },
      {
        value: 7,
        label: "What are the tuition fees and how its paid?",
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
      { value: 4, label: "Bachelor of Business Management", trigger: "7" },
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
    message:
      "1. Through IAA online application. Apply at",
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
    message:
      "IAA Main Campus Rector, Institute of Accountancy Arusha, Po Box 2798, Arusha Tel: +255272970232, Email: iaa@iaa.ac.tz",
    trigger: "24",
  },
  {
    id: "24",
    message:
      "Dar Es Salaam Campus Campus Manager Po Box 69007, Dsm Tel: +255222701554 Email: CM_DSM@iaa.ac.tz ",
    trigger: "25",
  },
  {
    id: "25",
    message:
      "Babati Campus Campus Manager Po Box 26, Babati- Manyara Tel: +255272970205 Email: CM_BBT@iaa.ac.tz",
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
    message:
      "Yes, IAA offers online training for Masters programmes. For the undergraduate programmes, preparations are in progress.",
    trigger: "8",
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
    component:(
      <a class="custom" href="https://iaa.ac.tz/programmesList">https://iaa.ac.tz/programmesList</a>
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
    component:(
      <a class="custom" href="https://iaa.ac.tz/oas">https://iaa.ac.tz/oas</a>
    ),
    asMessage: true,
    trigger: "8",
  },
  {
    id: "35",
    component:(
      <a class="custom" href="https://iaa.ac.tz/oas">https://iaa.ac.tz/oas</a>
    ),
    asMessage: true,
    trigger: "36",
  },
  {
    id: "36",
    message: "Or send us SMS or WhatsApp through +255742 833 444 for assistance",
    trigger: "20",
  },
];

export default Faq;
