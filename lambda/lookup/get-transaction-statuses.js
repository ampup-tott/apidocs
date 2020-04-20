/**
 * @api {GET} /transaction-statuses Get Transaction Statuses
 * @apiVersion 0.3.1
 * @apiName Get Transaction Statuses
 * @apiGroup LOOKUP
 * @apiPermission none
 * @apiDescription Get Transaction Statuses
 * @apiParamExample {json} Params Example
 *   {}
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/transaction-statuses \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 1,
 *         "name": "Pending",
 *         "desc": "Pending if charged later, or Authorized if captured later",
 *         "status": 1,
 *         "created_at": 1547222566,
 *         "updated_at": 1547222566
 *       },
 *       {
 *         "id": 2,
 *         "name": "Success",
 *         "desc": "Success if charged later, or Captured if the charge has been authorized before",
 *         "status": 1,
 *         "created_at": 1547222566,
 *         "updated_at": 1547222566
 *       },
 *       {
 *         "id": 3,
 *         "name": "Failed",
 *         "desc": "If there is anything failed",
 *         "status": 1,
 *         "created_at": 1547222566,
 *         "updated_at": 1547222566
 *       },
 *       {
 *         "id": 4,
 *         "name": "Canceled",
 *         "desc": "In case the user has canceled the reservation before charge time",
 *         "status": 1,
 *         "created_at": 1547222566,
 *         "updated_at": 1547222566
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */