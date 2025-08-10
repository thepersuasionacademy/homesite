'use client'

import { useState } from 'react'

// Mock data for digital products
const digitalProducts = [
  {
    id: 1,
    name: 'Complete React Course',
    description: 'Master React from basics to advanced concepts with this comprehensive video course.',
    price: 99.99,
    originalPrice: 149.99,
    category: 'Programming',
    image: '/api/placeholder/300/200',
    downloadSize: '2.3 GB',
    lessons: 45,
    duration: '12 hours',
    rating: 4.8,
    reviews: 234
  },
  {
    id: 2,
    name: 'UI/UX Design Masterclass',
    description: 'Learn modern UI/UX design principles and create stunning user experiences.',
    price: 79.99,
    originalPrice: 119.99,
    category: 'Design',
    image: '/api/placeholder/300/200',
    downloadSize: '1.8 GB',
    lessons: 32,
    duration: '8 hours',
    rating: 4.9,
    reviews: 189
  },
  {
    id: 3,
    name: 'Digital Marketing Blueprint',
    description: 'Complete guide to digital marketing strategies that actually work.',
    price: 59.99,
    originalPrice: 89.99,
    category: 'Marketing',
    image: '/api/placeholder/300/200',
    downloadSize: '950 MB',
    lessons: 28,
    duration: '6 hours',
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: 'Python for Data Science',
    description: 'Learn Python programming specifically for data analysis and machine learning.',
    price: 89.99,
    originalPrice: 129.99,
    category: 'Programming',
    image: '/api/placeholder/300/200',
    downloadSize: '3.1 GB',
    lessons: 52,
    duration: '15 hours',
    rating: 4.8,
    reviews: 298
  },
  {
    id: 5,
    name: 'Photography Essentials',
    description: 'Master the art of photography with practical techniques and insider tips.',
    price: 49.99,
    originalPrice: 79.99,
    category: 'Creative',
    image: '/api/placeholder/300/200',
    downloadSize: '1.2 GB',
    lessons: 24,
    duration: '5 hours',
    rating: 4.6,
    reviews: 145
  },
  {
    id: 6,
    name: 'Business Strategy Template Pack',
    description: 'Professional templates and frameworks for strategic business planning.',
    price: 39.99,
    originalPrice: 59.99,
    category: 'Business',
    image: '/api/placeholder/300/200',
    downloadSize: '85 MB',
    lessons: 15,
    duration: '3 hours',
    rating: 4.7,
    reviews: 89
  }
]

