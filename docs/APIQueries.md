## API Query Documentation

```graphql
fragment completeUser on User {
  id
  name
  email
  age
  salary
  vip
  profile {
    id
    name
  }
}

query {
  # users {
  #   id
  #   name
  #   profile {
  #     id
  # name
  #   }
  # }
  # user(id: 3) {
  #   id
  # name
  # }
  # profiles {
  #   id
  #   name
  # }
  # profile(id: 2){
  # name
  # }

  # Fragments: commonly used API queries
  user(id: 3) {
    ...completeUser
  }

  users {
    ...completeUser
  }
}
```

## API Mutations Documentation

```graphql
mutation {
  newUser(name: "Rebekia", email: "rebekia@gmail.com", age: 29) {
    id
    name
    email
    profile {
      name
    }
  }
  # Using input
  newUser(data: { name: "Rebekia", email: "redbekia@gmail.com", age: 29 }) {
    id
    name
    email
    profile {
      name
    }
  }
  # Using input
  removeUser(filter: { id: 1 }) {
    id
    name
  }

  # Using input
  updateUser(
    filter: { email: "kou@gmail.com" }
    data: { email: "arrazou@gmail.com", age: 100 }
  ) {
    id
    name
    email
    age
  }
  removeUser(id: 4) {
    id
    name
  }
  updateUser(id: 1, name: "Rebeca") {
    id
    name
  }
}
```
