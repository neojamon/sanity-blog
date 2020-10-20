export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f8e9d65664a61f581d4e3df',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-studio-g85e8z8c',
                  apiId: '6ce24df0-2e96-4545-b6f9-b8e5199606e1'
                },
                {
                  buildHookId: '5f8e9d659807aadb1acc4c19',
                  title: 'Blog Website',
                  name: 'sanity-blog-web-dui7g4pz',
                  apiId: '378e0825-45d5-491b-b3ba-9c943cacd2ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/neojamon/sanity-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-blog-web-dui7g4pz.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