const categories = ['All', 'Programming', 'Design', 'Marketing', 'Creative', 'Business']

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cartItems, setCartItems] = useState<number[]>([])

  const filteredProducts = selectedCategory === 'All' 
    ? digitalProducts 
    : digitalProducts.filter(product => product.category === selectedCategory)

  const addToCart = (productId: number) => {
    if (!cartItems.includes(productId)) {
      setCartItems([...cartItems, productId])
    }
  }

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(id => id !== productId))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0e16]">
      {/* Store Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center mb-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-2 leading-tight">
            The Persuasion Academy Store
          </h1>
          <p className="text-xl text-[#86868b] dark:text-[#a1a1a6] max-w-3xl mx-auto">
            Premium digital products for creators, entrepreneurs, business owners, and misfits... blazing the trail of their own path
          </p>
        </div>
      </div>

      {/* Featured Season Pass Offer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white dark:bg-[#17171a] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Featured Offer Banner - Inside Card */}
          <div className="bg-black py-4">
            <div className="text-center">
              <div className="inline-flex items-center space-x-3">
                <span className="bg-white text-black px-3 py-1 rounded font-bold text-sm tracking-wide">
                  FEATURED OFFER
                </span>
                <span className="text-white font-medium text-lg">
                  All-Access Season Pass Available Now
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row">
            {/* Photo Section */}
            <div className="lg:w-80 h-64 lg:h-auto relative overflow-hidden">
              <img 
                src="https://thepersuasionacademycdn.b-cdn.net/Images/thepowerark_In_a_longshot_perspective_a_silhouette_of_a_busin_cad1314c-ce1a-4c58-a72a-b05e0f62411a_0.jpeg"
                alt="Business person holding red ticket above architectural blueprints - symbolizing transformation through The Persuasion Academy Season Pass"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div className="flex-1 p-8">
              
              <h2 className="text-3xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-4">
                All-Access Season Pass
              </h2>
              
              <p className="text-lg text-[#0b0e16] dark:text-[#f5f5f7] font-semibold mb-2">
                Your annual membership to everything we create.
              </p>
              
              <p className="text-[#86868b] dark:text-[#a1a1a6] mb-6 leading-relaxed">
                Get immediate access to our entire program library, keep all base programs forever, 
                and automatically receive every new program we launch during your 12-month membership period.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Standard Option */}
                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 h-full flex flex-col">
                  <h3 className="font-semibold text-[#0b0e16] dark:text-[#f5f5f7] mb-3 h-6">Standard</h3>
                  <div className="mb-2">
                    <div className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">$3,000</div>
                    <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">per year</div>
                  </div>
                  
                  {/* Horizontal Divider */}
                  <div className="flex items-center my-1">
                    <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
                    <span className="px-3 text-base font-medium text-[#86868b] dark:text-[#a1a1a6]">OR</span>
                    <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
                  </div>
                  
                  <div className="mb-6 flex-1">
                    <div className="text-xl font-semibold text-[#0b0e16] dark:text-[#f5f5f7]">$300/month</div>
                    <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">Monthly billing</div>
                    <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Complete access to live programs and the entire Academy platform
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-[#0b0e16] dark:bg-[#f5f5f7] text-white dark:text-[#0b0e16] py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-auto">
                    See Full Offer →
                  </button>
                </div>
                
                {/* VIP Option */}
                <div className="border-2 border-blue-500 rounded-lg p-4 h-full flex flex-col relative">
                  <div className="absolute -top-3 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    VIP SUPPORT
                  </div>
                  <h3 className="font-semibold text-[#0b0e16] dark:text-[#f5f5f7] mb-3 h-6">VIP Support</h3>
                  <div className="mb-2">
                    <div className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">$5,000</div>
                    <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">per year</div>
                  </div>
                  
                  {/* Horizontal Divider */}
                  <div className="flex items-center my-1">
                    <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
                    <span className="px-3 text-base font-medium text-[#86868b] dark:text-[#a1a1a6]">OR</span>
                    <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
                  </div>
                  
                  <div className="mb-6 flex-1">
                    <div className="text-xl font-semibold text-[#0b0e16] dark:text-[#f5f5f7]">$500/month</div>
                    <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">Monthly billing</div>
                    <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="text-sm font-medium text-blue-800 dark:text-blue-200">
                        + Unlimited private 20-minute lightning sessions with Kenrick Cleveland
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-auto">
                    See Full Offer →
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#86868b] dark:text-[#a1a1a6]">12 months all-access</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#86868b] dark:text-[#a1a1a6]">Keep base programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#86868b] dark:text-[#a1a1a6]">Keep new releases</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#86868b] dark:text-[#a1a1a6]">Participate in live programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#86868b] dark:text-[#a1a1a6]">All AI improvements and tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#86868b] dark:text-[#a1a1a6]">5,000 monthly credits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-6">
            All Products
          </h2>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#17171a] text-[#0b0e16] dark:text-[#f5f5f7] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-[#86868b] dark:placeholder-[#a1a1a6]"
            />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 transform scale-105'
                  : 'bg-white dark:bg-[#17171a] text-[#86868b] dark:text-[#a1a1a6] border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-[#17171a] rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200 dark:border-gray-800"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.87 9 11 5.16-1.13 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                    <p className="text-sm font-medium">{product.category}</p>
                  </div>
                </div>
                {product.originalPrice > product.price && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="ml-1 text-sm text-[#86868b] dark:text-[#a1a1a6]">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-[#0b0e16] dark:text-[#f5f5f7] mb-2">
                  {product.name}
                </h3>
                
                <p className="text-[#86868b] dark:text-[#a1a1a6] text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Product Meta */}
                <div className="flex justify-between text-xs text-[#86868b] dark:text-[#a1a1a6] mb-4">
                  <span>{product.lessons} lessons</span>
                  <span>{product.duration}</span>
                  <span>{product.downloadSize}</span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-[#86868b] dark:text-[#a1a1a6] line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  {cartItems.includes(product.id) ? (
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      ✓ Added
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(product.id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary (if items in cart) */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#0b0e16] border-t border-gray-200 dark:border-gray-800 p-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-lg font-medium text-[#0b0e16] dark:text-[#f5f5f7]">
                {cartItems.length} item{cartItems.length > 1 ? 's' : ''} in cart
              </span>
              <span className="text-xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">
                ${cartItems.reduce((total, id) => {
                  const product = digitalProducts.find(p => p.id === id)
                  return total + (product?.price || 0)
                }, 0).toFixed(2)}
              </span>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setCartItems([])}
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-[#86868b] dark:text-[#a1a1a6] rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Clear Cart
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 