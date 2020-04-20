/**
 * @api {GET} /accounts/request-cashout/pending Request Cashout Pending
 * @apiVersion 0.3.1
 * @apiName Request Cashout Pending
 * @apiGroup ACCOUNT
 * @apiPermission user
 * @apiDescription Request Cashout Pending
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/accounts/request-cashout/pending \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "user_id": 57,
 *         "user_name": "Khanh Tran",
 *         "request_time": "1553765439",
 *         "amount": "6.65"
 *       },
 *       {
 *         "user_id": 17,
 *         "user_name": "Loc Nguyen Thai Vinh",
 *         "request_time": "1558255450",
 *         "amount": "78.33"
 *       },
 *       {
 *         "user_id": 3950,
 *         "user_name": "Yunie Pham",
 *         "request_time": "1565594466",
 *         "amount": "2.13"
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */