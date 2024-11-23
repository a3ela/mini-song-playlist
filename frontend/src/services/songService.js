import axios from "axios";
const BASE_URL = "http://localhost:3001/api/songs";

export const getAll = async () => {
  const response = await axios.get(BASE_URL);
  if (response.status !== 200) {
    throw new Error(`Failed to fetch songs: ${response.status}`);
  }
  return response.data;
};

export const create = async (songObject) => {
  const response = await axios.post(BASE_URL, songObject);
  if (response.status !== 201) {
    throw new Error(`Failed to create song: ${response.status}`);
  }
  return response.data;
};

export const update = async (id, newObject) => {
  const response = await axios.put(`${BASE_URL}/${id}`, newObject);
  if (response.status !== 200) {
    throw new Error(`Failed to update song: ${response.status}`);
  }
  return response.data;
};

export const remove = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  if (response.status !== 200) {
    throw new Error(`Failed to delete song: ${response.status}`);
  }
  return response.data;
};
