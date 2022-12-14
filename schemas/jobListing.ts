export default {
  name: 'jobListing',
  title: 'Job listing page',
  type: 'document',
  fields: [
    {
      name: 'jobListingHero',
      title: 'Job listing page hero section',
      type: 'hero',
    },
    {
      name: 'jobList',
      title: 'List of jobs to be displayed',
      type: 'array',
      of: [{type: 'jobDetailReference'}],
    },
  ],
}
