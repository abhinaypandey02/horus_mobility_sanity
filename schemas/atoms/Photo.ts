import {defineType, defineField} from 'sanity'
export default defineType({
    name: 'photo', type: 'image', title: 'Photo', options: {
      hotspot: true
    }, fields: [defineField({
      name: 'alt', type: 'string', title: 'Alternative text'
    })]
  })