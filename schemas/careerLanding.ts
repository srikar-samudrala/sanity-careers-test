export default {
  name: 'careerLanding',
  title: 'Careers landing page',
  type: 'document',
  fields: [
    {
      name: 'careerLandingHero',
      title: 'Landing page hero section',
      type: 'hero',
    },
    {
      name: 'careerLandingVideo',
      title: 'Landing page video',
      type: 'videoReference',
    },
    {
      name: 'careerLandingCoreValues',
      title: 'Landing page core values',
      type: 'listicleSlide',
    },
    {
      name: 'careerLandingBenefits',
      title: 'Landing page Benefits',
      type: 'listicleSlide',
    },
  ],
}
