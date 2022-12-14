import {Rule} from 'sanity'

export default {
  name: 'listicleItem',
  title: 'Listicle Item',
  type: 'object',
  collapsible: true,
  fields: [
    {
      name: 'listicleItemHeader',
      title: 'Listicle item title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'listicleItemDescription',
      title: 'Listicle item description',
      type: 'string',
    },
  ],
}
