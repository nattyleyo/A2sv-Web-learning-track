// app/page.tsx
import { fetchData } from "./api/fetchData";
import NavBar from "./components/Nav/NavBar";
import DispatchJobData from "./redux/DispatchJobData"; // Import the dispatch component

const Home = async () => {
  const result = await fetchData();

  return (
    <>
      <NavBar />
      <main className="flex flex-col gap-16 py-20 px-32">
        <DispatchJobData jobData={result} />
      </main>
    </>
  );
};

export default Home;
