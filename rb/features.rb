# Yotawarp SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module YotawarpFeatures
  def self.make_feature(name)
    case name
    when "base"
      YotawarpBaseFeature.new
    when "ratelimit"
      YotawarpRatelimitFeature.new
    when "retry"
      YotawarpRetryFeature.new
    when "test"
      YotawarpTestFeature.new
    when "timeout"
      YotawarpTimeoutFeature.new
    else
      YotawarpBaseFeature.new
    end
  end
end
