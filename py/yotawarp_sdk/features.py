# Yotawarp SDK feature factory

from yotawarp_sdk.feature.base_feature import YotawarpBaseFeature
from yotawarp_sdk.feature.ratelimit_feature import YotawarpRatelimitFeature
from yotawarp_sdk.feature.retry_feature import YotawarpRetryFeature
from yotawarp_sdk.feature.test_feature import YotawarpTestFeature
from yotawarp_sdk.feature.timeout_feature import YotawarpTimeoutFeature


_FEATURES = {
    "base": lambda: YotawarpBaseFeature(),
    "ratelimit": lambda: YotawarpRatelimitFeature(),
    "retry": lambda: YotawarpRetryFeature(),
    "test": lambda: YotawarpTestFeature(),
    "timeout": lambda: YotawarpTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
