import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"page",
    type:"document",
    title:"Page",
    i18n:true,

    fields:[
        defineField({
            title:"Title",
            name:"title",
            type:"string"
        }),
        defineField({
        title:"Sections",
        type:"array",
        name:"sections",
        of:[
            defineArrayMember({
                type:"hero",
            })
        ]
    })]
})