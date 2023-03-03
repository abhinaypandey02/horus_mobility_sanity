import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"notification",
    type:"object",
    title:"Notification",
    fields:[
        defineField({
            name:"text",
            type:"text",
            title:"Text"
        }),
        
    ]
})