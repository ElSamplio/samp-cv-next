import { useState, useEffect } from "react";
import axios from "axios";
import { Skill } from "@Models/Skill";
import { Framework } from "../models/Framework";
import { Project } from "../models/Project";
import { Introduction } from "@Models/Introduction";
const baseUrl = process.env.API_URL || "https://samp-cv-nest.herokuapp.com";

const useFetchData = () => {
  //   
  //   const [frameworks, setFrameworks] = useState<Framework[]>([]);
  //   const [projects, setProjects] = useState<Project[]>([]);
  //   const [profileData, setProfileData] = useState<ProfileData>();
  const [loading, setLoading] = useState<boolean>(true);
  const [introduction, setIntroduction] = useState<Introduction | null>(null);
  const [skills, setSkills] = useState<Skill[] | null>(null);

  useEffect(() => {
    const introductionPromise = axios.get(`${baseUrl}/introduction`);
    const skillsPromise = axios.get(`${baseUrl}/skills`);
    Promise.all([introductionPromise, skillsPromise])
      .then((responses) => {
        const introResponse = responses[0].data;
        const dataIntroduction: Introduction = introResponse?.data[0];
        const skillsResponse = responses[1].data;
        const dataSkills: Skill[] = skillsResponse?.data;        
        setIntroduction(dataIntroduction);
        setSkills(dataSkills);
      })
      .finally(() => setLoading(false));
  }, []);

  return [introduction, skills, loading] as const;
};

export default useFetchData;
