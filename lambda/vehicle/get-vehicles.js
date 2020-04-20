/**
 * @api {GET} /vehicles Get Vehicles
 * @apiVersion 0.3.1
 * @apiName Get Vehicles
 * @apiGroup VEHICLE
 * @apiPermission user
 * @apiDescription Get Vehicles
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/vehicles \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 65,
 *         "maker_id": 16,
 *         "maker_name": "Mercedes-Benz",
 *         "maker_logo": "https://cdn.motor1.com/images/mkt/z7/s1/mercedes-benz2.png",
 *         "model": "C350e Plug-in Hybrid",
 *         "year": "2016",
 *         "color": "Black,Designo Cashmere White Magno,Polar White,Obsidian Black Metallic,Designo Selenite Grey Magno Matte,Iridium Silver Metallic,Dakota Brown Metallic,Lunar Blue Metallic,Brilliant Blue Metallic,Diamond Silver Metallic,Selenite Grey Metallic,Brilliant Blue Metallic,Diamond Silver Metallic,Selenite Grey Metallic,Designo Cardinal Red Metallic,Designo Cardinal Red Metallic",
 *         "photo": "https://s3.amazonaws.com/ucassets/car/vehicle/Mercedes_C350e/Mercedes_C350e.png",
 *         "keywords": "Mercedes C350e Plug-in Hybrid 2016",
 *         "connector_id": 3,
 *         "colors": [
 *           {
 *             "id": 1,
 *             "name": "Black"
 *           },
 *           {
 *             "id": 2,
 *             "name": "Designo Cashmere White Magno"
 *           },
 *           {
 *             "id": 3,
 *             "name": "Polar White"
 *           },
 *           {
 *             "id": 4,
 *             "name": "Obsidian Black Metallic"
 *           },
 *           {
 *             "id": 5,
 *             "name": "Designo Selenite Grey Magno Matte"
 *           },
 *           {
 *             "id": 6,
 *             "name": "Iridium Silver Metallic"
 *           },
 *           {
 *             "id": 7,
 *             "name": "Dakota Brown Metallic"
 *           },
 *           {
 *             "id": 8,
 *             "name": "Lunar Blue Metallic"
 *           },
 *           {
 *             "id": 9,
 *             "name": "Brilliant Blue Metallic"
 *           },
 *           {
 *             "id": 10,
 *             "name": "Diamond Silver Metallic"
 *           },
 *           {
 *             "id": 11,
 *             "name": "Selenite Grey Metallic"
 *           },
 *           {
 *             "id": 12,
 *             "name": "Brilliant Blue Metallic"
 *           },
 *           {
 *             "id": 13,
 *             "name": "Diamond Silver Metallic"
 *           },
 *           {
 *             "id": 14,
 *             "name": "Selenite Grey Metallic"
 *           },
 *           {
 *             "id": 15,
 *             "name": "Designo Cardinal Red Metallic"
 *           },
 *           {
 *             "id": 16,
 *             "name": "Designo Cardinal Red Metallic"
 *           }
 *         ]
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */