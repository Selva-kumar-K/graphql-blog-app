import {ApolloServer, gql} from "apollo-server"
import { Prisma, PrismaClient } from "@prisma/client";
import { typeDefs } from "./schema"
import { Query } from "./resolvers/Query"
import { Mutation } from "./resolvers/Mutation";

const prisma = new PrismaClient();
export interface Context {
    prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never
    >
}

const server = new ApolloServer({
    typeDefs,
    resolvers : {
        Query,
        Mutation
    },
    context: {prisma}
})

server.listen().then(({url})=> {
    console.log(`Server is listening on the port no : ${url}`)
})
