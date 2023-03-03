import { defineField, defineType } from "sanity";

export default defineType({
    name:"gallery", title:"Gallery", type:"object", fields:[
        defineField({
            name:"images",
            type:"array",
            title:"Images",
            of:[
                defineField({
                    name:"photo",
                    type:"photo",
                    title:"Photo"
                })
            ]
        })
    ]
})