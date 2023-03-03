import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name:"gallery", title:"Gallery", type:"array",of:[
        defineArrayMember({
            type:"photo"
        })
    ]
})