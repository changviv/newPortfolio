var moment = require("moment")


function time() {
	var time =  moment().format('hh:mm:ss a')
	var message = '';
	var meridian = time.slice(-2)
	var hour = time.slice(0,2)

		if (meridian === "am") {
			message = "Good Evening"
			console.log("Good Evening")
		}
		else {
			if (hour > 0 && hour < 5) {
				message =  "Good Afternoon"
				console.log("Good Afternoon")
			} else {
				message =  "Good Evening"
				console.log("Good Evening")
			}

		}
		console.log(message)
		return message

}

time();




$("#time-of-day").text("Good Evening")

