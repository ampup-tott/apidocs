/**
 * @api {GET} /search/places Get Places By Name
 * @apiVersion 0.3.1
 * @apiName Get Places By Name
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Get Places By Name
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {string} name The name of Place
 * @apiParamExample {json} Params Example
 *   {
 *     "name": "Tui"
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/search/places?name=Tui \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 4918,
 *         "name": "Tui test",
 *         "address": "15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam",
 *         "data": {
 *           "price": 0
 *         },
 *         "lat": 10.7517033,
 *         "lng": 106.6558611,
 *         "user_id": 4007,
 *         "chargers": [
 *           {
 *             "charger_id": 6734,
 *             "charger_price": 0,
 *             "charger_data": {
 *               "instruction": "Free free free"
 *             },
 *             "plugs": [
 *               {
 *                 "outlet_id": 8511,
 *                 "available": true,
 *                 "connector_id": 3,
 *                 "connector_name": "J1772",
 *                 "connector_level": 2,
 *                 "connector_photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-J1772-v1.png",
 *                 "connector_power": 6.6
 *               }
 *             ]
 *           },
 *           {
 *             "charger_id": 6722,
 *             "charger_price": 0,
 *             "charger_data": {
 *               "description": "Come in say Hi! "
 *             },
 *             "plugs": [
 *               {
 *                 "outlet_id": 8481,
 *                 "available": true,
 *                 "connector_id": 5,
 *                 "connector_name": "CHAdeMO",
 *                 "connector_level": 3,
 *                 "connector_photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-CHAdeMO-v1.png",
 *                 "connector_power": 50
 *               },
 *               {
 *                 "outlet_id": 8482,
 *                 "available": true,
 *                 "connector_id": 5,
 *                 "connector_name": "CHAdeMO",
 *                 "connector_level": 3,
 *                 "connector_photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-CHAdeMO-v1.png",
 *                 "connector_power": 50
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