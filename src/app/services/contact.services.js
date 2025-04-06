import axios from "axios";

import { BASE_URL } from "../utils/api_base_url_configration";

export const submitContactQuery = async (payload) => {
  try {
    const response = await axios.post(BASE_URL + "store-query",payload);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error("Error fetching data:", error);
    throw error;
  }
};


