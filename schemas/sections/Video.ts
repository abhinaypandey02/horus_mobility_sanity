import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"video",
    title:"Video",
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
            initialValue:"Donec"
        }),
        defineField({
            type:'object',
            title:"Video",
            name:"video",
            fields:[
                defineField({
                    name:"video_url",
                    type:"url",
                    title:"Video URL"
                }),
                defineField({
                    name:"heading",
                    title:"Heading",
                    type:"string"
                }),
                defineField({
                    name:"description",
                    title:"Description",
                    type:"text",
                }),
            ]
        })
    ]
})