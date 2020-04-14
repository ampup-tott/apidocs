/**
 * @api {get} /chargers-adhoc/check-status Check Status
 * @apiVersion 0.3.1
 * @apiName Check Status
 * @apiGroup CHARGER
 * @apiPermission user
 * @apiDescription Check status
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {String} code The cp_url encoded
 * @apiParam {String} status The status of Charging (start | stop)
 * @apiParam {String} [cmd] The OCCP command (StopTransaction)
 * @apiParamExample {json} Param Example
 *   {
 *     "code": "%2FwebServices%2Focpp%2FCP1111%2FAmpUp00002",
 *     "status": "start"
 *   }
 * @apiExample {curl} Curl example
 *   curl --request GET \
 *     --url 'https://api-dev.uptimecharge.com/chargers-adhoc/check-status?code=%252FwebServices%252Focpp%252FCP1111%252FAmpUp00002&status=start' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMwNiwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiU00tUzEwIiwiZGV2aWNlX25hbWUiOiJTTS0xMjM0IiwiZXhwIjoxNTg4MDM4ODI3LCJpYXQiOjE1ODU0NDY4Mjd9.XKPoV6FlT0FsWdmzv05M9fTSV1QN9TLDnHebj6sjw70'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccess {JSON} Success Example
 *   {
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Charger Point is invalid" 
 *   }
 * @apiErrorExample Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Invalid IV length" 
 *   }
 */