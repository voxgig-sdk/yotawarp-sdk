# Yotawarp SDK utility: make_context
require_relative '../core/context'
module YotawarpUtilities
  MakeContext = ->(ctxmap, basectx) {
    YotawarpContext.new(ctxmap, basectx)
  }
end
