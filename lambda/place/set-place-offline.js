/**
 * @api {PUT} /places/:id/offline Set Place Offline
 * @apiVersion 0.3.1
 * @apiName Set Place Offline
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Set Place Offline
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {boolean} offline is offline place?
 * @apiParamExample {json} Params Example
 *   {
 *     "offline": true
 *   }
 * @apiExample {curl} Curl example
 *  curl --request PUT \
 *     --url http://localhost:6969/places/6722/offline \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 *     --data '{
 *       "offline": true
 *     }
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "offline": true,
 *       "status": 0,
 *       "updated_at": 1587383800,
 *       "updated_by": 4007,
 *       "id": 4918,
 *       "name": "Tui test",
 *       "address": "15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam",
 *       "lat": 10.7517033,
 *       "lng": 106.6558611,
 *       "user_id": 4007,
 *       "keywords": "Tui Test, Do Ngoc Thanh, Abel",
 *       "created_at": 1584605422,
 *       "data": {
 *         "price": 0
 *       },
 *       "coordinate": null,
 *       "phone": "0355933881",
 *       "notes": null,
 *       "plugshare_place_id": null,
 *       "rating": 0,
 *       "reviews": null,
 *       "created_by": null,
 *       "verified": true,
 *       "donated": true,
 *       "protocol": false
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Place not found"
 *   }
 */