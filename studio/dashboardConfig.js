export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec3a71c9596792e9fe6f870',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-e7cg9aab',
                  apiId: '7f18a55d-f72c-4090-8a24-17302aa25541'
                },
                {
                  buildHookId: '5ec3a71c78ebf45047da7a45',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-suibn57v',
                  apiId: '874857bb-7c4a-4f98-95ff-92349c05237c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tommykri/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-suibn57v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
