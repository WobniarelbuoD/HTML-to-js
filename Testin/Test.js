const date = new Date()

const LTdate = date.toLocaleDateString('lt-LT')
const LTtime = date.toLocaleTimeString('lt-LT')

document.write(LTdate + ' ' + LTtime + "<br><br>")
document.write(date.getFullYear() + "<br>")
document.write(date.getMonth() + "<br>")
document.write(date.getDay() + "<br>")
document.write(date.getDate() + "<br>")
document.write("<br><br>" + new Date())

const d = new Date("July 21, 1983 01:15:00");
document.write("<br><br>" + d)
let day = d.getUTCDate();
let Minutes = d.getUTCMinutes();
let seconds = d.getUTCSeconds();
document.write("<br>Minutes: " + Minutes)
document.write("<br>Seconds: " + seconds)