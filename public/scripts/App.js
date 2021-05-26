var player = document.getElementById("player");
function startIt() {
player.requestFullscreen()
var inputTime = document.getElementById("appt").value,
hm = inputTime.split(':'),
dt = new Date(),
ded = new Date(dt.getFullYear(),dt.getMonth(),dt.getDate(), hm[0],hm[1]);
interval = setInterval(() => {
var now = new Date().getTime(),   
distance = ded  - now,
days = Math.floor(distance / (1000 * 60 * 60 * 24)),
hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
seconds = Math.floor((distance % (1000 * 60)) / 1000);
console.log( `Days: ${days} |  Hours: ${hours} |  Minutes:${mins} | Seconds: ${seconds}`)
console.log(Check(now,ded,interval))
},500)
    
}
function Check(now,date,interval){
if(now>=date) {
player.src += '?autoplay=1'
clearInterval(interval);
return 'Awesome'
}
else return 'New Year Is On Its Way'
}