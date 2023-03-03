import { defineField, defineType } from "sanity";

export default defineType({
    name:"hero",
    title:"Hero",
    type:"object",
    fields:[
        defineField({
            name:"heading",
            title:"Heading",
            type:"string"
        }),
        defineField({
            name:"sub_heading",
            title:"Sub Heading",
            type:"string"
        }),
        defineField({
            name:"gallery",
            title:"Gallery",
            type:"gallery"
        })
    ]
})