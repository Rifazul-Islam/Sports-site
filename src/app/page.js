import Collection from "./components/Collection/Collection";
import Navbar from "./components/Navbar/Navbar";
import Sports from "./components/Sports/Sports";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Sports></Sports>
      <Collection></Collection>
    </div>
  );
}
