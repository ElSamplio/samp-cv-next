import React from "react";
import { ProfileDataProps } from "./ProfileDataProps";

const ProfileData: React.FC<ProfileDataProps> = ({ personalData }) => {
  return (
    <div className="cv-section surface-0">
      <div className="grid">
        <div className="col-12">
          <div className="cv-profile-card">
            <div className="cv-section__head" style={{ marginBottom: "1.25rem" }}>
              <span className="cv-section__label">About</span>
              <h2 className="cv-section__title font-display" style={{ fontSize: "1.35rem" }}>
                Personal data
              </h2>
            </div>
            {personalData &&
              Object.entries(personalData).map((entry, index) => {
                const record = entry[1];
                return (
                  <div key={index} className="cv-profile-row">
                    <i className={record.icon} aria-hidden />
                    <div className="flex flex-column md:flex-row flex-grow-1 gap-1 md:gap-3">
                      <span className="label">{record.label}</span>
                      <span className="value">{record.value}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
