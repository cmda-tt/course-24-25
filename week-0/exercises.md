### Prerequisites - Exercises to practise some useful constructs and ES6
## Let, Const, scoping


## ForEach()
/*  The following array contains multiple elements.
    Use the forEach() method of Array to create one String with all the elements of the Array and log it to the console */

const data = [
    "HTML",
    "CSS",
    "XML",
    "JSON",
    "Javascript"
]

This should the result be:

" HTML CSS XML JSON Javascript "


## Exploring the MDN Javascript Reference

The following array contains multiple data types.
    Normalize them by converting them all to numbers using a function
    and log the result in the console 

const data = [
    1,
    2,
    "3",
    "4",
    5
]

This should the result be:

const data = [
    1,
    2,
    3,
    4,
    5
]

## Exploring the MDN Javascript Reference and practicing with return-values

The following array contains strings with randomized capitals.
	write a function to convert all strings to lowercase with the first letter capitalized
	and return the result

const data = [
	"robert",
	"vincent",
	"lAuRa",
	"Danny",
	"bERRY",
	"rOOs"
];

This should the result be:

	const data = [
		"Robert",
		"Vincent",
		"Laura",
		"Danny",
		"Berry",
		"Roos"index kopie
	];


## Working with Objects

This array of objects contains some weird data, and some useless points,
	You're tasked in transforming and normalizing this data to the second
	example 

const data = [
    {
        name: "robert",
        age: "29",
        residence: "amsterdam",
        curriculum: ["Deloitte", "Hogeschool van Amsterdam", "DEPT"]
    },
    {
        name: "berend",
        age: "32",
        residence: "rotterdam",
        curriculum: ["DEPT", "GRRR"]
    },
    {
        name: "ubaida",
        age: "26",
        residence: "Amersfoort", 
        curriculum: ["Clarify" ]
    }
]


This should be the result:

	const data = [
		{
			name: "Robert",
			age: 29,
			employer: "Hogeschool van Amsterdam"
		},
		{
			name: "Berend",
			age: 32,
			employer: "DEPT"
		}
		{
			name: "ubaida",
			age: "26",
			employer: "Clarify"
		}
	];




