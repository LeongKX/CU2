import axios from "axios";

const API_URL = "http://localhost:5555";

/* INSTRUCTION: create a function called getDogs that fetches the dogs from the back-end server */
export const getDogs = async (size = "") => {
  try {
    const response = await axios.get(API_URL + "/dogs?size=" + size);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* INSTRUCTION: create a function called getCats that fetches the cats from the back-end server */
export const getCats = async (sort = "") => {
  try {
    const response = await axios.get(API_URL + "/cats?sort=" + sort);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* INSTRUCTION: create a function called getSmallAnimals that fetches the small animals from the back-end server */
export const getSmallAnimals = async (search = "") => {
  try {
    const response = await axios.get(
      API_URL + "/small-animals?search=" + search
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
