import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"how_does_it_work",
    type:"object",
    title:"How Does It Work",
    fields:[
        defineField({
            name:"heading",
            type:"string",
            title:"Heading"
        }),
        defineField({
            name:"sub_heading",
            type:"text",
            title:"Sub Heading"
        }),
        defineField({
            type:"array",
            name:"cards",
            title:"Cards",
            of:[
                defineArrayMember({
                    type:"object",
                    title:"Card",
                    fields:[
                        defineField({
                            type:"photo",
                            name:"photo",
                            title:"Image"
                        }),
                        defineField({
                            type:"string",
                            name:"heading",
                            title:"Heading"
                        }),
                        defineField({
                            type:"string",
                            name:"sub_heading",
                            title:"Sub Heading"
                        }),
                        defineField({
                            type:"text",
                            name:"body",
                            title:"Body"
                        }),
                        defineField({
                            type:"button",
                            name:"button",
                        })
                    ]
                })
            ]
        })
    ]
})