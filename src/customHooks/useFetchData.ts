import { useState, useEffect } from "react";
import axios from "axios";
import { Skill } from "@Models/Skill";
import { Project } from "../models/Project";
import { Introduction } from "@Models/Introduction";
const baseUrl = process.env.API_URL || "https://samp-cv-nest.herokuapp.com";

const useFetchData = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [introduction, setIntroduction] = useState<Introduction | null>(null);
  const [skills, setSkills] = useState<Skill[] | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const introductionPromise = axios.get(`${baseUrl}/introduction`);
    const skillsPromise = axios.get(`${baseUrl}/skills`);
    const projectsPromise = axios.get(`${baseUrl}/project`);
    Promise.all([introductionPromise, skillsPromise, projectsPromise])
      .then((responses) => {
        const introResponse = responses[0].data;
        const dataIntroduction: Introduction = introResponse?.data[0];
        const skillsResponse = responses[1].data;
        const dataSkills: Skill[] = skillsResponse?.data;
        const projectsResponse = responses[2].data;
        const dataProjects: Project[] = projectsResponse?.data;
        setIntroduction(dataIntroduction);
        setSkills(dataSkills);
        setProjects(dataProjects);
      })
      .finally(() => setLoading(false));
  }, []);

  return [introduction, skills, projects, loading] as const;
};

export default useFetchData;
