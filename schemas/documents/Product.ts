import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"product",
    type:"document",
    i18n:true,
    title:"Product",
    fields:[
        defineField({
            name:"gallery",
            type:"gallery"
        }),
        defineField({
            name:"id",
            type:"slug",
            title:"ID",
            options:{
                source:"name"
            }
        }),
        defineField({
            title:"Brand Name",
            name:"brand_name",
            type:"string",
            options:{
                list:['Option 1','Option 2']
            }
        }),
        defineField({
            title:"Transmission Type",
            name:"transmission_type",
            type:"string",
            options:{
                list:['Option 1','Option 2']
            }
        }),
        defineField({
            title:"Product Type",
            name:"product_type",
            type:"string",
            options:{
                list:['Option 1','Option 2']
            }
        }),
        defineField({
            title:"Price per day",
            name:"price_per_day",
            type:"number"
        }),
        defineField({
            title:"Host",
            name:"host",
            type:"reference",
            to:{type:'host'}
        }),
        defineField({
            title:"Name",
            name:"name",
            type:"string"
        }),
        defineField({
            title:"Product description",
            name:"product_description",
            type:"text"
        }),
        defineField({
            title:"Features",
            name:"features",
            type:"array",
            of:[
                defineArrayMember({
                    type:'object',
                    title:"Feature",
                    fields:[
                        defineField({
                            type:'photo',
                            name:"photo",
                            title:"Icon"
                        }),defineField({
                            type:'string',
                            name:"text",
                            title:"Text"
                        }),
                    ]
                })
            ]
        }),
    ]
})