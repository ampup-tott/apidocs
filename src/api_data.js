define({ "api": [
  {
    "type": "GET",
    "url": "/accounts/balance",
    "title": "Account Balance",
    "version": "0.3.1",
    "name": "Account_Balance",
    "group": "ACCOUNT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Account Balance</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"user_id\": 4007\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/accounts/balance?user_id=4007 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"balance\": 0,\n    \"requestPending\": 0,\n    \"reserveHolding\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/account/get-account-balance.js",
    "groupTitle": "ACCOUNT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/accounts/balance"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/accounts/signup-bonus",
    "title": "Add Sign-up Bonus",
    "version": "0.3.1",
    "name": "Add_Sign-up_Bonus",
    "group": "ACCOUNT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Add Sign-up Bonus</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"user_id\": 57\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/accounts/signup-bonus \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"user_id\": 57\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"user_id\": 4008,\n    \"type_id\": 1,\n    \"amount\": \"5.00\",\n    \"notes\": \"Sign-up Bonus\",\n    \"status\": 1,\n    \"deleted\": false,\n    \"trx_time\": \"1585450566\",\n    \"created_at\": \"1585450566\",\n    \"id\": \"469\",\n    \"source_id\": null,\n    \"created_by\": null,\n    \"updated_by\": null,\n    \"updated_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Invalid parameter!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing data for processing this operation!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"This account has been added sign-up bonus account!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/account/add-account-bonus.js",
    "groupTitle": "ACCOUNT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/accounts/signup-bonus"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/accounts/request-cashout/accept",
    "title": "Request Cashout Accept",
    "version": "0.3.1",
    "name": "Request_Cashout_Accept",
    "group": "ACCOUNT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Request Cashout Accept</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of request cashout</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n   \"id\": 90\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/accounts/request-cashout/accept?id=90 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"status\": 1,\n    \"trx_time\": \"1585450865\",\n    \"updated_at\": \"1585450865\",\n    \"id\": \"10\",\n    \"user_id\": 21,\n    \"type_id\": 2,\n    \"amount\": \"1.65\",\n    \"notes\": \"Reservation Finished. $1.65 has been added to Host's account successfully.\",\n    \"source_id\": 369,\n    \"deleted\": false,\n    \"created_by\": null,\n    \"updated_by\": null,\n    \"created_at\": \"1550505998\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"There is no request with the given ID!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/account/request-cashout-accept.js",
    "groupTitle": "ACCOUNT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/accounts/request-cashout/accept"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/accounts/request-cashout/pending",
    "title": "Request Cashout Pending",
    "version": "0.3.1",
    "name": "Request_Cashout_Pending",
    "group": "ACCOUNT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Request Cashout Pending</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/accounts/request-cashout/pending \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"user_id\": 57,\n      \"user_name\": \"Khanh Tran\",\n      \"request_time\": \"1553765439\",\n      \"amount\": \"6.65\"\n    },\n    {\n      \"user_id\": 17,\n      \"user_name\": \"Loc Nguyen Thai Vinh\",\n      \"request_time\": \"1558255450\",\n      \"amount\": \"78.33\"\n    },\n    {\n      \"user_id\": 3950,\n      \"user_name\": \"Yunie Pham\",\n      \"request_time\": \"1565594466\",\n      \"amount\": \"2.13\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/account/request-cashout-pending.js",
    "groupTitle": "ACCOUNT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/accounts/request-cashout/pending"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/accounts/request-cashout/processed",
    "title": "Request Cashout Processed",
    "version": "0.3.1",
    "name": "Request_Cashout_Processed",
    "group": "ACCOUNT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Request Cashout Processed</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/accounts/request-cashout/processed \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"user_id\": 17,\n      \"user_name\": \"Loc Nguyen Thai Vinh\",\n      \"request_time\": \"1558255450\",\n      \"amount\": \"78.33\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/account/request-cashout-processed.js",
    "groupTitle": "ACCOUNT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/accounts/request-cashout/processed"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/accounts/request-cashout/rejected",
    "title": "Request Cashout Reject",
    "version": "0.3.1",
    "name": "Request_Cashout_Reject",
    "group": "ACCOUNT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Request Cashout Reject</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Request cashout</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 78\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/accounts/request-cashout/rejected?id=78 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"status\": 4,\n    \"trx_time\": \"1587371595\",\n    \"updated_at\": \"1587371595\",\n    \"id\": \"78\",\n    \"user_id\": 18,\n    \"type_id\": 2,\n    \"amount\": \"6.25\",\n    \"notes\": \"Reservation Finished. $6.25 has been added to Host's account successfully.\",\n    \"source_id\": 403,\n    \"deleted\": false,\n    \"created_by\": null,\n    \"updated_by\": null,\n    \"created_at\": \"1551486698\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"There is no request with the given ID!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/account/request-cashout-reject.js",
    "groupTitle": "ACCOUNT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/accounts/request-cashout/rejected"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/accounts/request-cashout/rejected",
    "title": "Request Cashout Rejected",
    "version": "0.3.1",
    "name": "Request_Cashout_Rejected",
    "group": "ACCOUNT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Request Cashout Rejected</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/accounts/request-cashout/rejected \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"user_id\": 17,\n      \"user_name\": \"Loc Nguyen Thai Vinh\",\n      \"request_time\": \"1558255450\",\n      \"amount\": \"78.33\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/account/request-cashout-rejected.js",
    "groupTitle": "ACCOUNT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/accounts/request-cashout/rejected"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/accounts/request-cashout/submit",
    "title": "Request Cashout Submit",
    "version": "0.3.1",
    "name": "Request_Cashout_Submit",
    "group": "ACCOUNT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Request Cashout Submit</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"user_id\": 57\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/accounts/request-cashout/submit \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"user_id\": 57\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"user_id\": 4008,\n    \"type_id\": 1,\n    \"amount\": \"5.00\",\n    \"notes\": \"Sign-up Bonus\",\n    \"status\": 1,\n    \"deleted\": false,\n    \"trx_time\": \"1585450566\",\n    \"created_at\": \"1585450566\",\n    \"id\": \"469\",\n    \"source_id\": null,\n    \"created_by\": null,\n    \"updated_by\": null,\n    \"updated_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Your previous request had been submitted successfully. We're processing it and get back to you soon!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Token is invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Sorry, this feature is only available for people who's sharing hosts!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"User not found or invalid ID!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/account/request-cashout-submit.js",
    "groupTitle": "ACCOUNT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/accounts/request-cashout/submit"
      }
    ]
  },
  {
    "type": "post",
    "url": "/chargers/:id/check-in-v2",
    "title": "Check-in V2",
    "version": "0.3.1",
    "name": "Check-in_V2",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Check-in V2</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reservation_id",
            "description": "<p>The id of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outlet_id",
            "description": "<p>The id of outlet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "  {\n   \"id\": 6722\n}\n\n{\n   \"reservation_id\": 1019,\n   \"outlet_id\": 8491\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n  --url http://localhost:6969/chargers/6722/check-in-v2 \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \\\n  --header 'content-type: application/json' \\\n  --data '{\n    \"reservation_id\": 1019,\n    \"outlet_id\": 8491\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Success",
            "description": "<p>Example { &quot;status&quot;: &quot;OK&quot;, &quot;data&quot;: { &quot;status&quot;: &quot;start&quot;, &quot;uid&quot;: 4007, &quot;reservation_id&quot;: 1019, &quot;id&quot;: 326, &quot;cp_url&quot;: &quot;/Delta/M1806E7TG&quot;, &quot;charger_id&quot;: 6722, &quot;cp_status&quot;: &quot;Available&quot;, &quot;id_tag&quot;: &quot;tag_delta_id123&quot;, &quot;is_send_noti_charging&quot;: false, &quot;outlet_id&quot;: 8502, &quot;cdata&quot;: {}, &quot;partner&quot;: &quot;Delta&quot;, &quot;protocol&quot;: &quot;ocpp&quot; } }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing charger id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing reservation id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Your reservation has been checked in\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Reservation is wrong!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 5",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Outlet is wrong!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/charger/check-in-v2.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/chargers/:id/check-in-v2"
      }
    ]
  },
  {
    "type": "post",
    "url": "/chargers/:id/check-in-v2",
    "title": "Check-in V2",
    "version": "0.3.1",
    "name": "Check-in_V2",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Check-in V2</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reservation_id",
            "description": "<p>The id of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stall_id",
            "description": "<p>The id of outlet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n   \"id\": 6722\n}\n\n{\n   \"reservation_id\": 1019,\n   \"stall_id\": 8491\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n  --url http://localhost:6969/chargers/6722/check-in-v2 \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \\\n  --header 'content-type: application/json' \\\n  --data '{\n    \"reservation_id\": 1019,\n    \"outlet_id\": 8491\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Success",
            "description": "<p>Example { &quot;status&quot;: &quot;OK&quot;, &quot;data&quot;: { &quot;status&quot;: &quot;start&quot;, &quot;uid&quot;: 4007, &quot;reservation_id&quot;: 1019, &quot;id&quot;: 326, &quot;cp_url&quot;: &quot;/Delta/M1806E7TG&quot;, &quot;charger_id&quot;: 6722, &quot;cp_status&quot;: &quot;Available&quot;, &quot;id_tag&quot;: &quot;tag_delta_id123&quot;, &quot;is_send_noti_charging&quot;: false, &quot;outlet_id&quot;: 8502, &quot;cdata&quot;: {}, &quot;partner&quot;: &quot;Delta&quot;, &quot;protocol&quot;: &quot;ocpp&quot; } }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing charger id\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing reservation id\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Your reservation has been checked in\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Reservation is wrong!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 5",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Outlet is wrong!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/charger/check-in.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/chargers/:id/check-in-v2"
      }
    ]
  },
  {
    "type": "get",
    "url": "/chargers-adhoc/check-status",
    "title": "Check Status",
    "version": "0.3.1",
    "name": "Check_Status",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Check status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>The cp_url encoded</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of Charging (start | stop)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cmd",
            "description": "<p>The OCCP command (StopTransaction)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"code\": \"%2FwebServices%2Focpp%2FCP1111%2FAmpUp00002\",\n  \"status\": \"start\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n  --url 'https://api-dev.uptimecharge.com/chargers-adhoc/check-status?code=%252FwebServices%252Focpp%252FCP1111%252FAmpUp00002&status=start' \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMwNiwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiU00tUzEwIiwiZGV2aWNlX25hbWUiOiJTTS0xMjM0IiwiZXhwIjoxNTg4MDM4ODI3LCJpYXQiOjE1ODU0NDY4Mjd9.XKPoV6FlT0FsWdmzv05M9fTSV1QN9TLDnHebj6sjw70'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Success",
            "description": "<p>Example { }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger Point is invalid\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Invalid IV length\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/charger/check-status.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/chargers-adhoc/check-status"
      }
    ]
  },
  {
    "type": "post",
    "url": "/chargers",
    "title": "Create Charger",
    "version": "0.3.1",
    "name": "Create_Charger",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create charger by user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>The price for charging per hour</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>The level of plug (outlet)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "connectors",
            "description": "<p>List connectors</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "provider_id",
            "description": "<p>The id of provider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keywords",
            "description": "<p>Keywords for Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "data",
            "description": "<p>data of Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "restricted",
            "description": "<p>is restricted charger?</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "has_solar",
            "description": "<p>is solar charger?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n    \"name\": \"Little 2\",\n    \"level\": 3,\n    \"price\": 0,\n    \"place_id\": 4918,\n    \"connectors\": [\n       3, 5, 6, 8\n    ],\n    \"provider_id\": 1,\n    \"keywords\": \"Little 2\",\n    \"data\": {\n        \"instruction\": \"Free free free\"\n    },\n    \"restricted\": true,\n    \"has_solar\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n  --url http://localhost:6969/chargers \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \\\n  --header 'content-type: application/json' \\\n  --data '{\n    \"name\": \"Little 2\",\n    \"level\": 3,\n    \"price\": 0,\n    \"place_id\": 4918,\n    \"connectors\": [\n        3,\n        5,\n        6,\n        8\n    ],\n    \"provider_id\": 1,\n    \"keywords\": \"Little 2\",\n    \"data\": {\n        \"instruction\": \"Free free free\"\n    },\n    \"restricted\": true,\n    \"has_solar\": true\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"name\": \"Little 2\",\n    \"price\": 0,\n    \"level\": 3,\n    \"place_id\": 4918,\n    \"provider_id\": 1,\n    \"data\": {\n      \"instruction\": \"Free free free\"\n    },\n    \"keywords\": \"Little 2\",\n    \"has_solar\": true,\n    \"offline\": false,\n    \"status\": 1,\n    \"created_at\": 1585674139,\n    \"id\": 6732,\n    \"updated_at\": null,\n    \"restricted\": null,\n    \"notes\": null,\n    \"plugshare_charger_id\": null,\n    \"restricted_reason\": null,\n    \"created_by\": null,\n    \"updated_by\": null,\n    \"is_unpluggable\": true,\n    \"plugs\": [\n      {\n        \"charger_id\": 6732,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"created_by\": 4007,\n        \"power\": 0,\n        \"id\": 8506,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"updated_by\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"created_by\": 4007,\n        \"power\": 0,\n        \"id\": 8507,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"updated_by\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"created_by\": 4007,\n        \"power\": 0,\n        \"id\": 8508,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"updated_by\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"created_by\": 4007,\n        \"power\": 0,\n        \"id\": 8509,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"updated_by\": null\n      }\n    ],\n    \"schedules\": [\n      {\n        \"charger_id\": 6732,\n        \"day_of_week\": \"Sunday\",\n        \"day_order\": 0,\n        \"time_start\": 1572566400,\n        \"time_end\": 1572652800,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"id\": 45508,\n        \"updated_at\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"day_of_week\": \"Monday\",\n        \"day_order\": 1,\n        \"time_start\": 1572566400,\n        \"time_end\": 1572652800,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"id\": 45509,\n        \"updated_at\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"day_of_week\": \"Tuesday\",\n        \"day_order\": 2,\n        \"time_start\": 1572566400,\n        \"time_end\": 1572652800,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"id\": 45510,\n        \"updated_at\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"day_of_week\": \"Wednesday\",\n        \"day_order\": 3,\n        \"time_start\": 1572566400,\n        \"time_end\": 1572652800,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"id\": 45511,\n        \"updated_at\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"day_of_week\": \"Thursday\",\n        \"day_order\": 4,\n        \"time_start\": 1572566400,\n        \"time_end\": 1572652800,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"id\": 45512,\n        \"updated_at\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"day_of_week\": \"Friday\",\n        \"day_order\": 5,\n        \"time_start\": 1572566400,\n        \"time_end\": 1572652800,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"id\": 45513,\n        \"updated_at\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"day_of_week\": \"Saturday\",\n        \"day_order\": 6,\n        \"time_start\": 1572566400,\n        \"time_end\": 1572652800,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"id\": 45514,\n        \"updated_at\": null\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "The",
            "description": "<p>cause of Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please enter a name for your charger! It's helpful for you to recognize it later!\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Price was missing or invalid!\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Station ID was missing or invalid!\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please choose at least one plug for the charger!\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/charger/create-charger.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/chargers"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/places/chargers",
    "title": "Create Place Charger",
    "version": "0.3.1",
    "name": "Create_Place_Charger",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create Place Charger</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>The Latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>The Longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "offline",
            "description": "<p>is offline charger?</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "chargers",
            "description": "<p>The data of chargers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"name\": \"Place #3\",\n  \"address\": \"1648 Vo Van Kiet Street\",\n  \"phone\": \"123-345-6677\",\n  \"lat\": 10.7297857,\n  \"lng\": 106.6241775,\n  \"user_id\": 4007,\n  \"keywords\": \"\",\n  \"offline\": false,\n  \"data\": {\n    \"description\": \"\"\n  },\n  \"chargers\": [\n    {\n      \"name\": \"Charger #3\",\n      \"data\": {\n        \"instruction\": \"\"\n      },\n      \"keywords\": \"\",\n      \"level\": 2,\n      \"connectors\": [\n        3\n      ],\n      \"has_solar\": false,\n      \"offline\": false,\n      \"restricted\": true,\n      \"restricted_reason\": \"Family used only!\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/places/chargers \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"name\": \"Place #3\",\n     \"address\": \"1648 Vo Van Kiet Street\",\n     \"phone\": \"123-345-6677\",\n     \"lat\": 10.7297857,\n     \"lng\": 106.6241775,\n     \"user_id\": 4007,\n     \"keywords\": \"\",\n     \"offline\": false,\n     \"data\": {\n       \"description\": \"\"\n     },\n     \"chargers\": [\n       {\n         \"name\": \"Charger #3\",\n         \"data\": {\n           \"instruction\": \"\"\n         },\n         \"keywords\": \"\",\n         \"level\": 2,\n         \"connectors\": [\n           3\n         ],\n         \"has_solar\": false,\n         \"offline\": false,\n         \"restricted\": true,\n         \"restricted_reason\": \"Family used only!\"\n       }\n     ]\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"name\": \"Place #3\",\n    \"address\": \"1648 Vo Van Kiet Street\",\n    \"phone\": \"123-345-6677\",\n    \"lat\": 10.7297857,\n    \"lng\": 106.6241775,\n    \"user_id\": 4007,\n    \"keywords\": \"\",\n    \"status\": 1,\n    \"data\": {\n      \"description\": \"\",\n      \"reservable\": 1,\n      \"reservation_grace_period\": 15,\n      \"max_charging_hours\": 5,\n      \"overstay_penalty\": 0,\n      \"access_restriction\": null,\n      \"price\": \"NaN\"\n    },\n    \"offline\": false,\n    \"created_at\": 1587382573,\n    \"id\": 4958,\n    \"updated_at\": null,\n    \"coordinate\": null,\n    \"notes\": null,\n    \"plugshare_place_id\": null,\n    \"rating\": 0,\n    \"reviews\": null,\n    \"created_by\": null,\n    \"updated_by\": null,\n    \"verified\": true,\n    \"donated\": false,\n    \"protocol\": false,\n    \"host_info\": {\n      \"id\": 4007,\n      \"name\": \"Tâm Tỏ Trần\",\n      \"email\": \"ampup.tott@gmail.com\",\n      \"phone\": \"035593388\",\n      \"avatar\": \"https://assets.pokemon.com/assets/cms2/img/pokedex/full/513.png\",\n      \"is_host\": true\n    },\n    \"chargers\": [\n      {\n        \"name\": \"Charger #3\",\n        \"price\": null,\n        \"level\": 2,\n        \"place_id\": 4958,\n        \"provider_id\": null,\n        \"data\": {\n          \"instruction\": \"\"\n        },\n        \"keywords\": \"\",\n        \"restricted\": true,\n        \"restricted_reason\": \"Family used only!\",\n        \"has_solar\": false,\n        \"offline\": false,\n        \"status\": 1,\n        \"created_at\": 1587382573,\n        \"id\": 6760,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_charger_id\": null,\n        \"created_by\": null,\n        \"updated_by\": null,\n        \"is_unpluggable\": true,\n        \"plugs\": [\n          {\n            \"charger_id\": 6760,\n            \"connector_id\": 3,\n            \"available\": true,\n            \"status\": 1,\n            \"created_at\": 1587382573,\n            \"id\": 8540,\n            \"updated_at\": null,\n            \"notes\": null,\n            \"plugshare_outlet_id\": null,\n            \"created_by\": null,\n            \"updated_by\": null,\n            \"power\": null\n          }\n        ]\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please enter your charger name.\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please enter your charger address.\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please enter your phone number.\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or invalid parameter: lat or lng\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 5",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or invalid parameter: user_id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 6",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"There is no charger's information!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 7",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please enter your charger name.\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 8",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger's price was missing or invalid!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 9",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger's level was missing or invalid!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 10",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please select your charger level and add the charger plug.\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 11",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"User host does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/charger/create-place-chargers.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/chargers"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/schedule-settings",
    "title": "Create Schedule Setting",
    "version": "0.3.1",
    "name": "Create_Schedule_Setting",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create Schedule Setting</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "charger_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "day_order",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time_start",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time_end",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"charger_id\": 6734,\n  \"day_order\": 2,\n  \"time_start\": \"07:30\",\n  \"time_end\": \"22:00\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/schedule-settings \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"charger_id\": 6734,\n     \"day_order\": 2,\n     \"time_start\": \"07:30\",\n     \"time_end\": \"22:00\"\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"charger_id\": 6734,\n    \"day_of_week\": \"Tuesday\",\n    \"day_order\": 2,\n    \"time_start\": 1587367800,\n    \"time_end\": 1587420000,\n    \"status\": 1,\n    \"created_at\": 1587386135,\n    \"id\": 45560,\n    \"updated_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Could not find the charger information!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/charger/create-schedule-setting.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/schedule-settings"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/chargers/id/schedule-settings",
    "title": "Create Schedule Settings",
    "version": "0.3.1",
    "name": "Create_Schedule_Settings",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create Schedule Settings</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "schedules",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 6722,\n  \"schedules\": [\n    {\n      \"day_order\": 0,\n      \"time_start\": \"07:30\",\n      \"time_end\": \"22:00\"\n    },\n    {\n      \"day_order\": 1,\n      \"time_start\": \"07:30\",\n      \"time_end\": \"22:00\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/chargers/6722/schedule-settings \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"schedules\": [\n       {\n         \"day_order\": 0,\n         \"time_start\": \"07:30\",\n         \"time_end\": \"22:00\"\n       },\n       {\n         \"day_order\": 1,\n         \"time_start\": \"07:30\",\n         \"time_end\": \"22:00\"\n       }\n     ]\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"time_start\": 1587367800,\n      \"time_end\": 1587420000,\n      \"updated_at\": 1587386466,\n      \"status\": 1,\n      \"id\": 45441,\n      \"charger_id\": 6722,\n      \"day_of_week\": \"Sunday\",\n      \"created_at\": 1584605423,\n      \"day_order\": 0\n    },\n    {\n      \"time_start\": 1587367800,\n      \"time_end\": 1587420000,\n      \"updated_at\": 1587386466,\n      \"status\": 1,\n      \"id\": 45439,\n      \"charger_id\": 6722,\n      \"day_of_week\": \"Monday\",\n      \"created_at\": 1584605422,\n      \"day_order\": 1\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or invalid parameter: id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger not found or invalid parameter!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Invalid parameter: schedules\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"There are reservations on this charger currently. Please cancel those reservations before editing charger.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/charger/create-schedule-settings.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/chargers/id/schedule-settings"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/chargers/:id",
    "title": "Delete Charger",
    "version": "0.3.1",
    "name": "Delete_Charger",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Delete Charger</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Charger</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 6732\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request DELETE \\\n   --url http://localhost:6969/chargers/6722 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"status\": -1,\n    \"updated_at\": 1587386059,\n    \"notes\": [\n      \"User deleted charger\"\n    ],\n    \"id\": 6732,\n    \"data\": {\n      \"instruction\": \"Free free free\"\n    },\n    \"keywords\": \"Little 2\",\n    \"price\": 0,\n    \"place_id\": 4918,\n    \"created_at\": 1585674139,\n    \"provider_id\": 1,\n    \"name\": \"Little 2\",\n    \"level\": 3,\n    \"restricted\": null,\n    \"has_solar\": true,\n    \"plugshare_charger_id\": null,\n    \"offline\": false,\n    \"restricted_reason\": null,\n    \"created_by\": null,\n    \"updated_by\": 4007,\n    \"is_unpluggable\": true,\n    \"plugs\": []\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Sorry, this charger cannot be deleted because there are active reservations!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/charger/delete-charger.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/chargers/:id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/chargers/:id",
    "title": "Get A Charger",
    "version": "0.3.1",
    "name": "Get_A_Charger",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get A Charger</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Charger</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 6734\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/chargers/6734 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 45,\n      \"name\": \"Dabaitu\",\n      \"level\": null,\n      \"data\": null,\n      \"keywords\": null,\n      \"restricted\": null,\n      \"has_solar\": null,\n      \"price\": null,\n      \"place_id\": 60,\n      \"place_name\": \"Dabaitu\",\n      \"place_address\": \"1243 Torrance Ave, Sunnyvale, CA 94089, USA\",\n      \"lat\": 37.393985748291,\n      \"lng\": -121.99072265625\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/charger/get-charger.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/chargers/:id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/chargers",
    "title": "Get All Chargers",
    "version": "0.3.1",
    "name": "Get_All_Chargers",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get All Chargers</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/chargers \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 45,\n      \"name\": \"Dabaitu\",\n      \"level\": null,\n      \"data\": null,\n      \"keywords\": null,\n      \"restricted\": null,\n      \"has_solar\": null,\n      \"price\": null,\n      \"place_id\": 60,\n      \"place_name\": \"Dabaitu\",\n      \"place_address\": \"1243 Torrance Ave, Sunnyvale, CA 94089, USA\",\n      \"lat\": 37.393985748291,\n      \"lng\": -121.99072265625\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/charger/get-chargers.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/chargers"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/chargers/:id/reservations",
    "title": "Get Charger Schedules Reservations",
    "version": "0.3.1",
    "name": "Get_Charger_Schedules_Reservations",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Charger Schedules Reservations</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Charger</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 6722\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/chargers/6722/reservations \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/charger/get-charger-reservations.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/chargers/:id/reservations"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/chargers/:id/schedule-settings",
    "title": "Get Charger Schedules Settings",
    "version": "0.3.1",
    "name": "Get_Charger_Schedules_Settings",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Charger Schedules Settings</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "day_order",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "date",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 6722,\n  \"day_order\": 4,\n  \"date\": 1547485200\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/chargers/6722/schedule-settings?day_order=4&date=1547485200 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 45441,\n      \"charger_id\": 6722,\n      \"day_of_week\": \"Sunday\",\n      \"status\": 1,\n      \"created_at\": 1584605423,\n      \"updated_at\": 1584628654,\n      \"day_order\": 0,\n      \"time_start\": 1584604800,\n      \"time_end\": 1584648000\n    },\n    {\n      \"id\": 45439,\n      \"charger_id\": 6722,\n      \"day_of_week\": \"Monday\",\n      \"status\": 1,\n      \"created_at\": 1584605422,\n      \"updated_at\": 1584628654,\n      \"day_order\": 1,\n      \"time_start\": 1584604800,\n      \"time_end\": 1584648000\n    },\n    {\n      \"id\": 45443,\n      \"charger_id\": 6722,\n      \"day_of_week\": \"Tuesday\",\n      \"status\": 1,\n      \"created_at\": 1584605423,\n      \"updated_at\": 1584628654,\n      \"day_order\": 2,\n      \"time_start\": 1584604800,\n      \"time_end\": 1584648000\n    },\n    {\n      \"id\": 45444,\n      \"charger_id\": 6722,\n      \"day_of_week\": \"Wednesday\",\n      \"status\": 1,\n      \"created_at\": 1584605423,\n      \"updated_at\": 1584628654,\n      \"day_order\": 3,\n      \"time_start\": 1584604800,\n      \"time_end\": 1584648000\n    },\n    {\n      \"id\": 45445,\n      \"charger_id\": 6722,\n      \"day_of_week\": \"Thursday\",\n      \"status\": 1,\n      \"created_at\": 1584605423,\n      \"updated_at\": 1584628654,\n      \"day_order\": 4,\n      \"time_start\": 1584604800,\n      \"time_end\": 1584648000\n    },\n    {\n      \"id\": 45442,\n      \"charger_id\": 6722,\n      \"day_of_week\": \"Friday\",\n      \"status\": 1,\n      \"created_at\": 1584605423,\n      \"updated_at\": 1584628654,\n      \"day_order\": 5,\n      \"time_start\": 1584604800,\n      \"time_end\": 1584648000\n    },\n    {\n      \"id\": 45440,\n      \"charger_id\": 6722,\n      \"day_of_week\": \"Saturday\",\n      \"status\": 1,\n      \"created_at\": 1584605423,\n      \"updated_at\": 1584628654,\n      \"day_order\": 6,\n      \"time_start\": 1584604800,\n      \"time_end\": 1584648000\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/charger/get-charger-schedules.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/chargers/:id/schedule-settings"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/schedule-settings",
    "title": "Get Schedule Settings",
    "version": "0.3.1",
    "name": "Get_Schedule_Settings",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Schedule Settings</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "day_order",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "outlet_id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"day_order\": 4,\n  \"date\": 1583341200,\n  \"outlet_id\": 8504\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/schedule-settings?day_order=4&date=1583341200&outlet_id=8504 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"settings\": [\n      {\n        \"id\": 45445,\n        \"day_of_week\": \"Thursday\",\n        \"day_order\": 4,\n        \"time_start\": 1584604800,\n        \"time_end\": 1584648000\n      }\n    ],\n    \"available\": [\n      {\n        \"time_start\": 1583370000,\n        \"time_end\": 1583413200\n      }\n    ],\n    \"reservations\": [],\n    \"max_charging_hours\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing paramenter: outlet_id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing paramenter: date\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing paramenter: date_order\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/charger/get-schedule-settings.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/schedule-settings"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/schedule-settings-adhoc",
    "title": "Get Schedule Settings Adhoc",
    "version": "0.3.1",
    "name": "Get_Schedule_Settings_Adhoc",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Schedule Settings Adhoc</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "day_order",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "outlet_id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"day_order\": 4,\n  \"date\": 1583341200,\n  \"outlet_id\": 8504\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/schedule-settings-adhoc?day_order=4&date=1583341200&outlet_id=8504 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"available\": [\n      {\n        \"time_start\": 1587384658,\n        \"time_end\": 1574269200\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing paramenter: outlet_id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing paramenter: date\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing paramenter: date_order\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/charger/get-schedule-settings-adhoc.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/schedule-settings-adhoc"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/chargers/:id/offline",
    "title": "Set Charger Offline",
    "version": "0.3.1",
    "name": "Set_Charger_Offline",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Set Charger Offline</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "offline",
            "description": "<p>is offline charger?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"offline\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n   --url http://localhost:6969/chargers/6722/offline \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"offline\": true\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"offline\": false,\n    \"updated_at\": 1587384142,\n    \"updated_by\": 4007,\n    \"id\": 6722,\n    \"data\": {\n      \"description\": \"Come in say Hi! \"\n    },\n    \"keywords\": \"Little\",\n    \"price\": 0,\n    \"place_id\": 4918,\n    \"status\": 1,\n    \"created_at\": 1584605422,\n    \"provider_id\": 1,\n    \"name\": \"Litle\",\n    \"level\": 3,\n    \"restricted\": null,\n    \"has_solar\": true,\n    \"notes\": null,\n    \"plugshare_charger_id\": null,\n    \"restricted_reason\": null,\n    \"created_by\": null,\n    \"is_unpluggable\": true\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/charger/set-charger-offline.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/chargers/:id/offline"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/chargers/:id",
    "title": "Update Charger",
    "version": "0.3.1",
    "name": "Update_Charger",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Update Charger</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "undefined",
            "optional": false,
            "field": "undefined",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>The Latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>The Longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "offline",
            "description": "<p>is offline charger?</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "chargers",
            "description": "<p>The data of chargers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"name\": \"Litle\",\n  \"address\": \"ABC\",\n  \"phone\": \"2174199960\",\n  \"lat\": 10.2,\n  \"lng\": 102,\n  \"user_id\": 24,\n  \"keywords\": null,\n  \"data\": {\n    \"description\": \"Come in say Hi! \"\n  },\n  \"chargers\": [\n    {\n      \"id\": 2482,\n      \"data\": {\n        \"instruction\": \"\"\n      },\n      \"name\": \"Litle\",\n      \"level\": 2,\n      \"price\": 0,\n      \"offline\": false,\n      \"keywords\": null,\n      \"has_solar\": false,\n      \"connectors\": [\n        3\n      ],\n      \"restricted\": false\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n   --url http://localhost:6969/chargers/6722 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"lat\": 10.2,\n     \"lng\": 102,\n     \"data\": {\n       \"description\": \"Come in say Hi! \"\n     },\n     \"name\": \"Litle\",\n     \"phone\": \"2174199960\",\n     \"address\": \"ABC\",\n     \"user_id\": 24,\n     \"chargers\": [\n       {\n         \"id\": 2482,\n         \"data\": {\n           \"instruction\": \"\"\n         },\n         \"name\": \"Litle\",\n         \"level\": 2,\n         \"price\": 0,\n         \"offline\": false,\n         \"keywords\": null,\n         \"has_solar\": false,\n         \"connectors\": [\n           3\n         ],\n         \"restricted\": false\n       }\n     ],\n     \"keywords\": null\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"name\": \"Litle\",\n    \"price\": 0,\n    \"level\": 3,\n    \"provider_id\": 1,\n    \"data\": {\n      \"description\": \"Come in say Hi! \"\n    },\n    \"keywords\": \"Little\",\n    \"restricted\": null,\n    \"has_solar\": true,\n    \"updated_at\": 1587383541,\n    \"id\": 6722,\n    \"place_id\": 4918,\n    \"status\": 1,\n    \"created_at\": 1584605422,\n    \"notes\": null,\n    \"plugshare_charger_id\": null,\n    \"offline\": false,\n    \"restricted_reason\": null,\n    \"created_by\": null,\n    \"updated_by\": 4007,\n    \"is_unpluggable\": true,\n    \"plugs\": [\n      {\n        \"id\": 8504,\n        \"charger_id\": 6722,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585667692,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"created_by\": 4007,\n        \"updated_by\": null,\n        \"power\": 0\n      },\n      {\n        \"id\": 8505,\n        \"charger_id\": 6722,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585667692,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"created_by\": 4007,\n        \"updated_by\": null,\n        \"power\": 0\n      },\n      {\n        \"id\": 8502,\n        \"charger_id\": 6722,\n        \"connector_id\": null,\n        \"available\": false,\n        \"status\": 1,\n        \"created_at\": 1585667692,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"created_by\": 4007,\n        \"updated_by\": null,\n        \"power\": 0\n      },\n      {\n        \"id\": 8503,\n        \"charger_id\": 6722,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585667692,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"created_by\": 4007,\n        \"updated_by\": null,\n        \"power\": 0\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger was not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Price value is invalid!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger's level is invalid!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/charger/update-charger.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/chargers/:id"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/places/:id/chargers",
    "title": "Update Place Charger",
    "version": "0.3.1",
    "name": "Update_Place_Charger",
    "group": "CHARGER",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Update Place Charger</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "undefined",
            "optional": false,
            "field": "undefined",
            "description": "<p>undefined</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>The Latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>The Longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "offline",
            "description": "<p>is offline charger?</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "chargers",
            "description": "<p>The data of chargers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"name\": \"Test 2 nha\",\n  \"address\": \"217 Hồng Bàng, Phường 11, Quận 5, Hồ Chí Minh, Việt Nam\",\n  \"phone\": \"987\",\n  \"lat\": 10.7549448,\n  \"lng\": 106.6630339,\n  \"user_id\": 3997,\n  \"keywords\": null,\n  \"data\": {\n    \"description\": null\n  },\n  \"chargers\": [\n    {\n      \"id\": 6703,\n      \"name\": \"Test 2 nha\",\n      \"data\": {\n        \"instruction\": null\n      },\n      \"level\": \"1\",\n      \"price\": \"12\",\n      \"connectors\": [\n        {\n          \"id\": 4,\n          \"outlet_id\": null\n        },\n        {\n          \"id\": 4,\n          \"outlet_id\": 8170\n        },\n        {\n          \"id\": 7,\n          \"outlet_id\": 8171\n        },\n        {\n          \"id\": 3,\n          \"outlet_id\": 8169\n        }\n      ],\n      \"has_solar\": false,\n      \"restricted\": false,\n      \"offline\": false\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n   --url http://localhost:6969/places/4875/chargers \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"user_id\": 3997,\n     \"name\": \"Test 2 nha\",\n     \"address\": \"217 Hồng Bàng, Phường 11, Quận 5, Hồ Chí Minh, Việt Nam\",\n     \"phone\": \"987\",\n     \"lat\": 10.7549448,\n     \"lng\": 106.6630339,\n     \"keywords\": null,\n     \"data\": {\n       \"description\": null\n     },\n     \"chargers\": [\n       {\n         \"id\": 6703,\n         \"name\": \"Test 2 nha\",\n         \"data\": {\n           \"instruction\": null\n         },\n         \"level\": \"1\",\n         \"price\": \"12\",\n         \"connectors\": [\n           {\n             \"id\": 4,\n             \"outlet_id\": null\n           },\n           {\n             \"id\": 4,\n             \"outlet_id\": 8170\n           },\n           {\n             \"id\": 7,\n             \"outlet_id\": 8171\n           },\n           {\n             \"id\": 3,\n             \"outlet_id\": 8169\n           }\n         ],\n         \"has_solar\": false,\n         \"restricted\": false,\n         \"offline\": false\n       }\n     ]\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place not found or invalid Id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"There is no charger's information!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"There are reservations on this charger currently. Please cancel those reservations before editing charger.\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger's name was missing or invalid!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 5",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger's price was missing or invalid!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 6",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please choose at least one plug for the charger!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 7",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"User host does not exist!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/charger/update-place-chargers.doc.js",
    "groupTitle": "CHARGER",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:id/chargers"
      }
    ]
  },
  {
    "type": "get",
    "url": "/community/place/:place_id/check-charger-inuse",
    "title": "Check Charger In-use",
    "version": "0.3.1",
    "name": "Check_Charger_In-use",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Check Charger In-use of place by user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of place</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"place_id\": 4918\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n  --url http://localhost:6969/community/place/4918/check-charger-inuse \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"in_use\": 1,\n    \"num_charger\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: place_id\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/check-charger-inuse.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/place/:place_id/check-charger-inuse"
      }
    ]
  },
  {
    "type": "get",
    "url": "/station/check-bookmarked-station",
    "title": "Check Charger Status",
    "version": "0.3.1",
    "name": "Check_Charger_Status",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Check charger status by user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of place</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"place_id\": 4918\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n  --url http://localhost:6969/community/place/4918/check-charger-status \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success",
            "description": "<p>Example { &quot;status&quot;: &quot;OK&quot;, &quot;data&quot;: [ null ] }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>Ther cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: place_id\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/check-charger-status.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/station/check-bookmarked-station"
      }
    ]
  },
  {
    "type": "get",
    "url": "/community/report/city-energy-consumption",
    "title": "City Report Energy Consumption",
    "version": "0.3.1",
    "name": "City_Report_Energy_Consumption",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>City report energy consumption by user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n  --url https://api-dev.uptimecharge.com/community/report/city-energy-consumption \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"place_id\": 4918,\n      \"city\": \"Vietnam\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/community/city-report-energy-consumption.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/report/city-energy-consumption"
      }
    ]
  },
  {
    "type": "post",
    "url": "/community/place/:place_id/chargers",
    "title": "Create Charger",
    "version": "0.3.1",
    "name": "Create_Charger",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create charger by user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>The level of plug (outlet)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "connectors",
            "description": "<p>List connectors</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "provider_id",
            "description": "<p>The id of provider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keywords",
            "description": "<p>Keywords for Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "data",
            "description": "<p>data of Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "offline",
            "description": "<p>is offline charger?</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "has_solar",
            "description": "<p>is solar charger?</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "photo",
            "description": "<p>The url of photo of charger</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_id",
            "description": "<p>The id of user's device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id_tag",
            "description": "<p>The id for tag (Reservation)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "api_key",
            "description": "<p>The api_key for Charging</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "loc_id",
            "description": "<p>The id of Location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "partner",
            "description": "<p>The name of Partner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "protocol",
            "description": "<p>The protocol of Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "power",
            "description": "<p>The power of Charger</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n    \"name\": \"Little 2\",\n    \"level\": 3,\n    \"connectors\": [\n        {\n            \"outlet_id\": 3,\n            \"port_id\": \"port_t\"\n        },\n        {\n            \"outlet_id\": 5,\n            \"port_id\": \"port_t\"\n        },\n        {\n            \"outlet_id\": 6,\n            \"port_id\": \"port_t\"\n        },\n        {\n            \"outlet_id\": 8,\n            \"port_id\": \"port_t\"\n        }\n    ],\n    \"provider_id\": 1,\n    \"keywords\": \"Little 2\",\n    \"data\": {\n        \"instruction\": \"Free free free\"\n    },\n    \"offline\": false,\n    \"has_solar\": true,\n    \"photo\": \"\",\n    \"device_id\": \"M1806E7TG\",\n    \"id_tag\": \"tag_delta_id123\",\n    \"api_key\": \"\",\n    \"loc_id\": \"portid#3\",\n    \"partner\": \"Delta\",\n    \"protocol\" : \"ocpp\",\n    \"power\": 0\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n  --url https://api-dev.uptimecharge.com/community/place/4918/chargers \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \\\n  --header 'content-type: application/json' \\\n  --data '{\n    \"name\": \"Little 2\",\n    \"level\": 3,\n    \"connectors\": [\n        {\n            \"outlet_id\": 3,\n            \"port_id\": \"port_t\"\n        },\n        {\n            \"outlet_id\": 5,\n            \"port_id\": \"port_t\"\n        },\n        {\n            \"outlet_id\": 6,\n            \"port_id\": \"port_t\"\n        },\n        {\n            \"outlet_id\": 8,\n            \"port_id\": \"port_t\"\n        }\n    ],\n    \"provider_id\": 1,\n    \"keywords\": \"Little 2\",\n    \"data\": {\n        \"instruction\": \"Free free free\"\n    },\n    \"offline\": false,\n    \"has_solar\": true,\n    \"photo\": \"\",\n    \"device_id\": \"M1806E7TG\",\n    \"id_tag\": \"tag_delta_id123\",\n    \"api_key\": \"\",\n    \"loc_id\": \"portid#3\",\n    \"partner\": \"Delta\",\n    \"protocol\" : \"ocpp\",\n    \"power\": 0\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"name\": \"Little 2\",\n    \"price\": 0,\n    \"level\": 3,\n    \"place_id\": 4918,\n    \"provider_id\": 1,\n    \"data\": {\n      \"instruction\": \"Free free free\"\n    },\n    \"keywords\": \"Little 2\",\n    \"has_solar\": true,\n    \"offline\": false,\n    \"status\": 1,\n    \"created_at\": 1585674139,\n    \"id\": 6732,\n    \"updated_at\": null,\n    \"restricted\": null,\n    \"notes\": null,\n    \"plugshare_charger_id\": null,\n    \"restricted_reason\": null,\n    \"created_by\": null,\n    \"updated_by\": null,\n    \"is_unpluggable\": true,\n    \"plugs\": [\n      {\n        \"charger_id\": 6732,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"created_by\": 4007,\n        \"power\": 0,\n        \"id\": 8506,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"updated_by\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"created_by\": 4007,\n        \"power\": 0,\n        \"id\": 8507,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"updated_by\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"created_by\": 4007,\n        \"power\": 0,\n        \"id\": 8508,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"updated_by\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"created_by\": 4007,\n        \"power\": 0,\n        \"id\": 8509,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"updated_by\": null\n      }\n    ],\n    \"schedules\": [\n      {\n        \"charger_id\": 6732,\n        \"day_of_week\": \"Sunday\",\n        \"day_order\": 0,\n        \"time_start\": 1572566400,\n        \"time_end\": 1572652800,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"id\": 45508,\n        \"updated_at\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"day_of_week\": \"Monday\",\n        \"day_order\": 1,\n        \"time_start\": 1572566400,\n        \"time_end\": 1572652800,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"id\": 45509,\n        \"updated_at\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"day_of_week\": \"Tuesday\",\n        \"day_order\": 2,\n        \"time_start\": 1572566400,\n        \"time_end\": 1572652800,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"id\": 45510,\n        \"updated_at\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"day_of_week\": \"Wednesday\",\n        \"day_order\": 3,\n        \"time_start\": 1572566400,\n        \"time_end\": 1572652800,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"id\": 45511,\n        \"updated_at\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"day_of_week\": \"Thursday\",\n        \"day_order\": 4,\n        \"time_start\": 1572566400,\n        \"time_end\": 1572652800,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"id\": 45512,\n        \"updated_at\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"day_of_week\": \"Friday\",\n        \"day_order\": 5,\n        \"time_start\": 1572566400,\n        \"time_end\": 1572652800,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"id\": 45513,\n        \"updated_at\": null\n      },\n      {\n        \"charger_id\": 6732,\n        \"day_of_week\": \"Saturday\",\n        \"day_order\": 6,\n        \"time_start\": 1572566400,\n        \"time_end\": 1572652800,\n        \"status\": 1,\n        \"created_at\": 1585674139,\n        \"id\": 45514,\n        \"updated_at\": null\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "The",
            "description": "<p>cause of Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please enter a name for your charger!\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger's level was missing or invalid!\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please choose at least one plug for the charger!\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place not found or invalid Id\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/create-charger.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/place/:place_id/chargers"
      }
    ]
  },
  {
    "type": "post",
    "url": "/community/places",
    "title": "Create Place",
    "version": "0.3.1",
    "name": "Create_Place",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create place by user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>The address of place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>The phone number of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>The latitude of place</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lng",
            "description": "<p>The longitude of place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>The keywords for place</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data of place</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n    \"name\": \"Abel test\",\n    \"address\": \"522, Trung Chau, My Hiep, Cho Moi, An Giang\",\n    \"phone\": \"+84355933881\",\n    \"lat\": 10.52,\n    \"lng\": 105.22,\n    \"keywords\": \"test, abel\",\n    \"data\": {\n        \"instruction\": \"test test\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n  --url http://localhost:6969/community/places \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \\\n  --header 'content-type: application/json' \\\n  --data '{\n    \"name\": \"Abel test\",\n    \"address\": \"522, Trung Chau, My Hiep, Cho Moi, An Giang\",\n    \"phone\": \"+84355933881\",\n    \"lat\": 10.52,\n    \"lng\": 105.22,\n    \"keywords\": \"test, abel\",\n    \"data\": {\n        \"instruction\": \"test test\"\n    }\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success",
            "description": "<p>Example { &quot;status&quot;: &quot;OK&quot;, &quot;data&quot;: { &quot;name&quot;: &quot;Abel test&quot;, &quot;address&quot;: &quot;522, Trung Chau, My Hiep, Cho Moi, An Giang&quot;, &quot;phone&quot;: &quot;+84355933881&quot;, &quot;lat&quot;: 10.52, &quot;lng&quot;: 105.22, &quot;user_id&quot;: 4007, &quot;keywords&quot;: &quot;test, abel&quot;, &quot;status&quot;: 1, &quot;data&quot;: { &quot;instruction&quot;: &quot;test test&quot; }, &quot;created_at&quot;: 1585673074, &quot;id&quot;: 4931, &quot;updated_at&quot;: null, &quot;coordinate&quot;: null, &quot;notes&quot;: null, &quot;plugshare_place_id&quot;: null, &quot;offline&quot;: null, &quot;rating&quot;: 0, &quot;reviews&quot;: null, &quot;created_by&quot;: null, &quot;updated_by&quot;: null, &quot;verified&quot;: true, &quot;donated&quot;: false, &quot;protocol&quot;: false, &quot;host_info&quot;: { &quot;id&quot;: 4007, &quot;name&quot;: &quot;Tâm Tỏ Trần&quot;, &quot;email&quot;: &quot;ampup.tott@gmail.com&quot;, &quot;phone&quot;: &quot;0355933881&quot;, &quot;avatar&quot;: &quot;https://assets.pokemon.com/assets/cms2/img/pokedex/full/513.png&quot; } } }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please enter your station name!\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"What is your station's address?\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please provive the phone number!\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: lat or lng\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 5",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: user_id\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 6",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"User host does not exist!\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/create-place.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/places"
      }
    ]
  },
  {
    "type": "post",
    "url": "/community/places/redis",
    "title": "Create Redis Key",
    "version": "0.3.1",
    "name": "Create_Redis_Key",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create redis Key by user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rkey",
            "description": "<p>The key in Redis</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rvalue",
            "description": "<p>The value of key in Redis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"rkey\": \"test_key\",\n  \"rvalue\": \"_____example_____\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n  --url https://api-dev.uptimecharge.com/community/places/redis \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \\\n  --header 'content-type: application/json' \\\n  --data '{\n    \"rkey\": \"test_key\",\n    \"rvalue\": \"_____example____\"\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"key is empty!\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"value is empty!\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/create-redis.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/places/redis"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/community/place/:place_id/charger/:charger_id",
    "title": "Delete Charger",
    "version": "0.3.1",
    "name": "Delete_Charger",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Delete charger by user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "charger_id",
            "description": "<p>The id of Charger</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"place_id\": 4918,\n  \"charger_id\": 6732\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request DELETE \\\n  --url http://localhost:6969/community/place/4918/charger/6732 \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success",
            "description": "<p>Example { &quot;status&quot;: &quot;OK&quot;, &quot;data&quot;: { &quot;status&quot;: 0, &quot;updated_at&quot;: 1585675161, &quot;updated_by&quot;: 4007, &quot;id&quot;: 6732, &quot;data&quot;: { &quot;instruction&quot;: &quot;Free free free&quot; }, &quot;keywords&quot;: &quot;Little 2&quot;, &quot;price&quot;: 0, &quot;place_id&quot;: 4918, &quot;created_at&quot;: 1585674139, &quot;provider_id&quot;: 1, &quot;name&quot;: &quot;Little 2&quot;, &quot;level&quot;: 3, &quot;restricted&quot;: null, &quot;has_solar&quot;: true, &quot;notes&quot;: null, &quot;plugshare_charger_id&quot;: null, &quot;offline&quot;: false, &quot;restricted_reason&quot;: null, &quot;created_by&quot;: null, &quot;is_unpluggable&quot;: true } }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place not found or invalid Id\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"There are reservations on this charger currently. Please cancel those reservations before editing charger.\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Changer not found or invalid Id\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/delete-charger.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/place/:place_id/charger/:charger_id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/community/place/:place_id/charger/:charger_id/outlet/:outlet_id",
    "title": "Delete outlet",
    "version": "0.0.1",
    "name": "Delete_outlet",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Delete outlet by user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "charger_id",
            "description": "<p>The id of Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outlet_id",
            "description": "<p>The id of Outlet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"place_id\": 4918,\n  \"charger_id\": 6732,\n  \"outlet_id\": 8506\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request DELETE \\\n  --url http://localhost:6969/community/place/4918/charger/6732/outlet/8506 \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"status\": 0,\n    \"updated_at\": 1585674854,\n    \"updated_by\": 4007,\n    \"id\": 8506,\n    \"charger_id\": 6732,\n    \"connector_id\": null,\n    \"available\": true,\n    \"created_at\": 1585674139,\n    \"notes\": null,\n    \"plugshare_outlet_id\": null,\n    \"created_by\": 4007,\n    \"power\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place not found or invalid Id\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"There are reservations on this outlet currently. Please cancel those reservations before deleting outlet.\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Changer not found or invalid Id\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Outlet not found or invalid Id\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/delete-outlet.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/place/:place_id/charger/:charger_id/outlet/:outlet_id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/community/me/places",
    "title": "Get My Place",
    "version": "0.3.1",
    "name": "Get_My_Place",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get places of user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n  --url http://localhost:6969/community/me/places \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 4918,\n      \"name\": \"Tui test\",\n      \"address\": \"15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam\",\n      \"lat\": 10.7517033,\n      \"lng\": 106.6558611,\n      \"user_id\": 4007,\n      \"keywords\": \"Tui Test, Do Ngoc Thanh, Abel\",\n      \"status\": 1,\n      \"created_at\": 1584605422,\n      \"updated_at\": 1585635979,\n      \"data\": {\n        \"price\": 0\n      },\n      \"coordinate\": null,\n      \"phone\": \"0355933881\",\n      \"notes\": null,\n      \"plugshare_place_id\": null,\n      \"offline\": false,\n      \"rating\": 0,\n      \"reviews\": null,\n      \"created_by\": null,\n      \"updated_by\": 4007,\n      \"verified\": true,\n      \"donated\": true,\n      \"protocol\": false,\n      \"photo_url\": \"https://s3.amazonaws.com/ampup-dev/place_photos/4918/kzPPyZJc.jpeg\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/community/get-my-places.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/me/places"
      }
    ]
  },
  {
    "type": "get",
    "url": "/community/place/:place_id",
    "title": "Get Place",
    "version": "0.3.1",
    "name": "Get_Place",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get place of user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Place</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"place_id\": 4918\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example  ",
        "content": "curl --request GET \\\n  --url http://localhost:6969/community/place/4918 \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"source\": null,\n    \"id\": 4918,\n    \"lat\": 10.7517033,\n    \"lng\": 106.6558611,\n    \"place_name\": \"Tui Test\",\n    \"place_address\": \"15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Hồ Chí Minh, Việt Nam\",\n    \"place_phone\": \"0355933881\",\n    \"data\": {\n      \"description\": \"\"\n    },\n    \"offline\": false,\n    \"reviews\": null,\n    \"verified\": true,\n    \"host_info\": {\n      \"id\": 4007,\n      \"name\": \"Tâm Tỏ Trần\",\n      \"email\": \"ampup.tott@gmail.com\",\n      \"phone\": \"0355933881\",\n      \"avatar\": \"https://assets.pokemon.com/assets/cms2/img/pokedex/full/513.png\"\n    },\n    \"photos\": [\n      {\n        \"id\": 709,\n        \"photo_url\": \"https://s3.amazonaws.com/ampup-dev/place_photos/4918/kzPPyZJc.jpeg\"\n      }\n    ],\n    \"chargers\": [\n      {\n        \"id\": 6722,\n        \"name\": \"Tui Test\",\n        \"level\": 3,\n        \"price\": 0,\n        \"restricted\": null,\n        \"has_solar\": true,\n        \"offline\": false,\n        \"data\": {\n          \"instruction\": \"\"\n        },\n        \"plugs\": [\n          {\n            \"outlet_id\": 8481,\n            \"power\": 0,\n            \"type\": 5,\n            \"name\": \"CHAdeMO\",\n            \"level\": 3,\n            \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-CHAdeMO-v1.png\",\n            \"available\": true,\n            \"partner\": null,\n            \"protocol\": null,\n            \"id_tag\": null,\n            \"api_key\": null,\n            \"loc_id\": null,\n            \"port_id\": null,\n            \"device_id\": null,\n            \"status\": \"AVAILABLE\"\n          },\n          {\n            \"outlet_id\": 8485,\n            \"power\": null,\n            \"type\": 8,\n            \"name\": \"Tesla Supercharger\",\n            \"level\": 3,\n            \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Tesla-HPWC-Supercharger-v1.png\",\n            \"available\": true,\n            \"partner\": null,\n            \"protocol\": null,\n            \"id_tag\": null,\n            \"api_key\": null,\n            \"loc_id\": null,\n            \"port_id\": null,\n            \"device_id\": null,\n            \"status\": \"AVAILABLE\"\n          },\n          {\n            \"outlet_id\": 8484,\n            \"power\": null,\n            \"type\": 6,\n            \"name\": \"SEA Combo CCS\",\n            \"level\": 3,\n            \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-SAE-Combo-CCS-v1.png\",\n            \"available\": true,\n            \"partner\": null,\n            \"protocol\": null,\n            \"id_tag\": null,\n            \"api_key\": null,\n            \"loc_id\": null,\n            \"port_id\": null,\n            \"device_id\": null,\n            \"status\": \"AVAILABLE\"\n          },\n          {\n            \"outlet_id\": 8482,\n            \"power\": null,\n            \"type\": 5,\n            \"name\": \"CHAdeMO\",\n            \"level\": 3,\n            \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-CHAdeMO-v1.png\",\n            \"available\": true,\n            \"partner\": null,\n            \"protocol\": null,\n            \"id_tag\": null,\n            \"api_key\": null,\n            \"loc_id\": null,\n            \"port_id\": null,\n            \"device_id\": null,\n            \"status\": \"AVAILABLE\"\n          },\n          {\n            \"outlet_id\": 8483,\n            \"power\": null,\n            \"type\": 6,\n            \"name\": \"SEA Combo CCS\",\n            \"level\": 3,\n            \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-SAE-Combo-CCS-v1.png\",\n            \"available\": true,\n            \"partner\": null,\n            \"protocol\": null,\n            \"id_tag\": null,\n            \"api_key\": null,\n            \"loc_id\": null,\n            \"port_id\": null,\n            \"device_id\": null,\n            \"status\": \"AVAILABLE\"\n          },\n          {\n            \"outlet_id\": 8486,\n            \"power\": null,\n            \"type\": 8,\n            \"name\": \"Tesla Supercharger\",\n            \"level\": 3,\n            \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Tesla-HPWC-Supercharger-v1.png\",\n            \"available\": true,\n            \"partner\": null,\n            \"protocol\": null,\n            \"id_tag\": null,\n            \"api_key\": null,\n            \"loc_id\": null,\n            \"port_id\": null,\n            \"device_id\": null,\n            \"status\": \"AVAILABLE\"\n          },\n          {\n            \"outlet_id\": 8487,\n            \"power\": null,\n            \"type\": 8,\n            \"name\": \"Tesla Supercharger\",\n            \"level\": 3,\n            \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Tesla-HPWC-Supercharger-v1.png\",\n            \"available\": true,\n            \"partner\": null,\n            \"protocol\": null,\n            \"id_tag\": null,\n            \"api_key\": null,\n            \"loc_id\": null,\n            \"port_id\": null,\n            \"device_id\": null,\n            \"status\": \"AVAILABLE\"\n          }\n        ],\n        \"status\": \"AVAILABLE\",\n        \"access\": \"PUBLIC\",\n        \"power\": 0,\n        \"pricing\": {\n          \"parking\": null,\n          \"charging\": [\n            0,\n            \"hr\"\n          ]\n        },\n        \"partner\": null,\n        \"protocol\": null,\n        \"api_key\": null,\n        \"loc_id\": null,\n        \"device_id\": null,\n        \"id_tag\": null\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place not found.\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/get-place.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/place/:place_id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/community/places/redis",
    "title": "Get key in Redis",
    "version": "0.3.1",
    "name": "Get_key_in_Redis",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get key in Redis by user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rkey",
            "description": "<p>The key in redis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"rkey\": 'test_key'\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n  --url 'http://localhost:6969/community/places/redis?rkey=test_key' \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>The value of key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": \"_____example_____\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"key is empty!\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/get-redis.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/places/redis"
      }
    ]
  },
  {
    "type": "get",
    "url": "/community/report/access-code-usage",
    "title": "Report Access Code Usage",
    "version": "0.3.1",
    "name": "Report_Access_Code_Usage",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Report access code usage by user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>The group type (hour | day | week | month | year)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The name of city</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>timestamp of start of group type (hour | day | week | month | year)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>timestamp of end of group type (hour | day | week | month | year)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"type\": \"day\"\n  \"place_id\": 4919\n  \"city\": \"Vietnam\"\n  \"from\": 1585414800\n  \"to\": 1585674000\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n  --url 'http://localhost:6969/community/report/access-code-usage?type=day&place_id=4919&city=Vietnam&from=1585414800&to=1585674000' \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"date\": \"03/29/2020\",\n      \"access_code_data\": {}\n    },\n    {\n      \"date\": \"03/30/2020\",\n      \"access_code_data\": {\n        \"public\": 1\n      }\n    },\n    {\n      \"date\": \"03/31/2020\",\n      \"access_code_data\": {\n        \"public\": 5\n      }\n    },\n    {\n      \"date\": \"04/01/2020\",\n      \"access_code_data\": {}\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>There is no request with the given ID!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Wrong type\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/report-access-code-usage.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/report/access-code-usage"
      }
    ]
  },
  {
    "type": "get",
    "url": "/community/report/session",
    "title": "Report Access Code Usage",
    "version": "0.3.1",
    "name": "Report_Access_Code_Usage",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Report access code usage by user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>The group type (hour | day | week | month | year)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The name of city</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>timestamp of start of group type (hour | day | week | month | year)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>timestamp of end of group type (hour | day | week | month | year)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"type\": \"day\"\n  \"place_id\": 4919\n  \"city\": \"Vietnam\"\n  \"from\": 1585414800\n  \"to\": 1585674000\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n  --url 'http://localhost:6969/community/report/session?type=day&place_id=4919&city=Vietnam&from=1585414800&to=1585674000' \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"date\": \"03/28/2020\",\n      \"sessionsTotal\": 0,\n      \"breakdown\": {\n        \"reservations\": 1,\n        \"instant_charging\": 0\n      }\n    },\n    {\n      \"date\": \"03/29/2020\",\n      \"sessionsTotal\": 1,\n      \"breakdown\": {\n        \"reservations\": 1,\n        \"instant_charging\": 1\n      }\n    },\n    {\n      \"date\": \"03/30/2020\",\n      \"sessionsTotal\": 5,\n      \"breakdown\": {\n        \"reservations\": 5,\n        \"instant_charging\": 0\n      }\n    },\n    {\n      \"date\": \"03/31/2020\",\n      \"sessionsTotal\": 0,\n      \"breakdown\": {\n        \"reservations\": 0,\n        \"instant_charging\": 2\n      }\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>There is no request with the given ID!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: type\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: place_id\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: city\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or Wrong parameter: from\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 5",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or Wrong parameter: to\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/report-sessions.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/report/session"
      }
    ]
  },
  {
    "type": "get",
    "url": "/community/report/energy-consumption",
    "title": "Report Energy Consumption",
    "version": "0.3.1",
    "name": "Report_Energy_Comsumption",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Report energy consumption</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>The group type (hour | day | week | month | year)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The name of city</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>timestamp of start of group type (hour | day | week | month | year)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>timestamp of end of group type (hour | day | week | month | year)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"type\": \"day\"\n  \"place_id\": 4919\n  \"city\": \"Vietnam\"\n  \"from\": 1585414800\n  \"to\": 1585674000\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n  --url 'http://localhost:6969/community/report/energy-consumption?type=day&place_id=4919&city=Vietnam&from=1585414800&to=1585674000' \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"date\": \"03/28/2020\",\n      \"kwh\": \"5.10\"\n    },\n    {\n      \"date\": \"03/29/2020\",\n      \"kwh\": \"10.32\"\n    },\n    {\n      \"date\": \"03/30/2020\",\n      \"kwh\": \"15.2\"\n    },\n    {\n      \"date\": \"03/31/2020\",\n      \"kwh\": \"2.1\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>There is no request with the given ID!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: type\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: place_id\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: city\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or Wrong parameter: from\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 5",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or Wrong parameter: to\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/report-energy-consumption.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/report/energy-consumption"
      }
    ]
  },
  {
    "type": "get",
    "url": "/community/transform-reservation-report",
    "title": "Transform Reservation For Report",
    "version": "0.3.1",
    "name": "Transform_Reservation_For_Report",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Transform Reservation for report</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "min_res_id",
            "description": "<p>The id minximize of reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "max_res_id",
            "description": "<p>The id maximize of reservation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"min_res_id\": 900,\n  \"max_res_id\": 910\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n  --url 'http://localhost:6969/community/transform-reservation-report?min_res_id=900&max_res_id=910' \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Having not new Reservation\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Can't find this place\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/transform-to-reservation-report.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/transform-reservation-report"
      }
    ]
  },
  {
    "type": "get",
    "url": "/community/place/:place_id/charger/:charger_id",
    "title": "Update Charger",
    "version": "0.3.1",
    "name": "Update_Charger",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Update charger by user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "charger_id",
            "description": "<p>The id of Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>The level of plug (outlet)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "connectors",
            "description": "<p>List connectors</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "provider_id",
            "description": "<p>The id of provider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keywords",
            "description": "<p>Keywords for Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "data",
            "description": "<p>data of Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "offline",
            "description": "<p>is offline charger?</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "has_solar",
            "description": "<p>is solar charger?</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "photo",
            "description": "<p>The url of photo of charger</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_id",
            "description": "<p>The id of user's device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id_tag",
            "description": "<p>The id for tag (Reservation)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "api_key",
            "description": "<p>The api_key for Charging</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "loc_id",
            "description": "<p>The id of Location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "partner",
            "description": "<p>The name of Partner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "protocol",
            "description": "<p>The protocol of Charger</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "power",
            "description": "<p>The power of Charger</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n    \"name\": \"Little\",\n    \"level\": 3,\n    \"connectors\": [\n        {\n            \"outlet_id\": 3,\n            \"port_id\": \"port_t\"\n        },\n        {\n            \"outlet_id\": 5,\n            \"port_id\": \"port_t\"\n        },\n        {\n            \"outlet_id\": 6,\n            \"port_id\": \"port_t\"\n        },\n        {\n            \"outlet_id\": 8,\n            \"port_id\": \"port_t\"\n        }\n    ],\n    \"provider_id\": 1,\n    \"keywords\": \"Little\",\n    \"data\": {\n        \"instruction\": \"Free free\"\n    },\n    \"offline\": false,\n    \"has_solar\": true,\n    \"photo\": \"\",\n    \"device_id\": \"M1806E7TG\",\n    \"id_tag\": \"tag_delta_id123\",\n    \"api_key\": \"\",\n    \"loc_id\": \"portid#3\",\n    \"partner\": \"Delta\",\n    \"protocol\" : \"ocpp\",\n    \"power\": 0\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n  --url http://localhost:6969/community/place/4918/charger/6722 \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \\\n  --header 'content-type: application/json' \\\n  --data '{\n    \"name\": \"Little\",\n    \"level\": 3,\n    \"connectors\": [\n        {\n            \"outlet_id\": 3,\n            \"port_id\": \"port_t\"\n        },\n        {\n            \"outlet_id\": 5,\n            \"port_id\": \"port_t\"\n        },\n        {\n            \"outlet_id\": 6,\n            \"port_id\": \"port_t\"\n        },\n        {\n            \"outlet_id\": 8,\n            \"port_id\": \"port_t\"\n        }\n    ],\n    \"provider_id\": 1,\n    \"keywords\": \"Little\",\n    \"data\": {\n        \"instruction\": \"Free free\"\n    },\n    \"offline\": false,\n    \"has_solar\": true,\n    \"photo\": \"\",\n    \"device_id\": \"M1806E7TG\",\n    \"id_tag\": \"tag_delta_id123\",\n    \"api_key\": \"\",\n    \"loc_id\": \"portid#3\",\n    \"partner\": \"Delta\",\n    \"protocol\" : \"ocpp\",\n    \"power\": 0\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"name\": \"Little\",\n    \"level\": 3,\n    \"provider_id\": 1,\n    \"data\": {\n      \"photo\": null\n    },\n    \"keywords\": \"Little\",\n    \"has_solar\": true,\n    \"offline\": false,\n    \"updated_at\": 1585667692,\n    \"updated_by\": 4007,\n    \"id\": 6722,\n    \"price\": 0,\n    \"place_id\": 4918,\n    \"status\": 1,\n    \"created_at\": 1584605422,\n    \"restricted\": null,\n    \"notes\": null,\n    \"plugshare_charger_id\": null,\n    \"restricted_reason\": null,\n    \"created_by\": null,\n    \"is_unpluggable\": true,\n    \"plugs\": [\n      {\n        \"charger_id\": 6722,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585667692,\n        \"created_by\": 4007,\n        \"power\": 0,\n        \"id\": 8502,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"updated_by\": null\n      },\n      {\n        \"charger_id\": 6722,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585667692,\n        \"created_by\": 4007,\n        \"power\": 0,\n        \"id\": 8503,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"updated_by\": null\n      },\n      {\n        \"charger_id\": 6722,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585667692,\n        \"created_by\": 4007,\n        \"power\": 0,\n        \"id\": 8504,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"updated_by\": null\n      },\n      {\n        \"charger_id\": 6722,\n        \"connector_id\": null,\n        \"available\": true,\n        \"status\": 1,\n        \"created_at\": 1585667692,\n        \"created_by\": 4007,\n        \"power\": 0,\n        \"id\": 8505,\n        \"updated_at\": null,\n        \"notes\": null,\n        \"plugshare_outlet_id\": null,\n        \"updated_by\": null\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "The",
            "description": "<p>cause of Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger's id was missing or invalid!\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger's name was missing or invalid!\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charger's price was missing or invalid!\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please choose at least one plug for the charger!\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 5",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"There are reservations on this charger currently. Please cancel those reservations before editing charger.\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 6",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Changer not found or invalid Id\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/update-charger.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/place/:place_id/charger/:charger_id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/community/place/:place_id",
    "title": "Update Place",
    "version": "0.3.1",
    "name": "Update_Place",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Update place by user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of Place.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>The address of Place.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>The latitude of Place.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lng",
            "description": "<p>The longitude of Place.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keywords",
            "description": "<p>Keywords for Place.</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Price of all chargers of Place.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"place_id\": 4918\n}\n\n{\n  \"name\": \"Tui test\",\n  \"address\": \"15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam\",\n  \"lat\": 10.7517033,\n  \"lng\": 106.6558611,\n  \"keywords\": \"Tui Test, Do Ngoc Thanh, Abel\",\n  \"data\": {\n    \"price\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n  --url http://localhost:6969/community/place/4918 \\\n  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \\\n  --header 'content-type: application/json' \\\n  --data '{\n    \"name\": \"Tui test\",\n    \"address\": \"15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam\",\n    \"lat\": 10.7517033,\n    \"lng\": 106.6558611,\n    \"keywords\": \"Tui Test, Do Ngoc Thanh, Abel\",\n    \"data\": {\n      \"price\": 0\n    }\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"name\": \"Tui test\",\n    \"address\": \"15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam\",\n    \"lat\": 10.7517033,\n    \"lng\": 106.6558611,\n    \"data\": {\n      \"price\": 0\n    },\n    \"keywords\": \"Tui Test, Do Ngoc Thanh, Abel\",\n    \"updated_at\": 1585635979,\n    \"id\": 4918,\n    \"user_id\": 4007,\n    \"status\": 1,\n    \"created_at\": 1584605422,\n    \"coordinate\": null,\n    \"phone\": \"0355933881\",\n    \"notes\": null,\n    \"plugshare_place_id\": null,\n    \"offline\": false,\n    \"rating\": 0,\n    \"reviews\": null,\n    \"created_by\": null,\n    \"updated_by\": 4007,\n    \"verified\": true,\n    \"donated\": true,\n    \"protocol\": false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place not found or invalid Id\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Cannot read property 'price' of undefined\" \n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: name\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/community/update-place.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/community/place/:place_id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/session",
    "title": "Zef Get Session",
    "version": "0.3.1",
    "name": "Zef_Get_Session",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Zef get session</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "apiKey",
            "description": "<p>The apiKey of partner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>The id of session reservation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"apiKey\": \"api_key\",\n  \"sessionId\": \"abcd1234\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n  --url 'https://api-dev.uptimecharge.com/session/fail?apiKey=api_key&sessionId=abcd1234'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>charging</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>The id of session reservation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"charging\",\n  \"sessionId\": \"abcd1234\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/community/zef-get-session.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/session"
      }
    ]
  },
  {
    "type": "get",
    "url": "/session/fail",
    "title": "Zef Get Session Fail",
    "version": "0.3.1",
    "name": "Zef_Get_Session_Fail",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Zef get session fail</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "apiKey",
            "description": "<p>The apiKey of partner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>The id of session reservation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param Example",
          "content": "{\n  \"apiKey\": \"api_key\",\n  \"sessionId\": \"abcd1234\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n  --url 'http://localhost:6969/session?apiKey=api_key&sessionId=abcd1234'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>timeout</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>The id of session reservation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"timeout\",\n  \"sessionId\": \"abcd1234\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/community/zef-get-session-fail.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/session/fail"
      }
    ]
  },
  {
    "type": "post",
    "url": "/session",
    "title": "Zef Start",
    "version": "0.3.1",
    "name": "Zef_Start",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Zef Start</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "apiKey",
            "description": "<p>The apiKey of partner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>The id of session reservation</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n  --url 'https://api-dev.uptimecharge.com/session/fail?apiKey=api_key&sessionId=abcd1234'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>authorizing</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"authorizing\",\n  \"sessionId\": \"abcd1234\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/community/zef-start.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/session"
      }
    ]
  },
  {
    "type": "put",
    "url": "/session",
    "title": "Zef Stop",
    "version": "0.3.1",
    "name": "Zef_Stop",
    "group": "COMMUNITY",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Zef stop</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "apiKey",
            "description": "<p>The apiKey of partner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>The id of session reservation</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n  --url 'http://localhost:6969/session'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>stopped</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"stopped\",\n  \"sessionId\": \"abcd1234\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/community/zef-stop.doc.js",
    "groupTitle": "COMMUNITY",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/session"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/charging-levels",
    "title": "Find Charging Levels",
    "version": "0.3.1",
    "name": "Find_Charging_Levels",
    "group": "LOOKUP",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Find Charging Levels</p>",
    "parameter": {
      "examples": [
        {
          "title": "Params Example",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/charging-levels \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"Level 1\",\n      \"photo\": \"https://chargehub.com/img/Level1-Outlet.jpg\",\n      \"marker\": \"https://chargehub.com/markers/high_res/l1.png\",\n      \"power\": \"1 kW\",\n      \"notes\": \"The Level 1 is the standard wall outlet. It is the slowest charge level. Several hours are required to fully charge a vehicle.\",\n      \"charging_time\": \"8 to 15 hours\",\n      \"status\": 1,\n      \"created_at\": 1577426456,\n      \"updated_at\": 1577426456\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Level 2\",\n      \"photo\": \"https://chargehub.com/img/Level2-Station.jpg\",\n      \"marker\": \"https://chargehub.com/markers/high_res/l2.png\",\n      \"power\": \"3 to 20, typically 6 kW\",\n      \"notes\": \"The Level 2 is the typical EV plug you'll install in your garage for example. Many public charging stations are Level 2. RV plugs are also considered Level 2's.\",\n      \"charging_time\": \"3 to 8 hours\",\n      \"status\": 1,\n      \"created_at\": 1577426456,\n      \"updated_at\": 1577426456\n    },\n    {\n      \"id\": 3,\n      \"name\": \"Level 3 (BRCC)\",\n      \"photo\": \"https://chargehub.com/img/Level3-Station.jpg\",\n      \"marker\": \"https://chargehub.com/markers/high_res/l3.png\",\n      \"power\": \"Typically 50, occasionaly 20 kW\",\n      \"notes\": \"Finally, there is the Level 3, commonly called the DCFC or DC Fast Charge. These charging stations are the quickest means to recharge a vehicle.\",\n      \"charging_time\": \"20 min to 1 hour\",\n      \"status\": 1,\n      \"created_at\": 1577426456,\n      \"updated_at\": 1577426456\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/lookup/get-charging-levels.js",
    "groupTitle": "LOOKUP",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/charging-levels"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/connectors",
    "title": "Get Connectors",
    "version": "0.3.1",
    "name": "Get_Connectors",
    "group": "LOOKUP",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get Connectors</p>",
    "parameter": {
      "examples": [
        {
          "title": "Params Example",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/connectors \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 8,\n      \"name\": \"Tesla Supercharger\",\n      \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Tesla-HPWC-Supercharger-v1.png\",\n      \"level\": 3,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708194,\n      \"updated_at\": 1546708194,\n      \"type\": \"Tesla Supercharger\",\n      \"power\": 50,\n      \"version\": 0\n    },\n    {\n      \"id\": 3,\n      \"name\": \"J1772\",\n      \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-J1772-v1.png\",\n      \"level\": 2,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708194,\n      \"updated_at\": 1546708194,\n      \"type\": \"Port J1772\",\n      \"power\": 6.6,\n      \"version\": 0\n    },\n    {\n      \"id\": 5,\n      \"name\": \"CHAdeMO\",\n      \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-CHAdeMO-v1.png\",\n      \"level\": 3,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708194,\n      \"updated_at\": 1546708194,\n      \"type\": \"CHAdeMO\",\n      \"power\": 50,\n      \"version\": 0\n    },\n    {\n      \"id\": 6,\n      \"name\": \"SEA Combo CCS\",\n      \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-SAE-Combo-CCS-v1.png\",\n      \"level\": 3,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708194,\n      \"updated_at\": 1546708194,\n      \"type\": \"SEA Combo CCS\",\n      \"power\": 50,\n      \"version\": 0\n    },\n    {\n      \"id\": 4,\n      \"name\": \"Nema 1450\",\n      \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Nema-1450-v1.png\",\n      \"level\": 2,\n      \"notes\": \"(RV plug)\",\n      \"status\": 1,\n      \"created_at\": 1546708194,\n      \"updated_at\": 1546708194,\n      \"type\": \"Nema 1450\",\n      \"power\": 6.6,\n      \"version\": 0\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Nema 520\",\n      \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Nema-520-v1.png\",\n      \"level\": 1,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708194,\n      \"updated_at\": 1546708194,\n      \"type\": \"Nema 520\",\n      \"power\": 3.3,\n      \"version\": 0\n    },\n    {\n      \"id\": 1,\n      \"name\": \"Nema 515\",\n      \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Nema-515-v1.png\",\n      \"level\": 1,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708194,\n      \"updated_at\": 1546708194,\n      \"type\": \"Nema 515\",\n      \"power\": 3.3,\n      \"version\": 0\n    },\n    {\n      \"id\": 7,\n      \"name\": \"Tesla HPWC\",\n      \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Tesla-HPWC-v1.png\",\n      \"level\": 2,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708194,\n      \"updated_at\": 1546708194,\n      \"type\": \"Tesla HPWC\",\n      \"power\": 6.6,\n      \"version\": 0\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/lookup/get-connectors.js",
    "groupTitle": "LOOKUP",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/connectors"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/makers/:id/vehicles",
    "title": "Get Maker's Vehicle",
    "version": "0.3.1",
    "name": "Get_Maker's_Vehicle",
    "group": "LOOKUP",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get Maker's Vehicle</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of maker</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 23\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/makers/23/vehicles \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 167,\n      \"maker_id\": 23,\n      \"maker_name\": \"Tesla\",\n      \"maker_logo\": null,\n      \"model\": \"Model S 85\",\n      \"year\": \"2013\",\n      \"color\": \"Matte Purple\",\n      \"photo\": \"https://s3.amazonaws.com/ucassets/car/vehicle/Tesla/imgTeslaMattePurple%403x.jpg\",\n      \"connector_id\": 8,\n      \"connector_name\": \"Tesla Supercharger\",\n      \"connector_level\": 3,\n      \"connector_photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Tesla-HPWC-Supercharger-v1.png\",\n      \"connector_power\": 50,\n      \"colors\": [\n        {\n          \"id\": 1,\n          \"name\": \"Matte Purple\"\n        }\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/lookup/get-makers-vehicles.js",
    "groupTitle": "LOOKUP",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/makers/:id/vehicles"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/makers",
    "title": "Get Makers",
    "version": "0.3.1",
    "name": "Get_Makers",
    "group": "LOOKUP",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get Makers</p>",
    "parameter": {
      "examples": [
        {
          "title": "Params Example",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/makers \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"Audi\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 2,\n      \"name\": \"BMW\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 3,\n      \"name\": \"BYD\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 4,\n      \"name\": \"CODA\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 5,\n      \"name\": \"Cadillac\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 6,\n      \"name\": \"Chevrolet\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 7,\n      \"name\": \"Chrysler\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 8,\n      \"name\": \"Citroen\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 9,\n      \"name\": \"Fiat\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 10,\n      \"name\": \"Fisker\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 11,\n      \"name\": \"Ford\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 12,\n      \"name\": \"Honda\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 13,\n      \"name\": \"Hyundai\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 14,\n      \"name\": \"Kia\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 15,\n      \"name\": \"MINI\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 17,\n      \"name\": \"Mitsubishi\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 18,\n      \"name\": \"Motorcycles\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 19,\n      \"name\": \"Nissan\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 20,\n      \"name\": \"Porsche\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 21,\n      \"name\": \"Renault\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 22,\n      \"name\": \"Daimler AG\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 23,\n      \"name\": \"Tesla\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 24,\n      \"name\": \"Think Global\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 25,\n      \"name\": \"Toyota\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 26,\n      \"name\": \"Volkswagen\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 27,\n      \"name\": \"Volvo\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 28,\n      \"name\": \"Jaguar Land Rover\",\n      \"logo\": null,\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 65,\n      \"name\": \"Aston Martin\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/0W/s1/aston-martin2.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 66,\n      \"name\": \"Buick\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/xoy/s1/buick4.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 67,\n      \"name\": \"Byton\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/xpv/s1/byton.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 68,\n      \"name\": \"Citroën\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/1K/s1/citroen2.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 69,\n      \"name\": \"Daimler\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/GW1/s1/daimler1.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 70,\n      \"name\": \"Dodge\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/L3W/s1/dodge2.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 71,\n      \"name\": \"Faraday Future\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/R6r/s1/faraday1.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 72,\n      \"name\": \"Ferrari\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/8W/s1/ferrari5.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 73,\n      \"name\": \"Geely\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/mqP/s1/geely.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 74,\n      \"name\": \"General Motors\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/vJ4/s1/general-motors2.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 75,\n      \"name\": \"Infiniti\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/rnP/s1/infiniti2.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 76,\n      \"name\": \"Jaguar\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/JQ/s1/jaguar2.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 77,\n      \"name\": \"Jeep\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/LW/s1/jeep3.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 78,\n      \"name\": \"Karma\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/EWN/s1/karma2.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 79,\n      \"name\": \"Koenigsegg\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/99g/s1/koenigsegg5.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 80,\n      \"name\": \"Lexus\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/rX/s1/lexus2.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 81,\n      \"name\": \"Lotus\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/Ye/s1/lotus6.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 82,\n      \"name\": \"Lucid\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/4NA/s1/lucid1.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 83,\n      \"name\": \"Maserati\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/6b/s1/maserati2.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 84,\n      \"name\": \"Mazda\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/EB/s1/mazda2.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 85,\n      \"name\": \"Mercedes-AMG\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/mPB/s1/mercedes-amg1.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 87,\n      \"name\": \"Mini\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/je/s1/mini2.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 88,\n      \"name\": \"NEVS\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/0Nn/s1/nevs1.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 89,\n      \"name\": \"NIO\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/Njj/s1/nio1.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 90,\n      \"name\": \"Opel\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/RA/s1/opel4.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 91,\n      \"name\": \"Peugeot\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/VG/s1/peugeot4.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 16,\n      \"name\": \"Mercedes-Benz\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/z7/s1/mercedes-benz2.png\",\n      \"status\": 1,\n      \"created_at\": 1547277674,\n      \"updated_at\": 1547277674\n    },\n    {\n      \"id\": 92,\n      \"name\": \"Pininfarina\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/X2b/s1/pininfarina11.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 93,\n      \"name\": \"Polestar\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/9yG/s1/polestar1.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 94,\n      \"name\": \"Rivian\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/12w/s1/rivian.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 95,\n      \"name\": \"Saab\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/pV/s1/saab3.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 96,\n      \"name\": \"SEAT\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/Xk/s1/seat4.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 97,\n      \"name\": \"Smart\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/9mm/s1/smart2.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 98,\n      \"name\": \"Subaru\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/7ZP/s1/subaru3.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 99,\n      \"name\": \"Uaz\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/0JW/s1/uaz1.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    },\n    {\n      \"id\": 100,\n      \"name\": \"Workhorse\",\n      \"logo\": \"https://cdn.motor1.com/images/mkt/6Ne/s1/workhorse3.png\",\n      \"status\": 1,\n      \"created_at\": 1575536196,\n      \"updated_at\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/lookup/get-makers.js",
    "groupTitle": "LOOKUP",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/makers"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/payment-methods",
    "title": "Get Payment Methods",
    "version": "0.3.1",
    "name": "Get_Payment_Methods",
    "group": "LOOKUP",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get Payment Methods</p>",
    "parameter": {
      "examples": [
        {
          "title": "Params Example",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/payment-methods \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"Credit Card\",\n      \"photo\": \"http://lorempixel.com/640/480/business\",\n      \"status\": 1,\n      \"created_at\": 1546708194,\n      \"updated_at\": 1546708194\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Paypal\",\n      \"photo\": \"http://lorempixel.com/640/480/business\",\n      \"status\": 1,\n      \"created_at\": 1546708194,\n      \"updated_at\": 1546708194\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/lookup/get-payment-methods.js",
    "groupTitle": "LOOKUP",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/payment-methods"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/providers",
    "title": "Get Providers",
    "version": "0.3.1",
    "name": "Get_Providers",
    "group": "LOOKUP",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get Providers</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "version",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/providers?version=0 \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 19,\n      \"name\": \"EV Connect\",\n      \"photo\": \"https://s3.amazonaws.com/ucassets/car/network/logo_EVConnect_3x.png\",\n      \"region\": null,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1550673055,\n      \"updated_at\": 1550673055,\n      \"source\": \"ev_connect\",\n      \"version\": 0\n    },\n    {\n      \"id\": 20,\n      \"name\": \"Electrify America\",\n      \"photo\": \"https://s3.amazonaws.com/ucassets/car/network/logo_ElectrifyAmerica_3x.png\",\n      \"region\": null,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1550673404,\n      \"updated_at\": 1550673404,\n      \"source\": \"electrify_america\",\n      \"version\": 0\n    },\n    {\n      \"id\": 1,\n      \"name\": \"ChargePoint\",\n      \"photo\": \"https://s3.amazonaws.com/ucassets/car/network/logo_Chargepoint_3x.png\",\n      \"region\": null,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708195,\n      \"updated_at\": 1546708195,\n      \"source\": \"chargepoint\",\n      \"version\": 0\n    },\n    {\n      \"id\": 5,\n      \"name\": \"Aerovironment\",\n      \"photo\": \"https://s3.amazonaws.com/ucassets/car/network/logo_Aerovironment_3x.png\",\n      \"region\": null,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708195,\n      \"updated_at\": 1546708195,\n      \"source\": \"aerovironment\",\n      \"version\": 0\n    },\n    {\n      \"id\": 8,\n      \"name\": \"OP Connect\",\n      \"photo\": \"https://s3.amazonaws.com/ucassets/car/network/logo_OPConnect_3x.png\",\n      \"region\": null,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708195,\n      \"updated_at\": 1546708195,\n      \"source\": \"opconnect\",\n      \"version\": 0\n    },\n    {\n      \"id\": 6,\n      \"name\": \"Greenlots\",\n      \"photo\": \"https://s3.amazonaws.com/ucassets/car/network/logo_Greenlots_3x.png\",\n      \"region\": null,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708195,\n      \"updated_at\": 1546708195,\n      \"source\": \"greenlots\",\n      \"version\": 0\n    },\n    {\n      \"id\": 4,\n      \"name\": \"EVgo\",\n      \"photo\": \"https://s3.amazonaws.com/ucassets/car/network/logo_NRG_eVgo_3x.png\",\n      \"region\": null,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708195,\n      \"updated_at\": 1546708195,\n      \"source\": \"evgo\",\n      \"version\": 0\n    },\n    {\n      \"id\": 3,\n      \"name\": \"SemaConnect / SemaCharge\",\n      \"photo\": \"https://s3.amazonaws.com/ucassets/car/network/logo_SemaConnect_3x.png\",\n      \"region\": null,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708195,\n      \"updated_at\": 1546708195,\n      \"source\": \"semaconnect\",\n      \"version\": 0\n    },\n    {\n      \"id\": 9,\n      \"name\": \"Tesla\",\n      \"photo\": \"https://s3.amazonaws.com/ucassets/car/network/logo_GE+WattStation_3x.png\",\n      \"region\": null,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708195,\n      \"updated_at\": 1546708195,\n      \"source\": \"ge_wattstation\",\n      \"version\": 0\n    },\n    {\n      \"id\": 14,\n      \"name\": \"Volta\",\n      \"photo\": \"https://s3.amazonaws.com/ucassets/car/network/logo_Volta_3x.png\",\n      \"region\": null,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708195,\n      \"updated_at\": 1546708195,\n      \"source\": \"volta\",\n      \"version\": 0\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Blink\",\n      \"photo\": \"https://s3.amazonaws.com/ucassets/car/network/logo_Blink_3x.png\",\n      \"region\": null,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708195,\n      \"updated_at\": 1546708195,\n      \"source\": \"blink\",\n      \"version\": 0\n    },\n    {\n      \"id\": 12,\n      \"name\": \"Tesla\",\n      \"photo\": \"https://s3.amazonaws.com/ucassets/car/network/logo_Tesla_3x.png\",\n      \"region\": null,\n      \"notes\": null,\n      \"status\": 1,\n      \"created_at\": 1546708195,\n      \"updated_at\": 1546708195,\n      \"source\": \"tesla\",\n      \"version\": 0\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/lookup/get-providers.js",
    "groupTitle": "LOOKUP",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/providers"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/reservation-statuses",
    "title": "Get Reservation Statuses",
    "version": "0.3.1",
    "name": "Get_Reservation_Statuses",
    "group": "LOOKUP",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get Reservation Statuses</p>",
    "parameter": {
      "examples": [
        {
          "title": "Params Example",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/reservation-statuses \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 6,\n      \"name\": \"InSession\",\n      \"desc\": \"In Session\",\n      \"status\": 1,\n      \"created_at\": 1548602922,\n      \"updated_at\": 1548602922\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Completed\",\n      \"desc\": \"Completed\",\n      \"status\": 1,\n      \"created_at\": 1546708195,\n      \"updated_at\": 1546708195\n    },\n    {\n      \"id\": 1,\n      \"name\": \"Reserved\",\n      \"desc\": \"Upcoming\",\n      \"status\": 1,\n      \"created_at\": 1546708195,\n      \"updated_at\": 1546708195\n    },\n    {\n      \"id\": 5,\n      \"name\": \"Rejected\",\n      \"desc\": \"Cancelled\",\n      \"status\": 1,\n      \"created_at\": 1548602922,\n      \"updated_at\": 1548602922\n    },\n    {\n      \"id\": 3,\n      \"name\": \"Canceled\",\n      \"desc\": \"Cancelled\",\n      \"status\": 1,\n      \"created_at\": 1546708195,\n      \"updated_at\": 1546708195\n    },\n    {\n      \"id\": 4,\n      \"name\": \"Pending\",\n      \"desc\": \"Pending Confirmation\",\n      \"status\": 1,\n      \"created_at\": 1548602922,\n      \"updated_at\": 1548602922\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/lookup/get-reservation-statuses.js",
    "groupTitle": "LOOKUP",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reservation-statuses"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/service-fee",
    "title": "Get Service Fee",
    "version": "0.3.1",
    "name": "Get_Service_Fee",
    "group": "LOOKUP",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get Service Fee</p>",
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/service-fee \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"id\": 4,\n    \"name\": \"SERVICE_FEE_PERCENT\",\n    \"value\": \"5\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/lookup/get-service-fee.js",
    "groupTitle": "LOOKUP",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/service-fee"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/tags",
    "title": "Get Tags by type",
    "version": "0.3.1",
    "name": "Get_Tags_by_type",
    "group": "LOOKUP",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get Tags by type</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"type\": 1\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/tags?type=1 \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 1,\n      \"value\": \"Charger cannot be found\",\n      \"display_no\": 1\n    },\n    {\n      \"id\": 2,\n      \"value\": \"Charger does not work\",\n      \"display_no\": 2\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/lookup/get-tags-by-type.js",
    "groupTitle": "LOOKUP",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/tags"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/transaction-statuses",
    "title": "Get Transaction Statuses",
    "version": "0.3.1",
    "name": "Get_Transaction_Statuses",
    "group": "LOOKUP",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get Transaction Statuses</p>",
    "parameter": {
      "examples": [
        {
          "title": "Params Example",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/transaction-statuses \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"Pending\",\n      \"desc\": \"Pending if charged later, or Authorized if captured later\",\n      \"status\": 1,\n      \"created_at\": 1547222566,\n      \"updated_at\": 1547222566\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Success\",\n      \"desc\": \"Success if charged later, or Captured if the charge has been authorized before\",\n      \"status\": 1,\n      \"created_at\": 1547222566,\n      \"updated_at\": 1547222566\n    },\n    {\n      \"id\": 3,\n      \"name\": \"Failed\",\n      \"desc\": \"If there is anything failed\",\n      \"status\": 1,\n      \"created_at\": 1547222566,\n      \"updated_at\": 1547222566\n    },\n    {\n      \"id\": 4,\n      \"name\": \"Canceled\",\n      \"desc\": \"In case the user has canceled the reservation before charge time\",\n      \"status\": 1,\n      \"created_at\": 1547222566,\n      \"updated_at\": 1547222566\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/lookup/get-transaction-statuses.js",
    "groupTitle": "LOOKUP",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/transaction-statuses"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/notifications/host",
    "title": "Get Host's Notification",
    "version": "0.3.1",
    "name": "Get_Host's_Notification",
    "group": "NOTIFICATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get Host's Notification</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limit",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"user_id\": 3997,\n  \"page\": 1,\n  \"limit\": 100\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/notifications/host?user_id=3997&page=1&limit=100 \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"total\": \"10\",\n    \"items\": [\n      {\n        \"id\": 15,\n        \"notification_id\": 15,\n        \"notification_title\": \"Thank you for hosting a charge\",\n        \"notification_content\": \"Thang Le is amped up. Thang Le and the growing EV community are grateful\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-host\\\",\\\"id\\\":\\\"844\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Thank you for hosting a charge\\\",\\\"a_body\\\":\\\"Thang Le is amped up. Thang Le and the growing EV community are grateful\\\"}\",\n        \"sent_at\": 1579341215,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      },\n      {\n        \"id\": 14,\n        \"notification_id\": 14,\n        \"notification_title\": \"Thang Le’s reservation CANCELLED\",\n        \"notification_content\": \"Reservation hold expired. Thang Le is considered a no-show. Reservation has been cancelled.\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-host\\\",\\\"id\\\":\\\"844\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Thang Le’s reservation CANCELLED\\\",\\\"a_body\\\":\\\"Reservation hold expired. Thang Le is considered a no-show. Reservation has been cancelled.\\\"}\",\n        \"sent_at\": 1579341214,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      },\n      {\n        \"id\": 17,\n        \"notification_id\": 17,\n        \"notification_title\": \"Reservation held for ampUp guest\",\n        \"notification_content\": \"Thang Le’s reservation will be cancelled automatically after 5 minutes\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-host\\\",\\\"id\\\":\\\"844\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Reservation held for ampUp guest\\\",\\\"a_body\\\":\\\"Thang Le’s reservation will be cancelled automatically after 5 minutes\\\"}\",\n        \"sent_at\": 1579341214,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      },\n      {\n        \"id\": 12,\n        \"notification_id\": 12,\n        \"notification_title\": \"Thang Le reserved your charger\",\n        \"notification_content\": \"New reservation by fellow EV driver Thang Le\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-host\\\",\\\"id\\\":\\\"844\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Thang Le reserved your charger\\\",\\\"a_body\\\":\\\"New reservation by fellow EV driver Thang Le\\\"}\",\n        \"sent_at\": 1579329058,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      },\n      {\n        \"id\": 11,\n        \"notification_id\": 11,\n        \"notification_title\": \"Reservation cancelled by driver\",\n        \"notification_content\": \"Victor Le has cancelled the reservation\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-host\\\",\\\"id\\\":\\\"840\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Reservation cancelled by driver\\\",\\\"a_body\\\":\\\"Victor Le has cancelled the reservation\\\"}\",\n        \"sent_at\": 1578638614,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      },\n      {\n        \"id\": 10,\n        \"notification_id\": 10,\n        \"notification_title\": \"Victor Le reserved your charger\",\n        \"notification_content\": \"New reservation by fellow EV driver Victor Le\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-host\\\",\\\"id\\\":\\\"840\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Victor Le reserved your charger\\\",\\\"a_body\\\":\\\"New reservation by fellow EV driver Victor Le\\\"}\",\n        \"sent_at\": 1578638487,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      },\n      {\n        \"id\": 9,\n        \"notification_id\": 9,\n        \"notification_title\": \"Thang Le reserved your charger\",\n        \"notification_content\": \"New reservation by fellow EV driver Thang Le\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-host\\\",\\\"id\\\":\\\"839\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Thang Le reserved your charger\\\",\\\"a_body\\\":\\\"New reservation by fellow EV driver Thang Le\\\"}\",\n        \"sent_at\": 1578637926,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      },\n      {\n        \"id\": 8,\n        \"notification_id\": 8,\n        \"notification_title\": \"Thang Le reserved your charger\",\n        \"notification_content\": \"New reservation by fellow EV driver Thang Le\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-host\\\",\\\"id\\\":\\\"838\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Thang Le reserved your charger\\\",\\\"a_body\\\":\\\"New reservation by fellow EV driver Thang Le\\\"}\",\n        \"sent_at\": 1578637482,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      },\n      {\n        \"id\": 7,\n        \"notification_id\": 7,\n        \"notification_title\": \"Thang Le reserved your charger\",\n        \"notification_content\": \"New reservation by fellow EV driver Thang Le\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-host\\\",\\\"id\\\":\\\"837\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Thang Le reserved your charger\\\",\\\"a_body\\\":\\\"New reservation by fellow EV driver Thang Le\\\"}\",\n        \"sent_at\": 1578637087,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      },\n      {\n        \"id\": 5,\n        \"notification_id\": 5,\n        \"notification_title\": \"Victor Le reserved your charger\",\n        \"notification_content\": \"New reservation by fellow EV driver Victor Le\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-host\\\",\\\"id\\\":\\\"836\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Victor Le reserved your charger\\\",\\\"a_body\\\":\\\"New reservation by fellow EV driver Victor Le\\\"}\",\n        \"sent_at\": 1578625607,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      }\n    ],\n    \"next_page\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or invalid parameter: user_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/notification/get-host-notifications.js",
    "groupTitle": "NOTIFICATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/notifications/host"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/notifications/user",
    "title": "Get User's Notification",
    "version": "0.3.1",
    "name": "Get_User's_Notification",
    "group": "NOTIFICATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get User's Notification</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limit",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"user_id\": 3996,\n  \"page\": 1,\n  \"limit\": 5\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/notifications/user?user_id=3996&page=1&limit=5 \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"total\": \"38\",\n    \"items\": [\n      {\n        \"id\": 2332,\n        \"notification_id\": 2332,\n        \"notification_title\": \"Your reservation has been CANCELLED\",\n        \"notification_content\": \"Reservation hold expired (15 minutes). Your reservation has been Cancelled\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-driver\\\",\\\"id\\\":\\\"1090\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Your reservation has been CANCELLED\\\",\\\"a_body\\\":\\\"Reservation hold expired (15 minutes). Your reservation has been Cancelled\\\"}\",\n        \"sent_at\": 1587361500,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      },\n      {\n        \"id\": 2329,\n        \"notification_id\": 2329,\n        \"notification_title\": \"Your reservation is on hold for 15 minutes\",\n        \"notification_content\": \"Please make your way to Chim cút’s soon. Reservation will be cancelled after 15 minutes\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-driver\\\",\\\"id\\\":\\\"1090\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Your reservation is on hold for 15 minutes\\\",\\\"a_body\\\":\\\"Please make your way to Chim cút’s soon. Reservation will be cancelled after 15 minutes\\\"}\",\n        \"sent_at\": 1587360602,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      },\n      {\n        \"id\": 2328,\n        \"notification_id\": 2328,\n        \"notification_title\": \"Your reservation has been CANCELLED\",\n        \"notification_content\": \"Reservation hold expired (15 minutes). Your reservation has been Cancelled\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-driver\\\",\\\"id\\\":\\\"1089\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Your reservation has been CANCELLED\\\",\\\"a_body\\\":\\\"Reservation hold expired (15 minutes). Your reservation has been Cancelled\\\"}\",\n        \"sent_at\": 1587359708,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      },\n      {\n        \"id\": 2324,\n        \"notification_id\": 2324,\n        \"notification_title\": \"Your reservation is on hold for 15 minutes\",\n        \"notification_content\": \"Please make your way to Chim cút’s soon. Reservation will be cancelled after 15 minutes\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-driver\\\",\\\"id\\\":\\\"1089\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Your reservation is on hold for 15 minutes\\\",\\\"a_body\\\":\\\"Please make your way to Chim cút’s soon. Reservation will be cancelled after 15 minutes\\\"}\",\n        \"sent_at\": 1587358804,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      },\n      {\n        \"id\": 2306,\n        \"notification_id\": 2306,\n        \"notification_title\": \"Your reservation has been CANCELLED\",\n        \"notification_content\": \"Reservation hold expired (15 minutes). Your reservation has been Cancelled\",\n        \"notification.data\": \"{\\\"type\\\":\\\"reservation-driver\\\",\\\"id\\\":\\\"1085\\\",\\\"status\\\":\\\"1\\\",\\\"a_title\\\":\\\"Your reservation has been CANCELLED\\\",\\\"a_body\\\":\\\"Reservation hold expired (15 minutes). Your reservation has been Cancelled\\\"}\",\n        \"sent_at\": 1587120307,\n        \"hash\": \"\",\n        \"system\": \"ampUp\",\n        \"status\": 1\n      }\n    ],\n    \"next_page\": 2\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or invalid parameter: user_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/notification/get-user-notifications.js",
    "groupTitle": "NOTIFICATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/notifications/user"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/payment/check-info",
    "title": "Check Info",
    "version": "0.3.1",
    "name": "Check_Info",
    "group": "PAYMENT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Check Info</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/payment/check-info \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 147,\n      \"user_id\": 4007,\n      \"payment_method_id\": 1,\n      \"account_info\": {\n        \"id\": \"cus_GwHsYovPfZgTFN\",\n        \"object\": \"customer\",\n        \"account_balance\": 0,\n        \"address\": null,\n        \"balance\": 0,\n        \"created\": 1584627870,\n        \"currency\": null,\n        \"default_source\": \"card_1GOPIPAU3TdzxGeyVsHxoKAU\",\n        \"delinquent\": false,\n        \"description\": null,\n        \"discount\": null,\n        \"email\": \"ampup.tott@gmail.com\",\n        \"invoice_prefix\": \"391BED18\",\n        \"invoice_settings\": {\n          \"custom_fields\": null,\n          \"default_payment_method\": null,\n          \"footer\": null\n        },\n        \"livemode\": false,\n        \"metadata\": {},\n        \"name\": null,\n        \"next_invoice_sequence\": 1,\n        \"phone\": null,\n        \"preferred_locales\": [],\n        \"shipping\": null,\n        \"sources\": {\n          \"object\": \"list\",\n          \"data\": [\n            {\n              \"id\": \"card_1GOPIPAU3TdzxGeyVsHxoKAU\",\n              \"object\": \"card\",\n              \"address_city\": null,\n              \"address_country\": null,\n              \"address_line1\": null,\n              \"address_line1_check\": null,\n              \"address_line2\": null,\n              \"address_state\": null,\n              \"address_zip\": null,\n              \"address_zip_check\": null,\n              \"brand\": \"Visa\",\n              \"country\": \"US\",\n              \"customer\": \"cus_GwHsYovPfZgTFN\",\n              \"cvc_check\": \"pass\",\n              \"dynamic_last4\": null,\n              \"exp_month\": 10,\n              \"exp_year\": 2022,\n              \"fingerprint\": \"J6j2L9g8P5Wc3aTr\",\n              \"funding\": \"credit\",\n              \"last4\": \"4242\",\n              \"metadata\": {},\n              \"name\": \"TO TRAN\",\n              \"tokenization_method\": null\n            }\n          ],\n          \"has_more\": false,\n          \"total_count\": 1,\n          \"url\": \"/v1/customers/cus_GwHsYovPfZgTFN/sources\"\n        },\n        \"subscriptions\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/customers/cus_GwHsYovPfZgTFN/subscriptions\"\n        },\n        \"tax_exempt\": \"none\",\n        \"tax_ids\": {\n          \"object\": \"list\",\n          \"data\": [],\n          \"has_more\": false,\n          \"total_count\": 0,\n          \"url\": \"/v1/customers/cus_GwHsYovPfZgTFN/tax_ids\"\n        },\n        \"tax_info\": null,\n        \"tax_info_verification\": null\n      },\n      \"status\": 1,\n      \"created_at\": 1584627870,\n      \"updated_at\": null,\n      \"is_default\": true\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/payment/check-info.js",
    "groupTitle": "PAYMENT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/payment/check-info"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/payment/create-customer",
    "title": "Create Customer",
    "version": "0.3.1",
    "name": "Create_Customer",
    "group": "PAYMENT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create Customer</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "payment_method_id",
            "description": "<p>The id of payment method</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "source",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"payment_method_id\": 1,\n  \"email\": \"ampup.tott@gmail.com\",\n  \"source\": \"tok_1DpuxAAU3TdzxGeyTUDVJsW5d\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/payment/create-customer \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"No such token: tok_1DpuxAAU3TdzxGeyTUDVJsW5d\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/payment/create-customer.js",
    "groupTitle": "PAYMENT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/payment/create-customer"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/places/:place_id/check-charge-now",
    "title": "Check Charge Now",
    "version": "0.3.1",
    "name": "Check_Charge_Now",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Check Charge Now</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4918\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/places/4918/check-charge-now \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: place_id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Charge Now function don't support public charger\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"All stalls are in use. Please try a reservation.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/check-charge-now.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:place_id/check-charge-now"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/places/:place_id/check-restricted-slot-with-access-code",
    "title": "Check Restrict Slot With Access Code",
    "version": "0.3.1",
    "name": "Check_Restrict_Slot_With_Access_Code",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Check Restrict Slot With Access Code</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of place</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "day_order",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "access_code",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4918,\n  \"day_order\": 6,\n  \"date\": \"18:30\",\n  \"access_code\": \"abc\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/places/4918/check-restricted-slot-with-access-code?day_order=6&date=18:30&access_code=abc \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"time_start\": 1583539200,\n    \"time_end\": 1583622000,\n    \"day_orders\": [\n      0,\n      1,\n      2,\n      3,\n      4,\n      5,\n      6\n    ],\n    \"access_code_id\": 288,\n    \"access_code_price\": 5,\n    \"access_code\": \"abc\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: date\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: day_order\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: access_code\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: place_id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 5",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 6",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Schedule is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/check-restricted-slot-with-access-code.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:place_id/check-restricted-slot-with-access-code"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/places/4918/access-restriction",
    "title": "Create Access Restriction",
    "version": "0.3.1",
    "name": "Create_Access_Restriction",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create Access Restriction</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "schedules",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4918,\n  \"schedules\": [\n    {\n      \"name\": \"jbl3\",\n      \"access_codes\": [\n        \"jbl3\",\n        \"sony3\"\n      ],\n      \"time_start\": \"12:00\",\n      \"time_end\": \"24:00\",\n      \"prices\": {\n        \"jbl2\": 17,\n        \"sony2\": 12\n      },\n      \"day_orders\": [\n        1,\n        3\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/places/:place_id/access-restriction \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"schedules\": [\n       {\n         \"name\": \"jbl3\",\n         \"access_codes\": [\n           \"jbl3\",\n           \"sony3\"\n         ],\n         \"time_start\": \"12:00\",\n         \"time_end\": \"24:00\",\n         \"prices\": {\n           \"jbl2\": 17,\n           \"sony2\": 12\n         },\n         \"day_orders\": [\n           1,\n           3\n         ]\n       }\n     ]\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"name\": \"jbl3\",\n      \"description\": null,\n      \"place_id\": 4918,\n      \"day_orders\": [\n        1,\n        3\n      ],\n      \"day_of_weeks\": [\n        \"Monday\",\n        \"Wednesday\"\n      ],\n      \"time_start\": 1587470400,\n      \"time_end\": 1587513600,\n      \"status\": 1,\n      \"created_at\": 1587442079,\n      \"updated_at\": 1587442079,\n      \"id\": 176,\n      \"codes\": [\n        {\n          \"access_restriction_id\": 176,\n          \"access_code\": \"jbl3\",\n          \"price\": null,\n          \"status\": 1,\n          \"created_at\": 1587442079,\n          \"updated_at\": 1587442079,\n          \"id\": 317\n        },\n        {\n          \"access_restriction_id\": 176,\n          \"access_code\": \"sony3\",\n          \"price\": null,\n          \"status\": 1,\n          \"created_at\": 1587442079,\n          \"updated_at\": 1587442079,\n          \"id\": 318\n        }\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: name\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Invalid parameter: prices\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Invalid parameter: access_codes\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Day order must be a value of 0..6!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 5",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Invalid parameter values: time_start and/or time_end!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 6",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Invalid parameter values: time_start and/or time_end!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 7",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Access code has existed at this time frame on the selected days. Please choose a different code or a different time frame.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/create-access-restriction.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/4918/access-restriction"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/places",
    "title": "Create Place",
    "version": "0.3.1",
    "name": "Create_Place",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create Place</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>The latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>The longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"name\": \"Place #1\",\n  \"address\": \"1648 Vo Van Kiet Street\",\n  \"phone\": \"123-345-6677\",\n  \"lat\": 10.7297857,\n  \"lng\": 106.6241775,\n  \"user_id\": 1,\n  \"keywords\": \"\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/places \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"name\": \"Place #1\",\n     \"address\": \"1648 Vo Van Kiet Street\",\n     \"phone\": \"123-345-6677\",\n     \"lat\": 10.7297857,\n     \"lng\": 106.6241775,\n     \"user_id\": 1,\n     \"keywords\": \"\",\n     \"data\": null\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"name\": \"Place #1\",\n    \"address\": \"1648 Vo Van Kiet Street\",\n    \"phone\": \"123-345-6677\",\n    \"lat\": 10.7297857,\n    \"lng\": 106.6241775,\n    \"user_id\": 1,\n    \"keywords\": \"\",\n    \"status\": 1,\n    \"data\": null,\n    \"created_at\": 1587441305,\n    \"id\": 4959,\n    \"updated_at\": null,\n    \"coordinate\": null,\n    \"notes\": null,\n    \"plugshare_place_id\": null,\n    \"offline\": null,\n    \"rating\": 0,\n    \"reviews\": null,\n    \"created_by\": null,\n    \"updated_by\": null,\n    \"verified\": true,\n    \"donated\": false,\n    \"protocol\": false,\n    \"host_info\": {\n      \"id\": 1,\n      \"name\": \"Khanh Tran\",\n      \"email\": \"thkhanh@gmail.com\",\n      \"phone\": \"0988967911\",\n      \"avatar\": \"https://s3.amazonaws.com/uifaces/faces/twitter/bartoszdawydzik/128.jpg\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please enter your station name!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"What is your station's address?\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please provive the phone number!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: lat or lng\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 5",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: user_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/create-place.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/places-photos",
    "title": "Create Place Photo",
    "version": "0.3.1",
    "name": "Create_Place_Photo",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create Place Photo</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "place_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "photos",
            "description": "<p>List of object data base64</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4918,\n  \"photos\": [\n    {\n      \"data\": \"data:image/png;base64,[base64]\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/places-photos \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"place_id\": 4918,\n     \"photos\": [\n       {\n         \"data\": \"data:image/png;base64,[base64]\"\n       }\n     ]\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"place_id\": 4918,\n      \"photo_url\": \"https://s3.amazonaws.com/ampup-dev/place_photos/4689/2bS9WtT0.png\",\n      \"status\": 1,\n      \"created_at\": \"1587441667\",\n      \"id\": 733,\n      \"updated_at\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: place_id!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"There is no photo to save!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place was not found!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/create-place-photo.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places-photos"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/places/:place_id/access-restriction",
    "title": "Delete Access Code",
    "version": "0.3.1",
    "name": "Delete_Access_Code",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Delete Access Code</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "place_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "access_code_id",
            "description": "<p>The id of access code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4918,\n  \"access_code_id\": 179\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request DELETE \\\n   --url http://localhost:6969/places/4918/access-restriction?access_code_id=179 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Cannot read property '$query' of undefined\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/delete-my-access-code.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:place_id/access-restriction"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/places/:place_id/access-restriction",
    "title": "Delete Access Restriction",
    "version": "0.3.1",
    "name": "Delete_Access_Restriction",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Delete Access Restriction</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "access_restriction_id",
            "description": "<p>The id of access restriction</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4918,\n  \"access_restriction_id\": 179\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request DELETE \\\n   --url http://localhost:6969/places/4918/access-restriction?access_restriction_id=179 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"status\": 0,\n    \"updated_at\": 1587442756,\n    \"id\": 176,\n    \"place_id\": 4918,\n    \"day_orders\": [\n      1,\n      3\n    ],\n    \"day_of_weeks\": [\n      \"Monday\",\n      \"Wednesday\"\n    ],\n    \"time_start\": 1587470400,\n    \"time_end\": 1587513600,\n    \"created_at\": 1587442079,\n    \"name\": \"jbl3\",\n    \"description\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or invalid parameter: access_restriction_id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"The access restriction not found!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/delete-access-restriction.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:place_id/access-restriction"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/places/:place_id/access-restriction",
    "title": "Delete Access Restriction",
    "version": "0.3.1",
    "name": "Delete_Access_Restriction",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Delete Access Restriction</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "place_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "access_restriction_id",
            "description": "<p>The id of access restriction</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4918\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request DELETE \\\n   --url http://localhost:6969/places/4918/access-restriction \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"status\": 0,\n    \"updated_at\": 1587442756,\n    \"id\": 176,\n    \"place_id\": 4918,\n    \"day_orders\": [\n      1,\n      3\n    ],\n    \"day_of_weeks\": [\n      \"Monday\",\n      \"Wednesday\"\n    ],\n    \"time_start\": 1587470400,\n    \"time_end\": 1587513600,\n    \"created_at\": 1587442079,\n    \"name\": \"jbl3\",\n    \"description\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or invalid parameter: access_restriction_id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"The access restriction not found!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/get-access-restriction.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:place_id/access-restriction"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/places/:id",
    "title": "Delete Place",
    "version": "0.3.1",
    "name": "Delete_Place",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Delete Place</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of place</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 4959\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request DELETE \\\n   --url http://localhost:6969/places/4959 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"name\": \"Place #1\",\n    \"address\": \"1648 Vo Van Kiet Street\",\n    \"phone\": \"123-345-6677\",\n    \"lat\": 10.7297857,\n    \"lng\": 106.6241775,\n    \"user_id\": 1,\n    \"keywords\": \"\",\n    \"status\": -1,\n    \"data\": null,\n    \"created_at\": 1587441305,\n    \"id\": 4959,\n    \"updated_at\": null,\n    \"coordinate\": null,\n    \"notes\": null,\n    \"plugshare_place_id\": null,\n    \"offline\": null,\n    \"rating\": 0,\n    \"reviews\": null,\n    \"created_by\": null,\n    \"updated_by\": null,\n    \"verified\": true,\n    \"donated\": false,\n    \"protocol\": false,\n    \"host_info\": {\n      \"id\": 1,\n      \"name\": \"Khanh Tran\",\n      \"email\": \"thkhanh@gmail.com\",\n      \"phone\": \"0988967911\",\n      \"avatar\": \"https://s3.amazonaws.com/uifaces/faces/twitter/bartoszdawydzik/128.jpg\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"There are reservations on this charger currently. Please cancel those reservations before deleting charger.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/delete-place.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:id"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/place-photos/:id",
    "title": "Delete Place Photo",
    "version": "0.3.1",
    "name": "Delete_Place_Photo",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Delete Place Photo</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 733\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request DELETE \\\n   --url http://localhost:6969/place-photos/733 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"status\": 0,\n    \"updated_at\": \"1587443322\",\n    \"id\": 733,\n    \"place_id\": 4689,\n    \"photo_url\": \"https://s3.amazonaws.com/ampup-dev/place_photos/4689/2bS9WtT0.png\",\n    \"created_at\": \"1587441667\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place Id was missing or invalid!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/delete-place-photo.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/place-photos/:id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/get-my-access-codes",
    "title": "Get Access Code",
    "version": "0.3.1",
    "name": "Get_Access_Code",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Access Code</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/get-my-access-codes \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"access_code_id\": 307,\n      \"access_code\": \"1234\",\n      \"price\": 0,\n      \"place_id\": 4919,\n      \"place_name\": \"ampUp Vietnam\",\n      \"place_address\": \"290 An Dương Vương, Phường 4, Quận 5, Hồ Chí Minh, Việt Nam\",\n      \"place_photo\": \"https://s3.amazonaws.com/ampup-dev/place_photos/4919/81EB2cCN.jpeg\",\n      \"restriction_id\": 169,\n      \"time_start\": 1586448000,\n      \"time_end\": 1586473200,\n      \"day_orders\": [\n        1,\n        2,\n        3,\n        4\n      ],\n      \"day_of_weeks\": [\n        \"Monday\",\n        \"Tuesday\",\n        \"Wednesday\",\n        \"Thursday\"\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/place/get-my-access-codes.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/get-my-access-codes"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/:place_id/get-all-access-codes",
    "title": "Get All Access Code",
    "version": "0.3.1",
    "name": "Get_All_Access_Code",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get All Access Code</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4919\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/4919/get-all-access-codes \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"access_code_id\": 307,\n      \"access_code\": \"1234\",\n      \"price\": 0,\n      \"place_id\": 4919,\n      \"place_name\": \"ampUp Vietnam\",\n      \"place_address\": \"290 An Dương Vương, Phường 4, Quận 5, Hồ Chí Minh, Việt Nam\",\n      \"restriction_id\": 169,\n      \"time_start\": 1586448000,\n      \"time_end\": 1586473200,\n      \"day_orders\": [\n        1,\n        2,\n        3,\n        4\n      ],\n      \"day_of_weeks\": [\n        \"Monday\",\n        \"Tuesday\",\n        \"Wednesday\",\n        \"Thursday\"\n      ]\n    },\n    {\n      \"access_code_id\": 306,\n      \"access_code\": \"121\",\n      \"price\": 3,\n      \"place_id\": 4919,\n      \"place_name\": \"ampUp Vietnam\",\n      \"place_address\": \"290 An Dương Vương, Phường 4, Quận 5, Hồ Chí Minh, Việt Nam\",\n      \"restriction_id\": 168,\n      \"time_start\": 1586318400,\n      \"time_end\": 1586374200,\n      \"day_orders\": [\n        0,\n        1,\n        2,\n        3,\n        4,\n        5,\n        6\n      ],\n      \"day_of_weeks\": [\n        \"Sunday\",\n        \"Monday\",\n        \"Tuesday\",\n        \"Wednesday\",\n        \"Thursday\",\n        \"Friday\",\n        \"Saturday\"\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/place/get-all-access-codes.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/:place_id/get-all-access-codes"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/places/:id/charger",
    "title": "Get Chargers",
    "version": "0.3.1",
    "name": "Get_Chargers",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Chargers</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_plug",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 4918,\n  \"is_plug\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/places/4918/charger?is_plug=true \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 6734,\n      \"name\": \"Little 2\",\n      \"level\": 3,\n      \"is_unpluggable\": true,\n      \"plug_type\": \"J1772\",\n      \"outlet_id\": 8511,\n      \"next_reservation\": null\n    },\n    {\n      \"id\": 6734,\n      \"name\": \"Little 2\",\n      \"level\": 3,\n      \"is_unpluggable\": true,\n      \"plug_type\": \"CHAdeMO\",\n      \"outlet_id\": 8512,\n      \"next_reservation\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/place/get-charger.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:id/charger"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/places/:id",
    "title": "Get Place",
    "version": "0.3.1",
    "name": "Get_Place",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Place</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The id of place</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_public",
            "description": "<p>is public station (place)?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 4918\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/places/4918?is_public=false \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"source\": null,\n    \"id\": 4918,\n    \"lat\": 10.7517033,\n    \"lng\": 106.6558611,\n    \"place_name\": \"Tui test\",\n    \"place_address\": \"Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam\",\n    \"place_phone\": \"(XXX) XXX - XXX1\",\n    \"description\": null,\n    \"offline\": false,\n    \"reviews\": null,\n    \"verified\": true,\n    \"status\": 1,\n    \"prot\": false,\n    \"host_info\": {\n      \"id\": 4007,\n      \"name\": \"Tâm Tỏ Trần\",\n      \"email\": \"ampup.tott@gmail.com\",\n      \"phone\": \"035593388\",\n      \"avatar\": \"https://assets.pokemon.com/assets/cms2/img/pokedex/full/513.png\"\n    },\n    \"photos\": [\n      {\n        \"id\": 709,\n        \"photo_url\": \"https://s3.amazonaws.com/ampup-dev/place_photos/4918/kzPPyZJc.jpeg\"\n      }\n    ],\n    \"chargers\": [\n      {\n        \"id\": 6722,\n        \"name\": \"Litle\",\n        \"level\": 3,\n        \"price\": 0,\n        \"restricted\": null,\n        \"has_solar\": true,\n        \"offline\": false,\n        \"plugs\": [\n          {\n            \"outlet_id\": 8504,\n            \"power\": null,\n            \"type\": null,\n            \"name\": null,\n            \"level\": null,\n            \"photo\": null,\n            \"available\": true,\n            \"status\": \"AVAILABLE\"\n          }\n        ],\n        \"status\": \"AVAILABLE\",\n        \"access\": \"PUBLIC\",\n        \"pricing\": {\n          \"parking\": null,\n          \"charging\": [\n            0,\n            \"hr\"\n          ]\n        }\n      },\n      {\n        \"id\": 6734,\n        \"name\": \"Little 2\",\n        \"level\": 3,\n        \"price\": 0,\n        \"restricted\": true,\n        \"has_solar\": true,\n        \"offline\": false,\n        \"plugs\": [\n          {\n            \"outlet_id\": 8511,\n            \"power\": 6.6,\n            \"type\": 3,\n            \"name\": \"J1772\",\n            \"level\": 2,\n            \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-J1772-v1.png\",\n            \"available\": true,\n            \"status\": \"AVAILABLE\"\n          }\n        ],\n        \"status\": \"AVAILABLE\",\n        \"access\": \"RESTRICTED\",\n        \"pricing\": {\n          \"parking\": null,\n          \"charging\": [\n            0,\n            \"hr\"\n          ]\n        }\n      }\n    ],\n    \"bookmarked\": true,\n    \"place_address_full\": \"15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam\",\n    \"place_phone_full\": \"0355933881\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/get-place.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/place-photos",
    "title": "Get Place Photo",
    "version": "0.3.1",
    "name": "Get_Place_Photo",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Place Photo</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4919\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/place-photos?place_id=4919 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 709,\n      \"place_id\": 4918,\n      \"photo_url\": \"https://s3.amazonaws.com/ampup-dev/place_photos/4918/kzPPyZJc.jpeg\",\n      \"status\": 1,\n      \"created_at\": \"1584605424\",\n      \"updated_at\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/place/get-place-photos.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/place-photos"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/places/:id",
    "title": "Get Place V2",
    "version": "0.3.1",
    "name": "Get_Place_V2",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Place</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The id of place</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_public",
            "description": "<p>is public station (place)?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 4918\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/places/4918?is_public=false \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"source\": null,\n    \"id\": 4918,\n    \"lat\": 10.7517033,\n    \"lng\": 106.6558611,\n    \"place_name\": \"Tui test\",\n    \"place_address\": \"Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam\",\n    \"place_phone\": \"(XXX) XXX - XXX1\",\n    \"description\": null,\n    \"offline\": false,\n    \"reviews\": null,\n    \"verified\": true,\n    \"status\": 1,\n    \"prot\": false,\n    \"host_info\": {\n      \"id\": 4007,\n      \"name\": \"Tâm Tỏ Trần\",\n      \"email\": \"ampup.tott@gmail.com\",\n      \"phone\": \"035593388\",\n      \"avatar\": \"https://assets.pokemon.com/assets/cms2/img/pokedex/full/513.png\"\n    },\n    \"photos\": [\n      {\n        \"id\": 709,\n        \"photo_url\": \"https://s3.amazonaws.com/ampup-dev/place_photos/4918/kzPPyZJc.jpeg\"\n      }\n    ],\n    \"chargers\": [\n      {\n        \"id\": 6722,\n        \"name\": \"Litle\",\n        \"level\": 3,\n        \"price\": 0,\n        \"restricted\": null,\n        \"has_solar\": true,\n        \"offline\": false,\n        \"plugs\": [\n          {\n            \"outlet_id\": 8504,\n            \"power\": null,\n            \"type\": null,\n            \"name\": null,\n            \"level\": null,\n            \"photo\": null,\n            \"available\": true,\n            \"status\": \"AVAILABLE\"\n          }\n        ],\n        \"status\": \"AVAILABLE\",\n        \"access\": \"PUBLIC\",\n        \"pricing\": {\n          \"parking\": null,\n          \"charging\": [\n            0,\n            \"hr\"\n          ]\n        }\n      },\n      {\n        \"id\": 6734,\n        \"name\": \"Little 2\",\n        \"level\": 3,\n        \"price\": 0,\n        \"restricted\": true,\n        \"has_solar\": true,\n        \"offline\": false,\n        \"plugs\": [\n          {\n            \"outlet_id\": 8511,\n            \"power\": 6.6,\n            \"type\": 3,\n            \"name\": \"J1772\",\n            \"level\": 2,\n            \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-J1772-v1.png\",\n            \"available\": true,\n            \"status\": \"AVAILABLE\"\n          }\n        ],\n        \"status\": \"AVAILABLE\",\n        \"access\": \"RESTRICTED\",\n        \"pricing\": {\n          \"parking\": null,\n          \"charging\": [\n            0,\n            \"hr\"\n          ]\n        }\n      }\n    ],\n    \"bookmarked\": true,\n    \"place_address_full\": \"15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam\",\n    \"place_phone_full\": \"0355933881\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/get-place-v2.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/places",
    "title": "Get Places",
    "version": "0.3.1",
    "name": "Get_Places",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Places</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "connectors",
            "description": "<p>The list ids of connectors</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"connectors\": \"3,4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/places?connectors=3%2C4 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"place_id\": 126,\n      \"place_name\": \"NTMK\",\n      \"place_address\": \"275 Điện Biên Phủ, Phường 7, Quận 3, Hồ Chí Minh, Vietnam\",\n      \"place_data\": {\n        \"description\": \"\"\n      },\n      \"lat\": 10.7789931,\n      \"lng\": 106.6872621,\n      \"user_id\": 18,\n      \"chargers\": [\n        {\n          \"charger_id\": 97,\n          \"charger_price\": 1.655,\n          \"charger_data\": {\n            \"instruction\": \"\"\n          },\n          \"plugs\": [\n            {\n              \"outlet_id\": 147,\n              \"available\": true,\n              \"connector_id\": 3,\n              \"connector_name\": \"J1772\",\n              \"connector_level\": 2,\n              \"connector_photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-J1772-v1.png\",\n              \"connector_power\": 6.6\n            },\n            {\n              \"outlet_id\": 149,\n              \"available\": true,\n              \"connector_id\": 4,\n              \"connector_name\": \"Nema 1450\",\n              \"connector_level\": 2,\n              \"connector_photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Nema-1450-v1.png\",\n              \"connector_power\": 6.6\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/place/get-places.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/search/places",
    "title": "Get Places By Name",
    "version": "0.3.1",
    "name": "Get_Places_By_Name",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Places By Name</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of Place</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"name\": \"Tui\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/search/places?name=Tui \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 4918,\n      \"name\": \"Tui test\",\n      \"address\": \"15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam\",\n      \"data\": {\n        \"price\": 0\n      },\n      \"lat\": 10.7517033,\n      \"lng\": 106.6558611,\n      \"user_id\": 4007,\n      \"chargers\": [\n        {\n          \"charger_id\": 6734,\n          \"charger_price\": 0,\n          \"charger_data\": {\n            \"instruction\": \"Free free free\"\n          },\n          \"plugs\": [\n            {\n              \"outlet_id\": 8511,\n              \"available\": true,\n              \"connector_id\": 3,\n              \"connector_name\": \"J1772\",\n              \"connector_level\": 2,\n              \"connector_photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-J1772-v1.png\",\n              \"connector_power\": 6.6\n            }\n          ]\n        },\n        {\n          \"charger_id\": 6722,\n          \"charger_price\": 0,\n          \"charger_data\": {\n            \"description\": \"Come in say Hi! \"\n          },\n          \"plugs\": [\n            {\n              \"outlet_id\": 8481,\n              \"available\": true,\n              \"connector_id\": 5,\n              \"connector_name\": \"CHAdeMO\",\n              \"connector_level\": 3,\n              \"connector_photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-CHAdeMO-v1.png\",\n              \"connector_power\": 50\n            },\n            {\n              \"outlet_id\": 8482,\n              \"available\": true,\n              \"connector_id\": 5,\n              \"connector_name\": \"CHAdeMO\",\n              \"connector_level\": 3,\n              \"connector_photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-CHAdeMO-v1.png\",\n              \"connector_power\": 50\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/place/search-places.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/search/places"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/places/:place_id/restricted-schedule-settings",
    "title": "Get Restricted Schedule Settings",
    "version": "0.3.1",
    "name": "Get_Restricted_Schedule_Settings",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Restricted Schedule Settings</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "day_order",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "date",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4918,\n  \"day_order\": 0,\n  \"date\": 1583600400\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/places/4918/restricted-schedule-settings?day_order=0&date=1583600400 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 1,\n      \"start\": 1583611200,\n      \"price\": 0,\n      \"is_remembered\": false,\n      \"access_code\": null\n    },\n    {\n      \"id\": 1,\n      \"start\": 1583613000,\n      \"price\": 0,\n      \"is_remembered\": false,\n      \"access_code\": null\n    },\n    {\n      \"id\": 2,\n      \"start\": 1583620200,\n      \"price\": 0,\n      \"is_remembered\": false,\n      \"access_code\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: date\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: day_order\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: place_id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 5",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Schedule is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/get-restricted-schedule-setting.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:place_id/restricted-schedule-settings"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/places/:place_id/restricted-schedule-settings-groupby",
    "title": "Get Restricted Schedule Settings GroupBy",
    "version": "0.3.1",
    "name": "Get_Restricted_Schedule_Settings_GroupBy",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Restricted Schedule Settings GroupBy</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "day_order",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "date",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4918,\n  \"day_order\": 0,\n  \"date\": 1583600400\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/places/4918/restricted-schedule-settings-groupby?day_order=0&date=1583600400 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 157,\n      \"place_id\": 4918,\n      \"day_of_week\": \"Saturday\",\n      \"status\": 1,\n      \"created_at\": 1577176834,\n      \"updated_at\": 1577267052,\n      \"day_order\": 6,\n      \"time_start\": 1577232000,\n      \"time_end\": 1577314800,\n      \"access_code\": \"abc\",\n      \"price\": null\n    },\n    {\n      \"id\": 151,\n      \"place_id\": 4918,\n      \"day_of_week\": \"Sunday\",\n      \"status\": 1,\n      \"created_at\": 1577176834,\n      \"updated_at\": 1577267051,\n      \"day_order\": 0,\n      \"time_start\": 1577232000,\n      \"time_end\": 1577314800,\n      \"access_code\": \"abc\",\n      \"price\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or invalid parameter: place_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/get-restricted-schedule-setting-groupby.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:place_id/restricted-schedule-settings-groupby"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/places/:id/offline",
    "title": "Set Place Offline",
    "version": "0.3.1",
    "name": "Set_Place_Offline",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Set Place Offline</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "offline",
            "description": "<p>is offline place?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"offline\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n   --url http://localhost:6969/places/6722/offline \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"offline\": true\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"offline\": true,\n    \"status\": 0,\n    \"updated_at\": 1587383800,\n    \"updated_by\": 4007,\n    \"id\": 4918,\n    \"name\": \"Tui test\",\n    \"address\": \"15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam\",\n    \"lat\": 10.7517033,\n    \"lng\": 106.6558611,\n    \"user_id\": 4007,\n    \"keywords\": \"Tui Test, Do Ngoc Thanh, Abel\",\n    \"created_at\": 1584605422,\n    \"data\": {\n      \"price\": 0\n    },\n    \"coordinate\": null,\n    \"phone\": \"0355933881\",\n    \"notes\": null,\n    \"plugshare_place_id\": null,\n    \"rating\": 0,\n    \"reviews\": null,\n    \"created_by\": null,\n    \"verified\": true,\n    \"donated\": true,\n    \"protocol\": false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/set-place-offline.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:id/offline"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/places/:id/offline",
    "title": "Set Place Offline",
    "version": "0.3.1",
    "name": "Set_Place_Offline",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Set Place Offline</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "offline",
            "description": "<p>is offline place?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"offline\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n   --url http://localhost:6969/places/6722/offline \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"offline\": true\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"offline\": true,\n    \"status\": 0,\n    \"updated_at\": 1587383800,\n    \"updated_by\": 4007,\n    \"id\": 4918,\n    \"name\": \"Tui test\",\n    \"address\": \"15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam\",\n    \"lat\": 10.7517033,\n    \"lng\": 106.6558611,\n    \"user_id\": 4007,\n    \"keywords\": \"Tui Test, Do Ngoc Thanh, Abel\",\n    \"created_at\": 1584605422,\n    \"data\": {\n      \"price\": 0\n    },\n    \"coordinate\": null,\n    \"phone\": \"0355933881\",\n    \"notes\": null,\n    \"plugshare_place_id\": null,\n    \"rating\": 0,\n    \"reviews\": null,\n    \"created_by\": null,\n    \"verified\": true,\n    \"donated\": true,\n    \"protocol\": false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/update-place.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:id/offline"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/places/:place_id/access-restriction",
    "title": "Update Restriction",
    "version": "0.3.1",
    "name": "Update_Restriction",
    "group": "PLACE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Update Restriction</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "schedules",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4918,\n  \"schedules\": [\n    {\n      \"name\": \"AR1\",\n      \"access_codes\": [\n        \"test\"\n      ],\n      \"time_start\": \"08:00\",\n      \"time_end\": \"17:00\",\n      \"prices\": {\n        \"thang\": 35\n      },\n      \"day_orders\": [\n        1,\n        3,\n        4\n      ],\n      \"access_restriction_id\": 10,\n      \"description\": \"....\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n   --url http://localhost:6969/places/4918/access-restriction?place_id=4918 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"schedules\": [\n       {\n         \"name\": \"AR1\",\n         \"access_codes\": [\n           \"test\"\n         ],\n         \"time_start\": \"08:00\",\n         \"time_end\": \"17:00\",\n         \"prices\": {\n           \"thang\": 35\n         },\n         \"day_orders\": [\n           1,\n           3,\n           4\n         ],\n         \"access_restriction_id\": 10,\n         \"description\": \"....\"\n       }\n     ]\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or invalid parameter: place_id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Place not found or invalid parameter!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: name\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or invalid parameter: access_restriction_id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 5",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Invalid parameter: prices\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 6",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Day order must be a value of 0..6!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 7",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Invalid parameter values: time_start and/or time_end!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 8",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Access code has existed at this time frame on the selected days. Please choose a different code or a different time frame.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/place/update-access-restriction.js",
    "groupTitle": "PLACE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/:place_id/access-restriction"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/places/report-issue",
    "title": "Create Report Issue",
    "version": "0.3.1",
    "name": "Create_Report_Issue",
    "group": "REPORT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create Report Issue</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issue",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4918,\n  \"issue\": \"Very Good\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/places/report-issue \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"place_id\": 4918,\n     \"issue\": \"Very Good\"\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"place_id\": 4918,\n    \"issue\": \"Very Good\",\n    \"status\": 1,\n    \"created_by\": 4007,\n    \"created_at\": \"1587374900\",\n    \"id\": \"24\",\n    \"updated_by\": null,\n    \"updated_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Invalid parameters\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Invalid parameter: place_id.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/reports/create-report-issue.js",
    "groupTitle": "REPORT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/report-issue"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/places/report-map-issue",
    "title": "Create Report Map Issue",
    "version": "0.3.1",
    "name": "Create_Report_Map_Issue",
    "group": "REPORT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create Report Map Issue</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issue",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "user_info",
            "description": "<p>The info of report's user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4918,\n  \"issue\": \"Very Good\",\n  \"user_info\": {\n    \"name\": \"Abel Tran\",\n    \"email\": \"ampup.tott@gmail.com\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/places/report-map-issue \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"place_id\": 4918,\n     \"issue\": \"Very Good\",\n     \"user_info\": {\n       \"name\": \"Abel Tran\",\n       \"email\": \"ampup.tott@gmail.com\"\n     }\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"place_id\": 4918,\n    \"issue\": \"Very Good\",\n    \"status\": 1,\n    \"created_by\": {\n      \"name\": \"Abel Tran\",\n      \"email\": \"ampup.tott@gmail.com\"\n    },\n    \"created_at\": \"1587375309\",\n    \"id\": \"25\",\n    \"updated_by\": null,\n    \"updated_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Invalid parameter: place_id.\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: issue\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: userInfo\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Name is required!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 5",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Email is required!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/reports/create-report-map-issue.js",
    "groupTitle": "REPORT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/places/report-map-issue"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/reports/histogram-data",
    "title": "Report Charging Activity Histogram",
    "version": "0.3.1",
    "name": "Report_Charging_Activity_Histogram",
    "group": "REPORT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Report Charging Activity Histogram</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "from",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "to",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": \"6722, 2556\",\n  \"from\": 1547942400,\n  \"to\": 1548384093\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/reports/histogram-data?place_id=6722, 2556&from=1547942400&to=1548384093 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"responseData\": {\n      \"Sunday\": {\n        \"total_kwhs\": 0,\n        \"sessions_data\": {\n          \"instant_charging_count\": 0,\n          \"reservations_count\": 0\n        },\n        \"access_code_data\": {}\n      },\n      \"Monday\": {\n        \"total_kwhs\": 0,\n        \"sessions_data\": {\n          \"instant_charging_count\": 0,\n          \"reservations_count\": 0\n        },\n        \"access_code_data\": {}\n      },\n      \"Tuesday\": {\n        \"total_kwhs\": 0,\n        \"sessions_data\": {\n          \"instant_charging_count\": 0,\n          \"reservations_count\": 0\n        },\n        \"access_code_data\": {}\n      },\n      \"Wednesday\": {\n        \"total_kwhs\": 0,\n        \"sessions_data\": {\n          \"instant_charging_count\": 0,\n          \"reservations_count\": 0\n        },\n        \"access_code_data\": {}\n      },\n      \"Thursday\": {\n        \"total_kwhs\": 0,\n        \"sessions_data\": {\n          \"instant_charging_count\": 0,\n          \"reservations_count\": 0\n        },\n        \"access_code_data\": {}\n      },\n      \"Friday\": {\n        \"total_kwhs\": 0,\n        \"sessions_data\": {\n          \"instant_charging_count\": 0,\n          \"reservations_count\": 0\n        },\n        \"access_code_data\": {}\n      }\n    },\n    \"formattedData\": {\n      \"Sunday\": [],\n      \"Monday\": [],\n      \"Tuesday\": [],\n      \"Wednesday\": [],\n      \"Thursday\": [],\n      \"Friday\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: place_id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: from\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: to\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/reports/get-charging-activity-histogram-data.js",
    "groupTitle": "REPORT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reports/histogram-data"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/reports/summary",
    "title": "Report Charging Activity Summary",
    "version": "0.3.1",
    "name": "Report_Charging_Activity_Summary",
    "group": "REPORT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Report Charging Activity Summary</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "month",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "year",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "from",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "to",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": \"6722, 2556\",\n  \"month\": 3,\n  \"year\": 2019,\n  \"from\": 1547942400,\n  \"to\": 1548384093\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/reports/summary?place_id=6722, 2556&month=3&year=2019&from=1547942400&to=1548384093 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"total_kwhs\": 0,\n    \"sessions_data\": {\n      \"instant_charging_count\": 0,\n      \"reservations_count\": 0\n    },\n    \"access_code_data\": {},\n    \"totalPayingSessions\": 0,\n    \"totalRevenue\": 0,\n    \"averageRevenue\": null,\n    \"averageKwhs\": null,\n    \"usersData\": [],\n    \"averageDailyWeekdaySessionPerOutlet\": 0,\n    \"averageDailyWeekendSessionPerOutlet\": 0,\n    \"weekdaySessionPerOutlet\": [\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0\n    ],\n    \"weekendSessionPerOutlet\": [\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0,\n      0\n    ],\n    \"dayWiseGrouping\": {},\n    \"reservationsMeta\": []\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reports/get-charging-activity-summary.js",
    "groupTitle": "REPORT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reports/summary"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/reports/places/issues",
    "title": "Report Issues",
    "version": "0.3.1",
    "name": "Report_Issues",
    "group": "REPORT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Report Issues</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limit",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"status\": 1,\n  \"page\": 2,\n  \"limit\": 20\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/reports/places/issues?status=1&page=2&limit=20 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"total\": 0,\n    \"page_size\": 20,\n    \"next_page\": null,\n    \"items\": [],\n    \"report_statuses\": {\n      \"ACTIVE\": 1,\n      \"RESOLVED\": 2,\n      \"IGNORED\": 3,\n      \"INVALID\": 4,\n      \"OTHERS\": 5\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reports/get-report-issues.js",
    "groupTitle": "REPORT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reports/places/issues"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/reports/reservations",
    "title": "Report Reservation",
    "version": "0.3.1",
    "name": "Report_Reservation",
    "group": "REPORT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Report Reservation</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "last_hours",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "last_days",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "from",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "to",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"last_hours\": 96,\n  \"last_days\": 4,\n  \"from\": 1547942400,\n  \"to\": 1548384093\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/reports/reservations?last_hours=96&last_days=4&from=1547942400&to=1548384093 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"id\": 1099,\n    \"user_id\": 3993,\n    \"user_name\": \"Hai Pham\",\n    \"outlet_id\": 8488,\n    \"time_start\": 1587369459,\n    \"time_end\": 1587371400,\n    \"host_data\": {\n      \"user_id\": 3993,\n      \"place_id\": 4919,\n      \"place_name\": \"ampUp Vietnam\",\n      \"place_phone\": \"0834123456\",\n      \"place_address\": \"290 An Dương Vương, Phường 4, Quận 5, Hồ Chí Minh, Việt Nam\",\n      \"charger_id\": 6723,\n      \"charger_name\": \"#2\",\n      \"outlet_id\": 8488,\n      \"connector_id\": 3,\n      \"price\": 5,\n      \"test_mode\": null,\n      \"need_confirm\": null,\n      \"place_grace_period\": 10\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reports/get-reservations.js",
    "groupTitle": "REPORT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reports/reservations"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/reports/places/issues",
    "title": "Set Place Issue",
    "version": "0.3.1",
    "name": "Set_Place_Issue",
    "group": "REPORT",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Set Place Issue</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Report</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 20,\n  \"status\": 1\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n   --url http://localhost:6969/reports/places/issues \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"id\": 20,\n     \"status\": 1\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"status\": 1,\n    \"updated_at\": \"1587375625\",\n    \"updated_by\": 4007,\n    \"id\": \"20\",\n    \"place_id\": 61,\n    \"issue\": \"yewywgdgdvd gdbxbxbxbsbsbsbs bzzvgssggsgsg yehwhdgshdbdhf yeheheheh ydbdhdhdhd \\neywywwhh\",\n    \"created_by\": 70,\n    \"created_at\": \"1565841808\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Data not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/reports/set-issue-status.js",
    "groupTitle": "REPORT",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reports/places/issues"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/reservations/:id/yes",
    "title": "Accept Reservation",
    "version": "0.3.1",
    "name": "Accept_Reservation",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Accept Reservation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The id of code reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>The code for reservation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 363,\n  \"code\": \"e1768a19ac54f1829e2bf856948ac4be\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/reservations/363/yes?code=e1768a19ac54f1829e2bf856948ac4be \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"There is no reservation with the given ID need to be confirmed!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/reservation/accept-reservation.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reservations/:id/yes"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/all-reservations",
    "title": "All Reservation",
    "version": "0.3.1",
    "name": "All_Reservation",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>All Reservation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limit",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>The status of reservation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"page\": 1,\n  \"limit\": 10,\n  \"status\": 6\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/all-reservations?page=1&limit=10&status=6 \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/get-all-reservations.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/all-reservations"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/:place_id/all-reservations",
    "title": "All Reservation of Place",
    "version": "0.3.1",
    "name": "All_Reservation_of_Place",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>All Reservation of Place</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of place</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 363\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request DELETE \\\n   --url http://localhost:6969/363/all-reservations \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/get-all-reservations-wrt-place.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/:place_id/all-reservations"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/reservations/:id/cancel",
    "title": "Cancel Reservation",
    "version": "0.3.1",
    "name": "Cancel_Reservation",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Cancel Reservation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The id of code reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The message</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_host",
            "description": "<p>is host?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 363,\n  \"user_id\": 24,\n  \"message\": \"The charger is not available at that time!\",\n  \"is_host\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n   --url http://localhost:6969/reservations/363/cancel \\\n   --header 'content-type: application/json' \\\n   --data '{\n     \"user_id\": 24,\n     \"message\": \"The charger is not available at that time!\",\n     \"is_host\": true\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Sorry, you do not allow to cancel this reservation! You must do it 30 minutes before charging time.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/reservation/cancel-reservation.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reservations/:id/cancel"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/reservations/:id/finish",
    "title": "Complete Complete",
    "version": "0.3.1",
    "name": "Complete_Complete",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Complete Complete</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>The code reservation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"code\": \"e1768a19ac54f1829e2bf856948ac4be\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n   --url http://localhost:6969/reservations/417/finish?code=e1768a19ac54f1829e2bf856948ac4be \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/complete-reservation.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reservations/:id/finish"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/reservations",
    "title": "Create Reservation New",
    "version": "0.3.1",
    "name": "Create_Reservation_New",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Create Reservation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The id of reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "outlet_id",
            "description": "<p>The id outlet</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "time_start",
            "description": "<p>The start time</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "time_end",
            "description": "<p>The end time</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time_start_text",
            "description": "<p>The start time by text</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time_end_text",
            "description": "<p>The end time by text</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "duration_text",
            "description": "<p>The duration text</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "day_order",
            "description": "<p>The day order</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_fee",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_fee_percent",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_payment_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_instant_charging",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 363,\n  \"outlet_id\": 8499,\n  \"user_id\": 3996,\n  \"time_start\": 1585718175,\n  \"time_end\": 1585720800,\n  \"time_start_text\": \"{\\\"date\\\":\\\"01/04/2020\\\",\\\"time\\\":\\\"12:02 PM\\\"}\",\n  \"time_end_text\": \"{\\\"date\\\":\\\"01/04/2020\\\",\\\"time\\\":\\\"01:00 PM\\\"}\",\n  \"duration_text\": \"58 minutes\",\n  \"amount\": 0.9,\n  \"day_order\": 3,\n  \"service_fee\": 5,\n  \"service_fee_percent\": \"5\",\n  \"user_payment_id\": 144,\n  \"is_instant_charging\": true,\n  \"price\": 15\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/reservations \\\n   --header 'content-type: application/json' \\\n   --data '{\n     \"outlet_id\": 8499,\n     \"user_id\": 3996,\n     \"time_start\": 1585718175,\n     \"time_end\": 1585720800,\n     \"time_start_text\": \"{\\\"date\\\":\\\"01/04/2020\\\",\\\"time\\\":\\\"12:02 PM\\\"}\",\n     \"time_end_text\": \"{\\\"date\\\":\\\"01/04/2020\\\",\\\"time\\\":\\\"01:00 PM\\\"}\",\n     \"duration_text\": \"58 minutes\",\n     \"amount\": 0.9,\n     \"date\": 1585674000,\n     \"day_order\": 3,\n     \"service_fee\": 5,\n     \"service_fee_percent\": \"5\",\n     \"currency\": \"\",\n     \"user_payment_id\": 144,\n     \"is_instant_charging\": true,\n     \"price\": 15\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/create-reservation-v2.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reservations"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/reservations",
    "title": "Create Reservation New",
    "version": "0.3.1",
    "name": "Create_Reservation_New",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Create Reservation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The id of reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "outlet_id",
            "description": "<p>The id outlet</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "time_start",
            "description": "<p>The start time</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "time_end",
            "description": "<p>The end time</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time_start_text",
            "description": "<p>The start time by text</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time_end_text",
            "description": "<p>The end time by text</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "duration_text",
            "description": "<p>The duration text</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "day_order",
            "description": "<p>The day order</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_fee",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_fee_percent",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_payment_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_instant_charging",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 363,\n  \"outlet_id\": 8499,\n  \"user_id\": 3996,\n  \"time_start\": 1585718175,\n  \"time_end\": 1585720800,\n  \"time_start_text\": \"{\\\"date\\\":\\\"01/04/2020\\\",\\\"time\\\":\\\"12:02 PM\\\"}\",\n  \"time_end_text\": \"{\\\"date\\\":\\\"01/04/2020\\\",\\\"time\\\":\\\"01:00 PM\\\"}\",\n  \"duration_text\": \"58 minutes\",\n  \"amount\": 0.9,\n  \"day_order\": 3,\n  \"service_fee\": 5,\n  \"service_fee_percent\": \"5\",\n  \"user_payment_id\": 144,\n  \"is_instant_charging\": true,\n  \"price\": 15\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/reservations \\\n   --header 'content-type: application/json' \\\n   --data '{\n     \"outlet_id\": 8499,\n     \"user_id\": 3996,\n     \"time_start\": 1585718175,\n     \"time_end\": 1585720800,\n     \"time_start_text\": \"{\\\"date\\\":\\\"01/04/2020\\\",\\\"time\\\":\\\"12:02 PM\\\"}\",\n     \"time_end_text\": \"{\\\"date\\\":\\\"01/04/2020\\\",\\\"time\\\":\\\"01:00 PM\\\"}\",\n     \"duration_text\": \"58 minutes\",\n     \"amount\": 0.9,\n     \"date\": 1585674000,\n     \"day_order\": 3,\n     \"service_fee\": 5,\n     \"service_fee_percent\": \"5\",\n     \"currency\": \"\",\n     \"user_payment_id\": 144,\n     \"is_instant_charging\": true,\n     \"price\": 15\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/create-reservation.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reservations"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/reservations/:id",
    "title": "Delete Reservation",
    "version": "0.3.1",
    "name": "Delete_Reservation",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Delete Reservation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The id of reservation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 363\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request DELETE \\\n   --url http://localhost:6969/reservations/363 \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/delete-reservation.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reservations/:id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/reservations/:id",
    "title": "Get Reservation",
    "version": "0.3.1",
    "name": "Get_Reservation",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get Reservation</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of reservation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/reservations/:id \\\n   --header 'authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/get-reservation.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reservations/:id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "host-reservations",
    "title": "Host Reservation",
    "version": "0.3.1",
    "name": "Host_Reservation",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Host Reservation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "host_id",
            "description": "<p>The id of host User</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limit",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"host_id\": 57,\n  \"page\": 1,\n  \"limit\": 50\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969host-reservations?host_id=57&page=1&limit=50 \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/get-host-reservations.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969host-reservations"
      }
    ]
  },
  {
    "type": "GET",
    "url": "host-reservations",
    "title": "Host Reservation New",
    "version": "0.3.1",
    "name": "Host_Reservation_New",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Host Reservation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "host_id",
            "description": "<p>The id of host User</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limit",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"host_id\": 57,\n  \"page\": 1,\n  \"limit\": 50\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969host-reservations?host_id=57&page=1&limit=50 \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/get-host-reservations-v2.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969host-reservations"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/reservations/:id/no",
    "title": "Reject Reservation",
    "version": "0.3.1",
    "name": "Reject_Reservation",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Reject Reservation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>The code reservation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"code\": \"e1768a19ac54f1829e2bf856948ac4be\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/reservations/417/no?code=e1768a19ac54f1829e2bf856948ac4be \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/reject-reservation.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reservations/:id/no"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/reservations/scan-qr-code-for-charging",
    "title": "Scan QR code For Charging",
    "version": "0.3.1",
    "name": "Scan_QR_code_For_Charging",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Scan QR code For Charging</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "qr_code",
            "description": "<p>The text in QR code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"qr_code\": \"0JYQ3MON\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/reservations/scan-qr-code-for-charging \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"qr_code\": \"0JYQ3MON\"\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/scan-qr-code-for-charging.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reservations/scan-qr-code-for-charging"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/reservations/:id",
    "title": "Update Reservation",
    "version": "0.3.1",
    "name": "Update_Reservation",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Update Reservation</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "outlet_id",
            "description": "<p>The id of outlet</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "time_start",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "time_end",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "service_fee",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "currency",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_payment_id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 363,\n  \"outlet_id\": 2,\n  \"user_id\": 1,\n  \"time_start\": 1546921552,\n  \"time_end\": 1546925152,\n  \"amount\": 2,\n  \"service_fee\": 1,\n  \"currency\": \"usd\",\n  \"user_payment_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n   --url http://localhost:6969/reservations/363 \\\n   --header 'authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"outlet_id\": 2,\n     \"user_id\": 1,\n     \"time_start\": 1546921552,\n     \"time_end\": 1546925152,\n     \"amount\": 2,\n     \"service_fee\": 1,\n     \"currency\": \"usd\",\n     \"user_payment_id\": 1\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/update-reservation.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reservations/:id"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/reservations/:id/notify",
    "title": "Update Reservation Status",
    "version": "0.3.1",
    "name": "Update_Reservation_Status",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Update Reservation Status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>The id of status of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "src",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"status\": 2,\n  \"src\": \"insomnia\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n   --url http://localhost:6969/reservations/96/notify \\\n   --header 'content-type: application/json' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"status\": 2,\n     \"src\": \"insomnia\"\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/notify-reservation.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reservations/:id/notify"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/reservations/:id/status",
    "title": "Update Reservation Status",
    "version": "0.3.1",
    "name": "Update_Reservation_Status",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Update Reservation Status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>The id of status of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "src",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"status\": 2,\n  \"src\": \"insomnia\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request PUT \\\n   --url http://localhost:6969/reservations/96/status \\\n   --header 'content-type: application/json' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"status\": 2,\n     \"src\": \"insomnia\"\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/update-reservation-status.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/reservations/:id/status"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/user-reservations",
    "title": "User Reservation",
    "version": "0.3.1",
    "name": "User_Reservation",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>User Reservation</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limit",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"user_id\": 3958,\n  \"page\": 1,\n  \"limit\": 10\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/user-reservations?user_id=3958&page=1&limit=10 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/get-user-reservations.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/user-reservations"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/user-reservations",
    "title": "User Reservation New",
    "version": "0.3.1",
    "name": "User_Reservation_New",
    "group": "RESERVATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>User Reservation</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limit",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"user_id\": 3958,\n  \"page\": 1,\n  \"limit\": 10\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/user-reservations?user_id=3958&page=1&limit=10 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/reservation/get-user-reservations-v2.js",
    "groupTitle": "RESERVATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/user-reservations"
      }
    ]
  },
  {
    "type": "get",
    "url": "/",
    "title": "root endpoint",
    "version": "0.3.1",
    "name": "root",
    "group": "Root",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Root endpoint</p>",
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n  --url http://localhost:6969",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UP_STAGE",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PAGINATION_LIMIT",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "S3_BUCKET",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UPLOAD_MAX_FILESIZE",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "QUEUE_LIMIT",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"version\": \"1.0.0\",\n  \"UP_STAGE\": \"development\",\n  \"PAGINATION_LIMIT\": \"20\",\n  \"S3_BUCKET\": \"ampup-dev\",\n  \"UPLOAD_MAX_FILESIZE\": \"2M\",\n  \"QUEUE_LIMIT\": \"300\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/status.js",
    "groupTitle": "Root",
    "sampleRequest": [
      {
        "url": "/"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/station/bookmark-stations",
    "title": "Create Bookmark Station",
    "version": "0.3.1",
    "name": "Create_Bookmark_Station",
    "group": "STATION",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create Bookmark Station</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of Place</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "is_public",
            "description": "<p>is public station? 0 | 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"user_id\": 3997,\n  \"place_id\": 4865,\n  \"is_public\": 0\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/station/bookmark-stations \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"user_id\": 3997,\n     \"place_id\": 4865,\n     \"is_public\": 0\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"_id\": \"5e9d540f90725d00120957e9\",\n    \"user_id\": 3997,\n    \"place_id\": \"4865\",\n    \"is_public\": false,\n    \"receive_notification\": true,\n    \"created_at\": 1587368975,\n    \"updated_at\": 1587368975,\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or invalid parameter: user_id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or invalid parameter: place_id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or invalid parameter: is_public\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/station/create-bookmark-stations.js",
    "groupTitle": "STATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/station/bookmark-stations"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/station/bookmark-stations",
    "title": "Delete Bookmark Station",
    "version": "0.3.1",
    "name": "Delete_Bookmark_Station",
    "group": "STATION",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Delete Bookmark Station</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "place_id",
            "description": "<p>The id of Place</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"place_id\": 4865\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request DELETE \\\n   --url http://localhost:6969/station/bookmark-stations?place_id=4865 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing or invalid parameter: place_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/station/delete-bookmark-stations.js",
    "groupTitle": "STATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/station/bookmark-stations"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/station/bookmark-stations",
    "title": "Get Bookmark Station",
    "version": "0.3.1",
    "name": "Get_Bookmark_Station",
    "group": "STATION",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Bookmark Station</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/station/bookmark-stations \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/station/get-bookmark-stations.js",
    "groupTitle": "STATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/station/bookmark-stations"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/station/get-station-for-mobile",
    "title": "Get Station For Mobile",
    "version": "0.3.1",
    "name": "Get_Station_For_Mobile",
    "group": "STATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get Station For Mobile</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat_min",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat_max",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng_min",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng_max",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "zoom",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "available",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "connectors",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "networks",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "map_type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "add_evanescent",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "is_private_station",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"lat_min\": -90,\n  \"lat_max\": 32,\n  \"lng_min\": -91,\n  \"lng_max\": 31.5,\n  \"zoom\": 5,\n  \"available\": \"1\",\n  \"connectors\": \"1,2,3\",\n  \"networks\": \"1,17,0\",\n  \"map_type\": 1,\n  \"is_private_station\": 1\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/station/get-station-for-mobile?lat_min=-90&lat_max=32&lng_min=-91&lng_max=31.5&zoom=5&networks=1,17,0&available=1&connectors=1,2,3&is_private_station=1&add_evanescent=0&map_type=1 \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"group_type\": \"geopoint\",\n      \"lat_min\": 27.166244094260037,\n      \"lat_max\": 29.486711961217225,\n      \"lng_min\": -81.55905805528164,\n      \"lng_max\": -80.22691707126796,\n      \"centroid\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n          -81.29924068102308,\n          28.5203718783598\n        ]\n      },\n      \"total\": 268\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/station/get-station-for-mobile-v2.js",
    "groupTitle": "STATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/station/get-station-for-mobile"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/station/get-station-for-web",
    "title": "Get Station For Web",
    "version": "0.3.1",
    "name": "Get_Station_For_Web",
    "group": "STATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get Station For Web</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat_min",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat_max",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng_min",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng_max",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "zoom",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "available",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "connectors",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "networks",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"lat_min\": -90,\n  \"lat_max\": 32,\n  \"lng_min\": -91,\n  \"lng_max\": 31.5,\n  \"zoom\": 5,\n  \"available\": \"1\",\n  \"connectors\": \"1,2,3\",\n  \"networks\": \"1,17,0\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/station/get-station-for-web?lat_min=-90&lat_max=32&lng_min=-91&lng_max=31.5&zoom=5&networks=1,17,0&available=1&connectors=1,2,3 \\\n   --header 'content-type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"group_type\": \"geopoint\",\n      \"lat_min\": 27.166244094260037,\n      \"lat_max\": 29.486711961217225,\n      \"lng_min\": -81.55905805528164,\n      \"lng_max\": -80.22691707126796,\n      \"centroid\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n          -81.29924068102308,\n          28.5203718783598\n        ]\n      },\n      \"total\": 268\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/station/get-station-for-web.js",
    "groupTitle": "STATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/station/get-station-for-web"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/station/request-station",
    "title": "Request Station",
    "version": "0.3.1",
    "name": "Request_Station",
    "group": "STATION",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Request Station</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "charging_infra_type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"email\": \"ampup.tott@gmail.com\",\n  \"name\": \"Abel Tran\",\n  \"address\": \"15 Do Ngoc Thanh\",\n  \"phone\": \"xxxx-xxx-xxx\",\n  \"description\": \"TEST\",\n  \"charging_infra_type\": 1\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/station/request-station \\\n   --header 'content-type: application/json' \\\n   --data '{\n     \"email\": \"ampup.tott@gmail.com\",\n     \"name\": \"Abel Tran\",\n     \"address\": \"15 Do Ngoc Thanh\",\n     \"phone\": \"xxxx-xxx-xxx\",\n     \"description\": \"TEST\",\n     \"charging_infra_type\": 1\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"name\": \"Abel Tran\",\n    \"email\": \"ampup.tott@gmail.com\",\n    \"description\": \"TEST\",\n    \"charging_infra_type\": \"1\",\n    \"status\": 1,\n    \"created_at\": 1587370523,\n    \"updated_at\": 1587370523,\n    \"address\": \"15 Do Ngoc Thach\",\n    \"id\": 4,\n    \"user_id\": null,\n    \"phone\": \"xxxx-xxx-xxx\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please enter your name!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please enter short description!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please enter your email!\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 4",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Please enter charging infra type!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/station/request-station.js",
    "groupTitle": "STATION",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/station/request-station"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/vehicles",
    "title": "Create Vehicle",
    "version": "0.3.1",
    "name": "Create_Vehicle",
    "group": "VEHICLE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Create Vehicle</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "maker_id",
            "description": "<p>The id of Maker</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "model",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "year",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "color",
            "description": "<p>The color of Vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "photo",
            "description": "<p>The url of photo</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "connector_id",
            "description": "<p>The id of connector</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"maker_id\": 23,\n  \"model\": \"Model S 85\",\n  \"year\": \"2013\",\n  \"color\": \"Matte Purple\",\n  \"photo\": \"https://s3.amazonaws.com/ucassets/car/vehicle/Tesla/Tesla.png\",\n  \"connector_id\": 8\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n   --url http://localhost:6969/vehicles \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\\n   --data '{\n     \"maker_id\": 23,\n     \"model\": \"Model S 85\",\n     \"year\": \"2013\",\n     \"color\": \"Matte Purple\",\n     \"photo\": \"https://s3.amazonaws.com/ucassets/car/vehicle/Tesla/Tesla.png\",\n     \"connector_id\": 8\n   }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"id\": 167,\n    \"maker_id\": 23,\n    \"model\": \"Model S 85\",\n    \"year\": \"2013\",\n    \"color\": \"Matte Purple\",\n    \"keywords\": \"Tesla Model S 85 2013\",\n    \"status\": 1,\n    \"created_at\": 1558401230,\n    \"updated_at\": null,\n    \"photo\": \"https://s3.amazonaws.com/ucassets/car/vehicle/Tesla/imgTeslaMattePurple%403x.jpg\",\n    \"connector_id\": 8,\n    \"connectors\": [\n      {\n        \"id\": 167,\n        \"vehicle_id\": 167,\n        \"connector_id\": 8,\n        \"status\": 1,\n        \"created_at\": 1558401995,\n        \"updated_at\": null\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example 1",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: maker_id\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 2",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: model\"\n}",
          "type": "json"
        },
        {
          "title": "Error Example 3",
          "content": "{\n  \"status\": \"FAIL\",\n  \"reason\": \"Missing parameter: connector_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/vehicle/create-vehicle.js",
    "groupTitle": "VEHICLE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/vehicles"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/vehicles/:id",
    "title": "Get Vehicle",
    "version": "0.3.1",
    "name": "Get_Vehicle",
    "group": "VEHICLE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Vehicle</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of Vehicle</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params Example",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/vehicles/1 \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"id\": 1,\n    \"maker_id\": 1,\n    \"model\": \"A3 Sportback e-tron\",\n    \"year\": \"2016\",\n    \"color\": \"Ibis White,Brilliant Black,Glacier White Metallic,Florett Silver Metallic, Monsoon Gray Metallic, Dakota Gray Metallic ,Mythos Black Metallic,,Scuba Blue Metallic,Misano Red Pearl\",\n    \"keywords\": \"Audi A3 Sportback e-tron 2016\",\n    \"status\": 1,\n    \"created_at\": 1548330549,\n    \"updated_at\": 1548330549,\n    \"photo\": \"https://s3.amazonaws.com/ucassets/car/vehicle/Audi/Audi_A3Sportbacketron_BrilliantBlack.png\",\n    \"connector_id\": 3,\n    \"connectors\": [\n      {\n        \"id\": 3,\n        \"name\": \"J1772\",\n        \"level\": 2,\n        \"photo\": \"https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-J1772-v1.png\"\n      }\n    ],\n    \"colors\": [\n      {\n        \"id\": 1,\n        \"name\": \"Ibis White\"\n      },\n      {\n        \"id\": 2,\n        \"name\": \"Brilliant Black\"\n      },\n      {\n        \"id\": 3,\n        \"name\": \"Glacier White Metallic\"\n      },\n      {\n        \"id\": 4,\n        \"name\": \"Florett Silver Metallic\"\n      },\n      {\n        \"id\": 5,\n        \"name\": \" Monsoon Gray Metallic\"\n      },\n      {\n        \"id\": 6,\n        \"name\": \" Dakota Gray Metallic \"\n      },\n      {\n        \"id\": 7,\n        \"name\": \"Mythos Black Metallic\"\n      },\n      {\n        \"id\": 8,\n        \"name\": \"\"\n      },\n      {\n        \"id\": 9,\n        \"name\": \"Scuba Blue Metallic\"\n      },\n      {\n        \"id\": 10,\n        \"name\": \"Misano Red Pearl\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/vehicle/get-vehicle.js",
    "groupTitle": "VEHICLE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/vehicles/:id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/vehicles",
    "title": "Get Vehicles",
    "version": "0.3.1",
    "name": "Get_Vehicles",
    "group": "VEHICLE",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get Vehicles</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request GET \\\n   --url http://localhost:6969/vehicles \\\n   --header 'content-type: application/json' \\\n   --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>The data returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": [\n    {\n      \"id\": 65,\n      \"maker_id\": 16,\n      \"maker_name\": \"Mercedes-Benz\",\n      \"maker_logo\": \"https://cdn.motor1.com/images/mkt/z7/s1/mercedes-benz2.png\",\n      \"model\": \"C350e Plug-in Hybrid\",\n      \"year\": \"2016\",\n      \"color\": \"Black,Designo Cashmere White Magno,Polar White,Obsidian Black Metallic,Designo Selenite Grey Magno Matte,Iridium Silver Metallic,Dakota Brown Metallic,Lunar Blue Metallic,Brilliant Blue Metallic,Diamond Silver Metallic,Selenite Grey Metallic,Brilliant Blue Metallic,Diamond Silver Metallic,Selenite Grey Metallic,Designo Cardinal Red Metallic,Designo Cardinal Red Metallic\",\n      \"photo\": \"https://s3.amazonaws.com/ucassets/car/vehicle/Mercedes_C350e/Mercedes_C350e.png\",\n      \"keywords\": \"Mercedes C350e Plug-in Hybrid 2016\",\n      \"connector_id\": 3,\n      \"colors\": [\n        {\n          \"id\": 1,\n          \"name\": \"Black\"\n        },\n        {\n          \"id\": 2,\n          \"name\": \"Designo Cashmere White Magno\"\n        },\n        {\n          \"id\": 3,\n          \"name\": \"Polar White\"\n        },\n        {\n          \"id\": 4,\n          \"name\": \"Obsidian Black Metallic\"\n        },\n        {\n          \"id\": 5,\n          \"name\": \"Designo Selenite Grey Magno Matte\"\n        },\n        {\n          \"id\": 6,\n          \"name\": \"Iridium Silver Metallic\"\n        },\n        {\n          \"id\": 7,\n          \"name\": \"Dakota Brown Metallic\"\n        },\n        {\n          \"id\": 8,\n          \"name\": \"Lunar Blue Metallic\"\n        },\n        {\n          \"id\": 9,\n          \"name\": \"Brilliant Blue Metallic\"\n        },\n        {\n          \"id\": 10,\n          \"name\": \"Diamond Silver Metallic\"\n        },\n        {\n          \"id\": 11,\n          \"name\": \"Selenite Grey Metallic\"\n        },\n        {\n          \"id\": 12,\n          \"name\": \"Brilliant Blue Metallic\"\n        },\n        {\n          \"id\": 13,\n          \"name\": \"Diamond Silver Metallic\"\n        },\n        {\n          \"id\": 14,\n          \"name\": \"Selenite Grey Metallic\"\n        },\n        {\n          \"id\": 15,\n          \"name\": \"Designo Cardinal Red Metallic\"\n        },\n        {\n          \"id\": 16,\n          \"name\": \"Designo Cardinal Red Metallic\"\n        }\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>FAIL</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The cause of Error.</p>"
          }
        ]
      }
    },
    "filename": "lambda/vehicle/get-vehicles.js",
    "groupTitle": "VEHICLE",
    "sampleRequest": [
      {
        "url": "http://localhost:6969/vehicles"
      }
    ]
  }
] });
