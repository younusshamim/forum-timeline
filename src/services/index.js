import api from "./api";

export const onGetPosts = async () => {
  return await api.get(`/posts`);
};

export const onGetUsers = async () => {
  return await api.get(`/users`);
};
