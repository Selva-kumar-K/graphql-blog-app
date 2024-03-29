import {gql} from "apollo-server"

export const typeDefs = gql`
    type Query{
        hello : String!
    }
    
    type Mutation{
        postCreate(title : String!, content: String!) : PostPayLoad!
    }

    type UserError{
        message : String!
    }
    
    type PostPayLoad{
        userErrors : [UserError!]!
        post : Post
    }
    
    type Post{
        id : ID!
        title : String!
        content : String!
        published : Boolean!
        createdAt : String!
        user : User!
    }
    
    type User{
        id : ID!
        name : String!
        email : String!
        profile : Profile!
        posts : [Post!]!
    }
    
    type Profile{
        id : ID!
        bio : String!
        user : User!
    }`
