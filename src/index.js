let _ = require('lodash');
let data =  require('../data.json')



var instructionMap = {
	count: 0,
	locate: (needle) => {
		  data.find((o) =>  {
		  	 if(o.state ===  needle.toUpperCase()){
		  	 	    instructionMap.count++
		  	 	   console.log(o)
		  	 }
		})
		console.log(`Total ${instructionMap.count}`)
	 },
	find_before: (needle) => {
		  data.find( (o) => {
		  	 if(o.year_founded < parseInt(needle)){
		  	 	 instructionMap.count++
		  	 	console.log(o)
		  	 }
		})
		   console.log(`Total ${instructionMap.count}`)
	},
	find_after: (needle) => {
	  	  data.find( (o) => {
			  	 if(o.year_founded > needle){
			  	 	 instructionMap.count++
		  	 		console.log(o)
			  	 }
			})
	  	   console.log(`Total ${instructionMap.count}`)
	   },
   	find_companies_between_size: (needle) => {	
  	  data.find( (o) => {
		  	 if(o.full_time_employees  === needle.toString()){
		  	 	 	
		  	 	 		 instructionMap.count++
		  	 		console.log(o)
		  	 }
		})
  	   console.log(`Total ${instructionMap.count}`)
     },
     find_type: (needle) => {
  	  data.find( (o) => {
		  	 if(o.company_category  === needle){
		  	 	 instructionMap.count++
		  	 		console.log(o)
		  	 }
		})
  	   console.log(`Total ${instructionMap.count}`)
     }
}

var options = ['locate', 'find_before', 'find_after', 'find_companies_between_size', 'find_type' ]

var args = process.argv.slice(2);
var WhatWeWantToDo = args[0]
var paramForWhatWeWant = args[1]
var WhatWeWantToDoExist = options.indexOf(WhatWeWantToDo) > -1

if(WhatWeWantToDoExist){
	instructionMap[WhatWeWantToDo](paramForWhatWeWant)
}

// TESTED -- OK

// node src/index.js locate CA  OK

// node src/index.js find_before 1999

// node src/index.js find_after 2000

// node src/index.js find_companies_between_size 1,001-5,000

// node src/index.js find_type Data/Technology

















