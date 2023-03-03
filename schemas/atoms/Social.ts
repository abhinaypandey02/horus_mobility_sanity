import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social', type: 'object', title: 'Social',fields:[
    defineField({
      type:'string',
      name:'platform',
      title:'Platform',
      options:{
        list:[
          'facebook',
          'instagram',
          'linkedin',
          'twitter'
        ]
      }
    }),defineField({
      type:'url',
      title:'Social Link',
      name:'url'
    })]
})