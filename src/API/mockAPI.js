export const mockData = {
  "kind": "qpxExpress#tripsSearch",
  "trips": {
    "kind": "qpxexpress#tripOptions",
    "requestId": "38r7ljz0BHdQfyt1E0RYYT",
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
          "code": "DFW",
          "city": "DFW",
          "name": "Dallas/Fort Worth International"
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
          "code": "DFW",
          "name": "Dallas/Fort Worth"
        }, {
          "kind": "qpxexpress#cityData",
          "code": "PAR",
          "name": "Paris"
        }
      ],
      "aircraft": [
        {
          "kind": "qpxexpress#aircraftData",
          "code": "32B",
          "name": "Airbus A321 (Sharklets)"
        }, {
          "kind": "qpxexpress#aircraftData",
          "code": "738",
          "name": "Boeing 737"
        }, {
          "kind": "qpxexpress#aircraftData",
          "code": "789",
          "name": "Boeing 787"
        }
      ],
      "tax": [
        {
          "kind": "qpxexpress#taxData",
          "id": "XY",
          "name": "US Immigration Fee"
        }, {
          "kind": "qpxexpress#taxData",
          "id": "IZ_001",
          "name": "France Air Passenger Solidarity Tax"
        }, {
          "kind": "qpxexpress#taxData",
          "id": "QX_001",
          "name": "France Passenger Service Charge International"
        }, {
          "kind": "qpxexpress#taxData",
          "id": "FR_007",
          "name": "France Airport Tax Domestic And International"
        }, {
          "kind": "qpxexpress#taxData",
          "id": "AY_001",
          "name": "US September 11th Security Fee"
        }, {
          "kind": "qpxexpress#taxData",
          "id": "US_002",
          "name": "US International Departure Tax"
        }, {
          "kind": "qpxexpress#taxData",
          "id": "XA",
          "name": "USDA APHIS Fee"
        }, {
          "kind": "qpxexpress#taxData",
          "id": "YC",
          "name": "US Customs Fee"
        }, {
          "kind": "qpxexpress#taxData",
          "id": "YQ_I",
          "name": "BA YQ surcharge"
        }, {
          "kind": "qpxexpress#taxData",
          "id": "FR_001",
          "name": "France Civil Aviation Tax Domestic And International"
        }, {
          "kind": "qpxexpress#taxData",
          "id": "XF",
          "name": "US Passenger Facility Charge"
        }
      ],
      "carrier": [
        {
          "kind": "qpxexpress#carrierData",
          "code": "BA",
          "name": "British Airways p.l.c."
        }, {
          "kind": "qpxexpress#carrierData",
          "code": "IB",
          "name": "IBERIA"
        }
      ]
    },
    "tripOption": [
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD1619.76",
        "id": "XXFQQyuD8YHRqld7Hezrm2003",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 761,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 150,
                "flight": {
                  "carrier": "BA",
                  "number": "5344"
                },
                "id": "GNyoyc09HgiCQZiB",
                "cabin": "PREMIUM_COACH",
                "bookingCode": "T",
                "bookingCodeCount": 7,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LnDamrlLwENojbeh",
                    "aircraft": "738",
                    "arrivalTime": "2017-12-22T15:59-06:00",
                    "departureTime": "2017-12-22T12:29-07:00",
                    "origin": "DEN",
                    "destination": "ORD",
                    "destinationTerminal": "3",
                    "duration": 150,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 885,
                    "secure": true
                  }
                ],
                "connectionDuration": 141
              }, {
                "kind": "qpxexpress#segmentInfo",
                "duration": 470,
                "flight": {
                  "carrier": "BA",
                  "number": "1602"
                },
                "id": "GbsonhssY1TfIYcn",
                "cabin": "PREMIUM_COACH",
                "bookingCode": "T",
                "bookingCodeCount": 2,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "Lp-IUJEK9wjRwB8S",
                    "aircraft": "789",
                    "arrivalTime": "2017-12-23T09:10+01:00",
                    "departureTime": "2017-12-22T18:20-06:00",
                    "origin": "ORD",
                    "destination": "CDG",
                    "originTerminal": "3",
                    "destinationTerminal": "2A",
                    "duration": 470,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 4139,
                    "meal": "Breakfast",
                    "secure": true
                  }
                ]
              }
            ]
          }, {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1061,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 555,
                "flight": {
                  "carrier": "IB",
                  "number": "4115"
                },
                "id": "GYqkFFcRqFZD6YBl",
                "cabin": "COACH",
                "bookingCode": "S",
                "bookingCodeCount": 5,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LjTz2mSE5BA5Iwkk",
                    "aircraft": "789",
                    "arrivalTime": "2018-01-04T14:30-06:00",
                    "departureTime": "2018-01-04T12:15+01:00",
                    "origin": "CDG",
                    "destination": "ORD",
                    "originTerminal": "2A",
                    "destinationTerminal": "5",
                    "duration": 555,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 4139,
                    "secure": true
                  }
                ],
                "connectionDuration": 345
              }, {
                "kind": "qpxexpress#segmentInfo",
                "duration": 161,
                "flight": {
                  "carrier": "IB",
                  "number": "7015"
                },
                "id": "GkCYpNnBn0nW6PwU",
                "cabin": "COACH",
                "bookingCode": "S",
                "bookingCodeCount": 5,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L8O4c1IG1k7ZO-3t",
                    "aircraft": "738",
                    "arrivalTime": "2018-01-04T21:56-07:00",
                    "departureTime": "2018-01-04T20:15-06:00",
                    "origin": "ORD",
                    "destination": "DEN",
                    "originTerminal": "3",
                    "duration": 161,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 885,
                    "secure": true
                  }
                ]
              }
            ]
          }
        ],
        "pricing": [
          {
            "kind": "qpxexpress#pricingInfo",
            "fare": [
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "carrier": "BA",
                "origin": "DEN",
                "destination": "PAR",
                "basisCode": "TKW8C7S5"
              }, {
                "kind": "qpxexpress#fareInfo",
                "id": "A6Ym8ptipaElvItcUzLa6t9Apuh96WORYtKLoJ2ABeEo",
                "carrier": "IB",
                "origin": "PAR",
                "destination": "DEN",
                "basisCode": "SKX5C7S5"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "segmentId": "GbsonhssY1TfIYcn"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "segmentId": "GNyoyc09HgiCQZiB"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A6Ym8ptipaElvItcUzLa6t9Apuh96WORYtKLoJ2ABeEo",
                "segmentId": "GkCYpNnBn0nW6PwU"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A6Ym8ptipaElvItcUzLa6t9Apuh96WORYtKLoJ2ABeEo",
                "segmentId": "GYqkFFcRqFZD6YBl"
              }
            ],
            "baseFareTotal": "USD1180.00",
            "saleFareTotal": "USD1180.00",
            "saleTaxTotal": "USD439.76",
            "saleTotal": "USD1619.76",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD150.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD13.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "QX_001",
                "chargeType": "GOVERNMENT",
                "code": "QX",
                "country": "FR",
                "salePrice": "USD32.80"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "FR_001",
                "chargeType": "GOVERNMENT",
                "code": "FR",
                "country": "FR",
                "salePrice": "USD9.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "FR_007",
                "chargeType": "GOVERNMENT",
                "code": "FR",
                "country": "FR",
                "salePrice": "USD15.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD150.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "IZ_001",
                "chargeType": "GOVERNMENT",
                "code": "IZ",
                "country": "FR",
                "salePrice": "USD5.30"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              }
            ],
            "fareCalculation": "DEN BA X/E/CHI BA PAR Q75.00 M 640.00TKW8C7S5 IB X/E/CHI Q50.00 IB DEN M 415.00SKX5C7S5 NUC 1180.00 END ROE 1.00 FARE USD 1180.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 24.50FR 5.30IZ 32.80QX 300.00YQ 13.50XF DEN4.50 ORD4.50 ORD4.50",
            "latestTicketingTime": "2017-11-01T23:59-04:00",
            "ptc": "ADT"
          }
        ]
      }, {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD1619.76",
        "id": "XXFQQyuD8YHRqld7Hezrm2002",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 761,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 150,
                "flight": {
                  "carrier": "BA",
                  "number": "5344"
                },
                "id": "GNyoyc09HgiCQZiB",
                "cabin": "PREMIUM_COACH",
                "bookingCode": "T",
                "bookingCodeCount": 7,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LnDamrlLwENojbeh",
                    "aircraft": "738",
                    "arrivalTime": "2017-12-22T15:59-06:00",
                    "departureTime": "2017-12-22T12:29-07:00",
                    "origin": "DEN",
                    "destination": "ORD",
                    "destinationTerminal": "3",
                    "duration": 150,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 885,
                    "secure": true
                  }
                ],
                "connectionDuration": 141
              }, {
                "kind": "qpxexpress#segmentInfo",
                "duration": 470,
                "flight": {
                  "carrier": "BA",
                  "number": "1602"
                },
                "id": "GbsonhssY1TfIYcn",
                "cabin": "PREMIUM_COACH",
                "bookingCode": "T",
                "bookingCodeCount": 2,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "Lp-IUJEK9wjRwB8S",
                    "aircraft": "789",
                    "arrivalTime": "2017-12-23T09:10+01:00",
                    "departureTime": "2017-12-22T18:20-06:00",
                    "origin": "ORD",
                    "destination": "CDG",
                    "originTerminal": "3",
                    "destinationTerminal": "2A",
                    "duration": 470,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 4139,
                    "meal": "Breakfast",
                    "secure": true
                  }
                ]
              }
            ]
          }, {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1061,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 555,
                "flight": {
                  "carrier": "BA",
                  "number": "1532"
                },
                "id": "G8kHrtShv1+3LCEK",
                "cabin": "COACH",
                "bookingCode": "S",
                "bookingCodeCount": 5,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LqygyRnR8XkUFfd3",
                    "aircraft": "789",
                    "arrivalTime": "2018-01-04T14:30-06:00",
                    "departureTime": "2018-01-04T12:15+01:00",
                    "origin": "CDG",
                    "destination": "ORD",
                    "originTerminal": "2A",
                    "destinationTerminal": "5",
                    "duration": 555,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 4139,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 345
              }, {
                "kind": "qpxexpress#segmentInfo",
                "duration": 161,
                "flight": {
                  "carrier": "BA",
                  "number": "1910"
                },
                "id": "GuwJmrGBqMWGVPuB",
                "cabin": "COACH",
                "bookingCode": "S",
                "bookingCodeCount": 5,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "Lxd+xXugxhugOb4j",
                    "aircraft": "738",
                    "arrivalTime": "2018-01-04T21:56-07:00",
                    "departureTime": "2018-01-04T20:15-06:00",
                    "origin": "ORD",
                    "destination": "DEN",
                    "originTerminal": "3",
                    "duration": 161,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 885,
                    "meal": "Food for Purchase",
                    "secure": true
                  }
                ]
              }
            ]
          }
        ],
        "pricing": [
          {
            "kind": "qpxexpress#pricingInfo",
            "fare": [
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "carrier": "BA",
                "origin": "DEN",
                "destination": "PAR",
                "basisCode": "TKW8C7S5"
              }, {
                "kind": "qpxexpress#fareInfo",
                "id": "AJtVj29rPmHcHIptSirgsiCpd5sYOTjJr/CgcJSJlcBw",
                "carrier": "BA",
                "origin": "PAR",
                "destination": "DEN",
                "basisCode": "SKX5C7S5"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "segmentId": "GbsonhssY1TfIYcn"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AJtVj29rPmHcHIptSirgsiCpd5sYOTjJr/CgcJSJlcBw",
                "segmentId": "GuwJmrGBqMWGVPuB"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "segmentId": "GNyoyc09HgiCQZiB"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AJtVj29rPmHcHIptSirgsiCpd5sYOTjJr/CgcJSJlcBw",
                "segmentId": "G8kHrtShv1+3LCEK"
              }
            ],
            "baseFareTotal": "USD1180.00",
            "saleFareTotal": "USD1180.00",
            "saleTaxTotal": "USD439.76",
            "saleTotal": "USD1619.76",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD300.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD13.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "QX_001",
                "chargeType": "GOVERNMENT",
                "code": "QX",
                "country": "FR",
                "salePrice": "USD32.80"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "FR_001",
                "chargeType": "GOVERNMENT",
                "code": "FR",
                "country": "FR",
                "salePrice": "USD9.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "FR_007",
                "chargeType": "GOVERNMENT",
                "code": "FR",
                "country": "FR",
                "salePrice": "USD15.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "IZ_001",
                "chargeType": "GOVERNMENT",
                "code": "IZ",
                "country": "FR",
                "salePrice": "USD5.30"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              }
            ],
            "fareCalculation": "DEN BA X/E/CHI BA PAR Q75.00 M 640.00TKW8C7S5 BA X/E/CHI Q50.00 BA DEN M 415.00SKX5C7S5 NUC 1180.00 END ROE 1.00 FARE USD 1180.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 24.50FR 5.30IZ 32.80QX 300.00YQ 13.50XF DEN4.50 ORD4.50 ORD4.50",
            "latestTicketingTime": "2017-11-01T23:59-04:00",
            "ptc": "ADT"
          }
        ]
      }, {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD1619.76",
        "id": "XXFQQyuD8YHRqld7Hezrm2005",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 905,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 151,
                "flight": {
                  "carrier": "BA",
                  "number": "5606"
                },
                "id": "GoOnTMhezESFN+8x",
                "cabin": "PREMIUM_COACH",
                "bookingCode": "T",
                "bookingCodeCount": 7,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LzoD87ad3Bxmxyyw",
                    "aircraft": "738",
                    "arrivalTime": "2017-12-22T13:36-06:00",
                    "departureTime": "2017-12-22T10:05-07:00",
                    "origin": "DEN",
                    "destination": "ORD",
                    "destinationTerminal": "3",
                    "duration": 151,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 885,
                    "meal": "Food for Purchase",
                    "secure": true
                  }
                ],
                "connectionDuration": 284
              }, {
                "kind": "qpxexpress#segmentInfo",
                "duration": 470,
                "flight": {
                  "carrier": "BA",
                  "number": "1602"
                },
                "id": "GbsonhssY1TfIYcn",
                "cabin": "PREMIUM_COACH",
                "bookingCode": "T",
                "bookingCodeCount": 2,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "Lp-IUJEK9wjRwB8S",
                    "aircraft": "789",
                    "arrivalTime": "2017-12-23T09:10+01:00",
                    "departureTime": "2017-12-22T18:20-06:00",
                    "origin": "ORD",
                    "destination": "CDG",
                    "originTerminal": "3",
                    "destinationTerminal": "2A",
                    "duration": 470,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 4139,
                    "meal": "Breakfast",
                    "secure": true
                  }
                ]
              }
            ]
          }, {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1061,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 555,
                "flight": {
                  "carrier": "BA",
                  "number": "1532"
                },
                "id": "G8kHrtShv1+3LCEK",
                "cabin": "COACH",
                "bookingCode": "S",
                "bookingCodeCount": 5,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LqygyRnR8XkUFfd3",
                    "aircraft": "789",
                    "arrivalTime": "2018-01-04T14:30-06:00",
                    "departureTime": "2018-01-04T12:15+01:00",
                    "origin": "CDG",
                    "destination": "ORD",
                    "originTerminal": "2A",
                    "destinationTerminal": "5",
                    "duration": 555,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 4139,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 345
              }, {
                "kind": "qpxexpress#segmentInfo",
                "duration": 161,
                "flight": {
                  "carrier": "BA",
                  "number": "1910"
                },
                "id": "GuwJmrGBqMWGVPuB",
                "cabin": "COACH",
                "bookingCode": "S",
                "bookingCodeCount": 5,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "Lxd+xXugxhugOb4j",
                    "aircraft": "738",
                    "arrivalTime": "2018-01-04T21:56-07:00",
                    "departureTime": "2018-01-04T20:15-06:00",
                    "origin": "ORD",
                    "destination": "DEN",
                    "originTerminal": "3",
                    "duration": 161,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 885,
                    "meal": "Food for Purchase",
                    "secure": true
                  }
                ]
              }
            ]
          }
        ],
        "pricing": [
          {
            "kind": "qpxexpress#pricingInfo",
            "fare": [
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "carrier": "BA",
                "origin": "DEN",
                "destination": "PAR",
                "basisCode": "TKW8C7S5"
              }, {
                "kind": "qpxexpress#fareInfo",
                "id": "AJtVj29rPmHcHIptSirgsiCpd5sYOTjJr/CgcJSJlcBw",
                "carrier": "BA",
                "origin": "PAR",
                "destination": "DEN",
                "basisCode": "SKX5C7S5"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "segmentId": "GoOnTMhezESFN+8x"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "segmentId": "GbsonhssY1TfIYcn"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AJtVj29rPmHcHIptSirgsiCpd5sYOTjJr/CgcJSJlcBw",
                "segmentId": "GuwJmrGBqMWGVPuB"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AJtVj29rPmHcHIptSirgsiCpd5sYOTjJr/CgcJSJlcBw",
                "segmentId": "G8kHrtShv1+3LCEK"
              }
            ],
            "baseFareTotal": "USD1180.00",
            "saleFareTotal": "USD1180.00",
            "saleTaxTotal": "USD439.76",
            "saleTotal": "USD1619.76",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD300.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD13.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "QX_001",
                "chargeType": "GOVERNMENT",
                "code": "QX",
                "country": "FR",
                "salePrice": "USD32.80"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "FR_001",
                "chargeType": "GOVERNMENT",
                "code": "FR",
                "country": "FR",
                "salePrice": "USD9.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "FR_007",
                "chargeType": "GOVERNMENT",
                "code": "FR",
                "country": "FR",
                "salePrice": "USD15.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "IZ_001",
                "chargeType": "GOVERNMENT",
                "code": "IZ",
                "country": "FR",
                "salePrice": "USD5.30"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              }
            ],
            "fareCalculation": "DEN BA X/E/CHI BA PAR Q75.00 M 640.00TKW8C7S5 BA X/E/CHI Q50.00 BA DEN M 415.00SKX5C7S5 NUC 1180.00 END ROE 1.00 FARE USD 1180.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 24.50FR 5.30IZ 32.80QX 300.00YQ 13.50XF DEN4.50 ORD4.50 ORD4.50",
            "latestTicketingTime": "2017-11-01T23:59-04:00",
            "ptc": "ADT"
          }
        ]
      }, {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD1679.76",
        "id": "XXFQQyuD8YHRqld7Hezrm2001",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 761,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 150,
                "flight": {
                  "carrier": "BA",
                  "number": "5344"
                },
                "id": "GNyoyc09HgiCQZiB",
                "cabin": "PREMIUM_COACH",
                "bookingCode": "T",
                "bookingCodeCount": 7,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LnDamrlLwENojbeh",
                    "aircraft": "738",
                    "arrivalTime": "2017-12-22T15:59-06:00",
                    "departureTime": "2017-12-22T12:29-07:00",
                    "origin": "DEN",
                    "destination": "ORD",
                    "destinationTerminal": "3",
                    "duration": 150,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 885,
                    "secure": true
                  }
                ],
                "connectionDuration": 141
              }, {
                "kind": "qpxexpress#segmentInfo",
                "duration": 470,
                "flight": {
                  "carrier": "BA",
                  "number": "1602"
                },
                "id": "GbsonhssY1TfIYcn",
                "cabin": "PREMIUM_COACH",
                "bookingCode": "T",
                "bookingCodeCount": 2,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "Lp-IUJEK9wjRwB8S",
                    "aircraft": "789",
                    "arrivalTime": "2017-12-23T09:10+01:00",
                    "departureTime": "2017-12-22T18:20-06:00",
                    "origin": "ORD",
                    "destination": "CDG",
                    "originTerminal": "3",
                    "destinationTerminal": "2A",
                    "duration": 470,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 4139,
                    "meal": "Breakfast",
                    "secure": true
                  }
                ]
              }
            ]
          }, {
            "kind": "qpxexpress#sliceInfo",
            "duration": 870,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 655,
                "flight": {
                  "carrier": "BA",
                  "number": "1537"
                },
                "id": "GwciIO3Nuh34KdxU",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 5,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LDlfOJcXfBQSmT+v",
                    "aircraft": "789",
                    "arrivalTime": "2018-01-04T15:00-06:00",
                    "departureTime": "2018-01-04T11:05+01:00",
                    "origin": "CDG",
                    "destination": "DFW",
                    "originTerminal": "2A",
                    "destinationTerminal": "D",
                    "duration": 655,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 4934,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 90
              }, {
                "kind": "qpxexpress#segmentInfo",
                "duration": 125,
                "flight": {
                  "carrier": "BA",
                  "number": "5734"
                },
                "id": "GxgrtT5xYfmni-5g",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 5,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LGoNen6HChvUl9pK",
                    "aircraft": "32B",
                    "arrivalTime": "2018-01-04T17:35-07:00",
                    "departureTime": "2018-01-04T16:30-06:00",
                    "origin": "DFW",
                    "destination": "DEN",
                    "duration": 125,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 641,
                    "meal": "Food for Purchase",
                    "secure": true
                  }
                ]
              }
            ]
          }
        ],
        "pricing": [
          {
            "kind": "qpxexpress#pricingInfo",
            "fare": [
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "carrier": "BA",
                "origin": "DEN",
                "destination": "PAR",
                "basisCode": "TKW8C7S5"
              }, {
                "kind": "qpxexpress#fareInfo",
                "id": "AY+8GKg6ExHYV5aTZbFtsFX3yPLUuMVBmCoiuQuGZUBk",
                "carrier": "BA",
                "origin": "PAR",
                "destination": "DEN",
                "basisCode": "VKX2C1S5"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AY+8GKg6ExHYV5aTZbFtsFX3yPLUuMVBmCoiuQuGZUBk",
                "segmentId": "GwciIO3Nuh34KdxU"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "segmentId": "GbsonhssY1TfIYcn"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AY+8GKg6ExHYV5aTZbFtsFX3yPLUuMVBmCoiuQuGZUBk",
                "segmentId": "GxgrtT5xYfmni-5g"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "segmentId": "GNyoyc09HgiCQZiB"
              }
            ],
            "baseFareTotal": "USD1240.00",
            "saleFareTotal": "USD1240.00",
            "saleTaxTotal": "USD439.76",
            "saleTotal": "USD1679.76",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD300.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD13.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "QX_001",
                "chargeType": "GOVERNMENT",
                "code": "QX",
                "country": "FR",
                "salePrice": "USD32.80"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "FR_001",
                "chargeType": "GOVERNMENT",
                "code": "FR",
                "country": "FR",
                "salePrice": "USD9.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "FR_007",
                "chargeType": "GOVERNMENT",
                "code": "FR",
                "country": "FR",
                "salePrice": "USD15.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "IZ_001",
                "chargeType": "GOVERNMENT",
                "code": "IZ",
                "country": "FR",
                "salePrice": "USD5.30"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              }
            ],
            "fareCalculation": "DEN BA X/E/CHI BA PAR Q75.00 M 640.00TKW8C7S5 BA X/E/DFW Q50.00 BA DEN M 475.00VKX2C1S5 NUC 1240.00 END ROE 1.00 FARE USD 1240.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 24.50FR 5.30IZ 32.80QX 300.00YQ 13.50XF DEN4.50 ORD4.50 DFW4.50",
            "latestTicketingTime": "2017-11-01T23:59-04:00",
            "ptc": "ADT"
          }
        ]
      }, {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD1679.76",
        "id": "XXFQQyuD8YHRqld7Hezrm2004",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 905,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 151,
                "flight": {
                  "carrier": "BA",
                  "number": "5606"
                },
                "id": "GoOnTMhezESFN+8x",
                "cabin": "PREMIUM_COACH",
                "bookingCode": "T",
                "bookingCodeCount": 7,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LzoD87ad3Bxmxyyw",
                    "aircraft": "738",
                    "arrivalTime": "2017-12-22T13:36-06:00",
                    "departureTime": "2017-12-22T10:05-07:00",
                    "origin": "DEN",
                    "destination": "ORD",
                    "destinationTerminal": "3",
                    "duration": 151,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 885,
                    "meal": "Food for Purchase",
                    "secure": true
                  }
                ],
                "connectionDuration": 284
              }, {
                "kind": "qpxexpress#segmentInfo",
                "duration": 470,
                "flight": {
                  "carrier": "BA",
                  "number": "1602"
                },
                "id": "GbsonhssY1TfIYcn",
                "cabin": "PREMIUM_COACH",
                "bookingCode": "T",
                "bookingCodeCount": 2,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "Lp-IUJEK9wjRwB8S",
                    "aircraft": "789",
                    "arrivalTime": "2017-12-23T09:10+01:00",
                    "departureTime": "2017-12-22T18:20-06:00",
                    "origin": "ORD",
                    "destination": "CDG",
                    "originTerminal": "3",
                    "destinationTerminal": "2A",
                    "duration": 470,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 4139,
                    "meal": "Breakfast",
                    "secure": true
                  }
                ]
              }
            ]
          }, {
            "kind": "qpxexpress#sliceInfo",
            "duration": 870,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 655,
                "flight": {
                  "carrier": "BA",
                  "number": "1537"
                },
                "id": "GwciIO3Nuh34KdxU",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 5,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LDlfOJcXfBQSmT+v",
                    "aircraft": "789",
                    "arrivalTime": "2018-01-04T15:00-06:00",
                    "departureTime": "2018-01-04T11:05+01:00",
                    "origin": "CDG",
                    "destination": "DFW",
                    "originTerminal": "2A",
                    "destinationTerminal": "D",
                    "duration": 655,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 4934,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 90
              }, {
                "kind": "qpxexpress#segmentInfo",
                "duration": 125,
                "flight": {
                  "carrier": "BA",
                  "number": "5734"
                },
                "id": "GxgrtT5xYfmni-5g",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 5,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LGoNen6HChvUl9pK",
                    "aircraft": "32B",
                    "arrivalTime": "2018-01-04T17:35-07:00",
                    "departureTime": "2018-01-04T16:30-06:00",
                    "origin": "DFW",
                    "destination": "DEN",
                    "duration": 125,
                    "operatingDisclosure": "OPERATED BY AMERICAN",
                    "mileage": 641,
                    "meal": "Food for Purchase",
                    "secure": true
                  }
                ]
              }
            ]
          }
        ],
        "pricing": [
          {
            "kind": "qpxexpress#pricingInfo",
            "fare": [
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "carrier": "BA",
                "origin": "DEN",
                "destination": "PAR",
                "basisCode": "TKW8C7S5"
              }, {
                "kind": "qpxexpress#fareInfo",
                "id": "AY+8GKg6ExHYV5aTZbFtsFX3yPLUuMVBmCoiuQuGZUBk",
                "carrier": "BA",
                "origin": "PAR",
                "destination": "DEN",
                "basisCode": "VKX2C1S5"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AY+8GKg6ExHYV5aTZbFtsFX3yPLUuMVBmCoiuQuGZUBk",
                "segmentId": "GwciIO3Nuh34KdxU"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "segmentId": "GoOnTMhezESFN+8x"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AeePR9SKeEaMYKtfIg8PACvMT4m9T+vWQ0tfzOJcoj+M",
                "segmentId": "GbsonhssY1TfIYcn"
              }, {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AY+8GKg6ExHYV5aTZbFtsFX3yPLUuMVBmCoiuQuGZUBk",
                "segmentId": "GxgrtT5xYfmni-5g"
              }
            ],
            "baseFareTotal": "USD1240.00",
            "saleFareTotal": "USD1240.00",
            "saleTaxTotal": "USD439.76",
            "saleTotal": "USD1679.76",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD300.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD13.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "QX_001",
                "chargeType": "GOVERNMENT",
                "code": "QX",
                "country": "FR",
                "salePrice": "USD32.80"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "FR_001",
                "chargeType": "GOVERNMENT",
                "code": "FR",
                "country": "FR",
                "salePrice": "USD9.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "FR_007",
                "chargeType": "GOVERNMENT",
                "code": "FR",
                "country": "FR",
                "salePrice": "USD15.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "IZ_001",
                "chargeType": "GOVERNMENT",
                "code": "IZ",
                "country": "FR",
                "salePrice": "USD5.30"
              }, {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              }
            ],
            "fareCalculation": "DEN BA X/E/CHI BA PAR Q75.00 M 640.00TKW8C7S5 BA X/E/DFW Q50.00 BA DEN M 475.00VKX2C1S5 NUC 1240.00 END ROE 1.00 FARE USD 1240.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 24.50FR 5.30IZ 32.80QX 300.00YQ 13.50XF DEN4.50 ORD4.50 DFW4.50",
            "latestTicketingTime": "2017-11-01T23:59-04:00",
            "ptc": "ADT"
          }
        ]
      }
    ]
  }
};
