// mockJobData.ts

import { JobData } from "@/app/redux/slices/jobsData/jobsdataSlice"; // Adjust the import path as necessary

const mockJobData: JobData[] = [
  {
    applicantsCount: 10,
    average_rating: 4.5,
    categories: ["Engineering", "Remote"],
    createdAt: new Date().toISOString(),
    datePosted: new Date().toISOString(),
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week from now
    description: "We are looking for a skilled Frontend Developer...",
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 1 month from now
    id: "1",
    idealCandidate: "An experienced developer with a passion for UI/UX.",
    isBookmarked: false,
    isRolling: true,
    location: ["Remote"],
    logoUrl: "https://example.com/logo.png",
    opType: "remote",
    orgEmail: "hr@company.com",
    orgID: "companyA",
    orgName: "Company A",
    orgPrimaryPhone: "123-456-7890",
    perksAndBenefits: "Health insurance, 401k matching",
    questions: "What is your experience with React?",
    requiredSkills: ["React", "JavaScript", "CSS"],
    requirements: "Bachelor's degree in Computer Science or related field.",
    responsibilities: "Develop and maintain frontend applications.",
    startDate: new Date().toISOString(),
    status: "open",
    title: "Job Title 1",
    total_reviews: 5,
    updatedAt: new Date().toISOString(),
    viewsCount: 100,
    whenAndWhere: "Apply on our website.",
  },
  {
    applicantsCount: 5,
    average_rating: 4.0,
    categories: ["Engineering", "Full-time"],
    createdAt: new Date().toISOString(),
    datePosted: new Date().toISOString(),
    deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 2 weeks from now
    description: "Join us as a Backend Developer...",
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 1 month from now
    id: "2",
    idealCandidate: "A backend expert who is familiar with Node.js.",
    isBookmarked: false,
    isRolling: false,
    location: ["On-site"],
    logoUrl: "https://example.com/logo2.png",
    opType: "inPerson",
    orgEmail: "hr@companyb.com",
    orgID: "companyB",
    orgName: "Company B",
    orgPrimaryPhone: "987-654-3210",
    perksAndBenefits: null,
    questions: null,
    requiredSkills: ["Node.js", "Express", "MongoDB"],
    requirements: "2+ years of experience in backend development.",
    responsibilities: "Build and maintain server-side applications.",
    startDate: new Date().toISOString(),
    status: "open",
    title: "Job Title 2",
    total_reviews: 2,
    updatedAt: new Date().toISOString(),
    viewsCount: 50,
    whenAndWhere: "Apply via our website.",
  },
];

export default mockJobData;
// // app/api/__mocks__/bookmarks.ts
// export const getBookmarks = jest.fn(async (accessToken: string) => {
//   // Return mock data as if it was fetched from an API
//   return [
//     { eventID: "1", jobTitle: "Software Engineer" },
//     { eventID: "2", jobTitle: "Product Manager" },
//   ];
// });

// export const BookmarkCrud = jest.fn(); // Mock the BookmarkCrud function as well if needed
