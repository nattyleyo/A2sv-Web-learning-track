// hooks/useJobData.ts
"use client";
import { useState, useEffect } from "react";

export interface CardData {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  when_where: string;
  about: {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
  };
  company: string;
  image: string;
}

const useJobData = () => {
  const [userdata, setUserdata] = useState<CardData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/records.json", {
          cache: "no-store",
        });
        const data = await res.json();
        setUserdata(data.job_postings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return userdata;
};

export default useJobData;
