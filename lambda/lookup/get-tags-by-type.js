/**
 * @api {GET} /tags Get Tags by type
 * @apiVersion 0.3.1
 * @apiName Get Tags by type
 * @apiGroup LOOKUP
 * @apiPermission none
 * @apiDescription Get Tags by type
 * @apiParam {number} type 
 * @apiParamExample {json} Params Example
 *   {
 *     "type": 1
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/tags?type=1 \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 1,
 *         "value": "Charger cannot be found",
 *         "display_no": 1
 *       },
 *       {
 *         "id": 2,
 *         "value": "Charger does not work",
 *         "display_no": 2
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */