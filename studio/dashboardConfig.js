export default {
  widgets: [
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
                  buildHookId: '5f2f52c1652dffe1a4f049da',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hwiim3c8',
                  apiId: '676c2268-b45c-4207-87bb-ed984994a42d'
                },
                {
                  buildHookId: '5f2f52c1bf54e92116719607',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-r8h72ab4',
                  apiId: '19ce72e6-fd4a-4200-b875-3d5e9844a39c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Turkyden/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-r8h72ab4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
