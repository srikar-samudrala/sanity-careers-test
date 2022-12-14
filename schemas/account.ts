import {Rule} from 'sanity'

export default {
  name: 'account',
  title: 'Account',
  type: 'document',
  fields: [
    {
      name: 'username',
      type: 'string',
      title: 'Username',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'username',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'id',
      type: 'number',
      title: 'ID',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{type: 'videoReference'}],
    },
  ],
}
