import {Rule} from 'sanity'

export default {
  name: 'jobDetail',
  title: 'Jobs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job title',
      type: 'string',
    },
    {
      name: 'department',
      title: 'Department',
      type: 'departmentReference',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'isRemote',
      title: 'Is this remote job?',
      type: 'boolean',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'compensation',
      title: 'Compensation',
      type: 'string',
    },
    {
      name: 'closeDate',
      title: 'Last date to apply',
      type: 'date',
    },
    {
      name: 'jobAdderUrl',
      title: 'JobAdder URL',
      type: 'url',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'widgets',
      title: 'Specify widgets in order',
      type: 'array',
      of: [
        {type: 'aboutCotoReference'},
        {type: 'jobBenefitsReference'},
        {type: 'howToApplyReference'},
        {
          type: 'applicationProcessReference',
        },
        {type: 'roleDescriptionReference'},
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  initialValue: {
    isRemote: true,
    widgets: [
      {
        _type: 'aboutCotoReference',
        _ref: 'aboutCoto',
      },
      {
        _type: 'jobBenefitsReference',
        _ref: 'jobBenefits',
      },
      {
        _type: 'howToApplyReference',
        _ref: 'howToApply',
      },
    ],
  },
  preview: {
    select: {
      title: 'title',
      subtitle: 'department.title',
    },
  },
}
