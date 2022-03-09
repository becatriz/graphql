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
