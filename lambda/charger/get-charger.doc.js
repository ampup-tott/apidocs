/**
 * @api {GET} /chargers/:id Get A Charger
 * @apiVersion 0.3.1
 * @apiName Get A Charger
 * @apiGroup CHARGER
 * @apiPermission user
 * @apiDescription Get A Charger
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} id The id of Charger
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 6734
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/chargers/6734 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 45,
 *         "name": "Dabaitu",
 *         "level": null,
 *         "data": null,
 *         "keywords": null,
 *         "restricted": null,
 *         "has_solar": null,
 *         "price": null,
 *         "place_id": 60,
 *         "place_name": "Dabaitu",
 *         "place_address": "1243 Torrance Ave, Sunnyvale, CA 94089, USA",
 *         "lat": 37.393985748291,
 *         "lng": -121.99072265625
 *       }
 *     ]
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
 */