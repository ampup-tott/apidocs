/**
 * @api {GET} /places/:place_id/check-charge-now Check Charge Now
 * @apiVersion 0.3.1
 * @apiName Check Charge Now
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Check Charge Now
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} place_id 
 * @apiParamExample {json} Params Example
 *   {
 *     "place_id": 4918
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/places/4918/check-charge-now \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": true
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: place_id"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Charge Now function don't support public charger"
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Place not found"
 *   }
 * @apiErrorExample {json} Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "All stalls are in use. Please try a reservation."
 *   }
 */