// Fillter Enquirey By Location and Categories
export const filterEnquiresByLocation = (
  allEnquiryes,
  city,
  Distric,
  state,
  categories
) => {
  console.log(city, Distric, state, categories);
  if (city && categories === null) {
    console.log("city && categories === null -1");
    return allEnquiryes?.filter(
      (enqures) =>
        enqures?.city?.toLowerCase() === city.toLowerCase() ||
        enqures?.state?.toLowerCase() === city.toLowerCase() ||
        enqures?.district?.toLowerCase() === city.toLowerCase()
    );
  } else if (Distric && categories === null) {
    console.log("District");
    return allEnquiryes.filter(
      (enqures) =>
        enqures?.district?.toLowerCase() === Distric?.toLowerCase() ||
        enqures?.city?.toLowerCase() === Distric?.toLowerCase() ||
        enqures?.state?.toLowerCase() === Distric?.toLowerCase()
    );
  } else if (state && categories === null) {
    console.log("District");
    return allEnquiryes.filter(
      (enqures) =>
        enqures?.district?.toLowerCase() === state?.toLowerCase() ||
        enqures?.city?.toLowerCase() === state?.toLowerCase() ||
        enqures?.state?.toLowerCase() === state?.toLowerCase()
    );
  } else if (city && state && categories === null) {
    console.log("city && state && categories === null -2");
    return allEnquiryes.filter(
      (enqures) =>
        enqures?.city?.toLowerCase() === city.toLowerCase() &&
        enqures?.state?.toLowerCase() === state.toLowerCase()
    );
  } else if (city && state && Distric && categories === null) {
    console.log("city && state && Distric && categories === null -3");
    return allEnquiryes.filter(
      (enqures) =>
        enqures?.city?.toLowerCase() === city.toLowerCase() &&
        enqures?.state?.toLowerCase() === state.toLowerCase() &&
        enqures?.district?.toLowerCase() === Distric.toLowerCase()
    );
  } else if (categories && city === null) {
    console.log("categories && city === null -4");
    return allEnquiryes.filter(
      (enqures) =>
        enqures.Seletedlefcategory.toLowerCase() === categories.toLowerCase()
    );
  } else if (city && state && Distric && categories) {
    console.log("city && state && Distric && categories -5");
    return allEnquiryes.filter(
      (enqures) =>
        enqures?.city?.toLowerCase() === city.toLowerCase() &&
        enqures?.state?.toLowerCase() === state.toLowerCase() &&
        enqures?.district?.toLowerCase() === Distric.toLowerCase() &&
        enqures?.Seletedlefcategory.toLowerCase() === categories.toLowerCase()
    );
  }

  return allEnquiryes;
};
