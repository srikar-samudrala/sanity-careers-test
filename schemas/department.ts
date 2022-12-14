import {Rule} from 'sanity'

export default {
  name: 'department',
  type: 'document',
  title: 'Departments',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Department name',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
