import MCategoriesSlider from "../components/CategoriesSlider/Mobile/MCategoriesSlider";
import DekstopHomeLayOut from "../components/layouts/Dekstop/DekstopHomeLayOut";
import MobileHomeNavBar from "../components/NavBar/Mobile/MobileHomeNavBar";
import HomePageSlider from "../components/HomeBannerSlider/HomePageSlider";
import HomePageCategories from "../components/HomePageCategories/HomePageCategories";
import { UserContext } from "../ContaxtApi/UserContaxApi";
import { useContext } from "react";

export default function Home() {
  const { loginUser } = useContext(UserContext);
  return (
    <>
      <DekstopHomeLayOut>
        <MobileHomeNavBar />
        <MCategoriesSlider />
        <HomePageSlider />
        {loginUser?.email ? (
          <>
            <h1>User LogedIn</h1>
          </>
        ) : (
          <>
            <HomePageCategories />
          </>
        )}
      </DekstopHomeLayOut>
    </>
  );
}
