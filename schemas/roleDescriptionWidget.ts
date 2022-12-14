import {Rule, Selection} from 'sanity'

export default {
  name: 'roleDescription',
  title: 'Role Descriptions',
  type: 'document',
  fields: [
    {
      name: 'roleTitle',
      title: 'Role title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Role description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'roleTitle',
    },
    prepare(selection: any) {
      const {title} = selection
      return {
        title: title,
        subtitle: `Role Description`,
      }
    },
  },
}
