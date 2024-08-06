// app/page.tsx
import { fetchData } from "./api/fetchData";
import JobList from "./components/JobList";
import DispatchJobData from "./redux/DispatchJobData"; // Import the dispatch component

const Home = async () => {
  const result = await fetchData();

  return (
    <main className="flex gap-16 py-20 px-32">
      <DispatchJobData jobData={result} />
    </main>
  );
};

export default Home;
