import { isLandscape, isMobileDevice } from '@/unit-test-demo/utils/device'

export const getMobileLink = () => {
  if (isMobileDevice) {
    return 'https://mobile.address'
  } else {
    return 'https://pc.address'
  }
}

export const useTemplate = () => {
  if (isLandscape()) {
    return 'templateA'
  } else {
    return 'templateB'
  }
}
