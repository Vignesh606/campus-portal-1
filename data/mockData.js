// All data below is placeholder / fictional. No real institution or person is represented.

export const sessionUser = {
  regNo: "24XYZ10099",
  role: "STUDENT",
  avatar: "/avatar-placeholder.svg",
};

export const currentSemester = {
  label: "FALL SEM 2026-27",
  courses: [
    { id: 1, code: "CSE2004", name: "Theory Of Computation And Compiler Design", type: "LT", attendance: 96.0, remark: "Excellent - Keep going", level: "good" },
    { id: 2, code: "CSE2006", name: "Programming in Java", type: "LP", attendance: 92.0, remark: "Excellent - Keep going", level: "good" },
    { id: 3, code: "CSE3001", name: "Database Management Systems", type: "LTP", attendance: 85.0, remark: "Good", level: "ok" },
    { id: 4, code: "CSE3003", name: "Operating Systems", type: "LTP", attendance: 90.0, remark: "Excellent - Keep going", level: "good" },
    { id: 5, code: "CSE3015", name: "Cloud Practitioner Essentials", type: "LTP", attendance: 84.0, remark: "Good", level: "ok" },
    { id: 6, code: "DSN3099", name: "Engineering Project in Community Service", type: "PJ", attendance: 0.0, remark: "Critical - must improve", level: "critical" },
    { id: 7, code: "MAT2005", name: "Transform Techniques and Difference Equations", type: "LT", attendance: 94.0, remark: "Excellent - Keep going", level: "good" },
    { id: 8, code: "PLA1006", name: "Lateral Thinking", type: "LT", attendance: 100.0, remark: "Excellent - Keep going", level: "good" },
  ],
};

export const creditStatus = {
  totalCreditsRequired: 160,
  earnedCredits: 88.0,
  currentCGPA: 8.12,
};

export const spotlight = [
  { id: 1, tag: "COE", count: 2, message: "Supplementary Schedule (Fall Semester 2025-26 and Interim Semester 2025-26)" },
  { id: 2, tag: "NOTICE", count: 1, message: "Library dues clearance required before next registration cycle" },
];

export const proctorMessage = "No new messages from your proctor at this time.";

export const defaultProfile = {
  photo: "/avatar-placeholder.svg",
  fullName: "Student Name",
  registerNumber: "24XYZ10099",
  campusEmail: "student.24xyz10099@campus.example.edu",
  program: "BTECH - Computer Science and Engineering",
  branch: "Cyber Security and Digital Forensics",
  school: "School of Computing Science, Engineering and AI",

  personal: {
    dob: "2006-04-12",
    gender: "Male",
    bloodGroup: "O+",
    nationality: "Indian",
    phone: "+91 90000 00000",
    personalEmail: "student.personal@example.com",
    address: "123, Example Street, Sample City, State - 000000",
  },
  educational: {
    tenthSchool: "Example Higher Secondary School",
    tenthPercent: "92%",
    twelfthSchool: "Example Junior College",
    twelfthPercent: "89%",
    entranceExam: "Sample Engineering Entrance Test",
    entranceRank: "4521",
  },
  family: {
    fatherName: "Father Name",
    fatherOccupation: "Occupation",
    fatherPhone: "+91 90000 00001",
    motherName: "Mother Name",
    motherOccupation: "Occupation",
    motherPhone: "+91 90000 00002",
    annualIncome: "₹ 8,00,000",
  },
  proctor: {
    proctorName: "Dr. Proctor Name",
    proctorDept: "Department of Computer Science",
    proctorEmail: "proctor.name@campus.example.edu",
    proctorPhone: "+91 90000 00003",
  },
  hostel: {
    applicationNumber: "2026098765",
    blockName: "Men's Hostel Block I, Phase A",
    roomNo: "A212",
    bedType: "6-Bed - Non-AC, Non-Balcony",
    messInfo: "Non-Veg - Sample Caterers",
  },
};

export const menuDrawer = [
  { id: "contact", label: "Contact Us", icon: "Phone", href: "#" },
  {
    id: "my-info",
    label: "My Info",
    icon: "UserRound",
    children: ["Profile", "Time Table", "Curriculum", "Digital ID Card"],
  },
  {
    id: "info-corner",
    label: "Info Corner",
    icon: "Info",
    children: ["Announcements", "Circulars", "Holiday List", "Downloads"],
  },
  {
    id: "proctor",
    label: "Proctor",
    icon: "UserCog",
    children: ["Proctor Details", "Meeting Log", "Feedback"],
  },
  {
    id: "academics",
    label: "Academics",
    icon: "GraduationCap",
    children: ["Course Registration", "Attendance", "Grade History", "Assignments"],
  },
  {
    id: "research",
    label: "Research",
    icon: "FlaskConical",
    children: ["Publications", "Projects", "Patents"],
  },
  {
    id: "examination",
    label: "Examination",
    icon: "FileText",
    children: ["Exam Schedule", "Hall Ticket", "Results", "Revaluation"],
  },
  {
    id: "services",
    label: "Services",
    icon: "Wrench",
    children: ["ID Card Request", "Certificate Request", "Grievance"],
  },
  {
    id: "bonafide",
    label: "Bonafide",
    icon: "BadgeCheck",
    children: ["Apply Bonafide", "Track Application"],
  },
  {
    id: "payments",
    label: "Online Payments",
    icon: "CircleDollarSign",
    children: ["Fee Payment", "Payment History", "Fee Structure"],
  },
  {
    id: "hostels",
    label: "Hostels",
    icon: "Building2",
    children: ["Hostel Info", "Mess Menu", "Leave Application"],
  },
  {
    id: "sw-events",
    label: "SW Events",
    icon: "CalendarDays",
    children: ["Upcoming Events", "Club Activities", "Registrations"],
  },
  {
    id: "account",
    label: "My Account",
    icon: "Settings",
    children: ["Change Password", "Login History", "Sign Out"],
  },
];

export const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: "Home", href: "/" },
  { id: "profile", label: "Profile", icon: "UserRound", href: "/profile" },
  { id: "academics", label: "Academics", icon: "GraduationCap", href: "#" },
  { id: "attendance", label: "Attendance", icon: "CalendarCheck", href: "#" },
  { id: "hostel", label: "Hostel", icon: "Building2", href: "#" },
  { id: "library", label: "Library", icon: "BookOpen", href: "#" },
  { id: "finance", label: "Finance", icon: "CircleDollarSign", href: "#" },
  { id: "achievements", label: "Achievements", icon: "Trophy", href: "#" },
  { id: "security", label: "Security", icon: "Lock", href: "#" },
];
