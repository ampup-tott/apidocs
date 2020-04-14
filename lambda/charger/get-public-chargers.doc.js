/**
 * @api {}  _
 * @apiVersion 0.3.1
 * @apiName _
 * @apiGroup CHARGER
 * @apiPermission user
 * @apiDescription _
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {}
 * @apiParamExample {json} Param Example

 * @apiExample {curl} Curl example

 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccess {JSON} Success Example

 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "" 
 *   }
 * @apiErrorExample Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "" 
 *   }
 * @apiErrorExample Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": ""
 *   }
 */