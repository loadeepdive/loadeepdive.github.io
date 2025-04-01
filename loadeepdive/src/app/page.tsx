import Community from "./components/home/community";
import Introduce from "./components/home/introduce";
import MainFunction from "./components/home/mainFunction";

export default function Home() {
  return (
    <div>
      <Introduce></Introduce>
      <MainFunction></MainFunction>
      <Community></Community>
    </div>
  );
}
