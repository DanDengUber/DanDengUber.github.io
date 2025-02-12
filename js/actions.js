function sendActionToAndroid(iconType) {
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
                                "navigationButtonIcon": iconType
                            }
                        }
                    }
                },
                "actionSource": "NON_MEMBER_STUDENT_PLAN_MONTHLY"
            }
        }
    };

    sendWebbridgeMsg(payload);
}

function sendOpenWebActionToAndroid(dynamicUrl, webviewType = "EMBEDDED_WEB_VIEW") {
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
                        "webviewAnalyticsID": "TestSSO",
                        "webviewConfig": {
                            "type": "presidio",
                            "presidio": {
                                "webviewType": webviewType  // Use provided param, default to "EMBEDDED_WEB_VIEW", otherwise "EMBEDDED_BROWSER"
                            }
                        },
                        "keyedCompletionActions": getKeyedCompletionActions()
                    }
                },
                "actionSource": "NON_MEMBER_STUDENT_PLAN_MONTHLY"
            }
        }
    };

    sendWebbridgeMsg(payload);
}

function getKeyedCompletionActions() {
    return {
        "auth_success": {
            "identifier": "membershipWebviewNavigateAction",
            "data": {
                "type": "performScopedAction",
                "performScopedAction": {
                    "type": "webviewAction",
                    "webviewAction": {
                        "type": "membershipWebviewNavigateAction",
                        "membershipWebviewNavigateAction": {
                            "webUrl": "https://xlb-beta.uber.com/membership/student-verification?query-context={\"request_id\":\"fb2066bf-c1ee-4b30-8083-07491b3facdb\",\"num_screens_back\":1,\"sso_success\":true}"
                        }
                    }
                }
            },
            "actionSource": "NON_MEMBER_STUDENT_PLAN_MONTHLY"
        }
    };
}

function sendWebbridgeMsg(payload) {
    if (window.MembershipPresidioWebBridge && 
        typeof window.MembershipPresidioWebBridge.onMembershipAction === "function") {
        console.log("AndroidBridge Msg sent SUCCESS!!");
        window.MembershipPresidioWebBridge.onMembershipAction(JSON.stringify(payload));
    } else {
        console.log("AndroidBridge is not available or function is undefined.");
    }
}
