/**
 * @api {post} /chargers Create Charger
 * @apiVersion 0.3.1
 * @apiName Create Charger
 * @apiGroup CHARGER
 * @apiPermission user
 * @apiDescription Create charger by user.
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {Number} place_id The id of Place
 * @apiParam {String} name The name of Charger
 * @apiParam {Number} price The price for charging per hour
 * @apiParam {Number} level The level of plug (outlet)
 * @apiParam {Array} connectors List connectors
 * @apiParam {Number} [provider_id] The id of provider
 * @apiParam {String} [keywords] Keywords for Charger
 * @apiParam {json} [data] data of Charger
 * @apiParam {Boolean} [restricted] is restricted charger?
 * @apiParam {Boolean} [has_solar] is solar charger?
 * @apiParamExample {json} Param Example
 *   {
 *       "name": "Little 2",
 *       "level": 3,
 *       "price": 0,
 *       "place_id": 4918,
 *       "connectors": [
 *          3, 5, 6, 8
 *       ],
 *       "provider_id": 1,
 *       "keywords": "Little 2",
 *       "data": {
 *           "instruction": "Free free free"
 *       },
 *       "restricted": true,
 *       "has_solar": true
 *   }
 * @apiExample {curl} Curl example
 *   curl --request POST \
 *     --url http://localhost:6969/chargers \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \
 *     --header 'content-type: application/json' \
 *     --data '{
 *       "name": "Little 2",
 *       "level": 3,
 *       "price": 0,
 *       "place_id": 4918,
 *       "connectors": [
 *           3,
 *           5,
 *           6,
 *           8
 *       ],
 *       "provider_id": 1,
 *       "keywords": "Little 2",
 *       "data": {
 *           "instruction": "Free free free"
 *       },
 *       "restricted": true,
 *       "has_solar": true
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
 *     "reason": "Please enter a name for your charger! It's helpful for you to recognize it later!" 
 *   }
 * @apiErrorExample Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Price was missing or invalid!" 
 *   }
 * @apiErrorExample Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Station ID was missing or invalid!" 
 *   }
 * 
 * @apiErrorExample Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Please choose at least one plug for the charger!" 
 *   }
 */