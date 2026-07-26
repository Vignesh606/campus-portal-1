export const sessionUser = {
  regNo: "21BCE1001",
  role: "Student",
};

export const currentSemester = {
  label: "Winter Semester 2025-26",
  courses: [
    { id: "1", code: "CSE1001", name: "Problem Solving and Programming", type: "ETH", attendance: 92.5, remark: "85% and above", level: "good" },
    { id: "2", code: "CSE2001", name: "Data Structures and Algorithms", type: "ETP", attendance: 88.0, remark: "85% and above", level: "good" },
    { id: "3", code: "MAT2001", name: "Differential Equations and Transforms", type: "ETH", attendance: 78.0, remark: "75% to 80%", level: "ok" },
    { id: "4", code: "PHY1001", name: "Engineering Physics", type: "ELA", attendance: 71.0, remark: "75% or Below", level: "critical" },
  ],
};

export const creditStatus = {
  totalCreditsRequired: 160,
  earnedCredits: 118.0,
  currentCGPA: 8.74,
};

export const spotlight = [
  { id: "1", tag: "CIRCULAR", count: 1, message: "Continuous Assessment Test - 2 Schedule Released" },
  { id: "2", tag: "EVENT", count: 2, message: "Annual Tech Symposium Registration Open" },
];

export const proctorMessage = "Dear student, please ensure all pending course registrations are confirmed before Friday.";

export const menuDrawer = [
  { id: "academics", label: "Academics", icon: "BookOpen", children: ["Course Registration", "Timetable", "Attendance"] },
  { id: "examinations", label: "Examinations", icon: "GraduationCap", children: ["Exam Schedule", "Grades", "Transcripts"] },
  { id: "contact", label: "Contact Us", icon: "Phone", children: [] },
];

export const sidebarItems = [
  { id: "home", href: "/", label: "Dashboard", icon: "Home" },
  { id: "profile", href: "/profile", label: "Profile", icon: "User" },
];

export const defaultProfile = {
  fullName: "John Doe",
  registerNumber: "21BCE1001",
  campusEmail: "john.doe2021@campus.edu",
  program: "B.Tech",
  branch: "Computer Science and Engineering",
  school: "School of Computing Science",
  personal: {
    dob: "01/01/2003",
    gender: "Male",
    bloodGroup: "O+",
    nationality: "Indian",
    phone: "+91 9876543210",
    personalEmail: "john.doe@gmail.com",
    address: "123 Main Street, City, State",
  },
  educational: {
    tenthSchool: "St. Xavier High School",
    tenthPercent: "95%",
    twelfthSchool: "St. Xavier Senior Secondary",
    twelfthPercent: "92%",
    entranceExam: "JEE Main",
    entranceRank: "12450",
  },
  family: {
    fatherName: "Robert Doe",
    fatherOccupation: "Engineer",
    fatherPhone: "+91 9876543211",
    motherName: "Mary Doe",
    motherOccupation: "Teacher",
    motherPhone: "+91 9876543212",
    annualIncome: "₹ 12,000,000",
  },
  proctor: {
    proctorName: "Dr. Alan Smith",
    proctorDept: "Computer Science",
    proctorEmail: "alan.smith@campus.edu",
    proctorPhone: "+91 9876543213",
  },
  hostel: {
    applicationNumber: "HST-2021-089",
    blockName: "Block A",
    roomNo: "302",
    bedType: "2-Bedded AC",
    messInfo: "Special Mess",
  },
};
