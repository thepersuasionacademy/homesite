# Reusable Article Components Guide

This guide covers the three main reusable components extracted from the BANT vs DreamState Selling article: **ComparisonTable**, **Enhanced CTA Button**, and **Enhanced FAQ Accordion**.

## 📊 ComparisonTable Component

### Basic Usage

The `ComparisonTable` component creates comparison tables with optional blue highlighting for specific columns (like the DreamState column).

```tsx
<ComparisonTable
  columns={[
    {
      header: "Traditional BANT",
      rows: [
        "**Focus:** Information gathering",
        "**Approach:** Seller-centric qualification",
        "**Goal:** Verify prospect readiness",
        "**Timeline:** Present circumstances"
      ]
    },
    {
      header: "DreamState Selling",
      rows: [
        "**Focus:** Experience creation",
        "**Approach:** Buyer-centric psychology", 
        "**Goal:** Generate emotional investment",
        "**Timeline:** Past success to Future vision"
      ],
      isHighlighted: true  // This creates the blue accent column
    }
  ]}
  caption="Comparison of sales methodologies"
/>
```

### Pre-configured BANT vs DreamState Table

For quick BANT vs DreamState comparisons, use the pre-configured component:

```tsx
<BANTvsDreamStateTable
  bantColumn={{
    header: "Traditional BANT", // Optional, defaults to "Traditional BANT"
    rows: [
      "**Focus:** Information gathering",
      "**Approach:** Seller-centric qualification",
      "**Goal:** Verify prospect readiness"
    ]
  }}
  dreamStateColumn={{
    header: "DreamState Selling", // Optional, defaults to "DreamState Selling"
    rows: [
      "**Focus:** Experience creation",
      "**Approach:** Buyer-centric psychology",
      "**Goal:** Generate emotional investment"
    ]
  }}
  caption="Methodology comparison"
/>
```

### Features

- ✅ **Blue accent highlighting** for specified columns
- ✅ **Markdown support** in cells (bold text with `**text**`)
- ✅ **Responsive design** for mobile devices
- ✅ **Dark mode support** with proper color schemes
- ✅ **Hover effects** for better interactivity
- ✅ **Automatic row balancing** (pads shorter columns)

## 🔗 Enhanced CTA Button Components

### Standard Enhanced CTA Button

The `EnhancedCTAButton` provides additional features over the original CTA button:

```tsx
<EnhancedCTAButton 
  title="Master Advanced Vision Creation"
  description="Get detailed conversation frameworks and advanced vision creation techniques with our comprehensive DreamState Selling methodology guide, including proven templates and real-world examples."
  url="https://thepersuasionacademy.com/store/dreamstate-book"
  variant="blue"
  target="_blank"
  onClick={() => console.log('Custom click handler')} // Optional
  icon={<CustomIcon />} // Optional custom icon
  className="my-custom-class" // Optional additional styling
/>
```

### Simple CTA Button

For simpler use cases with custom content:

```tsx
<SimpleCTAButton
  url="https://example.com/product"
  variant="light-blue"
  target="_blank"
>
  <div>
    <h4>Quick Action</h4>
    <p>Simple description here</p>
  </div>
</SimpleCTAButton>
```

### CTA Button Variants

All variants maintain the same blue accent styling:

- `variant="blue"` - Standard blue gradient
- `variant="light-blue"` - Same blue styling (legacy support)
- `variant="yellow"` - Same blue styling (legacy support)

### Features

- ✅ **Consistent blue accent** across all variants
- ✅ **Custom click handlers** for advanced interactions
- ✅ **Custom icons** support
- ✅ **Target control** (_blank or _self)
- ✅ **Hover animations** with arrow movement
- ✅ **Accessibility support** with proper ARIA labels
- ✅ **Responsive design** for mobile devices

## ❓ Enhanced FAQ Accordion Components

### Standard Enhanced FAQ Accordion

The `EnhancedFAQAccordion` provides more features than the original:

```tsx
<EnhancedFAQAccordion 
  title="Frequently Asked Questions"
  description="Common questions about our methodology"
  items={[
    {
      question: "What is the main difference between BANT and DreamState Selling?",
      answer: "<strong>BANT is a qualification framework</strong> designed to assess whether prospects are worth pursuing, while <strong>DreamState Selling is a conversion methodology</strong> designed to create emotional investment in outcomes. BANT focuses on gathering information; DreamState focuses on creating experiences.",
      id: "bant-vs-dreamstate" // Optional unique ID
    },
    {
      question: "Can I use both methodologies together?",
      answer: "Yes, but sequentially and contextually. Use <strong>BANT for pre-call research</strong> and initial qualification of unknown prospects, then <strong>DreamState for actual conversion conversations</strong> with interested prospects."
    }
  ]}
  allowMultipleOpen={true} // Allow multiple items to be open at once
  defaultOpenItems={[0]} // Open first item by default
  className="my-faq-section"
/>
```

### Quick FAQ Component

