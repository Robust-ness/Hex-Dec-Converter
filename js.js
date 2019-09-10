hexarrayconv = [
  ["0", 0],
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["5", 5],
  ["6", 6],
  ["7", 7],
  ["8", 8],
  ["9", 9],
  ["A", 10],
  ["B", 11],
  ["C", 12],
  ["D", 13],
  ["E", 14],
  ["F", 15]
]


function dectohex() {
  var output = ""
  var input = document.getElementById("input").value.toUpperCase()
  //console.log(input)
  var rem
  var test3 = ""
  var y = 0
  
  var testing = parseInt(input, 10);
if (testing != input) {
  input = "Invalid Number"
}



  while (input != 0 && input != "Invalid Number") {
    rem = Math.floor(input/16)
    input = input%16
    for (x = 0; x <= 15; x++) {
      if (input == hexarrayconv[x][1]) {
        input = hexarrayconv[x][0]
      }
    } 
    test3 = test3 + input
    input = rem
    y++
  }

  for (x = test3.length - 1; x >= 0; x--) {
    output = output + test3[x]
  }
  if (input == "Invalid Number") {
	  output = input
  }
  
  document.getElementById("input").value = output

  //console.log(output)
}

function hextodec() {
	
var output = 0;
var truth
var input = document.getElementById("input").value.toUpperCase()
	for (i = 0; i <= input.length - 1; i++) {
	 for (x = 0; x <= 16; x++) {
		 if (x != 16 && output != "Invalid Number") {
			if (input[input.length - 1 - i] == hexarrayconv[x][0]) {
			  console.log(hexarrayconv[x][1])
			  output = output + (hexarrayconv[x][1] * Math.pow(16, i))
			  truth = true
			}
		 }
		 if (!truth && x == 16) {
				output = "Invalid Number"
			}
	  }
	  truth = false
	}

	document.getElementById("input").value = output

}
