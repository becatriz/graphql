let id = 1;

function nextId() {
  return id++;
}

const users = [
  {
    id: nextId(),
    name: "Bia Liz",
    email: "bia@gmail.com",
    age: 29,
    profile_id: 1,
    status: "ENABLED",
  },
  {
    id: nextId(),
    name: "Rosa Kou",
    email: "kou@gmail.com",
    age: 48,
    profile_id: 2,
    status: "DISABLED",
  },
  {
    id: nextId(),
    name: "Wiloyu Iuu",
    email: "iuu@gmail.com",
    age: 18,
    profile_id: 1,
    status: "BLOCKED",
  },
];

const profiles = [
  { id: 1, name: "Comun" },
  { id: 2, name: "Administrador" },
];

module.exports = {
  users,
  profiles,
  nextId,
};
