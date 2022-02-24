import { baseGet } from "../baseApi";

export const getPlayers = async () => {
  try {
    const response = baseGet("/players");
    return response.data;
  } catch (err) {
    return err;
  }
};
