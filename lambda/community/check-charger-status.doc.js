/**
 * @api {get} /station/check-bookmarked-station Check Charger Status
 * @apiVersion 0.3.1
 * @apiName Check Charger Status
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription Check charger status by user
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {Number} place_id The id of place
 * @apiParamExample {json} Param Example
 *  {
 *    "place_id": 4918
 *  }
 * @apiExample {curl} Curl example
 *   curl --request GET \
 *     --url http://localhost:6969/community/place/4918/check-charger-status \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccess {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       null
 *     ]
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason Ther cause of Error.
 * @apiErrorExample Error Example
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: place_id" 
 *   }
 */