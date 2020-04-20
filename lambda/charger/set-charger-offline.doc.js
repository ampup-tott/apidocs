/**
 * @api {PUT} /chargers/:id/offline Set Charger Offline
 * @apiVersion 0.3.1
 * @apiName Set Charger Offline
 * @apiGroup CHARGER
 * @apiPermission user
 * @apiDescription Set Charger Offline
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {boolean} offline is offline charger?
 * @apiParamExample {json} Params Example
 *   {
 *     "offline": true
 *   }
 * @apiExample {curl} Curl example
 *  curl --request PUT \
 *     --url http://localhost:6969/chargers/6722/offline \
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
 *       "offline": false,
 *       "updated_at": 1587384142,
 *       "updated_by": 4007,
 *       "id": 6722,
 *       "data": {
 *         "description": "Come in say Hi! "
 *       },
 *       "keywords": "Little",
 *       "price": 0,
 *       "place_id": 4918,
 *       "status": 1,
 *       "created_at": 1584605422,
 *       "provider_id": 1,
 *       "name": "Litle",
 *       "level": 3,
 *       "restricted": null,
 *       "has_solar": true,
 *       "notes": null,
 *       "plugshare_charger_id": null,
 *       "restricted_reason": null,
 *       "created_by": null,
 *       "is_unpluggable": true
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Charger not found"
 *   }
 */