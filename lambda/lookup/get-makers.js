/**
 * @api {GET} /makers Get Makers
 * @apiVersion 0.3.1
 * @apiName Get Makers
 * @apiGroup LOOKUP
 * @apiPermission none
 * @apiDescription Get Makers
 * @apiParamExample {json} Params Example
 *   {}
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/makers \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 1,
 *         "name": "Audi",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 2,
 *         "name": "BMW",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 3,
 *         "name": "BYD",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 4,
 *         "name": "CODA",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 5,
 *         "name": "Cadillac",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 6,
 *         "name": "Chevrolet",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 7,
 *         "name": "Chrysler",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 8,
 *         "name": "Citroen",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 9,
 *         "name": "Fiat",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 10,
 *         "name": "Fisker",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 11,
 *         "name": "Ford",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 12,
 *         "name": "Honda",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 13,
 *         "name": "Hyundai",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 14,
 *         "name": "Kia",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 15,
 *         "name": "MINI",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 17,
 *         "name": "Mitsubishi",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 18,
 *         "name": "Motorcycles",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 19,
 *         "name": "Nissan",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 20,
 *         "name": "Porsche",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 21,
 *         "name": "Renault",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 22,
 *         "name": "Daimler AG",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 23,
 *         "name": "Tesla",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 24,
 *         "name": "Think Global",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 25,
 *         "name": "Toyota",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 26,
 *         "name": "Volkswagen",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 27,
 *         "name": "Volvo",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 28,
 *         "name": "Jaguar Land Rover",
 *         "logo": null,
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 65,
 *         "name": "Aston Martin",
 *         "logo": "https://cdn.motor1.com/images/mkt/0W/s1/aston-martin2.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 66,
 *         "name": "Buick",
 *         "logo": "https://cdn.motor1.com/images/mkt/xoy/s1/buick4.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 67,
 *         "name": "Byton",
 *         "logo": "https://cdn.motor1.com/images/mkt/xpv/s1/byton.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 68,
 *         "name": "Citroën",
 *         "logo": "https://cdn.motor1.com/images/mkt/1K/s1/citroen2.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 69,
 *         "name": "Daimler",
 *         "logo": "https://cdn.motor1.com/images/mkt/GW1/s1/daimler1.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 70,
 *         "name": "Dodge",
 *         "logo": "https://cdn.motor1.com/images/mkt/L3W/s1/dodge2.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 71,
 *         "name": "Faraday Future",
 *         "logo": "https://cdn.motor1.com/images/mkt/R6r/s1/faraday1.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 72,
 *         "name": "Ferrari",
 *         "logo": "https://cdn.motor1.com/images/mkt/8W/s1/ferrari5.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 73,
 *         "name": "Geely",
 *         "logo": "https://cdn.motor1.com/images/mkt/mqP/s1/geely.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 74,
 *         "name": "General Motors",
 *         "logo": "https://cdn.motor1.com/images/mkt/vJ4/s1/general-motors2.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 75,
 *         "name": "Infiniti",
 *         "logo": "https://cdn.motor1.com/images/mkt/rnP/s1/infiniti2.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 76,
 *         "name": "Jaguar",
 *         "logo": "https://cdn.motor1.com/images/mkt/JQ/s1/jaguar2.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 77,
 *         "name": "Jeep",
 *         "logo": "https://cdn.motor1.com/images/mkt/LW/s1/jeep3.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 78,
 *         "name": "Karma",
 *         "logo": "https://cdn.motor1.com/images/mkt/EWN/s1/karma2.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 79,
 *         "name": "Koenigsegg",
 *         "logo": "https://cdn.motor1.com/images/mkt/99g/s1/koenigsegg5.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 80,
 *         "name": "Lexus",
 *         "logo": "https://cdn.motor1.com/images/mkt/rX/s1/lexus2.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 81,
 *         "name": "Lotus",
 *         "logo": "https://cdn.motor1.com/images/mkt/Ye/s1/lotus6.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 82,
 *         "name": "Lucid",
 *         "logo": "https://cdn.motor1.com/images/mkt/4NA/s1/lucid1.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 83,
 *         "name": "Maserati",
 *         "logo": "https://cdn.motor1.com/images/mkt/6b/s1/maserati2.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 84,
 *         "name": "Mazda",
 *         "logo": "https://cdn.motor1.com/images/mkt/EB/s1/mazda2.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 85,
 *         "name": "Mercedes-AMG",
 *         "logo": "https://cdn.motor1.com/images/mkt/mPB/s1/mercedes-amg1.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 87,
 *         "name": "Mini",
 *         "logo": "https://cdn.motor1.com/images/mkt/je/s1/mini2.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 88,
 *         "name": "NEVS",
 *         "logo": "https://cdn.motor1.com/images/mkt/0Nn/s1/nevs1.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 89,
 *         "name": "NIO",
 *         "logo": "https://cdn.motor1.com/images/mkt/Njj/s1/nio1.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 90,
 *         "name": "Opel",
 *         "logo": "https://cdn.motor1.com/images/mkt/RA/s1/opel4.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 91,
 *         "name": "Peugeot",
 *         "logo": "https://cdn.motor1.com/images/mkt/VG/s1/peugeot4.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 16,
 *         "name": "Mercedes-Benz",
 *         "logo": "https://cdn.motor1.com/images/mkt/z7/s1/mercedes-benz2.png",
 *         "status": 1,
 *         "created_at": 1547277674,
 *         "updated_at": 1547277674
 *       },
 *       {
 *         "id": 92,
 *         "name": "Pininfarina",
 *         "logo": "https://cdn.motor1.com/images/mkt/X2b/s1/pininfarina11.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 93,
 *         "name": "Polestar",
 *         "logo": "https://cdn.motor1.com/images/mkt/9yG/s1/polestar1.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 94,
 *         "name": "Rivian",
 *         "logo": "https://cdn.motor1.com/images/mkt/12w/s1/rivian.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 95,
 *         "name": "Saab",
 *         "logo": "https://cdn.motor1.com/images/mkt/pV/s1/saab3.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 96,
 *         "name": "SEAT",
 *         "logo": "https://cdn.motor1.com/images/mkt/Xk/s1/seat4.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 97,
 *         "name": "Smart",
 *         "logo": "https://cdn.motor1.com/images/mkt/9mm/s1/smart2.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 98,
 *         "name": "Subaru",
 *         "logo": "https://cdn.motor1.com/images/mkt/7ZP/s1/subaru3.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 99,
 *         "name": "Uaz",
 *         "logo": "https://cdn.motor1.com/images/mkt/0JW/s1/uaz1.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       },
 *       {
 *         "id": 100,
 *         "name": "Workhorse",
 *         "logo": "https://cdn.motor1.com/images/mkt/6Ne/s1/workhorse3.png",
 *         "status": 1,
 *         "created_at": 1575536196,
 *         "updated_at": null
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */