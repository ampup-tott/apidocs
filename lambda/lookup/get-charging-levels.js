/**
 * @api {GET} /charging-levels Find Charging Levels
 * @apiVersion 0.3.1
 * @apiName Find Charging Levels
 * @apiGroup LOOKUP
 * @apiPermission none
 * @apiDescription Find Charging Levels
 * @apiParamExample {json} Params Example
 *   {}
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/charging-levels \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 1,
 *         "name": "Level 1",
 *         "photo": "https://chargehub.com/img/Level1-Outlet.jpg",
 *         "marker": "https://chargehub.com/markers/high_res/l1.png",
 *         "power": "1 kW",
 *         "notes": "The Level 1 is the standard wall outlet. It is the slowest charge level. Several hours are required to fully charge a vehicle.",
 *         "charging_time": "8 to 15 hours",
 *         "status": 1,
 *         "created_at": 1577426456,
 *         "updated_at": 1577426456
 *       },
 *       {
 *         "id": 2,
 *         "name": "Level 2",
 *         "photo": "https://chargehub.com/img/Level2-Station.jpg",
 *         "marker": "https://chargehub.com/markers/high_res/l2.png",
 *         "power": "3 to 20, typically 6 kW",
 *         "notes": "The Level 2 is the typical EV plug you'll install in your garage for example. Many public charging stations are Level 2. RV plugs are also considered Level 2's.",
 *         "charging_time": "3 to 8 hours",
 *         "status": 1,
 *         "created_at": 1577426456,
 *         "updated_at": 1577426456
 *       },
 *       {
 *         "id": 3,
 *         "name": "Level 3 (BRCC)",
 *         "photo": "https://chargehub.com/img/Level3-Station.jpg",
 *         "marker": "https://chargehub.com/markers/high_res/l3.png",
 *         "power": "Typically 50, occasionaly 20 kW",
 *         "notes": "Finally, there is the Level 3, commonly called the DCFC or DC Fast Charge. These charging stations are the quickest means to recharge a vehicle.",
 *         "charging_time": "20 min to 1 hour",
 *         "status": 1,
 *         "created_at": 1577426456,
 *         "updated_at": 1577426456
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */