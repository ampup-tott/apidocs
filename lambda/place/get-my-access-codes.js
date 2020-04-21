/**
 * @api {GET} /get-my-access-codes Get Access Code
 * @apiVersion 0.3.1
 * @apiName Get Access Code
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Get Access Code
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/get-my-access-codes \
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
 *         "place_photo": "https://s3.amazonaws.com/ampup-dev/place_photos/4919/81EB2cCN.jpeg",
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
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */