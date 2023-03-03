import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"carousel",
    type:"object",
    title:"Carousel",
    fields:[
        defineField({
            name:"gallery",
            type:"gallery"
        }),
        defineField({
            name:"type",
            type:"string",
            title:"Carousel Type",
            options:{
                list:[{
                    value:"single",
                    title:"Single Row"
                },
                {
                    value:"double",
                    title:"Double Row"
                }]
            }
        }),
        
    ]
})