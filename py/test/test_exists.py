# Yotawarp SDK exists test

import pytest
from yotawarp_sdk import YotawarpSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = YotawarpSDK.test(None, None)
        assert testsdk is not None
