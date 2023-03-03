import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"clients",
    title:"Clients",
    type:"object",
    fields:[
        defineField({
            type:'array',
            title:"Clients",
            name:"clients",
            of:[
                defineArrayMember({
                    type:"object",
                    fields:[
                        defineField({
                            title:"Logo",
                            type:"photo",
                            name:"photo"
                        })
                    ]
                }),
            ]
        })
    ]
})