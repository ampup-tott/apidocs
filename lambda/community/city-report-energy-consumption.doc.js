/**
 * @api {get} /community/report/city-energy-consumption City Report Energy Consumption
 * @apiVersion 0.3.1
 * @apiName City Report Energy Consumption
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription City report energy consumption by user
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiExample {curl} Curl example
 *   curl --request GET \
 *     --url https://api-dev.uptimecharge.com/community/report/city-energy-consumption \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "place_id": 4918,
 *         "city": "Vietnam"
 *       }
 *     ]
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */