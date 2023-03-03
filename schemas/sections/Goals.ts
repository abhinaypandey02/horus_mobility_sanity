import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"goals",
    title:"Goals",
    type:"object",
    fields:[
        defineField({
            name:"heading",
            title:"Heading",
            type:"string"
        }),
        defineField({
            name:"micro_heading",
            title:"Micro heading",
            type:"string",
            initialValue:"CAPABILITIES"
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
                            title:"Icon"
                        }),
                        defineField({
                            name:"heading",
                            title:"Heading",
                            type:"string"
                        }),
                        defineField({
                            name:"micro_heading",
                            title:"Micro heading",
                            type:"string",
                            initialValue:"Growth"
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