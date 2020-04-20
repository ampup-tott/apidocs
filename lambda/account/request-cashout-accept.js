/**
 * @api {GET} /accounts/request-cashout/accept Request Cashout Accept
 * @apiVersion 0.3.1
 * @apiName Request Cashout Accept
 * @apiGroup ACCOUNT
 * @apiPermission user
 * @apiDescription Request Cashout Accept
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} id The id of request cashout
 * @apiParamExample {json} Params Example
 *   {
 *      "id": 90
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/accounts/request-cashout/accept?id=90 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "status": 1,
 *       "trx_time": "1585450865",
 *       "updated_at": "1585450865",
 *       "id": "10",
 *       "user_id": 21,
 *       "type_id": 2,
 *       "amount": "1.65",
 *       "notes": "Reservation Finished. $1.65 has been added to Host's account successfully.",
 *       "source_id": 369,
 *       "deleted": false,
 *       "created_by": null,
 *       "updated_by": null,
 *       "created_at": "1550505998"
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example
 *   {
 *     "status": "FAIL",
 *     "reason": "There is no request with the given ID!"
 *   }
 */