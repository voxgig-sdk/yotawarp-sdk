# Yotawarp SDK utility: prepare_body
require_relative 'media'
module YotawarpUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return YotawarpUtilities.raw_body(ctx.reqdata) if YotawarpUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
