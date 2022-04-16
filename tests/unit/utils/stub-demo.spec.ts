import { getMobileLink, useTemplate } from '@/unit-test-demo/utils/stub-demo'
import * as device from '@/unit-test-demo/utils/device'
import sinon from 'sinon'
// getMobileLink调用了isMobileDevice来判断是否是mobile,如果需要测试两个逻辑分支，需要stub两种场景的返回值
// 知识点：stub 一个文件里的某一个变量

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

describe('stub method useTemplate', function () {
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
