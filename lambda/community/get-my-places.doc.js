/**
 * @api {get} /community/me/places Get My Place
 * @apiVersion 0.3.1
 * @apiName Get My Place
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription Get places of user.
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiExample {curl} Curl example
 *   curl --request GET \
 *     --url http://localhost:6969/community/me/places \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccessExample Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 4918,
 *         "name": "Tui test",
 *         "address": "15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam",
 *         "lat": 10.7517033,
 *         "lng": 106.6558611,
 *         "user_id": 4007,
 *         "keywords": "Tui Test, Do Ngoc Thanh, Abel",
 *         "status": 1,
 *         "created_at": 1584605422,
 *         "updated_at": 1585635979,
 *         "data": {
 *           "price": 0
 *         },
 *         "coordinate": null,
 *         "phone": "0355933881",
 *         "notes": null,
 *         "plugshare_place_id": null,
 *         "offline": false,
 *         "rating": 0,
 *         "reviews": null,
 *         "created_by": null,
 *         "updated_by": 4007,
 *         "verified": true,
 *         "donated": true,
 *         "protocol": false,
 *         "photo_url": "https://s3.amazonaws.com/ampup-dev/place_photos/4918/kzPPyZJc.jpeg"
 *       }
 *     ]
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */