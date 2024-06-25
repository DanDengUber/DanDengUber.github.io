function sendActionToAndroid() {
    var payload = {
        "type": "membership_action_event",
        "messageId": "083d5b55-1b58-4df0-afe4-5f3751b65df0",
        "requestId": "35329fb7-af3c-48c1-b2b2-12c9a8ac1197",
        "payload": {
            "membershipAction": {
                "data": {
                    "type": "performScopedAction",
                    "performScopedAction": {
                        "type": "webviewAction",
                        "webviewAction": {
                            "type": "updateNavButtonIconAction",
                            "updateNavButtonIconAction": {
                                "navigationButtonIcon": "X"
                            }
                        }
                    }
                },
                "actionSource": "NON_MEMBER_STUDENT_PLAN_MONTHLY"
            }
        }
    };

    if (window.MembershipPresidioWebBridge) {
        console.log("AndroidBridge Msg sent SUCCESS!!");
        window.MembershipPresidioWebBridge.onMembershipAction(JSON.stringify(payload));
    } else {
        console.log("AndroidBridge is not available");
    }
}

function sendOpenWebActionToAndroid(dynamicUrl) {
    var payload = {
        "type": "membership_action_event",
        "messageId": "083d5b55-1b58-4df0-afe4-5f3751b65df0",
        "requestId": "35329fb7-af3c-48c1-b2b2-12c9a8ac1197",
        "payload": {
            "membershipAction": {
                "data": {
                    "type": "openWeb",
                    "openWeb": {
                        "url": dynamicUrl,
                        "webviewConfig": {
                            "type": "presidio",
                            "presidio": {
                                "webviewType": "EMBEDDED_WEB_VIEW"
                            }
                        }
                    }
                },
                "actionSource": "NON_MEMBER_STUDENT_PLAN_MONTHLY"
            }
        }
    };

    if (window.MembershipPresidioWebBridge) {
        console.log("AndroidBridge Msg sent SUCCESS!!");
        window.MembershipPresidioWebBridge.onMembershipAction(JSON.stringify(payload));
    } else {
        console.log("AndroidBridge is not available");
    }
}