/**
 * @api {post} /community/place/:place_id/chargers Create Charger
 * @apiVersion 0.3.1
 * @apiName Create Charger
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription Create charger by user.
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {Number} place_id The id of Place
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
 *       "name": "Little 2",
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
 *       "keywords": "Little 2",
 *       "data": {
 *           "instruction": "Free free free"
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
 *   curl --request POST \
 *     --url https://api-dev.uptimecharge.com/community/place/4918/chargers \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \
 *     --header 'content-type: application/json' \
 *     --data '{
 *       "name": "Little 2",
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
 *       "keywords": "Little 2",
 *       "data": {
 *           "instruction": "Free free free"
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
 *       "name": "Little 2",
 *       "price": 0,
 *       "level": 3,
 *       "place_id": 4918,
 *       "provider_id": 1,
 *       "data": {
 *         "instruction": "Free free free"
 *       },
 *       "keywords": "Little 2",
 *       "has_solar": true,
 *       "offline": false,
 *       "status": 1,
 *       "created_at": 1585674139,
 *       "id": 6732,
 *       "updated_at": null,
 *       "restricted": null,
 *       "notes": null,
 *       "plugshare_charger_id": null,
 *       "restricted_reason": null,
 *       "created_by": null,
 *       "updated_by": null,
 *       "is_unpluggable": true,
 *       "plugs": [
 *         {
 *           "charger_id": 6732,
 *           "connector_id": null,
 *           "available": true,
 *           "status": 1,
 *           "created_at": 1585674139,
 *           "created_by": 4007,
 *           "power": 0,
 *           "id": 8506,
 *           "updated_at": null,
 *           "notes": null,
 *           "plugshare_outlet_id": null,
 *           "updated_by": null
 *         },
 *         {
 *           "charger_id": 6732,
 *           "connector_id": null,
 *           "available": true,
 *           "status": 1,
 *           "created_at": 1585674139,
 *           "created_by": 4007,
 *           "power": 0,
 *           "id": 8507,
 *           "updated_at": null,
 *           "notes": null,
 *           "plugshare_outlet_id": null,
 *           "updated_by": null
 *         },
 *         {
 *           "charger_id": 6732,
 *           "connector_id": null,
 *           "available": true,
 *           "status": 1,
 *           "created_at": 1585674139,
 *           "created_by": 4007,
 *           "power": 0,
 *           "id": 8508,
 *           "updated_at": null,
 *           "notes": null,
 *           "plugshare_outlet_id": null,
 *           "updated_by": null
 *         },
 *         {
 *           "charger_id": 6732,
 *           "connector_id": null,
 *           "available": true,
 *           "status": 1,
 *           "created_at": 1585674139,
 *           "created_by": 4007,
 *           "power": 0,
 *           "id": 8509,
 *           "updated_at": null,
 *           "notes": null,
 *           "plugshare_outlet_id": null,
 *           "updated_by": null
 *         }
 *       ],
 *       "schedules": [
 *         {
 *           "charger_id": 6732,
 *           "day_of_week": "Sunday",
 *           "day_order": 0,
 *           "time_start": 1572566400,
 *           "time_end": 1572652800,
 *           "status": 1,
 *           "created_at": 1585674139,
 *           "id": 45508,
 *           "updated_at": null
 *         },
 *         {
 *           "charger_id": 6732,
 *           "day_of_week": "Monday",
 *           "day_order": 1,
 *           "time_start": 1572566400,
 *           "time_end": 1572652800,
 *           "status": 1,
 *           "created_at": 1585674139,
 *           "id": 45509,
 *           "updated_at": null
 *         },
 *         {
 *           "charger_id": 6732,
 *           "day_of_week": "Tuesday",
 *           "day_order": 2,
 *           "time_start": 1572566400,
 *           "time_end": 1572652800,
 *           "status": 1,
 *           "created_at": 1585674139,
 *           "id": 45510,
 *           "updated_at": null
 *         },
 *         {
 *           "charger_id": 6732,
 *           "day_of_week": "Wednesday",
 *           "day_order": 3,
 *           "time_start": 1572566400,
 *           "time_end": 1572652800,
 *           "status": 1,
 *           "created_at": 1585674139,
 *           "id": 45511,
 *           "updated_at": null
 *         },
 *         {
 *           "charger_id": 6732,
 *           "day_of_week": "Thursday",
 *           "day_order": 4,
 *           "time_start": 1572566400,
 *           "time_end": 1572652800,
 *           "status": 1,
 *           "created_at": 1585674139,
 *           "id": 45512,
 *           "updated_at": null
 *         },
 *         {
 *           "charger_id": 6732,
 *           "day_of_week": "Friday",
 *           "day_order": 5,
 *           "time_start": 1572566400,
 *           "time_end": 1572652800,
 *           "status": 1,
 *           "created_at": 1585674139,
 *           "id": 45513,
 *           "updated_at": null
 *         },
 *         {
 *           "charger_id": 6732,
 *           "day_of_week": "Saturday",
 *           "day_order": 6,
 *           "time_start": 1572566400,
 *           "time_end": 1572652800,
 *           "status": 1,
 *           "created_at": 1585674139,
 *           "id": 45514,
 *           "updated_at": null
 *         }
 *       ]
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} The cause of Error
 * @apiErrorExample Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Please enter a name for your charger!" 
 *   }
 * @apiErrorExample Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Charger's level was missing or invalid!" 
 *   }
 * @apiErrorExample Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Please choose at least one plug for the charger!" 
 *   }
 * 
 * @apiErrorExample Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Place not found or invalid Id" 
 *   }
 */