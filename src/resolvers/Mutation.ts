import { Post } from "@prisma/client"
import { Context } from ".."

interface PostArgs {
    title: string
    content: string
}

interface PostPayLoadType{
    userErrors : {message : String} []
    post : Post | null
}

export const Mutation = {
    postCreate: async(_: any, {title, content} : PostArgs, {prisma} : Context) : Promise<PostPayLoadType> => {
        if (!title || !content) {
            return {userErrors: [{message: "You must provide title and content"}], post : null}
        }
        const post = await prisma.post.create({
            data : {title,content, authorId: 1}
        })

        return {userErrors: [], post}
    }
}