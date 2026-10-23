
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { YotawarpSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = YotawarpSDK.test()
    equal(testsdk instanceof YotawarpSDK, true,
      'YotawarpSDK.test() must return a client synchronously')
  })

})
