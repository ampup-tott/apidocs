/**
 * @api {PUT} /reports/places/issues Set Place Issue
 * @apiVersion 0.3.1
 * @apiName Set Place Issue
 * @apiGroup REPORT
 * @apiPermission user
 * @apiDescription Set Place Issue
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} id The id of Report
 * @apiParam {number} status 
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 20,
 *     "status": 1
 *   }
 * @apiExample {curl} Curl example
 *  curl --request PUT \
 *     --url http://localhost:6969/reports/places/issues \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 *     --data '{
 *       "id": 20,
 *       "status": 1
 *     }
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "status": 1,
 *       "updated_at": "1587375625",
 *       "updated_by": 4007,
 *       "id": "20",
 *       "place_id": 61,
 *       "issue": "yewywgdgdvd gdbxbxbxbsbsbsbs bzzvgssggsgsg yehwhdgshdbdhf yeheheheh ydbdhdhdhd \neywywwhh",
 *       "created_by": 70,
 *       "created_at": "1565841808"
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Data not found"
 *   }
 */