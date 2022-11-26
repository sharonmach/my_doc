export default {
    themeConfig: {
      siteTitle: 'My Custom Title',
      logo: '🗺️',
      nav: [
        { text: 'Guide', link: '/guide' },
        { text: 'Configs', link: '/configs' },
        { text: 'Github', link: 'https://github.com/sharonmach' },
        
      ],
      sidebar: [
        {
          text: 'Section Title A',
          collapsible:true,
          items: [
            { text: 'contact', link: '/contact.md' },
            { text: 'Home', link: '/index.md' },
            
          ]
        },
        {
          text: 'Section Title B',
          collapsible:true,
          items: [
            { text: 'Item C', link: '/item-c' },
            { text: 'Item D', link: '/item-d' },
            
          ]
        }
      ],
      footer: {
        message: 'Released under the <a href="https://github.com/sharonmach">music License</a>.',
        copyright: 'Copyright © 2022-present <a href="https://github.com/sharonmach">Sharon😇</a>'
      }
    }
    }
  