import MCategoriesSlider from "../components/CategoriesSlider/Mobile/MCategoriesSlider";
import DekstopHomeLayOut from "../components/layouts/Dekstop/DekstopHomeLayOut";
import MobileHomeNavBar from "../components/NavBar/Mobile/MobileHomeNavBar";
import HomePageSlider from "../components/HomeBannerSlider/HomePageSlider";
import { UserContext } from "../ContaxtApi/UserContaxApi";
import { useContext } from "react";
import HomePageComponent from "../components/HomePageComponent/HomePageComponent";
import EnqueryForm from "../utilsComponents/EnqueryForm";

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
            <EnqueryForm />
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
