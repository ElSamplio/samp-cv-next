export type Introduction = {
    name:string,
    headLine: string
    title: string
    linkButtons: ButtonsConfig[]
    personalData: PersonalData | undefined
}

export type ButtonsConfig = {
    icon: string
    label: string
    href: string
}

export type PersonalData = {
    idNumber: PersonalDataRecord
    birthPlace: PersonalDataRecord
    birthDate: PersonalDataRecord
    maritalStatus: PersonalDataRecord
    mobilePhone: PersonalDataRecord
    email: PersonalDataRecord
}

export type PersonalDataRecord = {
    icon: string
    label: string
    value: string
}