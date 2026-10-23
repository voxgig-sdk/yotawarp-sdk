# Yotawarp SDK utility: make_context

from yotawarp_sdk.core.context import YotawarpContext


def make_context_util(ctxmap, basectx):
    return YotawarpContext(ctxmap, basectx)
