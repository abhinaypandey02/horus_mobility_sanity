import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"header",
    type:"object",
    title:"Header",
    fields:[
        defineField({
            name:"sections",
            type:"array",
            title:"Sections",
            of:[defineArrayMember({
                type:"object",
                fields:[
                    defineField({
                        type:'string',
                        name:'heading',
                        title:'Heading'
                    }),
                    defineField({
                        type:'array',
                        name:'sub_links',
                        title:"Sub Links",
                        of:[
                            defineArrayMember({type:'button'})
                        ]
                    })
                ]
            })]
        }),
        defineField({
            name:"button",
            type:"button",
            title:"CTA"
        }),
        
    ]
})