"use client";

import { useState } from "react";
import * as Icons from "lucide-react";

const LABELS = {
  dob: "Date of Birth",
  gender: "Gender",
  bloodGroup: "Blood Group",
  nationality: "Nationality",
  phone: "Phone Number",
  personalEmail: "Personal Email",
  address: "Address",
  tenthSchool: "10th School",
  tenthPercent: "10th Percentage",
  twelfthSchool: "12th School",
  twelfthPercent: "12th Percentage",
  entranceExam: "Entrance Exam",
  entranceRank: "Entrance Rank",
  fatherName: "Father's Name",
  fatherOccupation: "Father's Occupation",
  fatherPhone: "Father's Phone",
  motherName: "Mother's Name",
  motherOccupation: "Mother's Occupation",
  motherPhone: "Mother's Phone",
  annualIncome: "Annual Family Income",
  proctorName: "Proctor Name",
  proctorDept: "Department",
  proctorEmail: "Proctor Email",
  proctorPhone: "Proctor Phone",
  applicationNumber: "Application Number",
  blockName: "Block Name",
  roomNo: "Room No.",
  bedType: "Bed Type",
  messInfo: "Mess Information",
};

export default function AccordionSection({ icon, title, data, editMode, onChange, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const Icon = Icons[icon] || Icons.Circle;

  return (
    <div className="accordion-section">
      <button className={`accordion-trigger${open ? " open" : ""}`} onClick={() => setOpen((o) => !o)}>
        <span className="accordion-icon-badge">
          <Icon size={16} />
        </span>
        {title}
        <Icons.ChevronDown size={18} className="chev" />
      </button>
      {open && (
        <div className="accordion-body">
          {Object.entries(data).map(([key, value]) => (
            <div key={key}>
              <div className="meta-label">{LABELS[key] || key}</div>
              <div className="meta-value">
                {editMode ? (
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(key, e.target.value)}
                  />
                ) : (
                  <span>{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
