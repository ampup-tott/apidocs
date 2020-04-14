define({ "api": [
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
  }
] });
