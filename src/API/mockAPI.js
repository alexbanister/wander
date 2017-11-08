/* eslint-disable */
export const mockData = [{
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
                    "arrivalTime": "2017-12-23T15:59-06:00",
                    "departureTime": "2017-12-23T12:29-07:00",
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
                    "arrivalTime": "2017-12-24T09:10+01:00",
                    "departureTime": "2017-12-23T18:20-06:00",
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
                    "arrivalTime": "2018-01-03T14:30-06:00",
                    "departureTime": "2018-01-03T12:15+01:00",
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
                    "arrivalTime": "2018-01-03T21:56-07:00",
                    "departureTime": "2018-01-03T20:15-06:00",
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
                    "arrivalTime": "2017-12-24T15:59-06:00",
                    "departureTime": "2017-12-24T12:29-07:00",
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
                    "arrivalTime": "2017-12-25T09:10+01:00",
                    "departureTime": "2017-12-24T18:20-06:00",
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
                    "arrivalTime": "2018-01-02T15:00-06:00",
                    "departureTime": "2018-01-02T11:05+01:00",
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
                    "arrivalTime": "2018-01-02T17:35-07:00",
                    "departureTime": "2018-01-02T16:30-06:00",
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
}, {
  "kind": "qpxExpress#tripsSearch",
  "trips": {
    "kind": "qpxexpress#tripOptions",
    "requestId": "54yOPiFQ8KmsKueTk0RanP",
    "data": {
      "kind": "qpxexpress#data",
      "airport": [
        {
          "kind": "qpxexpress#airportData",
          "code": "ARN",
          "city": "STO",
          "name": "Stockholm Arlanda"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "DEN",
          "city": "DEN",
          "name": "Denver International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "EWR",
          "city": "EWR",
          "name": "Newark Liberty International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "LAX",
          "city": "LAX",
          "name": "Los Angeles International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "LGW",
          "city": "LON",
          "name": "London Gatwick"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "OSL",
          "city": "OSL",
          "name": "Oslo Gardermoen"
        }
      ],
      "city": [
        {
          "kind": "qpxexpress#cityData",
          "code": "DEN",
          "name": "Denver"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "EWR",
          "name": "Newark"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "LAX",
          "name": "Los Angeles"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "LON",
          "name": "London"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "OSL",
          "name": "Oslo"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "STO",
          "name": "Stockholm"
        }
      ],
      "aircraft": [
        {
          "kind": "qpxexpress#aircraftData",
          "code": "333",
          "name": "Airbus A330"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "738",
          "name": "Boeing 737"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "73H",
          "name": "Boeing 737"
        },
        {
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
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YA_001",
          "name": "Sweden Passenger Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "UB_001",
          "name": "United Kingdom Passenger Service Charge Departures"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YQ_F",
          "name": "SK YQ surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "AY_001",
          "name": "US September 11th Security Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "US_002",
          "name": "US International Departure Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XA",
          "name": "USDA APHIS Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YC",
          "name": "US Customs Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "ZN_001",
          "name": "Norway Passenger Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XF",
          "name": "US Passenger Facility Charge"
        }
      ],
      "carrier": [
        {
          "kind": "qpxexpress#carrierData",
          "code": "D8",
          "name": "Norwegian Air International LTD."
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "DY",
          "name": "Norwegian Air Shuttle A.S.A."
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "SK",
          "name": "Scandinavian Airlines System (SAS)"
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "UA",
          "name": "United Airlines"
        }
      ]
    },
    "tripOption": [
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD1037.56",
        "id": "EOewOwXwfvUUGEMBrkaMoU001",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 770,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 540,
                "flight": {
                  "carrier": "DY",
                  "number": "7172"
                },
                "id": "GedNWAqF1gwRGqKD",
                "cabin": "COACH",
                "bookingCode": "T",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LjAN6heKUvxHA3Yn",
                    "aircraft": "789",
                    "arrivalTime": "2017-12-24T06:30+00:00",
                    "departureTime": "2017-12-23T14:30-07:00",
                    "origin": "DEN",
                    "destination": "LGW",
                    "destinationTerminal": "S",
                    "duration": 540,
                    "mileage": 4678,
                    "meal": "Food and Beverages for Purchase",
                    "secure": true
                  }
                ],
                "connectionDuration": 90
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 140,
                "flight": {
                  "carrier": "D8",
                  "number": "2852"
                },
                "id": "GLnf6BHEmuH4u3+J",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LcJsIt-79F8A1YaP",
                    "aircraft": "73H",
                    "arrivalTime": "2017-12-24T11:20+01:00",
                    "departureTime": "2017-12-24T08:00+00:00",
                    "origin": "LGW",
                    "destination": "ARN",
                    "originTerminal": "S",
                    "destinationTerminal": "5",
                    "duration": 140,
                    "mileage": 916,
                    "meal": "Food and Beverages for Purchase"
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1410,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 155,
                "flight": {
                  "carrier": "D8",
                  "number": "2859"
                },
                "id": "GCbMupiSFCI9OrTx",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 8,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LuChrg0l75ilTsCj",
                    "aircraft": "73H",
                    "arrivalTime": "2018-01-03T22:35+00:00",
                    "departureTime": "2018-01-03T21:00+01:00",
                    "origin": "ARN",
                    "destination": "LGW",
                    "originTerminal": "5",
                    "destinationTerminal": "S",
                    "duration": 155,
                    "mileage": 916,
                    "meal": "Food and Beverages for Purchase"
                  }
                ],
                "connectionDuration": 670
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 585,
                "flight": {
                  "carrier": "DY",
                  "number": "7171"
                },
                "id": "GoV7VV0bPFFVYxF-",
                "cabin": "COACH",
                "bookingCode": "L",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "Ly-vfRJr53v7-ob0",
                    "aircraft": "789",
                    "arrivalTime": "2018-01-04T12:30-07:00",
                    "departureTime": "2018-01-04T09:45+00:00",
                    "origin": "LGW",
                    "destination": "DEN",
                    "originTerminal": "S",
                    "duration": 585,
                    "mileage": 4678,
                    "meal": "Food and Beverages for Purchase",
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
                "id": "AqRVG5nRayscHITwRajND1UrAHUV2D8ubEoNsxOMwADA",
                "carrier": "DY",
                "origin": "DEN",
                "destination": "LON",
                "basisCode": "TSRGB"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AZ0X4LgRJJdBamLmCHKEDy3cHlzIqc6ZFlJ21Mdqpufw",
                "carrier": "D8",
                "origin": "LON",
                "destination": "STO",
                "basisCode": "VJIPPI"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AT2uPVlnq2G/NrgMm6GAvHVFytvl0yzNlPdIes50A36Y",
                "carrier": "D8",
                "origin": "STO",
                "destination": "LON",
                "basisCode": "VJIPPI"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "A0QUUuc6x03ZcI967QNojRPKm2HzQVWAKndmqaPoPevU",
                "carrier": "DY",
                "origin": "LON",
                "destination": "DEN",
                "basisCode": "LSRGB"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A0QUUuc6x03ZcI967QNojRPKm2HzQVWAKndmqaPoPevU",
                "segmentId": "GoV7VV0bPFFVYxF-"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AqRVG5nRayscHITwRajND1UrAHUV2D8ubEoNsxOMwADA",
                "segmentId": "GedNWAqF1gwRGqKD"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AZ0X4LgRJJdBamLmCHKEDy3cHlzIqc6ZFlJ21Mdqpufw",
                "segmentId": "GLnf6BHEmuH4u3+J"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AT2uPVlnq2G/NrgMm6GAvHVFytvl0yzNlPdIes50A36Y",
                "segmentId": "GCbMupiSFCI9OrTx"
              }
            ],
            "baseFareTotal": "USD921.00",
            "saleFareTotal": "USD921.00",
            "saleTaxTotal": "USD116.56",
            "saleTotal": "USD1037.56",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD5.60"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD4.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "UB_001",
                "chargeType": "GOVERNMENT",
                "code": "UB",
                "country": "GB",
                "salePrice": "USD34.60"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YA_001",
                "chargeType": "GOVERNMENT",
                "code": "YA",
                "country": "SE",
                "salePrice": "USD19.40"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              }
            ],
            "fareCalculation": "DEN DY X/LON Q70.80 312.00TSRGB D8 STO Q15.44 83.54VJIPPI D8 X/LON Q15.44 83.95VJIPPI DY DEN Q70.80 268.90LSRGB NUC 920.87 END ROE 1.00 FARE USD 921.00 XT 5.50YC 7.00XY 3.96XA 36.00US 5.60AY 34.60UB 19.40YA 4.50XF DEN4.50",
            "latestTicketingTime": "2017-12-23T16:29-04:00",
            "ptc": "ADT"
          }
        ]
      },
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD1050.86",
        "id": "EOewOwXwfvUUGEMBrkaMoU002",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 990,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 540,
                "flight": {
                  "carrier": "DY",
                  "number": "7172"
                },
                "id": "GedNWAqF1gwRGqKD",
                "cabin": "COACH",
                "bookingCode": "T",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LjAN6heKUvxHA3Yn",
                    "aircraft": "789",
                    "arrivalTime": "2017-12-24T06:30+00:00",
                    "departureTime": "2017-12-23T14:30-07:00",
                    "origin": "DEN",
                    "destination": "LGW",
                    "destinationTerminal": "S",
                    "duration": 540,
                    "mileage": 4678,
                    "meal": "Food and Beverages for Purchase",
                    "secure": true
                  }
                ],
                "connectionDuration": 170
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 125,
                "flight": {
                  "carrier": "D8",
                  "number": "2802"
                },
                "id": "G6dwlpmVfTOc9W4A",
                "cabin": "COACH",
                "bookingCode": "Z",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LZtcQdjaWXy+w24M",
                    "aircraft": "73H",
                    "arrivalTime": "2017-12-24T12:25+01:00",
                    "departureTime": "2017-12-24T09:20+00:00",
                    "origin": "LGW",
                    "destination": "OSL",
                    "originTerminal": "S",
                    "duration": 125,
                    "mileage": 761,
                    "meal": "Food and Beverages for Purchase"
                  }
                ],
                "connectionDuration": 95
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 60,
                "flight": {
                  "carrier": "DY",
                  "number": "4114"
                },
                "id": "GBt14RGE9P06urQS",
                "cabin": "COACH",
                "bookingCode": "Q",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LUwbluDzvUVTxM9Q",
                    "aircraft": "73H",
                    "arrivalTime": "2017-12-24T15:00+01:00",
                    "departureTime": "2017-12-24T14:00+01:00",
                    "origin": "OSL",
                    "destination": "ARN",
                    "destinationTerminal": "5",
                    "duration": 60,
                    "mileage": 238,
                    "meal": "Food and Beverages for Purchase"
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1410,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 155,
                "flight": {
                  "carrier": "D8",
                  "number": "2859"
                },
                "id": "GCbMupiSFCI9OrTx",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 8,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LuChrg0l75ilTsCj",
                    "aircraft": "73H",
                    "arrivalTime": "2018-01-03T22:35+00:00",
                    "departureTime": "2018-01-03T21:00+01:00",
                    "origin": "ARN",
                    "destination": "LGW",
                    "originTerminal": "5",
                    "destinationTerminal": "S",
                    "duration": 155,
                    "mileage": 916,
                    "meal": "Food and Beverages for Purchase"
                  }
                ],
                "connectionDuration": 670
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 585,
                "flight": {
                  "carrier": "DY",
                  "number": "7171"
                },
                "id": "GoV7VV0bPFFVYxF-",
                "cabin": "COACH",
                "bookingCode": "L",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "4",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "Ly-vfRJr53v7-ob0",
                    "aircraft": "789",
                    "arrivalTime": "2018-01-04T12:30-07:00",
                    "departureTime": "2018-01-04T09:45+00:00",
                    "origin": "LGW",
                    "destination": "DEN",
                    "originTerminal": "S",
                    "duration": 585,
                    "mileage": 4678,
                    "meal": "Food and Beverages for Purchase",
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
                "id": "AqRVG5nRayscHITwRajND1UrAHUV2D8ubEoNsxOMwADA",
                "carrier": "DY",
                "origin": "DEN",
                "destination": "LON",
                "basisCode": "TSRGB"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AqraNIgAjWUJogV6juUZhC/FM5i/BmNTYMq5xGPmQ5/2",
                "carrier": "D8",
                "origin": "LON",
                "destination": "OSL",
                "basisCode": "ZJIPPI"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AyNHSscA74s8oe6++ZSoROrxe5EP39IwMCVlMG1V/m7fH",
                "carrier": "DY",
                "origin": "OSL",
                "destination": "STO",
                "basisCode": "QKAMP"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AT2uPVlnq2G/NrgMm6GAvHVFytvl0yzNlPdIes50A36Y",
                "carrier": "D8",
                "origin": "STO",
                "destination": "LON",
                "basisCode": "VJIPPI"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "A0QUUuc6x03ZcI967QNojRPKm2HzQVWAKndmqaPoPevU",
                "carrier": "DY",
                "origin": "LON",
                "destination": "DEN",
                "basisCode": "LSRGB"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A0QUUuc6x03ZcI967QNojRPKm2HzQVWAKndmqaPoPevU",
                "segmentId": "GoV7VV0bPFFVYxF-"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AqraNIgAjWUJogV6juUZhC/FM5i/BmNTYMq5xGPmQ5/2",
                "segmentId": "G6dwlpmVfTOc9W4A"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AqRVG5nRayscHITwRajND1UrAHUV2D8ubEoNsxOMwADA",
                "segmentId": "GedNWAqF1gwRGqKD"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AyNHSscA74s8oe6++ZSoROrxe5EP39IwMCVlMG1V/m7fH",
                "segmentId": "GBt14RGE9P06urQS"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AT2uPVlnq2G/NrgMm6GAvHVFytvl0yzNlPdIes50A36Y",
                "segmentId": "GCbMupiSFCI9OrTx"
              }
            ],
            "baseFareTotal": "USD930.00",
            "saleFareTotal": "USD930.00",
            "saleTaxTotal": "USD120.86",
            "saleTotal": "USD1050.86",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD5.60"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD4.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "UB_001",
                "chargeType": "GOVERNMENT",
                "code": "UB",
                "country": "GB",
                "salePrice": "USD34.60"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "ZN_001",
                "chargeType": "GOVERNMENT",
                "code": "ZN",
                "country": "NO",
                "salePrice": "USD4.30"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YA_001",
                "chargeType": "GOVERNMENT",
                "code": "YA",
                "country": "SE",
                "salePrice": "USD19.40"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              }
            ],
            "fareCalculation": "DEN DY X/LON Q70.80 312.00TSRGB D8 X/OSL Q15.44 57.43ZJIPPI DY STO Q9.01 26.13QKAMP D8 X/LON Q15.44 83.95VJIPPI DY DEN Q70.80 268.90LSRGB NUC 929.90 END ROE 1.00 FARE USD 930.00 XT 5.50YC 7.00XY 3.96XA 36.00US 5.60AY 34.60UB 4.30ZN 19.40YA 4.50XF DEN4.50",
            "latestTicketingTime": "2017-12-23T16:29-04:00",
            "ptc": "ADT"
          }
        ]
      },
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD1536.56",
        "id": "EOewOwXwfvUUGEMBrkaMoU003",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1210,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 166,
                "flight": {
                  "carrier": "UA",
                  "number": "2107"
                },
                "id": "GfhVMZbL3HHThJx-",
                "cabin": "COACH",
                "bookingCode": "T",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "Lpj7zN4chJ06VbtC",
                    "aircraft": "738",
                    "arrivalTime": "2017-12-23T07:46-08:00",
                    "departureTime": "2017-12-23T06:00-07:00",
                    "origin": "DEN",
                    "destination": "LAX",
                    "destinationTerminal": "7",
                    "duration": 166,
                    "mileage": 860,
                    "meal": "Food and Beverages for Purchase",
                    "secure": true
                  }
                ],
                "connectionDuration": 394
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 650,
                "flight": {
                  "carrier": "SK",
                  "number": "940"
                },
                "id": "GvZivD1X1k012UWM",
                "cabin": "COACH",
                "bookingCode": "U",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LpzwVlcCjHRFJQXb",
                    "aircraft": "333",
                    "arrivalTime": "2017-12-24T10:10+01:00",
                    "departureTime": "2017-12-23T14:20-08:00",
                    "origin": "LAX",
                    "destination": "ARN",
                    "originTerminal": "B",
                    "destinationTerminal": "5",
                    "duration": 650,
                    "mileage": 5504,
                    "meal": "Meal",
                    "secure": true
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 966,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 530,
                "flight": {
                  "carrier": "SK",
                  "number": "903"
                },
                "id": "G3rcwuIQiCMMiwvJ",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LIg6wwrbDXR79g0+",
                    "aircraft": "333",
                    "arrivalTime": "2018-01-03T15:15-05:00",
                    "departureTime": "2018-01-03T12:25+01:00",
                    "origin": "ARN",
                    "destination": "EWR",
                    "originTerminal": "5",
                    "destinationTerminal": "B",
                    "duration": 530,
                    "mileage": 3917,
                    "meal": "Meal",
                    "secure": true
                  }
                ],
                "connectionDuration": 165
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 271,
                "flight": {
                  "carrier": "SK",
                  "number": "6720"
                },
                "id": "Grl3uXS9zwpWK166",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 7,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LkfeD1sdDP+TyLF3",
                    "aircraft": "738",
                    "arrivalTime": "2018-01-03T20:31-07:00",
                    "departureTime": "2018-01-03T18:00-05:00",
                    "origin": "EWR",
                    "destination": "DEN",
                    "originTerminal": "C",
                    "duration": 271,
                    "operatingDisclosure": "OPERATED BY UNITED",
                    "mileage": 1600,
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
                "id": "A/eZfnGpQHJMbSF+21ox8d/j2ictptnwL1M8L+XPxCNpQ+FwQDVm0IQGYl0vO9sexV0v49sdlVFWBQhisjNad0UrDQEqm6E",
                "carrier": "SK",
                "origin": "DEN",
                "destination": "STO",
                "basisCode": "ULWUSSCE"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "A/5R849dYrovdXUKLGv0vkAI5RcilhFWLI6y5NLgcbOStQKNGxpU+AnnpSLKmUkzPlIuQWeoj3PysTltXms1g4KslxrF7U/",
                "carrier": "SK",
                "origin": "STO",
                "destination": "DEN",
                "basisCode": "VLXUSSCE"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A/eZfnGpQHJMbSF+21ox8d/j2ictptnwL1M8L+XPxCNpQ+FwQDVm0IQGYl0vO9sexV0v49sdlVFWBQhisjNad0UrDQEqm6E",
                "segmentId": "GfhVMZbL3HHThJx-"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A/5R849dYrovdXUKLGv0vkAI5RcilhFWLI6y5NLgcbOStQKNGxpU+AnnpSLKmUkzPlIuQWeoj3PysTltXms1g4KslxrF7U/",
                "segmentId": "G3rcwuIQiCMMiwvJ"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A/5R849dYrovdXUKLGv0vkAI5RcilhFWLI6y5NLgcbOStQKNGxpU+AnnpSLKmUkzPlIuQWeoj3PysTltXms1g4KslxrF7U/",
                "segmentId": "Grl3uXS9zwpWK166"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A/eZfnGpQHJMbSF+21ox8d/j2ictptnwL1M8L+XPxCNpQ+FwQDVm0IQGYl0vO9sexV0v49sdlVFWBQhisjNad0UrDQEqm6E",
                "segmentId": "GvZivD1X1k012UWM"
              }
            ],
            "baseFareTotal": "USD1140.00",
            "saleFareTotal": "USD1140.00",
            "saleTaxTotal": "USD396.56",
            "saleTotal": "USD1536.56",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_F",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD300.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD13.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YA_001",
                "chargeType": "GOVERNMENT",
                "code": "YA",
                "country": "SE",
                "salePrice": "USD19.40"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              }
            ],
            "fareCalculation": "DEN UA X/LAX SK STO 545.00ULWUSSCE SK X/NYC SK DEN 595.00VLXUSSCE NUC 1140.00 END ROE 1.00 FARE USD 1140.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 19.40YA 300.00YQ 13.50XF DEN4.50 LAX4.50 EWR4.50",
            "latestTicketingTime": "2017-11-11T23:59-04:00",
            "ptc": "ADT"
          }
        ]
      }
    ]
  }
}, {
  "kind": "qpxExpress#tripsSearch",
  "trips": {
    "kind": "qpxexpress#tripOptions",
    "requestId": "TsnlDu1Eyg2OP1zBA0RanT",
    "data": {
      "kind": "qpxexpress#data",
      "airport": [
        {
          "kind": "qpxexpress#airportData",
          "code": "ARN",
          "city": "STO",
          "name": "Stockholm Arlanda"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "DEN",
          "city": "DEN",
          "name": "Denver International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "EWR",
          "city": "EWR",
          "name": "Newark Liberty International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "LAX",
          "city": "LAX",
          "name": "Los Angeles International"
        }
      ],
      "city": [
        {
          "kind": "qpxexpress#cityData",
          "code": "DEN",
          "name": "Denver"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "EWR",
          "name": "Newark"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "LAX",
          "name": "Los Angeles"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "STO",
          "name": "Stockholm"
        }
      ],
      "aircraft": [
        {
          "kind": "qpxexpress#aircraftData",
          "code": "333",
          "name": "Airbus A330"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "738",
          "name": "Boeing 737"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "753",
          "name": "Boeing 757"
        }
      ],
      "tax": [
        {
          "kind": "qpxexpress#taxData",
          "id": "XY",
          "name": "US Immigration Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YA_001",
          "name": "Sweden Passenger Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YQ_F",
          "name": "SK YQ surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "AY_001",
          "name": "US September 11th Security Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "US_002",
          "name": "US International Departure Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XA",
          "name": "USDA APHIS Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YC",
          "name": "US Customs Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XF",
          "name": "US Passenger Facility Charge"
        }
      ],
      "carrier": [
        {
          "kind": "qpxexpress#carrierData",
          "code": "SK",
          "name": "Scandinavian Airlines System (SAS)"
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "UA",
          "name": "United Airlines"
        }
      ]
    },
    "tripOption": [
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD1636.56",
        "id": "MZ0ZNIqdIGCPkKN8Tjyur7001",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1098,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 164,
                "flight": {
                  "carrier": "UA",
                  "number": "1093"
                },
                "id": "G8EuHnIY5TsSVbVz",
                "cabin": "COACH",
                "bookingCode": "W",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LmLzTt8CrvcoJB5m",
                    "aircraft": "753",
                    "arrivalTime": "2017-12-22T09:36-08:00",
                    "departureTime": "2017-12-22T07:52-07:00",
                    "origin": "DEN",
                    "destination": "LAX",
                    "destinationTerminal": "7",
                    "duration": 164,
                    "onTimePerformance": 90,
                    "mileage": 860,
                    "meal": "Food and Beverages for Purchase",
                    "secure": true
                  }
                ],
                "connectionDuration": 284
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 650,
                "flight": {
                  "carrier": "SK",
                  "number": "940"
                },
                "id": "GGubnwWp5SxwR-eH",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 2,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LzOHW3NF3vblF3f1",
                    "aircraft": "333",
                    "arrivalTime": "2017-12-23T10:10+01:00",
                    "departureTime": "2017-12-22T14:20-08:00",
                    "origin": "LAX",
                    "destination": "ARN",
                    "originTerminal": "B",
                    "destinationTerminal": "5",
                    "duration": 650,
                    "mileage": 5504,
                    "meal": "Meal",
                    "secure": true
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 966,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 530,
                "flight": {
                  "carrier": "SK",
                  "number": "903"
                },
                "id": "G3rcwuIQiCMMiwvJ",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LIg6wwrbDXR79g0+",
                    "aircraft": "333",
                    "arrivalTime": "2018-01-03T15:15-05:00",
                    "departureTime": "2018-01-03T12:25+01:00",
                    "origin": "ARN",
                    "destination": "EWR",
                    "originTerminal": "5",
                    "destinationTerminal": "B",
                    "duration": 530,
                    "mileage": 3917,
                    "meal": "Meal",
                    "secure": true
                  }
                ],
                "connectionDuration": 165
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 271,
                "flight": {
                  "carrier": "SK",
                  "number": "6720"
                },
                "id": "Grl3uXS9zwpWK166",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 7,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LkfeD1sdDP+TyLF3",
                    "aircraft": "738",
                    "arrivalTime": "2018-01-03T20:31-07:00",
                    "departureTime": "2018-01-03T18:00-05:00",
                    "origin": "EWR",
                    "destination": "DEN",
                    "originTerminal": "C",
                    "duration": 271,
                    "operatingDisclosure": "OPERATED BY UNITED",
                    "mileage": 1600,
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
                "id": "AXIafYASvPgWkX/tG9ITH5119AIe90rn60HSxm2e5+TgJWnN86y2SDOA7qKNfoRJca0voKQuvQp5zkIOYNPayV4hSRqbYEE",
                "carrier": "SK",
                "origin": "DEN",
                "destination": "STO",
                "basisCode": "VLWUSSCE"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AO90az1s+L2oMi91i/Q+HaAKdWXiNSPDIATYF60H1SLy3nemeQNObQ0Mmjc3hKFAMkL3q768xaTesssWdjXDF7qmIzX29yU",
                "carrier": "SK",
                "origin": "STO",
                "destination": "DEN",
                "basisCode": "VLXUSSCE"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AXIafYASvPgWkX/tG9ITH5119AIe90rn60HSxm2e5+TgJWnN86y2SDOA7qKNfoRJca0voKQuvQp5zkIOYNPayV4hSRqbYEE",
                "segmentId": "GGubnwWp5SxwR-eH"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AXIafYASvPgWkX/tG9ITH5119AIe90rn60HSxm2e5+TgJWnN86y2SDOA7qKNfoRJca0voKQuvQp5zkIOYNPayV4hSRqbYEE",
                "segmentId": "G8EuHnIY5TsSVbVz"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AO90az1s+L2oMi91i/Q+HaAKdWXiNSPDIATYF60H1SLy3nemeQNObQ0Mmjc3hKFAMkL3q768xaTesssWdjXDF7qmIzX29yU",
                "segmentId": "G3rcwuIQiCMMiwvJ"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AO90az1s+L2oMi91i/Q+HaAKdWXiNSPDIATYF60H1SLy3nemeQNObQ0Mmjc3hKFAMkL3q768xaTesssWdjXDF7qmIzX29yU",
                "segmentId": "Grl3uXS9zwpWK166"
              }
            ],
            "baseFareTotal": "USD1240.00",
            "saleFareTotal": "USD1240.00",
            "saleTaxTotal": "USD396.56",
            "saleTotal": "USD1636.56",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_F",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD300.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD13.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YA_001",
                "chargeType": "GOVERNMENT",
                "code": "YA",
                "country": "SE",
                "salePrice": "USD19.40"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              }
            ],
            "fareCalculation": "DEN UA X/LAX SK STO 645.00VLWUSSCE SK X/NYC SK DEN 595.00VLXUSSCE NUC 1240.00 END ROE 1.00 FARE USD 1240.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 19.40YA 300.00YQ 13.50XF DEN4.50 LAX4.50 EWR4.50",
            "latestTicketingTime": "2017-11-11T23:59-04:00",
            "ptc": "ADT"
          }
        ]
      }
    ]
  }
}, {
  "kind": "qpxExpress#tripsSearch",
  "trips": {
    "kind": "qpxexpress#tripOptions",
    "requestId": "PA7M4W4UDFhjxrCAV0RanU",
    "data": {
      "kind": "qpxexpress#data",
      "airport": [
        {
          "kind": "qpxexpress#airportData",
          "code": "ARN",
          "city": "STO",
          "name": "Stockholm Arlanda"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "DEN",
          "city": "DEN",
          "name": "Denver International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "KEF",
          "city": "REK",
          "name": "Reykjavik Keflavik International"
        }
      ],
      "city": [
        {
          "kind": "qpxexpress#cityData",
          "code": "DEN",
          "name": "Denver"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "REK",
          "name": "Reykjavik"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "STO",
          "name": "Stockholm"
        }
      ],
      "aircraft": [
        {
          "kind": "qpxexpress#aircraftData",
          "code": "75T",
          "name": "Boeing 757"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "75W",
          "name": "Boeing 757"
        }
      ],
      "tax": [
        {
          "kind": "qpxexpress#taxData",
          "id": "ZU_001",
          "name": "Iceland Passenger Fee Keflavik"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XY",
          "name": "US Immigration Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "IS_001",
          "name": "Iceland Airport Service Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YA_001",
          "name": "Sweden Passenger Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "AY_001",
          "name": "US September 11th Security Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "US_002",
          "name": "US International Departure Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YR_F",
          "name": "FI YR surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XA",
          "name": "USDA APHIS Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YC",
          "name": "US Customs Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XF",
          "name": "US Passenger Facility Charge"
        }
      ],
      "carrier": [
        {
          "kind": "qpxexpress#carrierData",
          "code": "FI",
          "name": "Icelandair"
        }
      ]
    },
    "tripOption": [
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD1715.56",
        "id": "AO6i03l09l0V39uJDVznr8001",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 680,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 440,
                "flight": {
                  "carrier": "FI",
                  "number": "670"
                },
                "id": "GhNQSZNCvbXMcgas",
                "cabin": "COACH",
                "bookingCode": "B",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LGEJsd9heGBo8p0N",
                    "aircraft": "75W",
                    "arrivalTime": "2017-12-23T06:30+00:00",
                    "departureTime": "2017-12-22T16:10-07:00",
                    "origin": "DEN",
                    "destination": "KEF",
                    "duration": 440,
                    "mileage": 3557,
                    "meal": "Alcoholic Beverages for Purchase",
                    "secure": true
                  }
                ],
                "connectionDuration": 65
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 175,
                "flight": {
                  "carrier": "FI",
                  "number": "306"
                },
                "id": "GvaW27dNEQAClMkl",
                "cabin": "COACH",
                "bookingCode": "B",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LUSxXYqjj9Y5lUwo",
                    "aircraft": "75T",
                    "arrivalTime": "2017-12-23T11:30+01:00",
                    "departureTime": "2017-12-23T07:35+00:00",
                    "origin": "KEF",
                    "destination": "ARN",
                    "destinationTerminal": "5",
                    "duration": 175,
                    "mileage": 1330,
                    "meal": "Alcoholic Beverages for Purchase"
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 765,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 190,
                "flight": {
                  "carrier": "FI",
                  "number": "307"
                },
                "id": "GGG+18SVScDhPyuV",
                "cabin": "COACH",
                "bookingCode": "T",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LzyKK1rYOmvBxKVf",
                    "aircraft": "75T",
                    "arrivalTime": "2018-01-06T15:30+00:00",
                    "departureTime": "2018-01-06T13:20+01:00",
                    "origin": "ARN",
                    "destination": "KEF",
                    "originTerminal": "5",
                    "duration": 190,
                    "mileage": 1330,
                    "meal": "Alcoholic Beverages for Purchase"
                  }
                ],
                "connectionDuration": 100
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 475,
                "flight": {
                  "carrier": "FI",
                  "number": "671"
                },
                "id": "G26LXROvRU4il1M0",
                "cabin": "COACH",
                "bookingCode": "T",
                "bookingCodeCount": 8,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LVUvDiHGGvltajwE",
                    "aircraft": "75W",
                    "arrivalTime": "2018-01-06T18:05-07:00",
                    "departureTime": "2018-01-06T17:10+00:00",
                    "origin": "KEF",
                    "destination": "DEN",
                    "duration": 475,
                    "mileage": 3557,
                    "meal": "Alcoholic Beverages for Purchase",
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
                "id": "Af8ol4TYcR9HVra8/a17OQyLOz/CTzfcQl+EPbMS1xK2",
                "carrier": "FI",
                "origin": "DEN",
                "destination": "STO",
                "basisCode": "BRR2FLEX"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "ALa50eo3N1ddoLL6IOeF1rc60+/GUvrt57h8VxqQv546",
                "carrier": "FI",
                "origin": "STO",
                "destination": "DEN",
                "basisCode": "TQR5FLEX"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "ALa50eo3N1ddoLL6IOeF1rc60+/GUvrt57h8VxqQv546",
                "segmentId": "GGG+18SVScDhPyuV"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Af8ol4TYcR9HVra8/a17OQyLOz/CTzfcQl+EPbMS1xK2",
                "segmentId": "GvaW27dNEQAClMkl"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Af8ol4TYcR9HVra8/a17OQyLOz/CTzfcQl+EPbMS1xK2",
                "segmentId": "GhNQSZNCvbXMcgas"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "ALa50eo3N1ddoLL6IOeF1rc60+/GUvrt57h8VxqQv546",
                "segmentId": "G26LXROvRU4il1M0"
              }
            ],
            "baseFareTotal": "USD1420.00",
            "saleFareTotal": "USD1420.00",
            "saleTaxTotal": "USD295.56",
            "saleTotal": "USD1715.56",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "ZU_001",
                "chargeType": "GOVERNMENT",
                "code": "ZU",
                "country": "IS",
                "salePrice": "USD6.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "IS_001",
                "chargeType": "GOVERNMENT",
                "code": "IS",
                "country": "IS",
                "salePrice": "USD7.60"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YR_F",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YR",
                "salePrice": "USD200.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD5.60"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD4.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YA_001",
                "chargeType": "GOVERNMENT",
                "code": "YA",
                "country": "SE",
                "salePrice": "USD19.40"
              }
            ],
            "fareCalculation": "DEN FI X/REK FI STO 922.00BRR2FLEX FI X/REK FI DEN 497.50TQR5FLEX NUC 1419.50 END ROE 1.00 FARE USD 1420.00 XT 5.50YC 7.00XY 3.96XA 36.00US 5.60AY 7.60IS 6.00ZU 19.40YA 200.00YR 4.50XF DEN4.50",
            "latestTicketingTime": "2017-11-11T23:59-04:00",
            "ptc": "ADT",
            "refundable": true
          }
        ]
      }
    ]
  }
}, {
  "kind": "qpxExpress#tripsSearch",
  "trips": {
    "kind": "qpxexpress#tripOptions",
    "requestId": "cMwZ3AJj7BHpPLk0E0RanU",
    "data": {
      "kind": "qpxexpress#data",
      "airport": [
        {
          "kind": "qpxexpress#airportData",
          "code": "ARN",
          "city": "STO",
          "name": "Stockholm Arlanda"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "DEN",
          "city": "DEN",
          "name": "Denver International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "LGW",
          "city": "LON",
          "name": "London Gatwick"
        }
      ],
      "city": [
        {
          "kind": "qpxexpress#cityData",
          "code": "DEN",
          "name": "Denver"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "LON",
          "name": "London"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "STO",
          "name": "Stockholm"
        }
      ],
      "aircraft": [
        {
          "kind": "qpxexpress#aircraftData",
          "code": "73H",
          "name": "Boeing 737"
        },
        {
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
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YA_001",
          "name": "Sweden Passenger Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "UB_001",
          "name": "United Kingdom Passenger Service Charge Departures"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "AY_001",
          "name": "US September 11th Security Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "US_002",
          "name": "US International Departure Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XA",
          "name": "USDA APHIS Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YC",
          "name": "US Customs Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XF",
          "name": "US Passenger Facility Charge"
        }
      ],
      "carrier": [
        {
          "kind": "qpxexpress#carrierData",
          "code": "D8",
          "name": "Norwegian Air International LTD."
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "DY",
          "name": "Norwegian Air Shuttle A.S.A."
        }
      ]
    },
    "tripOption": [
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD1054.56",
        "id": "3iFakdd9jbJVMm8B6O80UV001",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 855,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 540,
                "flight": {
                  "carrier": "DY",
                  "number": "7172"
                },
                "id": "G3ucG0WDktuH7Cb3",
                "cabin": "COACH",
                "bookingCode": "X",
                "bookingCodeCount": 5,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "Lv-CPlMY7YrofHmQ",
                    "aircraft": "789",
                    "arrivalTime": "2017-12-27T06:30+00:00",
                    "departureTime": "2017-12-26T14:30-07:00",
                    "origin": "DEN",
                    "destination": "LGW",
                    "destinationTerminal": "S",
                    "duration": 540,
                    "mileage": 4678,
                    "meal": "Food and Beverages for Purchase",
                    "secure": true
                  }
                ],
                "connectionDuration": 175
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 140,
                "flight": {
                  "carrier": "D8",
                  "number": "2852"
                },
                "id": "G+c56kh6nUNIBeJz",
                "cabin": "COACH",
                "bookingCode": "T",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LOwoXzwxyHgbc5TO",
                    "aircraft": "73H",
                    "arrivalTime": "2017-12-27T12:45+01:00",
                    "departureTime": "2017-12-27T09:25+00:00",
                    "origin": "LGW",
                    "destination": "ARN",
                    "originTerminal": "S",
                    "destinationTerminal": "5",
                    "duration": 140,
                    "mileage": 916,
                    "meal": "Food and Beverages for Purchase"
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 805,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 155,
                "flight": {
                  "carrier": "D8",
                  "number": "2849"
                },
                "id": "GMhNv3QXT5u3IjSe",
                "cabin": "COACH",
                "bookingCode": "Z",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LnnSOnu967C--FQc",
                    "aircraft": "73H",
                    "arrivalTime": "2018-01-02T08:40+00:00",
                    "departureTime": "2018-01-02T07:05+01:00",
                    "origin": "ARN",
                    "destination": "LGW",
                    "originTerminal": "5",
                    "destinationTerminal": "S",
                    "duration": 155,
                    "mileage": 916,
                    "meal": "Food and Beverages for Purchase"
                  }
                ],
                "connectionDuration": 65
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 585,
                "flight": {
                  "carrier": "DY",
                  "number": "7171"
                },
                "id": "GPGUp1iRsMWNhNK+",
                "cabin": "COACH",
                "bookingCode": "Z",
                "bookingCodeCount": 1,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L--67iOpBIXH7PID",
                    "aircraft": "789",
                    "arrivalTime": "2018-01-02T12:30-07:00",
                    "departureTime": "2018-01-02T09:45+00:00",
                    "origin": "LGW",
                    "destination": "DEN",
                    "originTerminal": "S",
                    "duration": 585,
                    "mileage": 4678,
                    "meal": "Food and Beverages for Purchase",
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
                "id": "Abftn/VoVmtO4Uve3ufBzlRxMf0QOmBtd3cY9Hq7z4Rc",
                "carrier": "DY",
                "origin": "DEN",
                "destination": "LON",
                "basisCode": "XSRGB"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "A++UGI2p1yBKuJqR3rLxG8gMEDiiOzgXhy2oAE81W95E",
                "carrier": "D8",
                "origin": "LON",
                "destination": "STO",
                "basisCode": "TJIPPI"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "A0CfzVRdKgNoRaAL0myaXBfA5Xci1rEPFBo71iGKyESw",
                "carrier": "D8",
                "origin": "STO",
                "destination": "LON",
                "basisCode": "ZJIPPI"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AAdxyeE1lH4oFMzzvnDp0F+gmDqHuJTHSwrvtDyJx7eI",
                "carrier": "DY",
                "origin": "LON",
                "destination": "DEN",
                "basisCode": "ZSRGB"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A0CfzVRdKgNoRaAL0myaXBfA5Xci1rEPFBo71iGKyESw",
                "segmentId": "GMhNv3QXT5u3IjSe"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AAdxyeE1lH4oFMzzvnDp0F+gmDqHuJTHSwrvtDyJx7eI",
                "segmentId": "GPGUp1iRsMWNhNK+"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A++UGI2p1yBKuJqR3rLxG8gMEDiiOzgXhy2oAE81W95E",
                "segmentId": "G+c56kh6nUNIBeJz"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Abftn/VoVmtO4Uve3ufBzlRxMf0QOmBtd3cY9Hq7z4Rc",
                "segmentId": "G3ucG0WDktuH7Cb3"
              }
            ],
            "baseFareTotal": "USD938.00",
            "saleFareTotal": "USD938.00",
            "saleTaxTotal": "USD116.56",
            "saleTotal": "USD1054.56",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD5.60"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD4.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "UB_001",
                "chargeType": "GOVERNMENT",
                "code": "UB",
                "country": "GB",
                "salePrice": "USD34.60"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YA_001",
                "chargeType": "GOVERNMENT",
                "code": "YA",
                "country": "SE",
                "salePrice": "USD19.40"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              }
            ],
            "fareCalculation": "DEN DY X/LON Q70.80 207.00XSRGB D8 STO Q15.44 70.48TJIPPI D8 X/LON Q15.44 140.58ZJIPPI DY DEN Q70.80 347.22ZSRGB NUC 937.76 END ROE 1.00 FARE USD 938.00 XT 5.50YC 7.00XY 3.96XA 36.00US 5.60AY 34.60UB 19.40YA 4.50XF DEN4.50",
            "latestTicketingTime": "2017-12-26T16:29-04:00",
            "ptc": "ADT"
          }
        ]
      }
    ]
  }
}, {
  "kind": "qpxExpress#tripsSearch",
  "trips": {
    "kind": "qpxexpress#tripOptions",
    "requestId": "qw1Re4PLY81GM0gJo0RanV",
    "data": {
      "kind": "qpxexpress#data",
      "airport": [
        {
          "kind": "qpxexpress#airportData",
          "code": "CDG",
          "city": "PAR",
          "name": "Paris Charles de Gaulle"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "DEN",
          "city": "DEN",
          "name": "Denver International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "EWR",
          "city": "EWR",
          "name": "Newark Liberty International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "GYD",
          "city": "BAK",
          "name": "Baku Heydar Aliyev International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "IAD",
          "city": "WAS",
          "name": "Washington Dulles International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "LHR",
          "city": "LON",
          "name": "London Heathrow"
        }
      ],
      "city": [
        {
          "kind": "qpxexpress#cityData",
          "code": "BAK",
          "name": "Baku"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "DEN",
          "name": "Denver"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "EWR",
          "name": "Newark"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "LON",
          "name": "London"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "PAR",
          "name": "Paris"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "WAS",
          "name": "Washington"
        }
      ],
      "aircraft": [
        {
          "kind": "qpxexpress#aircraftData",
          "code": "320",
          "name": "Airbus A320"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "739",
          "name": "Boeing 737"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "764",
          "name": "Boeing 767"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "787",
          "name": "Boeing 787"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "788",
          "name": "Boeing 787"
        }
      ],
      "tax": [
        {
          "kind": "qpxexpress#taxData",
          "id": "AZ_001",
          "name": "Azerbaijan Departure Tax International"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XY",
          "name": "US Immigration Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "QX_001",
          "name": "France Passenger Service Charge International"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "UB_001",
          "name": "United Kingdom Passenger Service Charge Departures"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "FR_007",
          "name": "France Airport Tax Domestic And International"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XA",
          "name": "USDA APHIS Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YC",
          "name": "US Customs Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YQ_I",
          "name": "J2 YQ surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XF",
          "name": "US Passenger Facility Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "KD_001",
          "name": "Azerbaijan Caa Regulation Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "JL_002",
          "name": "Azerbaijan Flight Security Tax Arrivals"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "JL_001",
          "name": "Azerbaijan Flight Security Tax Departures"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "AY_001",
          "name": "US September 11th Security Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "US_002",
          "name": "US International Departure Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "JB_001",
          "name": "Azerbaijan Airport Development Tax"
        }
      ],
      "carrier": [
        {
          "kind": "qpxexpress#carrierData",
          "code": "J2",
          "name": "Azerbaijan Hava Yollary"
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "UA",
          "name": "United Airlines"
        }
      ]
    },
    "tripOption": [
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD2220.26",
        "id": "JPXAwLzYV4NMQUpoy0s9I5001",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1275,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 218,
                "flight": {
                  "carrier": "UA",
                  "number": "329"
                },
                "id": "GZ5NvA+x7oZIxL4d",
                "cabin": "COACH",
                "bookingCode": "S",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L6OuYN1ry6L0rcQW",
                    "aircraft": "739",
                    "arrivalTime": "2017-12-27T05:03-05:00",
                    "departureTime": "2017-12-26T23:25-07:00",
                    "origin": "DEN",
                    "destination": "EWR",
                    "destinationTerminal": "C",
                    "duration": 218,
                    "onTimePerformance": 90,
                    "mileage": 1600,
                    "meal": "Food and Beverages for Purchase",
                    "secure": true
                  }
                ],
                "connectionDuration": 207
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 420,
                "flight": {
                  "carrier": "UA",
                  "number": "934"
                },
                "id": "GI9SFDhJ-W1HUjut",
                "cabin": "COACH",
                "bookingCode": "S",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LRMsnEuUyH+8glqq",
                    "aircraft": "764",
                    "arrivalTime": "2017-12-27T20:30+00:00",
                    "departureTime": "2017-12-27T08:30-05:00",
                    "origin": "EWR",
                    "destination": "LHR",
                    "originTerminal": "C",
                    "destinationTerminal": "2",
                    "duration": 420,
                    "mileage": 3454,
                    "meal": "Breakfast",
                    "secure": true
                  }
                ],
                "connectionDuration": 100
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 330,
                "flight": {
                  "carrier": "J2",
                  "number": "8"
                },
                "id": "GYJNLatdEN58ePNm",
                "cabin": "COACH",
                "bookingCode": "H",
                "bookingCodeCount": 4,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LD5IqFMcJmdztLE3",
                    "aircraft": "787",
                    "arrivalTime": "2017-12-28T07:40+04:00",
                    "departureTime": "2017-12-27T22:10+00:00",
                    "origin": "LHR",
                    "destination": "GYD",
                    "originTerminal": "4",
                    "destinationTerminal": "1",
                    "duration": 330,
                    "mileage": 2485,
                    "meal": "Meal"
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1363,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 350,
                "flight": {
                  "carrier": "J2",
                  "number": "73"
                },
                "id": "GgatinrNc4AlSr13",
                "cabin": "COACH",
                "bookingCode": "H",
                "bookingCodeCount": 4,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LJPvr6isEfUKH-ad",
                    "aircraft": "320",
                    "arrivalTime": "2018-01-02T09:20+01:00",
                    "departureTime": "2018-01-02T06:30+04:00",
                    "origin": "GYD",
                    "destination": "CDG",
                    "originTerminal": "1",
                    "destinationTerminal": "2D",
                    "duration": 350,
                    "mileage": 2362,
                    "meal": "Breakfast"
                  }
                ],
                "connectionDuration": 155
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 525,
                "flight": {
                  "carrier": "UA",
                  "number": "914"
                },
                "id": "GVMgSCaRWbFfCroD",
                "cabin": "COACH",
                "bookingCode": "H",
                "bookingCodeCount": 5,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LPfws9xTCIMUfR-C",
                    "aircraft": "788",
                    "arrivalTime": "2018-01-02T14:40-05:00",
                    "departureTime": "2018-01-02T11:55+01:00",
                    "origin": "CDG",
                    "destination": "IAD",
                    "originTerminal": "1",
                    "duration": 525,
                    "mileage": 3849,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 90
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 243,
                "flight": {
                  "carrier": "UA",
                  "number": "542"
                },
                "id": "GPaTX02fNyLcTFNm",
                "cabin": "COACH",
                "bookingCode": "H",
                "bookingCodeCount": 5,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LyeMtwtISRdcsj5a",
                    "aircraft": "739",
                    "arrivalTime": "2018-01-02T18:13-07:00",
                    "departureTime": "2018-01-02T16:10-05:00",
                    "origin": "IAD",
                    "destination": "DEN",
                    "duration": 243,
                    "onTimePerformance": 80,
                    "mileage": 1448,
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
                "id": "A3QRSX7HkvRaFu8srDur/3YxKWtak1bV/IXwKZPWdVN2",
                "carrier": "UA",
                "origin": "DEN",
                "destination": "BAK",
                "basisCode": "SLX26NCE"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AN+gucozJnSl6iA94cCYmjPOg6HTPrHfcUGE1cC14HZw",
                "carrier": "UA",
                "origin": "BAK",
                "destination": "DEN",
                "basisCode": "HKX36RCE"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AN+gucozJnSl6iA94cCYmjPOg6HTPrHfcUGE1cC14HZw",
                "segmentId": "GgatinrNc4AlSr13"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A3QRSX7HkvRaFu8srDur/3YxKWtak1bV/IXwKZPWdVN2",
                "segmentId": "GI9SFDhJ-W1HUjut"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A3QRSX7HkvRaFu8srDur/3YxKWtak1bV/IXwKZPWdVN2",
                "segmentId": "GYJNLatdEN58ePNm"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AN+gucozJnSl6iA94cCYmjPOg6HTPrHfcUGE1cC14HZw",
                "segmentId": "GVMgSCaRWbFfCroD"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A3QRSX7HkvRaFu8srDur/3YxKWtak1bV/IXwKZPWdVN2",
                "segmentId": "GZ5NvA+x7oZIxL4d"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AN+gucozJnSl6iA94cCYmjPOg6HTPrHfcUGE1cC14HZw",
                "segmentId": "GPaTX02fNyLcTFNm"
              }
            ],
            "baseFareTotal": "USD1690.00",
            "saleFareTotal": "USD1690.00",
            "saleTaxTotal": "USD530.26",
            "saleTotal": "USD2220.26",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JL_002",
                "chargeType": "GOVERNMENT",
                "code": "JL",
                "country": "AZ",
                "salePrice": "USD11.70"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "UB_001",
                "chargeType": "GOVERNMENT",
                "code": "UB",
                "country": "GB",
                "salePrice": "USD41.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD21.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD300.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD13.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "QX_001",
                "chargeType": "GOVERNMENT",
                "code": "QX",
                "country": "FR",
                "salePrice": "USD21.90"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "FR_007",
                "chargeType": "GOVERNMENT",
                "code": "FR",
                "country": "FR",
                "salePrice": "USD9.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "KD_001",
                "chargeType": "GOVERNMENT",
                "code": "KD",
                "country": "AZ",
                "salePrice": "USD1.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AZ_001",
                "chargeType": "GOVERNMENT",
                "code": "AZ",
                "country": "AZ",
                "salePrice": "USD23.30"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JB_001",
                "chargeType": "GOVERNMENT",
                "code": "JB",
                "country": "AZ",
                "salePrice": "USD9.30"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JL_001",
                "chargeType": "GOVERNMENT",
                "code": "JL",
                "country": "AZ",
                "salePrice": "USD14.00"
              }
            ],
            "fareCalculation": "DEN UA X/EWR UA X/LON J2 BAK Q DENBAK75.00 480.00SLX26NCE J2 X/PAR UA X/WAS UA DEN Q BAKDEN75.00 1060.00HKX36RCE NUC 1690.00 END ROE 1.00 FARE USD 1690.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 41.20UB 23.30AZ 9.30JB 25.70JL 1.20KD 9.50FR 21.90QX 321.00YQ 13.50XF DEN4.50 EWR4.50 IAD4.50",
            "latestTicketingTime": "2017-11-07T19:09-04:00",
            "ptc": "ADT",
            "refundable": true
          }
        ]
      }
    ]
  }
}, {
  "kind": "qpxExpress#tripsSearch",
  "trips": {
    "kind": "qpxexpress#tripOptions",
    "requestId": "VhABdZA2wu2fKdNV10RanV",
    "data": {
      "kind": "qpxexpress#data",
      "airport": [
        {
          "kind": "qpxexpress#airportData",
          "code": "CDG",
          "city": "PAR",
          "name": "Paris Charles de Gaulle"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "DEN",
          "city": "DEN",
          "name": "Denver International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "DTW",
          "city": "DTT",
          "name": "Detroit Metropolitan Wayne County"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "GYD",
          "city": "BAK",
          "name": "Baku Heydar Aliyev International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "SLC",
          "city": "SLC",
          "name": "Salt Lake City International"
        }
      ],
      "city": [
        {
          "kind": "qpxexpress#cityData",
          "code": "BAK",
          "name": "Baku"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "DEN",
          "name": "Denver"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "DTT",
          "name": "Detroit"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "PAR",
          "name": "Paris"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "SLC",
          "name": "Salt Lake City"
        }
      ],
      "aircraft": [
        {
          "kind": "qpxexpress#aircraftData",
          "code": "320",
          "name": "Airbus A320"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "332",
          "name": "Airbus A330"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "76W",
          "name": "Boeing 767"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "E75",
          "name": "Embraer RJ-175"
        }
      ],
      "tax": [
        {
          "kind": "qpxexpress#taxData",
          "id": "AZ_001",
          "name": "Azerbaijan Departure Tax International"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XY",
          "name": "US Immigration Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "QX_001",
          "name": "France Passenger Service Charge International"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "FR_007",
          "name": "France Airport Tax Domestic And International"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XA",
          "name": "USDA APHIS Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YR_I",
          "name": "AF YR surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YC",
          "name": "US Customs Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XF",
          "name": "US Passenger Facility Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "KD_001",
          "name": "Azerbaijan Caa Regulation Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "JL_002",
          "name": "Azerbaijan Flight Security Tax Arrivals"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "JL_001",
          "name": "Azerbaijan Flight Security Tax Departures"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "AY_001",
          "name": "US September 11th Security Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "US_002",
          "name": "US International Departure Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "JB_001",
          "name": "Azerbaijan Airport Development Tax"
        }
      ],
      "carrier": [
        {
          "kind": "qpxexpress#carrierData",
          "code": "AF",
          "name": "Air France"
        }
      ]
    },
    "tripOption": [
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD2285.46",
        "id": "COikvRYxkYMVLr3TA5CAbT001",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1190,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 176,
                "flight": {
                  "carrier": "AF",
                  "number": "2221"
                },
                "id": "GepsypQ9H4ro3UIv",
                "cabin": "COACH",
                "bookingCode": "H",
                "bookingCodeCount": 1,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L5V6a0evEBfiCdEB",
                    "aircraft": "320",
                    "arrivalTime": "2017-12-23T16:36-05:00",
                    "departureTime": "2017-12-23T11:40-07:00",
                    "origin": "DEN",
                    "destination": "DTW",
                    "destinationTerminal": "EM",
                    "duration": 176,
                    "operatingDisclosure": "OPERATED BY DELTA",
                    "mileage": 1119,
                    "meal": "Refreshments for Purchase",
                    "secure": true
                  }
                ],
                "connectionDuration": 89
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 475,
                "flight": {
                  "carrier": "AF",
                  "number": "3605"
                },
                "id": "GRxAXmAiUOHQXPZ5",
                "cabin": "COACH",
                "bookingCode": "H",
                "bookingCodeCount": 8,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LuVTpWjcuvJ+G-4q",
                    "aircraft": "332",
                    "arrivalTime": "2017-12-24T08:00+01:00",
                    "departureTime": "2017-12-23T18:05-05:00",
                    "origin": "DTW",
                    "destination": "CDG",
                    "originTerminal": "EM",
                    "destinationTerminal": "2E",
                    "duration": 475,
                    "operatingDisclosure": "OPERATED BY DELTA",
                    "mileage": 3949,
                    "meal": "Dinner",
                    "secure": true
                  }
                ],
                "connectionDuration": 140
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 310,
                "flight": {
                  "carrier": "AF",
                  "number": "8176"
                },
                "id": "GFxHDYRP94kfdFdS",
                "cabin": "COACH",
                "bookingCode": "K",
                "bookingCodeCount": 3,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "Lz7VOQ+J9eO7nO5x",
                    "aircraft": "320",
                    "arrivalTime": "2017-12-24T18:30+04:00",
                    "departureTime": "2017-12-24T10:20+01:00",
                    "origin": "CDG",
                    "destination": "GYD",
                    "originTerminal": "2D",
                    "destinationTerminal": "1",
                    "duration": 310,
                    "operatingDisclosure": "OPERATED BY AZERBAIJAN",
                    "mileage": 2362,
                    "meal": "Meal"
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1288,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 350,
                "flight": {
                  "carrier": "AF",
                  "number": "8177"
                },
                "id": "GIhnhMEE6DuITglg",
                "cabin": "COACH",
                "bookingCode": "K",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "Ln+W8NsNGOyyUaLu",
                    "aircraft": "320",
                    "arrivalTime": "2018-01-02T09:20+01:00",
                    "departureTime": "2018-01-02T06:30+04:00",
                    "origin": "GYD",
                    "destination": "CDG",
                    "originTerminal": "1",
                    "destinationTerminal": "2D",
                    "duration": 350,
                    "operatingDisclosure": "OPERATED BY AZERBAIJAN",
                    "mileage": 2362,
                    "meal": "Breakfast"
                  }
                ],
                "connectionDuration": 85
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 680,
                "flight": {
                  "carrier": "AF",
                  "number": "8990"
                },
                "id": "GZG9UdqhL3zcuxBX",
                "cabin": "COACH",
                "bookingCode": "H",
                "bookingCodeCount": 5,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LPut6BM9QRQ2rdKg",
                    "aircraft": "76W",
                    "arrivalTime": "2018-01-02T14:05-07:00",
                    "departureTime": "2018-01-02T10:45+01:00",
                    "origin": "CDG",
                    "destination": "SLC",
                    "originTerminal": "2E",
                    "destinationTerminal": "2",
                    "duration": 680,
                    "operatingDisclosure": "OPERATED BY DELTA",
                    "mileage": 5064,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 75
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 98,
                "flight": {
                  "carrier": "AF",
                  "number": "7918"
                },
                "id": "Ga5B1LR2IO9Uf0TX",
                "cabin": "COACH",
                "bookingCode": "H",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LSnvSPRHyAJYNzrm",
                    "aircraft": "E75",
                    "arrivalTime": "2018-01-02T16:58-07:00",
                    "departureTime": "2018-01-02T15:20-07:00",
                    "origin": "SLC",
                    "destination": "DEN",
                    "originTerminal": "2",
                    "duration": 98,
                    "operatingDisclosure": "OPERATED BY COMPASS DBA DELTA CONNECTION FOR DELTA AIR LINES",
                    "mileage": 389,
                    "meal": "No Meal",
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
                "id": "AupdoPPLOOCC0in5nrGr6Qy6nC95aB+opyaUBZszAT42",
                "carrier": "AF",
                "origin": "DEN",
                "destination": "BAK",
                "basisCode": "HK1H76M3"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "ASVabWl9HRQyJv1FtTDx8VVgtiHh/WhGBzEr1MISYQmI",
                "carrier": "AF",
                "origin": "BAK",
                "destination": "DEN",
                "basisCode": "HK1H76M2"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AupdoPPLOOCC0in5nrGr6Qy6nC95aB+opyaUBZszAT42",
                "segmentId": "GFxHDYRP94kfdFdS"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "ASVabWl9HRQyJv1FtTDx8VVgtiHh/WhGBzEr1MISYQmI",
                "segmentId": "GIhnhMEE6DuITglg"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "ASVabWl9HRQyJv1FtTDx8VVgtiHh/WhGBzEr1MISYQmI",
                "segmentId": "GZG9UdqhL3zcuxBX"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "ASVabWl9HRQyJv1FtTDx8VVgtiHh/WhGBzEr1MISYQmI",
                "segmentId": "Ga5B1LR2IO9Uf0TX"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AupdoPPLOOCC0in5nrGr6Qy6nC95aB+opyaUBZszAT42",
                "segmentId": "GepsypQ9H4ro3UIv"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AupdoPPLOOCC0in5nrGr6Qy6nC95aB+opyaUBZszAT42",
                "segmentId": "GRxAXmAiUOHQXPZ5"
              }
            ],
            "baseFareTotal": "USD1786.00",
            "saleFareTotal": "USD1786.00",
            "saleTaxTotal": "USD499.46",
            "saleTotal": "USD2285.46",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JL_002",
                "chargeType": "GOVERNMENT",
                "code": "JL",
                "country": "AZ",
                "salePrice": "USD11.70"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "QX_001",
                "chargeType": "GOVERNMENT",
                "code": "QX",
                "country": "FR",
                "salePrice": "USD43.80"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "FR_007",
                "chargeType": "GOVERNMENT",
                "code": "FR",
                "country": "FR",
                "salePrice": "USD19.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YR_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YR",
                "salePrice": "USD300.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD13.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "KD_001",
                "chargeType": "GOVERNMENT",
                "code": "KD",
                "country": "AZ",
                "salePrice": "USD1.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AZ_001",
                "chargeType": "GOVERNMENT",
                "code": "AZ",
                "country": "AZ",
                "salePrice": "USD23.30"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JB_001",
                "chargeType": "GOVERNMENT",
                "code": "JB",
                "country": "AZ",
                "salePrice": "USD9.30"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JL_001",
                "chargeType": "GOVERNMENT",
                "code": "JL",
                "country": "AZ",
                "salePrice": "USD14.00"
              }
            ],
            "fareCalculation": "DEN AF X/DTT AF X/E/PAR AF BAK Q DENBAK7.75 M 910.00HK1H76M3 AF X/E/PAR AF X/SLC AF DEN Q BAKDEN7.75 M 860.00HK1H76M2 NUC 1785.50 END ROE 1.00 FARE USD 1786.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 19.00FR 43.80QX 23.30AZ 9.30JB 25.70JL 1.20KD 300.00YR 13.50XF DEN4.50 DTW4.50 SLC4.50",
            "latestTicketingTime": "2017-11-07T19:09-04:00",
            "ptc": "ADT",
            "refundable": true
          }
        ]
      }
    ]
  }
}, {
  "kind": "qpxExpress#tripsSearch",
  "trips": {
    "kind": "qpxexpress#tripOptions",
    "requestId": "3wAoATQxjAkUj7M0C0RanW",
    "data": {
      "kind": "qpxexpress#data",
      "airport": [
        {
          "kind": "qpxexpress#airportData",
          "code": "DEN",
          "city": "DEN",
          "name": "Denver International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "FRA",
          "city": "FRA",
          "name": "Frankfurt International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "GYD",
          "city": "BAK",
          "name": "Baku Heydar Aliyev International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "MUC",
          "city": "MUC",
          "name": "Munich Franz Joseph Strauss Int'l"
        }
      ],
      "city": [
        {
          "kind": "qpxexpress#cityData",
          "code": "BAK",
          "name": "Baku"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "DEN",
          "name": "Denver"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "FRA",
          "name": "Frankfurt"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "MUC",
          "name": "Munich"
        }
      ],
      "aircraft": [
        {
          "kind": "qpxexpress#aircraftData",
          "code": "320",
          "name": "Airbus A320"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "32A",
          "name": "Airbus A320"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "333",
          "name": "Airbus A330"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "744",
          "name": "Boeing 747"
        }
      ],
      "tax": [
        {
          "kind": "qpxexpress#taxData",
          "id": "AZ_001",
          "name": "Azerbaijan Departure Tax International"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XY",
          "name": "US Immigration Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XA",
          "name": "USDA APHIS Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YC",
          "name": "US Customs Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YQ_I",
          "name": "UA YQ surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XF",
          "name": "US Passenger Facility Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "KD_001",
          "name": "Azerbaijan Caa Regulation Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "RA_002",
          "name": "Germany Passenger Service Charge International Departure"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "DE_001",
          "name": "Germany Airport Security Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "RD_002",
          "name": "Germany Passenger Service Charge Domestic Departure"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "JL_002",
          "name": "Azerbaijan Flight Security Tax Arrivals"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "JL_001",
          "name": "Azerbaijan Flight Security Tax Departures"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "AY_001",
          "name": "US September 11th Security Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "US_002",
          "name": "US International Departure Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "JB_001",
          "name": "Azerbaijan Airport Development Tax"
        }
      ],
      "carrier": [
        {
          "kind": "qpxexpress#carrierData",
          "code": "LH",
          "name": "Deutsche Lufthansa AG"
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "UA",
          "name": "United Airlines"
        }
      ]
    },
    "tripOption": [
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD1786.16",
        "id": "Hl16i5rHKIILy3vQsthrXR001",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1010,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 575,
                "flight": {
                  "carrier": "UA",
                  "number": "8879"
                },
                "id": "GVNkP8yca4aQSPdk",
                "cabin": "COACH",
                "bookingCode": "W",
                "bookingCodeCount": 4,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LeokaDpfarRhpyRK",
                    "aircraft": "744",
                    "arrivalTime": "2017-12-24T11:05+01:00",
                    "departureTime": "2017-12-23T17:30-07:00",
                    "origin": "DEN",
                    "destination": "FRA",
                    "destinationTerminal": "1",
                    "duration": 575,
                    "operatingDisclosure": "OPERATED BY LUFTHANSA",
                    "mileage": 5024,
                    "meal": "Meal",
                    "secure": true
                  }
                ],
                "connectionDuration": 155
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 280,
                "flight": {
                  "carrier": "UA",
                  "number": "9108"
                },
                "id": "GGVnVUAQqkdMEk86",
                "cabin": "COACH",
                "bookingCode": "W",
                "bookingCodeCount": 4,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LI3eYxqEJ83A6dhx",
                    "aircraft": "32A",
                    "arrivalTime": "2017-12-24T21:20+04:00",
                    "departureTime": "2017-12-24T13:40+01:00",
                    "origin": "FRA",
                    "destination": "GYD",
                    "originTerminal": "1",
                    "destinationTerminal": "1",
                    "duration": 280,
                    "operatingDisclosure": "OPERATED BY LUFTHANSA",
                    "mileage": 2091,
                    "meal": "Cold Meal"
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1255,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 320,
                "flight": {
                  "carrier": "LH",
                  "number": "613"
                },
                "id": "GwGOvTGDYnzw0Bgv",
                "cabin": "COACH",
                "bookingCode": "W",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LJDbihd8om0nx1ct",
                    "aircraft": "32A",
                    "arrivalTime": "2018-01-03T07:10+01:00",
                    "departureTime": "2018-01-03T04:50+04:00",
                    "origin": "GYD",
                    "destination": "FRA",
                    "originTerminal": "1",
                    "destinationTerminal": "1",
                    "duration": 320,
                    "mileage": 2091,
                    "meal": "Meal"
                  }
                ],
                "connectionDuration": 65
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 55,
                "flight": {
                  "carrier": "LH",
                  "number": "96"
                },
                "id": "GHu6thOA+iHbfx1F",
                "cabin": "COACH",
                "bookingCode": "W",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L-6Kuk8HtuGgwiql",
                    "aircraft": "320",
                    "arrivalTime": "2018-01-03T09:10+01:00",
                    "departureTime": "2018-01-03T08:15+01:00",
                    "origin": "FRA",
                    "destination": "MUC",
                    "originTerminal": "1",
                    "destinationTerminal": "2",
                    "duration": 55,
                    "mileage": 185,
                    "meal": "Snack or Brunch"
                  }
                ],
                "connectionDuration": 145
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 670,
                "flight": {
                  "carrier": "LH",
                  "number": "480"
                },
                "id": "GcP5BLU6HfWFJz4j",
                "cabin": "COACH",
                "bookingCode": "W",
                "bookingCodeCount": 1,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LLrRWcxUSRYT3zPl",
                    "aircraft": "333",
                    "arrivalTime": "2018-01-03T14:45-07:00",
                    "departureTime": "2018-01-03T11:35+01:00",
                    "origin": "MUC",
                    "destination": "DEN",
                    "originTerminal": "2",
                    "duration": 670,
                    "mileage": 5209,
                    "meal": "Meal",
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
                "id": "A4K+aOj81tZg++NVWwHuW6C09pLajnHhIzG6xZ7gGUzc",
                "carrier": "UA",
                "origin": "DEN",
                "destination": "BAK",
                "basisCode": "WKW26NCE"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AIuUHYkDR3Pxd4F2Epo7lBL1PlVMUjF2g0pm8WkSQLgY",
                "carrier": "LH",
                "origin": "BAK",
                "destination": "DEN",
                "basisCode": "WKX26NCE"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AIuUHYkDR3Pxd4F2Epo7lBL1PlVMUjF2g0pm8WkSQLgY",
                "segmentId": "GwGOvTGDYnzw0Bgv"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A4K+aOj81tZg++NVWwHuW6C09pLajnHhIzG6xZ7gGUzc",
                "segmentId": "GVNkP8yca4aQSPdk"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A4K+aOj81tZg++NVWwHuW6C09pLajnHhIzG6xZ7gGUzc",
                "segmentId": "GGVnVUAQqkdMEk86"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AIuUHYkDR3Pxd4F2Epo7lBL1PlVMUjF2g0pm8WkSQLgY",
                "segmentId": "GHu6thOA+iHbfx1F"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AIuUHYkDR3Pxd4F2Epo7lBL1PlVMUjF2g0pm8WkSQLgY",
                "segmentId": "GcP5BLU6HfWFJz4j"
              }
            ],
            "baseFareTotal": "USD1270.00",
            "saleFareTotal": "USD1270.00",
            "saleTaxTotal": "USD516.16",
            "saleTotal": "USD1786.16",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JL_002",
                "chargeType": "GOVERNMENT",
                "code": "JL",
                "country": "AZ",
                "salePrice": "USD11.70"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "DE_001",
                "chargeType": "GOVERNMENT",
                "code": "DE",
                "country": "DE",
                "salePrice": "USD22.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "RA_002",
                "chargeType": "GOVERNMENT",
                "code": "RA",
                "country": "DE",
                "salePrice": "USD47.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD150.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD5.60"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD4.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD150.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "RD_002",
                "chargeType": "GOVERNMENT",
                "code": "RD",
                "country": "DE",
                "salePrice": "USD24.90"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "KD_001",
                "chargeType": "GOVERNMENT",
                "code": "KD",
                "country": "AZ",
                "salePrice": "USD1.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AZ_001",
                "chargeType": "GOVERNMENT",
                "code": "AZ",
                "country": "AZ",
                "salePrice": "USD23.30"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JB_001",
                "chargeType": "GOVERNMENT",
                "code": "JB",
                "country": "AZ",
                "salePrice": "USD9.30"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JL_001",
                "chargeType": "GOVERNMENT",
                "code": "JL",
                "country": "AZ",
                "salePrice": "USD14.00"
              }
            ],
            "fareCalculation": "DEN UA X/FRA UA BAK Q DENBAK50.00 610.00WKW26NCE LH X/FRA LH X/MUC LH DEN Q BAKDEN50.00 560.00WKX26NCE NUC 1270.00 END ROE 1.00 FARE USD 1270.00 XT 5.50YC 7.00XY 3.96XA 36.00US 5.60AY 22.20DE 47.00RA 24.90RD 23.30AZ 9.30JB 25.70JL 1.20KD 300.00YQ 4.50XF DEN4.50",
            "latestTicketingTime": "2017-11-07T19:10-04:00",
            "ptc": "ADT"
          }
        ]
      }
    ]
  }
}, {
  "kind": "qpxExpress#tripsSearch",
  "trips": {
    "kind": "qpxexpress#tripOptions",
    "requestId": "bw0YYNAaJmWNoW2bf0RanW",
    "data": {
      "kind": "qpxexpress#data",
      "airport": [
        {
          "kind": "qpxexpress#airportData",
          "code": "BOS",
          "city": "BOS",
          "name": "Boston Edward L. Logan International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "DEN",
          "city": "DEN",
          "name": "Denver International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "DOH",
          "city": "DOH",
          "name": "Doha Hamad International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "GYD",
          "city": "BAK",
          "name": "Baku Heydar Aliyev International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "IST",
          "city": "IST",
          "name": "Istanbul Ataturk"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "JFK",
          "city": "NYC",
          "name": "New York John F Kennedy International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "ORD",
          "city": "CHI",
          "name": "Chicago O'Hare"
        }
      ],
      "city": [
        {
          "kind": "qpxexpress#cityData",
          "code": "BAK",
          "name": "Baku"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "BOS",
          "name": "Boston"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "CHI",
          "name": "Chicago"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "DEN",
          "name": "Denver"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "DOH",
          "name": "Doha"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "IST",
          "name": "Istanbul"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "NYC",
          "name": "New York"
        }
      ],
      "aircraft": [
        {
          "kind": "qpxexpress#aircraftData",
          "code": "320",
          "name": "Airbus A320"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "321",
          "name": "Airbus A321"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "32B",
          "name": "Airbus A321 (Sharklets)"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "359",
          "name": "Airbus A350"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "739",
          "name": "Boeing 737"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "77W",
          "name": "Boeing 777"
        }
      ],
      "tax": [
        {
          "kind": "qpxexpress#taxData",
          "id": "AZ_001",
          "name": "Azerbaijan Departure Tax International"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XY",
          "name": "US Immigration Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XA",
          "name": "USDA APHIS Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YR_F",
          "name": "TK YR surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YR_I",
          "name": "QR YR surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YC",
          "name": "US Customs Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XF",
          "name": "US Passenger Facility Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "KD_001",
          "name": "Azerbaijan Caa Regulation Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "G4_001",
          "name": "Qatar Passenger Facility Charge Pfc"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "JL_002",
          "name": "Azerbaijan Flight Security Tax Arrivals"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "JL_001",
          "name": "Azerbaijan Flight Security Tax Departures"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YQ_F",
          "name": "QR YQ surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "TR_001",
          "name": "Turkey Airport Service Charge International"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "AY_001",
          "name": "US September 11th Security Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "US_002",
          "name": "US International Departure Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "PZ_002",
          "name": "Qatar Passenger Service Charge Arrivals"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "JB_001",
          "name": "Azerbaijan Airport Development Tax"
        }
      ],
      "carrier": [
        {
          "kind": "qpxexpress#carrierData",
          "code": "B6",
          "name": "Jetblue Airways Corporation"
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "QR",
          "name": "Qatar Airways (Q.C.S.C.)"
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "TK",
          "name": "Turkish Airlines"
        }
      ]
    },
    "tripOption": [
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD2343.66",
        "id": "EyJHCKBGRYCSn0iedyeQf6002",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1601,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 229,
                "flight": {
                  "carrier": "QR",
                  "number": "4235"
                },
                "id": "G8GdJ7lVFmyN7yUx",
                "cabin": "COACH",
                "bookingCode": "M",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L-wnDK1GqbSrYL0k",
                    "aircraft": "320",
                    "arrivalTime": "2017-12-22T17:28-05:00",
                    "departureTime": "2017-12-22T11:39-07:00",
                    "origin": "DEN",
                    "destination": "BOS",
                    "destinationTerminal": "C",
                    "duration": 229,
                    "operatingDisclosure": "OPERATED BY JETBLUE",
                    "mileage": 1748,
                    "secure": true
                  }
                ],
                "connectionDuration": 202
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 705,
                "flight": {
                  "carrier": "QR",
                  "number": "744"
                },
                "id": "GOhx+K4h3cUmksW2",
                "cabin": "COACH",
                "bookingCode": "M",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LJvKaKQFGj9GkWoM",
                    "aircraft": "359",
                    "arrivalTime": "2017-12-23T16:35+03:00",
                    "departureTime": "2017-12-22T20:50-05:00",
                    "origin": "BOS",
                    "destination": "DOH",
                    "originTerminal": "E",
                    "duration": 705,
                    "mileage": 6502,
                    "meal": "Meal",
                    "secure": true
                  }
                ],
                "connectionDuration": 280
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 185,
                "flight": {
                  "carrier": "QR",
                  "number": "247"
                },
                "id": "GBehoCGd39ot0Uy7",
                "cabin": "COACH",
                "bookingCode": "M",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LzRBpMnKFcwLdUVj",
                    "aircraft": "320",
                    "arrivalTime": "2017-12-24T01:20+04:00",
                    "departureTime": "2017-12-23T21:15+03:00",
                    "origin": "DOH",
                    "destination": "GYD",
                    "destinationTerminal": "1",
                    "duration": 185,
                    "mileage": 1053,
                    "meal": "Meal"
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1787,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 170,
                "flight": {
                  "carrier": "QR",
                  "number": "248"
                },
                "id": "GaKlF2Vhg8H9YLeW",
                "cabin": "COACH",
                "bookingCode": "K",
                "bookingCodeCount": 3,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LyQBooQ4X8g5Nttp",
                    "aircraft": "320",
                    "arrivalTime": "2018-01-04T05:30+03:00",
                    "departureTime": "2018-01-04T03:40+04:00",
                    "origin": "GYD",
                    "destination": "DOH",
                    "originTerminal": "1",
                    "duration": 170,
                    "mileage": 1053,
                    "meal": "Meal"
                  }
                ],
                "connectionDuration": 165
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 825,
                "flight": {
                  "carrier": "QR",
                  "number": "743"
                },
                "id": "G9iSno7iEJxNtNv8",
                "cabin": "COACH",
                "bookingCode": "K",
                "bookingCodeCount": 3,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L3CQSBsaXJamKyXq",
                    "aircraft": "359",
                    "arrivalTime": "2018-01-04T14:00-05:00",
                    "departureTime": "2018-01-04T08:15+03:00",
                    "origin": "DOH",
                    "destination": "BOS",
                    "destinationTerminal": "E",
                    "duration": 825,
                    "mileage": 6502,
                    "meal": "Meal",
                    "secure": true
                  }
                ],
                "connectionDuration": 337
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 290,
                "flight": {
                  "carrier": "QR",
                  "number": "4236"
                },
                "id": "GeBtyvZ8wqOxUNfQ",
                "cabin": "COACH",
                "bookingCode": "K",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LlrWax3WPXGhhHyy",
                    "aircraft": "320",
                    "arrivalTime": "2018-01-04T22:27-07:00",
                    "departureTime": "2018-01-04T19:37-05:00",
                    "origin": "BOS",
                    "destination": "DEN",
                    "originTerminal": "C",
                    "duration": 290,
                    "operatingDisclosure": "OPERATED BY JETBLUE",
                    "mileage": 1748,
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
                "id": "AqDeTqdjaZKVH1A3Z7f7Z1+eQY9kzBYOdlaTvqPn+lAcwsSA3jC0lrDkfGryDPgm5je51jY4/7cLdkpMbc51QpwZTmHOAU/",
                "carrier": "QR",
                "origin": "DEN",
                "destination": "BAK",
                "basisCode": "MLR5R1SW"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AKbJnoZLpHlz8wA2+lNEkgKPxCepoeEiS0OunCLH5dq40AaRtO4N27wkYktIhxwsMweoNgy84KQ1we0PjaGKkzfC+8EO0E/",
                "carrier": "QR",
                "origin": "BAK",
                "destination": "DEN",
                "basisCode": "KLR5R1SX"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AqDeTqdjaZKVH1A3Z7f7Z1+eQY9kzBYOdlaTvqPn+lAcwsSA3jC0lrDkfGryDPgm5je51jY4/7cLdkpMbc51QpwZTmHOAU/",
                "segmentId": "G8GdJ7lVFmyN7yUx"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AqDeTqdjaZKVH1A3Z7f7Z1+eQY9kzBYOdlaTvqPn+lAcwsSA3jC0lrDkfGryDPgm5je51jY4/7cLdkpMbc51QpwZTmHOAU/",
                "segmentId": "GBehoCGd39ot0Uy7"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AqDeTqdjaZKVH1A3Z7f7Z1+eQY9kzBYOdlaTvqPn+lAcwsSA3jC0lrDkfGryDPgm5je51jY4/7cLdkpMbc51QpwZTmHOAU/",
                "segmentId": "GOhx+K4h3cUmksW2"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AKbJnoZLpHlz8wA2+lNEkgKPxCepoeEiS0OunCLH5dq40AaRtO4N27wkYktIhxwsMweoNgy84KQ1we0PjaGKkzfC+8EO0E/",
                "segmentId": "G9iSno7iEJxNtNv8"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AKbJnoZLpHlz8wA2+lNEkgKPxCepoeEiS0OunCLH5dq40AaRtO4N27wkYktIhxwsMweoNgy84KQ1we0PjaGKkzfC+8EO0E/",
                "segmentId": "GeBtyvZ8wqOxUNfQ"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AKbJnoZLpHlz8wA2+lNEkgKPxCepoeEiS0OunCLH5dq40AaRtO4N27wkYktIhxwsMweoNgy84KQ1we0PjaGKkzfC+8EO0E/",
                "segmentId": "GaKlF2Vhg8H9YLeW"
              }
            ],
            "baseFareTotal": "USD1889.00",
            "saleFareTotal": "USD1889.00",
            "saleTaxTotal": "USD454.66",
            "saleTotal": "USD2343.66",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JL_002",
                "chargeType": "GOVERNMENT",
                "code": "JL",
                "country": "AZ",
                "salePrice": "USD11.70"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G4_001",
                "chargeType": "GOVERNMENT",
                "code": "G4",
                "country": "QA",
                "salePrice": "USD19.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "PZ_002",
                "chargeType": "GOVERNMENT",
                "code": "PZ",
                "country": "QA",
                "salePrice": "USD1.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_F",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD280.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YR_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YR",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD13.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "KD_001",
                "chargeType": "GOVERNMENT",
                "code": "KD",
                "country": "AZ",
                "salePrice": "USD1.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AZ_001",
                "chargeType": "GOVERNMENT",
                "code": "AZ",
                "country": "AZ",
                "salePrice": "USD23.30"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JB_001",
                "chargeType": "GOVERNMENT",
                "code": "JB",
                "country": "AZ",
                "salePrice": "USD9.30"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JL_001",
                "chargeType": "GOVERNMENT",
                "code": "JL",
                "country": "AZ",
                "salePrice": "USD14.00"
              }
            ],
            "fareCalculation": "DEN QR X/BOS QR X/DOH QR BAK 922.00MLR5R1SW QR X/DOH QR X/BOS QR DEN 967.00KLR5R1SX NUC 1889.00 END ROE 1.00 FARE USD 1889.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 19.00G4 1.00PZ 23.30AZ 9.30JB 25.70JL 1.20KD 280.00YQ 18.00YR 13.50XF DEN4.50 BOS4.50 BOS4.50",
            "latestTicketingTime": "2017-12-22T13:38-04:00",
            "ptc": "ADT",
            "refundable": true
          }
        ]
      },
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD2438.26",
        "id": "EyJHCKBGRYCSn0iedyeQf6001",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1335,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 147,
                "flight": {
                  "carrier": "TK",
                  "number": "8618"
                },
                "id": "GL1MKDrq5ngv+gUr",
                "cabin": "COACH",
                "bookingCode": "Y",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LH-inWWhRoDU8ser",
                    "aircraft": "739",
                    "arrivalTime": "2017-12-22T20:02-06:00",
                    "departureTime": "2017-12-22T16:35-07:00",
                    "origin": "DEN",
                    "destination": "ORD",
                    "destinationTerminal": "1",
                    "duration": 147,
                    "operatingDisclosure": "OPERATED BY UNITED",
                    "mileage": 885,
                    "secure": true
                  }
                ],
                "connectionDuration": 78
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 625,
                "flight": {
                  "carrier": "TK",
                  "number": "6"
                },
                "id": "G2SbTouBX5MK3HYl",
                "cabin": "COACH",
                "bookingCode": "Y",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LkRkBQ3mNNYnwYgh",
                    "aircraft": "77W",
                    "arrivalTime": "2017-12-23T16:45+03:00",
                    "departureTime": "2017-12-22T21:20-06:00",
                    "origin": "ORD",
                    "destination": "IST",
                    "originTerminal": "5",
                    "destinationTerminal": "I",
                    "duration": 625,
                    "mileage": 5474,
                    "meal": "Meal",
                    "secure": true
                  }
                ],
                "connectionDuration": 315
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 170,
                "flight": {
                  "carrier": "TK",
                  "number": "336"
                },
                "id": "G8x8-lv7ItRwIj9J",
                "cabin": "COACH",
                "bookingCode": "Y",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L2IWvORGgv0dYnfy",
                    "aircraft": "321",
                    "arrivalTime": "2017-12-24T01:50+04:00",
                    "departureTime": "2017-12-23T22:00+03:00",
                    "origin": "IST",
                    "destination": "GYD",
                    "originTerminal": "I",
                    "destinationTerminal": "1",
                    "duration": 170,
                    "mileage": 1109,
                    "meal": "Meal"
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1579,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 190,
                "flight": {
                  "carrier": "TK",
                  "number": "337"
                },
                "id": "Gdcu7nX-4IHqM6qC",
                "cabin": "COACH",
                "bookingCode": "O",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L1Q5QZwLzEQntEnE",
                    "aircraft": "32B",
                    "arrivalTime": "2018-01-04T09:50+03:00",
                    "departureTime": "2018-01-04T07:40+04:00",
                    "origin": "GYD",
                    "destination": "IST",
                    "originTerminal": "1",
                    "destinationTerminal": "I",
                    "duration": 190,
                    "mileage": 1109,
                    "meal": "Meal"
                  }
                ],
                "connectionDuration": 315
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 670,
                "flight": {
                  "carrier": "TK",
                  "number": "1"
                },
                "id": "GKuza4saTH9xBLfz",
                "cabin": "COACH",
                "bookingCode": "O",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "4",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L+2kcr-Q6ezWzzLj",
                    "aircraft": "77W",
                    "arrivalTime": "2018-01-04T18:15-05:00",
                    "departureTime": "2018-01-04T15:05+03:00",
                    "origin": "IST",
                    "destination": "JFK",
                    "originTerminal": "I",
                    "destinationTerminal": "1",
                    "duration": 670,
                    "mileage": 5001,
                    "meal": "Meal",
                    "secure": true
                  }
                ],
                "connectionDuration": 121
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 283,
                "flight": {
                  "carrier": "B6",
                  "number": "97"
                },
                "id": "G7+o3+5V3swQFZQm",
                "cabin": "COACH",
                "bookingCode": "W",
                "bookingCodeCount": 7,
                "marriedSegmentGroup": "5",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LENYiANIVGkI0l5z",
                    "aircraft": "321",
                    "arrivalTime": "2018-01-04T22:59-07:00",
                    "departureTime": "2018-01-04T20:16-05:00",
                    "origin": "JFK",
                    "destination": "DEN",
                    "originTerminal": "5",
                    "duration": 283,
                    "onTimePerformance": 60,
                    "mileage": 1620,
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
                "id": "AbwWgkWpauyBJRDKfVY6Tt8P6nmn+YIdIkv10B4qBzF6",
                "carrier": "TK",
                "origin": "DEN",
                "destination": "BAK",
                "basisCode": "YLRTYY"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "A7FIWD0FRsrMA1Ga//eO2icX9cfqSGG4UGm3Pqfi0Hmk",
                "carrier": "TK",
                "origin": "BAK",
                "destination": "NYC",
                "basisCode": "OLV3XPX"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "Ash9tDKE7axfRm4FOXV43SOh9ieS9Y/Nyw37VJKwt/R/",
                "carrier": "B6",
                "origin": "NYC",
                "destination": "DEN",
                "basisCode": "WH0ABEN"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AbwWgkWpauyBJRDKfVY6Tt8P6nmn+YIdIkv10B4qBzF6",
                "segmentId": "GL1MKDrq5ngv+gUr"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A7FIWD0FRsrMA1Ga//eO2icX9cfqSGG4UGm3Pqfi0Hmk",
                "segmentId": "Gdcu7nX-4IHqM6qC"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A7FIWD0FRsrMA1Ga//eO2icX9cfqSGG4UGm3Pqfi0Hmk",
                "segmentId": "GKuza4saTH9xBLfz"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AbwWgkWpauyBJRDKfVY6Tt8P6nmn+YIdIkv10B4qBzF6",
                "segmentId": "G2SbTouBX5MK3HYl"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AbwWgkWpauyBJRDKfVY6Tt8P6nmn+YIdIkv10B4qBzF6",
                "segmentId": "G8x8-lv7ItRwIj9J"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Ash9tDKE7axfRm4FOXV43SOh9ieS9Y/Nyw37VJKwt/R/",
                "segmentId": "G7+o3+5V3swQFZQm"
              }
            ],
            "baseFareTotal": "USD1930.00",
            "saleFareTotal": "USD1930.00",
            "saleTaxTotal": "USD508.26",
            "saleTotal": "USD2438.26",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JL_002",
                "chargeType": "GOVERNMENT",
                "code": "JL",
                "country": "AZ",
                "salePrice": "USD11.70"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "TR_001",
                "chargeType": "GOVERNMENT",
                "code": "TR",
                "country": "TR",
                "salePrice": "USD11.60"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YR_F",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YR",
                "salePrice": "USD360.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD13.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "KD_001",
                "chargeType": "GOVERNMENT",
                "code": "KD",
                "country": "AZ",
                "salePrice": "USD1.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AZ_001",
                "chargeType": "GOVERNMENT",
                "code": "AZ",
                "country": "AZ",
                "salePrice": "USD23.30"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JB_001",
                "chargeType": "GOVERNMENT",
                "code": "JB",
                "country": "AZ",
                "salePrice": "USD9.30"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "JL_001",
                "chargeType": "GOVERNMENT",
                "code": "JL",
                "country": "AZ",
                "salePrice": "USD14.00"
              }
            ],
            "fareCalculation": "DEN TK X/CHI Q375.00 TK X/IST TK BAK 1059.50YLRTYY TK X/IST TK X/NYC 319.50OLV3XPX B6 DEN 175.81WH0ABEN NUC 1929.81 END ROE 1.00 FARE USD 1930.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 11.60TR 23.30AZ 9.30JB 25.70JL 1.20KD 360.00YR 13.50XF DEN4.50 ORD4.50 JFK4.50",
            "latestTicketingTime": "2017-11-05T23:59-04:00",
            "ptc": "ADT",
            "refundable": true
          }
        ]
      }
    ]
  }
}, {
  "kind": "qpxExpress#tripsSearch",
  "trips": {
    "kind": "qpxexpress#tripOptions",
    "requestId": "J2FXZXJAaaGznRxUk0RanX",
    "data": {
      "kind": "qpxexpress#data",
      "airport": [
        {
          "kind": "qpxexpress#airportData",
          "code": "BKK",
          "city": "BKK",
          "name": "Bangkok Suvarnabhumi International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "DEN",
          "city": "DEN",
          "name": "Denver International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "HKG",
          "city": "HKG",
          "name": "Hong Kong International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "NRT",
          "city": "TYO",
          "name": "Tokyo Narita International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "SFO",
          "city": "SFO",
          "name": "San Francisco International"
        }
      ],
      "city": [
        {
          "kind": "qpxexpress#cityData",
          "code": "BKK",
          "name": "Bangkok"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "DEN",
          "name": "Denver"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "HKG",
          "name": "Hong Kong"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "SFO",
          "name": "San Francisco"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "TYO",
          "name": "Tokyo"
        }
      ],
      "aircraft": [
        {
          "kind": "qpxexpress#aircraftData",
          "code": "333",
          "name": "Airbus A330"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "753",
          "name": "Boeing 757"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "77W",
          "name": "Boeing 777"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "788",
          "name": "Boeing 787"
        },
        {
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
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "TS_001",
          "name": "Thailand Passenger Service Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XA",
          "name": "USDA APHIS Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YR_F",
          "name": "CX YR surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YC",
          "name": "US Customs Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "G8_001",
          "name": "Thailand International Departure Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YQ_I",
          "name": "UA YQ surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "G8_002",
          "name": "Thailand International Arrival Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "SW_001",
          "name": "Japan Passenger Service Facilities Charge International"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XF",
          "name": "US Passenger Facility Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "OI_001",
          "name": "Japan Passenger Security Service Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "E7_002",
          "name": "Thailand Advance Passenger Processing User Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "I5_001",
          "name": "Hong Kong Airport Passenger Security Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "AY_001",
          "name": "US September 11th Security Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "US_002",
          "name": "US International Departure Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "G3_001",
          "name": "Hong Kong Airport Construction Fee"
        }
      ],
      "carrier": [
        {
          "kind": "qpxexpress#carrierData",
          "code": "CX",
          "name": "Cathay Pacific"
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "NH",
          "name": "ANA"
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "UA",
          "name": "United Airlines"
        }
      ]
    },
    "tripOption": [
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD2691.16",
        "id": "3MxdFGyxhyLRTwDAZWlmOE001",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1235,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 745,
                "flight": {
                  "carrier": "UA",
                  "number": "143"
                },
                "id": "G50vBTsKhDZX0Rar",
                "cabin": "COACH",
                "bookingCode": "U",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LDp5cDEycDpPTdrr",
                    "aircraft": "788",
                    "arrivalTime": "2017-12-23T16:30+09:00",
                    "departureTime": "2017-12-22T12:05-07:00",
                    "origin": "DEN",
                    "destination": "NRT",
                    "destinationTerminal": "1",
                    "duration": 745,
                    "mileage": 5771,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 50
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 440,
                "flight": {
                  "carrier": "UA",
                  "number": "7922"
                },
                "id": "GVFWPg3ubFogZNNS",
                "cabin": "COACH",
                "bookingCode": "U",
                "bookingCodeCount": 3,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LV9+l8ER5yw11s1h",
                    "aircraft": "789",
                    "arrivalTime": "2017-12-23T22:40+07:00",
                    "departureTime": "2017-12-23T17:20+09:00",
                    "origin": "NRT",
                    "destination": "BKK",
                    "originTerminal": "1",
                    "duration": 440,
                    "operatingDisclosure": "OPERATED BY ANA",
                    "mileage": 2887,
                    "meal": "Meal"
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1319,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 165,
                "flight": {
                  "carrier": "CX",
                  "number": "616"
                },
                "id": "G560DBwyCP5Ul4Ju",
                "cabin": "COACH",
                "bookingCode": "S",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LwO-jER2tX9ihhvD",
                    "aircraft": "333",
                    "arrivalTime": "2018-01-04T10:15+08:00",
                    "departureTime": "2018-01-04T06:30+07:00",
                    "origin": "BKK",
                    "destination": "HKG",
                    "destinationTerminal": "1",
                    "duration": 165,
                    "mileage": 1048,
                    "meal": "Breakfast"
                  }
                ],
                "connectionDuration": 125
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 730,
                "flight": {
                  "carrier": "UA",
                  "number": "862"
                },
                "id": "GwyqSwwlFP+ISNsg",
                "cabin": "COACH",
                "bookingCode": "Q",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LE-z+sqvsQwP+9dl",
                    "aircraft": "77W",
                    "arrivalTime": "2018-01-04T08:30-08:00",
                    "departureTime": "2018-01-04T12:20+08:00",
                    "origin": "HKG",
                    "destination": "SFO",
                    "originTerminal": "1",
                    "destinationTerminal": "I",
                    "duration": 730,
                    "mileage": 6911,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 140
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 159,
                "flight": {
                  "carrier": "UA",
                  "number": "223"
                },
                "id": "GnH26lXkxutda212",
                "cabin": "COACH",
                "bookingCode": "Q",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LUyKDYIlYENInGd+",
                    "aircraft": "753",
                    "arrivalTime": "2018-01-04T14:29-07:00",
                    "departureTime": "2018-01-04T10:50-08:00",
                    "origin": "SFO",
                    "destination": "DEN",
                    "originTerminal": "3",
                    "duration": 159,
                    "onTimePerformance": 70,
                    "mileage": 965,
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
                "id": "AQ6poRikQnbJ/JC9zcG6S3NSxW5qVw6fydcZiMkFrogk",
                "carrier": "UA",
                "origin": "DEN",
                "destination": "BKK",
                "basisCode": "UHW0ZUMD"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "carrier": "UA",
                "origin": "BKK",
                "destination": "DEN",
                "basisCode": "QHX0ZNMD"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "segmentId": "GwyqSwwlFP+ISNsg"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "segmentId": "GnH26lXkxutda212"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AQ6poRikQnbJ/JC9zcG6S3NSxW5qVw6fydcZiMkFrogk",
                "segmentId": "GVFWPg3ubFogZNNS"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "segmentId": "G560DBwyCP5Ul4Ju"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AQ6poRikQnbJ/JC9zcG6S3NSxW5qVw6fydcZiMkFrogk",
                "segmentId": "G50vBTsKhDZX0Rar"
              }
            ],
            "baseFareTotal": "USD2145.00",
            "saleFareTotal": "USD2145.00",
            "saleTaxTotal": "USD546.16",
            "saleTotal": "USD2691.16",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "E7_002",
                "chargeType": "GOVERNMENT",
                "code": "E7",
                "country": "TH",
                "salePrice": "USD2.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G8_002",
                "chargeType": "GOVERNMENT",
                "code": "G8",
                "country": "TH",
                "salePrice": "USD0.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "SW_001",
                "chargeType": "GOVERNMENT",
                "code": "SW",
                "country": "JP",
                "salePrice": "USD9.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "OI_001",
                "chargeType": "GOVERNMENT",
                "code": "OI",
                "country": "JP",
                "salePrice": "USD4.60"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD400.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD9.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G3_001",
                "chargeType": "GOVERNMENT",
                "code": "G3",
                "country": "HK",
                "salePrice": "USD20.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "I5_001",
                "chargeType": "GOVERNMENT",
                "code": "I5",
                "country": "HK",
                "salePrice": "USD5.80"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "TS_001",
                "chargeType": "GOVERNMENT",
                "code": "TS",
                "country": "TH",
                "salePrice": "USD21.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G8_001",
                "chargeType": "GOVERNMENT",
                "code": "G8",
                "country": "TH",
                "salePrice": "USD0.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YR_F",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YR",
                "salePrice": "USD9.00"
              }
            ],
            "fareCalculation": "DEN UA X/TYO UA BKK 1335.00UHW0ZUMD CX X/HKG UA X/SFO UA DEN 810.00QHX0ZNMD NUC 2145.00 END ROE 1.00 FARE USD 2145.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 4.60OI 9.20SW 2.20E7 1.00G8 21.20TS 20.50G3 5.80I5 400.00YQ 9.00YR 9.00XF DEN4.50 SFO4.50",
            "latestTicketingTime": "2017-11-07T23:59-04:00",
            "ptc": "ADT",
            "refundable": true
          }
        ]
      },
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD2693.16",
        "id": "3MxdFGyxhyLRTwDAZWlmOE002",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1235,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 745,
                "flight": {
                  "carrier": "NH",
                  "number": "7033"
                },
                "id": "GJ9rBrfySXVsq2yo",
                "cabin": "COACH",
                "bookingCode": "U",
                "bookingCodeCount": 4,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L9q0vhLMP+FMAmX5",
                    "aircraft": "788",
                    "arrivalTime": "2017-12-23T16:30+09:00",
                    "departureTime": "2017-12-22T12:05-07:00",
                    "origin": "DEN",
                    "destination": "NRT",
                    "destinationTerminal": "1",
                    "duration": 745,
                    "operatingDisclosure": "OPERATED BY UNITED",
                    "mileage": 5771,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 50
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 440,
                "flight": {
                  "carrier": "NH",
                  "number": "807"
                },
                "id": "GvQpZbtLbFJG9upq",
                "cabin": "COACH",
                "bookingCode": "U",
                "bookingCodeCount": 3,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LMiFt3KJnvnFoYUD",
                    "aircraft": "789",
                    "arrivalTime": "2017-12-23T22:40+07:00",
                    "departureTime": "2017-12-23T17:20+09:00",
                    "origin": "NRT",
                    "destination": "BKK",
                    "originTerminal": "1",
                    "duration": 440,
                    "mileage": 2887,
                    "meal": "Meal"
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1319,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 165,
                "flight": {
                  "carrier": "CX",
                  "number": "616"
                },
                "id": "G560DBwyCP5Ul4Ju",
                "cabin": "COACH",
                "bookingCode": "S",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LwO-jER2tX9ihhvD",
                    "aircraft": "333",
                    "arrivalTime": "2018-01-04T10:15+08:00",
                    "departureTime": "2018-01-04T06:30+07:00",
                    "origin": "BKK",
                    "destination": "HKG",
                    "destinationTerminal": "1",
                    "duration": 165,
                    "mileage": 1048,
                    "meal": "Breakfast"
                  }
                ],
                "connectionDuration": 125
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 730,
                "flight": {
                  "carrier": "UA",
                  "number": "862"
                },
                "id": "GwyqSwwlFP+ISNsg",
                "cabin": "COACH",
                "bookingCode": "Q",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LE-z+sqvsQwP+9dl",
                    "aircraft": "77W",
                    "arrivalTime": "2018-01-04T08:30-08:00",
                    "departureTime": "2018-01-04T12:20+08:00",
                    "origin": "HKG",
                    "destination": "SFO",
                    "originTerminal": "1",
                    "destinationTerminal": "I",
                    "duration": 730,
                    "mileage": 6911,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 140
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 159,
                "flight": {
                  "carrier": "UA",
                  "number": "223"
                },
                "id": "GnH26lXkxutda212",
                "cabin": "COACH",
                "bookingCode": "Q",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LUyKDYIlYENInGd+",
                    "aircraft": "753",
                    "arrivalTime": "2018-01-04T14:29-07:00",
                    "departureTime": "2018-01-04T10:50-08:00",
                    "origin": "SFO",
                    "destination": "DEN",
                    "originTerminal": "3",
                    "duration": 159,
                    "onTimePerformance": 70,
                    "mileage": 965,
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
                "id": "APf87MPtBGP/mGOMWuTc+D5xYiWmwElMcd+PNEmSMdLI",
                "carrier": "NH",
                "origin": "DEN",
                "destination": "BKK",
                "basisCode": "UHW0ZUMD"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "carrier": "UA",
                "origin": "BKK",
                "destination": "DEN",
                "basisCode": "QHX0ZNMD"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "segmentId": "GwyqSwwlFP+ISNsg"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "segmentId": "GnH26lXkxutda212"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "APf87MPtBGP/mGOMWuTc+D5xYiWmwElMcd+PNEmSMdLI",
                "segmentId": "GJ9rBrfySXVsq2yo"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "segmentId": "G560DBwyCP5Ul4Ju"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "APf87MPtBGP/mGOMWuTc+D5xYiWmwElMcd+PNEmSMdLI",
                "segmentId": "GvQpZbtLbFJG9upq"
              }
            ],
            "baseFareTotal": "USD2145.00",
            "saleFareTotal": "USD2145.00",
            "saleTaxTotal": "USD548.16",
            "saleTotal": "USD2693.16",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "E7_002",
                "chargeType": "GOVERNMENT",
                "code": "E7",
                "country": "TH",
                "salePrice": "USD2.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G8_002",
                "chargeType": "GOVERNMENT",
                "code": "G8",
                "country": "TH",
                "salePrice": "USD0.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "SW_001",
                "chargeType": "GOVERNMENT",
                "code": "SW",
                "country": "JP",
                "salePrice": "USD9.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "OI_001",
                "chargeType": "GOVERNMENT",
                "code": "OI",
                "country": "JP",
                "salePrice": "USD4.60"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD202.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD9.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G3_001",
                "chargeType": "GOVERNMENT",
                "code": "G3",
                "country": "HK",
                "salePrice": "USD20.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "I5_001",
                "chargeType": "GOVERNMENT",
                "code": "I5",
                "country": "HK",
                "salePrice": "USD5.80"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD200.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "TS_001",
                "chargeType": "GOVERNMENT",
                "code": "TS",
                "country": "TH",
                "salePrice": "USD21.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G8_001",
                "chargeType": "GOVERNMENT",
                "code": "G8",
                "country": "TH",
                "salePrice": "USD0.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YR_F",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YR",
                "salePrice": "USD9.00"
              }
            ],
            "fareCalculation": "DEN NH X/TYO NH BKK 1335.00UHW0ZUMD CX X/HKG UA X/SFO UA DEN 810.00QHX0ZNMD NUC 2145.00 END ROE 1.00 FARE USD 2145.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 4.60OI 9.20SW 2.20E7 1.00G8 21.20TS 20.50G3 5.80I5 402.00YQ 9.00YR 9.00XF DEN4.50 SFO4.50",
            "latestTicketingTime": "2017-11-07T23:59-04:00",
            "ptc": "ADT",
            "refundable": true
          }
        ]
      }
    ]
  }
}, {
  "kind": "qpxExpress#tripsSearch",
  "trips": {
    "kind": "qpxexpress#tripOptions",
    "requestId": "MWuVRQ23QU1ATprpk0RanX",
    "data": {
      "kind": "qpxexpress#data",
      "airport": [
        {
          "kind": "qpxexpress#airportData",
          "code": "BKK",
          "city": "BKK",
          "name": "Bangkok Suvarnabhumi International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "DEN",
          "city": "DEN",
          "name": "Denver International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "HKG",
          "city": "HKG",
          "name": "Hong Kong International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "NRT",
          "city": "TYO",
          "name": "Tokyo Narita International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "SFO",
          "city": "SFO",
          "name": "San Francisco International"
        }
      ],
      "city": [
        {
          "kind": "qpxexpress#cityData",
          "code": "BKK",
          "name": "Bangkok"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "DEN",
          "name": "Denver"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "HKG",
          "name": "Hong Kong"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "SFO",
          "name": "San Francisco"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "TYO",
          "name": "Tokyo"
        }
      ],
      "aircraft": [
        {
          "kind": "qpxexpress#aircraftData",
          "code": "333",
          "name": "Airbus A330"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "753",
          "name": "Boeing 757"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "77W",
          "name": "Boeing 777"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "788",
          "name": "Boeing 787"
        }
      ],
      "tax": [
        {
          "kind": "qpxexpress#taxData",
          "id": "XY",
          "name": "US Immigration Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "TS_001",
          "name": "Thailand Passenger Service Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XA",
          "name": "USDA APHIS Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YR_F",
          "name": "CX YR surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YC",
          "name": "US Customs Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "G8_001",
          "name": "Thailand International Departure Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YQ_I",
          "name": "UA YQ surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "G8_002",
          "name": "Thailand International Arrival Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "SW_001",
          "name": "Japan Passenger Service Facilities Charge International"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XF",
          "name": "US Passenger Facility Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "OI_001",
          "name": "Japan Passenger Security Service Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "E7_002",
          "name": "Thailand Advance Passenger Processing User Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "I5_001",
          "name": "Hong Kong Airport Passenger Security Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "AY_001",
          "name": "US September 11th Security Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "US_002",
          "name": "US International Departure Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "G3_001",
          "name": "Hong Kong Airport Construction Fee"
        }
      ],
      "carrier": [
        {
          "kind": "qpxexpress#carrierData",
          "code": "CX",
          "name": "Cathay Pacific"
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "UA",
          "name": "United Airlines"
        }
      ]
    },
    "tripOption": [
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD2109.16",
        "id": "btHFjfVRVrOV4MmHXGlYfE001",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1310,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 745,
                "flight": {
                  "carrier": "UA",
                  "number": "143"
                },
                "id": "G18-Th1+YYQ9bKvy",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LVfz6r6PgChPW0E4",
                    "aircraft": "788",
                    "arrivalTime": "2017-12-25T16:30+09:00",
                    "departureTime": "2017-12-24T12:05-07:00",
                    "origin": "DEN",
                    "destination": "NRT",
                    "destinationTerminal": "1",
                    "duration": 745,
                    "mileage": 5771,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 125
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 440,
                "flight": {
                  "carrier": "UA",
                  "number": "7971"
                },
                "id": "G-+jRSGsJmSfhiTQ",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L95noAKzS0O6bmWw",
                    "aircraft": "788",
                    "arrivalTime": "2017-12-25T23:55+07:00",
                    "departureTime": "2017-12-25T18:35+09:00",
                    "origin": "NRT",
                    "destination": "BKK",
                    "originTerminal": "1",
                    "duration": 440,
                    "operatingDisclosure": "OPERATED BY ANA",
                    "mileage": 2887,
                    "meal": "Meal"
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1319,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 165,
                "flight": {
                  "carrier": "CX",
                  "number": "616"
                },
                "id": "G560DBwyCP5Ul4Ju",
                "cabin": "COACH",
                "bookingCode": "S",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LwO-jER2tX9ihhvD",
                    "aircraft": "333",
                    "arrivalTime": "2018-01-04T10:15+08:00",
                    "departureTime": "2018-01-04T06:30+07:00",
                    "origin": "BKK",
                    "destination": "HKG",
                    "destinationTerminal": "1",
                    "duration": 165,
                    "mileage": 1048,
                    "meal": "Breakfast"
                  }
                ],
                "connectionDuration": 125
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 730,
                "flight": {
                  "carrier": "UA",
                  "number": "862"
                },
                "id": "GwyqSwwlFP+ISNsg",
                "cabin": "COACH",
                "bookingCode": "Q",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LE-z+sqvsQwP+9dl",
                    "aircraft": "77W",
                    "arrivalTime": "2018-01-04T08:30-08:00",
                    "departureTime": "2018-01-04T12:20+08:00",
                    "origin": "HKG",
                    "destination": "SFO",
                    "originTerminal": "1",
                    "destinationTerminal": "I",
                    "duration": 730,
                    "mileage": 6911,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 140
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 159,
                "flight": {
                  "carrier": "UA",
                  "number": "223"
                },
                "id": "GnH26lXkxutda212",
                "cabin": "COACH",
                "bookingCode": "Q",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LUyKDYIlYENInGd+",
                    "aircraft": "753",
                    "arrivalTime": "2018-01-04T14:29-07:00",
                    "departureTime": "2018-01-04T10:50-08:00",
                    "origin": "SFO",
                    "destination": "DEN",
                    "originTerminal": "3",
                    "duration": 159,
                    "onTimePerformance": 70,
                    "mileage": 965,
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
                "id": "A+BQAP5ELzFMGS6tFpAgtiKWd1kFqmxAdE2MvzbsIgbI",
                "carrier": "UA",
                "origin": "DEN",
                "destination": "BKK",
                "basisCode": "VHW47NMD"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "carrier": "UA",
                "origin": "BKK",
                "destination": "DEN",
                "basisCode": "QHX0ZNMD"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "segmentId": "GwyqSwwlFP+ISNsg"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "segmentId": "GnH26lXkxutda212"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "segmentId": "G560DBwyCP5Ul4Ju"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A+BQAP5ELzFMGS6tFpAgtiKWd1kFqmxAdE2MvzbsIgbI",
                "segmentId": "G-+jRSGsJmSfhiTQ"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A+BQAP5ELzFMGS6tFpAgtiKWd1kFqmxAdE2MvzbsIgbI",
                "segmentId": "G18-Th1+YYQ9bKvy"
              }
            ],
            "baseFareTotal": "USD1563.00",
            "saleFareTotal": "USD1563.00",
            "saleTaxTotal": "USD546.16",
            "saleTotal": "USD2109.16",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "E7_002",
                "chargeType": "GOVERNMENT",
                "code": "E7",
                "country": "TH",
                "salePrice": "USD2.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G8_002",
                "chargeType": "GOVERNMENT",
                "code": "G8",
                "country": "TH",
                "salePrice": "USD0.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "SW_001",
                "chargeType": "GOVERNMENT",
                "code": "SW",
                "country": "JP",
                "salePrice": "USD9.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "OI_001",
                "chargeType": "GOVERNMENT",
                "code": "OI",
                "country": "JP",
                "salePrice": "USD4.60"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD400.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD9.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G3_001",
                "chargeType": "GOVERNMENT",
                "code": "G3",
                "country": "HK",
                "salePrice": "USD20.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "I5_001",
                "chargeType": "GOVERNMENT",
                "code": "I5",
                "country": "HK",
                "salePrice": "USD5.80"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "TS_001",
                "chargeType": "GOVERNMENT",
                "code": "TS",
                "country": "TH",
                "salePrice": "USD21.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G8_001",
                "chargeType": "GOVERNMENT",
                "code": "G8",
                "country": "TH",
                "salePrice": "USD0.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YR_F",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YR",
                "salePrice": "USD9.00"
              }
            ],
            "fareCalculation": "DEN UA X/TYO UA BKK 753.00VHW47NMD CX X/HKG UA X/SFO UA DEN 810.00QHX0ZNMD NUC 1563.00 END ROE 1.00 FARE USD 1563.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 4.60OI 9.20SW 2.20E7 1.00G8 21.20TS 20.50G3 5.80I5 400.00YQ 9.00YR 9.00XF DEN4.50 SFO4.50",
            "latestTicketingTime": "2017-11-07T23:59-04:00",
            "ptc": "ADT"
          }
        ]
      }
    ]
  }
}, {
  "kind": "qpxExpress#tripsSearch",
  "trips": {
    "kind": "qpxexpress#tripOptions",
    "requestId": "3ZoOF229e3cmPHG6A0RanY",
    "data": {
      "kind": "qpxexpress#data",
      "airport": [
        {
          "kind": "qpxexpress#airportData",
          "code": "BKK",
          "city": "BKK",
          "name": "Bangkok Suvarnabhumi International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "DEN",
          "city": "DEN",
          "name": "Denver International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "HKG",
          "city": "HKG",
          "name": "Hong Kong International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "NRT",
          "city": "TYO",
          "name": "Tokyo Narita International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "SFO",
          "city": "SFO",
          "name": "San Francisco International"
        }
      ],
      "city": [
        {
          "kind": "qpxexpress#cityData",
          "code": "BKK",
          "name": "Bangkok"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "DEN",
          "name": "Denver"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "HKG",
          "name": "Hong Kong"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "SFO",
          "name": "San Francisco"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "TYO",
          "name": "Tokyo"
        }
      ],
      "aircraft": [
        {
          "kind": "qpxexpress#aircraftData",
          "code": "333",
          "name": "Airbus A330"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "753",
          "name": "Boeing 757"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "77W",
          "name": "Boeing 777"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "788",
          "name": "Boeing 787"
        }
      ],
      "tax": [
        {
          "kind": "qpxexpress#taxData",
          "id": "XY",
          "name": "US Immigration Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "TS_001",
          "name": "Thailand Passenger Service Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XA",
          "name": "USDA APHIS Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YR_F",
          "name": "CX YR surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YC",
          "name": "US Customs Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "G8_001",
          "name": "Thailand International Departure Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YQ_I",
          "name": "UA YQ surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "G8_002",
          "name": "Thailand International Arrival Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "SW_001",
          "name": "Japan Passenger Service Facilities Charge International"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XF",
          "name": "US Passenger Facility Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "OI_001",
          "name": "Japan Passenger Security Service Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "E7_002",
          "name": "Thailand Advance Passenger Processing User Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "I5_001",
          "name": "Hong Kong Airport Passenger Security Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "AY_001",
          "name": "US September 11th Security Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "US_002",
          "name": "US International Departure Tax"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "G3_001",
          "name": "Hong Kong Airport Construction Fee"
        }
      ],
      "carrier": [
        {
          "kind": "qpxexpress#carrierData",
          "code": "CX",
          "name": "Cathay Pacific"
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "UA",
          "name": "United Airlines"
        }
      ]
    },
    "tripOption": [
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD2109.16",
        "id": "a5neDT9tBY7QmdWohJhX7E001",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1310,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 745,
                "flight": {
                  "carrier": "UA",
                  "number": "143"
                },
                "id": "G18-Th1+YYQ9bKvy",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LVfz6r6PgChPW0E4",
                    "aircraft": "788",
                    "arrivalTime": "2017-12-25T16:30+09:00",
                    "departureTime": "2017-12-24T12:05-07:00",
                    "origin": "DEN",
                    "destination": "NRT",
                    "destinationTerminal": "1",
                    "duration": 745,
                    "mileage": 5771,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 125
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 440,
                "flight": {
                  "carrier": "UA",
                  "number": "7971"
                },
                "id": "G-+jRSGsJmSfhiTQ",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L95noAKzS0O6bmWw",
                    "aircraft": "788",
                    "arrivalTime": "2017-12-25T23:55+07:00",
                    "departureTime": "2017-12-25T18:35+09:00",
                    "origin": "NRT",
                    "destination": "BKK",
                    "originTerminal": "1",
                    "duration": 440,
                    "operatingDisclosure": "OPERATED BY ANA",
                    "mileage": 2887,
                    "meal": "Meal"
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1319,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 165,
                "flight": {
                  "carrier": "CX",
                  "number": "616"
                },
                "id": "GJdybWnLfGvnRmrW",
                "cabin": "COACH",
                "bookingCode": "S",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LPLAgErUg2rIcH+X",
                    "aircraft": "333",
                    "arrivalTime": "2018-01-02T10:15+08:00",
                    "departureTime": "2018-01-02T06:30+07:00",
                    "origin": "BKK",
                    "destination": "HKG",
                    "destinationTerminal": "1",
                    "duration": 165,
                    "mileage": 1048,
                    "meal": "Breakfast"
                  }
                ],
                "connectionDuration": 125
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 730,
                "flight": {
                  "carrier": "UA",
                  "number": "862"
                },
                "id": "GnCDf0zmFj9bai14",
                "cabin": "COACH",
                "bookingCode": "Q",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LNlbBBLP8VeAELqx",
                    "aircraft": "77W",
                    "arrivalTime": "2018-01-02T08:30-08:00",
                    "departureTime": "2018-01-02T12:20+08:00",
                    "origin": "HKG",
                    "destination": "SFO",
                    "originTerminal": "1",
                    "destinationTerminal": "I",
                    "duration": 730,
                    "mileage": 6911,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 140
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 159,
                "flight": {
                  "carrier": "UA",
                  "number": "223"
                },
                "id": "GT2N9b9SN+UabiQ-",
                "cabin": "COACH",
                "bookingCode": "Q",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L90pMCsJ+0Ye8aRO",
                    "aircraft": "753",
                    "arrivalTime": "2018-01-02T14:29-07:00",
                    "departureTime": "2018-01-02T10:50-08:00",
                    "origin": "SFO",
                    "destination": "DEN",
                    "originTerminal": "3",
                    "duration": 159,
                    "onTimePerformance": 70,
                    "mileage": 965,
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
                "id": "A+BQAP5ELzFMGS6tFpAgtiKWd1kFqmxAdE2MvzbsIgbI",
                "carrier": "UA",
                "origin": "DEN",
                "destination": "BKK",
                "basisCode": "VHW47NMD"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "carrier": "UA",
                "origin": "BKK",
                "destination": "DEN",
                "basisCode": "QHX0ZNMD"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "segmentId": "GnCDf0zmFj9bai14"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "segmentId": "GT2N9b9SN+UabiQ-"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A+BQAP5ELzFMGS6tFpAgtiKWd1kFqmxAdE2MvzbsIgbI",
                "segmentId": "G-+jRSGsJmSfhiTQ"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Aysss+phsMdkq2FwSShfe99GY/1pIU//BTc/8Sfh7g1o",
                "segmentId": "GJdybWnLfGvnRmrW"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A+BQAP5ELzFMGS6tFpAgtiKWd1kFqmxAdE2MvzbsIgbI",
                "segmentId": "G18-Th1+YYQ9bKvy"
              }
            ],
            "baseFareTotal": "USD1563.00",
            "saleFareTotal": "USD1563.00",
            "saleTaxTotal": "USD546.16",
            "saleTotal": "USD2109.16",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "E7_002",
                "chargeType": "GOVERNMENT",
                "code": "E7",
                "country": "TH",
                "salePrice": "USD2.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G8_002",
                "chargeType": "GOVERNMENT",
                "code": "G8",
                "country": "TH",
                "salePrice": "USD0.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "SW_001",
                "chargeType": "GOVERNMENT",
                "code": "SW",
                "country": "JP",
                "salePrice": "USD9.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "OI_001",
                "chargeType": "GOVERNMENT",
                "code": "OI",
                "country": "JP",
                "salePrice": "USD4.60"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD400.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD9.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G3_001",
                "chargeType": "GOVERNMENT",
                "code": "G3",
                "country": "HK",
                "salePrice": "USD20.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "I5_001",
                "chargeType": "GOVERNMENT",
                "code": "I5",
                "country": "HK",
                "salePrice": "USD5.80"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "TS_001",
                "chargeType": "GOVERNMENT",
                "code": "TS",
                "country": "TH",
                "salePrice": "USD21.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G8_001",
                "chargeType": "GOVERNMENT",
                "code": "G8",
                "country": "TH",
                "salePrice": "USD0.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YR_F",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YR",
                "salePrice": "USD9.00"
              }
            ],
            "fareCalculation": "DEN UA X/TYO UA BKK 753.00VHW47NMD CX X/HKG UA X/SFO UA DEN 810.00QHX0ZNMD NUC 1563.00 END ROE 1.00 FARE USD 1563.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 4.60OI 9.20SW 2.20E7 1.00G8 21.20TS 20.50G3 5.80I5 400.00YQ 9.00YR 9.00XF DEN4.50 SFO4.50",
            "latestTicketingTime": "2017-11-07T23:59-04:00",
            "ptc": "ADT"
          }
        ]
      }
    ]
  }
}, {
  "kind": "qpxExpress#tripsSearch",
  "trips": {
    "kind": "qpxexpress#tripOptions",
    "requestId": "LyCZTtLxFPy4Hhq0s0RanZ",
    "data": {
      "kind": "qpxexpress#data",
      "airport": [
        {
          "kind": "qpxexpress#airportData",
          "code": "BKK",
          "city": "BKK",
          "name": "Bangkok Suvarnabhumi International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "CAN",
          "city": "CAN",
          "name": "Guangzhou Baiyun International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "DEN",
          "city": "DEN",
          "name": "Denver International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "SFO",
          "city": "SFO",
          "name": "San Francisco International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "WUH",
          "city": "WUH",
          "name": "Wuhan Tianhe International"
        },
        {
          "kind": "qpxexpress#airportData",
          "code": "YVR",
          "city": "YVR",
          "name": "Vancouver International"
        }
      ],
      "city": [
        {
          "kind": "qpxexpress#cityData",
          "code": "BKK",
          "name": "Bangkok"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "CAN",
          "name": "Guangzhou"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "DEN",
          "name": "Denver"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "SFO",
          "name": "San Francisco"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "WUH",
          "name": "Wuhan"
        },
        {
          "kind": "qpxexpress#cityData",
          "code": "YVR",
          "name": "Vancouver"
        }
      ],
      "aircraft": [
        {
          "kind": "qpxexpress#aircraftData",
          "code": "319",
          "name": "Airbus A319"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "738",
          "name": "Boeing 737"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "73G",
          "name": "Boeing 737"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "77W",
          "name": "Boeing 777"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "787",
          "name": "Boeing 787"
        },
        {
          "kind": "qpxexpress#aircraftData",
          "code": "CRA",
          "name": "Canadair RJ 705"
        }
      ],
      "tax": [
        {
          "kind": "qpxexpress#taxData",
          "id": "XY",
          "name": "US Immigration Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "TS_001",
          "name": "Thailand Passenger Service Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YR_F",
          "name": "CZ YR surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XA",
          "name": "USDA APHIS Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YC",
          "name": "US Customs Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "G8_001",
          "name": "Thailand International Departure Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "YQ_I",
          "name": "CZ YQ surcharge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "G8_002",
          "name": "Thailand International Arrival Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "XF",
          "name": "US Passenger Facility Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "E7_002",
          "name": "Thailand Advance Passenger Processing User Charge"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "CN_001",
          "name": "China Airport Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "AY_001",
          "name": "US September 11th Security Fee"
        },
        {
          "kind": "qpxexpress#taxData",
          "id": "US_002",
          "name": "US International Departure Tax"
        }
      ],
      "carrier": [
        {
          "kind": "qpxexpress#carrierData",
          "code": "AC",
          "name": "Air Canada"
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "CZ",
          "name": "China Southern Airlines"
        },
        {
          "kind": "qpxexpress#carrierData",
          "code": "VX",
          "name": "Virgin America Inc."
        }
      ]
    },
    "tripOption": [
      {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD1775.26",
        "id": "LHkYXlLUP4GQljDokVE7JM001",
        "slice": [
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 1405,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 185,
                "flight": {
                  "carrier": "AC",
                  "number": "8109"
                },
                "id": "G-jw3HciMMHZZ3LQ",
                "cabin": "COACH",
                "bookingCode": "V",
                "bookingCodeCount": 8,
                "marriedSegmentGroup": "0",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LY6gQimen6P2Irao",
                    "aircraft": "CRA",
                    "arrivalTime": "2017-12-27T10:30-08:00",
                    "departureTime": "2017-12-27T08:25-07:00",
                    "origin": "DEN",
                    "destination": "YVR",
                    "destinationTerminal": "M",
                    "duration": 185,
                    "operatingDisclosure": "OPERATED BY AIR CANADA EXPRESS - JAZZ",
                    "mileage": 1111,
                    "secure": true
                  }
                ],
                "connectionDuration": 70
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 810,
                "flight": {
                  "carrier": "CZ",
                  "number": "330"
                },
                "id": "GaL8NZSpGTl5+Jt0",
                "cabin": "COACH",
                "bookingCode": "L",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "1",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L7wOavUKYQlwCY8W",
                    "aircraft": "787",
                    "arrivalTime": "2017-12-28T17:10+08:00",
                    "departureTime": "2017-12-27T11:40-08:00",
                    "origin": "YVR",
                    "destination": "CAN",
                    "originTerminal": "M",
                    "duration": 810,
                    "mileage": 6337,
                    "meal": "Lunch",
                    "secure": true
                  }
                ],
                "connectionDuration": 170
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 170,
                "flight": {
                  "carrier": "CZ",
                  "number": "361"
                },
                "id": "G4tmdAMrBIrlTUzW",
                "cabin": "COACH",
                "bookingCode": "L",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "2",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LcOTF04WM1KGGA2N",
                    "aircraft": "73G",
                    "arrivalTime": "2017-12-28T21:50+07:00",
                    "departureTime": "2017-12-28T20:00+08:00",
                    "origin": "CAN",
                    "destination": "BKK",
                    "destinationTerminal": "1",
                    "duration": 170,
                    "mileage": 1059,
                    "meal": "Alcoholic Beverages - Complimentary"
                  }
                ]
              }
            ]
          },
          {
            "kind": "qpxexpress#sliceInfo",
            "duration": 2081,
            "segment": [
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 180,
                "flight": {
                  "carrier": "CZ",
                  "number": "3030"
                },
                "id": "GpHwT-GcOSIxqGLb",
                "cabin": "COACH",
                "bookingCode": "U",
                "bookingCodeCount": 1,
                "marriedSegmentGroup": "3",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "L+H5JmId8hTMnEyo",
                    "aircraft": "738",
                    "arrivalTime": "2018-01-02T06:10+08:00",
                    "departureTime": "2018-01-02T02:10+07:00",
                    "origin": "BKK",
                    "destination": "WUH",
                    "originTerminal": "1",
                    "destinationTerminal": "3",
                    "duration": 180,
                    "mileage": 1458,
                    "meal": "Alcoholic Beverages - Complimentary"
                  }
                ],
                "connectionDuration": 540
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 705,
                "flight": {
                  "carrier": "CZ",
                  "number": "659"
                },
                "id": "G8RKvgJcAQDTragi",
                "cabin": "COACH",
                "bookingCode": "U",
                "bookingCodeCount": 9,
                "marriedSegmentGroup": "4",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LyHXryYqFEdOKNmS",
                    "aircraft": "77W",
                    "arrivalTime": "2018-01-02T10:55-08:00",
                    "departureTime": "2018-01-02T15:10+08:00",
                    "origin": "WUH",
                    "destination": "SFO",
                    "originTerminal": "3",
                    "destinationTerminal": "I",
                    "duration": 705,
                    "mileage": 6462,
                    "secure": true
                  }
                ],
                "connectionDuration": 510
              },
              {
                "kind": "qpxexpress#segmentInfo",
                "duration": 146,
                "flight": {
                  "carrier": "VX",
                  "number": "1870"
                },
                "id": "G3KlljveISmSRzCy",
                "cabin": "COACH",
                "bookingCode": "I",
                "bookingCodeCount": 7,
                "marriedSegmentGroup": "5",
                "leg": [
                  {
                    "kind": "qpxexpress#legInfo",
                    "id": "LRm12ErPSjk91fF6",
                    "aircraft": "319",
                    "arrivalTime": "2018-01-02T22:51-07:00",
                    "departureTime": "2018-01-02T19:25-08:00",
                    "origin": "SFO",
                    "destination": "DEN",
                    "originTerminal": "2",
                    "duration": 146,
                    "onTimePerformance": 61,
                    "mileage": 965,
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
                "id": "A1/qM68sFiXa3JgkPrXA1vy8XMmHezkpFbRvn7MzFM4zGmU",
                "carrier": "AC",
                "origin": "DEN",
                "destination": "YVR",
                "basisCode": "V21Q6FL"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "Adiy51QLrvmAEZu6pAAvsGZV/t3EQOxrrO+CK2nSmlKe8F/",
                "carrier": "CZ",
                "origin": "YVR",
                "destination": "BKK",
                "basisCode": "L2KRCCA"
              },
              {
                "kind": "qpxexpress#fareInfo",
                "id": "AH3Fx0Q+6KwtHoZYSTKx6//yh/FMlQE5GDPUBTI50QeVcd3AeR4eVleiO+CNgNjj05UjX39RJT699m3xXNrm4IG6qcQhrvU",
                "carrier": "CZ",
                "origin": "BKK",
                "destination": "DEN",
                "basisCode": "U2ZRCUS"
              }
            ],
            "segmentPricing": [
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AH3Fx0Q+6KwtHoZYSTKx6//yh/FMlQE5GDPUBTI50QeVcd3AeR4eVleiO+CNgNjj05UjX39RJT699m3xXNrm4IG6qcQhrvU",
                "segmentId": "G3KlljveISmSRzCy"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A1/qM68sFiXa3JgkPrXA1vy8XMmHezkpFbRvn7MzFM4zGmU",
                "segmentId": "G-jw3HciMMHZZ3LQ"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AH3Fx0Q+6KwtHoZYSTKx6//yh/FMlQE5GDPUBTI50QeVcd3AeR4eVleiO+CNgNjj05UjX39RJT699m3xXNrm4IG6qcQhrvU",
                "segmentId": "G8RKvgJcAQDTragi"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Adiy51QLrvmAEZu6pAAvsGZV/t3EQOxrrO+CK2nSmlKe8F/",
                "segmentId": "GaL8NZSpGTl5+Jt0"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "Adiy51QLrvmAEZu6pAAvsGZV/t3EQOxrrO+CK2nSmlKe8F/",
                "segmentId": "G4tmdAMrBIrlTUzW"
              },
              {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "AH3Fx0Q+6KwtHoZYSTKx6//yh/FMlQE5GDPUBTI50QeVcd3AeR4eVleiO+CNgNjj05UjX39RJT699m3xXNrm4IG6qcQhrvU",
                "segmentId": "GpHwT-GcOSIxqGLb"
              }
            ],
            "baseFareTotal": "USD1485.00",
            "saleFareTotal": "USD1485.00",
            "saleTaxTotal": "USD290.26",
            "saleTotal": "USD1775.26",
            "passengers": {
              "kind": "qpxexpress#passengerCounts",
              "adultCount": 1
            },
            "tax": [
              {
                "kind": "qpxexpress#taxInfo",
                "id": "CN_001",
                "chargeType": "GOVERNMENT",
                "code": "CN",
                "country": "CN",
                "salePrice": "USD27.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "E7_002",
                "chargeType": "GOVERNMENT",
                "code": "E7",
                "country": "TH",
                "salePrice": "USD2.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G8_002",
                "chargeType": "GOVERNMENT",
                "code": "G8",
                "country": "TH",
                "salePrice": "USD0.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YQ_I",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YQ",
                "salePrice": "USD16.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YR_F",
                "chargeType": "CARRIER_SURCHARGE",
                "code": "YR",
                "salePrice": "USD150.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "AY_001",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD11.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD9.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XA",
                "chargeType": "GOVERNMENT",
                "code": "XA",
                "country": "US",
                "salePrice": "USD3.96"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "XY",
                "chargeType": "GOVERNMENT",
                "code": "XY",
                "country": "US",
                "salePrice": "USD7.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "YC",
                "chargeType": "GOVERNMENT",
                "code": "YC",
                "country": "US",
                "salePrice": "USD5.50"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "US_002",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD18.00"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "TS_001",
                "chargeType": "GOVERNMENT",
                "code": "TS",
                "country": "TH",
                "salePrice": "USD21.20"
              },
              {
                "kind": "qpxexpress#taxInfo",
                "id": "G8_001",
                "chargeType": "GOVERNMENT",
                "code": "G8",
                "country": "TH",
                "salePrice": "USD0.50"
              }
            ],
            "fareCalculation": "DEN AC X/YVR 301.00V21Q6FL CZ X/CAN CZ BKK 459.42L2KRCCA CZ X/WUH CZ X/SFO Q100.00 VX DEN 625.00U2ZRCUS NUC 1485.42 END ROE 1.00 FARE USD 1485.00 XT 5.50YC 7.00XY 3.96XA 36.00US 11.20AY 27.20CN 2.20E7 1.00G8 21.20TS 16.00YQ 150.00YR 9.00XF DEN4.50 SFO4.50",
            "latestTicketingTime": "2017-11-05T19:13-04:00",
            "ptc": "ADT",
            "refundable": true
          }
        ]
      }
    ]
  }
}
];
