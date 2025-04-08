import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/comments";

export const getAllComments = async (estateId) => {
  try {
    const comments = await request.get(`${baseUrl}?where=estateId LIKE "${estateId}"`);
    return comments;
  } catch (error) {
    console.log(error.message);
  }

};

export const postComment = async (estateId, text, firstName, lastName) => {
  try {
    const newComment = await request.post(baseUrl, {
      estateId,
      text,
      firstName,
      lastName,
    });
    return newComment;
  } catch (error) {
    console.log(error.message);
  }
  
};
