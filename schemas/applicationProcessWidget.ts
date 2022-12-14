import {Rule} from 'sanity'

export default {
  name: 'applicationProcess',
  title: 'Application Processes',
  type: 'document',
  fields: [
    {
      name: 'department',
      title: 'For which Dept.',
      type: 'departmentReference',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Application process title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Describe the application process here',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
  preview: {
    select: {
      title: 'department.title',
      subtitle: 'title',
    },
  },
}
