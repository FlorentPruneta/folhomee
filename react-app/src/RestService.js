const API = "http://localhost:3001";
const LOGIN_URL = "auth";

export const login = async (login, password) => {
  let requestOptions = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ login, password })
  };
  return fetch(`${API}/${LOGIN_URL}`, requestOptions);
};
