import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

export const getRooms = () => {
  return instance.get("rooms/").then((response) => response.data);
};

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;
  return instance.get(`rooms/${roomPk}`).then((response) => response.data);
  // * return instance.get(`rooms/${queryKey[1]}`).then((response) => response.data);
};
// * second
// export async function getRooms() {
//   const response = await instance(`rooms/`);
//   return response.data;
// }

// * first
// export async function getRooms() {
// const response = await fetch(`${BASE_URL}/rooms/`);
// const json = await response.json(); // axios do it for you
// return json;
// }
