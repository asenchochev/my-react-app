import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/users";

export const register = async ({ email, firstName, lastName, password, rePassword}) => {
  try {
    const response = await request.post(`${baseUrl}/register`, {
      email,
      firstName,
      lastName,
      password,
      rePassword
    });

    return response;
  } catch (error) {
    throw new Error("The user already exist");
  }
};

export const login = async ({ email, password }) => {
  try {
    const response = await request.post(`${baseUrl}/login`, {
      email,
      password,
    });

    return response;
  } catch (error) {
    throw new Error("The user does not exist");
  }
};

export const logout = async () => {
  try {
    await request.get(`${baseUrl}/logout`);
  } catch (error) {
    console.log(error);
  }
};
