import instance from "./axios.config";

export const getUser = async () => {
  const { data } = await instance.get("repos");
  return data;
};

export const getUserDetails = async () => {
  const { data } = await instance.get();
  return data;
};