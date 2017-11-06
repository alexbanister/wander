export const mockFlights = [
  {
    "kind": "qpxExpress#tripsSearch",
    "trips": {
      "kind": "qpxexpress#tripOptions",
      "data": {
        "kind": "qpxexpress#data",
        "airport": [
          {
            "kind": "qpxexpress#airportData",
            "code": "CDG",
            "city": "PAR",
            "name": "Paris Charles de Gaulle"
          }, {
            "kind": "qpxexpress#airportData",
            "code": "DEN",
            "city": "DEN",
            "name": "Denver International"
          }, {
            "kind": "qpxexpress#airportData",
            "code": "ORD",
            "city": "CHI",
            "name": "Chicago O'Hare"
          }
        ],
        "city": [
          {
            "kind": "qpxexpress#cityData",
            "code": "CHI",
            "name": "Chicago"
          }, {
            "kind": "qpxexpress#cityData",
            "code": "DEN",
            "name": "Denver"
          }, {
            "kind": "qpxexpress#cityData",
            "code": "PAR",
            "name": "Paris"
          }
        ]
      },
      "tripOption": [
        {
          "kind": "qpxexpress#tripOption",
          "saleTotal": "USD1619.76",
          "slice": [
            {
              "kind": "qpxexpress#sliceInfo",
              "duration": 1061,
              "segment": [
                {
                  "duration": 555,
                  "flight": {
                    "carrier": "IB",
                    "number": "4115"
                  },
                  "leg": [
                    {
                      "arrivalTime": "2018-01-04T14:30-06:00",
                      "departureTime": "2018-01-04T12:15+01:00",
                      "origin": "CDG",
                      "destination": "ORD",
                      "duration": 555
                    }
                  ],
                  "connectionDuration": 345
                }, {
                  "duration": 161,
                  "flight": {
                    "carrier": "IB",
                    "number": "7015"
                  },
                  "leg": [
                    {
                      "arrivalTime": "2018-01-04T21:56-07:00",
                      "departureTime": "2018-01-04T20:15-06:00",
                      "origin": "ORD",
                      "destination": "DEN",
                      "duration": 161
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
];

export const airportCodesMock = {
  "airports": [
    {
      "name": "Denver International Airport ",
      "city": "Denver",
      "iata": "DEN",
      "country": {
        "name": "United States",
        "iso": "US"
      },
      "state": {
        "name": "Colorado",
        "abbr": "CO"
      }
    }, {
      "name": "Berlin - All Airports",
      "city": "Berlin",
      "iata": "BER",
      "children": [
        {
          "name": "Berlin Tegel Airport",
          "city": "Berlin",
          "iata": "TXL",
          "state": {
            "name": "Berlin",
            "abbr": "BE"
          }
        }, {
          "name": "Berlin-Schonefeld International Airport",
          "city": "Berlin",
          "iata": "SXF",
          "state": {
            "name": "Brandenburg",
            "abbr": "BB"
          }
        }
      ],
      "country": {
        "name": "Germany",
        "iso": "DE"
      },
      "state": {
        "name": "Brandenburg",
        "abbr": "BB"
      }
    }, {
      "name": "Providenciales International Airport",
      "city": "Providenciales",
      "iata": "PLS",
      "country": {
        "name": "Turks and Caicos Islands",
        "iso": "TC"
      },
      "state": {
        "name": "Providenciales",
        "abbr": null
      }
    }, {
      "name": "Karlsruhe/Baden-Baden Airport",
      "city": "Karlsruhe",
      "iata": "FKB",
      "country": {
        "name": "Germany",
        "iso": "DE"
      },
      "state": {
        "name": "Baden-Württemberg",
        "abbr": "BW"
      }
    }, {
      "name": "Ngurah Rai International Airport",
      "city": "Denpasar",
      "iata": "DPS",
      "country": {
        "name": "Indonesia",
        "iso": "ID"
      },
      "state": {
        "name": "Bali",
        "abbr": "ID-BA"
      }
    }, {
      "name": "Nassau International Airport",
      "city": "Nassau",
      "iata": "NAS",
      "country": {
        "name": "Bahamas",
        "iso": "BS"
      },
      "state": {
        "name": " New Providence",
        "abbr": null
      }
    }, {
      "name": "Aden International Airport",
      "city": "Aden",
      "iata": "ADE",
      "country": {
        "name": "Yemen",
        "iso": "YE"
      },
      "state": {
        "name": "Aden",
        "abbr": null
      }
    }, {
      "name": "Aden Adde International Airport",
      "city": "Mogadishu",
      "iata": "MGQ",
      "country": {
        "name": "Somalia",
        "iso": "SO"
      },
      "state": {
        "name": "Banaadir",
        "abbr": null
      }
    }
  ],
  "term": "den",
  "limit": "10",
  "size": 0,
  "cached": false,
  "status": true,
  "statusCode": 200
};
