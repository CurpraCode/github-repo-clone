import instance from "./axios.config";

export const getUser = async () => {
  const { data } = await instance.get();
  return data;
};
