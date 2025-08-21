# Component Examples - Ready to Use

Copy and paste these examples directly into your MDX articles.

## 📊 Comparison Tables

### Basic Two-Column Comparison
```tsx
<ComparisonTable
  columns={[
    {
      header: "Traditional Approach",
      rows: [
        "**Focus:** Problem identification",
        "**Method:** Direct questioning",
        "**Outcome:** Logical analysis"
      ]
    },
    {
      header: "Modern Approach",
      rows: [
        "**Focus:** Solution visualization",
        "**Method:** Guided discovery",
        "**Outcome:** Emotional commitment"
      ],
      isHighlighted: true
    }
  ]}
/>
```

### Quick BANT vs DreamState Style
```tsx
<BANTvsDreamStateTable
  bantColumn={{
    rows: [
      "**Timeline:** Immediate needs assessment",
      "**Authority:** Identify decision makers",
      "**Need:** Qualify pain points",
      "**Budget:** Confirm financial capacity"
    ]
  }}
  dreamStateColumn={{
    rows: [
      "**Timeline:** Future vision creation",
      "**Authority:** Establish expert positioning", 
      "**Need:** Generate emotional investment",
      "**Budget:** Value-based investment discussion"
    ]
  }}
/>
```

### Three-Column Comparison
```tsx
<ComparisonTable
  columns={[
    {
      header: "Beginner",
      rows: ["Basic features", "Email support", "$29/month"]
    },
    {
      header: "Professional",
      rows: ["Advanced features", "Priority support", "$99/month"],
      isHighlighted: true
    },
    {
      header: "Enterprise", 
      rows: ["All features", "Dedicated support", "$299/month"]
    }
  ]}
  caption="Pricing comparison across tiers"
/>
```

## 🔗 CTA Buttons

### Standard CTA Button
```tsx
<EnhancedCTAButton 
  title="Get Started Today"
  description="Access our complete training library with proven frameworks, templates, and real-world examples to transform your sales approach."
  url="https://example.com/get-started"
  variant="blue"
/>
```

### CTA with Custom Click Handler
```tsx
<EnhancedCTAButton 
  title="Download Free Guide"
  description="Get our 20-page guide on advanced persuasion techniques used by top performers."
  url="https://example.com/download"
  variant="light-blue"
  onClick={() => {
    // Track download event
    gtag('event', 'download', { guide_name: 'persuasion_techniques' })
  }}
/>
```

### Simple CTA for Quick Actions
```tsx
<SimpleCTAButton
  url="https://example.com/contact"
  variant="blue"
>
  <strong>Schedule Your Free Consultation</strong>
</SimpleCTAButton>
```

## ❓ FAQ Sections

### Standard FAQ with Multiple Open Items
```tsx
<EnhancedFAQAccordion 
  title="Frequently Asked Questions"
  description="Everything you need to know about our methodology"
  items={[
    {
      question: "How quickly will I see results?",
      answer: "Most clients see <strong>measurable improvements within 2-4 weeks</strong> of implementation. Full transformation typically occurs within 90 days with consistent application of the techniques."
    },
    {
      question: "Is this suitable for my industry?",
      answer: "Our methodology works across industries including:<ul><li><strong>B2B SaaS</strong> and technology</li><li><strong>Professional services</strong> and consulting</li><li><strong>Financial services</strong> and insurance</li><li><strong>Real estate</strong> and high-value transactions</li></ul>"
    },
    {
      question: "What support is included?",
      answer: "Every program includes:<ul><li>Complete video training library</li><li>Downloadable templates and scripts</li><li>Email support for 90 days</li><li>Access to our private community</li><li>Monthly group coaching calls</li></ul>"
    }
  ]}
  allowMultipleOpen={true}
  defaultOpenItems={[0]}
/>
```

### Quick FAQ for Simple Questions
```tsx
<QuickFAQ
  items={[
    {
      q: "How long is the training?",
      a: "The core training is 4 hours of video content, designed to be completed over 2 weeks."
    },
    {
      q: "Is there a money-back guarantee?",
      a: "Yes, we offer a 30-day money-back guarantee if you're not completely satisfied."
    },
    {
      q: "Can I share this with my team?",
      a: "Individual licenses are for single users. Team licenses are available for 3+ people."
    }
  ]}
/>
```

### FAQ with React Components in Answers
```tsx
<EnhancedFAQAccordion 
  items={[
    {
      question: "What's included in the premium package?",
      answer: (
        <div>
          <p>The premium package includes everything in our standard offering plus:</p>
          <ComparisonTable
            columns={[
              {
                header: "Standard",
                rows: ["Basic training", "Email support", "Templates"]
              },
              {
                header: "Premium", 
                rows: ["Advanced training", "1-on-1 coaching", "Custom templates"],
                isHighlighted: true
              }
            ]}
          />
          <SimpleCTAButton url="/upgrade" variant="blue">
            Upgrade to Premium
          </SimpleCTAButton>
        </div>
      )
    }
  ]}
/>
```

## 🎨 Styling Examples

### Custom Styled Components
```tsx
<ComparisonTable
  className="featured-comparison"
  columns={[...]}
/>

<EnhancedCTAButton 
  className="hero-cta"
  title="..."
  description="..."
  url="..."
/>

<EnhancedFAQAccordion 
  className="sidebar-faq"
  items={[...]}
/>
```

### With Custom CSS
```css
.featured-comparison {
  margin: 3rem 0;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.hero-cta {
  transform: scale(1.05);
  margin: 3rem auto;
  max-width: 600px;
}

.sidebar-faq {
  background: var(--muted);
  padding: 2rem;
  border-radius: 1rem;
}
```

## 🔄 Migration Examples

### Converting Existing Markdown Tables
```markdown
<!-- Old markdown table -->
| Feature | Basic | Premium |
|---------|-------|---------|
| Support | Email | Phone + Email |
| Training | Videos | Videos + Coaching |

<!-- New component version -->
<ComparisonTable
  columns={[
    {
      header: "Feature",
      rows: ["Support", "Training"]
    },
    {
      header: "Basic", 
      rows: ["Email", "Videos"]
    },
    {
      header: "Premium",
      rows: ["Phone + Email", "Videos + Coaching"],
      isHighlighted: true
    }
  ]}
/>
```

### Converting Existing CTAs
```tsx
<!-- Old version -->
<CTAButton 
  title="Learn More"
  description="Get access to our training"
  url="/training"
/>

<!-- Enhanced version -->
<EnhancedCTAButton 
  title="Learn More" 
  description="Get access to our comprehensive training library with proven frameworks and templates"
  url="/training"
  target="_blank"
/>
```

## 📱 Responsive Behavior

All components automatically adapt to different screen sizes:

- **Desktop**: Full-width layouts with hover effects
- **Tablet**: Optimized spacing and touch targets  
- **Mobile**: Stacked layouts and larger touch areas

## ♿ Accessibility Features

- **Keyboard Navigation**: All interactive elements support Tab/Enter/Space
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **High Contrast**: Colors meet WCAG accessibility guidelines
- **Focus Indicators**: Clear visual focus states for keyboard users

Copy any of these examples directly into your MDX files - they'll work immediately with the existing styling and functionality!
