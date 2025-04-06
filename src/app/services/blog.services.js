import axios from "axios";

import { BASE_URL } from "../utils/api_base_url_configration";

export const getBlogCategoryListServ = async (payload) => {
  try {
    const response = await axios.post(BASE_URL + "list-blog-category",payload);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getBlogDetailsServ = async (id) => {
  try {
    const response = await axios.get(BASE_URL + "blog/"+id);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const getBlogListServ = async (payload) => {
  try {
    const response = await axios.post(BASE_URL + "list-blogs",payload);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error("Error fetching data:", error);
    throw error;
  }
};

