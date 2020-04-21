/**
 * @api {DELETE} /places/:place_id/access-restriction Delete Access Restriction
 * @apiVersion 0.3.1
 * @apiName Delete Access Restriction
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Delete Access Restriction
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} place_id 
 * @apiParam {number} access_restriction_id The id of access restriction
 * @apiParamExample {json} Params Example
 *   {
 *     "place_id": 4918,
 *     "access_restriction_id": 179
 *   }
 * @apiExample {curl} Curl example
 *  curl --request DELETE \
 *     --url http://localhost:6969/places/4918/access-restriction?access_restriction_id=179 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "status": 0,
 *       "updated_at": 1587442756,
 *       "id": 176,
 *       "place_id": 4918,
 *       "day_orders": [
 *         1,
 *         3
 *       ],
 *       "day_of_weeks": [
 *         "Monday",
 *         "Wednesday"
 *       ],
 *       "time_start": 1587470400,
 *       "time_end": 1587513600,
 *       "created_at": 1587442079,
 *       "name": "jbl3",
 *       "description": null
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing or invalid parameter: access_restriction_id"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "The access restriction not found!"
 *   }
 */