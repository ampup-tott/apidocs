/**
 * @api {POST} /station/bookmark-stations Create Bookmark Station
 * @apiVersion 0.3.1
 * @apiName Create Bookmark Station
 * @apiGroup STATION
 * @apiPermission user
 * @apiDescription Create Bookmark Station
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} user_id The id of user
 * @apiParam {number} place_id The id of Place
 * @apiParam {number} is_public is public station? 0 | 1
 * @apiParamExample {json} Params Example
 *   {
 *     "user_id": 3997,
 *     "place_id": 4865,
 *     "is_public": 0
 *   }
 * @apiExample {curl} Curl example
 *  curl --request POST \
 *     --url http://localhost:6969/station/bookmark-stations \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 *     --data '{
 *       "user_id": 3997,
 *       "place_id": 4865,
 *       "is_public": 0
 *     }
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "_id": "5e9d540f90725d00120957e9",
 *       "user_id": 3997,
 *       "place_id": "4865",
 *       "is_public": false,
 *       "receive_notification": true,
 *       "created_at": 1587368975,
 *       "updated_at": 1587368975,
 *       "__v": 0
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing or invalid parameter: user_id"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing or invalid parameter: place_id"
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing or invalid parameter: is_public"
 *   }
 */