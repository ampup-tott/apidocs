/**
 * @api {GET} /places Get Places
 * @apiVersion 0.3.1
 * @apiName Get Places
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Get Places
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {string} connectors The list ids of connectors
 * @apiParamExample {json} Params Example
 *   {
 *     "connectors": "3,4"
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/places?connectors=3%2C4 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "place_id": 126,
 *         "place_name": "NTMK",
 *         "place_address": "275 Điện Biên Phủ, Phường 7, Quận 3, Hồ Chí Minh, Vietnam",
 *         "place_data": {
 *           "description": ""
 *         },
 *         "lat": 10.7789931,
 *         "lng": 106.6872621,
 *         "user_id": 18,
 *         "chargers": [
 *           {
 *             "charger_id": 97,
 *             "charger_price": 1.655,
 *             "charger_data": {
 *               "instruction": ""
 *             },
 *             "plugs": [
 *               {
 *                 "outlet_id": 147,
 *                 "available": true,
 *                 "connector_id": 3,
 *                 "connector_name": "J1772",
 *                 "connector_level": 2,
 *                 "connector_photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-J1772-v1.png",
 *                 "connector_power": 6.6
 *               },
 *               {
 *                 "outlet_id": 149,
 *                 "available": true,
 *                 "connector_id": 4,
 *                 "connector_name": "Nema 1450",
 *                 "connector_level": 2,
 *                 "connector_photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Nema-1450-v1.png",
 *                 "connector_power": 6.6
 *               }
 *             ]
 *           }
 *         ]
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */