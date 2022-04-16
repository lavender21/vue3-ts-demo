import { getMobileLink, useTemplate } from '@/unit-test-demo/utils/stub-demo'
import * as device from '@/unit-test-demo/utils/device'
import sinon from 'sinon'
import { isLandscape } from '@/unit-test-demo/utils/device'
// getMobileLink调用了isMobileDevice来判断是否是mobile,如果需要测试两个逻辑分支，需要stub两种场景的返回值
// stub 一个文件里的某一个变量 sinon stub jest目前不改变业务代码的前提下没有找到解决方案

describe('stub value getMobileLink', function () {
  it('should return mobile link when on mobile', function () {
    sinon.stub(device, 'isMobileDevice').value(true)
    expect(getMobileLink()).toEqual('https://mobile.address')
  })
  it('should return pc link when not on mobile', function () {
    sinon.stub(device, 'isMobileDevice').value(false)
    expect(getMobileLink()).toEqual('https://pc.address')
  })
})

// stub 一个文件里的某一个方法
describe('stub method useTemplate use sinon', function () {
  afterEach(() => {
    (device.isLandscape as any).restore()
  })
  it('should return templateA when is landscape', function () {
    sinon.stub(device, 'isLandscape').returns(true)
    expect(useTemplate()).toEqual('templateA')
  })
  it('should return templateB when is priorat', function () {
    sinon.stub(device, 'isLandscape').returns(false)
    expect(useTemplate()).toEqual('templateB')
  })
})
describe('stub method useTemplate use jest', function () {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  it('should return templateA when is landscape', function () {
    jest.spyOn(device, 'isLandscape').mockReturnValue(true)
    expect(useTemplate()).toEqual('templateA')
  })
  it('should return templateB when is priorat', function () {
    jest.spyOn(device, 'isLandscape').mockReturnValue(false)
    expect(useTemplate()).toEqual('templateB')
  })
})
