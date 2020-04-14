/**
 * @api {post} /community/places/redis Create Redis Key
 * @apiVersion 0.3.1
 * @apiName Create Redis Key
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription Create redis Key by user
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {Number} rkey The key in Redis
 * @apiParam {Number} rvalue The value of key in Redis
 * @apiParamExample {json} Param Example
 *  {
 *    "rkey": "test_key",
 *    "rvalue": "_____example_____"
 *  }
 * @apiExample {curl} Curl example
 *   curl --request POST \
 *     --url https://api-dev.uptimecharge.com/community/places/redis \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \
 *     --header 'content-type: application/json' \
 *     --data '{
 *       "rkey": "test_key",
 *       "rvalue": "_____example____"
 *   }'
 * @apiSuccess {String} status <code>OK</code>
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "key is empty!" 
 *   }
 * @apiErrorExample Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "value is empty!" 
 *   }
 */