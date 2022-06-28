import React from "react";
import { ProfileDataProps } from "./ProfileDataProps";
import { PersonalDataRecord } from '@Models/Introduction'

const ProfileData: React.FC<ProfileDataProps> = ({ personalData }) => {
    return <>
        <div className="grid">
            <div className="col-12 lg:col-2" />
            <div className="col-12 lg:col-8">
                <div className="p-3 h-full">
                    <div className="shadow-2 p-3 h-full flex flex-column surface-card" style={{ borderRadius: 6 }}>
                        <div className="text-900 font-bold text-xl mb-2 text-center">Personal Data</div>
                        <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                        {
                            personalData && Object.entries(personalData).map((entry, index) => {
                                const record = entry[1]
                                return (
                                <div key={index} className="flex align-items-center">
                                    <i className={`${record.icon} text-yellow-500 mr-2 text-xl`}></i>
                                    <span className="font-bold text-xl text-600">{record.label}</span>
                                    <span className="ml-2 font-medium text-900">{record.value}</span>
                                </div>)
                            })
                        }
                        <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-2" />
        </div>
    </>
}

export default ProfileData