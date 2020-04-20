/**
 * @api {DELETE} /chargers/:id Delete Charger
 * @apiVersion 0.3.1
 * @apiName Delete Charger
 * @apiGroup CHARGER
 * @apiPermission user
 * @apiDescription Delete Charger
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} id The id of Charger
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 6732
 *   }
 * @apiExample {curl} Curl example
 *  curl --request DELETE \
 *     --url http://localhost:6969/chargers/6722 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "status": -1,
 *       "updated_at": 1587386059,
 *       "notes": [
 *         "User deleted charger"
 *       ],
 *       "id": 6732,
 *       "data": {
 *         "instruction": "Free free free"
 *       },
 *       "keywords": "Little 2",
 *       "price": 0,
 *       "place_id": 4918,
 *       "created_at": 1585674139,
 *       "provider_id": 1,
 *       "name": "Little 2",
 *       "level": 3,
 *       "restricted": null,
 *       "has_solar": true,
 *       "plugshare_charger_id": null,
 *       "offline": false,
 *       "restricted_reason": null,
 *       "created_by": null,
 *       "updated_by": 4007,
 *       "is_unpluggable": true,
 *       "plugs": []
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
 *     "reason": "Charger not found"
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Sorry, this charger cannot be deleted because there are active reservations!"
 *   }
 */