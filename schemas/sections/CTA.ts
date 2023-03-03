import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"cta",
    type:"object",
    title:"CTA",
    fields:[
        defineField({
            name:"heading",
            type:"string",
            title:"Heading"
        }),
        defineField({
            name:"button",
            type:"button"
        }),
        
    ]
})