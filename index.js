const { ApolloServer, gql } = require("apollo-server");

const users = [
  {
    id: 1,
    name: "Bia Liz",
    email: "bia@gmail.com",
    age: 29,
    profile_id: 1,
  },
  {
    id: 2,
    name: "Rosa Kou",
    email: "kou@gmail.com",
    age: 48,
    profile_id: 2,
  },
  {
    id: 3,
    name: "Wiloyu Iuu",
    email: "iuu@gmail.com",
    age: 18,
    profile_id: 1,
  },
];

const profiles = [
  { id: 1, name: "Comun" },
  { id: 2, name: "Administrador" },
];

const typeDefs = gql`
  scalar Date

  type Profile {
    id: Int
    name: String
  }

  type User {
    id: Int!
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
    profile: Profile
  }

  type Product {
    name: String!
    price: Float!
    discount: Float
    priceWithDiscount: Float
  }

  # API Entry Points
  type Query {
    currentTime: Date! # Exclamation means that the return is mandatory
    loggedInUser: User!
    featuredProduct: Product!
    lotteryNumbers: [Int]!
    users: [User]!
    user(id: Int): User
    profiles: [Profile]!
    profile(id: Int): Profile
  }
`;

const resolvers = {
  Product: {
    priceWithDiscount(parent) {
      if (parent.discount) {
        return parent.price * (1 - parent.discount);
      }
      return parent.price;
    },
  },

  User: {
    salary(user) {
      return user.real_salary;
    },

    profile(user) {
      // Relationship between two different data types
      const selected = profiles.find(
        (profile) => profile.id === user.profile_id
      );

      return selected ? selected : null;
    },
  },

  Query: {
    currentTime() {
      return new Date();
    },
    loggedInUser() {
      return {
        id: 1,
        name: "Rebeca",
        email: "beca@gmail.com",
        age: 29,
        real_salary: 10.0,
        vip: true,
      };
    },
    featuredProduct() {
      return {
        name: "Celular",
        price: 1.5,
        discount: 0.15,
      };
    },
    lotteryNumbers() {
      const ascendingOrder = (a, b) => a - b;
      return new Set(
        Array(6)
          .fill(0)
          .map((n) => parseInt(Math.random() * 60 + 1))
          .sort(ascendingOrder)
      );
    },
    users() {
      return users;
    },
    user(_, { id }) {
      const selected = users.find((user) => user.id === id);
      return selected ? selected : null;
    },
    profiles() {
      return profiles;
    },
    profile(_, { id }) {
      const selected = profiles.find((profile) => profile.id === id);
      return selected ? selected : null;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen("3000").then(({ url }) => {
  console.log(`Running on ${url}`);
});
