var getPhTime = function(){
	document.getElementById('time').innerHTML = new Date().toLocaleString('fil-Ph', {timeZone:'Asia/Manila', timeStyle:'long', hourCycle:'h24'});
}
getPhTime();
setInterval(getPhTime, 1000);