const Faq = [
  {
    id: "1",
    message: "Hello, how can I help you?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "I want to apply for programs", trigger: "3" },
      //   { value: 2, label: '', trigger: '3' },
      //   { value: 3, label: 'Contact Information', trigger: '3' },
      //   { value: 4, label: 'Number 4', trigger: '3' },
      //   { value: 5, label: 'Number 5', trigger: '3' },
      //   { value: 6, label: 'Number 6', trigger: '3' },
      //   { value: 7, label: 'Number 7', trigger: '3' },
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
        // { value: 1, label: "Certificate", trigger: "5" },
        // { value: 2, label: "Diploma", trigger: "5" },
        { value: 3, label: "Bachelor's Degree", trigger: "5" },
        // { value: 4, label: "Master's Degree", trigger: "5" },
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
        { value: 1, label: "Computer Science", trigger: "7" },
        { value: 2, label: "Information Technology", trigger: "7" },
        { value: 3, label: "Cyber Security", trigger: "7" },
        { value: 4, label: "Accounting", trigger: "7" },
        { value: 5, label: "Economics and Finance", trigger: "7" },
        { value: 6, label: "Finance and Banking", trigger: "7" },
        // { value: 7, label: "", trigger: "7" },
        // { value: 8, label: "", trigger: "7" },
        // { value: 9, label: "", trigger: "7" },
        // { value: 10, label: "", trigger: "7" },
        // { value: 11, label: "", trigger: "7" },
        // { value: 12, label: "", trigger: "7" },
        // { value: 13, label: "", trigger: "7" },
        // { value: 14, label: "", trigger: "7" },
        // { value: 15, label: "", trigger: "7" },
        // { value: 16, label: "", trigger: "7" },
        // { value: 17, label: "", trigger: "7" },
    ],
  },
  {
    id: "7",
    message: "Entry Requirements are: Form 6 leaver  with  two principal passes which MUST make an aggregate of 4.0 points as a minimum or Foundation Programme of the OUT with a minimum GPA of 3.0 or NTA Level 6 with the GPA of 3.0. Apply at https://iaa.ac.tz/oas",
    trigger: "8",
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
  }
];

export default Faq;