// app/page.tsx
import { fetchData } from "./api/fetchData";
import NavBar from "./components/Nav/NavBar";
import DispatchJobData from "./redux/DispatchJobData"; // Import the dispatch component
import LoginComp from "./components/Auth/LoginComp";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
var result = undefined;
const Home = async () => {
  const session = await getServerSession(options);
  result = await fetchData();
  return (
    <>
      <NavBar />
      {session && (
        <main className="flex flex-col gap-16 py-20 px-32">
          <DispatchJobData jobData={result} />
        </main>
      )}
      {!session && <LoginComp />}
    </>
  );
};

export default Home;
