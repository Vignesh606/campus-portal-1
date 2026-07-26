"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import AccordionSection from "../../components/AccordionSection";
import { sessionUser, defaultProfile } from "../../data/mockData";
import { Pencil, Check } from "lucide-react";

const STORAGE_KEY = "campus-portal-profile";

export default function ProfilePage() {
  const [profile, setProfile] = useState(defaultProfile);
  const [draft, setDraft] = useState(defaultProfile);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setProfile(parsed);
        setDraft(parsed);
      }
    } catch (e) {
      // ignore malformed/missing storage
    }
  }, []);

  function updateSection(sectionKey, field, value) {
    setDraft((prev) => ({
      ...prev,
      [sectionKey]: { ...prev[sectionKey], [field]: value },
    }));
  }

  function updateTop(field, value) {
    setDraft((prev) => ({ ...prev, [field]: value }));
  }

  function toggleEditMode() {
    if (editMode) {
      // Turning off edit mode without explicit save discards unsaved changes
      setDraft(profile);
    }
    setEditMode((m) => !m);
  }

  function handleSave() {
    setProfile(draft);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    } catch (e) {
      // storage unavailable, edits still reflected in session state
    }
    setEditMode(false);
  }

  function handleCancel() {
    setDraft(profile);
    setEditMode(false);
  }

  return (
    <div className="app-shell">
      <Navbar user={sessionUser} />
      <div className="body-layout">
        <Sidebar />
        <main className="content">
          <div className="edit-mode-toggle">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <button
                className={`toggle-switch${editMode ? " on" : ""}`}
                onClick={toggleEditMode}
                aria-pressed={editMode}
                aria-label="Toggle edit mode"
              >
                <span className="knob" />
              </button>
              <strong>Edit Mode</strong>
              <span className={`status-pill${editMode ? " editing" : ""}`}>
                {editMode ? "EDITING" : "VIEW ONLY"}
              </span>
            </div>
            {editMode && (
              <div className="save-bar">
                <button className="btn btn-outline" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleSave}>
                  <Check size={14} style={{ verticalAlign: "-2px", marginRight: 4 }} />
                  Save changes
                </button>
              </div>
            )}
          </div>

          <div className="profile-header">
            <div className="profile-photo-wrap">
              <div className="profile-photo">
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23dbe8ff'/><circle cx='50' cy='38' r='20' fill='%230d6efd'/><ellipse cx='50' cy='95' rx='34' ry='26' fill='%230d6efd'/></svg>"
                  alt="profile"
                />
              </div>
              {editMode ? (
                <input
                  type="text"
                  value={draft.fullName}
                  onChange={(e) => updateTop("fullName", e.target.value)}
                  style={{ textAlign: "center" }}
                />
              ) : (
                <div className="profile-name">{profile.fullName}</div>
              )}
            </div>

            <div className="profile-meta">
              <div>
                <div className="meta-label">Register Number</div>
                <div className="meta-value">
                  {editMode ? (
                    <input value={draft.registerNumber} onChange={(e) => updateTop("registerNumber", e.target.value)} />
                  ) : (
                    profile.registerNumber
                  )}
                </div>
              </div>
              <div>
                <div className="meta-label">Campus Email</div>
                <div className="meta-value">
                  {editMode ? (
                    <input value={draft.campusEmail} onChange={(e) => updateTop("campusEmail", e.target.value)} />
                  ) : (
                    profile.campusEmail
                  )}
                </div>
              </div>
              <div>
                <div className="meta-label">Program &amp; Branch</div>
                <div className="meta-value">
                  {editMode ? (
                    <>
                      <input
                        value={draft.program}
                        onChange={(e) => updateTop("program", e.target.value)}
                        style={{ marginBottom: 6 }}
                      />
                      <input value={draft.branch} onChange={(e) => updateTop("branch", e.target.value)} />
                    </>
                  ) : (
                    <>
                      {profile.program} ({profile.branch})
                    </>
                  )}
                </div>
              </div>
              <div>
                <div className="meta-label">School Name</div>
                <div className="meta-value">
                  {editMode ? (
                    <input value={draft.school} onChange={(e) => updateTop("school", e.target.value)} />
                  ) : (
                    profile.school
                  )}
                </div>
              </div>
            </div>
          </div>

          <AccordionSection
            icon="UserRound"
            title="PERSONAL INFORMATION"
            data={draft.personal}
            editMode={editMode}
            onChange={(field, value) => updateSection("personal", field, value)}
            defaultOpen
          />
          <AccordionSection
            icon="GraduationCap"
            title="EDUCATIONAL INFORMATION"
            data={draft.educational}
            editMode={editMode}
            onChange={(field, value) => updateSection("educational", field, value)}
          />
          <AccordionSection
            icon="Users"
            title="FAMILY INFORMATION"
            data={draft.family}
            editMode={editMode}
            onChange={(field, value) => updateSection("family", field, value)}
          />
          <AccordionSection
            icon="UserCog"
            title="PROCTOR INFORMATION"
            data={draft.proctor}
            editMode={editMode}
            onChange={(field, value) => updateSection("proctor", field, value)}
          />
          <AccordionSection
            icon="Building2"
            title="HOSTEL INFORMATION"
            data={draft.hostel}
            editMode={editMode}
            onChange={(field, value) => updateSection("hostel", field, value)}
          />

          {editMode && (
            <p style={{ color: "#6c757d", fontSize: "0.8rem", marginTop: "0.5rem" }}>
              <Pencil size={12} style={{ verticalAlign: "-1px", marginRight: 4 }} />
              Edit Mode is on — change any field above, then click "Save changes" to keep them, or "Cancel" to discard.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
