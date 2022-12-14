export default {
  name: 'interaction',
  title: 'Interaction',
  type: 'object',
  fields: [
    {
      name: 'sentiment',
      title: 'Sentiment',
      type: 'string',
      options: {
        list: [
          {title: 'Like', value: 'like'},
          {title: 'Dislike', value: 'dislike'},
        ],
      },
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'commenter',
      type: 'commenter',
      title: 'Commenter',
    },
  ],
  preview: {
    select: {
      title: 'sentiment',
      subtitle: 'comment',
    },
  },
}
