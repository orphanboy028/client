import MCategoriesSlider from "../components/CategoriesSlider/Mobile/MCategoriesSlider";
import DekstopHomeLayOut from "../components/layouts/Dekstop/DekstopHomeLayOut";
import MobileHomeNavBar from "../components/NavBar/Mobile/MobileHomeNavBar";
import HomePageSlider from "../components/HomeBannerSlider/HomePageSlider";

export default function Home() {
  return (
    <>
      <DekstopHomeLayOut>
        <MobileHomeNavBar />
        <MCategoriesSlider />
        <HomePageSlider />

        <h1>Home page</h1>
      </DekstopHomeLayOut>
    </>
  );
}
