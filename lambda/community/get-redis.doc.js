/**
 * @api {get} /community/places/redis Get key in Redis
 * @apiVersion 0.3.1
 * @apiName Get key in Redis
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription Get key in Redis by user.
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {Number} rkey The key in redis
 * @apiParamExample {json} Param Example
 *   {
 *     "rkey": 'test_key'
 *   }
 * @apiExample {curl} Curl example
 *   curl --request GET \
 *     --url 'http://localhost:6969/community/places/redis?rkey=test_key' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {String} data The value of key
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": "_____example_____"
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error
 * @apiErrorExample Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "key is empty!" 
 *   }
 */