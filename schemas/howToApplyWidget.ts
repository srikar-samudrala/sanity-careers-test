import {Rule} from 'sanity'

export default {
  name: 'howToApply',
  title: 'How to apply',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'How to apply section title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Describe the process of how to apply',
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
        subtitle: `How to apply`,
      }
    },
  },
}
