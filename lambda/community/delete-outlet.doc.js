/**
 * @api {delete} /community/place/:place_id/charger/:charger_id/outlet/:outlet_id Delete outlet
 * @apiVersion 0.0.1
 * @apiName Delete outlet
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription Delete outlet by user
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {Number} place_id The id of Place
 * @apiParam {Number} charger_id The id of Charger
 * @apiParam {Number} outlet_id The id of Outlet
 * @apiParamExample {json} Param Example
 *   {
 *     "place_id": 4918,
 *     "charger_id": 6732,
 *     "outlet_id": 8506
 *   }
 * @apiExample {curl} Curl example
 *   curl --request DELETE \
 *     --url http://localhost:6969/community/place/4918/charger/6732/outlet/8506 \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "status": 0,
 *       "updated_at": 1585674854,
 *       "updated_by": 4007,
 *       "id": 8506,
 *       "charger_id": 6732,
 *       "connector_id": null,
 *       "available": true,
 *       "created_at": 1585674139,
 *       "notes": null,
 *       "plugshare_outlet_id": null,
 *       "created_by": 4007,
 *       "power": 0
 *     }
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error
 * @apiErrorExample Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Place not found or invalid Id" 
 *   }
 * @apiErrorExample Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "There are reservations on this outlet currently. Please cancel those reservations before deleting outlet." 
 *   }
 * @apiErrorExample Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Changer not found or invalid Id" 
 *   }
 * @apiErrorExample Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Outlet not found or invalid Id" 
 *   }
 */