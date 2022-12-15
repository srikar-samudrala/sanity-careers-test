import {Rule} from 'sanity'

export default {
  name: 'aboutCoto',
  title: 'About coto',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'About coto description',
      type: 'array',
      of: [{type: 'block'}],
      Rule: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'About coto',
        subtitle: `About organisation`,
      }
    },
  },
}
