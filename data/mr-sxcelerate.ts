export const mrB13ResearchImages = Array.from({ length: 12 }, (_, i) => {
  const pageNumber = String(i + 1).padStart(4, "0")
  return `/mr-b13-research/sxc-b13-research_page-${pageNumber}.jpg`
})