For simple FAQ sections:

```tsx
<QuickFAQ
  items={[
    {
      q: "How long does implementation take?",
      a: "Implementation typically takes 2-4 weeks for basic setup and 2-3 months for full team adoption."
    },
    {
      q: "Is training included?",
      a: "Yes, comprehensive training materials and support are included with all packages."
    }
  ]}
/>
```

### Features

- ✅ **Multiple open modes** - Allow single or multiple items open
- ✅ **Default open items** - Set which items start open
- ✅ **HTML content support** in answers
- ✅ **React component support** in answers
- ✅ **Smooth animations** for open/close
- ✅ **Accessibility features** with proper ARIA attributes
- ✅ **Custom titles and descriptions**
- ✅ **Responsive design** for mobile

## 🎨 Styling and Customization

### CSS Variables Used

All components use CSS variables for theming:

```css
--background: Background color
--foreground: Text color
--primary: Primary accent color (blue)
--secondary: Secondary background
--muted: Muted background
--border: Border color
--muted-foreground: Muted text color
```

### Dark Mode Support

All components automatically support dark mode through CSS variables and the `.dark` class.

### Custom Styling

Add custom classes to any component:

```tsx
<ComparisonTable 
  className="my-custom-table"
  columns={...}
/>

<EnhancedCTAButton 
  className="featured-cta"
  title={...}
/>

<EnhancedFAQAccordion 
  className="article-faq"
  items={...}
/>
```

## 📱 Responsive Design

All components are fully responsive:

- **Mobile-first approach** with progressive enhancement
- **Touch-friendly interactions** for mobile devices
- **Optimized typography** for different screen sizes
- **Flexible layouts** that adapt to container width

## ♿ Accessibility Features

### ComparisonTable
- Proper table semantics with `<th>` and `<td>` elements
- Screen reader friendly structure
- High contrast colors for readability

### CTA Buttons
- Proper ARIA labels describing the action
- Keyboard navigation support
- Focus indicators for accessibility
- Semantic button elements

### FAQ Accordion
- ARIA expanded states for screen readers
- Keyboard navigation (Enter/Space to toggle)
- Proper heading structure
- Focus management for opened items

## 🔄 Migration from Original Components

### Existing Articles

Original components (`CTAButton`, `FAQAccordion`) continue to work for backward compatibility.

### New Articles

Use the enhanced components for new articles:

```tsx
// Old way (still works)
<CTAButton title="..." description="..." url="..." />

// New way (recommended)
<EnhancedCTAButton title="..." description="..." url="..." />
```

## 📝 Best Practices

### ComparisonTable
- Use `isHighlighted: true` for the preferred/recommended option
- Keep row content concise and scannable
- Use bold text (`**text**`) for key terms
- Provide meaningful captions for context

### CTA Buttons
- Write clear, action-oriented titles
- Keep descriptions concise but informative
- Use consistent variants across related articles
- Test click tracking if using custom onClick handlers

### FAQ Accordion
- Order questions by importance/frequency
- Keep questions concise and specific
- Provide comprehensive but scannable answers
- Use HTML formatting for better readability

## 🚀 Performance Considerations

All components are optimized for performance:

- **Client-side rendering** with React hooks
- **Minimal re-renders** with proper state management
- **CSS-in-JS** for scoped styling without conflicts
- **Lazy loading** compatible (components load when needed)
- **Tree shaking** friendly for optimal bundle size

## 📊 Usage Examples from BANT Article

### Original Table (lines 110-117)
```markdown
| Traditional BANT | DreamState Selling |
|------------------|-------------------|
| **Focus:** Information gathering | **Focus:** Experience creation |
| **Approach:** Seller-centric qualification | **Approach:** Buyer-centric psychology |
```

### Converted to Component
```tsx
<BANTvsDreamStateTable
  bantColumn={{
    rows: [
      "**Focus:** Information gathering",
      "**Approach:** Seller-centric qualification"
    ]
  }}
  dreamStateColumn={{
    rows: [
      "**Focus:** Experience creation", 
      "**Approach:** Buyer-centric psychology"
    ]
  }}
/>
```

### Original CTA Button (lines 213-218)
```tsx
<CTAButton 
  title="Master Advanced Vision Creation"
  description="Get detailed conversation frameworks and advanced vision creation techniques with our comprehensive DreamState Selling methodology guide, including proven templates and real-world examples."
  url="https://thepersuasionacademy.com/store/dreamstate-book"
  variant="blue"
/>
```

### Enhanced Version
```tsx
<EnhancedCTAButton 
  title="Master Advanced Vision Creation"
  description="Get detailed conversation frameworks and advanced vision creation techniques with our comprehensive DreamState Selling methodology guide, including proven templates and real-world examples."
  url="https://thepersuasionacademy.com/store/dreamstate-book"
  variant="blue"
  target="_blank"
/>
```

These components maintain the exact visual styling and behavior from the original BANT article while providing enhanced functionality and reusability across all future articles.
