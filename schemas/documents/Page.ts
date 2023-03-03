import { defineField, defineType } from "sanity";

export default defineType({
    name:"page",
    type:"document",
    title:"Page",
    fields:[defineField({
        title:"Sections",
        type:"array",
        name:"sections",
        of:[
            defineField({
                title:"Hero",
                type:"hero",
                name:"hero"
            })
        ]
    })]
})