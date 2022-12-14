import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {HomeIcon, ThListIcon, UserIcon, InfoOutlineIcon, JoystickIcon, CogIcon} from '@sanity/icons'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'e7vk8w4f',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Careers')
          .items([
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages list')
                  .items([
                    S.listItem()
                      .title('Careers landing page')
                      .id('careerLanding')
                      .child(S.document().schemaType('careerLanding').documentId('careerLanding'))
                      .icon(HomeIcon),
                    S.listItem()
                      .title('Job listing page')
                      .id('jobListing')
                      .child(S.document().schemaType('jobListing').documentId('jobListing'))
                      .icon(ThListIcon),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('Job detail widgets')
              .child(
                S.list()
                  .title('Widgets list')
                  .items([
                    S.listItem()
                      .title('About coto')
                      .id('aboutCoto')
                      .child(S.document().schemaType('aboutCoto').documentId('aboutCoto'))
                      .icon(InfoOutlineIcon),
                    S.listItem()
                      .title('Job benefits')
                      .id('jobBenefits')
                      .child(S.document().schemaType('jobBenefits').documentId('jobBenefits'))
                      .icon(JoystickIcon),
                    S.listItem()
                      .title('How to apply')
                      .id('howToApply')
                      .child(S.document().schemaType('howToApply').documentId('howToApply'))
                      .icon(UserIcon),
                    S.documentTypeListItem('applicationProcess'),
                    S.documentTypeListItem('roleDescription').icon(CogIcon),
                  ])
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'careerLanding',
                  'jobListing',
                  'aboutCoto',
                  'jobBenefits',
                  'applicationProcess',
                  'howToApply',
                  'roleDescription',
                ].includes(listItem.getId()!)
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
// sksM1C5usUB5tZBc3uCOVo77kvvRhX1jxSdOjRq3QeZk3zbVrXlFOSIsjjafYnO3Y0kCDDknI2ZfxtOHiGX4Ouxc5655Ouc0ig58sZK6Oiqd676nnv4JPLG5L98pPyXfY7H721cCtzkDu8NvohXQ6ezymLyPgFyqTCNLnF6E5CcQnhq0YXgy
