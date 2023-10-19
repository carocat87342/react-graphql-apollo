const { ApolloServer, gql } = require("apollo-server");
const { v4: uuidV4 } = require('uuid');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  """Valid values of user role"""
  enum EUserRole {
    ADMIN
    USER
  }

  """Valid values of user status"""
  enum EUserStatus {
    ACTIVE
    INACTIVE
    SUSPENDED
    TERMINATED
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Host {
    _id: ID!
    name: String!
    domain: String!
    categories: [String!]!
    thumb: String!
    contracts: [Contract!]!
  }

  type Guest {
    _id: ID!
    name: String!
    domain: String!
    thumb: String!
    description: String!
    comission: String!
    categories: [String!]!
    shippingTime: String!
    approvalNeeded: Boolean!
    contracts: [Contract!]!
  }

  type Contract {
    _id: ID!
    status: String!
    guest: Guest!
    host: Host!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type LoginResult {
    token: String!
  }

  type User {
    _id: ID!
    email: String!
    password: String!
    guest: Guest
    host: Host
  }

  type Query {
    guests: [Guest!]!
    users: [User!]!
    me: User!
  }

  type Mutation {
   createContract(guestId: String!): Contract
   login(input: LoginInput!): LoginResult!
  }
`;

const hosts = [
  {
    _id: "host1",
    name: "PradaHost",
    domain: "pradaHost.com",
    thumb: "prada",
    categories: ["Shoes", "Clothes"],
  },
  {
    _id: "host2",
    name: "Calvin Klein",
    domain: "ck.com",
    thumb: "ck",
    categories: ["Shoes", "Clothes"],
  },
  {
    _id: "host3",
    name: "Gucci",
    domain: "gucci.com",
    thumb: "gucci",
    categories: ["Shoes", "Clothes"],
  },
  {
    _id: "host4",
    name: "Asics",
    domain: "Asics.com",
    thumb: "asics",
    categories: ["Shoes", "Clothes"],
  },
  {
    _id: "host5",
    name: "Nike",
    domain: "nike.com",
    thumb: "nike",
    categories: ["Shoes", "Clothes"],
  },
]

const guests = [
  {
    _id: "guest1",
    name: "Prada",
    domain: "prada.com",
    thumb: "prada",
    description:
      "Prada specializes in leather handbags, travel accessories, shoes, ready-to-wear, perfumes and other fashion accessories.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest2",
    name: "Calvin Klein",
    domain: "ck.com",
    thumb: "ck",
    description:
      "Calvin Klein Inc. is an American fashion house. It specializes in leather, lifestyle accessories, home furnishings, perfumery, jewellery, watches.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest3",
    name: "Gucci",
    domain: "gucci.com",
    thumb: "gucci",
    description:
      "Gucci  is an Italian luxury fashion house based in Florence, Italy. Its product lines include handbags, ready-to-wear, footwear, and accessories, makeup, fragrances, and home decoration.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest4",
    name: "Asics",
    domain: "Asics.com",
    thumb: "asics",
    description:
      "Asics is a Japanese multinational corporation which produces sports equipment designed for a wide range of sports.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: true,
  },
  {
    _id: "guest5",
    name: "Nike",
    domain: "nike.com",
    thumb: "nike",
    description:
      "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest6",
    name: "Adidas",
    domain: "Adidas.com",
    thumb: "adidas",
    description:
      "Adidas that designs and manufactures shoes, clothing and accessories.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest7",
    name: "Zara",
    domain: "Zara.com",
    thumb: "zara",
    description:
      "The company specializes in fast fashion, and products include clothing, accessories, shoes, swimwear, beauty, and perfumes.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: true,
  },
  {
    _id: "guest8",
    name: "Tommy",
    domain: "Tommy.com",
    thumb: "tommy",
    description:
      "Is an American premium clothing brand, manufacturing apparel, footwear, accessories, fragrances and home furnishings.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest9",
    name: "Louis Vuition",
    domain: "Louis.com",
    thumb: "louis",
    description:
      "Louis Vuitton Malletier (French commonly known as Louis Vuitton or by its initials LV, is a French fashion house and luxury goods company.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest10",
    name: "Prada",
    domain: "prada.com",
    thumb: "prada",
    description:
      "Prada specializes in leather handbags, travel accessories, shoes, ready-to-wear, perfumes and other fashion accessories.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest11",
    name: "Calvin Klein",
    domain: "ck.com",
    thumb: "ck",
    description:
      "Calvin Klein Inc. is an American fashion house. It specializes in leather, lifestyle accessories, home furnishings, perfumery, jewellery, watches.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: true,
  },
  {
    _id: "guest12",
    name: "Gucci",
    domain: "gucci.com",
    thumb: "gucci",
    description:
      "Gucci  is an Italian luxury fashion house based in Florence, Italy. Its product lines include handbags, ready-to-wear, footwear, and accessories, makeup, fragrances, and home decoration.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: true,
  },
  {
    _id: "guest13",
    name: "Asics",
    domain: "Asics.com",
    thumb: "asics",
    description:
      "Asics is a Japanese multinational corporation which produces sports equipment designed for a wide range of sports.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: true,
  },
  {
    _id: "guest14",
    name: "Nike",
    domain: "nike.com",
    thumb: "nike",
    description:
      "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: true,
  },
  {
    _id: "guest15",
    name: "Adidas",
    domain: "Adidas.com",
    thumb: "adidas",
    description:
      "Adidas that designs and manufactures shoes, clothing and accessories.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: true,
  },
];

const users = [
  {
    _id: 'user1',
    email: 'email1@gmail.com',
    password: 'password1',
    hostId: "host1",
    guestId: "guest1",
    role: 'ADMIN',
    status: 'ACTIVE',
  },
  {
    _id: 'user2',
    email: 'email2@gmail.com',
    password: 'password2',
    hostId: null,
    guestId: "guest2",
    role: 'USER',
    status: 'ACTIVE'
  }
]

const contracts = [
  {
    _id: 'contract1',
    status: 'pending',
    guestId: 'guest1',
    hostId: 'host3'
  },
  {
    _id: 'contract1',
    status: 'pending',
    guestId: 'guest1',
    hostId: 'host4'
  },
  {
    _id: 'contract1',
    status: 'pending',
    guestId: 'guest7',
    hostId: 'host1'
  },
  {
    _id: 'contract1',
    status: 'pending',
    guestId: 'guest8',
    hostId: 'host1'
  }
]


let connected_user = users[0]

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    users: () => users,
    guests: () => guests,
    me: () => connected_user
  },
  Mutation: {
    createContract: async (_, { guestId }) => {
      const hostId = connected_user.hostId
      if (contracts.find(contract => contract.guestId == guestId && contract.hostId == hostId )) {
        // Contract already exists for this guestId and hostId
        throw new Error("Contract already exists for guestId:${guestId} and hostId: ${hostId}")
      }
      if (!guests.find(guest => guest._id == guestId)) {
        throw new Error(`Guest ${guestId} not found`)
      }
      const contract = { _id: uuidV4(), status: "pending", guestId, hostId: hostId }
      contracts.push(contract)
      return contract
    },
    login: async (_, { input }) => {
      const user = users.find(user => user.email == input.email && user.password == input.password)
      if (!user) {
        throw new Error("Failed to find user with the required details")
      }
      connected_user = user
      const token = `${user.email}_authorization`
      return { token }
    }
  },
  Contract: {
    guest(parent) {
      return guests.find(guest => guest._id == parent.guestId)
    },
    host(parent) {
      return hosts.find(host => host._id == parent.hostId)
    }
  },
  Guest: {
    contracts(parent) {
      return contracts.filter(contract => contract.guestId == parent._id)
    }
  },
  Host: {
    contracts(parent) {
      return contracts.filter(contract => contract.hostId == parent._id)
    }
  },
  User: {
    guest(parent) {
      return guests.find(guest => guest._id == parent.guestId)
    },
    host(parent) {
      return hosts.find(host => host._id == parent.hostId)
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
