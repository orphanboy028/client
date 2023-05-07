import MCategoriesSlider from "../components/CategoriesSlider/Mobile/MCategoriesSlider";
import DekstopHomeLayOut from "../components/layouts/Dekstop/DekstopHomeLayOut";
import MobileHomeNavBar from "../components/NavBar/Mobile/MobileHomeNavBar";
import HomePageSlider from "../components/HomeBannerSlider/HomePageSlider";
import { UserContext } from "../ContaxtApi/UserContaxApi";
import { useContext } from "react";
import HomePageComponent from "../components/HomePageComponent/HomePageComponent";
import { ProductContext } from "../ContaxtApi/ProductContextApi";
import { getAllProductsAction } from "../Actions/ProductActions/ProductActions";

export default function Home({ initialProducts }) {
  const { loginUser } = useContext(UserContext);
  const { setallProducts } = useContext(ProductContext);

  setallProducts(initialProducts);
  return (
    <>
      <DekstopHomeLayOut>
        <MobileHomeNavBar />
        <MCategoriesSlider />
        <HomePageSlider />
        <HomePageComponent />
      </DekstopHomeLayOut>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await getAllProductsAction();

    const result = res.data.allProducts;

    return {
      props: {
        initialProducts: result,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        initialProducts: [],
      },
    };
  }
}
