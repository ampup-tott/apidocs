/**
 * @api {get} /community/transform-reservation-report Transform Reservation For Report
 * @apiVersion 0.3.1
 * @apiName Transform Reservation For Report
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription Transform Reservation for report
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {Number} min_res_id The id minximize of reservation
 * @apiParam {Number} max_res_id The id maximize of reservation
 * @apiParamExample {json} Param Example
 *   {
 *     "min_res_id": 900,
 *     "max_res_id": 910
 *   }
 * @apiExample {curl} Curl example
 *   curl --request GET \
 *     --url 'http://localhost:6969/community/transform-reservation-report?min_res_id=900&max_res_id=910' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Having not new Reservation" 
 *   }
 * @apiErrorExample Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Can't find this place" 
 *   }
 */