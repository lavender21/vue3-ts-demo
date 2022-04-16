const { userAgent } = window.navigator

export const isMobileDevice = !!userAgent.match(/mobile|iphone/i)

export const isLandscape = () => {
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight
  return screenWidth > screenHeight
}
