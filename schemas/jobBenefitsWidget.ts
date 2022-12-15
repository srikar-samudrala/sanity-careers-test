import {Rule} from 'sanity'

export default {
  name: 'jobBenefits',
  title: 'Job benefits',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Describe the benefits',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Benefits',
        subtitle: `Job benefits`,
      }
    },
  },
}
