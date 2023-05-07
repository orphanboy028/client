import axios from "axios";

const searchAPI = (query) => {
  const endpoint = `https://nominatim.openstreetmap.org/search?q=${query}&format=json`;

  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        setResults(data);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const nominatimsearchAPI = async (query) => {
  const endpoint = `https://nominatim.openstreetmap.org/search?q=${query}&format=json`;

  try {
    const response = await axios.get(endpoint);
    if (response.data.length > 0) {
      return response;
    }
  } catch (error) {
    console.error(error);
    return error.response;
  }
};
