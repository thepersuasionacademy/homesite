import Link from 'next/link'

interface BreadcrumbItem {
  href: string
  label: string
  icon?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: 'var(--muted-foreground)' }}>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
              /
            </span>
          )}
          {index === items.length - 1 ? (
            <span className="flex items-center gap-1.5" style={{ color: 'var(--foreground)' }}>
              {item.label}
            </span>
          ) : (
            <Link 
              href={item.href} 
              className="flex items-center gap-1.5 hover:underline transition-colors"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
