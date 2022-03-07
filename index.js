const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
  }

  type Product {
    name: String!
    price: Float!
    discount: Float
    priceWithDiscount: Float
  }

  # Pontos de entrada da API
  type Query {
    currentTime: Date! # Exclamação significa que o retorno é obrigatorio
    loggedInUser: User!
    featuredProduct: Product!
    lotteryNumbers: [Int]!
  }
`;

const resolvers = {
  User: {
    salary(usuario) {
      return usuario.real_salary;
    },
  },

  Product: {
    priceWithDiscount(parent) {
      if (parent.discount) {
        return parent.price * (1 - parent.discount)
      }
      return parent.price
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
        price: 1.500,
        discount: 0.15,
      };
    },
    lotteryNumbers(){
        const ascendingOrder = (a, b) => a - b
        return new Set(Array(6).fill(0).map(n => parseInt(Math.random() * 60 + 1)).sort(ascendingOrder))
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen("3000").then(({ url }) => {
  console.log(`Running on ${url}`);
});
