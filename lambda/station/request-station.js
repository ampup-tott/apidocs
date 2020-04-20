/**
 * @api {POST} /station/request-station Request Station
 * @apiVersion 0.3.1
 * @apiName Request Station
 * @apiGroup STATION
 * @apiPermission none
 * @apiDescription Request Station
 * @apiParam {string} email 
 * @apiParam {string} name 
 * @apiParam {string} address 
 * @apiParam {string} phone 
 * @apiParam {string} description 
 * @apiParam {string} charging_infra_type 
 * @apiParamExample {json} Params Example
 *   {
 *     "email": "ampup.tott@gmail.com",
 *     "name": "Abel Tran",
 *     "address": "15 Do Ngoc Thanh",
 *     "phone": "xxxx-xxx-xxx",
 *     "description": "TEST",
 *     "charging_infra_type": 1
 *   }
 * @apiExample {curl} Curl example
 *  curl --request POST \
 *     --url http://localhost:6969/station/request-station \
 *     --header 'content-type: application/json' \
 *     --data '{
 *       "email": "ampup.tott@gmail.com",
 *       "name": "Abel Tran",
 *       "address": "15 Do Ngoc Thanh",
 *       "phone": "xxxx-xxx-xxx",
 *       "description": "TEST",
 *       "charging_infra_type": 1
 *     }
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "name": "Abel Tran",
 *       "email": "ampup.tott@gmail.com",
 *       "description": "TEST",
 *       "charging_infra_type": "1",
 *       "status": 1,
 *       "created_at": 1587370523,
 *       "updated_at": 1587370523,
 *       "address": "15 Do Ngoc Thach",
 *       "id": 4,
 *       "user_id": null,
 *       "phone": "xxxx-xxx-xxx"
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Please enter your name!"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Please enter short description!"
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Please enter your email!"
 *   }
 * @apiErrorExample {json} Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Please enter charging infra type!"
 *   }
 */