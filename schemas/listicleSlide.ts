import {Rule} from 'sanity'

export default {
  name: 'listicleSlide',
  title: 'Listicle slide',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'listicleItems',
      title: 'Listicle Items',
      type: 'array',
      of: [
        {
          type: 'listicleItem',
        },
      ],
    },
  ],
}
