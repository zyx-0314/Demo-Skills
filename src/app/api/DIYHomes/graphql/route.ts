import { NextRequest } from "next/server";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import prisma from "@/lib/prisma";

// Define GraphQL Schema
const typeDefs = `
  type User {
    id: String
    email: String
    name: String
  }

  type Post {
    id: String
    title: String
    content: String
    category: String
    user: User
  }

  type Query {
    posts(category: String): [Post]
    users: [User]
  }
`;

// Define Resolvers
const resolvers = {
  Query: {
    posts: async (_: unknown, { category }: { category?: string }) => {
      return prisma.post.findMany({
        where: category ? { category } : {},
        include: { user: true },
      });
    },
    users: async () => prisma.user.findMany(),
  },
};

// Create Apollo Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create Next.js API Handler
const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req: NextRequest) => ({ req }),
});

// Export API Route
export { handler as GET, handler as POST };
