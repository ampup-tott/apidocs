/**
 * @api {POST} /vehicles Create Vehicle
 * @apiVersion 0.3.1
 * @apiName Create Vehicle
 * @apiGroup VEHICLE
 * @apiPermission user
 * @apiDescription Create Vehicle
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} maker_id The id of Maker
 * @apiParam {string} model 
 * @apiParam {string} year 
 * @apiParam {string} color The color of Vehicle
 * @apiParam {string} photo The url of photo
 * @apiParam {number} connector_id The id of connector
 * @apiParamExample {json} Params Example
 *   {
 *     "maker_id": 23,
 *     "model": "Model S 85",
 *     "year": "2013",
 *     "color": "Matte Purple",
 *     "photo": "https://s3.amazonaws.com/ucassets/car/vehicle/Tesla/Tesla.png",
 *     "connector_id": 8
 *   }
 * @apiExample {curl} Curl example
 *  curl --request POST \
 *     --url http://localhost:6969/vehicles \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 *     --data '{
 *       "maker_id": 23,
 *       "model": "Model S 85",
 *       "year": "2013",
 *       "color": "Matte Purple",
 *       "photo": "https://s3.amazonaws.com/ucassets/car/vehicle/Tesla/Tesla.png",
 *       "connector_id": 8
 *     }
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "id": 167,
 *       "maker_id": 23,
 *       "model": "Model S 85",
 *       "year": "2013",
 *       "color": "Matte Purple",
 *       "keywords": "Tesla Model S 85 2013",
 *       "status": 1,
 *       "created_at": 1558401230,
 *       "updated_at": null,
 *       "photo": "https://s3.amazonaws.com/ucassets/car/vehicle/Tesla/imgTeslaMattePurple%403x.jpg",
 *       "connector_id": 8,
 *       "connectors": [
 *         {
 *           "id": 167,
 *           "vehicle_id": 167,
 *           "connector_id": 8,
 *           "status": 1,
 *           "created_at": 1558401995,
 *           "updated_at": null
 *         }
 *       ]
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: maker_id"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: model"
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: connector_id"
 *   }
 */