import {Rule} from 'sanity'

export default {
  name: 'jobBenefits',
  title: 'Job benefits',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job benefits title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Describe the benefits',
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
        subtitle: `Job benefits`,
      }
    },
  },
}
