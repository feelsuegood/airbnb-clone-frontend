import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  // add cookies
  withCredentials: true,
});

export const getRooms = () => {
  return instance.get("rooms/").then((response) => response.data);
};

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;
  return instance.get(`rooms/${roomPk}`).then((response) => response.data);
  // * return instance.get(`rooms/${queryKey[1]}`).then((response) => response.data);
};

export const getRoomReviews = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;
  return instance
    .get(`rooms/${roomPk}/reviews`)
    .then((response) => response.data);
  // * return instance.get(`rooms/${queryKey[1]}`).then((response) => response.data);
};

export const getMe = () => {
  return instance.get(`users/me`).then((response) => response.data);
};

export const logOut = () => {
  return instance
    .post("users/log-out", null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);
};

export const githubLogIn = (code: string) => {
  return instance
    .post(
      "users/github",
      { code },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      },
    )
    .then((response) => response.status);
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
