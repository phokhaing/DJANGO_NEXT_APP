import api from "../apiService";

const getAll = () => {
	return api.get("/users/")
}
const get = id => {
  return api.get(`/users/${id}`);
};
const create = data => {
  return api.post("/users/", data);
};
const update = (id, data) => {
  return api.put(`/users/${id}`, data);
};
const remove = id => {
  return api.delete(`/users/${id}`);
};
const removeAll = () => {
  return api.delete(`/users`);
};
const findByTitle = title => {
  return api.get(`/users?title=${title}`);
};
const userService = {
  getAll,
  get,
  create,
  remove,
  update,
  removeAll,
  findByTitle
};
export default userService;

