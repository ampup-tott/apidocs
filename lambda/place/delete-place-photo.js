/**
 * @api {DELETE} /place-photos/:id Delete Place Photo
 * @apiVersion 0.3.1
 * @apiName Delete Place Photo
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Delete Place Photo
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} id The id of Photo
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 733
 *   }
 * @apiExample {curl} Curl example
 *  curl --request DELETE \
 *     --url http://localhost:6969/place-photos/733 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "status": 0,
 *       "updated_at": "1587443322",
 *       "id": 733,
 *       "place_id": 4689,
 *       "photo_url": "https://s3.amazonaws.com/ampup-dev/place_photos/4689/2bS9WtT0.png",
 *       "created_at": "1587441667"
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example
 *   {
 *     "status": "FAIL",
 *     "reason": "Place Id was missing or invalid!"
 *   }
 */