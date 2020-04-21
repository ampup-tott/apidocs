/**
 * @api {GET} /places/:id/charger Get Chargers
 * @apiVersion 0.3.1
 * @apiName Get Chargers
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Get Chargers
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} id The id of Place
 * @apiParam {boolean} is_plug 
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 4918,
 *     "is_plug": true
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/places/4918/charger?is_plug=true \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 6734,
 *         "name": "Little 2",
 *         "level": 3,
 *         "is_unpluggable": true,
 *         "plug_type": "J1772",
 *         "outlet_id": 8511,
 *         "next_reservation": null
 *       },
 *       {
 *         "id": 6734,
 *         "name": "Little 2",
 *         "level": 3,
 *         "is_unpluggable": true,
 *         "plug_type": "CHAdeMO",
 *         "outlet_id": 8512,
 *         "next_reservation": null
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */