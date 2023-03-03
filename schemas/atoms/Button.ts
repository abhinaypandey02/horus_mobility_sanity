import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"button", title:"Button", type:"object",fields:[
        defineField({
            type:"url",
            name:"link",
            title:"Link"
        }),
        defineField({
            type:"string",
            name:"title",
            title:"Title"
        }),
        
    ]
})