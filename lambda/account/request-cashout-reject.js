/**
 * @api {GET} /accounts/request-cashout/rejected Request Cashout Reject
 * @apiVersion 0.3.1
 * @apiName Request Cashout Reject
 * @apiGroup ACCOUNT
 * @apiPermission user
 * @apiDescription Request Cashout Reject
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} id The id of Request cashout
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 78
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/accounts/request-cashout/rejected?id=78 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "status": 4,
 *       "trx_time": "1587371595",
 *       "updated_at": "1587371595",
 *       "id": "78",
 *       "user_id": 18,
 *       "type_id": 2,
 *       "amount": "6.25",
 *       "notes": "Reservation Finished. $6.25 has been added to Host's account successfully.",
 *       "source_id": 403,
 *       "deleted": false,
 *       "created_by": null,
 *       "updated_by": null,
 *       "created_at": "1551486698"
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "There is no request with the given ID!"
 *   }
 */