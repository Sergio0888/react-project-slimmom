import { instance } from "./auth";

export const postEatenProduct = async (data) => {
  const { data: result } = await instance.post("/day", data);
  return result;
};

export const getInfoForDay = async (date) => {
  const { data } = await instance.post("/day/info", date);
  return data;
};

export const deleteProductItem = async (productItem) => {
  const { data } = await instance.delete("/day", {
    data: productItem,
  });
  const newData = { ...data, deletedProductId: productItem.eatenProductId };

  return newData;
};