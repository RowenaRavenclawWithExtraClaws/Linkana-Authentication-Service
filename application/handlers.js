import { statusCodes } from "../utility/constants.js";

const handleGetUsers = (req, res) => {
  res
    .status(statusCodes.ok)
    .send({ page: 1, users: [{ username: "user1" }, { username: "user2" }] });
};

const handleGetUserById = (req, res) => {
  res.status(statusCodes.ok).send({ id: req.params.id, username: "user1" });
};

const handleGetCompanies = (req, res) => {
  res.status(statusCodes.ok).send({
    page: 1,
    companies: [{ name: "company1" }, { username: "user2" }],
  });
};

const handleGetCompanyById = (req, res) => {
  res.status(statusCodes.ok).send({ id: req.params.id, name: "company1" });
};

const handleLoginUser = (req, res) => {
  res
    .status(statusCodes.accepted)
    .send({ username: req.body.username, password: req.body.password });
};

const handleRegisterUser = (req, res) => {
  res.status(statusCodes.created).send(req.body);
};

const handleAddUser = (req, res) => {
  res.status(statusCodes.created).send(req.body);
};

const handleAddCompany = (req, res) => {
  res.status(statusCodes.created).send(req.body);
};

const handleEditUser = (req, res) => {
  res.status(statusCodes.ok).send(req.body);
};

const handleEditCompany = (req, res) => {
  res.status(statusCodes.ok).send(req.body);
};

const handleDeleteUser = (req, res) => {
  res.status(statusCodes.noContent).send("deleted");
};

const handleDeleteCompany = (req, res) => {
  res.status(statusCodes.noContent).send("deleted");
};

const handlers = {
  getUsers: handleGetUsers,
  getUserById: handleGetUserById,
  getCompanies: handleGetCompanies,
  getCompanyById: handleGetCompanyById,
  loginUser: handleLoginUser,
  registerUser: handleRegisterUser,
  addUser: handleAddUser,
  addCompany: handleAddCompany,
  editUser: handleEditUser,
  editCompany: handleEditCompany,
  deleteUser: handleDeleteUser,
  deleteCompany: handleDeleteCompany,
};

export default handlers;