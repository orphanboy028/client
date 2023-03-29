import DekstopHomeLayOut from "../components/layouts/Dekstop/DekstopHomeLayOut";
import MobileHomeNavBar from "../components/NavBar/Mobile/MobileHomeNavBar";

export default function Home() {
  return (
    <>
      <DekstopHomeLayOut>
        <MobileHomeNavBar />
        <h1>Home page</h1>
      </DekstopHomeLayOut>
    </>
  );
}
