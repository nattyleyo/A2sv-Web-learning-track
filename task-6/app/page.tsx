import Image from "next/image";
import JobList from "./components/JobList";
import Description from "./components/Description";

export default function Home() {
  return (
    <main className=" flex gap-16 py-20 px-32">
      <JobList />
    </main>
  );
}
