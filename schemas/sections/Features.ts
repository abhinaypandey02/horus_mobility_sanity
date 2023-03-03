import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"features",
    title:"Features",
    type:"object",
    fields:[
        defineField({
            name:"heading",
            title:"Heading",
            type:"string"
        }),
        defineField({
            name:"body",
            title:"Body",
            type:"text"
        }),
        defineField({
            name:"cards",
            type:"array",
            title:"Cards",
            of:[
                defineArrayMember({
                    type:'object',
                    title:"Card",
                    fields:[
                        defineField({
                            name:"photo",
                            type:"photo",
                            title:"Image"
                        }),
                        defineField({
                            name:"heading",
                            title:"Heading",
                            type:"string"
                        }),
                        defineField({
                            name:"sub_heading",
                            title:"Sub Heading",
                            type:"text"
                        }),
                    ]
                })
            ]
        }),
    ]
})