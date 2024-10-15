// countries is an Array of Objects, having the following attributes
// "name": String,
// "region": String in ["Sub-Saharan Africa", "Middle East & North Africa", "South Asia", 
//                      "America","Europe & Central Asia", "East Asia & Pacific"],
// "income": Number,
// "population": Number,
// "lifeExpectancy": Number
const countries = [
    {
        "name": "Angola",
        "region": "Sub-Saharan Africa",
        "income": 4023.9891506849317,
        "population": 12101612.271232877,
        "lifeExpectancy": 45.977534246575345
    },
    {
        "name": "Benin",
        "region": "Sub-Saharan Africa",
        "income": 1401.8409863013699,
        "population": 7844803.989041096,
        "lifeExpectancy": 60.56347945205479
    },
    {
        "name": "Botswana",
        "region": "Sub-Saharan Africa",
        "income": 12530.255123287672,
        "population": 1639856.9506849316,
        "lifeExpectancy": 52.063835616438354
    },
    {
        "name": "Burkina Faso",
        "region": "Sub-Saharan Africa",
        "income": 1172.494082191781,
        "population": 13868045.106849315,
        "lifeExpectancy": 52.39197260273973
    },
    {
        "name": "Burundi",
        "region": "Sub-Saharan Africa",
        "income": 431.8569315068493,
        "population": 8065043.610958905,
        "lifeExpectancy": 49.57093150684931
    },
    {
        "name": "Cameroon",
        "region": "Sub-Saharan Africa",
        "income": 2002.4944109589042,
        "population": 17310757.69863014,
        "lifeExpectancy": 50.69320547945206
    },
    {
        "name": "Cape Verde",
        "region": "Sub-Saharan Africa",
        "income": 3057.8637808219178,
        "population": 420745.01369863015,
        "lifeExpectancy": 70.7945205479452
    },
    {
        "name": "Chad",
        "region": "Sub-Saharan Africa",
        "income": 1712.3423561643838,
        "population": 9919814.446575344,
        "lifeExpectancy": 48.50745205479452
    },
    {
        "name": "Comoros",
        "region": "Sub-Saharan Africa",
        "income": 1054.8192876712328,
        "population": 689274.7643835617,
        "lifeExpectancy": 64.4734794520548
    },
    {
        "name": "Congo, Dem. Rep.",
        "region": "Sub-Saharan Africa",
        "income": 337.5859178082192,
        "population": 62499515.68219178,
        "lifeExpectancy": 47.63
    },
    {
        "name": "Congo, Rep.",
        "region": "Sub-Saharan Africa",
        "income": 3728.419890410959,
        "population": 3693817.02739726,
        "lifeExpectancy": 53.344054794520545
    },
    {
        "name": "Cote d'Ivoire",
        "region": "Sub-Saharan Africa",
        "income": 1543.228821917808,
        "population": 17624539.183561645,
        "lifeExpectancy": 56.32432876712328
    },
    {
        "name": "Equatorial Guinea",
        "region": "Sub-Saharan Africa",
        "income": 11823.97484931507,
        "population": 539168.3835616439,
        "lifeExpectancy": 49.5462191780822
    },
    {
        "name": "Eritrea",
        "region": "Sub-Saharan Africa",
        "income": 640.4544657534248,
        "population": 4777026.778082192,
        "lifeExpectancy": 58.763479452054796
    },
    {
        "name": "Ethiopia",
        "region": "Sub-Saharan Africa",
        "income": 637.9155616438356,
        "population": 74631500.05479452,
        "lifeExpectancy": 54.21753424657534
    },
    {
        "name": "Gabon",
        "region": "Sub-Saharan Africa",
        "income": 12591.352273972605,
        "population": 1422307.1808219177,
        "lifeExpectancy": 59.697917808219174
    },
    {
        "name": "Ghana",
        "region": "Sub-Saharan Africa",
        "income": 1267.3127671232878,
        "population": 22370221.10958904,
        "lifeExpectancy": 56.475945205479455
    },
    {
        "name": "Guinea",
        "region": "Sub-Saharan Africa",
        "income": 939.7043287671232,
        "population": 9670046.350684932,
        "lifeExpectancy": 56.71328767123288
    },
    {
        "name": "Guinea-Bissau",
        "region": "Sub-Saharan Africa",
        "income": 568.4875616438358,
        "population": 1439601.402739726,
        "lifeExpectancy": 47.19706849315069
    },
    {
        "name": "Kenya",
        "region": "Sub-Saharan Africa",
        "income": 1414.700219178082,
        "population": 34633227.85753425,
        "lifeExpectancy": 52.95413698630137
    },
    {
        "name": "Lesotho",
        "region": "Sub-Saharan Africa",
        "income": 1474.4245479452054,
        "population": 2023096.8273972603,
        "lifeExpectancy": 44.78509589041096
    },
    {
        "name": "Liberia",
        "region": "Sub-Saharan Africa",
        "income": 395.8018082191781,
        "population": 3029966.2328767125,
        "lifeExpectancy": 57.4426301369863
    },
    {
        "name": "Madagascar",
        "region": "Sub-Saharan Africa",
        "income": 1007.8112328767123,
        "population": 18548321.14246575,
        "lifeExpectancy": 59.37838356164384
    },
    {
        "name": "Malawi",
        "region": "Sub-Saharan Africa",
        "income": 762.5583561643837,
        "population": 12987897.720547946,
        "lifeExpectancy": 51.609041095890404
    },
    {
        "name": "Mali",
        "region": "Sub-Saharan Africa",
        "income": 1062.065424657534,
        "population": 11691216.375342466,
        "lifeExpectancy": 47.688575342465754
    },
    {
        "name": "Mauritania",
        "region": "Sub-Saharan Africa",
        "income": 1827.6746301369863,
        "population": 3169699.2356164386,
        "lifeExpectancy": 56.465753424657535
    },
    {
        "name": "Mauritius",
        "region": "Sub-Saharan Africa",
        "income": 10442.560273972604,
        "population": 1239958.5753424657,
        "lifeExpectancy": 72.07660273972603
    },
    {
        "name": "Mayotte",
        "region": "Sub-Saharan Africa",
        "income": 9617.82,
        "population": 200588.43561643836,
        "lifeExpectancy": 75.5572602739726
    },
    {
        "name": "Mozambique",
        "region": "Sub-Saharan Africa",
        "income": 771.8063561643836,
        "population": 19662740.99452055,
        "lifeExpectancy": 47.70575342465754
    },
    {
        "name": "Namibia",
        "region": "Sub-Saharan Africa",
        "income": 4763.093424657534,
        "population": 2043004.2465753425,
        "lifeExpectancy": 59.415260273972606
    },
    {
        "name": "Niger",
        "region": "Sub-Saharan Africa",
        "income": 627.7234520547945,
        "population": 12494328.580821918,
        "lifeExpectancy": 50.209890410958906
    },
    {
        "name": "Nigeria",
        "region": "Sub-Saharan Africa",
        "income": 1950.2715616438356,
        "population": 131596956.06027398,
        "lifeExpectancy": 47.471315068493155
    },
    {
        "name": "Reunion",
        "region": "Sub-Saharan Africa",
        "income": 7350.26898630137,
        "population": 786680.6684931507,
        "lifeExpectancy": 76.2481095890411
    },
    {
        "name": "Rwanda",
        "region": "Sub-Saharan Africa",
        "income": 862.3679452054795,
        "population": 8630630.82739726,
        "lifeExpectancy": 49.05139726027397
    },
    {
        "name": "Sao Tome and Principe",
        "region": "Sub-Saharan Africa",
        "income": 1526.1777534246576,
        "population": 192903.15616438357,
        "lifeExpectancy": 65.13961643835616
    },
    {
        "name": "Senegal",
        "region": "Sub-Saharan Africa",
        "income": 1676.6039452054795,
        "population": 11963287.265753426,
        "lifeExpectancy": 55.103013698630136
    },
    {
        "name": "Sierra Leone",
        "region": "Sub-Saharan Africa",
        "income": 822.9790684931506,
        "population": 5993544.4,
        "lifeExpectancy": 46.82753424657534
    },
    {
        "name": "Somalia",
        "region": "Sub-Saharan Africa",
        "income": 935.705205479452,
        "population": 8840261.34520548,
        "lifeExpectancy": 49.60405479452054
    },
    {
        "name": "South Africa",
        "region": "Sub-Saharan Africa",
        "income": 8824.771780821917,
        "population": 44200928.69589041,
        "lifeExpectancy": 51.58953424657535
    },
    {
        "name": "Sudan",
        "region": "Sub-Saharan Africa",
        "income": 2423.2930958904108,
        "population": 41147294.02191781,
        "lifeExpectancy": 57.53791780821918
    },
    {
        "name": "Swaziland",
        "region": "Sub-Saharan Africa",
        "income": 4484.758191780821,
        "population": 1136494.7753424658,
        "lifeExpectancy": 45.02660273972603
    },
    {
        "name": "Tanzania",
        "region": "Sub-Saharan Africa",
        "income": 1062.5455342465755,
        "population": 37387720.44931507,
        "lifeExpectancy": 54.28139726027398
    },
    {
        "name": "Togo",
        "region": "Sub-Saharan Africa",
        "income": 899.2187397260275,
        "population": 5536071.750684931,
        "lifeExpectancy": 61.73517808219178
    },
    {
        "name": "Uganda",
        "region": "Sub-Saharan Africa",
        "income": 1053.8926575342466,
        "population": 28117084.323287673,
        "lifeExpectancy": 51.036958904109596
    },
    {
        "name": "Zambia",
        "region": "Sub-Saharan Africa",
        "income": 1215.0342465753424,
        "population": 11481608.178082192,
        "lifeExpectancy": 43.593753424657535
    },
    {
        "name": "Zimbabwe",
        "region": "Sub-Saharan Africa",
        "income": 519.1038356164383,
        "population": 12230348.252054796,
        "lifeExpectancy": 42.338849315068494
    },
    {
        "name": "Afghanistan",
        "region": "South Asia",
        "income": 907.2901917808219,
        "population": 30961193.410958905,
        "lifeExpectancy": 43.20027397260274
    },
    {
        "name": "Bangladesh",
        "region": "South Asia",
        "income": 1321.0739726027396,
        "population": 147106674.07123286,
        "lifeExpectancy": 65.10158904109589
    },
    {
        "name": "Bhutan",
        "region": "South Asia",
        "income": 3832.230246575343,
        "population": 2275694.5287671234,
        "lifeExpectancy": 65.2226301369863
    },
    {
        "name": "India",
        "region": "South Asia",
        "income": 2285.221917808219,
        "population": 1094070581.8027396,
        "lifeExpectancy": 63.01452054794521
    },
    {
        "name": "Maldives",
        "region": "South Asia",
        "income": 4549.377698630137,
        "population": 358167.00821917807,
        "lifeExpectancy": 70.5124383561644
    },
    {
        "name": "Nepal",
        "region": "South Asia",
        "income": 1104.4074520547945,
        "population": 28235287.82191781,
        "lifeExpectancy": 65.76243835616438
    },
    {
        "name": "Pakistan",
        "region": "South Asia",
        "income": 2488.4219178082194,
        "population": 165516184.56438357,
        "lifeExpectancy": 65.85197260273972
    },
    {
        "name": "Sri Lanka",
        "region": "South Asia",
        "income": 3698.530082191781,
        "population": 20208866.34520548,
        "lifeExpectancy": 73.83386301369863
    },
    {
        "name": "Algeria",
        "region": "Middle East & North Africa",
        "income": 5972.612876712329,
        "population": 32896268.04657534,
        "lifeExpectancy": 71.93791780821917
    },
    {
        "name": "Bahrain",
        "region": "Middle East & North Africa",
        "income": 28372.936,
        "population": 697715.301369863,
        "lifeExpectancy": 75.38556164383562
    },
    {
        "name": "Djibouti",
        "region": "Middle East & North Africa",
        "income": 2004.6290410958904,
        "population": 485695.3780821918,
        "lifeExpectancy": 54.7253698630137
    },
    {
        "name": "Iraq",
        "region": "Middle East & North Africa",
        "income": 3291.104219178082,
        "population": 26723210.98082192,
        "lifeExpectancy": 68.0973698630137
    },
    {
        "name": "Israel",
        "region": "Middle East & North Africa",
        "income": 24597.353589041097,
        "population": 6345727.263013698,
        "lifeExpectancy": 80.34027397260274
    },
    {
        "name": "Jordan",
        "region": "Middle East & North Africa",
        "income": 4511.127452054794,
        "population": 5894272.690410959,
        "lifeExpectancy": 72.14876712328768
    },
    {
        "name": "Kuwait",
        "region": "Middle East & North Africa",
        "income": 44456.87101369863,
        "population": 2411365.342465753,
        "lifeExpectancy": 77.3789589041096
    },
    {
        "name": "Lebanon",
        "region": "Middle East & North Africa",
        "income": 10253.159780821918,
        "population": 3869970.569863014,
        "lifeExpectancy": 71.67386301369862
    },
    {
        "name": "Libya",
        "region": "Middle East & North Africa",
        "income": 11262.614027397261,
        "population": 5889272.024657534,
        "lifeExpectancy": 73.57961643835617
    },
    {
        "name": "Morocco",
        "region": "Middle East & North Africa",
        "income": 3755.4251506849314,
        "population": 33197484.28219178,
        "lifeExpectancy": 70.72367123287671
    },
    {
        "name": "Oman",
        "region": "Middle East & North Africa",
        "income": 20929.105643835617,
        "population": 3093680.983561644,
        "lifeExpectancy": 75.1970684931507
    },
    {
        "name": "Qatar",
        "region": "Middle East & North Africa",
        "income": 74536.08608219177,
        "population": 883464.3479452054,
        "lifeExpectancy": 75.21961643835617
    },
    {
        "name": "Saudi Arabia",
        "region": "Middle East & North Africa",
        "income": 21344.586575342466,
        "population": 26968591.02191781,
        "lifeExpectancy": 72.42046575342465
    },
    {
        "name": "Tunisia",
        "region": "Middle East & North Africa",
        "income": 6716.47797260274,
        "population": 10166515.498630136,
        "lifeExpectancy": 73.6155616438356
    },
    {
        "name": "United Arab Emirates",
        "region": "Middle East & North Africa",
        "income": 35189.29276712329,
        "population": 2599358.120547945,
        "lifeExpectancy": 77.1698082191781
    },
    {
        "name": "West Bank and Gaza",
        "region": "Middle East & North Africa",
        "income": 3287.1259726027392,
        "population": 3878433.397260274,
        "lifeExpectancy": 73.11216438356165
    },
    {
        "name": "Yemen, Rep.",
        "region": "Middle East & North Africa",
        "income": 2277.6837260273974,
        "population": 21394262.315068495,
        "lifeExpectancy": 61.94008219178082
    },
    {
        "name": "Argentina",
        "region": "America",
        "income": 11813.429369863014,
        "population": 39889228.64383561,
        "lifeExpectancy": 74.94386301369862
    },
    {
        "name": "Aruba",
        "region": "America",
        "income": 26506.723643835616,
        "population": 71863.39726027397,
        "lifeExpectancy": 74.42641095890411
    },
    {
        "name": "Barbados",
        "region": "America",
        "income": 16255.918356164384,
        "population": 279823.501369863,
        "lifeExpectancy": 76.76791780821918
    },
    {
        "name": "Belize",
        "region": "America",
        "income": 7384.050739726027,
        "population": 287165.54520547943,
        "lifeExpectancy": 75.7145205479452
    },
    {
        "name": "Bolivia",
        "region": "America",
        "income": 3704.7210410958905,
        "population": 8977905.024657534,
        "lifeExpectancy": 64.99197260273972
    },
    {
        "name": "Brazil",
        "region": "America",
        "income": 8846.31698630137,
        "population": 187911299.81369862,
        "lifeExpectancy": 71.90791780821918
    },
    {
        "name": "Canada",
        "region": "America",
        "income": 35660.596657534246,
        "population": 33073971.39452055,
        "lifeExpectancy": 80.74432876712329
    },
    {
        "name": "Chile",
        "region": "America",
        "income": 12642.210958904108,
        "population": 16121198.405479452,
        "lifeExpectancy": 78.30517808219179
    },
    {
        "name": "Colombia",
        "region": "America",
        "income": 6633.1735890410955,
        "population": 43538784.49041096,
        "lifeExpectancy": 72.46961643835617
    },
    {
        "name": "Costa Rica",
        "region": "America",
        "income": 9183.24789041096,
        "population": 4070242.5671232874,
        "lifeExpectancy": 78.5989589041096
    },
    {
        "name": "Cuba",
        "region": "America",
        "income": 8219.820821917809,
        "population": 11379749.726027397,
        "lifeExpectancy": 78.18621917808218
    },
    {
        "name": "Ecuador",
        "region": "America",
        "income": 6666.691506849315,
        "population": 13531889.652054794,
        "lifeExpectancy": 74.81641095890411
    },
    {
        "name": "El Salvador",
        "region": "America",
        "income": 5576.167561643835,
        "population": 6812403.134246576,
        "lifeExpectancy": 70.97791780821917
    },
    {
        "name": "French Guiana",
        "region": "America",
        "income": 8469.22819672131,
        "population": 199169.01917808218,
        "lifeExpectancy": 75.67726027397259
    },
    {
        "name": "Grenada",
        "region": "America",
        "income": 8931.763561643835,
        "population": 89685.92876712329,
        "lifeExpectancy": 75.07301369863013
    },
    {
        "name": "Guadeloupe",
        "region": "America",
        "income": 8127.196120218578,
        "population": 452430.92328767123,
        "lifeExpectancy": 78.86895890410959
    },
    {
        "name": "Guatemala",
        "region": "America",
        "income": 5023.407561643837,
        "population": 12269794.923287671,
        "lifeExpectancy": 69.85961643835616
    },
    {
        "name": "Guyana",
        "region": "America",
        "income": 3373.076109589041,
        "population": 767078.3643835617,
        "lifeExpectancy": 65.93668493150685
    },
    {
        "name": "Haiti",
        "region": "America",
        "income": 1179.227616438356,
        "population": 8292631.830136986,
        "lifeExpectancy": 60.69367123287671
    },
    {
        "name": "Honduras",
        "region": "America",
        "income": 3399.6274520547945,
        "population": 7313026.37260274,
        "lifeExpectancy": 71.73046575342465
    },
    {
        "name": "Jamaica",
        "region": "America",
        "income": 7277.697205479452,
        "population": 2756204.208219178,
        "lifeExpectancy": 71.44471232876712
    },
    {
        "name": "Martinique",
        "region": "America",
        "income": 15267.570437158469,
        "population": 435856.5863013699,
        "lifeExpectancy": 79.33726027397259
    },
    {
        "name": "Mexico",
        "region": "America",
        "income": 11733.429369863014,
        "population": 107343647.5150685,
        "lifeExpectancy": 75.71876712328766
    },
    {
        "name": "Netherlands Antilles",
        "region": "America",
        "income": 22787.606876712332,
        "population": 221584.99178082193,
        "lifeExpectancy": 75.9272602739726
    },
    {
        "name": "Nicaragua",
        "region": "America",
        "income": 2653.541534246575,
        "population": 5561208.728767123,
        "lifeExpectancy": 72.28602739726027
    },
    {
        "name": "Panama",
        "region": "America",
        "income": 8912.756054794521,
        "population": 3186980.104109589,
        "lifeExpectancy": 75.3164109589041
    },
    {
        "name": "Paraguay",
        "region": "America",
        "income": 3981.8894794520543,
        "population": 6492995.561643835,
        "lifeExpectancy": 71.47301369863014
    },
    {
        "name": "Peru",
        "region": "America",
        "income": 6826.875561643836,
        "population": 28270585.94520548,
        "lifeExpectancy": 72.7253698630137
    },
    {
        "name": "Puerto Rico",
        "region": "America",
        "income": 19396.537780821916,
        "population": 3925838.5232876716,
        "lifeExpectancy": 78.56471232876713
    },
    {
        "name": "Suriname",
        "region": "America",
        "income": 7408.796383561644,
        "population": 439034.3616438356,
        "lifeExpectancy": 68.56726027397261
    },
    {
        "name": "Trinidad and Tobago",
        "region": "America",
        "income": 17211.538136986303,
        "population": 1066625.408219178,
        "lifeExpectancy": 68.95131506849316
    },
    {
        "name": "United States",
        "region": "America",
        "income": 42324.778410958905,
        "population": 298214043.7369863,
        "lifeExpectancy": 78.18621917808218
    },
    {
        "name": "Uruguay",
        "region": "America",
        "income": 9609.416054794521,
        "population": 3430572.076712329,
        "lifeExpectancy": 75.90216438356165
    },
    {
        "name": "Albania",
        "region": "Europe & Central Asia",
        "income": 5612.600383561644,
        "population": 3580080.115068493,
        "lifeExpectancy": 76.3564109589041
    },
    {
        "name": "Armenia",
        "region": "Europe & Central Asia",
        "income": 4369.849643835617,
        "population": 2976926.7726027397,
        "lifeExpectancy": 73.35876712328766
    },
    {
        "name": "Austria",
        "region": "Europe & Central Asia",
        "income": 35071.7775890411,
        "population": 8192184.495890411,
        "lifeExpectancy": 80.0609315068493
    },
    {
        "name": "Azerbaijan",
        "region": "Europe & Central Asia",
        "income": 6053.087671232876,
        "population": 7957402.575342466,
        "lifeExpectancy": 69.70112328767124
    },
    {
        "name": "Belarus",
        "region": "Europe & Central Asia",
        "income": 9355.749534246575,
        "population": 10293645.608219178,
        "lifeExpectancy": 69.45309589041096
    },
    {
        "name": "Belgium",
        "region": "Europe & Central Asia",
        "income": 32682.235452054792,
        "population": 10377820.290410958,
        "lifeExpectancy": 79.52112328767123
    },
    {
        "name": "Bosnia and Herzegovina",
        "region": "Europe & Central Asia",
        "income": 6826.521041095891,
        "population": 4493159.720547945,
        "lifeExpectancy": 74.92065753424659
    },
    {
        "name": "Bulgaria",
        "region": "Europe & Central Asia",
        "income": 9940.858301369863,
        "population": 7390886.019178083,
        "lifeExpectancy": 72.63065753424657
    },
    {
        "name": "Croatia",
        "region": "Europe & Central Asia",
        "income": 13811.567780821919,
        "population": 4494847.095890411,
        "lifeExpectancy": 75.75876712328767
    },
    {
        "name": "Cyprus",
        "region": "Europe & Central Asia",
        "income": 24871.951561643837,
        "population": 783947.005479452,
        "lifeExpectancy": 79.50980821917808
    },
    {
        "name": "Denmark",
        "region": "Europe & Central Asia",
        "income": 34576.454191780824,
        "population": 5449104.5452054795,
        "lifeExpectancy": 78.32000000000001
    },
    {
        "name": "Estonia",
        "region": "Europe & Central Asia",
        "income": 18206.42284931507,
        "population": 1325060.01369863,
        "lifeExpectancy": 73.11556164383562
    },
    {
        "name": "Finland",
        "region": "Europe & Central Asia",
        "income": 31580.515397260275,
        "population": 5230698.493150685,
        "lifeExpectancy": 79.45602739726027
    },
    {
        "name": "France",
        "region": "Europe & Central Asia",
        "income": 30117.099561643834,
        "population": 60857454.63561644,
        "lifeExpectancy": 80.84517808219178
    },
    {
        "name": "Georgia",
        "region": "Europe & Central Asia",
        "income": 3742.368767123288,
        "population": 4662825.789041095,
        "lifeExpectancy": 71.56830136986301
    },
    {
        "name": "Germany",
        "region": "Europe & Central Asia",
        "income": 31425.389315068493,
        "population": 82423071.11232877,
        "lifeExpectancy": 79.78197260273973
    },
    {
        "name": "Greece",
        "region": "Europe & Central Asia",
        "income": 26525.340000000004,
        "population": 10686384.50958904,
        "lifeExpectancy": 78.86216438356165
    },
    {
        "name": "Hungary",
        "region": "Europe & Central Asia",
        "income": 17665.437260273975,
        "population": 9983499.838356163,
        "lifeExpectancy": 73.41093150684932
    },
    {
        "name": "Iceland",
        "region": "Europe & Central Asia",
        "income": 36266.97917808219,
        "population": 299162.84657534247,
        "lifeExpectancy": 81.1463287671233
    },
    {
        "name": "Ireland",
        "region": "Europe & Central Asia",
        "income": 39005.98350684932,
        "population": 4058280.6739726025,
        "lifeExpectancy": 79.70197260273973
    },
    {
        "name": "Italy",
        "region": "Europe & Central Asia",
        "income": 28108.10290410959,
        "population": 58130920.627397254,
        "lifeExpectancy": 81.55517808219179
    },
    {
        "name": "Kazakhstan",
        "region": "Europe & Central Asia",
        "income": 9374.970246575343,
        "population": 15229218.246575342,
        "lifeExpectancy": 64.85235616438356
    },
    {
        "name": "Latvia",
        "region": "Europe & Central Asia",
        "income": 14767.723397260273,
        "population": 2276051.6082191784,
        "lifeExpectancy": 71.14849315068494
    },
    {
        "name": "Lithuania",
        "region": "Europe & Central Asia",
        "income": 15178.808821917808,
        "population": 3586815.701369863,
        "lifeExpectancy": 71.48953424657535
    },
    {
        "name": "Luxembourg",
        "region": "Europe & Central Asia",
        "income": 72510.33430136986,
        "population": 473916.83013698633,
        "lifeExpectancy": 79.45019178082191
    },
    {
        "name": "Macedonia, FYR",
        "region": "Europe & Central Asia",
        "income": 7636.03304109589,
        "population": 2050104.5424657534,
        "lifeExpectancy": 73.9572602739726
    },
    {
        "name": "Malta",
        "region": "Europe & Central Asia",
        "income": 20952.736273972605,
        "population": 400071.31506849313,
        "lifeExpectancy": 79.42386301369862
    },
    {
        "name": "Moldova",
        "region": "Europe & Central Asia",
        "income": 2472.03698630137,
        "population": 4465747.547945205,
        "lifeExpectancy": 68.11216438356165
    },
    {
        "name": "Montenegro",
        "region": "Europe & Central Asia",
        "income": 10105.005260273972,
        "population": 692498.4739726027,
        "lifeExpectancy": 73.98169863013699
    },
    {
        "name": "Netherlands",
        "region": "Europe & Central Asia",
        "income": 35750.26761643835,
        "population": 16484329.301369863,
        "lifeExpectancy": 79.97027397260274
    },
    {
        "name": "Norway",
        "region": "Europe & Central Asia",
        "income": 48161.35068493151,
        "population": 4609310.002739727,
        "lifeExpectancy": 80.52791780821917
    },
    {
        "name": "Poland",
        "region": "Europe & Central Asia",
        "income": 14354.834520547945,
        "population": 38538662.32876713,
        "lifeExpectancy": 75.33301369863013
    },
    {
        "name": "Portugal",
        "region": "Europe & Central Asia",
        "income": 20185.600493150687,
        "population": 10602501.78630137,
        "lifeExpectancy": 78.87715068493151
    },
    {
        "name": "Romania",
        "region": "Europe & Central Asia",
        "income": 10085.85008219178,
        "population": 22305796.31506849,
        "lifeExpectancy": 72.26876712328767
    },
    {
        "name": "Serbia",
        "region": "Europe & Central Asia",
        "income": 9052.350684931505,
        "population": 10139404.69589041,
        "lifeExpectancy": 73.76726027397261
    },
    {
        "name": "Slovak Republic",
        "region": "Europe & Central Asia",
        "income": 17103.68706849315,
        "population": 5438761.328767124,
        "lifeExpectancy": 74.43791780821917
    },
    {
        "name": "Slovenia",
        "region": "Europe & Central Asia",
        "income": 24149.162465753427,
        "population": 2010408.405479452,
        "lifeExpectancy": 78.18564383561643
    },
    {
        "name": "Spain",
        "region": "Europe & Central Asia",
        "income": 27845.25780821918,
        "population": 40393053.56164384,
        "lifeExpectancy": 80.88394520547945
    },
    {
        "name": "Sweden",
        "region": "Europe & Central Asia",
        "income": 33097.65753424657,
        "population": 9015337.14520548,
        "lifeExpectancy": 80.93301369863015
    },
    {
        "name": "Switzerland",
        "region": "Europe & Central Asia",
        "income": 36641.07786301369,
        "population": 7520998.42739726,
        "lifeExpectancy": 81.7245205479452
    },
    {
        "name": "Tajikistan",
        "region": "Europe & Central Asia",
        "income": 1495.2280547945206,
        "population": 7307454.509589041,
        "lifeExpectancy": 66.0034794520548
    },
    {
        "name": "Turkey",
        "region": "Europe & Central Asia",
        "income": 8251.431287671232,
        "population": 70349970.68767123,
        "lifeExpectancy": 71.55556164383562
    },
    {
        "name": "Turkmenistan",
        "region": "Europe & Central Asia",
        "income": 4621.857808219178,
        "population": 5035204.906849315,
        "lifeExpectancy": 64.47980821917808
    },
    {
        "name": "Ukraine",
        "region": "Europe & Central Asia",
        "income": 5989.354465753425,
        "population": 46735102.07945205,
        "lifeExpectancy": 67.90479452054794
    },
    {
        "name": "United Kingdom",
        "region": "Europe & Central Asia",
        "income": 32233.17589041096,
        "population": 60594910.3260274,
        "lifeExpectancy": 79.51046575342465
    },
    {
        "name": "Uzbekistan",
        "region": "Europe & Central Asia",
        "income": 2081.4956712328767,
        "population": 27268410.413698632,
        "lifeExpectancy": 67.49065753424658
    },
    {
        "name": "Australia",
        "region": "East Asia & Pacific",
        "income": 33091.736986301374,
        "population": 20249334.06849315,
        "lifeExpectancy": 81.61386301369863
    },
    {
        "name": "Brunei",
        "region": "East Asia & Pacific",
        "income": 48485.94191780822,
        "population": 378842.4301369863,
        "lifeExpectancy": 76.88641095890412
    },
    {
        "name": "Cambodia",
        "region": "East Asia & Pacific",
        "income": 1561.3807123287672,
        "population": 13860616.31780822,
        "lifeExpectancy": 59.96158904109589
    },
    {
        "name": "China",
        "region": "East Asia & Pacific",
        "income": 5404.178849315069,
        "population": 1310174799.578082,
        "lifeExpectancy": 72.72471232876711
    },
    {
        "name": "Fiji",
        "region": "East Asia & Pacific",
        "income": 4245.923013698631,
        "population": 904879.2876712328,
        "lifeExpectancy": 68.48386301369862
    },
    {
        "name": "French Polynesia",
        "region": "East Asia & Pacific",
        "income": 26140.239041095887,
        "population": 274230.37534246576,
        "lifeExpectancy": 73.93961643835615
    },
    {
        "name": "Hong Kong, China",
        "region": "East Asia & Pacific",
        "income": 37609.31210958904,
        "population": 6936886.449315069,
        "lifeExpectancy": 82.04810958904109
    },
    {
        "name": "Indonesia",
        "region": "East Asia & Pacific",
        "income": 3356.216547945205,
        "population": 220776463.0136986,
        "lifeExpectancy": 70.06602739726027
    },
    {
        "name": "Japan",
        "region": "East Asia & Pacific",
        "income": 30856.564657534247,
        "population": 127459672.98082192,
        "lifeExpectancy": 82.64517808219179
    },
    {
        "name": "Korea, Dem. Rep.",
        "region": "East Asia & Pacific",
        "income": 1574.123287671233,
        "population": 23095961.186301373,
        "lifeExpectancy": 66.9572602739726
    },
    {
        "name": "Korea, Rep.",
        "region": "East Asia & Pacific",
        "income": 22285.435616438353,
        "population": 48829314.199999996,
        "lifeExpectancy": 78.90942465753425
    },
    {
        "name": "Macao, China",
        "region": "East Asia & Pacific",
        "income": 42076.18734246575,
        "population": 452791.47397260275,
        "lifeExpectancy": 80.2370684931507
    },
    {
        "name": "Malaysia",
        "region": "East Asia & Pacific",
        "income": 11894.032438356166,
        "population": 24349106.26849315,
        "lifeExpectancy": 73.87046575342467
    },
    {
        "name": "Micronesia, Fed. Sts.",
        "region": "East Asia & Pacific",
        "income": 5408.458849315069,
        "population": 108012.57808219179,
        "lifeExpectancy": 68.20386301369864
    },
    {
        "name": "Mongolia",
        "region": "East Asia & Pacific",
        "income": 2818.5924931506847,
        "population": 2828745.884931507,
        "lifeExpectancy": 65.82027397260273
    },
    {
        "name": "Myanmar",
        "region": "East Asia & Pacific",
        "income": 1155.3309589041096,
        "population": 47349843.06849315,
        "lifeExpectancy": 60.809616438356166
    },
    {
        "name": "New Caledonia",
        "region": "East Asia & Pacific",
        "income": 31625.978383561644,
        "population": 219012.2684931507,
        "lifeExpectancy": 75.85386301369864
    },
    {
        "name": "New Zealand",
        "region": "East Asia & Pacific",
        "income": 24508.43873972603,
        "population": 4072685.0712328767,
        "lifeExpectancy": 79.96471232876713
    },
    {
        "name": "Papua New Guinea",
        "region": "East Asia & Pacific",
        "income": 1745.9934246575344,
        "population": 5659904.120547946,
        "lifeExpectancy": 60.30027397260274
    },
    {
        "name": "Philippines",
        "region": "East Asia & Pacific",
        "income": 3019.681863013699,
        "population": 89331835.01643836,
        "lifeExpectancy": 71.31706849315069
    },
    {
        "name": "Samoa",
        "region": "East Asia & Pacific",
        "income": 4955.637260273973,
        "population": 176940.1890410959,
        "lifeExpectancy": 71.07536986301369
    },
    {
        "name": "Singapore",
        "region": "East Asia & Pacific",
        "income": 43501.402027397264,
        "population": 4486508,
        "lifeExpectancy": 79.8953698630137
    },
    {
        "name": "Solomon Islands",
        "region": "East Asia & Pacific",
        "income": 1774.4808767123288,
        "population": 551214.4767123288,
        "lifeExpectancy": 65.26753424657534
    },
    {
        "name": "Taiwan",
        "region": "East Asia & Pacific",
        "income": 27249.438356164384,
        "population": 23024051.95068493,
        "lifeExpectancy": 77.92715068493149
    },
    {
        "name": "Thailand",
        "region": "East Asia & Pacific",
        "income": 7175.255123287671,
        "population": 64593707.64931507,
        "lifeExpectancy": 68.53895890410959
    },
    {
        "name": "Timor-Leste",
        "region": "East Asia & Pacific",
        "income": 2034.1698630136987,
        "population": 1060917.2547945206,
        "lifeExpectancy": 60.15668493150686
    },
    {
        "name": "Tokelau",
        "region": "East Asia & Pacific",
        "income": 889.43,
        "population": 1379.7936507936506,
        "lifeExpectancy": 69
    },
    {
        "name": "Tonga",
        "region": "East Asia & Pacific",
        "income": 5109.222520547945,
        "population": 114496.4602739726,
        "lifeExpectancy": 71.5489589041096
    },
    {
        "name": "Vietnam",
        "region": "East Asia & Pacific",
        "income": 2276.8261917808222,
        "population": 84329297.26027398,
        "lifeExpectancy": 74.04961643835615
    },
    {
        "name": "Vanuatu",
        "region": "East Asia & Pacific",
        "income": 3619.357205479452,
        "population": 208604.43835616438,
        "lifeExpectancy": 69.55282191780822
    }
]

