import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/estates";

export const getAll = async () => {
  try {
    const estates = await request.get(`${baseUrl}?sortBy=_createdOn decs`);

    return estates;
  } catch (error) {
    throw new Error('Estates dose not exist')
  }
};

export const getOne = async (estateId) => {
  try {
    const estate = await request.get(`${baseUrl}/${estateId}`);

    return estate;
  } catch (error) {
    throw new Error('Estate dose not exist')
  }
};

export const create = async (estateData) => {
  try {
    const result = await request.post(baseUrl, estateData);

    return result;
  } catch (error) {
    throw new Error('Request failed')
  }
};

export const edit = async (estateId, estateData) => {
  try {
    const result = await request.edit(`${baseUrl}/${estateId}`, estateData);

    return result;
  } catch (error) {}
  throw new Error('Request failed')
};

export const remove = async (estateId) => {
  try {
    await request.remove(`${baseUrl}/${estateId}`);
  } catch (error) {
    throw new Error('Estate dose not exist')
  }
};

export const getLatesVillas = async () => {
  try {
    const result = await request.get(
      `${baseUrl}?where=types Like "Villa"&sortBy=_createdOn decs&offset=0&pageSize=3`
    );

    return result;
  } catch (error) {
    throw new Error('Villas dose not exist')
  }
};

export const getLatesApartment = async () => {
  try {
    const result = await request.get(
      `${baseUrl}?where=types Like "Apartment"&sortBy=_createdOn decs&offset=0&pageSize=3`
    );

    return result;
  } catch (error) {
    throw new Error('Apartments dose not exist')
  }
};

export const getLatesOffice = async () => {
  try {
    const result = await request.get(
      `${baseUrl}?where=types Like "Office"&sortBy=_createdOn decs&offset=0&pageSize=3`
    );

    return result;
  } catch (error) {
    throw new Error('Offices dose not exist')

  }
};

export const getLatesGarage = async () => {
  try {
    const result = await request.get(
      `${baseUrl}?where=types Like "Garage"&sortBy=_createdOn decs&offset=0&pageSize=3`
    );

    return result;
  } catch (error) {
    throw new Error('Garages dose not exist')

  }
};

export const getCountVillas = async () => {
  try {
    const count = await request.get(
      `${baseUrl}?where=types Like "Villa"&count`
    );

    return count;
  } catch (error) {
    throw new Error('Villas dose not exist')

  }
};

export const getCountApartments = async () => {
  try {
    const count = await request.get(
      `${baseUrl}?where=types Like "Apartment"&count`
    );

    return count;
  } catch (error) {
    throw new Error('Apartments dose not exist')

  }
};

export const getCountOffices = async () => {
  try {
    const count = await request.get(
      `${baseUrl}?where=types Like "Office"&count`
    );

    return count;
  } catch (error) {
    throw new Error('Offices dose not exist')
  }
};

export const getCountGarages = async () => {
  try {
    const count = await request.get(
      `${baseUrl}?where=types Like "Garage"&count`
    );

    return count;
  } catch (error) {
    throw new Error('Garages dose not exist')

  }
};

export const search = async (type, location, minPrice, maxPrice) => {
  try {
    const estates = await request.get(
      `${baseUrl}?where=price > ${minPrice} AND price < ${maxPrice} AND types LIKE "${type}" AND location LIKE "${location}"`
    );

    return estates;
  } catch (error) {
    throw new Error('Estates dose not exist')
  }
};

export const getMyPosts = async (ownerId) => {
  try {
    const estates = await request.get(
      `${baseUrl}?where=_ownerId LIKE "${ownerId}"`
    );

    return estates;
  } catch (error) {
    throw new Error('Estates dose not exist')
  }
};
