/**
 * @api {DELETE} /places/:id Delete Place
 * @apiVersion 0.3.1
 * @apiName Delete Place
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Delete Place
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} id The id of place
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 4959
 *   }
 * @apiExample {curl} Curl example
 *  curl --request DELETE \
 *     --url http://localhost:6969/places/4959 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "name": "Place #1",
 *       "address": "1648 Vo Van Kiet Street",
 *       "phone": "123-345-6677",
 *       "lat": 10.7297857,
 *       "lng": 106.6241775,
 *       "user_id": 1,
 *       "keywords": "",
 *       "status": -1,
 *       "data": null,
 *       "created_at": 1587441305,
 *       "id": 4959,
 *       "updated_at": null,
 *       "coordinate": null,
 *       "notes": null,
 *       "plugshare_place_id": null,
 *       "offline": null,
 *       "rating": 0,
 *       "reviews": null,
 *       "created_by": null,
 *       "updated_by": null,
 *       "verified": true,
 *       "donated": false,
 *       "protocol": false,
 *       "host_info": {
 *         "id": 1,
 *         "name": "Khanh Tran",
 *         "email": "thkhanh@gmail.com",
 *         "phone": "0988967911",
 *         "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bartoszdawydzik/128.jpg"
 *       }
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: id"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "There are reservations on this charger currently. Please cancel those reservations before deleting charger."
 *   }
 */