import { getPageMap } from 'nextra/page-map'

// Simplified page map function that just returns the standard page map
// without any custom built-ins enhancement
export const getEnhancedPageMap: typeof getPageMap = async (...args) => {
  return await getPageMap(...args)
}
