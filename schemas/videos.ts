import {DocumentVideoIcon} from '@sanity/icons'
import {Rule} from 'sanity'

export default {
  name: 'videos',
  type: 'document',
  title: 'Videos',
  icon: DocumentVideoIcon,
  fields: [
    {
      name: 'videoUrl',
      type: 'url',
      title: 'Video URL',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'videoName',
      type: 'string',
      title: 'Video name',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}

// export default {
//   name: 'video',
//   type: 'document',
//   title: 'Video',
//   fields: [
//     {
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     },
//     {
//       name: 'id',
//       title: 'ID',
//       type: 'number',
//       validation: (Rule: Rule) => Rule.required().warning('Must be filled!'),
//     },
//     {
//       name: 'thumbnail',
//       title: 'Thumbnail',
//       type: 'image',
//     },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 100,
//       },
//     },
//     {
//       name: 'author',
//       type: 'author',
//       title: 'Author',
//       validation: (Rule: Rule) => Rule.required(),
//     },
//     {
//       name: 'interactions',
//       type: 'array',
//       title: 'Interactions',
//       of: [
//         {
//           type: 'interaction',
//         },
//       ],
//     },
//   ],
// }
