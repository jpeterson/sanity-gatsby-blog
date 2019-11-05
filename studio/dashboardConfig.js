export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dc1a14b4f215290d7762eb6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4k66cti9',
                  apiId: '470aac30-fc6a-478a-8a4d-a89c4f985630'
                },
                {
                  buildHookId: '5dc1a14e72e197a13f9bbfeb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-a45fs34r',
                  apiId: '4d013218-1fd6-4bc3-aa98-642502d71762'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jpeterson/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-a45fs34r.netlify.com', category: 'apps'}
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
