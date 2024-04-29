// Data is from NYC Council
// URL: https://data.cityofnewyork.us/City-Government/Evictions/6z8x-wfk4/about_data

var evictionData = [
        {
          "Eviction Address": "225 COOPER ST - APT 2-A",
          "Eviction Apartment Number": "",
          "Executed Date": "3/16/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.690085,
          "Longitude": -73.905096,
          "BIN": 3079800
        },
        {
          "Eviction Address": "255 STOCKHOLM STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "6/1/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.701611,
          "Longitude": -73.920725,
          "BIN": 3073889
        },
        {
          "Eviction Address": "353 GROVE STREET",
          "Eviction Apartment Number": "1-L",
          "Executed Date": "4/8/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.699921,
          "Longitude": -73.914185,
          "BIN": 3075972
        },
        {
          "Eviction Address": "1298 HALSEY STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "1/15/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.693764,
          "Longitude": -73.907316,
          "BIN": 3078916
        },
        {
          "Eviction Address": "103 SAINT NICHOLAS AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "11/30/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.705773,
          "Longitude": -73.918657,
          "BIN": 3073703
        },
        {
          "Eviction Address": "1508 DEKALB AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "10/25/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.701949,
          "Longitude": -73.921539,
          "BIN": 3073873
        },
        {
          "Eviction Address": "389 WOODBINE STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "1/9/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.698006,
          "Longitude": -73.911378,
          "BIN": 3076688
        },
        {
          "Eviction Address": "338 MOFFAT STREET",
          "Eviction Apartment Number": "H",
          "Executed Date": "5/18/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.691123,
          "Longitude": -73.902891,
          "BIN": 3080180
        },
        {
          "Eviction Address": "50 SAINT NICHOLAS AV ENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "7/12/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.706974,
          "Longitude": -73.920722,
          "BIN": 3072795
        },
        {
          "Eviction Address": "321 TROUTMAN STREET APT. 2-C",
          "Eviction Apartment Number": "2-C",
          "Executed Date": "11/27/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.704449,
          "Longitude": -73.924966,
          "BIN": 3072371
        },
        {
          "Eviction Address": "240 JEFFERSON STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "2/27/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.702878,
          "Longitude": -73.927651,
          "BIN": 3072307
        },
        {
          "Eviction Address": "316 JEFFERSON STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "7/16/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.704611,
          "Longitude": -73.925954,
          "BIN": 3072359
        },
        {
          "Eviction Address": "255-265 LINDEN ST",
          "Eviction Apartment Number": "C1L",
          "Executed Date": "2/8/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.697525,
          "Longitude": -73.915363,
          "BIN": 3076171
        },
        {
          "Eviction Address": "364 MENAHAN STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "11/2/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.701682,
          "Longitude": -73.913584,
          "BIN": 3075996
        },
        {
          "Eviction Address": "452 SUYDAM STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "5/29/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.706822,
          "Longitude": -73.919038,
          "BIN": 3073316
        },
        {
          "Eviction Address": "1356 WILLOUGHBY AVE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "2/11/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.706422,
          "Longitude": -73.920629,
          "BIN": 3072999
        },
        {
          "Eviction Address": "57 THAMES STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "9/18/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.705084,
          "Longitude": -73.930765,
          "BIN": 3070691
        },
        {
          "Eviction Address": "171 STANHOPE STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "11/7/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.69932,
          "Longitude": -73.921806,
          "BIN": 3074165
        },
        {
          "Eviction Address": "1371 DECATUR STREET",
          "Eviction Apartment Number": "2ND FL FRONT-ROOM 3",
          "Executed Date": "6/12/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.692354,
          "Longitude": -73.90404,
          "BIN": 3079617
        },
        {
          "Eviction Address": "294 LINDEN STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "1/19/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.698115,
          "Longitude": -73.914757,
          "BIN": 3076317
        },
        {
          "Eviction Address": "178 IRVING AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "7/12/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.70189,
          "Longitude": -73.91944,
          "BIN": 3074202
        },
        {
          "Eviction Address": "856 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "2L",
          "Executed Date": "2/26/24",
          "Year": 2024,
          "Eviction Postcode": 11207,
          "Latitude": 40.691619,
          "Longitude": -73.905739,
          "BIN": 3079549
        },
        {
          "Eviction Address": "1368 PUTNAM AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "4/16/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.694474,
          "Longitude": -73.912475,
          "BIN": 3077290
        },
        {
          "Eviction Address": "1498 PUTNAM AVENUE",
          "Eviction Apartment Number": "TOP FLOOR",
          "Executed Date": "9/8/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.697123,
          "Longitude": -73.909871,
          "BIN": 3077387
        },
        {
          "Eviction Address": "393 WOODBINE STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "9/1/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.698052,
          "Longitude": -73.911334,
          "BIN": 3076686
        },
        {
          "Eviction Address": "1412 DEKALB AVENUE",
          "Eviction Apartment Number": "2L",
          "Executed Date": "12/1/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.700111,
          "Longitude": -73.923345,
          "BIN": 3073817
        },
        {
          "Eviction Address": "1251 HANCOCK STREET",
          "Eviction Apartment Number": "2ND FLOOR",
          "Executed Date": "11/16/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.69276,
          "Longitude": -73.910671,
          "BIN": 3078020
        },
        {
          "Eviction Address": "349 SUYDAM STREET",
          "Eviction Apartment Number": "SPACE 4L",
          "Executed Date": "11/9/21",
          "Year": 2021,
          "Eviction Postcode": 11237,
          "Latitude": 40.704255,
          "Longitude": -73.921645,
          "BIN": 3072981
        },
        {
          "Eviction Address": "1354 GREENE AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "1/8/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.699336,
          "Longitude": -73.918253,
          "BIN": 3075419
        },
        {
          "Eviction Address": "165 STANHOPE STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "1/20/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.699213,
          "Longitude": -73.92191,
          "BIN": 3074168
        },
        {
          "Eviction Address": "280 COOPER STREET",
          "Eviction Apartment Number": "2F",
          "Executed Date": "8/4/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.691601,
          "Longitude": -73.903576,
          "BIN": 3080050
        },
        {
          "Eviction Address": "338 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "6/26/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.701033,
          "Longitude": -73.92228,
          "BIN": 3073834
        },
        {
          "Eviction Address": "233 IRVING AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "10/1/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.700686,
          "Longitude": -73.917292,
          "BIN": 3075141
        },
        {
          "Eviction Address": "217 IRVING AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "1/23/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.701049,
          "Longitude": -73.917927,
          "BIN": 3074846
        },
        {
          "Eviction Address": "217 IRVING AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "1/23/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.701049,
          "Longitude": -73.917927,
          "BIN": 3074846
        },
        {
          "Eviction Address": "1461 GATES AVENUE",
          "Eviction Apartment Number": "2-B",
          "Executed Date": "5/31/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.697607,
          "Longitude": -73.914112,
          "BIN": 3000000
        },
        {
          "Eviction Address": "245 TROUTMAN STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "1/8/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.702666,
          "Longitude": -73.926714,
          "BIN": 3072326
        },
        {
          "Eviction Address": "509 WILSON AVENUE A/K/A 1240 HANCOCK STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "3/12/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.692299,
          "Longitude": -73.910935,
          "BIN": 3326238
        },
        {
          "Eviction Address": "1456 JEFFERSON AVE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "8/6/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.696063,
          "Longitude": -73.908571,
          "BIN": 3078095
        },
        {
          "Eviction Address": "1351 DECATUR STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "2/13/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.692063,
          "Longitude": -73.904329,
          "BIN": 3400956
        },
        {
          "Eviction Address": "344 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "2ND FL RIGHT",
          "Executed Date": "11/17/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.700953,
          "Longitude": -73.922136,
          "BIN": 3073836
        },
        {
          "Eviction Address": "357 STOCKHOLM STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "3/2/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.704356,
          "Longitude": -73.918009,
          "BIN": 3073958
        },
        {
          "Eviction Address": "235 IRVING AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "11/20/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.700653,
          "Longitude": -73.917235,
          "BIN": 3075140
        },
        {
          "Eviction Address": "1348 HANCOCK STREET",
          "Eviction Apartment Number": "1-R",
          "Executed Date": "5/30/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.694592,
          "Longitude": -73.908847,
          "BIN": 3078389
        },
        {
          "Eviction Address": "358 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "11/19/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.700761,
          "Longitude": -73.9218,
          "BIN": 3073840
        },
        {
          "Eviction Address": "420 BLEECKER STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "8/4/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.703156,
          "Longitude": -73.913268,
          "BIN": 3075827
        },
        {
          "Eviction Address": "476 JEFFERSON STREET",
          "Eviction Apartment Number": 420,
          "Executed Date": "9/28/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.708696,
          "Longitude": -73.92187,
          "BIN": 3072427
        },
        {
          "Eviction Address": "320 WEIRFIELD STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "1/29/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.694377,
          "Longitude": -73.907885,
          "BIN": 3078670
        },
        {
          "Eviction Address": "304 COOPER STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "7/12/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.692095,
          "Longitude": -73.903092,
          "BIN": 3080059
        },
        {
          "Eviction Address": "296 SCHAEFFER ST",
          "Eviction Apartment Number": 4,
          "Executed Date": "12/12/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.692604,
          "Longitude": -73.904937,
          "BIN": 3079601
        },
        {
          "Eviction Address": "286 STANHOPE STREET",
          "Eviction Apartment Number": "3F",
          "Executed Date": "1/7/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.702268,
          "Longitude": -73.918881,
          "BIN": 3074527
        },
        {
          "Eviction Address": "383 MENAHAN STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "1/9/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.701907,
          "Longitude": -73.913381,
          "BIN": 3075808
        },
        {
          "Eviction Address": "1513 DEKALB AVENUE",
          "Eviction Apartment Number": "1R",
          "Executed Date": "8/1/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.70196,
          "Longitude": -73.921557,
          "BIN": 3073621
        },
        {
          "Eviction Address": "754 HART STREET",
          "Eviction Apartment Number": "1L BACK",
          "Executed Date": "9/2/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.700523,
          "Longitude": -73.924109,
          "BIN": 3073558
        },
        {
          "Eviction Address": "234 SUYDAM STREET",
          "Eviction Apartment Number": "1 LEFT",
          "Executed Date": "10/4/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.701254,
          "Longitude": -73.924562,
          "BIN": 3073169
        },
        {
          "Eviction Address": "356 WEIRFIELD STREET   2ND FLOOR",
          "Eviction Apartment Number": "",
          "Executed Date": "7/26/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.695449,
          "Longitude": -73.906826,
          "BIN": 3078707
        },
        {
          "Eviction Address": "1142 WILLOUGHBY AVENUE APT. 2",
          "Eviction Apartment Number": 2,
          "Executed Date": "5/24/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.701935,
          "Longitude": -73.92507,
          "BIN": 3072944
        },
        {
          "Eviction Address": "420 STOCKHOLM STREET",
          "Eviction Apartment Number": "4H",
          "Executed Date": "2/9/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.705758,
          "Longitude": -73.916554,
          "BIN": 3074288
        },
        {
          "Eviction Address": "245 HIMROD STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "3/6/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.700479,
          "Longitude": -73.919493,
          "BIN": 3074510
        },
        {
          "Eviction Address": "147 THAMES ST",
          "Eviction Apartment Number": "4R",
          "Executed Date": "7/25/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.705718,
          "Longitude": -73.926877,
          "BIN": 3070709
        },
        {
          "Eviction Address": "718 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "2L",
          "Executed Date": "5/17/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.694156,
          "Longitude": -73.910189,
          "BIN": 3077995
        },
        {
          "Eviction Address": "295 WYCKOFF AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "4/12/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.700493,
          "Longitude": -73.912795,
          "BIN": 3326398
        },
        {
          "Eviction Address": "1716 DEKALB AVENUE",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "1/14/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.706181,
          "Longitude": -73.917311,
          "BIN": 3073980
        },
        {
          "Eviction Address": "258 JEFFERSON STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "3/30/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.703303,
          "Longitude": -73.92724,
          "BIN": 3072313
        },
        {
          "Eviction Address": "302 COVERT STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "10/4/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.69277,
          "Longitude": -73.90595,
          "BIN": 3079364
        },
        {
          "Eviction Address": "211 HIMROD STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "10/3/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.699264,
          "Longitude": -73.920688,
          "BIN": 3074466
        },
        {
          "Eviction Address": "250 STANHOPE STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "10/29/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.701171,
          "Longitude": -73.919957,
          "BIN": 3074492
        },
        {
          "Eviction Address": "101 MORGAN AVENUE",
          "Eviction Apartment Number": "COMM",
          "Executed Date": "5/31/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.707338,
          "Longitude": -73.932184,
          "BIN": 3425617
        },
        {
          "Eviction Address": "511 WILSON AVENUE A/K/A 1240 HANCOCK STREET",
          "Eviction Apartment Number": "GROUND FLOOR",
          "Executed Date": "12/11/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.692266,
          "Longitude": -73.910873,
          "BIN": 3326237
        },
        {
          "Eviction Address": "250 WYCKOFF AVE.",
          "Eviction Apartment Number": "",
          "Executed Date": "1/11/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.700562,
          "Longitude": -73.912954,
          "BIN": 3076181
        },
        {
          "Eviction Address": "255 LINDEN STREET",
          "Eviction Apartment Number": "A3R",
          "Executed Date": "10/30/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.697525,
          "Longitude": -73.915363,
          "BIN": 3076171
        },
        {
          "Eviction Address": "565 WILSON AVENUE",
          "Eviction Apartment Number": "STORE",
          "Executed Date": "10/12/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.691188,
          "Longitude": -73.908978,
          "BIN": 3078858
        },
        {
          "Eviction Address": "1449 GATES AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "11/9/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.697429,
          "Longitude": -73.914289,
          "BIN": 3076341
        },
        {
          "Eviction Address": "297 SCHAEFER STREET",
          "Eviction Apartment Number": "2F",
          "Executed Date": "4/27/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.692585,
          "Longitude": -73.904981,
          "BIN": 3079380
        },
        {
          "Eviction Address": "389 CORNELIA STREET",
          "Eviction Apartment Number": "APT 2ND FLOOR",
          "Executed Date": "9/26/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.69693,
          "Longitude": -73.908916,
          "BIN": 3077407
        },
        {
          "Eviction Address": "255 JEFFERSON STREET",
          "Eviction Apartment Number": "3-R",
          "Executed Date": "8/8/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.703062,
          "Longitude": -73.9275,
          "BIN": 3072105
        },
        {
          "Eviction Address": "91 WYCKOFF AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "8/17/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.704981,
          "Longitude": -73.920288,
          "BIN": 3073274
        },
        {
          "Eviction Address": "274 JEFFERSON STREET",
          "Eviction Apartment Number": "3F",
          "Executed Date": "8/15/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.704014,
          "Longitude": -73.926539,
          "BIN": 3072349
        },
        {
          "Eviction Address": "342 ELDERT STREET",
          "Eviction Apartment Number": 106,
          "Executed Date": "5/8/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.693574,
          "Longitude": -73.906324,
          "BIN": 3398928
        },
        {
          "Eviction Address": "345 ELDERT STREET",
          "Eviction Apartment Number": 122,
          "Executed Date": "11/17/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.693654,
          "Longitude": -73.906277,
          "BIN": 3078929
        },
        {
          "Eviction Address": "1377 MADISON STREET",
          "Eviction Apartment Number": "STORE A",
          "Executed Date": "12/1/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.697253,
          "Longitude": -73.910939,
          "BIN": 3076907
        },
        {
          "Eviction Address": "67 WILSON AVENUE",
          "Eviction Apartment Number": "BAY NOS. 1 AND 2 OF",
          "Executed Date": "4/5/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.702264,
          "Longitude": -73.928446,
          "BIN": 3072080
        },
        {
          "Eviction Address": "57 WILSON AVENUE  3RD FLOOR",
          "Eviction Apartment Number": "3L",
          "Executed Date": "11/6/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.702431,
          "Longitude": -73.928738,
          "BIN": 3072083
        },
        {
          "Eviction Address": "1544 MYRTLE AVENUE",
          "Eviction Apartment Number": "3RD FLOOR APARTMENT",
          "Executed Date": "1/16/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.699469,
          "Longitude": -73.911762,
          "BIN": 3076498
        },
        {
          "Eviction Address": "863 HART STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "1/6/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.702531,
          "Longitude": -73.922166,
          "BIN": 3073236
        },
        {
          "Eviction Address": "369 WEIRFIELD STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "7/23/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.695337,
          "Longitude": -73.906967,
          "BIN": 3078440
        },
        {
          "Eviction Address": "432 SUYDAM STREET",
          "Eviction Apartment Number": "B03",
          "Executed Date": "2/25/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.706463,
          "Longitude": -73.919402,
          "BIN": 3073312
        },
        {
          "Eviction Address": "97 MORGAN AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "2/14/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.707217,
          "Longitude": -73.932148,
          "BIN": 3071323
        },
        {
          "Eviction Address": "783 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": 216,
          "Executed Date": "3/5/24",
          "Year": 2024,
          "Eviction Postcode": 11207,
          "Latitude": 40.69292,
          "Longitude": -73.907984,
          "BIN": 3078908
        },
        {
          "Eviction Address": "259 WYCKOFF AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "11/23/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.70129,
          "Longitude": -73.914241,
          "BIN": 3075775
        },
        {
          "Eviction Address": "152 GRATTAN STREET",
          "Eviction Apartment Number": "4R",
          "Executed Date": "9/28/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.706372,
          "Longitude": -73.927233,
          "BIN": 3070707
        },
        {
          "Eviction Address": "279 TROUTMAN STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "4/25/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.703697,
          "Longitude": -73.925707,
          "BIN": 3072387
        },
        {
          "Eviction Address": "286 STANHOPE STREET",
          "Eviction Apartment Number": "2A",
          "Executed Date": "9/18/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.702268,
          "Longitude": -73.918881,
          "BIN": 3074527
        },
        {
          "Eviction Address": "1087 FLUSHING AVENUE  STR#111",
          "Eviction Apartment Number": "STR",
          "Executed Date": "8/14/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.704819,
          "Longitude": -73.928504,
          "BIN": 3070752
        },
        {
          "Eviction Address": "252 STOCKHOLM STREET",
          "Eviction Apartment Number": "4R",
          "Executed Date": "8/15/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.701531,
          "Longitude": -73.920775,
          "BIN": 3074193
        },
        {
          "Eviction Address": "374 HARMAN STREET",
          "Eviction Apartment Number": "2B",
          "Executed Date": "5/20/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.701545,
          "Longitude": -73.917248,
          "BIN": 3075151
        },
        {
          "Eviction Address": "1311 DECATUR STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "11/13/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.691051,
          "Longitude": -73.905318,
          "BIN": 3388416
        },
        {
          "Eviction Address": "255-265 LINDEN ST",
          "Eviction Apartment Number": "C1L",
          "Executed Date": "2/8/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.697525,
          "Longitude": -73.915363,
          "BIN": 3076171
        },
        {
          "Eviction Address": "1327 HANCOCK STREET - APT 2-A",
          "Eviction Apartment Number": "2-A",
          "Executed Date": "11/27/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.694309,
          "Longitude": -73.90915,
          "BIN": 3078084
        },
        {
          "Eviction Address": "515 WILSON AVENUE",
          "Eviction Apartment Number": "UNIT 3L",
          "Executed Date": "9/11/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.6922,
          "Longitude": -73.910758,
          "BIN": 3078335
        },
        {
          "Eviction Address": "344 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "3RD FL LEFT",
          "Executed Date": "12/18/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.700953,
          "Longitude": -73.922136,
          "BIN": 3073836
        },
        {
          "Eviction Address": "288 SUYDAM STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "6/8/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.702677,
          "Longitude": -73.923169,
          "BIN": 3073212
        },
        {
          "Eviction Address": "1299 GREENE AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "4/23/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.698209,
          "Longitude": -73.919391,
          "BIN": 3075078
        },
        {
          "Eviction Address": "293 WYCKOFF AVENUE",
          "Eviction Apartment Number": "2L",
          "Executed Date": "9/18/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.700526,
          "Longitude": -73.912853,
          "BIN": 3076196
        },
        {
          "Eviction Address": "1412 DEKALB AVENUE",
          "Eviction Apartment Number": "2L",
          "Executed Date": "12/1/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.700111,
          "Longitude": -73.923345,
          "BIN": 3073817
        },
        {
          "Eviction Address": "181 ST. NICHOLAS AVE",
          "Eviction Apartment Number": "",
          "Executed Date": "5/4/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.704056,
          "Longitude": -73.915748,
          "BIN": 3074913
        },
        {
          "Eviction Address": "134 GRATTAN STREET",
          "Eviction Apartment Number": "4L",
          "Executed Date": "12/11/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.706287,
          "Longitude": -73.927749,
          "BIN": 3070703
        },
        {
          "Eviction Address": "1373 PUTNAM AVENUE",
          "Eviction Apartment Number": "BASEMENT, FIRST DOOR",
          "Executed Date": "8/23/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.694542,
          "Longitude": -73.912435,
          "BIN": 3393146
        },
        {
          "Eviction Address": "847 KNICKERBOCKER  A VENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "2/27/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.691762,
          "Longitude": -73.905952,
          "BIN": 3079355
        },
        {
          "Eviction Address": "143 WILSON AVENUE",
          "Eviction Apartment Number": "2RR",
          "Executed Date": "2/7/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.70059,
          "Longitude": -73.925504,
          "BIN": 3072924
        },
        {
          "Eviction Address": "294 HARMAN STREET",
          "Eviction Apartment Number": "1LR",
          "Executed Date": "5/31/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.699946,
          "Longitude": -73.918819,
          "BIN": 3075097
        },
        {
          "Eviction Address": "161 STOCKHOLM STREET AKA 193 WILSON AVE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "9/20/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.699532,
          "Longitude": -73.922768,
          "BIN": 3073812
        },
        {
          "Eviction Address": "307 STOCKHOLM STREET",
          "Eviction Apartment Number": "2-R",
          "Executed Date": "10/17/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.703023,
          "Longitude": -73.919338,
          "BIN": 3073925
        },
        {
          "Eviction Address": "714 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "1R",
          "Executed Date": "4/3/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.694319,
          "Longitude": -73.910474,
          "BIN": 3077649
        },
        {
          "Eviction Address": "183 STANHOPE STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "1/23/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.699534,
          "Longitude": -73.921596,
          "BIN": 3074159
        },
        {
          "Eviction Address": "256 COVERT STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "5/12/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.691541,
          "Longitude": -73.907153,
          "BIN": 3079318
        },
        {
          "Eviction Address": "1311 DECATUR STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "11/13/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.691051,
          "Longitude": -73.905318,
          "BIN": 3388416
        },
        {
          "Eviction Address": "321 TROUTMAN STREET",
          "Eviction Apartment Number": "2-C",
          "Executed Date": "9/28/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.704449,
          "Longitude": -73.924966,
          "BIN": 3072371
        },
        {
          "Eviction Address": "192 IRVING AVENUE",
          "Eviction Apartment Number": "1A",
          "Executed Date": "2/24/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.701505,
          "Longitude": -73.918766,
          "BIN": 3074499
        },
        {
          "Eviction Address": "1475 MYRTLE AVENUE",
          "Eviction Apartment Number": "3A",
          "Executed Date": "8/25/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.698973,
          "Longitude": -73.91684,
          "BIN": 3075697
        },
        {
          "Eviction Address": "147 STARR STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "9/7/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.703505,
          "Longitude": -73.924722,
          "BIN": 3072579
        },
        {
          "Eviction Address": "212 TROUTMAN STREET",
          "Eviction Apartment Number": "1ST FLOOR",
          "Executed Date": "5/10/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.702051,
          "Longitude": -73.927292,
          "BIN": 3412954
        },
        {
          "Eviction Address": "433 MENAHAN STREET",
          "Eviction Apartment Number": "GROUND FLOOR DAY CAR",
          "Executed Date": "4/5/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.703235,
          "Longitude": -73.912027,
          "BIN": 3075840
        },
        {
          "Eviction Address": "237 STARR STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "4/4/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.705551,
          "Longitude": -73.922715,
          "BIN": 3072606
        },
        {
          "Eviction Address": "97 ST.NICHOLAS AVENU E",
          "Eviction Apartment Number": "1R",
          "Executed Date": "6/12/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.705974,
          "Longitude": -73.918999,
          "BIN": 3073311
        },
        {
          "Eviction Address": "239 STANHOPE STREET",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "10/19/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.700927,
          "Longitude": -73.920228,
          "BIN": 3074212
        },
        {
          "Eviction Address": "221 HIMROD STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "3/25/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.699522,
          "Longitude": -73.920435,
          "BIN": 3074461
        },
        {
          "Eviction Address": "241 JEFFERSON STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "3/28/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.702812,
          "Longitude": -73.927745,
          "BIN": 3072112
        },
        {
          "Eviction Address": "325 KNICKERBOCKER AVE APT 2L",
          "Eviction Apartment Number": "2L",
          "Executed Date": "12/21/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.70131,
          "Longitude": -73.922727,
          "BIN": 3073584
        },
        {
          "Eviction Address": "1345 GREENE AVENUE",
          "Eviction Apartment Number": "3RD FLOOR",
          "Executed Date": "5/21/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.699657,
          "Longitude": -73.917961,
          "BIN": 3075125
        },
        {
          "Eviction Address": "783 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": 403,
          "Executed Date": "5/31/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.69292,
          "Longitude": -73.907984,
          "BIN": 3078908
        },
        {
          "Eviction Address": "195 MENAHAN STREET",
          "Eviction Apartment Number": "3-L",
          "Executed Date": "10/3/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.697203,
          "Longitude": -73.918022,
          "BIN": 3075674
        },
        {
          "Eviction Address": "302 GROVE STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "11/16/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.698552,
          "Longitude": -73.915499,
          "BIN": 3076136
        },
        {
          "Eviction Address": "214 STARR STREET",
          "Eviction Apartment Number": "ROOM 2-2",
          "Executed Date": "11/9/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.705145,
          "Longitude": -73.923086,
          "BIN": 3421700
        },
        {
          "Eviction Address": "154 WYCKOFF AVENUE",
          "Eviction Apartment Number": "APT 2L",
          "Executed Date": "1/12/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.702698,
          "Longitude": -73.916659,
          "BIN": 3074863
        },
        {
          "Eviction Address": "476 JEFFERSON STREET",
          "Eviction Apartment Number": "6A IN CELLAR",
          "Executed Date": "4/12/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.708696,
          "Longitude": -73.92187,
          "BIN": 3072427
        },
        {
          "Eviction Address": "1513 GATES AVENUE",
          "Eviction Apartment Number": "1-F",
          "Executed Date": "6/28/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.698767,
          "Longitude": -73.912971,
          "BIN": 3076359
        },
        {
          "Eviction Address": "260 HIMROD STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "7/23/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.700468,
          "Longitude": -73.919478,
          "BIN": 3074808
        },
        {
          "Eviction Address": "185 ST. NICHOLAS AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "2/26/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.703987,
          "Longitude": -73.915633,
          "BIN": 3074911
        },
        {
          "Eviction Address": "252 KNICKERBOCKER AV",
          "Eviction Apartment Number": "2L",
          "Executed Date": "2/3/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.702607,
          "Longitude": -73.925044,
          "BIN": 3072739
        },
        {
          "Eviction Address": "1223 HALSEY STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "12/18/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.693298,
          "Longitude": -73.907803,
          "BIN": 3078696
        },
        {
          "Eviction Address": "424 MELROSE STREET",
          "Eviction Apartment Number": "1F",
          "Executed Date": "4/17/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.705144,
          "Longitude": -73.926599,
          "BIN": 3398143
        },
        {
          "Eviction Address": "244 TROUTMAN STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "7/20/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.702622,
          "Longitude": -73.926732,
          "BIN": 3072516
        },
        {
          "Eviction Address": "49 WILSON AVENUE",
          "Eviction Apartment Number": "3A",
          "Executed Date": "3/5/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.702563,
          "Longitude": -73.928972,
          "BIN": 3072087
        },
        {
          "Eviction Address": "1400 JEFFERSON AVE",
          "Eviction Apartment Number": 1,
          "Executed Date": "8/1/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.694872,
          "Longitude": -73.909741,
          "BIN": 3078046
        },
        {
          "Eviction Address": "133 WYCKOFF AVE",
          "Eviction Apartment Number": "UNIT 2F",
          "Executed Date": "3/28/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.704113,
          "Longitude": -73.918897,
          "BIN": 3073934
        },
        {
          "Eviction Address": "235 WYCKOFF AVE",
          "Eviction Apartment Number": "UNIT 1",
          "Executed Date": "5/16/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.701689,
          "Longitude": -73.914954,
          "BIN": 3075516
        },
        {
          "Eviction Address": "509 WILSON AVE AKA 1240 HANCOCK STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "1/8/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.692299,
          "Longitude": -73.910935,
          "BIN": 3326238
        },
        {
          "Eviction Address": "300 TROUTMAN STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "5/3/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.704026,
          "Longitude": -73.925353,
          "BIN": 3072551
        },
        {
          "Eviction Address": "234 SUYDAM STREET",
          "Eviction Apartment Number": "1 LEFT",
          "Executed Date": "10/4/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.701254,
          "Longitude": -73.924562,
          "BIN": 3073169
        },
        {
          "Eviction Address": "1563 DEKALB AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "2/4/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.703156,
          "Longitude": -73.92038,
          "BIN": 3073658
        },
        {
          "Eviction Address": "441 WILSON AVENUE",
          "Eviction Apartment Number": "D3",
          "Executed Date": "1/13/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.693805,
          "Longitude": -73.91359,
          "BIN": 3077060
        },
        {
          "Eviction Address": "192 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "STORE PREMISES",
          "Executed Date": "8/31/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.703723,
          "Longitude": -73.927009,
          "BIN": 3072102
        },
        {
          "Eviction Address": "1399 GREENE AVENUE",
          "Eviction Apartment Number": "1A",
          "Executed Date": "9/15/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.701031,
          "Longitude": -73.91661,
          "BIN": 3075180
        },
        {
          "Eviction Address": "294 WEIRFIELD STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "1/24/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.693845,
          "Longitude": -73.908408,
          "BIN": 3078657
        },
        {
          "Eviction Address": "147 THAMES STREET",
          "Eviction Apartment Number": "4L",
          "Executed Date": "10/17/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.705718,
          "Longitude": -73.926877,
          "BIN": 3070709
        },
        {
          "Eviction Address": "136 GRATTAN STREET",
          "Eviction Apartment Number": "4-R",
          "Executed Date": "1/18/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.706298,
          "Longitude": -73.927691,
          "BIN": 3070704
        },
        {
          "Eviction Address": "256 HIMROD STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "2/1/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.700399,
          "Longitude": -73.919543,
          "BIN": 3074806
        },
        {
          "Eviction Address": "345 GROVE STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "6/12/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.699778,
          "Longitude": -73.914322,
          "BIN": 3075976
        },
        {
          "Eviction Address": "147 THAMES ST",
          "Eviction Apartment Number": "4R",
          "Executed Date": "7/25/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.705718,
          "Longitude": -73.926877,
          "BIN": 3070709
        },
        {
          "Eviction Address": "279 WOODBINE STREET A/K/A 618 KNICKERBOC",
          "Eviction Apartment Number": "GARAGE #2, ENTRANCE",
          "Executed Date": "2/21/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.695754,
          "Longitude": -73.913588,
          "BIN": 3076640
        },
        {
          "Eviction Address": "203 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "6/21/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.703476,
          "Longitude": -73.926536,
          "BIN": 3072342
        },
        {
          "Eviction Address": "441 WILSON AVENUE",
          "Eviction Apartment Number": "A3",
          "Executed Date": "8/27/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.693805,
          "Longitude": -73.91359,
          "BIN": 3077060
        },
        {
          "Eviction Address": "123 IRVING AVENUE",
          "Eviction Apartment Number": "1R",
          "Executed Date": "4/19/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.703352,
          "Longitude": -73.921978,
          "BIN": 3073253
        },
        {
          "Eviction Address": "49 WYCKOFF AVENUE",
          "Eviction Apartment Number": "UNIT 2-B",
          "Executed Date": "11/29/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.705921,
          "Longitude": -73.921794,
          "BIN": 3072788
        },
        {
          "Eviction Address": "276 JEFFERSON STREET",
          "Eviction Apartment Number": "3B",
          "Executed Date": "1/5/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.704044,
          "Longitude": -73.92651,
          "BIN": 3072350
        },
        {
          "Eviction Address": "663 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "11/19/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.695058,
          "Longitude": -73.911742,
          "BIN": 3077324
        },
        {
          "Eviction Address": "467 TROUTMAN STREET",
          "Eviction Apartment Number": "UNIT 26",
          "Executed Date": "1/18/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.708286,
          "Longitude": -73.921135,
          "BIN": 3072428
        },
        {
          "Eviction Address": "733 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "4/30/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.693904,
          "Longitude": -73.90971,
          "BIN": 3078027
        },
        {
          "Eviction Address": "822 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "2/23/24",
          "Year": 2024,
          "Eviction Postcode": 11207,
          "Latitude": 40.692213,
          "Longitude": -73.90678,
          "BIN": 3079084
        },
        {
          "Eviction Address": "816 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "6/11/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.692326,
          "Longitude": -73.906979,
          "BIN": 3079082
        },
        {
          "Eviction Address": "201 HIMROD STREET",
          "Eviction Apartment Number": "#10",
          "Executed Date": "7/5/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.699003,
          "Longitude": -73.920944,
          "BIN": 3400814
        },
        {
          "Eviction Address": "184 IRVING AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "7/1/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.701675,
          "Longitude": -73.919066,
          "BIN": 3074495
        },
        {
          "Eviction Address": "867 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "1/6/20",
          "Year": 2020,
          "Eviction Postcode": 11207,
          "Latitude": 40.691427,
          "Longitude": -73.905364,
          "BIN": 3079574
        },
        {
          "Eviction Address": "359 LINDEN STREET APT #2A",
          "Eviction Apartment Number": "2A",
          "Executed Date": "10/31/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.699802,
          "Longitude": -73.913128,
          "BIN": 3426920
        },
        {
          "Eviction Address": "279 MENAHAN STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "4/6/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.699365,
          "Longitude": -73.915902,
          "BIN": 3075719
        },
        {
          "Eviction Address": "233 SUYDAM STREET",
          "Eviction Apartment Number": "1F",
          "Executed Date": "9/6/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.701298,
          "Longitude": -73.924544,
          "BIN": 3072955
        },
        {
          "Eviction Address": "321 WOODBINE STREET",
          "Eviction Apartment Number": "1F(1ST FLR FRONT)",
          "Executed Date": "5/5/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.696782,
          "Longitude": -73.91258,
          "BIN": 3076861
        },
        {
          "Eviction Address": "441 WILSON AVENUE",
          "Eviction Apartment Number": "D1",
          "Executed Date": "3/6/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.693805,
          "Longitude": -73.91359,
          "BIN": 3077060
        },
        {
          "Eviction Address": "358 GROVE STREET",
          "Eviction Apartment Number": "11A",
          "Executed Date": "2/13/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.699981,
          "Longitude": -73.914098,
          "BIN": 3392234
        },
        {
          "Eviction Address": "328 BLEECKER STREET",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "4/23/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.700795,
          "Longitude": -73.91564,
          "BIN": 3325709
        },
        {
          "Eviction Address": "1461 GATES AVENUE",
          "Eviction Apartment Number": "1-B",
          "Executed Date": "8/7/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.697607,
          "Longitude": -73.914112,
          "BIN": 3000000
        },
        {
          "Eviction Address": "306 JEFFERSON STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "7/20/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.704469,
          "Longitude": -73.926092,
          "BIN": 3072354
        },
        {
          "Eviction Address": "145 ST. NICHOLAS AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "2/2/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.704894,
          "Longitude": -73.917165,
          "BIN": 3074277
        },
        {
          "Eviction Address": "1268 HANCOCK STREET APT 3",
          "Eviction Apartment Number": "",
          "Executed Date": "3/22/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.692987,
          "Longitude": -73.910422,
          "BIN": 3078349
        },
        {
          "Eviction Address": "298 WEIRFIELD ST",
          "Eviction Apartment Number": 2,
          "Executed Date": "8/29/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.693927,
          "Longitude": -73.908329,
          "BIN": 3078659
        },
        {
          "Eviction Address": "1087 FLUSHING AVENUE",
          "Eviction Apartment Number": 412,
          "Executed Date": "7/28/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.704819,
          "Longitude": -73.928504,
          "BIN": 3070752
        },
        {
          "Eviction Address": "245 TROUTMAN STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "12/4/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.702666,
          "Longitude": -73.926714,
          "BIN": 3072326
        },
        {
          "Eviction Address": "181 ST.NICHOLAS AVE",
          "Eviction Apartment Number": "",
          "Executed Date": "5/4/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.704056,
          "Longitude": -73.915748,
          "BIN": 3074913
        },
        {
          "Eviction Address": "1591 GATES AVENUE",
          "Eviction Apartment Number": "2L",
          "Executed Date": "7/26/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.70035,
          "Longitude": -73.911403,
          "BIN": 3076394
        },
        {
          "Eviction Address": "473 WILSON AVENUE",
          "Eviction Apartment Number": "1ST FLOOR STORE",
          "Executed Date": "5/17/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.692728,
          "Longitude": -73.911688,
          "BIN": 3077973
        },
        {
          "Eviction Address": "302 JEFFERSON STREET",
          "Eviction Apartment Number": "2AR",
          "Executed Date": "11/22/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.704414,
          "Longitude": -73.926149,
          "BIN": 3072352
        },
        {
          "Eviction Address": "533 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "11/4/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.697427,
          "Longitude": -73.915901,
          "BIN": 3076119
        },
        {
          "Eviction Address": "655 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "1-L",
          "Executed Date": "11/30/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.695275,
          "Longitude": -73.912124,
          "BIN": 3076910
        },
        {
          "Eviction Address": "822 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "1R",
          "Executed Date": "11/13/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.692213,
          "Longitude": -73.90678,
          "BIN": 3079084
        },
        {
          "Eviction Address": "1428 PUTNAM AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "6/28/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.695785,
          "Longitude": -73.91119,
          "BIN": 3077338
        },
        {
          "Eviction Address": "264 COVERT STREET",
          "Eviction Apartment Number": "2ND FLOOR",
          "Executed Date": "5/15/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.691681,
          "Longitude": -73.907016,
          "BIN": 3079322
        },
        {
          "Eviction Address": "236 LINDEN STREET",
          "Eviction Apartment Number": "2C",
          "Executed Date": "4/19/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.696508,
          "Longitude": -73.916342,
          "BIN": 3338493
        },
        {
          "Eviction Address": "279 TROUTMAN STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "4/25/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.703697,
          "Longitude": -73.925707,
          "BIN": 3072387
        },
        {
          "Eviction Address": "342 ELDERT ST. APT 111",
          "Eviction Apartment Number": 111,
          "Executed Date": "8/9/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.693574,
          "Longitude": -73.906324,
          "BIN": 3398928
        },
        {
          "Eviction Address": "310 SCHAEFER STREET",
          "Eviction Apartment Number": "1F",
          "Executed Date": "3/24/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.692856,
          "Longitude": -73.904688,
          "BIN": 3079606
        },
        {
          "Eviction Address": "301 GROVE STREET",
          "Eviction Apartment Number": "4F",
          "Executed Date": "4/28/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.698448,
          "Longitude": -73.915629,
          "BIN": 3075926
        },
        {
          "Eviction Address": "1404 PUTNAM AVENUE",
          "Eviction Apartment Number": "1R",
          "Executed Date": "3/26/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.695437,
          "Longitude": -73.911533,
          "BIN": 3326199
        },
        {
          "Eviction Address": "35 ST NICHOLAS AVE",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "3/9/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.707331,
          "Longitude": -73.921266,
          "BIN": 3072630
        },
        {
          "Eviction Address": "190 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "10/26/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.703748,
          "Longitude": -73.927052,
          "BIN": 3072101
        },
        {
          "Eviction Address": "321 WOODBINE STREET",
          "Eviction Apartment Number": "1F(1ST FLR FRONT)",
          "Executed Date": "5/5/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.696782,
          "Longitude": -73.91258,
          "BIN": 3076861
        },
        {
          "Eviction Address": "381 GROVE STREET",
          "Eviction Apartment Number": "3B",
          "Executed Date": "4/24/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.700414,
          "Longitude": -73.913697,
          "BIN": 3075965
        },
        {
          "Eviction Address": "365 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "11/6/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.700563,
          "Longitude": -73.921418,
          "BIN": 3074175
        },
        {
          "Eviction Address": "282 MOFFAT STREET",
          "Eviction Apartment Number": "A PORTION OF THE PAR",
          "Executed Date": "8/31/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.690026,
          "Longitude": -73.903949,
          "BIN": 3000000
        },
        {
          "Eviction Address": "245 TROUTMAN STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "5/1/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.702666,
          "Longitude": -73.926714,
          "BIN": 3072326
        },
        {
          "Eviction Address": "220 SCHAEFER STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "4/4/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.690723,
          "Longitude": -73.906783,
          "BIN": 3079534
        },
        {
          "Eviction Address": "256 COVERT STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "5/12/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.691541,
          "Longitude": -73.907153,
          "BIN": 3079318
        },
        {
          "Eviction Address": "345 GROVE STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "6/12/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.699778,
          "Longitude": -73.914322,
          "BIN": 3075976
        },
        {
          "Eviction Address": "1536 GATES AVE.",
          "Eviction Apartment Number": "1R (1ST FL REAR APT)",
          "Executed Date": "1/22/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.699069,
          "Longitude": -73.912642,
          "BIN": 3076491
        },
        {
          "Eviction Address": "59 WILSON AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "4/26/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.702398,
          "Longitude": -73.92868,
          "BIN": 3072082
        },
        {
          "Eviction Address": "342 ELDERT STREET",
          "Eviction Apartment Number": 111,
          "Executed Date": "12/15/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.693574,
          "Longitude": -73.906324,
          "BIN": 3398928
        },
        {
          "Eviction Address": "286 STANHOPE STREET",
          "Eviction Apartment Number": "2E",
          "Executed Date": "5/1/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.702268,
          "Longitude": -73.918881,
          "BIN": 3074527
        },
        {
          "Eviction Address": "345 ELDERT STREET",
          "Eviction Apartment Number": 108,
          "Executed Date": "6/21/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.693654,
          "Longitude": -73.906277,
          "BIN": 3078929
        },
        {
          "Eviction Address": "300 TROUTMAN STREET",
          "Eviction Apartment Number": "BSMT",
          "Executed Date": "1/14/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.704026,
          "Longitude": -73.925353,
          "BIN": 3072551
        },
        {
          "Eviction Address": "389 WOODBINE STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "1/9/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.698006,
          "Longitude": -73.911378,
          "BIN": 3076688
        },
        {
          "Eviction Address": "716 KNICKERBOCKER AV",
          "Eviction Apartment Number": "APT 1R",
          "Executed Date": "6/21/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.694189,
          "Longitude": -73.91025,
          "BIN": 3077994
        },
        {
          "Eviction Address": "832 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "4-B",
          "Executed Date": "4/2/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.691985,
          "Longitude": -73.906381,
          "BIN": 3342357
        },
        {
          "Eviction Address": "232 STOCKHOLM STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "6/12/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.701186,
          "Longitude": -73.921118,
          "BIN": 3074183
        },
        {
          "Eviction Address": "212 TROUTMAN STREET",
          "Eviction Apartment Number": "1ST FLOOR",
          "Executed Date": "5/10/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.702051,
          "Longitude": -73.927292,
          "BIN": 3412954
        },
        {
          "Eviction Address": "102 GRATTAN STREET",
          "Eviction Apartment Number": "2F",
          "Executed Date": "2/29/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.706063,
          "Longitude": -73.929141,
          "BIN": 3070697
        },
        {
          "Eviction Address": "144 WYCKOFF AVENUE",
          "Eviction Apartment Number": 3,
          "Executed Date": "1/9/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.703014,
          "Longitude": -73.917167,
          "BIN": 3074548
        },
        {
          "Eviction Address": "1438 GREENE AVENUE",
          "Eviction Apartment Number": "2-L",
          "Executed Date": "1/14/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.701223,
          "Longitude": -73.916394,
          "BIN": 3075479
        },
        {
          "Eviction Address": "290 SUYDAM STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "8/15/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.702713,
          "Longitude": -73.923136,
          "BIN": 3073213
        },
        {
          "Eviction Address": "555 WILSON AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "1/8/20",
          "Year": 2020,
          "Eviction Postcode": 11207,
          "Latitude": 40.691403,
          "Longitude": -73.909356,
          "BIN": 3078863
        },
        {
          "Eviction Address": "309 MENAHAN STREET",
          "Eviction Apartment Number": "1-L",
          "Executed Date": "5/22/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.700215,
          "Longitude": -73.915068,
          "BIN": 3075773
        },
        {
          "Eviction Address": "286 STANHOPE STREET",
          "Eviction Apartment Number": "2B",
          "Executed Date": "2/16/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.702268,
          "Longitude": -73.918881,
          "BIN": 3074527
        },
        {
          "Eviction Address": "293 IRVING AVENUE",
          "Eviction Apartment Number": "1R",
          "Executed Date": "9/15/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.699449,
          "Longitude": -73.915119,
          "BIN": 3075938
        },
        {
          "Eviction Address": "175 STOCKHOLM STREET",
          "Eviction Apartment Number": 311,
          "Executed Date": "9/14/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.699781,
          "Longitude": -73.922523,
          "BIN": 3326326
        },
        {
          "Eviction Address": "133 STARR STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "1/4/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.70326,
          "Longitude": -73.92496,
          "BIN": 3072584
        },
        {
          "Eviction Address": "345 ELDERT STREET",
          "Eviction Apartment Number": 122,
          "Executed Date": "11/17/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.693654,
          "Longitude": -73.906277,
          "BIN": 3078929
        },
        {
          "Eviction Address": "330 STARR STREET",
          "Eviction Apartment Number": "3B",
          "Executed Date": "10/5/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.707871,
          "Longitude": -73.920338,
          "BIN": 3072812
        },
        {
          "Eviction Address": "1464 JEFFERSON AVE",
          "Eviction Apartment Number": "",
          "Executed Date": "7/17/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.696192,
          "Longitude": -73.908445,
          "BIN": 3078096
        },
        {
          "Eviction Address": "279 LINDEN STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "1/25/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.697887,
          "Longitude": -73.915009,
          "BIN": 3076158
        },
        {
          "Eviction Address": "1328 HALSEY STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "4/17/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.694283,
          "Longitude": -73.906806,
          "BIN": 3078927
        },
        {
          "Eviction Address": "167 STOCKHOLM STREET",
          "Eviction Apartment Number": "3-B",
          "Executed Date": "7/10/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.699639,
          "Longitude": -73.922664,
          "BIN": 3073849
        },
        {
          "Eviction Address": "1239 WILLOUGHBY AVE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "8/30/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.704321,
          "Longitude": -73.922756,
          "BIN": 3072786
        },
        {
          "Eviction Address": "312 GROVE STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "8/9/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.698747,
          "Longitude": -73.915311,
          "BIN": 3076141
        },
        {
          "Eviction Address": "1381 MYRTLE AVENUE",
          "Eviction Apartment Number": "BASEMENT SPACE APPRO",
          "Executed Date": "1/23/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.698515,
          "Longitude": -73.92124,
          "BIN": 3074775
        },
        {
          "Eviction Address": "1549 DEKALB AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "5/1/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.702936,
          "Longitude": -73.920597,
          "BIN": 3073631
        },
        {
          "Eviction Address": "290 SUYDAM STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "8/15/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.702713,
          "Longitude": -73.923136,
          "BIN": 3073213
        },
        {
          "Eviction Address": "284 COOPER STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "5/30/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.691683,
          "Longitude": -73.903496,
          "BIN": 3080052
        },
        {
          "Eviction Address": "254 STOCKHOLM STREET",
          "Eviction Apartment Number": "4L",
          "Executed Date": "10/23/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.701564,
          "Longitude": -73.920743,
          "BIN": 3074194
        },
        {
          "Eviction Address": "832 KNICKERBOCKER AV",
          "Eviction Apartment Number": "3F",
          "Executed Date": "9/12/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.691985,
          "Longitude": -73.906381,
          "BIN": 3342357
        },
        {
          "Eviction Address": "220 INGRAHAM STREET 3RD FL",
          "Eviction Apartment Number": "",
          "Executed Date": "8/2/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.708226,
          "Longitude": -73.924789,
          "BIN": 3070656
        },
        {
          "Eviction Address": "89 GRATTAN STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "5/3/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.706025,
          "Longitude": -73.929469,
          "BIN": 3070676
        },
        {
          "Eviction Address": "1503 GATES AVE AKA 329 IRVING AVE IN THE BUILDING AS 1503",
          "Eviction Apartment Number": "STORE AKA GARAGE",
          "Executed Date": "1/18/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.698602,
          "Longitude": -73.913133,
          "BIN": 3076362
        },
        {
          "Eviction Address": "1268 DECATUR STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "1/12/24",
          "Year": 2024,
          "Eviction Postcode": 11207,
          "Latitude": 40.690393,
          "Longitude": -73.905939,
          "BIN": 3079782
        },
        {
          "Eviction Address": "169 STANHOPE STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "5/23/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.699284,
          "Longitude": -73.921842,
          "BIN": 3074166
        },
        {
          "Eviction Address": "538 JOHNSON AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "5/14/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.708633,
          "Longitude": -73.926798,
          "BIN": 3070622
        },
        {
          "Eviction Address": "302 WEIRFIELD STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "6/14/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.694009,
          "Longitude": -73.908246,
          "BIN": 3078661
        },
        {
          "Eviction Address": "250 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "STORE #2 ON THE GRND",
          "Executed Date": "8/1/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.702635,
          "Longitude": -73.925091,
          "BIN": 3072738
        },
        {
          "Eviction Address": "342 ELDERT STREET",
          "Eviction Apartment Number": 201,
          "Executed Date": "10/11/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.693574,
          "Longitude": -73.906324,
          "BIN": 3398928
        },
        {
          "Eviction Address": "225 COOPER STREET",
          "Eviction Apartment Number": "3-A",
          "Executed Date": "6/28/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.690085,
          "Longitude": -73.905096,
          "BIN": 3079800
        },
        {
          "Eviction Address": "894 WYCKOFF AVENUE",
          "Eviction Apartment Number": "2FR",
          "Executed Date": "10/18/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.697052,
          "Longitude": -73.906669,
          "BIN": 3393935
        },
        {
          "Eviction Address": "306 ST. NICHOLAS  AV ENUE",
          "Eviction Apartment Number": "2L",
          "Executed Date": "11/15/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.701195,
          "Longitude": -73.910948,
          "BIN": 3076399
        },
        {
          "Eviction Address": "243 SUYDAM STREET",
          "Eviction Apartment Number": "4R",
          "Executed Date": "6/1/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.701481,
          "Longitude": -73.924364,
          "BIN": 3325445
        },
        {
          "Eviction Address": "1400 PUTNAM AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "1/23/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.695376,
          "Longitude": -73.91159,
          "BIN": 3077326
        },
        {
          "Eviction Address": "1385 WILLOUGHBY AVE",
          "Eviction Apartment Number": "3C",
          "Executed Date": "6/12/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.707179,
          "Longitude": -73.919885,
          "BIN": 3072824
        },
        {
          "Eviction Address": "315 WOODBINE STREET",
          "Eviction Apartment Number": "2F",
          "Executed Date": "7/18/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.696697,
          "Longitude": -73.912663,
          "BIN": 3076863
        },
        {
          "Eviction Address": "385 TROUTMAN STREET",
          "Eviction Apartment Number": 304,
          "Executed Date": "1/11/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.706095,
          "Longitude": -73.923349,
          "BIN": 3326214
        },
        {
          "Eviction Address": "320 GROVE STREET",
          "Eviction Apartment Number": "1B",
          "Executed Date": "10/11/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.6989,
          "Longitude": -73.91516,
          "BIN": 3076145
        },
        {
          "Eviction Address": "1242 HALSEY STREET",
          "Eviction Apartment Number": "THIRD FLOOR",
          "Executed Date": "6/21/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.69236,
          "Longitude": -73.908695,
          "BIN": 3078876
        },
        {
          "Eviction Address": "235 IRVING AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "1/8/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.700653,
          "Longitude": -73.917235,
          "BIN": 3075140
        },
        {
          "Eviction Address": "59 WILSON AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "4/26/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.702398,
          "Longitude": -73.92868,
          "BIN": 3072082
        },
        {
          "Eviction Address": "1087 FLUSHING AVENUE",
          "Eviction Apartment Number": 412,
          "Executed Date": "1/31/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.704819,
          "Longitude": -73.928504,
          "BIN": 3070752
        },
        {
          "Eviction Address": "816 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "6/11/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.692326,
          "Longitude": -73.906979,
          "BIN": 3079082
        },
        {
          "Eviction Address": "317 LINDEN STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "8/23/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.698455,
          "Longitude": -73.91445,
          "BIN": 3076152
        },
        {
          "Eviction Address": "73 STARR STREET",
          "Eviction Apartment Number": "2A",
          "Executed Date": "2/17/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.701774,
          "Longitude": -73.926419,
          "BIN": 3426213
        },
        {
          "Eviction Address": "343 GROVE STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "1/8/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.699745,
          "Longitude": -73.914358,
          "BIN": 3075977
        },
        {
          "Eviction Address": "509 WILSON AVENUE AKA 1240 HANCOCK ST",
          "Eviction Apartment Number": "3R",
          "Executed Date": "6/10/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.692299,
          "Longitude": -73.910935,
          "BIN": 3326238
        },
        {
          "Eviction Address": "555 WILSON AVE",
          "Eviction Apartment Number": "2L",
          "Executed Date": "2/5/24",
          "Year": 2024,
          "Eviction Postcode": 11207,
          "Latitude": 40.691403,
          "Longitude": -73.909356,
          "BIN": 3078863
        },
        {
          "Eviction Address": "274 JEFFERSON STREET",
          "Eviction Apartment Number": "3F",
          "Executed Date": "8/15/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.704014,
          "Longitude": -73.926539,
          "BIN": 3072349
        },
        {
          "Eviction Address": "1241 HALSEY STREET - 1ST FLOOR",
          "Eviction Apartment Number": "",
          "Executed Date": "1/11/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.693471,
          "Longitude": -73.90763,
          "BIN": 3078690
        },
        {
          "Eviction Address": "1346 HANCOCK STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "12/18/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.694562,
          "Longitude": -73.908876,
          "BIN": 3078388
        },
        {
          "Eviction Address": "1365 PUTNAM AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "11/27/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.694424,
          "Longitude": -73.912551,
          "BIN": 3393147
        },
        {
          "Eviction Address": "1375 GREENE AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "2/13/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.700178,
          "Longitude": -73.917448,
          "BIN": 3075110
        },
        {
          "Eviction Address": "252 KNICKERBOCKER AV",
          "Eviction Apartment Number": "2L",
          "Executed Date": "2/3/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.702607,
          "Longitude": -73.925044,
          "BIN": 3072739
        },
        {
          "Eviction Address": "344 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "2ND FLOOR LEFT",
          "Executed Date": "7/19/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.700953,
          "Longitude": -73.922136,
          "BIN": 3073836
        },
        {
          "Eviction Address": "314 COVERT STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "11/16/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.692975,
          "Longitude": -73.905744,
          "BIN": 3079369
        },
        {
          "Eviction Address": "302 STANHOPE STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "2/11/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.702595,
          "Longitude": -73.91856,
          "BIN": 3074533
        },
        {
          "Eviction Address": "175 STOCKHOLM STREET",
          "Eviction Apartment Number": 304,
          "Executed Date": "5/30/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.699781,
          "Longitude": -73.922523,
          "BIN": 3326326
        },
        {
          "Eviction Address": "303 GROVE STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "6/17/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.698486,
          "Longitude": -73.915593,
          "BIN": 3075925
        },
        {
          "Eviction Address": "513 WILSON AVENUE",
          "Eviction Apartment Number": "COMM",
          "Executed Date": "5/17/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.692233,
          "Longitude": -73.910816,
          "BIN": 3326237
        },
        {
          "Eviction Address": "300 STANHOPE STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "6/7/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.702553,
          "Longitude": -73.918599,
          "BIN": 3074532
        },
        {
          "Eviction Address": "476 JEFFERSON STREET",
          "Eviction Apartment Number": 11,
          "Executed Date": "7/5/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.708696,
          "Longitude": -73.92187,
          "BIN": 3072427
        },
        {
          "Eviction Address": "441 WILSON AVENUE",
          "Eviction Apartment Number": "D3",
          "Executed Date": "1/13/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.693805,
          "Longitude": -73.91359,
          "BIN": 3077060
        },
        {
          "Eviction Address": "167 STOCKHOLM STREET",
          "Eviction Apartment Number": "1-A",
          "Executed Date": "7/13/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.699639,
          "Longitude": -73.922664,
          "BIN": 3073849
        },
        {
          "Eviction Address": "1513 GATES AVENUE",
          "Eviction Apartment Number": "1-F",
          "Executed Date": "8/3/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.698767,
          "Longitude": -73.912971,
          "BIN": 3076359
        },
        {
          "Eviction Address": "1298 HALSEY STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "1/15/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.693764,
          "Longitude": -73.907316,
          "BIN": 3078916
        },
        {
          "Eviction Address": "1392 MADISON STREET",
          "Eviction Apartment Number": "BASEMENT FLOOR",
          "Executed Date": "2/20/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.69764,
          "Longitude": -73.910542,
          "BIN": 3077114
        },
        {
          "Eviction Address": "1513A MYRTLE AVENUE    UNIT 1513A",
          "Eviction Apartment Number": "",
          "Executed Date": "2/26/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.699147,
          "Longitude": -73.915181,
          "BIN": 3400853
        },
        {
          "Eviction Address": "1416 GREENE AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "7/24/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.700839,
          "Longitude": -73.916773,
          "BIN": 3389365
        },
        {
          "Eviction Address": "147 GEORGE STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "12/8/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.703988,
          "Longitude": -73.928938,
          "BIN": 3071939
        },
        {
          "Eviction Address": "717 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "1ST BEDROOM",
          "Executed Date": "5/4/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.694121,
          "Longitude": -73.910092,
          "BIN": 3078032
        },
        {
          "Eviction Address": "867 KNICKERBOCKER   AVENUE",
          "Eviction Apartment Number": "1R",
          "Executed Date": "1/6/20",
          "Year": 2020,
          "Eviction Postcode": 11207,
          "Latitude": 40.691427,
          "Longitude": -73.905364,
          "BIN": 3079574
        },
        {
          "Eviction Address": "157 WILSON AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "1/19/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.700208,
          "Longitude": -73.924834,
          "BIN": 3073155
        },
        {
          "Eviction Address": "241 SUYDAM ST.",
          "Eviction Apartment Number": "",
          "Executed Date": "7/20/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.701446,
          "Longitude": -73.9244,
          "BIN": 3072952
        },
        {
          "Eviction Address": "424 MELROSE STREET",
          "Eviction Apartment Number": "1A",
          "Executed Date": "8/16/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.705144,
          "Longitude": -73.926599,
          "BIN": 3398143
        },
        {
          "Eviction Address": "126 GRATTAN STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "2/28/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.706251,
          "Longitude": -73.927976,
          "BIN": 3070701
        },
        {
          "Eviction Address": "321 MENAHAN STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "1/2/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.700432,
          "Longitude": -73.914855,
          "BIN": 3075767
        },
        {
          "Eviction Address": "300 STANHOPE STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "6/7/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.702553,
          "Longitude": -73.918599,
          "BIN": 3074532
        },
        {
          "Eviction Address": "226 GROVE STREET",
          "Eviction Apartment Number": "3J",
          "Executed Date": "10/3/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.696468,
          "Longitude": -73.91755,
          "BIN": 3338492
        },
        {
          "Eviction Address": "272 WOODBINE STREET",
          "Eviction Apartment Number": "1ST FLOOR,REAR ROOM",
          "Executed Date": "3/25/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.695603,
          "Longitude": -73.91371,
          "BIN": 3076807
        },
        {
          "Eviction Address": "97 MORGAN AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "2/14/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.707217,
          "Longitude": -73.932148,
          "BIN": 3071323
        },
        {
          "Eviction Address": "169 STARR STREET",
          "Eviction Apartment Number": "2-L",
          "Executed Date": "10/30/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.703886,
          "Longitude": -73.92435,
          "BIN": 3072570
        },
        {
          "Eviction Address": "255 STOCKHOLM STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "6/1/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.701611,
          "Longitude": -73.920725,
          "BIN": 3073889
        },
        {
          "Eviction Address": "306 TROUTMAN STREET",
          "Eviction Apartment Number": "2A",
          "Executed Date": "10/1/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.704131,
          "Longitude": -73.925252,
          "BIN": 3072553
        },
        {
          "Eviction Address": "1242 HALSEY STREET",
          "Eviction Apartment Number": "2ND FLOOR",
          "Executed Date": "8/28/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.69236,
          "Longitude": -73.908695,
          "BIN": 3078876
        },
        {
          "Eviction Address": "420 STOCKHOLM STREET",
          "Eviction Apartment Number": "4H",
          "Executed Date": "7/15/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.705758,
          "Longitude": -73.916554,
          "BIN": 3074288
        },
        {
          "Eviction Address": "30 SAINT NICHOLAS AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "2/27/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.70743,
          "Longitude": -73.921446,
          "BIN": 3072619
        },
        {
          "Eviction Address": "199 STARR STREET A/K/A 348 TROUTMAN STREET - CELLAR & FIRST FLOOR & MEZZANINE & ROOF TOP",
          "Eviction Apartment Number": "",
          "Executed Date": "10/30/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.704876,
          "Longitude": -73.923379,
          "BIN": 3072611
        },
        {
          "Eviction Address": "1341 HANCOCK STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "11/28/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.694512,
          "Longitude": -73.908952,
          "BIN": 3078079
        },
        {
          "Eviction Address": "344 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "3RD FL RIGHT",
          "Executed Date": "12/18/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.700953,
          "Longitude": -73.922136,
          "BIN": 3073836
        },
        {
          "Eviction Address": "195 MENAHAN STREET",
          "Eviction Apartment Number": "3-R",
          "Executed Date": "10/17/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.697203,
          "Longitude": -73.918022,
          "BIN": 3075674
        },
        {
          "Eviction Address": "804 KNICKERBOCKER AV",
          "Eviction Apartment Number": "2L",
          "Executed Date": "3/6/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.692606,
          "Longitude": -73.907469,
          "BIN": 3078891
        },
        {
          "Eviction Address": "400 STANHOPE STREET",
          "Eviction Apartment Number": 5,
          "Executed Date": "2/7/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.705121,
          "Longitude": -73.916014,
          "BIN": 3074613
        },
        {
          "Eviction Address": "282 MOFFAT STREET",
          "Eviction Apartment Number": "12,500 SQ FT PARKING",
          "Executed Date": "1/14/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.690026,
          "Longitude": -73.903949,
          "BIN": 3000000
        },
        {
          "Eviction Address": "294 HARMAN STREET",
          "Eviction Apartment Number": "1RF",
          "Executed Date": "9/30/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.699946,
          "Longitude": -73.918819,
          "BIN": 3075097
        },
        {
          "Eviction Address": "280 COOPER STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "8/3/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.691601,
          "Longitude": -73.903576,
          "BIN": 3080050
        },
        {
          "Eviction Address": "1341 PUTNAM AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "10/3/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.694068,
          "Longitude": -73.912901,
          "BIN": 3077059
        },
        {
          "Eviction Address": "240 JEFFERSON STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "2/27/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.702878,
          "Longitude": -73.927651,
          "BIN": 3072307
        },
        {
          "Eviction Address": "1400 PUTNAM AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "1/23/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.695376,
          "Longitude": -73.91159,
          "BIN": 3077326
        },
        {
          "Eviction Address": "61 WYCKOFF AVENUE - APT 2-B",
          "Eviction Apartment Number": "2-B",
          "Executed Date": "11/6/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.705607,
          "Longitude": -73.921293,
          "BIN": 3072989
        },
        {
          "Eviction Address": "183 STANHOPE STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "1/23/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.699534,
          "Longitude": -73.921596,
          "BIN": 3074159
        },
        {
          "Eviction Address": "342 ELDERT STREET",
          "Eviction Apartment Number": 111,
          "Executed Date": "12/15/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.693574,
          "Longitude": -73.906324,
          "BIN": 3398928
        },
        {
          "Eviction Address": "254 PALMETTO STREET",
          "Eviction Apartment Number": "1A",
          "Executed Date": "6/25/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.695711,
          "Longitude": -73.914778,
          "BIN": 3076630
        },
        {
          "Eviction Address": "184 NOLL STREET",
          "Eviction Apartment Number": "6A",
          "Executed Date": "10/2/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.704007,
          "Longitude": -73.93007,
          "BIN": 3396947
        },
        {
          "Eviction Address": "49 WYCKOFF AVENUE",
          "Eviction Apartment Number": "UNIT 2-B",
          "Executed Date": "11/29/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.705921,
          "Longitude": -73.921794,
          "BIN": 3072788
        },
        {
          "Eviction Address": "226 SCHAEFFER STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "10/1/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.690846,
          "Longitude": -73.90666,
          "BIN": 3079538
        },
        {
          "Eviction Address": "451 IRVING AVENUE",
          "Eviction Apartment Number": "STOREFRONT",
          "Executed Date": "2/22/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.695788,
          "Longitude": -73.90868,
          "BIN": 3078095
        },
        {
          "Eviction Address": "1442 MYRTLE AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "9/22/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.69894,
          "Longitude": -73.917002,
          "BIN": 3075686
        },
        {
          "Eviction Address": "1341 PUTNAM AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "10/3/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.694068,
          "Longitude": -73.912901,
          "BIN": 3077059
        },
        {
          "Eviction Address": "106 WYCKOFF AVENUE        2ND FLOOR",
          "Eviction Apartment Number": "",
          "Executed Date": "9/15/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.704055,
          "Longitude": -73.918839,
          "BIN": 3073918
        },
        {
          "Eviction Address": "1361 PUTNAM AVENUE",
          "Eviction Apartment Number": "2FL ROOM 3,ALL ROOMS",
          "Executed Date": "3/1/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.694364,
          "Longitude": -73.912609,
          "BIN": 3393149
        },
        {
          "Eviction Address": "345 ELDERT STREET",
          "Eviction Apartment Number": 219,
          "Executed Date": "10/21/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.693654,
          "Longitude": -73.906277,
          "BIN": 3078929
        },
        {
          "Eviction Address": "814 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "2L",
          "Executed Date": "10/25/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.692364,
          "Longitude": -73.907044,
          "BIN": 3079081
        },
        {
          "Eviction Address": "835 HART STREET",
          "Eviction Apartment Number": "3A",
          "Executed Date": "8/16/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.702123,
          "Longitude": -73.922567,
          "BIN": 3073245
        },
        {
          "Eviction Address": "212 STARR STREET",
          "Eviction Apartment Number": "2-L",
          "Executed Date": "3/21/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.705106,
          "Longitude": -73.923126,
          "BIN": 3072766
        },
        {
          "Eviction Address": "214 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "STORE",
          "Executed Date": "4/15/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.703324,
          "Longitude": -73.926309,
          "BIN": 3072323
        },
        {
          "Eviction Address": "1087 FLUSHING AVENUE",
          "Eviction Apartment Number": 412,
          "Executed Date": "5/4/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.704819,
          "Longitude": -73.928504,
          "BIN": 3070752
        },
        {
          "Eviction Address": "329-337 LINDEN ST",
          "Eviction Apartment Number": "",
          "Executed Date": "6/8/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.698913,
          "Longitude": -73.913998,
          "BIN": 3076172
        },
        {
          "Eviction Address": "220 SCHAEFER STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "12/19/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.690723,
          "Longitude": -73.906783,
          "BIN": 3079534
        },
        {
          "Eviction Address": "723 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "4L",
          "Executed Date": "4/24/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.694038,
          "Longitude": -73.909951,
          "BIN": 3078030
        },
        {
          "Eviction Address": "1356 WILLOUGHBY AVE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "8/11/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.706422,
          "Longitude": -73.920629,
          "BIN": 3072999
        },
        {
          "Eviction Address": "342 ELDERT STREET",
          "Eviction Apartment Number": 407,
          "Executed Date": "9/7/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.693574,
          "Longitude": -73.906324,
          "BIN": 3398928
        },
        {
          "Eviction Address": "515 WILSON AVENUE",
          "Eviction Apartment Number": "UNIT 3L",
          "Executed Date": "5/24/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.6922,
          "Longitude": -73.910758,
          "BIN": 3078335
        },
        {
          "Eviction Address": "257 HIMROD STREET",
          "Eviction Apartment Number": "1L,1ST ROOM ON THE L",
          "Executed Date": "4/24/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.700756,
          "Longitude": -73.919222,
          "BIN": 3074503
        },
        {
          "Eviction Address": "330 HARMAN STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "2/29/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.700473,
          "Longitude": -73.918302,
          "BIN": 3075108
        },
        {
          "Eviction Address": "1216 HALSEY STREET",
          "Eviction Apartment Number": "ENTIRE THIRD FLOOR",
          "Executed Date": "6/2/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.691899,
          "Longitude": -73.90915,
          "BIN": 3078865
        },
        {
          "Eviction Address": "435 WILSON AVENUE",
          "Eviction Apartment Number": "4B",
          "Executed Date": "3/27/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.693907,
          "Longitude": -73.913763,
          "BIN": 3000000
        },
        {
          "Eviction Address": "296 LINDEN STREET",
          "Eviction Apartment Number": "2 , ROOM #03",
          "Executed Date": "2/23/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.698154,
          "Longitude": -73.914721,
          "BIN": 3076318
        },
        {
          "Eviction Address": "296 LINDEN STREET",
          "Eviction Apartment Number": "UNIT#2-#3 A/K/A 2,RO",
          "Executed Date": "3/29/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.698154,
          "Longitude": -73.914721,
          "BIN": 3076318
        },
        {
          "Eviction Address": "1461 GATES AVENUE",
          "Eviction Apartment Number": "3-F",
          "Executed Date": "1/31/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.697607,
          "Longitude": -73.914112,
          "BIN": 3000000
        },
        {
          "Eviction Address": "550 KNICKERBOCKER AV",
          "Eviction Apartment Number": "03S",
          "Executed Date": "9/1/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.697136,
          "Longitude": -73.915425,
          "BIN": 3342119
        },
        {
          "Eviction Address": "446 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "3RD FL",
          "Executed Date": "3/10/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.699158,
          "Longitude": -73.918986,
          "BIN": 3075089
        },
        {
          "Eviction Address": "81 ST. NICHOLAS AVE",
          "Eviction Apartment Number": "UNIT: STORE 1, 2 & 3",
          "Executed Date": "5/4/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.706246,
          "Longitude": -73.919457,
          "BIN": 3073312
        },
        {
          "Eviction Address": "538 JOHNSON AVENUE AKA 75 STEWART AVENUE",
          "Eviction Apartment Number": 210,
          "Executed Date": "12/4/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.708633,
          "Longitude": -73.926798,
          "BIN": 3070622
        },
        {
          "Eviction Address": "257 COOPER STREET",
          "Eviction Apartment Number": "2A",
          "Executed Date": "12/5/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.691151,
          "Longitude": -73.904045,
          "BIN": 3079802
        },
        {
          "Eviction Address": "141 STARR STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "1/7/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.7034,
          "Longitude": -73.924827,
          "BIN": 3072581
        },
        {
          "Eviction Address": "1544 MYRTLE AVENUE",
          "Eviction Apartment Number": "3RD FLOOR APARTMENT",
          "Executed Date": "1/16/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.699469,
          "Longitude": -73.911762,
          "BIN": 3076498
        },
        {
          "Eviction Address": "225 STARR STREET",
          "Eviction Apartment Number": "2D",
          "Executed Date": "7/13/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.70534,
          "Longitude": -73.922924,
          "BIN": 3388776
        },
        {
          "Eviction Address": "119 INGRAHAM STREET A/K/A 480 JOHNSON AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "10/17/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.707523,
          "Longitude": -73.929237,
          "BIN": 3070614
        },
        {
          "Eviction Address": "311 WEIRFIELD STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "10/12/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.693935,
          "Longitude": -73.908347,
          "BIN": 3078427
        },
        {
          "Eviction Address": "1423 DEKALB AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "7/14/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.70021,
          "Longitude": -73.923276,
          "BIN": 3073577
        },
        {
          "Eviction Address": "284 HIMROD STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "12/13/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.700885,
          "Longitude": -73.919067,
          "BIN": 3074817
        },
        {
          "Eviction Address": "256 HIMROD STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "5/4/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.700399,
          "Longitude": -73.919543,
          "BIN": 3074806
        },
        {
          "Eviction Address": "284 COOPER STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "6/5/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.691683,
          "Longitude": -73.903496,
          "BIN": 3080052
        },
        {
          "Eviction Address": "471 WILSON AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "7/10/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.692854,
          "Longitude": -73.911911,
          "BIN": 3077622
        },
        {
          "Eviction Address": "784 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "2A",
          "Executed Date": "10/22/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.692906,
          "Longitude": -73.907995,
          "BIN": 3078882
        },
        {
          "Eviction Address": "282 BLEECKER STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "4/26/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.699582,
          "Longitude": -73.916832,
          "BIN": 3075707
        },
        {
          "Eviction Address": "245 HIMROD STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "3/6/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.700479,
          "Longitude": -73.919493,
          "BIN": 3074510
        },
        {
          "Eviction Address": "268 JEFFERSON STREET",
          "Eviction Apartment Number": "1A",
          "Executed Date": "3/9/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.703928,
          "Longitude": -73.926622,
          "BIN": 3072347
        },
        {
          "Eviction Address": "357 STOCKHOLM STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "3/2/20",
          "Year": 2020,
          "Eviction Postcode": 11237,
          "Latitude": 40.704356,
          "Longitude": -73.918009,
          "BIN": 3073958
        },
        {
          "Eviction Address": "677 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "3RD FLOOR",
          "Executed Date": "9/9/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.694866,
          "Longitude": -73.911407,
          "BIN": 3077318
        },
        {
          "Eviction Address": "288 SUYDAM STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "11/9/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.702677,
          "Longitude": -73.923169,
          "BIN": 3073212
        },
        {
          "Eviction Address": "509 WILSON AVENUE A/K/A 1240 HANCOCK STREET",
          "Eviction Apartment Number": "2L A/K/A 2",
          "Executed Date": "7/27/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.692299,
          "Longitude": -73.910935,
          "BIN": 3326238
        },
        {
          "Eviction Address": "1449 GATES AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "11/9/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.697429,
          "Longitude": -73.914289,
          "BIN": 3076341
        },
        {
          "Eviction Address": "1126 WILLOUGHBY AVE",
          "Eviction Apartment Number": "3A",
          "Executed Date": "4/11/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.701628,
          "Longitude": -73.92537,
          "BIN": 3072936
        },
        {
          "Eviction Address": "1289 GREENE AVENUE",
          "Eviction Apartment Number": "2A",
          "Executed Date": "10/4/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.698009,
          "Longitude": -73.919586,
          "BIN": 3075081
        },
        {
          "Eviction Address": "272 IRVING AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "5/1/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.699568,
          "Longitude": -73.915364,
          "BIN": 3075933
        },
        {
          "Eviction Address": "318 SUYDAM STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "8/22/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.703199,
          "Longitude": -73.92266,
          "BIN": 3073225
        },
        {
          "Eviction Address": "353 GROVE STREET",
          "Eviction Apartment Number": "1-L",
          "Executed Date": "4/8/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.699921,
          "Longitude": -73.914185,
          "BIN": 3075972
        },
        {
          "Eviction Address": "287 HARMAN STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "2/20/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.699869,
          "Longitude": -73.91892,
          "BIN": 3074845
        },
        {
          "Eviction Address": "250 CORNELIA STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "3/20/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.69365,
          "Longitude": -73.912112,
          "BIN": 3077628
        },
        {
          "Eviction Address": "279 WOODBINE STREET A/K/A 618 KNICKERBOC",
          "Eviction Apartment Number": "GARAGE #3, ENTRANCE",
          "Executed Date": "2/21/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.695754,
          "Longitude": -73.913588,
          "BIN": 3076640
        },
        {
          "Eviction Address": "832 KNICKERBOCKER AV ENUE",
          "Eviction Apartment Number": "3-I",
          "Executed Date": "1/31/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.691985,
          "Longitude": -73.906381,
          "BIN": 3342357
        },
        {
          "Eviction Address": "867 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "1/6/20",
          "Year": 2020,
          "Eviction Postcode": 11207,
          "Latitude": 40.691427,
          "Longitude": -73.905364,
          "BIN": 3079574
        },
        {
          "Eviction Address": "476 JEFFERSON STREET",
          "Eviction Apartment Number": "7C",
          "Executed Date": "7/5/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.708696,
          "Longitude": -73.92187,
          "BIN": 3072427
        },
        {
          "Eviction Address": "1368 PUTNAM AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "6/14/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.694474,
          "Longitude": -73.912475,
          "BIN": 3077290
        },
        {
          "Eviction Address": "538 JOHNSON AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "5/14/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.708633,
          "Longitude": -73.926798,
          "BIN": 3070622
        },
        {
          "Eviction Address": "1365 PUTNAM AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "11/27/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.694424,
          "Longitude": -73.912551,
          "BIN": 3393147
        },
        {
          "Eviction Address": "1420 PUTNAM AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "8/2/19",
          "Year": 2019,
          "Eviction Postcode": 11237,
          "Latitude": 40.69567,
          "Longitude": -73.911301,
          "BIN": 3077334
        },
        {
          "Eviction Address": "222 STANHOPE STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "4/6/17",
          "Year": 2017,
          "Eviction Postcode": 11237,
          "Latitude": 40.700688,
          "Longitude": -73.920434,
          "BIN": 3074478
        },
        {
          "Eviction Address": "845 KNICKERBOCKER AVE APT. 2R",
          "Eviction Apartment Number": "2R",
          "Executed Date": "7/25/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.691798,
          "Longitude": -73.90602,
          "BIN": 3079356
        },
        {
          "Eviction Address": "203 WILSON AVENUE",
          "Eviction Apartment Number": "STORE SPACE",
          "Executed Date": "12/19/22",
          "Year": 2022,
          "Eviction Postcode": 11237,
          "Latitude": 40.698952,
          "Longitude": -73.922628,
          "BIN": 3074128
        },
        {
          "Eviction Address": "364 KNICKERBOCKER AVENUE",
          "Eviction Apartment Number": "3-L",
          "Executed Date": "1/4/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.700576,
          "Longitude": -73.921476,
          "BIN": 3074147
        },
        {
          "Eviction Address": "74 DE SALES PLACE",
          "Eviction Apartment Number": "1F",
          "Executed Date": "12/4/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.682539,
          "Longitude": -73.904285,
          "BIN": 3080503
        },
        {
          "Eviction Address": "1345 DEKALB AVENUE",
          "Eviction Apartment Number": "4L",
          "Executed Date": "1/24/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.69857,
          "Longitude": -73.924886,
          "BIN": 3325496
        },
        {
          "Eviction Address": "589 VAN BUREN STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "11/17/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.692422,
          "Longitude": -73.925842,
          "BIN": 3074677
        },
        {
          "Eviction Address": "18 DODWORTH STREET",
          "Eviction Apartment Number": "3-L",
          "Executed Date": "3/25/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.694848,
          "Longitude": -73.92999,
          "BIN": 3073448
        },
        {
          "Eviction Address": "19 PARK STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "1/8/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.699571,
          "Longitude": -73.938399,
          "BIN": 3071729
        },
        {
          "Eviction Address": "116 GROVE STREET",
          "Eviction Apartment Number": 9,
          "Executed Date": "4/3/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.69356,
          "Longitude": -73.920399,
          "BIN": 3076083
        },
        {
          "Eviction Address": "191 JOHNSON AVENUE",
          "Eviction Apartment Number": "4B",
          "Executed Date": "4/7/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.706685,
          "Longitude": -73.94224,
          "BIN": 3071231
        },
        {
          "Eviction Address": "72 GEORGE STREET APT. 2R",
          "Eviction Apartment Number": "2R",
          "Executed Date": "4/19/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.702095,
          "Longitude": -73.930765,
          "BIN": 3071945
        },
        {
          "Eviction Address": "583 EVERGREEN AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "11/6/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.689084,
          "Longitude": -73.913358,
          "BIN": 3078233
        },
        {
          "Eviction Address": "1145 GREENE AVENUE",
          "Eviction Apartment Number": "1F",
          "Executed Date": "1/24/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.694643,
          "Longitude": -73.922882,
          "BIN": 3413821
        },
        {
          "Eviction Address": "1281 JEFFERSON AVE",
          "Eviction Apartment Number": "1ST FLOOR",
          "Executed Date": "4/23/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.692305,
          "Longitude": -73.91229,
          "BIN": 3077604
        },
        {
          "Eviction Address": "58 MOFFAT STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "10/5/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.684766,
          "Longitude": -73.90912,
          "BIN": 3080075
        },
        {
          "Eviction Address": "167 SCHOLES STREET A/K/A 202-216 GRAHAM AVENUE",
          "Eviction Apartment Number": "1D",
          "Executed Date": "4/10/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.708843,
          "Longitude": -73.942881,
          "BIN": 3344974
        },
        {
          "Eviction Address": "75 JEFFERSON STREET",
          "Eviction Apartment Number": "3F",
          "Executed Date": "4/23/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.698871,
          "Longitude": -73.932741,
          "BIN": 3072042
        },
        {
          "Eviction Address": "946 BUSHWICK AVENUE",
          "Eviction Apartment Number": "A2",
          "Executed Date": "5/16/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.692522,
          "Longitude": -73.923498,
          "BIN": 3075292
        },
        {
          "Eviction Address": "1225 BUSHWICK AVENUE",
          "Eviction Apartment Number": "A-3",
          "Executed Date": "2/3/20",
          "Year": 2020,
          "Eviction Postcode": 11221,
          "Latitude": 40.687823,
          "Longitude": -73.915181,
          "BIN": 3078192
        },
        {
          "Eviction Address": "1330 BUSHWICK AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "8/14/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.685976,
          "Longitude": -73.911967,
          "BIN": 3079177
        },
        {
          "Eviction Address": "654 EVERGREEN AVENUE",
          "Eviction Apartment Number": 1,
          "Executed Date": "11/2/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.688721,
          "Longitude": -73.912753,
          "BIN": 3422192
        },
        {
          "Eviction Address": "1184 HALSEY STREET",
          "Eviction Apartment Number": "APT 1",
          "Executed Date": "10/17/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.690934,
          "Longitude": -73.910096,
          "BIN": 3078836
        },
        {
          "Eviction Address": "10 GOODWIN PLACE",
          "Eviction Apartment Number": "4B",
          "Executed Date": "11/1/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.691921,
          "Longitude": -73.924414,
          "BIN": 3390300
        },
        {
          "Eviction Address": "70 ABERDEEN STREET",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "5/2/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.68291,
          "Longitude": -73.905095,
          "BIN": 3080452
        },
        {
          "Eviction Address": "196 CORNELIA STREET  TOP FLOOR",
          "Eviction Apartment Number": "",
          "Executed Date": "6/7/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.692402,
          "Longitude": -73.913336,
          "BIN": 3077587
        },
        {
          "Eviction Address": "832 BROADWAY",
          "Eviction Apartment Number": "3RD FL",
          "Executed Date": "5/31/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.699209,
          "Longitude": -73.939246,
          "BIN": 3042853
        },
        {
          "Eviction Address": "811 FLUSHING AVENUE",
          "Eviction Apartment Number": "07F",
          "Executed Date": "3/1/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.70117,
          "Longitude": -73.940049,
          "BIN": 3338432
        },
        {
          "Eviction Address": "111 LINDEN STREET",
          "Eviction Apartment Number": 5,
          "Executed Date": "5/11/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.69312,
          "Longitude": -73.919689,
          "BIN": 3076111
        },
        {
          "Eviction Address": "29 GRANITE STREET APT. 1",
          "Eviction Apartment Number": 1,
          "Executed Date": "12/4/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.682561,
          "Longitude": -73.907793,
          "BIN": 3393241
        },
        {
          "Eviction Address": "1223 HANCOCK STREET APT 1",
          "Eviction Apartment Number": 1,
          "Executed Date": "8/24/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.691934,
          "Longitude": -73.911483,
          "BIN": 3077950
        },
        {
          "Eviction Address": "9 GRANITE STREET",
          "Eviction Apartment Number": "STORE",
          "Executed Date": "12/18/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.682177,
          "Longitude": -73.908165,
          "BIN": 3080286
        },
        {
          "Eviction Address": "21 SCHAEFFER STREET",
          "Eviction Apartment Number": "6A",
          "Executed Date": "6/26/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.685021,
          "Longitude": -73.912408,
          "BIN": 3413848
        },
        {
          "Eviction Address": "330 EVERGREEN AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "1/11/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.695026,
          "Longitude": -73.925316,
          "BIN": 3074362
        },
        {
          "Eviction Address": "469 CENTRAL AVENUE",
          "Eviction Apartment Number": "UNIT: GROUND FLOOR",
          "Executed Date": "1/3/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.691637,
          "Longitude": -73.913806,
          "BIN": 3077578
        },
        {
          "Eviction Address": "618 BUSHWICK AVENUE",
          "Eviction Apartment Number": 416,
          "Executed Date": "10/27/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.698207,
          "Longitude": -73.933899,
          "BIN": 3425505
        },
        {
          "Eviction Address": "49 HIMROD STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "5/26/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.695328,
          "Longitude": -73.924547,
          "BIN": 3423708
        },
        {
          "Eviction Address": "198 WEIRFIELD STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "10/24/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.691028,
          "Longitude": -73.911174,
          "BIN": 3078610
        },
        {
          "Eviction Address": "998 HALSEY STREET",
          "Eviction Apartment Number": "COMMERICAL UNIT",
          "Executed Date": "11/12/21",
          "Year": 2021,
          "Eviction Postcode": 11207,
          "Latitude": 40.686356,
          "Longitude": -73.914581,
          "BIN": 3393217
        },
        {
          "Eviction Address": "1131 HANCOCK STREET",
          "Eviction Apartment Number": "5 - REAR",
          "Executed Date": "2/27/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.690165,
          "Longitude": -73.91322,
          "BIN": 3077911
        },
        {
          "Eviction Address": "1209 DEKALB AVENUE",
          "Eviction Apartment Number": 511,
          "Executed Date": "11/13/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.695599,
          "Longitude": -73.927796,
          "BIN": 3421997
        },
        {
          "Eviction Address": "174-176 LINDEN ST",
          "Eviction Apartment Number": "1A",
          "Executed Date": "11/21/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.694944,
          "Longitude": -73.917873,
          "BIN": 3076286
        },
        {
          "Eviction Address": "715 CHAUNCEY STREET",
          "Eviction Apartment Number": "ENTIRE GROUND FL A/K",
          "Executed Date": "8/17/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.684951,
          "Longitude": -73.907793,
          "BIN": 3080111
        },
        {
          "Eviction Address": "1282 PUTNAM AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "3/25/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.69279,
          "Longitude": -73.914129,
          "BIN": 3077252
        },
        {
          "Eviction Address": "682 BUSHWICK AVE.",
          "Eviction Apartment Number": "4C",
          "Executed Date": "11/28/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.696963,
          "Longitude": -73.93165,
          "BIN": 3398044
        },
        {
          "Eviction Address": "10 MONTIETH STREET",
          "Eviction Apartment Number": 178,
          "Executed Date": "3/24/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.701357,
          "Longitude": -73.936496,
          "BIN": 3426398
        },
        {
          "Eviction Address": "849 FLUSHING AVENUE",
          "Eviction Apartment Number": "2I",
          "Executed Date": "9/8/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.701583,
          "Longitude": -73.938249,
          "BIN": 3338439
        },
        {
          "Eviction Address": "595A CENTRAL AVENUE",
          "Eviction Apartment Number": 1,
          "Executed Date": "5/2/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.688982,
          "Longitude": -73.90914,
          "BIN": 3406107
        },
        {
          "Eviction Address": "1487 BROADWAY A/K/A 6 CORNELIA STREET",
          "Eviction Apartment Number": "1-A",
          "Executed Date": "11/29/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.687344,
          "Longitude": -73.91825,
          "BIN": 3077436
        },
        {
          "Eviction Address": "1109 JEFFERSON AVENU E",
          "Eviction Apartment Number": 2,
          "Executed Date": "11/14/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.688978,
          "Longitude": -73.915554,
          "BIN": 3077523
        },
        {
          "Eviction Address": "10 FORREST STREET",
          "Eviction Apartment Number": "4G",
          "Executed Date": "7/23/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.700764,
          "Longitude": -73.935974,
          "BIN": 3387594
        },
        {
          "Eviction Address": "186 SUYDAM STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "5/17/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.699888,
          "Longitude": -73.925906,
          "BIN": 3073128
        },
        {
          "Eviction Address": "150 MOFFAT STREET",
          "Eviction Apartment Number": "A",
          "Executed Date": "2/22/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.686845,
          "Longitude": -73.90708,
          "BIN": 3080138
        },
        {
          "Eviction Address": "269 CENTRAL AVENUE",
          "Eviction Apartment Number": "03C",
          "Executed Date": "10/30/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.696237,
          "Longitude": -73.921889,
          "BIN": 3325683
        },
        {
          "Eviction Address": "107 HARMAN STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "5/6/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.695859,
          "Longitude": -73.922859,
          "BIN": 3074726
        },
        {
          "Eviction Address": "17 CORNELIA STREET",
          "Eviction Apartment Number": "3RD FLOOR",
          "Executed Date": "11/20/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.687877,
          "Longitude": -73.917802,
          "BIN": 3077160
        },
        {
          "Eviction Address": "45 ABERDEEN STREET",
          "Eviction Apartment Number": "3C",
          "Executed Date": "9/23/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.681955,
          "Longitude": -73.906063,
          "BIN": 3080421
        },
        {
          "Eviction Address": "399 CENTRAL AVENUE",
          "Eviction Apartment Number": "2D",
          "Executed Date": "6/16/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.693206,
          "Longitude": -73.916562,
          "BIN": 3326169
        },
        {
          "Eviction Address": "1111 LAFAYETTE AVENU E",
          "Eviction Apartment Number": "1B",
          "Executed Date": "7/28/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.692724,
          "Longitude": -73.92671,
          "BIN": 3074343
        },
        {
          "Eviction Address": "1198 BUSHWICK AVENUE",
          "Eviction Apartment Number": "1 (1ST FLOOR)",
          "Executed Date": "11/17/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.68829,
          "Longitude": -73.916038,
          "BIN": 3077807
        },
        {
          "Eviction Address": "1281 JEFFERSON AVE",
          "Eviction Apartment Number": "ENTIRE 2ND FLOOR",
          "Executed Date": "9/5/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.692305,
          "Longitude": -73.91229,
          "BIN": 3077604
        },
        {
          "Eviction Address": "852 BUSHWICK AVENUE",
          "Eviction Apartment Number": "1R",
          "Executed Date": "2/26/20",
          "Year": 2020,
          "Eviction Postcode": 11221,
          "Latitude": 40.694204,
          "Longitude": -73.926615,
          "BIN": 3074019
        },
        {
          "Eviction Address": "1379 BUSHWICK AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "6/26/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.685118,
          "Longitude": -73.910432,
          "BIN": 3079654
        },
        {
          "Eviction Address": "26 WEIRFIELD STREET",
          "Eviction Apartment Number": "TOP FLOOR",
          "Executed Date": "10/20/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.68673,
          "Longitude": -73.915388,
          "BIN": 3078472
        },
        {
          "Eviction Address": "849 FLUSHING AVENUE",
          "Eviction Apartment Number": "10I",
          "Executed Date": "2/2/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.701583,
          "Longitude": -73.938249,
          "BIN": 3338439
        },
        {
          "Eviction Address": "811 FLUSHING AVENUE",
          "Eviction Apartment Number": "20B",
          "Executed Date": "3/1/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.70117,
          "Longitude": -73.940049,
          "BIN": 3338432
        },
        {
          "Eviction Address": "86 COOPER STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "10/19/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.685845,
          "Longitude": -73.909234,
          "BIN": 3079912
        },
        {
          "Eviction Address": "140 JEFFERSON STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "1/11/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.700168,
          "Longitude": -73.930316,
          "BIN": 3072247
        },
        {
          "Eviction Address": "33 FURMAN AVE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "11/14/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.682209,
          "Longitude": -73.906971,
          "BIN": 3080387
        },
        {
          "Eviction Address": "1166 MADISON STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "5/25/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.693125,
          "Longitude": -73.914969,
          "BIN": 3323573
        },
        {
          "Eviction Address": "361 STAGG ST AKA 195",
          "Eviction Apartment Number": "SUITE 401",
          "Executed Date": "2/3/23",
          "Year": 2023,
          "Eviction Postcode": 11234,
          "Latitude": 40.710477,
          "Longitude": -73.934421,
          "BIN": 3070837
        },
        {
          "Eviction Address": "1402 BUSHWICK AVENUE",
          "Eviction Apartment Number": 1,
          "Executed Date": "8/24/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.684659,
          "Longitude": -73.909658,
          "BIN": 3079878
        },
        {
          "Eviction Address": "27 ARION PLACE",
          "Eviction Apartment Number": 202,
          "Executed Date": "5/13/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.698494,
          "Longitude": -73.936084,
          "BIN": 3326076
        },
        {
          "Eviction Address": "1182 PUTNAM AVE",
          "Eviction Apartment Number": "1B",
          "Executed Date": "6/23/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.690181,
          "Longitude": -73.916685,
          "BIN": 3077177
        },
        {
          "Eviction Address": "907 BROADWAY",
          "Eviction Apartment Number": 1,
          "Executed Date": "10/22/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.697745,
          "Longitude": -73.936593,
          "BIN": 3071872
        },
        {
          "Eviction Address": "1350 MYRTLE AVENUE",
          "Eviction Apartment Number": "1-A",
          "Executed Date": "11/21/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.698419,
          "Longitude": -73.922012,
          "BIN": 3394588
        },
        {
          "Eviction Address": "81 ELDERT STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "8/23/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.687318,
          "Longitude": -73.912495,
          "BIN": 3078780
        },
        {
          "Eviction Address": "1121 BROADWAY",
          "Eviction Apartment Number": "UNIT:&STORE 1",
          "Executed Date": "5/2/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.693725,
          "Longitude": -73.92945,
          "BIN": 3073758
        },
        {
          "Eviction Address": "184 SCHAEFER STREET",
          "Eviction Apartment Number": "APT 2L",
          "Executed Date": "10/2/23",
          "Year": 2023,
          "Eviction Postcode": 11236,
          "Latitude": 40.689579,
          "Longitude": -73.907906,
          "BIN": 3079493
        },
        {
          "Eviction Address": "654 EVERGREEN AVENUE",
          "Eviction Apartment Number": 1,
          "Executed Date": "11/2/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.688721,
          "Longitude": -73.912753,
          "BIN": 3422192
        },
        {
          "Eviction Address": "390 BUSHWICK AVENUE",
          "Eviction Apartment Number": "12D",
          "Executed Date": "5/7/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.703499,
          "Longitude": -73.937771,
          "BIN": 3338437
        },
        {
          "Eviction Address": "642 WILSON AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "11/20/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.689025,
          "Longitude": -73.90522,
          "BIN": 3080021
        },
        {
          "Eviction Address": "196 CORNELIA STREET  TOP FLOOR",
          "Eviction Apartment Number": "",
          "Executed Date": "6/7/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.692402,
          "Longitude": -73.913336,
          "BIN": 3077587
        },
        {
          "Eviction Address": "1287 BUSHWICK AVENUE",
          "Eviction Apartment Number": 3,
          "Executed Date": "11/29/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.686778,
          "Longitude": -73.913343,
          "BIN": 3078752
        },
        {
          "Eviction Address": "112 CENTRAL AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "6/10/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.700219,
          "Longitude": -73.928927,
          "BIN": 3072478
        },
        {
          "Eviction Address": "1104 BUSHWICK AVENUE AKA 42 WOODBINE STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "4/1/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.68995,
          "Longitude": -73.918954,
          "BIN": 3076719
        },
        {
          "Eviction Address": "1595 BROADWAY AKA 98 0 HALSEY ST APT 7-D",
          "Eviction Apartment Number": 704,
          "Executed Date": "7/10/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.685511,
          "Longitude": -73.915029,
          "BIN": 3326449
        },
        {
          "Eviction Address": "81 ELDERT STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "9/13/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.687318,
          "Longitude": -73.912495,
          "BIN": 3078780
        },
        {
          "Eviction Address": "1023 BROADWAY",
          "Eviction Apartment Number": "2Z",
          "Executed Date": "7/13/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.695594,
          "Longitude": -73.932759,
          "BIN": 3390846
        },
        {
          "Eviction Address": "138 WEIRFIELD STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "8/20/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.689575,
          "Longitude": -73.912597,
          "BIN": 3078560
        },
        {
          "Eviction Address": "946 BUSHWICK AVENUE",
          "Eviction Apartment Number": "F1",
          "Executed Date": "2/23/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.692522,
          "Longitude": -73.923498,
          "BIN": 3075292
        },
        {
          "Eviction Address": "1026 MADISON STREET",
          "Eviction Apartment Number": "1ST FLOOR",
          "Executed Date": "8/22/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.690215,
          "Longitude": -73.917828,
          "BIN": 3076969
        },
        {
          "Eviction Address": "643 CENTRAL AVENUE",
          "Eviction Apartment Number": "1-R",
          "Executed Date": "5/30/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.6878,
          "Longitude": -73.907061,
          "BIN": 3080003
        },
        {
          "Eviction Address": "116 GROVE STREET",
          "Eviction Apartment Number": 9,
          "Executed Date": "4/3/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.69356,
          "Longitude": -73.920399,
          "BIN": 3076083
        },
        {
          "Eviction Address": "210 COOK STREET",
          "Eviction Apartment Number": "UNIT: 306",
          "Executed Date": "2/7/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.703157,
          "Longitude": -73.934973,
          "BIN": 3071631
        },
        {
          "Eviction Address": "811 FLUSHING AVENUE",
          "Eviction Apartment Number": "10E",
          "Executed Date": "7/23/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.70117,
          "Longitude": -73.940049,
          "BIN": 3338432
        },
        {
          "Eviction Address": "20 COVERT STREET APT. 4L",
          "Eviction Apartment Number": "4L",
          "Executed Date": "4/26/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.6854,
          "Longitude": -73.91319,
          "BIN": 3079161
        },
        {
          "Eviction Address": "190 WILSON AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "4/11/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.699343,
          "Longitude": -73.923353,
          "BIN": 3325529
        },
        {
          "Eviction Address": "93-95 STOCKHOLM ST",
          "Eviction Apartment Number": "4C",
          "Executed Date": "8/13/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.697184,
          "Longitude": -73.925068,
          "BIN": 3073774
        },
        {
          "Eviction Address": "608 WILSON AVENUE",
          "Eviction Apartment Number": 1,
          "Executed Date": "10/9/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.68985,
          "Longitude": -73.906661,
          "BIN": 3388911
        },
        {
          "Eviction Address": "149 CENTRAL AVENUE",
          "Eviction Apartment Number": "1A",
          "Executed Date": "6/8/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.699326,
          "Longitude": -73.92732,
          "BIN": 3347837
        },
        {
          "Eviction Address": "925 BUSHWICK AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "8/8/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.692929,
          "Longitude": -73.924215,
          "BIN": 3075348
        },
        {
          "Eviction Address": "206 CORNELIA STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "10/30/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.692559,
          "Longitude": -73.913184,
          "BIN": 3077592
        },
        {
          "Eviction Address": "715 CHAUNCEY STREET",
          "Eviction Apartment Number": "ENTIRE GROUND FL A/K",
          "Executed Date": "10/5/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.684951,
          "Longitude": -73.907793,
          "BIN": 3080111
        },
        {
          "Eviction Address": "77 CEDAR ST AKA 1260  MYRTLE AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "3/1/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.697599,
          "Longitude": -73.92673,
          "BIN": 3073398
        },
        {
          "Eviction Address": "1157 GREENE AVENUE",
          "Eviction Apartment Number": "ENTIRE BUILDING",
          "Executed Date": "1/13/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.694846,
          "Longitude": -73.922684,
          "BIN": 3075061
        },
        {
          "Eviction Address": "182 SCHAEFER STREET",
          "Eviction Apartment Number": "ENTIRE TOP FLOOR",
          "Executed Date": "7/23/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.689538,
          "Longitude": -73.907949,
          "BIN": 3079492
        },
        {
          "Eviction Address": "24 HUMBOLDT STREET",
          "Eviction Apartment Number": "20D",
          "Executed Date": "8/20/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.702194,
          "Longitude": -73.9406,
          "BIN": 3338433
        },
        {
          "Eviction Address": "123 MELROSE STREET",
          "Eviction Apartment Number": 459,
          "Executed Date": "3/18/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.699546,
          "Longitude": -73.933007,
          "BIN": 3426367
        },
        {
          "Eviction Address": "1251 DEKALB AVE.",
          "Eviction Apartment Number": "3A",
          "Executed Date": "11/10/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.69668,
          "Longitude": -73.926739,
          "BIN": 3073506
        },
        {
          "Eviction Address": "1379 BUSHWICK AVENUE  APT. 3R",
          "Eviction Apartment Number": "3R",
          "Executed Date": "6/26/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.685118,
          "Longitude": -73.910432,
          "BIN": 3079654
        },
        {
          "Eviction Address": "1042 HALSEY STREET",
          "Eviction Apartment Number": "2ND FL",
          "Executed Date": "2/8/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.687555,
          "Longitude": -73.913411,
          "BIN": 3078764
        },
        {
          "Eviction Address": "1054 BUSHWICK AVENUE",
          "Eviction Apartment Number": "4-H",
          "Executed Date": "4/29/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.690829,
          "Longitude": -73.920503,
          "BIN": 3076413
        },
        {
          "Eviction Address": "390 BUSHWICK AVENUE",
          "Eviction Apartment Number": "03D",
          "Executed Date": "3/31/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.703499,
          "Longitude": -73.937771,
          "BIN": 3338437
        },
        {
          "Eviction Address": "233 CENTRAL AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "10/25/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.697018,
          "Longitude": -73.923262,
          "BIN": 3326343
        },
        {
          "Eviction Address": "231 ELDERT STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "1/12/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.690982,
          "Longitude": -73.908903,
          "BIN": 3078848
        },
        {
          "Eviction Address": "162 WEIRFIELD STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "3/9/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.689989,
          "Longitude": -73.912192,
          "BIN": 3078572
        },
        {
          "Eviction Address": "66 GRANITE STREET",
          "Eviction Apartment Number": "3RD,",
          "Executed Date": "11/13/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.683529,
          "Longitude": -73.906818,
          "BIN": 3080399
        },
        {
          "Eviction Address": "73 COOPER STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "7/12/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.685617,
          "Longitude": -73.909487,
          "BIN": 3390390
        },
        {
          "Eviction Address": "13 GARDEN STREET",
          "Eviction Apartment Number": "3B",
          "Executed Date": "1/25/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.701253,
          "Longitude": -73.937831,
          "BIN": 3071814
        },
        {
          "Eviction Address": "24 COVERT STREET",
          "Eviction Apartment Number": "4R",
          "Executed Date": "9/14/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.685485,
          "Longitude": -73.913107,
          "BIN": 3326316
        },
        {
          "Eviction Address": "849 FLUSHING AVENUE",
          "Eviction Apartment Number": "14D",
          "Executed Date": "12/8/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.701583,
          "Longitude": -73.938249,
          "BIN": 3338439
        },
        {
          "Eviction Address": "991 WILLOUGHBY AVE",
          "Eviction Apartment Number": "8C",
          "Executed Date": "4/30/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.698696,
          "Longitude": -73.929254,
          "BIN": 3414119
        },
        {
          "Eviction Address": "10 MONTIETH STREET",
          "Eviction Apartment Number": 534,
          "Executed Date": "10/30/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.701357,
          "Longitude": -73.936496,
          "BIN": 3426398
        },
        {
          "Eviction Address": "1225 JEFFERSON AVE",
          "Eviction Apartment Number": "#1",
          "Executed Date": "1/29/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.691066,
          "Longitude": -73.913504,
          "BIN": 3390360
        },
        {
          "Eviction Address": "361 STAGG STREET",
          "Eviction Apartment Number": "UNIT: SUITE 204",
          "Executed Date": "12/4/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.710477,
          "Longitude": -73.934421,
          "BIN": 3070837
        },
        {
          "Eviction Address": "1290 BUSHWICK AVENUE AKA 51 ELDERT STREET",
          "Eviction Apartment Number": 201,
          "Executed Date": "9/12/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.686709,
          "Longitude": -73.91326,
          "BIN": 3078737
        },
        {
          "Eviction Address": "1119 BROADWAY",
          "Eviction Apartment Number": "",
          "Executed Date": "4/18/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.69375,
          "Longitude": -73.929493,
          "BIN": 3427013
        },
        {
          "Eviction Address": "132 COOPER STREET",
          "Eviction Apartment Number": "ENTIRE 3RD FLOOR",
          "Executed Date": "3/22/24",
          "Year": 2024,
          "Eviction Postcode": 11207,
          "Latitude": 40.687142,
          "Longitude": -73.907963,
          "BIN": 3390395
        },
        {
          "Eviction Address": "943 WILLOUGHBY AVENU E",
          "Eviction Apartment Number": 1,
          "Executed Date": "5/12/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.697626,
          "Longitude": -73.931011,
          "BIN": 3072455
        },
        {
          "Eviction Address": "588 WILSON AVENUE",
          "Eviction Apartment Number": "1A",
          "Executed Date": "5/31/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.690342,
          "Longitude": -73.907526,
          "BIN": 3079272
        },
        {
          "Eviction Address": "594 BUSHWICK AVENUE",
          "Eviction Apartment Number": 205,
          "Executed Date": "7/7/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.6986,
          "Longitude": -73.934602,
          "BIN": 3072011
        },
        {
          "Eviction Address": "1110 BUSHWICK AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "10/13/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.68987,
          "Longitude": -73.918809,
          "BIN": 3076722
        },
        {
          "Eviction Address": "11B TROUTMAN STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "3/9/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.69745,
          "Longitude": -73.93368,
          "BIN": 3072185
        },
        {
          "Eviction Address": "1188 GREENE AVENUE",
          "Eviction Apartment Number": 1,
          "Executed Date": "9/19/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.695003,
          "Longitude": -73.922503,
          "BIN": 3075365
        },
        {
          "Eviction Address": "811 FLUSHING AVENUE",
          "Eviction Apartment Number": "06H",
          "Executed Date": "5/19/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.70117,
          "Longitude": -73.940049,
          "BIN": 3338432
        },
        {
          "Eviction Address": "131 ELDERT STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "8/23/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.688563,
          "Longitude": -73.911275,
          "BIN": 3078811
        },
        {
          "Eviction Address": "459 CENTRAL AVENUE",
          "Eviction Apartment Number": "1 AND 2,ENTIRE DWELL",
          "Executed Date": "3/27/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.691909,
          "Longitude": -73.914281,
          "BIN": 3378356
        },
        {
          "Eviction Address": "120 HUMBOLDT STREET",
          "Eviction Apartment Number": "2E",
          "Executed Date": "11/21/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.705301,
          "Longitude": -73.941138,
          "BIN": 3071361
        },
        {
          "Eviction Address": "1172 GREENE AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "3/31/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.694734,
          "Longitude": -73.922767,
          "BIN": 3075358
        },
        {
          "Eviction Address": "880 WILLOUGHBY AVENUE A/K/A 1013 BROADWAY AVENUE - SPACE ON GROUND FL/STREET LEVEL FL & BASEMENT STO",
          "Eviction Apartment Number": "",
          "Executed Date": "2/10/20",
          "Year": 2020,
          "Eviction Postcode": 11221,
          "Latitude": 40.695978,
          "Longitude": -73.93292,
          "BIN": 3072828
        },
        {
          "Eviction Address": "69 GRANITE STREET",
          "Eviction Apartment Number": "4F",
          "Executed Date": "2/9/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.683595,
          "Longitude": -73.906782,
          "BIN": 3080364
        },
        {
          "Eviction Address": "247 MONTROSE AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "5/10/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.707754,
          "Longitude": -73.938892,
          "BIN": 3071179
        },
        {
          "Eviction Address": "200 MAUJER STREET",
          "Eviction Apartment Number": "04B",
          "Executed Date": "6/5/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.711095,
          "Longitude": -73.941645,
          "BIN": 3338398
        },
        {
          "Eviction Address": "1079 HANCOCK ST.",
          "Eviction Apartment Number": "2ND FL.",
          "Executed Date": "9/27/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.688942,
          "Longitude": -73.914415,
          "BIN": 3077863
        },
        {
          "Eviction Address": "60 CENTRAL AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "5/31/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.701373,
          "Longitude": -73.930964,
          "BIN": 3400618
        },
        {
          "Eviction Address": "340 EVERGREEN AVENUE",
          "Eviction Apartment Number": "B27",
          "Executed Date": "11/17/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.694752,
          "Longitude": -73.924833,
          "BIN": 3400818
        },
        {
          "Eviction Address": "1002 BUSHWICK AVENUE",
          "Eviction Apartment Number": "3A",
          "Executed Date": "7/12/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.691722,
          "Longitude": -73.922067,
          "BIN": 3076033
        },
        {
          "Eviction Address": "822 BROADWAY",
          "Eviction Apartment Number": "CERTAIN GROUND FL,BA",
          "Executed Date": "3/13/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.699308,
          "Longitude": -73.93943,
          "BIN": 3042837
        },
        {
          "Eviction Address": "907 BROADWAY",
          "Eviction Apartment Number": 1,
          "Executed Date": "9/14/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.697745,
          "Longitude": -73.936593,
          "BIN": 3071872
        },
        {
          "Eviction Address": "24 HUMBOLDT STREET",
          "Eviction Apartment Number": "06G",
          "Executed Date": "2/2/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.702194,
          "Longitude": -73.9406,
          "BIN": 3338433
        },
        {
          "Eviction Address": "754 BUSHWICK AVE. APT. 2",
          "Eviction Apartment Number": 2,
          "Executed Date": "11/14/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.695751,
          "Longitude": -73.929441,
          "BIN": 3073426
        },
        {
          "Eviction Address": "250 MELROSE STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "1/26/18",
          "Year": 2018,
          "Eviction Postcode": 11211,
          "Latitude": 40.701748,
          "Longitude": -73.929954,
          "BIN": 3072062
        },
        {
          "Eviction Address": "681 EVERGREEN AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "6/21/22",
          "Year": 2022,
          "Eviction Postcode": 11201,
          "Latitude": 40.68675,
          "Longitude": -73.909254,
          "BIN": 3079694
        },
        {
          "Eviction Address": "107 LINDEN STREET",
          "Eviction Apartment Number": "B1",
          "Executed Date": "6/21/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.693041,
          "Longitude": -73.919765,
          "BIN": 3076112
        },
        {
          "Eviction Address": "73 STANHOPE STREET",
          "Eviction Apartment Number": "2ND ROOM FROM THE",
          "Executed Date": "7/17/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.696374,
          "Longitude": -73.924698,
          "BIN": 3074084
        },
        {
          "Eviction Address": "386 EVERGREEN AVENUE",
          "Eviction Apartment Number": "2ND FL APT",
          "Executed Date": "6/7/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.693798,
          "Longitude": -73.923161,
          "BIN": 3075334
        },
        {
          "Eviction Address": "10 MONTIETH STREET",
          "Eviction Apartment Number": 360,
          "Executed Date": "11/8/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.701357,
          "Longitude": -73.936496,
          "BIN": 3426398
        },
        {
          "Eviction Address": "621 BUSHWICK AVENUE",
          "Eviction Apartment Number": "1R",
          "Executed Date": "8/16/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.698075,
          "Longitude": -73.933625,
          "BIN": 3414349
        },
        {
          "Eviction Address": "1141 GREENE AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "2/18/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.694577,
          "Longitude": -73.922947,
          "BIN": 3075066
        },
        {
          "Eviction Address": "1023 BROADWAY",
          "Eviction Apartment Number": "4-Z",
          "Executed Date": "10/11/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.695594,
          "Longitude": -73.932759,
          "BIN": 3390846
        },
        {
          "Eviction Address": "1035 HALSEY STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "9/11/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.687454,
          "Longitude": -73.913537,
          "BIN": 3078552
        },
        {
          "Eviction Address": "1198 BUSHWICK AVENUE",
          "Eviction Apartment Number": "1 (1ST FLOOR)",
          "Executed Date": "11/17/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.68829,
          "Longitude": -73.916038,
          "BIN": 3077807
        },
        {
          "Eviction Address": "998 BUSHWICK AVENUE",
          "Eviction Apartment Number": "4L",
          "Executed Date": "9/6/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.691876,
          "Longitude": -73.922337,
          "BIN": 3075303
        },
        {
          "Eviction Address": "36 DITMARS STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "11/28/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.696972,
          "Longitude": -73.933082,
          "BIN": 3072680
        },
        {
          "Eviction Address": "148 BLEECKER STREET",
          "Eviction Apartment Number": "2C",
          "Executed Date": "2/14/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.69625,
          "Longitude": -73.920104,
          "BIN": 3325707
        },
        {
          "Eviction Address": "28 STARR STREET",
          "Eviction Apartment Number": "3F",
          "Executed Date": "11/22/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.700635,
          "Longitude": -73.92751,
          "BIN": 3426432
        },
        {
          "Eviction Address": "1244 PUTNAM AVE",
          "Eviction Apartment Number": "1FL",
          "Executed Date": "10/17/17",
          "Year": 2017,
          "Eviction Postcode": 11224,
          "Latitude": 40.691665,
          "Longitude": -73.91523,
          "BIN": 3077218
        },
        {
          "Eviction Address": "143 HIMROD STREET",
          "Eviction Apartment Number": "2P",
          "Executed Date": "1/11/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.697278,
          "Longitude": -73.922638,
          "BIN": 3393892
        },
        {
          "Eviction Address": "1116 BUSHWICK AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "1/28/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.689788,
          "Longitude": -73.918665,
          "BIN": 3076725
        },
        {
          "Eviction Address": "725 EVERGREEN AVENUE",
          "Eviction Apartment Number": "GA",
          "Executed Date": "9/28/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.685799,
          "Longitude": -73.907583,
          "BIN": 3080124
        },
        {
          "Eviction Address": "112 CENTRAL AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "6/10/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.700219,
          "Longitude": -73.928927,
          "BIN": 3072478
        },
        {
          "Eviction Address": "165 MESEROLE STREET",
          "Eviction Apartment Number": 4,
          "Executed Date": "6/7/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.708156,
          "Longitude": -73.942521,
          "BIN": 3070999
        },
        {
          "Eviction Address": "43 CENTRAL AVENUE",
          "Eviction Apartment Number": "5J",
          "Executed Date": "3/29/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.701796,
          "Longitude": -73.931663,
          "BIN": 3387566
        },
        {
          "Eviction Address": "894 BUSHWICK AVENUE",
          "Eviction Apartment Number": "1A",
          "Executed Date": "7/26/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.693489,
          "Longitude": -73.925289,
          "BIN": 3074661
        },
        {
          "Eviction Address": "1028 BUSHWICK AVE A/K/A 44 LINDEN ST",
          "Eviction Apartment Number": "6H",
          "Executed Date": "11/30/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.691283,
          "Longitude": -73.921303,
          "BIN": 3076223
        },
        {
          "Eviction Address": "13 MARCUS GARVEY BOULEVARD- GROUND FL",
          "Eviction Apartment Number": "",
          "Executed Date": "8/22/22",
          "Year": 2022,
          "Eviction Postcode": 11206,
          "Latitude": 40.699455,
          "Longitude": -73.941331,
          "BIN": 3337950
        },
        {
          "Eviction Address": "91 BEAVER STREET",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "8/25/23",
          "Year": 2023,
          "Eviction Postcode": 11208,
          "Latitude": 40.699251,
          "Longitude": -73.935885,
          "BIN": 3342192
        },
        {
          "Eviction Address": "140 WILSON AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "6/19/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.700623,
          "Longitude": -73.925595,
          "BIN": 3072912
        },
        {
          "Eviction Address": "41 BELVIDERE STREET 4TH FLOOR",
          "Eviction Apartment Number": "",
          "Executed Date": "8/20/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.69912,
          "Longitude": -73.936506,
          "BIN": 3071774
        },
        {
          "Eviction Address": "29 GRANITE STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "5/3/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.682561,
          "Longitude": -73.907793,
          "BIN": 3393241
        },
        {
          "Eviction Address": "1307 BUSHWICK AVE.",
          "Eviction Apartment Number": "A",
          "Executed Date": "8/3/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.686404,
          "Longitude": -73.912684,
          "BIN": 3078996
        },
        {
          "Eviction Address": "131 MOORE STREET",
          "Eviction Apartment Number": "08B",
          "Executed Date": "4/24/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.70395,
          "Longitude": -73.940454,
          "BIN": 3071469
        },
        {
          "Eviction Address": "222 STAGG WALK",
          "Eviction Apartment Number": "04C",
          "Executed Date": "7/2/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.709802,
          "Longitude": -73.940326,
          "BIN": 3344998
        },
        {
          "Eviction Address": "1158 HALSEY STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "2/25/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.690487,
          "Longitude": -73.910533,
          "BIN": 3078823
        },
        {
          "Eviction Address": "186 SUYDAM STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "5/17/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.699888,
          "Longitude": -73.925906,
          "BIN": 3073128
        },
        {
          "Eviction Address": "107 LINDEN STREET",
          "Eviction Apartment Number": "B1",
          "Executed Date": "6/21/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.693041,
          "Longitude": -73.919765,
          "BIN": 3076112
        },
        {
          "Eviction Address": "60 JEFFERSON STREET",
          "Eviction Apartment Number": "3B",
          "Executed Date": "2/15/23",
          "Year": 2023,
          "Eviction Postcode": 11215,
          "Latitude": 40.698786,
          "Longitude": -73.932892,
          "BIN": 3072202
        },
        {
          "Eviction Address": "946 BUSHWICK AVENUE",
          "Eviction Apartment Number": "B9",
          "Executed Date": "4/3/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.692522,
          "Longitude": -73.923498,
          "BIN": 3075292
        },
        {
          "Eviction Address": "73 LINDEN STREET",
          "Eviction Apartment Number": 11,
          "Executed Date": "6/26/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.691903,
          "Longitude": -73.920888,
          "BIN": 3076073
        },
        {
          "Eviction Address": "106 LINDEN STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "8/3/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.693164,
          "Longitude": -73.91962,
          "BIN": 3342294
        },
        {
          "Eviction Address": "63 HIMROD STREET APT. 3-R",
          "Eviction Apartment Number": "3-R",
          "Executed Date": "8/10/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.695558,
          "Longitude": -73.924324,
          "BIN": 3074410
        },
        {
          "Eviction Address": "114 VANDERVEER STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "7/10/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.682365,
          "Longitude": -73.90329,
          "BIN": 3350499
        },
        {
          "Eviction Address": "879 PARK AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "9/30/22",
          "Year": 2022,
          "Eviction Postcode": 11206,
          "Latitude": 40.698691,
          "Longitude": -73.939961,
          "BIN": 3042847
        },
        {
          "Eviction Address": "211 JOHNSON AVENUE",
          "Eviction Apartment Number": "2L",
          "Executed Date": "6/12/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.706797,
          "Longitude": -73.941075,
          "BIN": 3327959
        },
        {
          "Eviction Address": "1116 BUSHWICK AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "1/28/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.689788,
          "Longitude": -73.918665,
          "BIN": 3076725
        },
        {
          "Eviction Address": "90 HARMAN STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "6/14/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.69556,
          "Longitude": -73.923126,
          "BIN": 3075026
        },
        {
          "Eviction Address": "1092 BUSHWICK AVE",
          "Eviction Apartment Number": "",
          "Executed Date": "10/3/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.690214,
          "Longitude": -73.919418,
          "BIN": 3076536
        },
        {
          "Eviction Address": "715 CHAUNCEY STREET",
          "Eviction Apartment Number": "FIRST FLOOR",
          "Executed Date": "10/5/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.684951,
          "Longitude": -73.907793,
          "BIN": 3080111
        },
        {
          "Eviction Address": "72 GRANITE STREET",
          "Eviction Apartment Number": "2ND FLOOR",
          "Executed Date": "1/10/20",
          "Year": 2020,
          "Eviction Postcode": 11207,
          "Latitude": 40.683611,
          "Longitude": -73.906738,
          "BIN": 3080402
        },
        {
          "Eviction Address": "165 SCHAEFER STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "11/4/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.689094,
          "Longitude": -73.908411,
          "BIN": 3079252
        },
        {
          "Eviction Address": "1230 BUSHWICK AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "3/1/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.687729,
          "Longitude": -73.915048,
          "BIN": 3078166
        },
        {
          "Eviction Address": "67 STANHOPE STREET",
          "Eviction Apartment Number": "3B",
          "Executed Date": "8/11/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.696256,
          "Longitude": -73.924813,
          "BIN": 3074087
        },
        {
          "Eviction Address": "27 ARION PLACE",
          "Eviction Apartment Number": 305,
          "Executed Date": "1/13/20",
          "Year": 2020,
          "Eviction Postcode": 11206,
          "Latitude": 40.698494,
          "Longitude": -73.936084,
          "BIN": 3326076
        },
        {
          "Eviction Address": "211 JOHNSON AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "1/17/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.706797,
          "Longitude": -73.941075,
          "BIN": 3327959
        },
        {
          "Eviction Address": "1388 BUSHWICK AVENUE",
          "Eviction Apartment Number": "2ND FLOOR",
          "Executed Date": "8/1/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.684868,
          "Longitude": -73.910025,
          "BIN": 3338507
        },
        {
          "Eviction Address": "36 LINDEN STREET",
          "Eviction Apartment Number": "1B",
          "Executed Date": "5/10/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.690874,
          "Longitude": -73.921866,
          "BIN": 3076222
        },
        {
          "Eviction Address": "1379 BUSHWICK AVENUE  APT. 3R",
          "Eviction Apartment Number": "3R",
          "Executed Date": "6/26/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.685118,
          "Longitude": -73.910432,
          "BIN": 3079654
        },
        {
          "Eviction Address": "769 CHAUNCEY STREET",
          "Eviction Apartment Number": "UNIT: WAREHOUSE",
          "Executed Date": "7/1/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.686323,
          "Longitude": -73.906453,
          "BIN": 3080147
        },
        {
          "Eviction Address": "1081 HANCOCK STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "4/19/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.688977,
          "Longitude": -73.914383,
          "BIN": 3077862
        },
        {
          "Eviction Address": "1017 HALSEY STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "10/4/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.686721,
          "Longitude": -73.914256,
          "BIN": 3390365
        },
        {
          "Eviction Address": "22 COVERT STREET",
          "Eviction Apartment Number": "4L",
          "Executed Date": "12/2/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.685441,
          "Longitude": -73.913147,
          "BIN": 3079162
        },
        {
          "Eviction Address": "1595 BROADWAY A/K/A 980 HALSEY STREET",
          "Eviction Apartment Number": 303,
          "Executed Date": "3/17/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.685511,
          "Longitude": -73.915029,
          "BIN": 3326449
        },
        {
          "Eviction Address": "1104 BUSHWICK AVENUE AKA 42 WOODBINE STREET",
          "Eviction Apartment Number": "2-L",
          "Executed Date": "9/11/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.68995,
          "Longitude": -73.918954,
          "BIN": 3076719
        },
        {
          "Eviction Address": "180 MESEROLE STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "9/27/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.70817,
          "Longitude": -73.942185,
          "BIN": 3071141
        },
        {
          "Eviction Address": "1019 HANCOCK STREET",
          "Eviction Apartment Number": "REAR ROOM",
          "Executed Date": "3/24/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.687505,
          "Longitude": -73.915827,
          "BIN": 3077817
        },
        {
          "Eviction Address": "954 MADISON STREET",
          "Eviction Apartment Number": "UNIT 1",
          "Executed Date": "9/8/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.688624,
          "Longitude": -73.919392,
          "BIN": 3076924
        },
        {
          "Eviction Address": "1157 GREENE AVENUE",
          "Eviction Apartment Number": "ENTIRE BUILDING",
          "Executed Date": "1/13/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.694846,
          "Longitude": -73.922684,
          "BIN": 3075061
        },
        {
          "Eviction Address": "1085 WILLOUGHBY AVEN UE",
          "Eviction Apartment Number": 103,
          "Executed Date": "9/18/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.700481,
          "Longitude": -73.926522,
          "BIN": 3072713
        },
        {
          "Eviction Address": "255 MCKIBBIN STREET",
          "Eviction Apartment Number": 208,
          "Executed Date": "12/14/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.705656,
          "Longitude": -73.937397,
          "BIN": 3071385
        },
        {
          "Eviction Address": "946 BUSHWICK AVENUE",
          "Eviction Apartment Number": "F1",
          "Executed Date": "2/23/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.692522,
          "Longitude": -73.923498,
          "BIN": 3075292
        },
        {
          "Eviction Address": "183 ELDERT STREET",
          "Eviction Apartment Number": "1-L",
          "Executed Date": "12/4/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.690064,
          "Longitude": -73.909805,
          "BIN": 3078855
        },
        {
          "Eviction Address": "663 CENTRAL AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "8/23/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.687363,
          "Longitude": -73.906293,
          "BIN": 3080153
        },
        {
          "Eviction Address": "1281 JEFFERSON AVE",
          "Eviction Apartment Number": "ENTIRE 2ND FLOOR",
          "Executed Date": "9/5/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.692305,
          "Longitude": -73.91229,
          "BIN": 3077604
        },
        {
          "Eviction Address": "39 BEAVER STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "3/19/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.700375,
          "Longitude": -73.937965,
          "BIN": 3071717
        },
        {
          "Eviction Address": "1471 BUSHWICK AVENUE",
          "Eviction Apartment Number": "1R",
          "Executed Date": "4/4/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.683466,
          "Longitude": -73.907521,
          "BIN": 3413851
        },
        {
          "Eviction Address": "166 BLEECKER STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "5/1/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.69656,
          "Longitude": -73.9198,
          "BIN": 3075649
        },
        {
          "Eviction Address": "1144 BUSHWICK AVENUE",
          "Eviction Apartment Number": "4B",
          "Executed Date": "2/20/20",
          "Year": 2020,
          "Eviction Postcode": 11221,
          "Latitude": 40.689304,
          "Longitude": -73.917815,
          "BIN": 3076943
        },
        {
          "Eviction Address": "1209 BUSHWICK AVENUE",
          "Eviction Apartment Number": "2G",
          "Executed Date": "2/6/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.688141,
          "Longitude": -73.915739,
          "BIN": 3077833
        },
        {
          "Eviction Address": "123 MELROSE STREET",
          "Eviction Apartment Number": "APT 228",
          "Executed Date": "5/10/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.699546,
          "Longitude": -73.933007,
          "BIN": 3426367
        },
        {
          "Eviction Address": "1132 JEFFERSON AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "8/15/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.689247,
          "Longitude": -73.915266,
          "BIN": 3077853
        },
        {
          "Eviction Address": "591 HART STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "3/23/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.697526,
          "Longitude": -73.928306,
          "BIN": 3394516
        },
        {
          "Eviction Address": "52 WILSON AVENUE AKA 284 MELROSE",
          "Eviction Apartment Number": 208,
          "Executed Date": "6/11/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.702549,
          "Longitude": -73.928986,
          "BIN": 3072069
        },
        {
          "Eviction Address": "1209 DEKALB AVENUE",
          "Eviction Apartment Number": 105,
          "Executed Date": "7/23/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.695599,
          "Longitude": -73.927796,
          "BIN": 3421997
        },
        {
          "Eviction Address": "740 CHAUNCEY STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "3/29/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.685777,
          "Longitude": -73.906959,
          "BIN": 3080279
        },
        {
          "Eviction Address": "1286 JEFFERSON AVE",
          "Eviction Apartment Number": 1,
          "Executed Date": "12/9/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.692355,
          "Longitude": -73.912215,
          "BIN": 3077943
        },
        {
          "Eviction Address": "1223 HANCOCK STREET APT 3",
          "Eviction Apartment Number": 3,
          "Executed Date": "8/24/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.691934,
          "Longitude": -73.911483,
          "BIN": 3077950
        },
        {
          "Eviction Address": "170-172 LINDEN ST.",
          "Eviction Apartment Number": "3E",
          "Executed Date": "4/19/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.694862,
          "Longitude": -73.917952,
          "BIN": 3076285
        },
        {
          "Eviction Address": "51 COVERT STREET",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "4/29/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.686388,
          "Longitude": -73.912244,
          "BIN": 3389126
        },
        {
          "Eviction Address": "27 BLEECKER STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "4/26/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.693312,
          "Longitude": -73.923014,
          "BIN": 3075338
        },
        {
          "Eviction Address": "15 LAWTON STREET",
          "Eviction Apartment Number": 34,
          "Executed Date": "11/27/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.695189,
          "Longitude": -73.930675,
          "BIN": 3326299
        },
        {
          "Eviction Address": "1196 DECATUR STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "8/27/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.688901,
          "Longitude": -73.907402,
          "BIN": 3079739
        },
        {
          "Eviction Address": "143 WOODBINE STREET",
          "Eviction Apartment Number": "1F",
          "Executed Date": "1/18/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.692509,
          "Longitude": -73.916772,
          "BIN": 3076596
        },
        {
          "Eviction Address": "869 FLUSHING AVENUE",
          "Eviction Apartment Number": "04F",
          "Executed Date": "12/8/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.701824,
          "Longitude": -73.93734,
          "BIN": 3338438
        },
        {
          "Eviction Address": "1015 HANCOCK STREET",
          "Eviction Apartment Number": "3RD FLOOR",
          "Executed Date": "10/12/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.687442,
          "Longitude": -73.915888,
          "BIN": 3077818
        },
        {
          "Eviction Address": "2 STANWIX STREET",
          "Eviction Apartment Number": "1-R",
          "Executed Date": "3/6/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.698155,
          "Longitude": -73.933701,
          "BIN": 3072193
        },
        {
          "Eviction Address": "1188 MADISON ST.",
          "Eviction Apartment Number": "",
          "Executed Date": "4/19/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.693441,
          "Longitude": -73.914662,
          "BIN": 3323584
        },
        {
          "Eviction Address": "72 HIMROD STREET",
          "Eviction Apartment Number": "2F",
          "Executed Date": "8/2/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.695725,
          "Longitude": -73.924132,
          "BIN": 3074700
        },
        {
          "Eviction Address": "29 JEFFERSON STREET",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "1/25/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.697705,
          "Longitude": -73.934542,
          "BIN": 3388648
        },
        {
          "Eviction Address": "719 CHAUNCEY STREET",
          "Eviction Apartment Number": "1 ROOM #3",
          "Executed Date": "11/15/19",
          "Year": 2019,
          "Eviction Postcode": 11203,
          "Latitude": 40.685023,
          "Longitude": -73.907724,
          "BIN": 3080109
        },
        {
          "Eviction Address": "182 WILSON AVENUE",
          "Eviction Apartment Number": "3-LEFT",
          "Executed Date": "12/6/23",
          "Year": 2023,
          "Eviction Postcode": 11237,
          "Latitude": 40.699516,
          "Longitude": -73.923652,
          "BIN": 3073802
        },
        {
          "Eviction Address": "129 SCHAEFER STREET",
          "Eviction Apartment Number": "1ST FLOOR",
          "Executed Date": "11/1/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.688032,
          "Longitude": -73.909458,
          "BIN": 3000000
        },
        {
          "Eviction Address": "1223 BUSHWICK AVENUE",
          "Eviction Apartment Number": "6A",
          "Executed Date": "1/3/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.68785,
          "Longitude": -73.915228,
          "BIN": 3078193
        },
        {
          "Eviction Address": "340 EVERGREEN   AVEN UE A/K/A 20 HIMROD STREET",
          "Eviction Apartment Number": "B05",
          "Executed Date": "2/26/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.694752,
          "Longitude": -73.924833,
          "BIN": 3400818
        },
        {
          "Eviction Address": "466 CENTRAL AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "8/24/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.692261,
          "Longitude": -73.914941,
          "BIN": 3077031
        },
        {
          "Eviction Address": "1269 BROADWAY UNIT 2F",
          "Eviction Apartment Number": "UNIT 2F",
          "Executed Date": "6/12/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.691098,
          "Longitude": -73.924848,
          "BIN": 3075274
        },
        {
          "Eviction Address": "715 CHAUNCEY STREET",
          "Eviction Apartment Number": "ENTIRE GROUND FL A/K",
          "Executed Date": "10/5/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.684951,
          "Longitude": -73.907793,
          "BIN": 3080111
        },
        {
          "Eviction Address": "176 LINDEN STREET",
          "Eviction Apartment Number": "1B",
          "Executed Date": "2/28/20",
          "Year": 2020,
          "Eviction Postcode": 11221,
          "Latitude": 40.694986,
          "Longitude": -73.917833,
          "BIN": 3076286
        },
        {
          "Eviction Address": "32 SCHAEFER STREET",
          "Eviction Apartment Number": "ENTIRE HOUSE",
          "Executed Date": "2/27/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.685229,
          "Longitude": -73.912177,
          "BIN": 3079405
        },
        {
          "Eviction Address": "131 MOORE STREET",
          "Eviction Apartment Number": "08A",
          "Executed Date": "6/16/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.70395,
          "Longitude": -73.940454,
          "BIN": 3071469
        },
        {
          "Eviction Address": "1496 BUSHWICK AVENUE",
          "Eviction Apartment Number": "APT 1L  BASEMENT",
          "Executed Date": "4/17/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.682996,
          "Longitude": -73.906732,
          "BIN": 3080378
        },
        {
          "Eviction Address": "754 BUSHWICK AVE. APT. 2",
          "Eviction Apartment Number": 2,
          "Executed Date": "11/14/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.695751,
          "Longitude": -73.929441,
          "BIN": 3073426
        },
        {
          "Eviction Address": "1113 JEFFERSON AVE.",
          "Eviction Apartment Number": "1B",
          "Executed Date": "9/4/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.689033,
          "Longitude": -73.9155,
          "BIN": 3077521
        },
        {
          "Eviction Address": "75 WOODBINE STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "3/19/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.690836,
          "Longitude": -73.918419,
          "BIN": 3076571
        },
        {
          "Eviction Address": "54 NOLL STREET",
          "Eviction Apartment Number": 834,
          "Executed Date": "11/25/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.700554,
          "Longitude": -73.934214,
          "BIN": 3418158
        },
        {
          "Eviction Address": "31 ELDERT STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "7/12/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.685999,
          "Longitude": -73.913791,
          "BIN": 3078745
        },
        {
          "Eviction Address": "87 MELROSE STREET",
          "Eviction Apartment Number": "3A",
          "Executed Date": "4/7/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.699072,
          "Longitude": -73.934122,
          "BIN": 3396904
        },
        {
          "Eviction Address": "196 CORNELIA STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "1/10/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.692402,
          "Longitude": -73.913336,
          "BIN": 3077587
        },
        {
          "Eviction Address": "998 BUSHWICK AVENUE",
          "Eviction Apartment Number": "4L",
          "Executed Date": "9/6/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.691876,
          "Longitude": -73.922337,
          "BIN": 3075303
        },
        {
          "Eviction Address": "1122 MADISON STREET",
          "Eviction Apartment Number": "4A",
          "Executed Date": "7/11/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.692078,
          "Longitude": -73.916001,
          "BIN": 3077024
        },
        {
          "Eviction Address": "810 FLUSHING AVE",
          "Eviction Apartment Number": "4-G",
          "Executed Date": "2/26/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.701211,
          "Longitude": -73.939775,
          "BIN": 3000000
        },
        {
          "Eviction Address": "1179 GATES AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "5/31/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.691773,
          "Longitude": -73.919842,
          "BIN": 3390308
        },
        {
          "Eviction Address": "1013 BROADWAY",
          "Eviction Apartment Number": "2B",
          "Executed Date": "11/30/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.695734,
          "Longitude": -73.933,
          "BIN": 3072828
        },
        {
          "Eviction Address": "946 BUSHWICK AVENUE",
          "Eviction Apartment Number": "F1",
          "Executed Date": "2/23/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.692522,
          "Longitude": -73.923498,
          "BIN": 3075292
        },
        {
          "Eviction Address": "93 ELDERT STREET",
          "Eviction Apartment Number": "THIRD FL UNIT",
          "Executed Date": "10/2/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.68754,
          "Longitude": -73.912279,
          "BIN": 3078779
        },
        {
          "Eviction Address": "1114 GATES AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "11/20/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.690366,
          "Longitude": -73.921196,
          "BIN": 3076410
        },
        {
          "Eviction Address": "854-856 FLUSHING AVE NUE",
          "Eviction Apartment Number": "GROUND FLR STORE &",
          "Executed Date": "10/24/17",
          "Year": 2017,
          "Eviction Postcode": 11216,
          "Latitude": 40.701706,
          "Longitude": -73.937722,
          "BIN": 3071817
        },
        {
          "Eviction Address": "225 CENTRAL AVENUE",
          "Eviction Apartment Number": "1 (REAR)",
          "Executed Date": "7/15/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.697166,
          "Longitude": -73.923525,
          "BIN": 3074418
        },
        {
          "Eviction Address": "142 GROVE STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "9/9/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.694079,
          "Longitude": -73.919893,
          "BIN": 3076090
        },
        {
          "Eviction Address": "1342 BUSHWICK AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "10/7/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.685698,
          "Longitude": -73.911481,
          "BIN": 3079410
        },
        {
          "Eviction Address": "575 CENTRAL AVENUE",
          "Eviction Apartment Number": 104,
          "Executed Date": "10/26/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.689408,
          "Longitude": -73.909889,
          "BIN": 3392663
        },
        {
          "Eviction Address": "890 FLUSHING AVENUE",
          "Eviction Apartment Number": 23,
          "Executed Date": "1/16/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.702087,
          "Longitude": -73.936225,
          "BIN": 3071834
        },
        {
          "Eviction Address": "156 CENTRAL AVENUE",
          "Eviction Apartment Number": "1ST FLOOR",
          "Executed Date": "12/15/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.699452,
          "Longitude": -73.927576,
          "BIN": 3348124
        },
        {
          "Eviction Address": "10 GOODWIN PLACE",
          "Eviction Apartment Number": "4B",
          "Executed Date": "11/1/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.691921,
          "Longitude": -73.924414,
          "BIN": 3390300
        },
        {
          "Eviction Address": "187 ELDERT STREET",
          "Eviction Apartment Number": "1A",
          "Executed Date": "8/6/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.69014,
          "Longitude": -73.909729,
          "BIN": 3078854
        },
        {
          "Eviction Address": "67 STANHOPE STREET",
          "Eviction Apartment Number": "1A",
          "Executed Date": "5/23/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.696256,
          "Longitude": -73.924813,
          "BIN": 3074087
        },
        {
          "Eviction Address": "31 ELDERT STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "7/12/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.685999,
          "Longitude": -73.913791,
          "BIN": 3078745
        },
        {
          "Eviction Address": "12 BLEECKER STREET",
          "Eviction Apartment Number": "4-A",
          "Executed Date": "3/15/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.692972,
          "Longitude": -73.92332,
          "BIN": 3075584
        },
        {
          "Eviction Address": "31 CEDAR STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "7/27/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.696513,
          "Longitude": -73.928499,
          "BIN": 3073382
        },
        {
          "Eviction Address": "108 COOPER ST",
          "Eviction Apartment Number": "3-L",
          "Executed Date": "2/14/24",
          "Year": 2024,
          "Eviction Postcode": 11207,
          "Latitude": 40.686662,
          "Longitude": -73.908436,
          "BIN": 3079946
        },
        {
          "Eviction Address": "1061 JEFFERSON AVE",
          "Eviction Apartment Number": "2ND FLOOR",
          "Executed Date": "11/7/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.68784,
          "Longitude": -73.91667,
          "BIN": 3077464
        },
        {
          "Eviction Address": "1185 GATES AVENUE",
          "Eviction Apartment Number": "3A",
          "Executed Date": "11/22/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.691872,
          "Longitude": -73.919745,
          "BIN": 3076250
        },
        {
          "Eviction Address": "1225 HANCOCK STREET",
          "Eviction Apartment Number": "APT 1",
          "Executed Date": "6/27/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.691964,
          "Longitude": -73.911454,
          "BIN": 3077949
        },
        {
          "Eviction Address": "1147 HANCOCK STREET",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "7/5/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.690401,
          "Longitude": -73.912989,
          "BIN": 3077903
        },
        {
          "Eviction Address": "1189 HALSEY STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "2/19/20",
          "Year": 2020,
          "Eviction Postcode": 11207,
          "Latitude": 40.691038,
          "Longitude": -73.91002,
          "BIN": 3078637
        },
        {
          "Eviction Address": "917 BROADWAY",
          "Eviction Apartment Number": "3R",
          "Executed Date": "6/18/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.697561,
          "Longitude": -73.936273,
          "BIN": 3071868
        },
        {
          "Eviction Address": "114 VANDERVEER STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "7/10/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.682365,
          "Longitude": -73.90329,
          "BIN": 3350499
        },
        {
          "Eviction Address": "917 BROADWAY",
          "Eviction Apartment Number": "3R",
          "Executed Date": "2/6/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.697561,
          "Longitude": -73.936273,
          "BIN": 3071868
        },
        {
          "Eviction Address": "67 STANHOPE STREET",
          "Eviction Apartment Number": "3B",
          "Executed Date": "8/11/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.696256,
          "Longitude": -73.924813,
          "BIN": 3074087
        },
        {
          "Eviction Address": "1013 BROADWAY",
          "Eviction Apartment Number": "3I",
          "Executed Date": "8/30/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.695734,
          "Longitude": -73.933,
          "BIN": 3072828
        },
        {
          "Eviction Address": "1137 GREENE AVENUE",
          "Eviction Apartment Number": "1R",
          "Executed Date": "10/23/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.694509,
          "Longitude": -73.923012,
          "BIN": 3075067
        },
        {
          "Eviction Address": "1348 MYRTLE AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "7/24/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.698414,
          "Longitude": -73.922063,
          "BIN": 3074428
        },
        {
          "Eviction Address": "31 CEDAR STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "5/23/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.696513,
          "Longitude": -73.928499,
          "BIN": 3073382
        },
        {
          "Eviction Address": "15 LAWTON STREET",
          "Eviction Apartment Number": 39,
          "Executed Date": "5/30/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.695189,
          "Longitude": -73.930675,
          "BIN": 3326299
        },
        {
          "Eviction Address": "35 MEADOW STREET",
          "Eviction Apartment Number": 215,
          "Executed Date": "10/18/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.710821,
          "Longitude": -73.935946,
          "BIN": 3070840
        },
        {
          "Eviction Address": "24 GRANITE STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "11/4/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.682434,
          "Longitude": -73.907887,
          "BIN": 3080371
        },
        {
          "Eviction Address": "218 STAGG WALK",
          "Eviction Apartment Number": "02C",
          "Executed Date": "8/30/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.709769,
          "Longitude": -73.940827,
          "BIN": 3344998
        },
        {
          "Eviction Address": "132 COOPER STREET",
          "Eviction Apartment Number": "ENTIRE 3RD FLOOR",
          "Executed Date": "3/22/24",
          "Year": 2024,
          "Eviction Postcode": 11207,
          "Latitude": 40.687142,
          "Longitude": -73.907963,
          "BIN": 3390395
        },
        {
          "Eviction Address": "1054 BUSHWICK AVENUE",
          "Eviction Apartment Number": "4-H",
          "Executed Date": "4/29/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.690829,
          "Longitude": -73.920503,
          "BIN": 3076413
        },
        {
          "Eviction Address": "145 BLEECKER STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "9/28/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.696225,
          "Longitude": -73.920154,
          "BIN": 3075406
        },
        {
          "Eviction Address": "90 HARMAN STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "6/14/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.69556,
          "Longitude": -73.923126,
          "BIN": 3075026
        },
        {
          "Eviction Address": "100 JEFFERSON STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "4/1/22",
          "Year": 2022,
          "Eviction Postcode": 11206,
          "Latitude": 40.69946,
          "Longitude": -73.931013,
          "BIN": 3393924
        },
        {
          "Eviction Address": "77 CEDAR ST A/K/A 1260 MYRTLE AVENUE",
          "Eviction Apartment Number": "2L",
          "Executed Date": "1/12/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.697599,
          "Longitude": -73.92673,
          "BIN": 3073398
        },
        {
          "Eviction Address": "120 MENAHAN STREET",
          "Eviction Apartment Number": "01F",
          "Executed Date": "11/30/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.695464,
          "Longitude": -73.919697,
          "BIN": 3075906
        },
        {
          "Eviction Address": "361 STAGG STREET",
          "Eviction Apartment Number": "UNIT: SUITE 204",
          "Executed Date": "12/4/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.710477,
          "Longitude": -73.934421,
          "BIN": 3070837
        },
        {
          "Eviction Address": "372 CENTRAL AVE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "1/25/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.694363,
          "Longitude": -73.918631,
          "BIN": 3076102
        },
        {
          "Eviction Address": "146 EVERGREEN AVENUE",
          "Eviction Apartment Number": "GROUND FLOOR",
          "Executed Date": "11/23/22",
          "Year": 2022,
          "Eviction Postcode": 11206,
          "Latitude": 40.699312,
          "Longitude": -73.931489,
          "BIN": 3072214
        },
        {
          "Eviction Address": "524 WILSON AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "1/11/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.691694,
          "Longitude": -73.909904,
          "BIN": 3078630
        },
        {
          "Eviction Address": "160 BOERUM STREET",
          "Eviction Apartment Number": "04J",
          "Executed Date": "2/22/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.705957,
          "Longitude": -73.942115,
          "BIN": 3327973
        },
        {
          "Eviction Address": "196 GRAHAM AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "8/14/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.708552,
          "Longitude": -73.943389,
          "BIN": 3070989
        },
        {
          "Eviction Address": "36 DITMARS STREET",
          "Eviction Apartment Number": "GROUND FLOOR-BACK",
          "Executed Date": "3/30/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.696972,
          "Longitude": -73.933082,
          "BIN": 3072680
        },
        {
          "Eviction Address": "978 MADISON STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "11/2/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.689025,
          "Longitude": -73.918998,
          "BIN": 3076931
        },
        {
          "Eviction Address": "1104 BUSHWICK AVENUE AKA 42 WOODBINE STRE",
          "Eviction Apartment Number": "2-R",
          "Executed Date": "7/25/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.68995,
          "Longitude": -73.918954,
          "BIN": 3076719
        },
        {
          "Eviction Address": "180 SCHOLES STREET",
          "Eviction Apartment Number": "3F",
          "Executed Date": "2/11/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.708903,
          "Longitude": -73.942109,
          "BIN": 3396894
        },
        {
          "Eviction Address": "983 HANCOCK STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "11/20/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.68694,
          "Longitude": -73.916379,
          "BIN": 3077830
        },
        {
          "Eviction Address": "1138 JEFFERSON AVENUE - APT. 3R",
          "Eviction Apartment Number": "3R",
          "Executed Date": "12/5/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.689338,
          "Longitude": -73.915175,
          "BIN": 3077856
        },
        {
          "Eviction Address": "120 MENAHAN STREET",
          "Eviction Apartment Number": "3H",
          "Executed Date": "7/14/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.695464,
          "Longitude": -73.919697,
          "BIN": 3075906
        },
        {
          "Eviction Address": "50 STANHOPE STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "8/29/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.695905,
          "Longitude": -73.925131,
          "BIN": 3074380
        },
        {
          "Eviction Address": "1407 BROADWAY",
          "Eviction Apartment Number": "ENTIRE GROUND FLOOR",
          "Executed Date": "6/7/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.688683,
          "Longitude": -73.920603,
          "BIN": 3076512
        },
        {
          "Eviction Address": "990 DECATUR STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "9/30/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.68465,
          "Longitude": -73.911569,
          "BIN": 3079628
        },
        {
          "Eviction Address": "1060 HANCOCK STREET",
          "Eviction Apartment Number": 8,
          "Executed Date": "4/6/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.688577,
          "Longitude": -73.914747,
          "BIN": 3078195
        },
        {
          "Eviction Address": "985 HANCOCK STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "5/24/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.68697,
          "Longitude": -73.91635,
          "BIN": 3077829
        },
        {
          "Eviction Address": "26 WEIRFIELD STREET",
          "Eviction Apartment Number": "TOP FLOOR",
          "Executed Date": "10/20/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.68673,
          "Longitude": -73.915388,
          "BIN": 3078472
        },
        {
          "Eviction Address": "54 NOLL STREET",
          "Eviction Apartment Number": 325,
          "Executed Date": "1/3/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.700554,
          "Longitude": -73.934214,
          "BIN": 3418158
        },
        {
          "Eviction Address": "15 CEDAR STREET",
          "Eviction Apartment Number": "1B",
          "Executed Date": "11/28/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.696225,
          "Longitude": -73.928975,
          "BIN": 3426252
        },
        {
          "Eviction Address": "1080 GREENE AVENUE",
          "Eviction Apartment Number": 3,
          "Executed Date": "3/27/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.691963,
          "Longitude": -73.925089,
          "BIN": 3075264
        },
        {
          "Eviction Address": "10 MONTIETH STREET",
          "Eviction Apartment Number": 178,
          "Executed Date": "3/24/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.701357,
          "Longitude": -73.936496,
          "BIN": 3426398
        },
        {
          "Eviction Address": "164 CENTRAL AVENUE",
          "Eviction Apartment Number": "1A",
          "Executed Date": "4/17/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.699106,
          "Longitude": -73.927342,
          "BIN": 3425039
        },
        {
          "Eviction Address": "1223 HANCOCK STREET APT 2",
          "Eviction Apartment Number": 2,
          "Executed Date": "8/24/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.691934,
          "Longitude": -73.911483,
          "BIN": 3077950
        },
        {
          "Eviction Address": "1209 DEKALB AVENUE",
          "Eviction Apartment Number": 213,
          "Executed Date": "8/8/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.695599,
          "Longitude": -73.927796,
          "BIN": 3421997
        },
        {
          "Eviction Address": "120 GROVE STREET",
          "Eviction Apartment Number": 14,
          "Executed Date": "5/23/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.69364,
          "Longitude": -73.920319,
          "BIN": 3342269
        },
        {
          "Eviction Address": "165 CENTRAL AVENUE",
          "Eviction Apartment Number": "1F",
          "Executed Date": "11/29/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.698903,
          "Longitude": -73.92657,
          "BIN": 3073116
        },
        {
          "Eviction Address": "44 ABERDEEN STREET",
          "Eviction Apartment Number": "1ST FLOOR",
          "Executed Date": "1/23/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.681881,
          "Longitude": -73.90611,
          "BIN": 3080444
        },
        {
          "Eviction Address": "1183 GATES AVENUE",
          "Eviction Apartment Number": "1-C",
          "Executed Date": "5/29/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.691839,
          "Longitude": -73.919777,
          "BIN": 3076251
        },
        {
          "Eviction Address": "1244 JEFFERSON AVENU",
          "Eviction Apartment Number": "UNIT B",
          "Executed Date": "7/24/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.691732,
          "Longitude": -73.912821,
          "BIN": 3077925
        },
        {
          "Eviction Address": "114 TROUTMAN STREET",
          "Eviction Apartment Number": 328,
          "Executed Date": "6/20/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.699509,
          "Longitude": -73.929786,
          "BIN": 3072476
        },
        {
          "Eviction Address": "1028 BUSHWICK AVE A/K/A 44 LINDEN ST",
          "Eviction Apartment Number": "",
          "Executed Date": "8/12/21",
          "Year": 2021,
          "Eviction Postcode": 11221,
          "Latitude": 40.691283,
          "Longitude": -73.921303,
          "BIN": 3076223
        },
        {
          "Eviction Address": "1025 WILLOUGHBY   AV ENUE",
          "Eviction Apartment Number": "-",
          "Executed Date": "6/28/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.699209,
          "Longitude": -73.928424,
          "BIN": 3343484
        },
        {
          "Eviction Address": "86 BEAVER STREET",
          "Eviction Apartment Number": "7O",
          "Executed Date": "10/21/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.699751,
          "Longitude": -73.936801,
          "BIN": 3393923
        },
        {
          "Eviction Address": "328 EVERGREEN AVENUE",
          "Eviction Apartment Number": "FLOOR 3",
          "Executed Date": "6/12/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.695065,
          "Longitude": -73.925381,
          "BIN": 3074361
        },
        {
          "Eviction Address": "556 WILSON AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "1/18/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.690971,
          "Longitude": -73.908632,
          "BIN": 3079038
        },
        {
          "Eviction Address": "618 BUSHWICK AVENUE",
          "Eviction Apartment Number": 115,
          "Executed Date": "2/6/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.698207,
          "Longitude": -73.933899,
          "BIN": 3425505
        },
        {
          "Eviction Address": "36 LINDEN STREET",
          "Eviction Apartment Number": "3B",
          "Executed Date": "7/6/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.690874,
          "Longitude": -73.921866,
          "BIN": 3076222
        },
        {
          "Eviction Address": "85 MOFFAT STREET",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "3/27/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.685292,
          "Longitude": -73.908629,
          "BIN": 3079935
        },
        {
          "Eviction Address": "33A LAWTON STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "12/3/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.695587,
          "Longitude": -73.930299,
          "BIN": 3073363
        },
        {
          "Eviction Address": "30 BELVEDERE STREET",
          "Eviction Apartment Number": "3B",
          "Executed Date": "2/21/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.698887,
          "Longitude": -73.936704,
          "BIN": 3000000
        },
        {
          "Eviction Address": "16 STANHOPE STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "8/16/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.694755,
          "Longitude": -73.926257,
          "BIN": 3074355
        },
        {
          "Eviction Address": "1181 BUSHWICK AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "5/4/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.688622,
          "Longitude": -73.91659,
          "BIN": 3077484
        },
        {
          "Eviction Address": "12 BLEECKER ST",
          "Eviction Apartment Number": "3-B",
          "Executed Date": "5/17/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.692972,
          "Longitude": -73.92332,
          "BIN": 3075584
        },
        {
          "Eviction Address": "362 SCHOLES STREET",
          "Eviction Apartment Number": "COMMERICAL PREMISES",
          "Executed Date": "6/27/22",
          "Year": 2022,
          "Eviction Postcode": 11206,
          "Latitude": 40.709851,
          "Longitude": -73.933819,
          "BIN": 3071039
        },
        {
          "Eviction Address": "1050 HANCOCK STREET",
          "Eviction Apartment Number": "2B",
          "Executed Date": "3/19/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.688399,
          "Longitude": -73.914924,
          "BIN": 3078194
        },
        {
          "Eviction Address": "168-172 MESEROLE STR EET",
          "Eviction Apartment Number": "4A",
          "Executed Date": "1/28/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.708129,
          "Longitude": -73.942625,
          "BIN": 3393873
        },
        {
          "Eviction Address": "125 GROVE STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "1/20/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.693862,
          "Longitude": -73.920132,
          "BIN": 3393111
        },
        {
          "Eviction Address": "88 SUYDAM STREET",
          "Eviction Apartment Number": "ENTIRE PREMISES",
          "Executed Date": "11/20/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.697423,
          "Longitude": -73.929882,
          "BIN": 3073084
        },
        {
          "Eviction Address": "123 MELROSE STREET",
          "Eviction Apartment Number": 656,
          "Executed Date": "10/30/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.699546,
          "Longitude": -73.933007,
          "BIN": 3426367
        },
        {
          "Eviction Address": "319 ELLERY STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "1/3/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.699967,
          "Longitude": -73.939202,
          "BIN": 3071703
        },
        {
          "Eviction Address": "204 BUSHWICK AVENUE",
          "Eviction Apartment Number": 5,
          "Executed Date": "2/11/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.708767,
          "Longitude": -73.940031,
          "BIN": 3071014
        },
        {
          "Eviction Address": "57 GROVE STREET",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "10/17/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.692112,
          "Longitude": -73.921962,
          "BIN": 3075875
        },
        {
          "Eviction Address": "1013 BROADWAY",
          "Eviction Apartment Number": "2B",
          "Executed Date": "7/24/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.695734,
          "Longitude": -73.933,
          "BIN": 3072828
        },
        {
          "Eviction Address": "1041 BUSHWICK AVENUE",
          "Eviction Apartment Number": "4B",
          "Executed Date": "1/9/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.691107,
          "Longitude": -73.920957,
          "BIN": 3076258
        },
        {
          "Eviction Address": "68 GRANITE STREET",
          "Eviction Apartment Number": "1ST AND 2ND FLOORS",
          "Executed Date": "8/1/18",
          "Year": 2018,
          "Eviction Postcode": 11201,
          "Latitude": 40.683556,
          "Longitude": -73.906793,
          "BIN": 3080400
        },
        {
          "Eviction Address": "33A LAWTON STREET",
          "Eviction Apartment Number": "UNIT 2 A/K/A 2ND FL",
          "Executed Date": "1/17/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.695587,
          "Longitude": -73.930299,
          "BIN": 3073363
        },
        {
          "Eviction Address": "256 STAGG STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "1/18/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.709936,
          "Longitude": -73.93884,
          "BIN": 3070883
        },
        {
          "Eviction Address": "1230 PUTNAM AVENUE",
          "Eviction Apartment Number": "BSMT (APT. 1)",
          "Executed Date": "4/4/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.691424,
          "Longitude": -73.915465,
          "BIN": 3077211
        },
        {
          "Eviction Address": "203 BOERUM STREET",
          "Eviction Apartment Number": "1-A",
          "Executed Date": "10/17/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.70616,
          "Longitude": -73.940163,
          "BIN": 3327967
        },
        {
          "Eviction Address": "101 HUMBOLDT STREET",
          "Eviction Apartment Number": "03H",
          "Executed Date": "9/21/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.704771,
          "Longitude": -73.941066,
          "BIN": 3071354
        },
        {
          "Eviction Address": "1118 PUTNAM AVENUE",
          "Eviction Apartment Number": "GROUND FLOOR",
          "Executed Date": "3/18/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.688626,
          "Longitude": -73.91822,
          "BIN": 3077139
        },
        {
          "Eviction Address": "1112 HALSEY STREET 2ND FLOOR",
          "Eviction Apartment Number": "",
          "Executed Date": "1/25/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.689247,
          "Longitude": -73.911746,
          "BIN": 3078795
        },
        {
          "Eviction Address": "1209 BUSHWICK AVENUE",
          "Eviction Apartment Number": "2A",
          "Executed Date": "10/20/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.688141,
          "Longitude": -73.915739,
          "BIN": 3077833
        },
        {
          "Eviction Address": "637 BUSHWICK AVENUE",
          "Eviction Apartment Number": "3A",
          "Executed Date": "7/11/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.697935,
          "Longitude": -73.933373,
          "BIN": 3072189
        },
        {
          "Eviction Address": "138 WEIRFIELD STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "8/20/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.689575,
          "Longitude": -73.912597,
          "BIN": 3078560
        },
        {
          "Eviction Address": "31 ABERDEEN STREET",
          "Eviction Apartment Number": "2-F",
          "Executed Date": "11/27/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.681703,
          "Longitude": -73.906308,
          "BIN": 3080428
        },
        {
          "Eviction Address": "1487 BROADWAY AKA 2 AND 6 CORNELIA ST.",
          "Eviction Apartment Number": "2B",
          "Executed Date": "2/14/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.687344,
          "Longitude": -73.91825,
          "BIN": 3077436
        },
        {
          "Eviction Address": "101 HUMBOLDT STREET",
          "Eviction Apartment Number": "07H",
          "Executed Date": "12/11/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.704771,
          "Longitude": -73.941066,
          "BIN": 3071354
        },
        {
          "Eviction Address": "306 ELLERY STREET",
          "Eviction Apartment Number": "3A",
          "Executed Date": "5/3/22",
          "Year": 2022,
          "Eviction Postcode": 11206,
          "Latitude": 40.699402,
          "Longitude": -73.940144,
          "BIN": 3042833
        },
        {
          "Eviction Address": "28 GROVE STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "2/17/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.690957,
          "Longitude": -73.923081,
          "BIN": 3378145
        },
        {
          "Eviction Address": "691 CHAUNCEY STREET",
          "Eviction Apartment Number": "1C",
          "Executed Date": "10/24/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.684523,
          "Longitude": -73.908212,
          "BIN": 3080123
        },
        {
          "Eviction Address": "35 SCHAEFFER ST",
          "Eviction Apartment Number": "1L",
          "Executed Date": "9/14/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.685325,
          "Longitude": -73.912112,
          "BIN": 3079183
        },
        {
          "Eviction Address": "33A LAWTON STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "11/9/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.695587,
          "Longitude": -73.930299,
          "BIN": 3073363
        },
        {
          "Eviction Address": "1252 BUSHWICK AVENUE",
          "Eviction Apartment Number": "1ST FLOOR",
          "Executed Date": "3/23/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.687317,
          "Longitude": -73.914327,
          "BIN": 3394520
        },
        {
          "Eviction Address": "54 NOLL STREE",
          "Eviction Apartment Number": "APT 256",
          "Executed Date": "4/5/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.700554,
          "Longitude": -73.934214,
          "BIN": 3418158
        },
        {
          "Eviction Address": "1041 BUSHWICK AVENUE",
          "Eviction Apartment Number": "4D",
          "Executed Date": "5/15/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.691107,
          "Longitude": -73.920957,
          "BIN": 3076258
        },
        {
          "Eviction Address": "75 COOPER STREET",
          "Eviction Apartment Number": "C, ROOM #3",
          "Executed Date": "1/18/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.685661,
          "Longitude": -73.909443,
          "BIN": 3390388
        },
        {
          "Eviction Address": "715 CHAUNCEY STREET",
          "Eviction Apartment Number": "ENTIRE 2ND FL A/K/A",
          "Executed Date": "10/10/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.684951,
          "Longitude": -73.907793,
          "BIN": 3080111
        },
        {
          "Eviction Address": "1452 BUSHWICK AVENUE",
          "Eviction Apartment Number": "#2",
          "Executed Date": "1/2/20",
          "Year": 2020,
          "Eviction Postcode": 11207,
          "Latitude": 40.683799,
          "Longitude": -73.908141,
          "BIN": 3080206
        },
        {
          "Eviction Address": "1388 BUSHWICK AVENUE",
          "Eviction Apartment Number": "CORNER STORE",
          "Executed Date": "2/14/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.684868,
          "Longitude": -73.910025,
          "BIN": 3338507
        },
        {
          "Eviction Address": "199 MONTROSE    AVEN UE A/K/A 188 HUMBOLDT STREET",
          "Eviction Apartment Number": "7G",
          "Executed Date": "4/19/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.707557,
          "Longitude": -73.940959,
          "BIN": 3000000
        },
        {
          "Eviction Address": "154 WILSON AVE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "1/23/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.700282,
          "Longitude": -73.925,
          "BIN": 3073136
        },
        {
          "Eviction Address": "364 CENTRAL AVENUE",
          "Eviction Apartment Number": "RIGHT STORE",
          "Executed Date": "4/19/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.694533,
          "Longitude": -73.918937,
          "BIN": 3076098
        },
        {
          "Eviction Address": "38 WOODBINE STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "3/13/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.68964,
          "Longitude": -73.919567,
          "BIN": 3076716
        },
        {
          "Eviction Address": "41 ELDERT STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "6/23/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.686185,
          "Longitude": -73.913611,
          "BIN": 3078740
        },
        {
          "Eviction Address": "1105 BUSHWICK AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "10/23/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.689936,
          "Longitude": -73.918892,
          "BIN": 3076737
        },
        {
          "Eviction Address": "64 TROUTMAN STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "4/24/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.69856,
          "Longitude": -73.931569,
          "BIN": 3072451
        },
        {
          "Eviction Address": "1131 HANCOCK STREET",
          "Eviction Apartment Number": "2-FRONT",
          "Executed Date": "9/25/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.690165,
          "Longitude": -73.91322,
          "BIN": 3077911
        },
        {
          "Eviction Address": "1186 PUTNAM AVENUE",
          "Eviction Apartment Number": "4A",
          "Executed Date": "10/2/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.690253,
          "Longitude": -73.916617,
          "BIN": 3343196
        },
        {
          "Eviction Address": "1091 GATES AVENUE",
          "Eviction Apartment Number": "4B",
          "Executed Date": "5/11/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.690045,
          "Longitude": -73.921539,
          "BIN": 3076225
        },
        {
          "Eviction Address": "25 STANHOPE STREET",
          "Eviction Apartment Number": "DELI STORE",
          "Executed Date": "8/30/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.694999,
          "Longitude": -73.926044,
          "BIN": 3074052
        },
        {
          "Eviction Address": "917 BROADWAY",
          "Eviction Apartment Number": "2R",
          "Executed Date": "6/5/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.697561,
          "Longitude": -73.936273,
          "BIN": 3071868
        },
        {
          "Eviction Address": "556 HART STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "2/5/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.696764,
          "Longitude": -73.929504,
          "BIN": 3390275
        },
        {
          "Eviction Address": "946 BUSHWICK AVENUE",
          "Eviction Apartment Number": "B9",
          "Executed Date": "4/4/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.692522,
          "Longitude": -73.923498,
          "BIN": 3075292
        },
        {
          "Eviction Address": "77 JEFFERSON STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "1/17/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.698896,
          "Longitude": -73.932679,
          "BIN": 3072041
        },
        {
          "Eviction Address": "98 JEFFERSON STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "6/7/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.699424,
          "Longitude": -73.931049,
          "BIN": 3392879
        },
        {
          "Eviction Address": "667 EVERGREEN AVENUE",
          "Eviction Apartment Number": "2F",
          "Executed Date": "3/8/24",
          "Year": 2024,
          "Eviction Postcode": 11207,
          "Latitude": 40.687102,
          "Longitude": -73.909874,
          "BIN": 3079434
        },
        {
          "Eviction Address": "960 WILLOUGHBY AVE",
          "Eviction Apartment Number": "3M",
          "Executed Date": "3/30/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.697851,
          "Longitude": -73.930603,
          "BIN": 3413844
        },
        {
          "Eviction Address": "1209 DEKALB AVENUE",
          "Eviction Apartment Number": 201,
          "Executed Date": "7/26/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.695599,
          "Longitude": -73.927796,
          "BIN": 3421997
        },
        {
          "Eviction Address": "36 DITMARS STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "11/28/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.696972,
          "Longitude": -73.933082,
          "BIN": 3072680
        },
        {
          "Eviction Address": "907 BROADWAY",
          "Eviction Apartment Number": "3F",
          "Executed Date": "7/19/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.697745,
          "Longitude": -73.936593,
          "BIN": 3071872
        },
        {
          "Eviction Address": "725 EVERGREEN AVENUE",
          "Eviction Apartment Number": "6A",
          "Executed Date": "11/7/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.685799,
          "Longitude": -73.907583,
          "BIN": 3080124
        },
        {
          "Eviction Address": "184 SCHAEFER STREET",
          "Eviction Apartment Number": "APT 2L",
          "Executed Date": "4/5/23",
          "Year": 2023,
          "Eviction Postcode": 11236,
          "Latitude": 40.689579,
          "Longitude": -73.907906,
          "BIN": 3079493
        },
        {
          "Eviction Address": "11 TROUTMAN STREET",
          "Eviction Apartment Number": "2A",
          "Executed Date": "1/9/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.69745,
          "Longitude": -73.93368,
          "BIN": 3072187
        },
        {
          "Eviction Address": "176 LINDEN STREET",
          "Eviction Apartment Number": "2E",
          "Executed Date": "3/5/20",
          "Year": 2020,
          "Eviction Postcode": 11221,
          "Latitude": 40.694986,
          "Longitude": -73.917833,
          "BIN": 3076286
        },
        {
          "Eviction Address": "69 CEDAR STREET",
          "Eviction Apartment Number": "1LA",
          "Executed Date": "11/30/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.697462,
          "Longitude": -73.926954,
          "BIN": 3073403
        },
        {
          "Eviction Address": "24 LAWTON STREET",
          "Eviction Apartment Number": "5E",
          "Executed Date": "6/5/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.695356,
          "Longitude": -73.93049,
          "BIN": 3395061
        },
        {
          "Eviction Address": "1243 JEFFERSON AVENUE APT #2",
          "Eviction Apartment Number": 2,
          "Executed Date": "2/20/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.691743,
          "Longitude": -73.912839,
          "BIN": 3077621
        },
        {
          "Eviction Address": "1225 BUSHWICK AVENUE",
          "Eviction Apartment Number": "A-3",
          "Executed Date": "9/7/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.687823,
          "Longitude": -73.915181,
          "BIN": 3078192
        },
        {
          "Eviction Address": "250 MOORE STREET",
          "Eviction Apartment Number": 407,
          "Executed Date": "3/21/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.704765,
          "Longitude": -73.93425,
          "BIN": 3071542
        },
        {
          "Eviction Address": "73 LINDEN STREET",
          "Eviction Apartment Number": 8,
          "Executed Date": "11/27/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.691903,
          "Longitude": -73.920888,
          "BIN": 3076073
        },
        {
          "Eviction Address": "31 JEFFERSON STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "3/6/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.697741,
          "Longitude": -73.934505,
          "BIN": 3072015
        },
        {
          "Eviction Address": "628 WILSON AVENUE",
          "Eviction Apartment Number": "3-R",
          "Executed Date": "3/1/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.689262,
          "Longitude": -73.905627,
          "BIN": 3080016
        },
        {
          "Eviction Address": "1801 BROADWAY     A/ K/A 1795-1801 BROADWAY A/K/A RANITE STREET",
          "Eviction Apartment Number": "2E",
          "Executed Date": "3/15/24",
          "Year": 2024,
          "Eviction Postcode": 11207,
          "Latitude": 40.681883,
          "Longitude": -73.908641,
          "BIN": 3080287
        },
        {
          "Eviction Address": "1019 HANCOCK STREET",
          "Eviction Apartment Number": "ENTIRE FIRST FLOOR",
          "Executed Date": "1/13/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.687505,
          "Longitude": -73.915827,
          "BIN": 3077817
        },
        {
          "Eviction Address": "57 GROVE STREET AKA 59 GROVE STREET",
          "Eviction Apartment Number": "2-A",
          "Executed Date": "4/12/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.692112,
          "Longitude": -73.921962,
          "BIN": 3075875
        },
        {
          "Eviction Address": "1291 GATES AVENUE",
          "Eviction Apartment Number": 1,
          "Executed Date": "4/4/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.694028,
          "Longitude": -73.917629,
          "BIN": 3076301
        },
        {
          "Eviction Address": "255 MCKIBBIN STREET APARTMENT#211",
          "Eviction Apartment Number": 211,
          "Executed Date": "12/19/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.705656,
          "Longitude": -73.937397,
          "BIN": 3071385
        },
        {
          "Eviction Address": "992 WILLOUGHBY AVENUE - APT #2-R",
          "Eviction Apartment Number": "2-R",
          "Executed Date": "2/5/20",
          "Year": 2020,
          "Eviction Postcode": 11221,
          "Latitude": 40.698685,
          "Longitude": -73.929243,
          "BIN": 3072879
        },
        {
          "Eviction Address": "205 TEN EYCK WALK A/K/A 196 MAUJER ST",
          "Eviction Apartment Number": "3C",
          "Executed Date": "3/29/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.710398,
          "Longitude": -73.94135,
          "BIN": 3338398
        },
        {
          "Eviction Address": "203 CORNELIA STREET UNIT 3",
          "Eviction Apartment Number": "UNIT 3",
          "Executed Date": "11/1/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.69255,
          "Longitude": -73.913217,
          "BIN": 3077278
        },
        {
          "Eviction Address": "1348 MYRTLE AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "7/24/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.698414,
          "Longitude": -73.922063,
          "BIN": 3074428
        },
        {
          "Eviction Address": "64 HIMROD STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "9/18/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.695591,
          "Longitude": -73.924262,
          "BIN": 3074697
        },
        {
          "Eviction Address": "960 MADISON STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "5/25/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.688723,
          "Longitude": -73.919294,
          "BIN": 3390323
        },
        {
          "Eviction Address": "123 MELROSE STREET",
          "Eviction Apartment Number": 422,
          "Executed Date": "2/26/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.699546,
          "Longitude": -73.933007,
          "BIN": 3426367
        },
        {
          "Eviction Address": "648 KOSCIUSZKO ST",
          "Eviction Apartment Number": "4A",
          "Executed Date": "6/9/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.693968,
          "Longitude": -73.927751,
          "BIN": 3422234
        },
        {
          "Eviction Address": "1072 DECATUR STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "6/26/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.686273,
          "Longitude": -73.909983,
          "BIN": 3390386
        },
        {
          "Eviction Address": "1119 BROADWAY",
          "Eviction Apartment Number": "",
          "Executed Date": "4/18/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.69375,
          "Longitude": -73.929493,
          "BIN": 3427013
        },
        {
          "Eviction Address": "208 EVERGREEN AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "4/3/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.698081,
          "Longitude": -73.929799,
          "BIN": 3072869
        },
        {
          "Eviction Address": "1477 BUSHWICK AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "1/17/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.683384,
          "Longitude": -73.907377,
          "BIN": 3080326
        },
        {
          "Eviction Address": "1487 BROADWAY",
          "Eviction Apartment Number": "STORE &BSMT KNOWN AS",
          "Executed Date": "8/28/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.687344,
          "Longitude": -73.91825,
          "BIN": 3077436
        },
        {
          "Eviction Address": "142 WILSON AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "4/24/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.700596,
          "Longitude": -73.925548,
          "BIN": 3072913
        },
        {
          "Eviction Address": "681 EVERGREEN AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "6/6/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.68675,
          "Longitude": -73.909254,
          "BIN": 3079694
        },
        {
          "Eviction Address": "33A LAWTON ST.",
          "Eviction Apartment Number": "",
          "Executed Date": "1/7/20",
          "Year": 2020,
          "Eviction Postcode": 11221,
          "Latitude": 40.695587,
          "Longitude": -73.930299,
          "BIN": 3073363
        },
        {
          "Eviction Address": "1209 DEKALB AVENUE",
          "Eviction Apartment Number": 419,
          "Executed Date": "7/23/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.695599,
          "Longitude": -73.927796,
          "BIN": 3421997
        },
        {
          "Eviction Address": "163 SCHOLES STREET",
          "Eviction Apartment Number": "01A",
          "Executed Date": "3/5/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.708829,
          "Longitude": -73.943047,
          "BIN": 3344974
        },
        {
          "Eviction Address": "885 PARK AVENUE",
          "Eviction Apartment Number": "3F",
          "Executed Date": "11/20/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.698724,
          "Longitude": -73.939676,
          "BIN": 3042845
        },
        {
          "Eviction Address": "556 HART STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "7/3/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.696764,
          "Longitude": -73.929504,
          "BIN": 3390275
        },
        {
          "Eviction Address": "1120 HANCOCK STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "2/14/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.689959,
          "Longitude": -73.913393,
          "BIN": 3078245
        },
        {
          "Eviction Address": "151 WEIRFIELD STREET   TOP FLOOR",
          "Eviction Apartment Number": "",
          "Executed Date": "5/2/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.689849,
          "Longitude": -73.912355,
          "BIN": 3078267
        },
        {
          "Eviction Address": "154 CORNELIA STREET",
          "Eviction Apartment Number": "3 FLOOR",
          "Executed Date": "7/31/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.691157,
          "Longitude": -73.91456,
          "BIN": 3077543
        },
        {
          "Eviction Address": "537 HART STREET",
          "Eviction Apartment Number": "1 FRONT",
          "Executed Date": "7/17/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.696555,
          "Longitude": -73.929873,
          "BIN": 3073098
        },
        {
          "Eviction Address": "71 PILLING STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "1/22/20",
          "Year": 2020,
          "Eviction Postcode": 11207,
          "Latitude": 40.684169,
          "Longitude": -73.907387,
          "BIN": 3080274
        },
        {
          "Eviction Address": "469 CENTRAL AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "8/16/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.691637,
          "Longitude": -73.913806,
          "BIN": 3077578
        },
        {
          "Eviction Address": "156 WEIRFIELD STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "4/7/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.689884,
          "Longitude": -73.912294,
          "BIN": 3078569
        },
        {
          "Eviction Address": "1191 BROADWAY",
          "Eviction Apartment Number": "UNIT 3 - 280 SQ FT",
          "Executed Date": "7/24/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.692442,
          "Longitude": -73.927219,
          "BIN": 3074305
        },
        {
          "Eviction Address": "1041 BUSHWICK AVENUE",
          "Eviction Apartment Number": "6E",
          "Executed Date": "11/28/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.691107,
          "Longitude": -73.920957,
          "BIN": 3076258
        },
        {
          "Eviction Address": "595 HART STREET",
          "Eviction Apartment Number": "FLOOR-3",
          "Executed Date": "1/16/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.697595,
          "Longitude": -73.928195,
          "BIN": 3394516
        },
        {
          "Eviction Address": "22 MOFFAT STREET",
          "Eviction Apartment Number": "3M",
          "Executed Date": "10/17/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.683682,
          "Longitude": -73.910178,
          "BIN": 3398683
        },
        {
          "Eviction Address": "1225 BROADWAY",
          "Eviction Apartment Number": "2A",
          "Executed Date": "9/13/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.691837,
          "Longitude": -73.926142,
          "BIN": 3074943
        },
        {
          "Eviction Address": "1117 BROADWAY  AKA 1128 DEKALB AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "7/14/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.693775,
          "Longitude": -73.929536,
          "BIN": 3073760
        },
        {
          "Eviction Address": "849 FLUSHING AVENUE",
          "Eviction Apartment Number": "20B",
          "Executed Date": "2/2/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.701583,
          "Longitude": -73.938249,
          "BIN": 3338439
        },
        {
          "Eviction Address": "12 WILSON AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "8/23/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.703511,
          "Longitude": -73.930684,
          "BIN": 3071856
        },
        {
          "Eviction Address": "15 LAWTON STREET",
          "Eviction Apartment Number": 24,
          "Executed Date": "3/25/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.695189,
          "Longitude": -73.930675,
          "BIN": 3326299
        },
        {
          "Eviction Address": "68 COVERT STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "2/1/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.68673,
          "Longitude": -73.911879,
          "BIN": 3079199
        },
        {
          "Eviction Address": "45 HARMAN STREET",
          "Eviction Apartment Number": "3RD FLOOR",
          "Executed Date": "12/11/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.694866,
          "Longitude": -73.923834,
          "BIN": 3074756
        },
        {
          "Eviction Address": "46 ABERDEEN STREET",
          "Eviction Apartment Number": "2 3RD FLOOR",
          "Executed Date": "8/1/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.681917,
          "Longitude": -73.906074,
          "BIN": 3080445
        },
        {
          "Eviction Address": "178 SCHAEFFER STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "11/18/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.689456,
          "Longitude": -73.908028,
          "BIN": 3079489
        },
        {
          "Eviction Address": "162 COVERT STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "2/25/19",
          "Year": 2019,
          "Eviction Postcode": 11201,
          "Latitude": 40.689421,
          "Longitude": -73.909233,
          "BIN": 3079253
        },
        {
          "Eviction Address": "193 SCHAEFER STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "5/1/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.689672,
          "Longitude": -73.907844,
          "BIN": 3079277
        },
        {
          "Eviction Address": "111 LINDEN STREET",
          "Eviction Apartment Number": 8,
          "Executed Date": "5/26/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.69312,
          "Longitude": -73.919689,
          "BIN": 3076111
        },
        {
          "Eviction Address": "2 STANWIX STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "10/25/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.698155,
          "Longitude": -73.933701,
          "BIN": 3072193
        },
        {
          "Eviction Address": "330 WILSON AVENUE",
          "Eviction Apartment Number": "3G",
          "Executed Date": "10/12/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.695962,
          "Longitude": -73.917403,
          "BIN": 3076116
        },
        {
          "Eviction Address": "1260 BUSHWICK AVENUE",
          "Eviction Apartment Number": "3(DIRECTLY BEHIND KI",
          "Executed Date": "5/31/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.687199,
          "Longitude": -73.914118,
          "BIN": 3078490
        },
        {
          "Eviction Address": "642 CHAUNCEY STREET",
          "Eviction Apartment Number": "2ND FLOOR",
          "Executed Date": "5/1/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.683322,
          "Longitude": -73.909364,
          "BIN": 3080186
        },
        {
          "Eviction Address": "154 CORNELIA STREET",
          "Eviction Apartment Number": "2 FLOOR",
          "Executed Date": "5/13/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.691157,
          "Longitude": -73.91456,
          "BIN": 3077543
        },
        {
          "Eviction Address": "27 ARION PLACE UNIT #315",
          "Eviction Apartment Number": "",
          "Executed Date": "2/2/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.698494,
          "Longitude": -73.936084,
          "BIN": 3326076
        },
        {
          "Eviction Address": "73 SCHAEFFER STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "11/15/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.68654,
          "Longitude": -73.910921,
          "BIN": 3079219
        },
        {
          "Eviction Address": "949 WILLOUGHBY   AVE NUE",
          "Eviction Apartment Number": 117,
          "Executed Date": "8/21/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.697728,
          "Longitude": -73.930841,
          "BIN": 3326228
        },
        {
          "Eviction Address": "317 TEN EYCK STREET",
          "Eviction Apartment Number": "COMM",
          "Executed Date": "3/13/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.711578,
          "Longitude": -73.936256,
          "BIN": 3251819
        },
        {
          "Eviction Address": "358 CENTRAL AVE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "1/18/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.69466,
          "Longitude": -73.919164,
          "BIN": 3076095
        },
        {
          "Eviction Address": "44 ABERDEEN STREET",
          "Eviction Apartment Number": "GROUND LEVEL",
          "Executed Date": "11/10/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.681881,
          "Longitude": -73.90611,
          "BIN": 3080444
        },
        {
          "Eviction Address": "119 WOODBINE STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "2/21/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.692087,
          "Longitude": -73.917188,
          "BIN": 3076607
        },
        {
          "Eviction Address": "1383 DEKALB AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "6/12/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.699327,
          "Longitude": -73.924143,
          "BIN": 3073537
        },
        {
          "Eviction Address": "315 SEIGEL STREET",
          "Eviction Apartment Number": 202,
          "Executed Date": "10/16/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.705572,
          "Longitude": -73.93396,
          "BIN": 3071423
        },
        {
          "Eviction Address": "163 TROUTMAN STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "8/28/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.700801,
          "Longitude": -73.928548,
          "BIN": 3072300
        },
        {
          "Eviction Address": "190 JOHNSON AVENUE",
          "Eviction Apartment Number": "3-B",
          "Executed Date": "1/3/20",
          "Year": 2020,
          "Eviction Postcode": 11206,
          "Latitude": 40.706704,
          "Longitude": -73.941869,
          "BIN": 3327964
        },
        {
          "Eviction Address": "10 GOODWIN PLACE",
          "Eviction Apartment Number": "3A",
          "Executed Date": "9/11/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.691921,
          "Longitude": -73.924414,
          "BIN": 3390300
        },
        {
          "Eviction Address": "71 PILLING STREET",
          "Eviction Apartment Number": "3RD FLOOR",
          "Executed Date": "9/6/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.684169,
          "Longitude": -73.907387,
          "BIN": 3080274
        },
        {
          "Eviction Address": "100 JEFFERSON STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "5/23/22",
          "Year": 2022,
          "Eviction Postcode": 11206,
          "Latitude": 40.69946,
          "Longitude": -73.931013,
          "BIN": 3393924
        },
        {
          "Eviction Address": "143 BLEECKER STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "5/3/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.696189,
          "Longitude": -73.92019,
          "BIN": 3075407
        },
        {
          "Eviction Address": "67 HARMAN STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "12/6/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.695217,
          "Longitude": -73.923487,
          "BIN": 3074745
        },
        {
          "Eviction Address": "651 CENTRAL AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "7/31/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.687665,
          "Longitude": -73.906827,
          "BIN": 3079999
        },
        {
          "Eviction Address": "1641 BROADWAY",
          "Eviction Apartment Number": "3L",
          "Executed Date": "2/7/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.684896,
          "Longitude": -73.913944,
          "BIN": 3078951
        },
        {
          "Eviction Address": "236 MESEROLE STREET",
          "Eviction Apartment Number": "1F",
          "Executed Date": "8/27/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.708443,
          "Longitude": -73.939335,
          "BIN": 3071175
        },
        {
          "Eviction Address": "54 NOLL STREET",
          "Eviction Apartment Number": 248,
          "Executed Date": "12/4/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.700554,
          "Longitude": -73.934214,
          "BIN": 3418158
        },
        {
          "Eviction Address": "23 CORNELIA STREET",
          "Eviction Apartment Number": "2B",
          "Executed Date": "6/21/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.687986,
          "Longitude": -73.917694,
          "BIN": 3077157
        },
        {
          "Eviction Address": "555 BUSHWICK AVENUE",
          "Eviction Apartment Number": "2F",
          "Executed Date": "11/9/21",
          "Year": 2021,
          "Eviction Postcode": 11206,
          "Latitude": 40.699372,
          "Longitude": -73.935647,
          "BIN": 3071908
        },
        {
          "Eviction Address": "1118 PUTNAM AVENUE",
          "Eviction Apartment Number": "3RD FLOOR",
          "Executed Date": "12/12/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.688626,
          "Longitude": -73.91822,
          "BIN": 3077139
        },
        {
          "Eviction Address": "109 WEIRFIELD STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "2/27/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.688689,
          "Longitude": -73.913492,
          "BIN": 3400919
        },
        {
          "Eviction Address": "1002 BUSHWICK AVENUE",
          "Eviction Apartment Number": "1D",
          "Executed Date": "2/24/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.691722,
          "Longitude": -73.922067,
          "BIN": 3076033
        },
        {
          "Eviction Address": "55 MEADOW STREET",
          "Eviction Apartment Number": "UNIT 314 A/K/A SUITE",
          "Executed Date": "4/13/22",
          "Year": 2022,
          "Eviction Postcode": 11206,
          "Latitude": 40.711084,
          "Longitude": -73.934918,
          "BIN": 3070839
        },
        {
          "Eviction Address": "88 JEFFERSON STREET",
          "Eviction Apartment Number": 104,
          "Executed Date": "10/4/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.699118,
          "Longitude": -73.932109,
          "BIN": 3072212
        },
        {
          "Eviction Address": "631 BUSHWICK AVENUE",
          "Eviction Apartment Number": "1D",
          "Executed Date": "9/28/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.697987,
          "Longitude": -73.933467,
          "BIN": 3072191
        },
        {
          "Eviction Address": "15 LAWTON STREET",
          "Eviction Apartment Number": 4,
          "Executed Date": "9/8/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.695189,
          "Longitude": -73.930675,
          "BIN": 3326299
        },
        {
          "Eviction Address": "885 PARK AVENUE",
          "Eviction Apartment Number": "05D",
          "Executed Date": "5/16/17",
          "Year": 2017,
          "Eviction Postcode": 11205,
          "Latitude": 40.698724,
          "Longitude": -73.939676,
          "BIN": 3042845
        },
        {
          "Eviction Address": "296 ELLERY STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "4/13/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.699366,
          "Longitude": -73.940498,
          "BIN": 3042828
        },
        {
          "Eviction Address": "742 CHAUNCEY STREET",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "11/27/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.685812,
          "Longitude": -73.906923,
          "BIN": 3080280
        },
        {
          "Eviction Address": "124 LINDEN STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "2/25/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.693535,
          "Longitude": -73.919256,
          "BIN": 3076266
        },
        {
          "Eviction Address": "1118 PUTNAM AVENUE",
          "Eviction Apartment Number": "2ND FLOOR",
          "Executed Date": "12/12/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.688626,
          "Longitude": -73.91822,
          "BIN": 3077139
        },
        {
          "Eviction Address": "180 SCHOLES STREET",
          "Eviction Apartment Number": "3G",
          "Executed Date": "1/24/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.708903,
          "Longitude": -73.942109,
          "BIN": 3396894
        },
        {
          "Eviction Address": "172 SCHAEFER STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "9/14/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.689332,
          "Longitude": -73.908151,
          "BIN": 3079485
        },
        {
          "Eviction Address": "1100 PUTNAM AVENUE",
          "Eviction Apartment Number": "2F",
          "Executed Date": "1/30/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.688292,
          "Longitude": -73.918548,
          "BIN": 3390328
        },
        {
          "Eviction Address": "1929-1941 BROADWAY",
          "Eviction Apartment Number": "-",
          "Executed Date": "2/20/19",
          "Year": 2019,
          "Eviction Postcode": 11233,
          "Latitude": 40.679913,
          "Longitude": -73.905251,
          "BIN": ""
        },
        {
          "Eviction Address": "168 BLEECKER STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "10/6/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.696593,
          "Longitude": -73.919768,
          "BIN": 3075650
        },
        {
          "Eviction Address": "42 STARR STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "11/30/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.700937,
          "Longitude": -73.927217,
          "BIN": 3072705
        },
        {
          "Eviction Address": "364 WILSON AVENUE",
          "Eviction Apartment Number": "FLOOR 2",
          "Executed Date": "4/8/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.695116,
          "Longitude": -73.915918,
          "BIN": 3076444
        },
        {
          "Eviction Address": "174 SUYDAM STREET",
          "Eviction Apartment Number": "3F",
          "Executed Date": "2/27/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.699641,
          "Longitude": -73.926147,
          "BIN": 3073122
        },
        {
          "Eviction Address": "592 VAN BUREN STREET",
          "Eviction Apartment Number": "UNIT 1",
          "Executed Date": "2/24/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.692444,
          "Longitude": -73.925795,
          "BIN": 3074948
        },
        {
          "Eviction Address": "1013 BROADWAY",
          "Eviction Apartment Number": "2-N",
          "Executed Date": "2/16/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.695734,
          "Longitude": -73.933,
          "BIN": 3072828
        },
        {
          "Eviction Address": "1477 BUSHWICK AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "8/5/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.683384,
          "Longitude": -73.907377,
          "BIN": 3080326
        },
        {
          "Eviction Address": "196 COOPER STREET",
          "Eviction Apartment Number": "UNIT 2",
          "Executed Date": "1/4/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.688957,
          "Longitude": -73.906179,
          "BIN": 3393238
        },
        {
          "Eviction Address": "554 WILSON AVENUE",
          "Eviction Apartment Number": "STOREFRONT",
          "Executed Date": "8/28/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.691004,
          "Longitude": -73.90869,
          "BIN": 3079037
        },
        {
          "Eviction Address": "1225 JEFFERSON AVE",
          "Eviction Apartment Number": "#1",
          "Executed Date": "6/5/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.691066,
          "Longitude": -73.913504,
          "BIN": 3390360
        },
        {
          "Eviction Address": "879 PARK AVE",
          "Eviction Apartment Number": "1 1ST & 2ND FLOOR",
          "Executed Date": "1/13/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.698691,
          "Longitude": -73.939961,
          "BIN": 3042847
        },
        {
          "Eviction Address": "1091 GATES AVENUE",
          "Eviction Apartment Number": "4C",
          "Executed Date": "6/27/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.690045,
          "Longitude": -73.921539,
          "BIN": 3076225
        },
        {
          "Eviction Address": "618 BUSHWICK AVENUE",
          "Eviction Apartment Number": 116,
          "Executed Date": "5/17/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.698207,
          "Longitude": -73.933899,
          "BIN": 3425505
        },
        {
          "Eviction Address": "57 BLEECKER STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "1/11/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.694247,
          "Longitude": -73.922097,
          "BIN": 3075391
        },
        {
          "Eviction Address": "69 CENTRAL AVENUE",
          "Eviction Apartment Number": 1,
          "Executed Date": "10/17/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.70106,
          "Longitude": -73.930384,
          "BIN": 3072057
        },
        {
          "Eviction Address": "555 HART STREET",
          "Eviction Apartment Number": "2-L",
          "Executed Date": "10/25/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.696791,
          "Longitude": -73.929494,
          "BIN": 3073090
        },
        {
          "Eviction Address": "156 WEIRFIELD STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "4/23/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.689884,
          "Longitude": -73.912294,
          "BIN": 3078569
        },
        {
          "Eviction Address": "16 CEDAR STREET",
          "Eviction Apartment Number": "BSMT",
          "Executed Date": "5/14/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.696212,
          "Longitude": -73.928961,
          "BIN": 3073474
        },
        {
          "Eviction Address": "248 MCKIBBIN STREET",
          "Eviction Apartment Number": "1F",
          "Executed Date": "2/3/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.705604,
          "Longitude": -73.937578,
          "BIN": 3071420
        },
        {
          "Eviction Address": "209 MORGAN AVENUE",
          "Eviction Apartment Number": "STUDIO C",
          "Executed Date": "6/3/19",
          "Year": 2019,
          "Eviction Postcode": 11211,
          "Latitude": 40.711451,
          "Longitude": -73.933958,
          "BIN": 3325764
        },
        {
          "Eviction Address": "581 VAN BUREN STREET",
          "Eviction Apartment Number": "2 FLOOR",
          "Executed Date": "9/28/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.692298,
          "Longitude": -73.925964,
          "BIN": 3413459
        },
        {
          "Eviction Address": "123 MELROSE STREET",
          "Eviction Apartment Number": "APT 317",
          "Executed Date": "4/5/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.699546,
          "Longitude": -73.933007,
          "BIN": 3426367
        },
        {
          "Eviction Address": "64 PALMETTO STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "1/10/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.690941,
          "Longitude": -73.919461,
          "BIN": 3076555
        },
        {
          "Eviction Address": "1026 MADISON STREET",
          "Eviction Apartment Number": "2ND FLOOR",
          "Executed Date": "5/20/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.690215,
          "Longitude": -73.917828,
          "BIN": 3076969
        },
        {
          "Eviction Address": "250 MOORE STREET",
          "Eviction Apartment Number": 407,
          "Executed Date": "3/21/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.704765,
          "Longitude": -73.93425,
          "BIN": 3071542
        },
        {
          "Eviction Address": "985 FLUSHING AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "5/26/22",
          "Year": 2022,
          "Eviction Postcode": 11206,
          "Latitude": 40.703018,
          "Longitude": -73.933115,
          "BIN": 3071642
        },
        {
          "Eviction Address": "41 ELDERT STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "1/23/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.686185,
          "Longitude": -73.913611,
          "BIN": 3078740
        },
        {
          "Eviction Address": "107 HARMAN STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "5/6/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.695859,
          "Longitude": -73.922859,
          "BIN": 3074726
        },
        {
          "Eviction Address": "17 GRANITE STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "3/29/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.68233,
          "Longitude": -73.908017,
          "BIN": 3080323
        },
        {
          "Eviction Address": "708 EVERGREEN AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "3/15/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.687457,
          "Longitude": -73.910534,
          "BIN": 3331915
        },
        {
          "Eviction Address": "165 MONTROSE AVENUE",
          "Eviction Apartment Number": "3B",
          "Executed Date": "12/14/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.707407,
          "Longitude": -73.942536,
          "BIN": 3071151
        },
        {
          "Eviction Address": "173 COOPER STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "4/30/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.688658,
          "Longitude": -73.906501,
          "BIN": 3079763
        },
        {
          "Eviction Address": "29 FURMAN AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "2/4/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.682132,
          "Longitude": -73.907047,
          "BIN": 3080388
        },
        {
          "Eviction Address": "131 MOORE STREET",
          "Eviction Apartment Number": "05D",
          "Executed Date": "3/24/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.70395,
          "Longitude": -73.940454,
          "BIN": 3071469
        },
        {
          "Eviction Address": "1178 HALSEY STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "3/25/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.69083,
          "Longitude": -73.910197,
          "BIN": 3078833
        },
        {
          "Eviction Address": "80 ABERDEEN STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "12/6/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.68308,
          "Longitude": -73.904922,
          "BIN": 3080457
        },
        {
          "Eviction Address": "1157 GREENE AVENUE",
          "Eviction Apartment Number": "ENTIRE",
          "Executed Date": "1/13/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.694846,
          "Longitude": -73.922684,
          "BIN": 3075061
        },
        {
          "Eviction Address": "48 WILSON AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "3/20/24",
          "Year": 2024,
          "Eviction Postcode": 11237,
          "Latitude": 40.702711,
          "Longitude": -73.929271,
          "BIN": 3071960
        },
        {
          "Eviction Address": "1079 HANCOCK ST.",
          "Eviction Apartment Number": "2ND FL.",
          "Executed Date": "9/27/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.688942,
          "Longitude": -73.914415,
          "BIN": 3077863
        },
        {
          "Eviction Address": "140 STANHOPE STREET",
          "Eviction Apartment Number": "STORE AND BASEMENT",
          "Executed Date": "4/29/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.698187,
          "Longitude": -73.922893,
          "BIN": 3425864
        },
        {
          "Eviction Address": "715 CHAUNCEY STREET",
          "Eviction Apartment Number": "ENTIRE GROUND FL A/K",
          "Executed Date": "8/17/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.684951,
          "Longitude": -73.907793,
          "BIN": 3080111
        },
        {
          "Eviction Address": "315 SEIGEL STREET",
          "Eviction Apartment Number": 203,
          "Executed Date": "8/2/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.705572,
          "Longitude": -73.93396,
          "BIN": 3071423
        },
        {
          "Eviction Address": "168 JOHNSON AVENUE",
          "Eviction Apartment Number": "1ST FLOOR",
          "Executed Date": "4/16/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.706627,
          "Longitude": -73.942681,
          "BIN": 3071291
        },
        {
          "Eviction Address": "78 DE SALES PLACE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "3/10/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.682629,
          "Longitude": -73.904198,
          "BIN": 3080505
        },
        {
          "Eviction Address": "1286 JEFFERSON  AVE",
          "Eviction Apartment Number": 1,
          "Executed Date": "12/9/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.692355,
          "Longitude": -73.912215,
          "BIN": 3077943
        },
        {
          "Eviction Address": "107 LINDEN STREET",
          "Eviction Apartment Number": "B5",
          "Executed Date": "6/17/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.693041,
          "Longitude": -73.919765,
          "BIN": 3076112
        },
        {
          "Eviction Address": "190 SCHAEFER STREET",
          "Eviction Apartment Number": "4-L",
          "Executed Date": "4/26/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.689705,
          "Longitude": -73.907786,
          "BIN": 3079496
        },
        {
          "Eviction Address": "1091 GATES AVENUE",
          "Eviction Apartment Number": "3U",
          "Executed Date": "1/25/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.690045,
          "Longitude": -73.921539,
          "BIN": 3076225
        },
        {
          "Eviction Address": "33A LAWTON STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "12/3/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.695587,
          "Longitude": -73.930299,
          "BIN": 3073363
        },
        {
          "Eviction Address": "173 COOPER STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "4/30/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.688658,
          "Longitude": -73.906501,
          "BIN": 3079763
        },
        {
          "Eviction Address": "246 STAGG STREET",
          "Eviction Apartment Number": "1-R",
          "Executed Date": "10/23/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.709906,
          "Longitude": -73.93919,
          "BIN": 3070880
        },
        {
          "Eviction Address": "1052 HALSEY STREET",
          "Eviction Apartment Number": "2ND FLOOR APT",
          "Executed Date": "3/3/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.687739,
          "Longitude": -73.91323,
          "BIN": 3331158
        },
        {
          "Eviction Address": "1282 PUTNAM AVE",
          "Eviction Apartment Number": "APT#1 & BASEMENT",
          "Executed Date": "8/29/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.69279,
          "Longitude": -73.914129,
          "BIN": 3077252
        },
        {
          "Eviction Address": "123 MELROSE STREET",
          "Eviction Apartment Number": "APT 539",
          "Executed Date": "4/5/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.699546,
          "Longitude": -73.933007,
          "BIN": 3426367
        },
        {
          "Eviction Address": "996 WILLOUGHBY   AVE NUE",
          "Eviction Apartment Number": 6,
          "Executed Date": "2/5/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.698745,
          "Longitude": -73.929142,
          "BIN": 3072881
        },
        {
          "Eviction Address": "148 JEFFERSON STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "11/20/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.70031,
          "Longitude": -73.930179,
          "BIN": 3400623
        },
        {
          "Eviction Address": "248 MCKIBBIN STREET",
          "Eviction Apartment Number": "1T",
          "Executed Date": "8/11/22",
          "Year": 2022,
          "Eviction Postcode": 11206,
          "Latitude": 40.705604,
          "Longitude": -73.937578,
          "BIN": 3071420
        },
        {
          "Eviction Address": "986 HALSEY STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "12/4/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.686142,
          "Longitude": -73.91479,
          "BIN": 3078718
        },
        {
          "Eviction Address": "38 CORNELIA STREET",
          "Eviction Apartment Number": "ROOM 2",
          "Executed Date": "2/1/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.688239,
          "Longitude": -73.917423,
          "BIN": 3077449
        },
        {
          "Eviction Address": "15 LAWTON STREET",
          "Eviction Apartment Number": 14,
          "Executed Date": "7/18/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.695189,
          "Longitude": -73.930675,
          "BIN": 3326299
        },
        {
          "Eviction Address": "1041 BUSHWICK AVENUE",
          "Eviction Apartment Number": "4-Jan",
          "Executed Date": "2/1/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.691107,
          "Longitude": -73.920957,
          "BIN": 3076258
        },
        {
          "Eviction Address": "983 HANCOCK STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "11/20/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.68694,
          "Longitude": -73.916379,
          "BIN": 3077830
        },
        {
          "Eviction Address": "18 GOODWIN PLACE",
          "Eviction Apartment Number": "2F",
          "Executed Date": "5/12/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.69182,
          "Longitude": -73.924234,
          "BIN": 3392173
        },
        {
          "Eviction Address": "1157 MYRTLE AVENUE",
          "Eviction Apartment Number": "2A",
          "Executed Date": "10/11/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.697047,
          "Longitude": -73.934733,
          "BIN": 3000000
        },
        {
          "Eviction Address": "1128 BUSHWICK AVENUE",
          "Eviction Apartment Number": "ONE ROOM #4",
          "Executed Date": "11/17/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.689521,
          "Longitude": -73.918197,
          "BIN": 3076937
        },
        {
          "Eviction Address": "166 SCHOLES STREET",
          "Eviction Apartment Number": "1B",
          "Executed Date": "2/14/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.708826,
          "Longitude": -73.942877,
          "BIN": 3390826
        },
        {
          "Eviction Address": "1023 BROADWAY",
          "Eviction Apartment Number": "3Y",
          "Executed Date": "4/2/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.695594,
          "Longitude": -73.932759,
          "BIN": 3390846
        },
        {
          "Eviction Address": "1216 BUSHWICK AVENUE",
          "Eviction Apartment Number": 3,
          "Executed Date": "1/22/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.688023,
          "Longitude": -73.915566,
          "BIN": 3077814
        },
        {
          "Eviction Address": "617 HART STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "4/17/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.698118,
          "Longitude": -73.927343,
          "BIN": 3073108
        },
        {
          "Eviction Address": "907 BROADWAY",
          "Eviction Apartment Number": 1,
          "Executed Date": "2/26/20",
          "Year": 2020,
          "Eviction Postcode": 11206,
          "Latitude": 40.697745,
          "Longitude": -73.936593,
          "BIN": 3071872
        },
        {
          "Eviction Address": "37 STANHOPE STREET",
          "Eviction Apartment Number": 3,
          "Executed Date": "5/22/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.695669,
          "Longitude": -73.925387,
          "BIN": 3392659
        },
        {
          "Eviction Address": "36 DITMARS STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "9/13/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.696972,
          "Longitude": -73.933082,
          "BIN": 3072680
        },
        {
          "Eviction Address": "154 CORNELIA STREET",
          "Eviction Apartment Number": "1 FLOOR",
          "Executed Date": "5/13/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.691157,
          "Longitude": -73.91456,
          "BIN": 3077543
        },
        {
          "Eviction Address": "400 CENTRAL AVENUE",
          "Eviction Apartment Number": "2C",
          "Executed Date": "12/1/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.69364,
          "Longitude": -73.917366,
          "BIN": 3326138
        },
        {
          "Eviction Address": "811 FLUSHING AVENUE",
          "Eviction Apartment Number": "14I",
          "Executed Date": "12/8/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.70117,
          "Longitude": -73.940049,
          "BIN": 3338432
        },
        {
          "Eviction Address": "1342 BUSHWICK AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "9/8/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.685698,
          "Longitude": -73.911481,
          "BIN": 3079410
        },
        {
          "Eviction Address": "156 CORNELIA ST",
          "Eviction Apartment Number": 3,
          "Executed Date": "2/21/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.691193,
          "Longitude": -73.914524,
          "BIN": 3077544
        },
        {
          "Eviction Address": "887-889 BROADWAY",
          "Eviction Apartment Number": "2B",
          "Executed Date": "3/6/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.698058,
          "Longitude": -73.937141,
          "BIN": 3071786
        },
        {
          "Eviction Address": "438 WILSON AVE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "3/11/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.693464,
          "Longitude": -73.913028,
          "BIN": 3077265
        },
        {
          "Eviction Address": "990 DECATUR STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "9/30/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.68465,
          "Longitude": -73.911569,
          "BIN": 3079628
        },
        {
          "Eviction Address": "36 LINDEN STREET",
          "Eviction Apartment Number": "1B",
          "Executed Date": "5/10/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.690874,
          "Longitude": -73.921866,
          "BIN": 3076222
        },
        {
          "Eviction Address": "10 FORREST STREET",
          "Eviction Apartment Number": "B1",
          "Executed Date": "3/1/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.700764,
          "Longitude": -73.935974,
          "BIN": 3387594
        },
        {
          "Eviction Address": "33A LAWTON STREET",
          "Eviction Apartment Number": "UNIT 1 A/K/A 1ST FL",
          "Executed Date": "1/17/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.695587,
          "Longitude": -73.930299,
          "BIN": 3073363
        },
        {
          "Eviction Address": "67 CENTRAL AVENUE",
          "Eviction Apartment Number": "1A",
          "Executed Date": "2/9/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.701096,
          "Longitude": -73.930445,
          "BIN": 3072058
        },
        {
          "Eviction Address": "1470 BUSHWICK AVENUE APT. 2R",
          "Eviction Apartment Number": "2R",
          "Executed Date": "7/18/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.683452,
          "Longitude": -73.907532,
          "BIN": 3080314
        },
        {
          "Eviction Address": "715 CHAUNCEY STREET",
          "Eviction Apartment Number": "ENTIRE 2ND FL A/K/A",
          "Executed Date": "10/10/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.684951,
          "Longitude": -73.907793,
          "BIN": 3080111
        },
        {
          "Eviction Address": "57 TROUTMAN STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "12/15/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.69847,
          "Longitude": -73.931825,
          "BIN": 3072222
        },
        {
          "Eviction Address": "304 ELLERY STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "6/12/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.699396,
          "Longitude": -73.940216,
          "BIN": 3042832
        },
        {
          "Eviction Address": "1330 BUSHWICK AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "8/14/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.685976,
          "Longitude": -73.911967,
          "BIN": 3079177
        },
        {
          "Eviction Address": "1282 PUTNAM AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "3/25/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.69279,
          "Longitude": -73.914129,
          "BIN": 3077252
        },
        {
          "Eviction Address": "1188 GREENE AVENUE",
          "Eviction Apartment Number": 1,
          "Executed Date": "9/19/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.695003,
          "Longitude": -73.922503,
          "BIN": 3075365
        },
        {
          "Eviction Address": "1111 LAFAYETTE AVENU E",
          "Eviction Apartment Number": "4D",
          "Executed Date": "10/4/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.692724,
          "Longitude": -73.92671,
          "BIN": 3074343
        },
        {
          "Eviction Address": "715 CHAUNCEY STREET",
          "Eviction Apartment Number": "FIRST FLOOR",
          "Executed Date": "10/5/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.684951,
          "Longitude": -73.907793,
          "BIN": 3080111
        },
        {
          "Eviction Address": "68 GEORGE STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "10/18/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.702018,
          "Longitude": -73.930841,
          "BIN": 3071943
        },
        {
          "Eviction Address": "1329 MYRTLE AVENUE",
          "Eviction Apartment Number": "1D",
          "Executed Date": "10/6/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.698188,
          "Longitude": -73.924411,
          "BIN": 3343376
        },
        {
          "Eviction Address": "82 JEFFERSON STREET",
          "Eviction Apartment Number": "1C",
          "Executed Date": "5/12/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.699046,
          "Longitude": -73.932279,
          "BIN": 3072211
        },
        {
          "Eviction Address": "1131 HANCOCK STREET",
          "Eviction Apartment Number": 4,
          "Executed Date": "8/9/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.690165,
          "Longitude": -73.91322,
          "BIN": 3077911
        },
        {
          "Eviction Address": "1023 BROADWAY",
          "Eviction Apartment Number": "2X",
          "Executed Date": "1/31/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.695594,
          "Longitude": -73.932759,
          "BIN": 3390846
        },
        {
          "Eviction Address": "852 BUSHWICK AVENUE STORE #1",
          "Eviction Apartment Number": "",
          "Executed Date": "6/27/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.694204,
          "Longitude": -73.926615,
          "BIN": 3074019
        },
        {
          "Eviction Address": "900 GRAND ST STORE#2 FURNITURE",
          "Eviction Apartment Number": "",
          "Executed Date": "7/11/17",
          "Year": 2017,
          "Eviction Postcode": 11211,
          "Latitude": 40.712568,
          "Longitude": -73.938109,
          "BIN": 3325736
        },
        {
          "Eviction Address": "115 STANWIX STREET",
          "Eviction Apartment Number": 621,
          "Executed Date": "2/26/20",
          "Year": 2020,
          "Eviction Postcode": 11206,
          "Latitude": 40.702229,
          "Longitude": -73.935313,
          "BIN": 3426343
        },
        {
          "Eviction Address": "618 BUSHWICK AVENUE",
          "Eviction Apartment Number": 116,
          "Executed Date": "5/17/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.698207,
          "Longitude": -73.933899,
          "BIN": 3425505
        },
        {
          "Eviction Address": "296 ELLERY STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "2/26/20",
          "Year": 2020,
          "Eviction Postcode": 11206,
          "Latitude": 40.699366,
          "Longitude": -73.940498,
          "BIN": 3042828
        },
        {
          "Eviction Address": "120 MENAHAN STREET",
          "Eviction Apartment Number": "5A",
          "Executed Date": "11/2/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.695464,
          "Longitude": -73.919697,
          "BIN": 3075906
        },
        {
          "Eviction Address": "1470 BUSHWICK AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "2/22/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.683452,
          "Longitude": -73.907532,
          "BIN": 3080314
        },
        {
          "Eviction Address": "67 CENTRAL AVENUE",
          "Eviction Apartment Number": "1A",
          "Executed Date": "2/9/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.701096,
          "Longitude": -73.930445,
          "BIN": 3072058
        },
        {
          "Eviction Address": "311 EVERGREEN AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "5/17/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.694499,
          "Longitude": -73.924354,
          "BIN": 3074680
        },
        {
          "Eviction Address": "142 GROVE STREET",
          "Eviction Apartment Number": "1L",
          "Executed Date": "9/9/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.694079,
          "Longitude": -73.919893,
          "BIN": 3076090
        },
        {
          "Eviction Address": "24 HUMBOLDT STREET",
          "Eviction Apartment Number": "05J",
          "Executed Date": "3/24/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.702194,
          "Longitude": -73.9406,
          "BIN": 3338433
        },
        {
          "Eviction Address": "186 SUYDAM STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "3/21/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.699888,
          "Longitude": -73.925906,
          "BIN": 3073128
        },
        {
          "Eviction Address": "1183 GATES AVENUE",
          "Eviction Apartment Number": "1-C",
          "Executed Date": "5/29/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.691839,
          "Longitude": -73.919777,
          "BIN": 3076251
        },
        {
          "Eviction Address": "24 GRANITE STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "11/4/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.682434,
          "Longitude": -73.907887,
          "BIN": 3080371
        },
        {
          "Eviction Address": "170 SUYDAM STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "11/10/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.699559,
          "Longitude": -73.926231,
          "BIN": 3073120
        },
        {
          "Eviction Address": "1470 BUSHWICK AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "2/22/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.683452,
          "Longitude": -73.907532,
          "BIN": 3080314
        },
        {
          "Eviction Address": "19 COVERT STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "5/31/22",
          "Year": 2022,
          "Eviction Postcode": 11217,
          "Latitude": 40.685408,
          "Longitude": -73.913208,
          "BIN": 3398413
        },
        {
          "Eviction Address": "205 WEIRFIELD STREET",
          "Eviction Apartment Number": "BACK ROOM GROUND FL",
          "Executed Date": "5/5/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.691215,
          "Longitude": -73.911015,
          "BIN": 3078322
        },
        {
          "Eviction Address": "315 SEIGEL STREET",
          "Eviction Apartment Number": 307,
          "Executed Date": "2/17/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.705572,
          "Longitude": -73.93396,
          "BIN": 3071423
        },
        {
          "Eviction Address": "24 LAWTON STREET",
          "Eviction Apartment Number": "3B",
          "Executed Date": "1/26/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.695356,
          "Longitude": -73.93049,
          "BIN": 3395061
        },
        {
          "Eviction Address": "1182 PUTNAM AVENUE",
          "Eviction Apartment Number": "1B",
          "Executed Date": "6/23/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.690181,
          "Longitude": -73.916685,
          "BIN": 3077177
        },
        {
          "Eviction Address": "172 SCHAEFER STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "5/17/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.689332,
          "Longitude": -73.908151,
          "BIN": 3079485
        },
        {
          "Eviction Address": "1172 GREENE AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "3/31/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.694734,
          "Longitude": -73.922767,
          "BIN": 3075358
        },
        {
          "Eviction Address": "24 LAWTON STREET",
          "Eviction Apartment Number": "1D",
          "Executed Date": "5/25/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.695356,
          "Longitude": -73.93049,
          "BIN": 3395061
        },
        {
          "Eviction Address": "1028 BUSHWICK AVE AKA 44 LINDEN STREET",
          "Eviction Apartment Number": "2B",
          "Executed Date": "8/15/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.691283,
          "Longitude": -73.921303,
          "BIN": 3076223
        },
        {
          "Eviction Address": "1204 BUSHWICK AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "4/8/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.688202,
          "Longitude": -73.915884,
          "BIN": 3077810
        },
        {
          "Eviction Address": "1023 BROADWAY",
          "Eviction Apartment Number": "3Z",
          "Executed Date": "8/28/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.695594,
          "Longitude": -73.932759,
          "BIN": 3390846
        },
        {
          "Eviction Address": "81 ELDERT STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "8/23/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.687318,
          "Longitude": -73.912495,
          "BIN": 3078780
        },
        {
          "Eviction Address": "150 HUMBOLDT STREET",
          "Eviction Apartment Number": "3-B",
          "Executed Date": "1/4/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.706372,
          "Longitude": -73.941325,
          "BIN": 3327965
        },
        {
          "Eviction Address": "130 HUMBOLDT STREET",
          "Eviction Apartment Number": "02G",
          "Executed Date": "5/18/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.705696,
          "Longitude": -73.94121,
          "BIN": 3071357
        },
        {
          "Eviction Address": "20 JEFFERSON STREET",
          "Eviction Apartment Number": "2F",
          "Executed Date": "3/10/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.69762,
          "Longitude": -73.934596,
          "BIN": 3072176
        },
        {
          "Eviction Address": "73 LINDEN STREET",
          "Eviction Apartment Number": 8,
          "Executed Date": "11/27/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.691903,
          "Longitude": -73.920888,
          "BIN": 3076073
        },
        {
          "Eviction Address": "628 WILSON AVENUE",
          "Eviction Apartment Number": "3-R",
          "Executed Date": "7/19/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.689262,
          "Longitude": -73.905627,
          "BIN": 3080016
        },
        {
          "Eviction Address": "17 CORNELIA STREET",
          "Eviction Apartment Number": "2ND FL",
          "Executed Date": "8/18/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.687877,
          "Longitude": -73.917802,
          "BIN": 3077160
        },
        {
          "Eviction Address": "1179 JEFFERSON AVE",
          "Eviction Apartment Number": "FIRST FLOOR",
          "Executed Date": "4/5/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.690388,
          "Longitude": -73.914172,
          "BIN": 3077569
        },
        {
          "Eviction Address": "54 JEFFERSON STREET",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "4/19/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.698715,
          "Longitude": -73.933062,
          "BIN": 3072198
        },
        {
          "Eviction Address": "64 TROUTMAN STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "3/29/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.69856,
          "Longitude": -73.931569,
          "BIN": 3072451
        },
        {
          "Eviction Address": "378 CENTRAL AVENUE",
          "Eviction Apartment Number": "",
          "Executed Date": "8/24/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.69416,
          "Longitude": -73.918274,
          "BIN": 3076271
        },
        {
          "Eviction Address": "54 NOLL STREET",
          "Eviction Apartment Number": 828,
          "Executed Date": "1/3/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.700554,
          "Longitude": -73.934214,
          "BIN": 3418158
        },
        {
          "Eviction Address": "1125 MADISON STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "12/18/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.692143,
          "Longitude": -73.915962,
          "BIN": 3251952
        },
        {
          "Eviction Address": "81 ELDERT STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "9/13/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.687318,
          "Longitude": -73.912495,
          "BIN": 3078780
        },
        {
          "Eviction Address": "35 COVERT STREET",
          "Eviction Apartment Number": "3R",
          "Executed Date": "3/6/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.685757,
          "Longitude": -73.912865,
          "BIN": 3078985
        },
        {
          "Eviction Address": "334 CENTRAL AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "6/2/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.695289,
          "Longitude": -73.920263,
          "BIN": 3075628
        },
        {
          "Eviction Address": "166 SCHOLES STREET 1B",
          "Eviction Apartment Number": "1B",
          "Executed Date": "2/14/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.708826,
          "Longitude": -73.942877,
          "BIN": 3390826
        },
        {
          "Eviction Address": "160 MENAHAN STREET",
          "Eviction Apartment Number": "4K",
          "Executed Date": "9/7/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.696581,
          "Longitude": -73.918599,
          "BIN": 3342263
        },
        {
          "Eviction Address": "1104 BUSHWICK AVENUE AKA 42 WOODBINE STREET",
          "Eviction Apartment Number": "2-R",
          "Executed Date": "7/31/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.68995,
          "Longitude": -73.918954,
          "BIN": 3076719
        },
        {
          "Eviction Address": "66 COOPER STREET",
          "Eviction Apartment Number": "1-R",
          "Executed Date": "4/6/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.685354,
          "Longitude": -73.909714,
          "BIN": 3079900
        },
        {
          "Eviction Address": "1114 GATES AVENUE",
          "Eviction Apartment Number": "ROOM 1D (AS DESIGNAT",
          "Executed Date": "11/20/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.690366,
          "Longitude": -73.921196,
          "BIN": 3076410
        },
        {
          "Eviction Address": "82 GEORGE STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "5/6/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.702287,
          "Longitude": -73.930577,
          "BIN": 3071949
        },
        {
          "Eviction Address": "986 HANCOCK STREET",
          "Eviction Apartment Number": "2FL",
          "Executed Date": "5/25/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.686962,
          "Longitude": -73.916332,
          "BIN": 3078146
        },
        {
          "Eviction Address": "177 TROUTMAN STREET",
          "Eviction Apartment Number": "3L",
          "Executed Date": "6/11/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.70105,
          "Longitude": -73.928303,
          "BIN": 3072296
        },
        {
          "Eviction Address": "1244 PUTNAM AVE",
          "Eviction Apartment Number": "1FL",
          "Executed Date": "10/18/17",
          "Year": 2017,
          "Eviction Postcode": 11224,
          "Latitude": 40.691665,
          "Longitude": -73.91523,
          "BIN": 3077218
        },
        {
          "Eviction Address": "114A LINDEN STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "4/17/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.693329,
          "Longitude": -73.919458,
          "BIN": 3342575
        },
        {
          "Eviction Address": "51 COVERT STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "6/23/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.686388,
          "Longitude": -73.912244,
          "BIN": 3389126
        },
        {
          "Eviction Address": "1345 DEKALB AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "8/22/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.69857,
          "Longitude": -73.924886,
          "BIN": 3325496
        },
        {
          "Eviction Address": "225 COOK STREET",
          "Eviction Apartment Number": "UNIT #4-C",
          "Executed Date": "4/17/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.703406,
          "Longitude": -73.933757,
          "BIN": 3071591
        },
        {
          "Eviction Address": "76 HIMROD STREET",
          "Eviction Apartment Number": 1,
          "Executed Date": "9/9/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.695791,
          "Longitude": -73.924067,
          "BIN": 3074702
        },
        {
          "Eviction Address": "54 PILLING STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "6/9/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.683439,
          "Longitude": -73.90808,
          "BIN": 3390416
        },
        {
          "Eviction Address": "1441 BUSHWICK AVENUE",
          "Eviction Apartment Number": "3L",
          "Executed Date": "4/8/24",
          "Year": 2024,
          "Eviction Postcode": 11207,
          "Latitude": 40.683972,
          "Longitude": -73.908415,
          "BIN": 3080233
        },
        {
          "Eviction Address": "28 MELROSE ST",
          "Eviction Apartment Number": "2B",
          "Executed Date": "6/1/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.698002,
          "Longitude": -73.935418,
          "BIN": 3400532
        },
        {
          "Eviction Address": "991 WILLOUGHBY  AVEN UE",
          "Eviction Apartment Number": "9B",
          "Executed Date": "5/11/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.698696,
          "Longitude": -73.929254,
          "BIN": 3414119
        },
        {
          "Eviction Address": "74 STOCKHOLM ST",
          "Eviction Apartment Number": "",
          "Executed Date": "4/23/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.696753,
          "Longitude": -73.925465,
          "BIN": 3389154
        },
        {
          "Eviction Address": "1023 BROADWAY",
          "Eviction Apartment Number": "2Z",
          "Executed Date": "8/18/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.695594,
          "Longitude": -73.932759,
          "BIN": 3390846
        },
        {
          "Eviction Address": "315 SEIGEL STREET A/ K/A 59 BOGART STREET",
          "Eviction Apartment Number": 301,
          "Executed Date": "3/27/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.705572,
          "Longitude": -73.93396,
          "BIN": 3071423
        },
        {
          "Eviction Address": "71 PILLING STREET",
          "Eviction Apartment Number": "3RD FLOOR",
          "Executed Date": "9/6/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.684169,
          "Longitude": -73.907387,
          "BIN": 3080274
        },
        {
          "Eviction Address": "863 BROADWAY",
          "Eviction Apartment Number": "STORE",
          "Executed Date": "2/6/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.698569,
          "Longitude": -73.938039,
          "BIN": 3071765
        },
        {
          "Eviction Address": "186 SCHAEFER STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "12/9/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.68962,
          "Longitude": -73.907866,
          "BIN": 3079494
        },
        {
          "Eviction Address": "644 KOSCIUSKO STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "12/3/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.693878,
          "Longitude": -73.927834,
          "BIN": 3074010
        },
        {
          "Eviction Address": "15 LAWTON STREET",
          "Eviction Apartment Number": 35,
          "Executed Date": "2/2/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.695189,
          "Longitude": -73.930675,
          "BIN": 3326299
        },
        {
          "Eviction Address": "31 CEDAR STREET",
          "Eviction Apartment Number": "BSMT",
          "Executed Date": "1/4/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.696513,
          "Longitude": -73.928499,
          "BIN": 3073382
        },
        {
          "Eviction Address": "1126 HALSEY STREET",
          "Eviction Apartment Number": "BACK ROOM LEFT SIDE",
          "Executed Date": "6/19/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.689505,
          "Longitude": -73.911494,
          "BIN": 3078802
        },
        {
          "Eviction Address": "169 CENTRAL AVENUE",
          "Eviction Apartment Number": "THE ENTIRE BUILDING",
          "Executed Date": "4/3/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.698826,
          "Longitude": -73.92644,
          "BIN": 3073114
        },
        {
          "Eviction Address": "15 GOODWIN PLACE",
          "Eviction Apartment Number": 1,
          "Executed Date": "12/18/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.691864,
          "Longitude": -73.924277,
          "BIN": 3075317
        },
        {
          "Eviction Address": "123 MELROSE STREET",
          "Eviction Apartment Number": 711,
          "Executed Date": "2/5/24",
          "Year": 2024,
          "Eviction Postcode": 11206,
          "Latitude": 40.699546,
          "Longitude": -73.933007,
          "BIN": 3426367
        },
        {
          "Eviction Address": "1026 MADISON STREET",
          "Eviction Apartment Number": "2ND FLOOR",
          "Executed Date": "5/20/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.690215,
          "Longitude": -73.917828,
          "BIN": 3076969
        },
        {
          "Eviction Address": "642 CHAUNCEY STREET",
          "Eviction Apartment Number": "1ST FLOOR",
          "Executed Date": "5/1/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.683322,
          "Longitude": -73.909364,
          "BIN": 3080186
        },
        {
          "Eviction Address": "614 VAN BUREN STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "10/25/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.692789,
          "Longitude": -73.925455,
          "BIN": 3074959
        },
        {
          "Eviction Address": "1345 MYRTLE AVE -  GARAGE",
          "Eviction Apartment Number": "",
          "Executed Date": "5/9/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.698275,
          "Longitude": -73.923552,
          "BIN": 3074114
        },
        {
          "Eviction Address": "592 VAN BUREN STREET",
          "Eviction Apartment Number": "UNIT 2",
          "Executed Date": "2/24/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.692444,
          "Longitude": -73.925795,
          "BIN": 3074948
        },
        {
          "Eviction Address": "106 LINDEN STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "7/18/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.693164,
          "Longitude": -73.91962,
          "BIN": 3342294
        },
        {
          "Eviction Address": "165 MESEROLE STREET",
          "Eviction Apartment Number": 9,
          "Executed Date": "8/21/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.708156,
          "Longitude": -73.942521,
          "BIN": 3070999
        },
        {
          "Eviction Address": "143 HIMROD STREET",
          "Eviction Apartment Number": "2P",
          "Executed Date": "1/11/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.697278,
          "Longitude": -73.922638,
          "BIN": 3393892
        },
        {
          "Eviction Address": "960 WILLOUGHBY AVENU E",
          "Eviction Apartment Number": "3M",
          "Executed Date": "6/23/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.697851,
          "Longitude": -73.930603,
          "BIN": 3413844
        },
        {
          "Eviction Address": "1157 MYRTLE AVENUE",
          "Eviction Apartment Number": "GROUND FL STORE",
          "Executed Date": "9/9/22",
          "Year": 2022,
          "Eviction Postcode": 11206,
          "Latitude": 40.697047,
          "Longitude": -73.934733,
          "BIN": 3000000
        },
        {
          "Eviction Address": "110 GROVE STREET",
          "Eviction Apartment Number": "3E",
          "Executed Date": "1/4/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.693442,
          "Longitude": -73.920514,
          "BIN": 3076082
        },
        {
          "Eviction Address": "117 STANHOPE STREET",
          "Eviction Apartment Number": "1ST & 2ND FLOOR",
          "Executed Date": "9/27/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.697707,
          "Longitude": -73.923391,
          "BIN": 3074106
        },
        {
          "Eviction Address": "524 WILSON AVENUE",
          "Eviction Apartment Number": 1,
          "Executed Date": "10/3/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.691694,
          "Longitude": -73.909904,
          "BIN": 3078630
        },
        {
          "Eviction Address": "946 BUSHWICK AVENUE",
          "Eviction Apartment Number": "C9",
          "Executed Date": "5/3/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.692522,
          "Longitude": -73.923498,
          "BIN": 3075292
        },
        {
          "Eviction Address": "1256 JEFFERSON AVENU E",
          "Eviction Apartment Number": 2,
          "Executed Date": "3/28/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.69191,
          "Longitude": -73.912648,
          "BIN": 3077930
        },
        {
          "Eviction Address": "24 COVERT STREET",
          "Eviction Apartment Number": "2F",
          "Executed Date": "4/3/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.685485,
          "Longitude": -73.913107,
          "BIN": 3326316
        },
        {
          "Eviction Address": "663 CENTRAL AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "7/3/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.687363,
          "Longitude": -73.906293,
          "BIN": 3080153
        },
        {
          "Eviction Address": "55 MENAHAN STREET",
          "Eviction Apartment Number": "2ND FLOOR",
          "Executed Date": "8/14/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.693854,
          "Longitude": -73.921307,
          "BIN": 3393077
        },
        {
          "Eviction Address": "77 SCHAEFER STREET",
          "Eviction Apartment Number": "2 AND 3",
          "Executed Date": "9/20/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.686625,
          "Longitude": -73.910838,
          "BIN": 3079217
        },
        {
          "Eviction Address": "618 BUSHWICK AVENUE",
          "Eviction Apartment Number": 314,
          "Executed Date": "2/6/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.698207,
          "Longitude": -73.933899,
          "BIN": 3425505
        },
        {
          "Eviction Address": "1131 BROADWAY",
          "Eviction Apartment Number": "REAR UNIT",
          "Executed Date": "1/18/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.693596,
          "Longitude": -73.92923,
          "BIN": 3073753
        },
        {
          "Eviction Address": "29 FURMAN AVENUE",
          "Eviction Apartment Number": "1L",
          "Executed Date": "4/1/24",
          "Year": 2024,
          "Eviction Postcode": 11207,
          "Latitude": 40.682132,
          "Longitude": -73.907047,
          "BIN": 3080388
        },
        {
          "Eviction Address": "946 BUSHWICK AVENUE",
          "Eviction Apartment Number": "F1",
          "Executed Date": "10/2/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.692522,
          "Longitude": -73.923498,
          "BIN": 3075292
        },
        {
          "Eviction Address": "80 ABERDEEN STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "12/6/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.68308,
          "Longitude": -73.904922,
          "BIN": 3080457
        },
        {
          "Eviction Address": "49 COOPER STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "1/3/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.68469,
          "Longitude": -73.910386,
          "BIN": 3389481
        },
        {
          "Eviction Address": "82 GEORGE STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "5/6/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.702287,
          "Longitude": -73.930577,
          "BIN": 3071949
        },
        {
          "Eviction Address": "1209 BUSHWICK AVENUE",
          "Eviction Apartment Number": "3F",
          "Executed Date": "1/9/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.688141,
          "Longitude": -73.915739,
          "BIN": 3077833
        },
        {
          "Eviction Address": "981 HALSEY STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "11/19/19",
          "Year": 2019,
          "Eviction Postcode": 11207,
          "Latitude": 40.686052,
          "Longitude": -73.914906,
          "BIN": 3078502
        },
        {
          "Eviction Address": "61 MELROSE STREET",
          "Eviction Apartment Number": "5E",
          "Executed Date": "10/1/18",
          "Year": 2018,
          "Eviction Postcode": 11206,
          "Latitude": 40.698855,
          "Longitude": -73.934627,
          "BIN": 3400523
        },
        {
          "Eviction Address": "133 MENAHAN STREET",
          "Eviction Apartment Number": "2L",
          "Executed Date": "5/8/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.695615,
          "Longitude": -73.919574,
          "BIN": 3075661
        },
        {
          "Eviction Address": "1081 HANCOCK STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "4/19/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.688977,
          "Longitude": -73.914383,
          "BIN": 3077862
        },
        {
          "Eviction Address": "51 COVERT STREET",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "4/7/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.686388,
          "Longitude": -73.912244,
          "BIN": 3389126
        },
        {
          "Eviction Address": "811 FLUSHING AVENUE",
          "Eviction Apartment Number": "04D",
          "Executed Date": "5/6/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.70117,
          "Longitude": -73.940049,
          "BIN": 3338432
        },
        {
          "Eviction Address": "85 MOFFAT STREET",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "3/27/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.685292,
          "Longitude": -73.908629,
          "BIN": 3079935
        },
        {
          "Eviction Address": "1225 BUSHWICK AVENUE",
          "Eviction Apartment Number": "D-3",
          "Executed Date": "8/20/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.687823,
          "Longitude": -73.915181,
          "BIN": 3078192
        },
        {
          "Eviction Address": "1209 BUSHWICK AVENUE",
          "Eviction Apartment Number": "1H",
          "Executed Date": "4/1/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.688141,
          "Longitude": -73.915739,
          "BIN": 3077833
        },
        {
          "Eviction Address": "89 SCHAEFER STREET",
          "Eviction Apartment Number": "ONE ROOM WITH SHARED",
          "Executed Date": "3/16/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.686886,
          "Longitude": -73.910585,
          "BIN": 3079211
        },
        {
          "Eviction Address": "170 PALMETTO STREET",
          "Eviction Apartment Number": "01A",
          "Executed Date": "11/30/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.693648,
          "Longitude": -73.9168,
          "BIN": 3326165
        },
        {
          "Eviction Address": "291 EVERGREEN AVENUE",
          "Eviction Apartment Number": "3R",
          "Executed Date": "10/25/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.694927,
          "Longitude": -73.925103,
          "BIN": 3074370
        },
        {
          "Eviction Address": "64 PALMETTO STREET",
          "Eviction Apartment Number": "2R",
          "Executed Date": "7/5/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.690941,
          "Longitude": -73.919461,
          "BIN": 3076555
        },
        {
          "Eviction Address": "1091 GATES AVENUE",
          "Eviction Apartment Number": "4I",
          "Executed Date": "11/14/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.690045,
          "Longitude": -73.921539,
          "BIN": 3076225
        },
        {
          "Eviction Address": "126 GRAHAM AVENUE",
          "Eviction Apartment Number": "5B",
          "Executed Date": "1/13/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.705639,
          "Longitude": -73.942916,
          "BIN": 3071351
        },
        {
          "Eviction Address": "35 COVERT STREET",
          "Eviction Apartment Number": "3F",
          "Executed Date": "5/2/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.685757,
          "Longitude": -73.912865,
          "BIN": 3078985
        },
        {
          "Eviction Address": "67 SUYDAM STREET",
          "Eviction Apartment Number": "2ND FLOOR",
          "Executed Date": "11/17/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.69714,
          "Longitude": -73.930355,
          "BIN": 3390272
        },
        {
          "Eviction Address": "1209 DEKALB AVENUE",
          "Eviction Apartment Number": 419,
          "Executed Date": "7/23/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.695599,
          "Longitude": -73.927796,
          "BIN": 3421997
        },
        {
          "Eviction Address": "651 EVERGREEN AVE - APT BASEMENT",
          "Eviction Apartment Number": "BASEMENT",
          "Executed Date": "1/11/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.687512,
          "Longitude": -73.910595,
          "BIN": 3335068
        },
        {
          "Eviction Address": "240 WILSON AVENUE",
          "Eviction Apartment Number": "STORE",
          "Executed Date": "8/21/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.697977,
          "Longitude": -73.920942,
          "BIN": 3074762
        },
        {
          "Eviction Address": "1082 GREENE AVENUE APT 1",
          "Eviction Apartment Number": 1,
          "Executed Date": "10/6/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.692004,
          "Longitude": -73.925049,
          "BIN": 3075265
        },
        {
          "Eviction Address": "173 BLEECKER STREET",
          "Eviction Apartment Number": "GARAGE SPACE TO THE",
          "Executed Date": "4/4/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.696705,
          "Longitude": -73.919681,
          "BIN": 3075395
        },
        {
          "Eviction Address": "139 GROVE STREET",
          "Eviction Apartment Number": "4R",
          "Executed Date": "12/12/22",
          "Year": 2022,
          "Eviction Postcode": 11221,
          "Latitude": 40.694117,
          "Longitude": -73.919883,
          "BIN": 3426588
        },
        {
          "Eviction Address": "889 BROADWAY",
          "Eviction Apartment Number": "4F-2",
          "Executed Date": "11/22/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.698031,
          "Longitude": -73.937095,
          "BIN": 3071785
        },
        {
          "Eviction Address": "1002 BUSHWICK AVENUE",
          "Eviction Apartment Number": "1F",
          "Executed Date": "12/10/18",
          "Year": 2018,
          "Eviction Postcode": 11211,
          "Latitude": 40.691722,
          "Longitude": -73.922067,
          "BIN": 3076033
        },
        {
          "Eviction Address": "733 BUSHWICK AVENUE",
          "Eviction Apartment Number": 1,
          "Executed Date": "6/26/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.696166,
          "Longitude": -73.930169,
          "BIN": 3073371
        },
        {
          "Eviction Address": "1070 DECATUR STREET",
          "Eviction Apartment Number": "2ND FLOOR",
          "Executed Date": "12/1/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.686246,
          "Longitude": -73.910012,
          "BIN": 3390385
        },
        {
          "Eviction Address": "1181 BUSHWICK AVENUE",
          "Eviction Apartment Number": 2,
          "Executed Date": "5/4/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.688622,
          "Longitude": -73.91659,
          "BIN": 3077484
        },
        {
          "Eviction Address": "90 CORNELIA STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "9/25/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.689596,
          "Longitude": -73.916095,
          "BIN": 3077496
        },
        {
          "Eviction Address": "1330 BUSHWICK AVENUE",
          "Eviction Apartment Number": 3,
          "Executed Date": "2/27/23",
          "Year": 2023,
          "Eviction Postcode": 11207,
          "Latitude": 40.685976,
          "Longitude": -73.911967,
          "BIN": 3079177
        },
        {
          "Eviction Address": "1178 BUSHWICK AVENUE",
          "Eviction Apartment Number": "1B",
          "Executed Date": "12/13/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.688688,
          "Longitude": -73.916741,
          "BIN": 3077454
        },
        {
          "Eviction Address": "459 BUSHWICK AVENUE",
          "Eviction Apartment Number": "UNIT: RESTAURANT",
          "Executed Date": "10/4/19",
          "Year": 2019,
          "Eviction Postcode": 11216,
          "Latitude": 40.70178,
          "Longitude": -73.936914,
          "BIN": 3071828
        },
        {
          "Eviction Address": "27 ARION PLACE",
          "Eviction Apartment Number": 312,
          "Executed Date": "4/1/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.698494,
          "Longitude": -73.936084,
          "BIN": 3326076
        },
        {
          "Eviction Address": "811 FLUSHING AVENUE",
          "Eviction Apartment Number": "04D",
          "Executed Date": "5/6/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.70117,
          "Longitude": -73.940049,
          "BIN": 3338432
        },
        {
          "Eviction Address": "315 SEIGEL STREET",
          "Eviction Apartment Number": 106,
          "Executed Date": "1/20/17",
          "Year": 2017,
          "Eviction Postcode": 11206,
          "Latitude": 40.705572,
          "Longitude": -73.93396,
          "BIN": 3071423
        },
        {
          "Eviction Address": "1002 BUSHWICK AVENUE",
          "Eviction Apartment Number": "1C",
          "Executed Date": "1/10/20",
          "Year": 2020,
          "Eviction Postcode": 11211,
          "Latitude": 40.691722,
          "Longitude": -73.922067,
          "BIN": 3076033
        },
        {
          "Eviction Address": "197 SCHOLES STREET",
          "Eviction Apartment Number": "03A",
          "Executed Date": "5/30/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.708982,
          "Longitude": -73.941445,
          "BIN": 3345008
        },
        {
          "Eviction Address": "175 MOFFAT STREET",
          "Eviction Apartment Number": "",
          "Executed Date": "10/31/17",
          "Year": 2017,
          "Eviction Postcode": 11207,
          "Latitude": 40.687722,
          "Longitude": -73.906246,
          "BIN": 3388913
        },
        {
          "Eviction Address": "187 ELDERT STREET",
          "Eviction Apartment Number": "1A",
          "Executed Date": "4/9/18",
          "Year": 2018,
          "Eviction Postcode": 11207,
          "Latitude": 40.69014,
          "Longitude": -73.909729,
          "BIN": 3078854
        },
        {
          "Eviction Address": "573 EVERGREEN AVE.",
          "Eviction Apartment Number": 1,
          "Executed Date": "1/19/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.689251,
          "Longitude": -73.91365,
          "BIN": 3078238
        },
        {
          "Eviction Address": "1060 HANCOCK STREET",
          "Eviction Apartment Number": 9,
          "Executed Date": "2/21/17",
          "Year": 2017,
          "Eviction Postcode": 11221,
          "Latitude": 40.688577,
          "Longitude": -73.914747,
          "BIN": 3078195
        },
        {
          "Eviction Address": "263 MELROSE STREET",
          "Eviction Apartment Number": "3-L",
          "Executed Date": "1/10/22",
          "Year": 2022,
          "Eviction Postcode": 11206,
          "Latitude": 40.701965,
          "Longitude": -73.929766,
          "BIN": 3071965
        },
        {
          "Eviction Address": "205 MONTROSE AVENUE",
          "Eviction Apartment Number": 4,
          "Executed Date": "9/12/19",
          "Year": 2019,
          "Eviction Postcode": 11206,
          "Latitude": 40.707573,
          "Longitude": -73.940772,
          "BIN": 3390259
        },
        {
          "Eviction Address": "638 KOSCIUSZKO   STR EET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "1/24/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.693738,
          "Longitude": -73.927964,
          "BIN": 3074007
        },
        {
          "Eviction Address": "1240 PUTNAM AVENUE",
          "Eviction Apartment Number": 3,
          "Executed Date": "7/24/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.691597,
          "Longitude": -73.915299,
          "BIN": 3077216
        },
        {
          "Eviction Address": "1013 BROADWAY",
          "Eviction Apartment Number": "2F",
          "Executed Date": "1/16/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.695734,
          "Longitude": -73.933,
          "BIN": 3072828
        },
        {
          "Eviction Address": "158 GRAHAM AVENUE",
          "Eviction Apartment Number": "2L",
          "Executed Date": "10/4/23",
          "Year": 2023,
          "Eviction Postcode": 11206,
          "Latitude": 40.706968,
          "Longitude": -73.943135,
          "BIN": 3071211
        },
        {
          "Eviction Address": "459 CENTRAL AVENUE",
          "Eviction Apartment Number": "1 AND 2,ENTIRE DWELL",
          "Executed Date": "3/27/24",
          "Year": 2024,
          "Eviction Postcode": 11221,
          "Latitude": 40.691909,
          "Longitude": -73.914281,
          "BIN": 3378356
        },
        {
          "Eviction Address": "192 LINDEN STREET",
          "Eviction Apartment Number": 2,
          "Executed Date": "4/8/19",
          "Year": 2019,
          "Eviction Postcode": 11221,
          "Latitude": 40.695482,
          "Longitude": -73.917349,
          "BIN": 3076291
        },
        {
          "Eviction Address": "1216 BUSHWICK AVENUE",
          "Eviction Apartment Number": 1,
          "Executed Date": "9/13/23",
          "Year": 2023,
          "Eviction Postcode": 11221,
          "Latitude": 40.688023,
          "Longitude": -73.915566,
          "BIN": 3077814
        },
        {
          "Eviction Address": "469 CENTRAL AVENUE",
          "Eviction Apartment Number": "UNIT: OFFICE",
          "Executed Date": "9/6/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.691637,
          "Longitude": -73.913806,
          "BIN": 3077578
        },
        {
          "Eviction Address": "29 FURMAN AVENUE",
          "Eviction Apartment Number": "2R",
          "Executed Date": "1/11/22",
          "Year": 2022,
          "Eviction Postcode": 11207,
          "Latitude": 40.682132,
          "Longitude": -73.907047,
          "BIN": 3080388
        },
        {
          "Eviction Address": "90 STANHOPE STREET",
          "Eviction Apartment Number": "1ST FLOOR",
          "Executed Date": "11/23/18",
          "Year": 2018,
          "Eviction Postcode": 11221,
          "Latitude": 40.696708,
          "Longitude": -73.92434,
          "BIN": 3396910
        },
        {
          "Eviction Address": "182 WILSON AVENUE",
          "Eviction Apartment Number": "1R",
          "Executed Date": "8/9/18",
          "Year": 2018,
          "Eviction Postcode": 11237,
          "Latitude": 40.699516,
          "Longitude": -73.923652,
          "BIN": 3073802
        },
        {
          "Eviction Address": "744 CHAUNCEY STREET",
          "Eviction Apartment Number": "1R",
          "Executed Date": "7/14/17",
          "Year": 2017,
          "Eviction Postcode": 11233,
          "Latitude": 40.685848,
          "Longitude": -73.906887,
          "BIN": 3080281
        }
      ]