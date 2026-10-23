# Yotawarp SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

YotawarpUtility.registrar = ->(u) {
  u.clean = YotawarpUtilities::Clean
  u.clean_add = YotawarpUtilities::CleanAdd
  u.clean_explain = YotawarpUtilities::CleanExplain
  u.done = YotawarpUtilities::Done
  u.make_error = YotawarpUtilities::MakeError
  u.feature_add = YotawarpUtilities::FeatureAdd
  u.feature_hook = YotawarpUtilities::FeatureHook
  u.feature_init = YotawarpUtilities::FeatureInit
  u.fetcher = YotawarpUtilities::Fetcher
  u.make_fetch_def = YotawarpUtilities::MakeFetchDef
  u.make_context = YotawarpUtilities::MakeContext
  u.make_options = YotawarpUtilities::MakeOptions
  u.make_request = YotawarpUtilities::MakeRequest
  u.make_response = YotawarpUtilities::MakeResponse
  u.make_result = YotawarpUtilities::MakeResult
  u.make_point = YotawarpUtilities::MakePoint
  u.make_spec = YotawarpUtilities::MakeSpec
  u.make_url = YotawarpUtilities::MakeUrl
  u.param = YotawarpUtilities::Param
  u.prepare_auth = YotawarpUtilities::PrepareAuth
  u.prepare_body = YotawarpUtilities::PrepareBody
  u.prepare_headers = YotawarpUtilities::PrepareHeaders
  u.prepare_method = YotawarpUtilities::PrepareMethod
  u.prepare_params = YotawarpUtilities::PrepareParams
  u.prepare_path = YotawarpUtilities::PreparePath
  u.prepare_query = YotawarpUtilities::PrepareQuery
  u.graphql_body = YotawarpUtilities::GraphqlBody
  u.graphql_errors = YotawarpUtilities::GraphqlErrors
  u.result_basic = YotawarpUtilities::ResultBasic
  u.result_body = YotawarpUtilities::ResultBody
  u.result_headers = YotawarpUtilities::ResultHeaders
  u.transform_request = YotawarpUtilities::TransformRequest
  u.transform_response = YotawarpUtilities::TransformResponse
}
