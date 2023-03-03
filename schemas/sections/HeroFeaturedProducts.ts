import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"hero_featured_products",
    type:"object",
    title:"Hero Featured Products",
    fields:[
        defineField({
            name:"heading",
            type:"string",
            title:"Heading"
        }),
        defineField({
            type:"array",
            name:"products",
            title:"Products",
            of:[
                defineArrayMember({
                    type:"reference",
                    to:{
                        type:"product"
                    }
                })
            ]
        })
    ]
})