export default {
  index: {
    type: 'page',
    display: 'hidden'
  },
  docs: {
    title: 'Documentation',
    items: {
      index: 'Introduction',
      'file-conventions': {
        title: 'File Conventions',
        items: {
          'content-directory': 'Content Directory',
          'mdx-components-file': 'MDX Components File',
          'meta-file': 'Meta File',
          'page-file': 'Page File',
          'src-directory': 'Src Directory'
        }
      },
      guide: {
        title: 'Guide',
        items: {
          markdown: 'Markdown',
          image: 'Image',
          'custom-css': 'Custom CSS',
          'github-alert-syntax': 'GitHub Alert Syntax',
          i18n: 'Internationalization',
          link: 'Link',
          search: 'Search',
          ssg: 'Static Site Generation',
          'static-exports': 'Static Exports',
          'syntax-highlighting': 'Syntax Highlighting',
          turbopack: 'Turbopack'
        }
      },
      advanced: {
        title: 'Advanced',
        items: {
          'customize-the-cascade-layers': 'Customize the Cascade Layers',
          latex: 'LaTeX',
          mermaid: 'Mermaid',
          npm2yarn: 'npm2yarn',
          remote: 'Remote',
          table: 'Table',
          'tailwind-css': 'Tailwind CSS',
          twoslash: 'Twoslash',
          typescript: 'TypeScript'
        }
      },
      'built-ins': 'Built-in Components',
      _: {
        type: 'separator',
        title: 'Themes'
      },
      'docs-theme': {
        title: 'Docs Theme',
        items: {
          start: 'Getting Started',
          api: 'API',
          'built-ins': 'Built-ins'
        }
      },
      'blog-theme': {
        title: 'Blog Theme',
        items: {
          start: 'Getting Started',
          'get-posts-and-tags': 'Get Posts and Tags',
          posts: 'Posts',
          rss: 'RSS',
          tags: 'Tags'
        }
      },
      'custom-theme': 'Custom Theme'
    }
  },
  blog: {
    type: 'page'
  },
  about: {
    type: 'page'
  },
  store: {
    type: 'page'
  },
  showcase: {
    type: 'page'
  },
  sponsors: {
    type: 'page'
  }
}
