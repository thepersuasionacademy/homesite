import nextra from 'nextra'

// @ts-expect-error -- fixme
function isExportNode(node, varName: string) {
  if (node.type !== 'mdxjsEsm') return false
  const [n] = node.data.estree.body

  if (n.type !== 'ExportNamedDeclaration') return false

  const name = n.declaration?.declarations?.[0].id.name
  if (!name) return false

  return name === varName
}

const DEFAULT_PROPERTY_PROPS = {
  type: 'Property',
  kind: 'init',
  method: false,
  shorthand: false,
  computed: false
}

// @ts-expect-error -- fixme
export function createAstObject(obj) {
  return {
    type: 'ObjectExpression',
    properties: Object.entries(obj).map(([key, value]) => ({
      ...DEFAULT_PROPERTY_PROPS,
      key: { type: 'Identifier', name: key },
      value:
        value && typeof value === 'object' ? value : { type: 'Literal', value }
    }))
  }
}

type NextraParams = Parameters<typeof nextra>[0]
type MdxOptions = NonNullable<NextraParams['mdxOptions']>
type RehypePlugin = NonNullable<MdxOptions['rehypePlugins']>[0]

// eslint-disable-next-line unicorn/consistent-function-scoping
const rehypeOpenGraphImage: RehypePlugin = () => (ast: any) => {
  // @ts-expect-error -- fixme
  const frontMatterNode = ast.children.find(node =>
    isExportNode(node, 'metadata')
  )
  if (!frontMatterNode) {
    return
  }
  const { properties } =
    frontMatterNode.data.estree.body[0].declaration.declarations[0].init
  // @ts-expect-error -- fixme
  const title = properties.find(o => o.key.value === 'title')?.value.value
  if (!title) {
    return
  }
  const [prop] = createAstObject({
    openGraph: createAstObject({
      images: `https://nextra.site/og?title=${title}`
    })
  }).properties
  properties.push(prop)
}

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  mdxOptions: {
    rehypePlugins: [
      // Provide only on `build` since turbopack on `dev` supports only serializable values
      process.env.NODE_ENV === 'production' && rehypeOpenGraphImage
    ].filter(v => !!v)
  },
  whiteListTagsStyling: ['figure', 'figcaption']
})

const nextConfig = withNextra({
  reactStrictMode: true,
  eslint: {
    // ESLint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['thepersuasionacademycdn.b-cdn.net'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: process.env.NODE_ENV === 'production' ? 31536000 : 0, // No cache in dev
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Performance optimizations (disabled in development)
  compress: process.env.NODE_ENV === 'production',
  poweredByHeader: false,
  generateEtags: process.env.NODE_ENV === 'production',
  // Bundle optimization
  // Note: Removed framer-motion modular imports due to path resolution issues
  // Experimental features for performance (production only)
  experimental: {
    optimizePackageImports: process.env.NODE_ENV === 'production' ? ['@components/icons'] : undefined,
    optimizeCss: process.env.NODE_ENV === 'production',
    webVitalsAttribution: process.env.NODE_ENV === 'production' ? ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'] : undefined,
  },
  // Modern JavaScript targeting (swcMinify is now default in Next.js 15)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Headers for caching and security
  async headers() {
    const isDev = process.env.NODE_ENV !== 'production'
    
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      // Only apply aggressive caching in production
      ...(!isDev ? [
        {
          source: '/content/articles/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/_next/static/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ] : [
        // Development: No caching
        {
          source: '/content/articles/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-cache, no-store, must-revalidate',
            },
          ],
        },
        {
          source: '/_next/static/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-cache, no-store, must-revalidate',
            },
          ],
        },
      ])
    ]
  },
  redirects: async () => [
    {
      source: '/docs',
      destination: '/',
      permanent: true
    },
    {
      source: '/docs/:path*',
      destination: '/',
      permanent: true
    },
    {
      source: '/docs/guide/:slug(typescript|latex|tailwind-css|mermaid)',
      destination: '/docs/advanced/:slug',
      permanent: true
    },
    {
      source: '/docs/docs-theme/built-ins/:slug(callout|steps|tabs|bleed)',
      destination: '/docs/built-ins/:slug',
      permanent: true
    },
    {
      source: '/docs/docs-theme/api/use-config',
      destination: '/docs/docs-theme/api',
      permanent: true
    },
    {
      source: '/docs/guide/advanced/:slug',
      destination: '/docs/advanced/:slug',
      permanent: true
    },
    {
      source: '/docs/docs-theme/theme-configuration',
      destination: '/docs/docs-theme/built-ins/layout',
      permanent: true
    },
    {
      source: '/docs/docs-theme/page-configuration',
      destination: '/docs/file-conventions/meta-file',
      permanent: true
    },
    {
      source: '/docs/guide/organize-files',
      destination: '/docs/file-conventions',
      permanent: true
    },
    {
      source: '/docs/advanced/playground',
      destination: '/docs/built-ins/playground',
      permanent: true
    }
  ],
  webpack(config) {
    // rule.exclude doesn't work starting from Next.js 15
    const { test: _test, ...imageLoaderOptions } = config.module.rules.find(
      // @ts-expect-error -- fixme
      rule => rule.test?.test?.('.svg')
    )
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /svgr/,
          use: ['@svgr/webpack']
        },
        imageLoaderOptions
      ]
    })
    return config
  },
  turbopack: {
    rules: {
      './components/icons/*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js'
      }
    }
  }
})

export default nextConfig
