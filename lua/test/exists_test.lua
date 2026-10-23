-- Yotawarp SDK exists test

local sdk = require("yotawarp_sdk")

describe("YotawarpSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
