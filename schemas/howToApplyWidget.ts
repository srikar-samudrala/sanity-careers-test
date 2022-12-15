import {Rule} from 'sanity'

export default {
  name: 'howToApply',
  title: 'How to apply',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Describe the process of how to apply',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'How to apply',
        subtitle: `How to apply`,
      }
    },
  },
}
