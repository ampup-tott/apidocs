/**
 * @api {GET} /:place_id/get-all-access-codes Get All Access Code
 * @apiVersion 0.3.1
 * @apiName Get All Access Code
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Get All Access Code
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} place_id 
 * @apiParamExample {json} Params Example
 *   {
 *     "place_id": 4919
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/4919/get-all-access-codes \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "access_code_id": 307,
 *         "access_code": "1234",
 *         "price": 0,
 *         "place_id": 4919,
 *         "place_name": "ampUp Vietnam",
 *         "place_address": "290 An Dương Vương, Phường 4, Quận 5, Hồ Chí Minh, Việt Nam",
 *         "restriction_id": 169,
 *         "time_start": 1586448000,
 *         "time_end": 1586473200,
 *         "day_orders": [
 *           1,
 *           2,
 *           3,
 *           4
 *         ],
 *         "day_of_weeks": [
 *           "Monday",
 *           "Tuesday",
 *           "Wednesday",
 *           "Thursday"
 *         ]
 *       },
 *       {
 *         "access_code_id": 306,
 *         "access_code": "121",
 *         "price": 3,
 *         "place_id": 4919,
 *         "place_name": "ampUp Vietnam",
 *         "place_address": "290 An Dương Vương, Phường 4, Quận 5, Hồ Chí Minh, Việt Nam",
 *         "restriction_id": 168,
 *         "time_start": 1586318400,
 *         "time_end": 1586374200,
 *         "day_orders": [
 *           0,
 *           1,
 *           2,
 *           3,
 *           4,
 *           5,
 *           6
 *         ],
 *         "day_of_weeks": [
 *           "Sunday",
 *           "Monday",
 *           "Tuesday",
 *           "Wednesday",
 *           "Thursday",
 *           "Friday",
 *           "Saturday"
 *         ]
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */