// mock/mockBookmarkData.ts

export interface BookmarkData {
  eventID: string;
  dateBookmarked: string; // ISO date string
  datePosted: string; // ISO date string
  location: string;
  logoUrl: string;
  opType: string; // 'inPerson', 'remote', etc.
  orgName: string;
  title: string;
}

const mockBookmarkData: BookmarkData[] = [
  {
    eventID: "1",
    dateBookmarked: "2024-08-01T00:00:00Z",
    datePosted: "2024-07-30T00:00:00Z",
    location: "New York",
    logoUrl: "https://example.com/logo1.png",
    opType: "inPerson",
    orgName: "Sample Org",
    title: "Job Title 1",
  },
  {
    eventID: "2",
    dateBookmarked: "2024-08-02T00:00:00Z",
    datePosted: "2024-07-29T00:00:00Z",
    location: "Los Angeles",
    logoUrl: "https://example.com/logo2.png",
    opType: "remote",
    orgName: "Another Org",
    title: "Job Title 2",
  },
];

export default mockBookmarkData;
