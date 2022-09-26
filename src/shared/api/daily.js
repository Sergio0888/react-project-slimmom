import { instance } from "./auth";

//PAY ATTENTION
// userCharacteristics means object of this template:
// {
//   "weight": 100,
//   "height": 170,
//   "age": 30,
//   "desiredWeight": 60,
//   "bloodType": 1
// }

export const getDailyRateInGeneral = async (userCharacteristics) => {
  const { data } = await instance.post("/daily-rate", userCharacteristics);
  return data;
};

export const getDailyRateForUser = async (userId, userCharacteristics) => {
  const { data } = await instance.post(
    `/daily-rate/${userId}`,
    userCharacteristics
  );
  return data;
};