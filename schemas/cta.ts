import {Rule} from 'sanity'

export default {
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'CTA text',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'url',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
