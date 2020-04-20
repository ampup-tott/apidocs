/**
 * @api {GET} /vehicles/:id Get Vehicle
 * @apiVersion 0.3.1
 * @apiName Get Vehicle
 * @apiGroup VEHICLE
 * @apiPermission user
 * @apiDescription Get Vehicle
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} id The id of Vehicle
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 1
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/vehicles/1 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "id": 1,
 *       "maker_id": 1,
 *       "model": "A3 Sportback e-tron",
 *       "year": "2016",
 *       "color": "Ibis White,Brilliant Black,Glacier White Metallic,Florett Silver Metallic, Monsoon Gray Metallic, Dakota Gray Metallic ,Mythos Black Metallic,,Scuba Blue Metallic,Misano Red Pearl",
 *       "keywords": "Audi A3 Sportback e-tron 2016",
 *       "status": 1,
 *       "created_at": 1548330549,
 *       "updated_at": 1548330549,
 *       "photo": "https://s3.amazonaws.com/ucassets/car/vehicle/Audi/Audi_A3Sportbacketron_BrilliantBlack.png",
 *       "connector_id": 3,
 *       "connectors": [
 *         {
 *           "id": 3,
 *           "name": "J1772",
 *           "level": 2,
 *           "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-J1772-v1.png"
 *         }
 *       ],
 *       "colors": [
 *         {
 *           "id": 1,
 *           "name": "Ibis White"
 *         },
 *         {
 *           "id": 2,
 *           "name": "Brilliant Black"
 *         },
 *         {
 *           "id": 3,
 *           "name": "Glacier White Metallic"
 *         },
 *         {
 *           "id": 4,
 *           "name": "Florett Silver Metallic"
 *         },
 *         {
 *           "id": 5,
 *           "name": " Monsoon Gray Metallic"
 *         },
 *         {
 *           "id": 6,
 *           "name": " Dakota Gray Metallic "
 *         },
 *         {
 *           "id": 7,
 *           "name": "Mythos Black Metallic"
 *         },
 *         {
 *           "id": 8,
 *           "name": ""
 *         },
 *         {
 *           "id": 9,
 *           "name": "Scuba Blue Metallic"
 *         },
 *         {
 *           "id": 10,
 *           "name": "Misano Red Pearl"
 *         }
 *       ]
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */