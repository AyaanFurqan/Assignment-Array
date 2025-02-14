let heading = document.getElementById("Heading")

heading.innerHTML+= `<div> <h1> Qualifications </h1> <div>`

var arr = ["SSC \n" , "HSC \n" , "BCS \n ",
    "BS \n" , "BCOM\n ", "MS\n", "M. Phil \n" , "PhD \n"]


document.write (arr)

let Students = ["Michael" , "John" , "Tony"]
let marks = [ 320, 230 , 480]
let totalmarks = 500

let percentage = [
    (marks[0] / totalmarks) * 100,
    (marks[1] / totalmarks) * 100,
    (marks[2] / totalmarks) * 100,
]

let result = document.getElementById("resultBox")
result.innerHTML= `
<p> Score of ${Students[0]} is ${marks[0]} .Percentage: ${percentage[0]}% </p> 
<p> Score of ${Students[1]} is ${marks[1]} .Percentage: ${percentage[1]}% </p>
<p> Score of ${Students[2]} is ${marks[2]} .Percentage: ${percentage[2]}% </p> `

let Scoresofstudent = [320, 230, 480, 120]
let originalscores = Scoresofstudent
console.log(originalscores)




