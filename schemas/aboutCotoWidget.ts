import {Rule} from 'sanity'

export default {
  name: 'aboutCoto',
  title: 'About coto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'About coto title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'About coto description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection: any) {
      const {title} = selection
      return {
        title: title,
        subtitle: `About organisation`,
      }
    },
  },
}
