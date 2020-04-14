/**
 * @api {delete} /community/place/:place_id/charger/:charger_id Delete Charger
 * @apiVersion 0.3.1
 * @apiName Delete Charger
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription Delete charger by user
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {Number} place_id The id of Place
 * @apiParam {Number} charger_id The id of Charger
 * @apiParamExample {json} Param Example
 *   {
 *     "place_id": 4918,
 *     "charger_id": 6732
 *   }
 * @apiExample {curl} Curl example
 *   curl --request DELETE \
 *     --url http://localhost:6969/community/place/4918/charger/6732 \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccess {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "status": 0,
 *       "updated_at": 1585675161,
 *       "updated_by": 4007,
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
 *       "notes": null,
 *       "plugshare_charger_id": null,
 *       "offline": false,
 *       "restricted_reason": null,
 *       "created_by": null,
 *       "is_unpluggable": true
 *     }
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Place not found or invalid Id" 
 *   }
 * @apiErrorExample Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "There are reservations on this charger currently. Please cancel those reservations before editing charger." 
 *   }
 * @apiErrorExample Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Changer not found or invalid Id" 
 *   }
 */