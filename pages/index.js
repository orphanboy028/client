import MCategoriesSlider from "../components/CategoriesSlider/Mobile/MCategoriesSlider";
import DekstopHomeLayOut from "../components/layouts/Dekstop/DekstopHomeLayOut";
import MobileHomeNavBar from "../components/NavBar/Mobile/MobileHomeNavBar";
import HomePageSlider from "../components/HomeBannerSlider/HomePageSlider";
import { UserContext } from "../ContaxtApi/UserContaxApi";
import { useContext } from "react";
import HomePageComponent from "../components/HomePageComponent/HomePageComponent";

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
            <HomePageComponent />
          </>
        )}
      </DekstopHomeLayOut>
    </>
  );
}
