# Yotawarp SDK exists test

require "minitest/autorun"
require_relative "../Yotawarp_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = YotawarpSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