let normalizedCountries, southAsianCountries
let southAsianPopulation
let southAsianMaxLifeExpectancy

// function normalizeCountry() fixes some secondary issues concerning the objects in array countries:
// parameter myCountry is an object with the same structure as objects in array country.
// function normalizeCountry() returns an object with the same structure of the objects in array countries, but
// where the value of the following attriubutes is formatted:
// attribute population is an integer, 
// the values of attributes income and lifeExpectancy show 2 decimals. 
// the name of attribute income is changed to avgIncome
function normalizeCountry(myCountry) {
    // here your code

}

// format array country
// normalizedCountries = 

// select the objects of array countries representing countries in South Asia
// southAsianCountries =

// calculate the total population of South Asia
// southAsianPopulation =

// calculate the maximum life expectancy of a country in South Asia
// SoutAsianMaxLifeExpectancy =

// calculate the total population of South Asia
// southAsianPopulation =


// can you calculate the max life expectancy of the south Asian countries with one statement?

// repeat for sub-Saharan Africa and the Americas

console.log("South Asia")
// console.log(southAsianCountries)
// console.log(southAsianPopulation)
// console.log(southAsianMaxLifeExpectancy)

// console.log("Americas")
// console.log(americanCountries)
// console.log(americanPopulation)
// console.log(americanMaxLifeExpectancy)

// console.log("Sub-Saharan Africa")
// console.log(subSaharanCountries)
// console.log(subSaharanPopulation)
// console.log(subSaharanMaxLifeExpectancy)








