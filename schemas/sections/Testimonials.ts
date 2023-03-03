import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"testimonials",
    type:"object",
    title:"Testimonials",
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
            name:"testimonials",
            title:"Testimonials",
            of:[
                defineArrayMember({
                    type:"object",
                    title:"Testimonial",
                    fields:[
                        defineField({
                            type:"photo",
                            name:"photo",
                            title:"Image"
                        }),
                        defineField({
                            type:"string",
                            name:"name",
                            title:"Name"
                        }),
                        defineField({
                            type:"date",
                            name:"date",
                            title:"Date"
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
                        })
                    ]
                })
            ]
        })
    ]
})