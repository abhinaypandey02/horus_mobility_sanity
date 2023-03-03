import { defineField, defineType } from "sanity";

export default defineType({
    name:"host",
    type:"document",
    title:"Host",
    i18n:true,
    fields:[
        defineField({
            title:"Company Name",
            name:"company_name",
            type:"string",
        }),
        defineField({
            name:"contact_info",
            title:"Contact Info",
            type:"object",
            fields:[
                defineField({
                    name:'tel',
                    title:"Telephone",
                    type:'string'
                }),
                defineField({
                    name:'email',
                    type:'email',
                    title:"Email"
                }),
                defineField({
                    name:'website',
                    title:"Website",
                    type:'url'
                })
            ]
        }),
        defineField({
            title:"Assets number",
            name:"assets_number",
            type:"string",
        }),
    ]
})