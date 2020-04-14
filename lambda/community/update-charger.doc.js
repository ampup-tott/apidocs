/**
 * @api {get} /community/place/:place_id/charger/:charger_id Update Charger
 * @apiVersion 0.3.1
 * @apiName Update Charger
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription Update charger by user.
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {Number} place_id The id of Place
 * @apiParam {Number} charger_id The id of Charger
 * @apiParam {String} name The name of Charger
 * @apiParam {Number} level The level of plug (outlet)
 * @apiParam {Array} connectors List connectors
 * @apiParam {Number} [provider_id] The id of provider
 * @apiParam {String} [keywords] Keywords for Charger
 * @apiParam {json} [data] data of Charger
 * @apiParam {Boolean} [offline] is offline charger?
 * @apiParam {Boolean} [has_solar] is solar charger?
 * @apiParam {String} [photo] The url of photo of charger
 * @apiParam {String} [device_id] The id of user's device
 * @apiParam {String} [id_tag] The id for tag (Reservation)
 * @apiParam {String} [api_key] The api_key for Charging
 * @apiParam {String} [loc_id] The id of Location
 * @apiParam {String} [partner] The name of Partner
 * @apiParam {String} [protocol] The protocol of Charger
 * @apiParam {Number} [power] The power of Charger
 * @apiParamExample {json} Param Example
 *   {
 *       "name": "Little",
 *       "level": 3,
 *       "connectors": [
 *           {
 *               "outlet_id": 3,
 *               "port_id": "port_t"
 *           },
 *           {
 *               "outlet_id": 5,
 *               "port_id": "port_t"
 *           },
 *           {
 *               "outlet_id": 6,
 *               "port_id": "port_t"
 *           },
 *           {
 *               "outlet_id": 8,
 *               "port_id": "port_t"
 *           }
 *       ],
 *       "provider_id": 1,
 *       "keywords": "Little",
 *       "data": {
 *           "instruction": "Free free"
 *       },
 *       "offline": false,
 *       "has_solar": true,
 *       "photo": "",
 *       "device_id": "M1806E7TG",
 *       "id_tag": "tag_delta_id123",
 *       "api_key": "",
 *       "loc_id": "portid#3",
 *       "partner": "Delta",
 *       "protocol" : "ocpp",
 *       "power": 0
 *   }
 * @apiExample {curl} Curl example
 *   curl --request PUT \
 *     --url http://localhost:6969/community/place/4918/charger/6722 \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \
 *     --header 'content-type: application/json' \
 *     --data '{
 *       "name": "Little",
 *       "level": 3,
 *       "connectors": [
 *           {
 *               "outlet_id": 3,
 *               "port_id": "port_t"
 *           },
 *           {
 *               "outlet_id": 5,
 *               "port_id": "port_t"
 *           },
 *           {
 *               "outlet_id": 6,
 *               "port_id": "port_t"
 *           },
 *           {
 *               "outlet_id": 8,
 *               "port_id": "port_t"
 *           }
 *       ],
 *       "provider_id": 1,
 *       "keywords": "Little",
 *       "data": {
 *           "instruction": "Free free"
 *       },
 *       "offline": false,
 *       "has_solar": true,
 *       "photo": "",
 *       "device_id": "M1806E7TG",
 *       "id_tag": "tag_delta_id123",
 *       "api_key": "",
 *       "loc_id": "portid#3",
 *       "partner": "Delta",
 *       "protocol" : "ocpp",
 *       "power": 0
 *   }'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "name": "Little",
 *       "level": 3,
 *       "provider_id": 1,
 *       "data": {
 *         "photo": null
 *       },
 *       "keywords": "Little",
 *       "has_solar": true,
 *       "offline": false,
 *       "updated_at": 1585667692,
 *       "updated_by": 4007,
 *       "id": 6722,
 *       "price": 0,
 *       "place_id": 4918,
 *       "status": 1,
 *       "created_at": 1584605422,
 *       "restricted": null,
 *       "notes": null,
 *       "plugshare_charger_id": null,
 *       "restricted_reason": null,
 *       "created_by": null,
 *       "is_unpluggable": true,
 *       "plugs": [
 *         {
 *           "charger_id": 6722,
 *           "connector_id": null,
 *           "available": true,
 *           "status": 1,
 *           "created_at": 1585667692,
 *           "created_by": 4007,
 *           "power": 0,
 *           "id": 8502,
 *           "updated_at": null,
 *           "notes": null,
 *           "plugshare_outlet_id": null,
 *           "updated_by": null
 *         },
 *         {
 *           "charger_id": 6722,
 *           "connector_id": null,
 *           "available": true,
 *           "status": 1,
 *           "created_at": 1585667692,
 *           "created_by": 4007,
 *           "power": 0,
 *           "id": 8503,
 *           "updated_at": null,
 *           "notes": null,
 *           "plugshare_outlet_id": null,
 *           "updated_by": null
 *         },
 *         {
 *           "charger_id": 6722,
 *           "connector_id": null,
 *           "available": true,
 *           "status": 1,
 *           "created_at": 1585667692,
 *           "created_by": 4007,
 *           "power": 0,
 *           "id": 8504,
 *           "updated_at": null,
 *           "notes": null,
 *           "plugshare_outlet_id": null,
 *           "updated_by": null
 *         },
 *         {
 *           "charger_id": 6722,
 *           "connector_id": null,
 *           "available": true,
 *           "status": 1,
 *           "created_at": 1585667692,
 *           "created_by": 4007,
 *           "power": 0,
 *           "id": 8505,
 *           "updated_at": null,
 *           "notes": null,
 *           "plugshare_outlet_id": null,
 *           "updated_by": null
 *         }
 *       ]
 *     }
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} The cause of Error
 * @apiErrorExample Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Charger's id was missing or invalid!" 
 *   }
 * @apiErrorExample Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Charger's name was missing or invalid!" 
 *   }
 * @apiErrorExample Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Charger's price was missing or invalid!" 
 *   }
 * 
 * @apiErrorExample Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Please choose at least one plug for the charger!" 
 *   }
 * @apiErrorExample Error Example 5
 *   {
 *     "status": "FAIL",
 *     "reason": "There are reservations on this charger currently. Please cancel those reservations before editing charger." 
 *   }
 * @apiErrorExample Error Example 6
 *   {
 *     "status": "FAIL",
 *     "reason": "Changer not found or invalid Id" 
 *   }
 */