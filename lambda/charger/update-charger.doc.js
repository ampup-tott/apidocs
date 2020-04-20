/**
 * @api {PUT} /chargers/:id Update Charger
 * @apiVersion 0.3.1
 * @apiName Update Charger
 * @apiGroup CHARGER
 * @apiPermission user
 * @apiDescription Update Charger
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {undefined} undefined undefined
 * @apiParam {string} name The name of Place
 * @apiParam {string} address 
 * @apiParam {string} phone 
 * @apiParam {number} lat The Latitude
 * @apiParam {number} lng The Longitude
 * @apiParam {number} user_id The id of user
 * @apiParam {string} keywords 
 * @apiParam {boolean} offline is offline charger?
 * @apiParam {object} data 
 * @apiParam {array} chargers The data of chargers
 * @apiParamExample {json} Params Example
 *   {
 *     "name": "Litle",
 *     "address": "ABC",
 *     "phone": "2174199960",
 *     "lat": 10.2,
 *     "lng": 102,
 *     "user_id": 24,
 *     "keywords": null,
 *     "data": {
 *       "description": "Come in say Hi! "
 *     },
 *     "chargers": [
 *       {
 *         "id": 2482,
 *         "data": {
 *           "instruction": ""
 *         },
 *         "name": "Litle",
 *         "level": 2,
 *         "price": 0,
 *         "offline": false,
 *         "keywords": null,
 *         "has_solar": false,
 *         "connectors": [
 *           3
 *         ],
 *         "restricted": false
 *       }
 *     ]
 *   }
 * @apiExample {curl} Curl example
 *  curl --request PUT \
 *     --url http://localhost:6969/chargers/6722 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 *     --data '{
 *       "lat": 10.2,
 *       "lng": 102,
 *       "data": {
 *         "description": "Come in say Hi! "
 *       },
 *       "name": "Litle",
 *       "phone": "2174199960",
 *       "address": "ABC",
 *       "user_id": 24,
 *       "chargers": [
 *         {
 *           "id": 2482,
 *           "data": {
 *             "instruction": ""
 *           },
 *           "name": "Litle",
 *           "level": 2,
 *           "price": 0,
 *           "offline": false,
 *           "keywords": null,
 *           "has_solar": false,
 *           "connectors": [
 *             3
 *           ],
 *           "restricted": false
 *         }
 *       ],
 *       "keywords": null
 *     }
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "name": "Litle",
 *       "price": 0,
 *       "level": 3,
 *       "provider_id": 1,
 *       "data": {
 *         "description": "Come in say Hi! "
 *       },
 *       "keywords": "Little",
 *       "restricted": null,
 *       "has_solar": true,
 *       "updated_at": 1587383541,
 *       "id": 6722,
 *       "place_id": 4918,
 *       "status": 1,
 *       "created_at": 1584605422,
 *       "notes": null,
 *       "plugshare_charger_id": null,
 *       "offline": false,
 *       "restricted_reason": null,
 *       "created_by": null,
 *       "updated_by": 4007,
 *       "is_unpluggable": true,
 *       "plugs": [
 *         {
 *           "id": 8504,
 *           "charger_id": 6722,
 *           "connector_id": null,
 *           "available": true,
 *           "status": 1,
 *           "created_at": 1585667692,
 *           "updated_at": null,
 *           "notes": null,
 *           "plugshare_outlet_id": null,
 *           "created_by": 4007,
 *           "updated_by": null,
 *           "power": 0
 *         },
 *         {
 *           "id": 8505,
 *           "charger_id": 6722,
 *           "connector_id": null,
 *           "available": true,
 *           "status": 1,
 *           "created_at": 1585667692,
 *           "updated_at": null,
 *           "notes": null,
 *           "plugshare_outlet_id": null,
 *           "created_by": 4007,
 *           "updated_by": null,
 *           "power": 0
 *         },
 *         {
 *           "id": 8502,
 *           "charger_id": 6722,
 *           "connector_id": null,
 *           "available": false,
 *           "status": 1,
 *           "created_at": 1585667692,
 *           "updated_at": null,
 *           "notes": null,
 *           "plugshare_outlet_id": null,
 *           "created_by": 4007,
 *           "updated_by": null,
 *           "power": 0
 *         },
 *         {
 *           "id": 8503,
 *           "charger_id": 6722,
 *           "connector_id": null,
 *           "available": true,
 *           "status": 1,
 *           "created_at": 1585667692,
 *           "updated_at": null,
 *           "notes": null,
 *           "plugshare_outlet_id": null,
 *           "created_by": 4007,
 *           "updated_by": null,
 *           "power": 0
 *         }
 *       ]
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Charger was not found"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Price value is invalid!"
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Charger's level is invalid!"
 *   }
 */