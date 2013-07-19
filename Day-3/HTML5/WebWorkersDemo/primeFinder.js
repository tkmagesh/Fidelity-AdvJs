function isPrime(n){
	if (n <= 3) return true;
	for(var i=2;i<n/2;i++)
		if (n%i === 0) return false;
	return true;
}
self.addEventListener("message",function(msgEvt){
	var req = msgEvt.data;
	var primeCount = 0;
	var progressDelta = (req.end - req.start)/10;
	if (req.type === "start"){
		for(var i=req.start;i<= req.end;i++){
			if (isPrime(i)) primeCount++;
			if ((i - req.start) % progressDelta === 0) {
				var percentCompleted = ((i - req.start) / progressDelta) * 10;
				self.postMessage({
					type : "progress",
					percentCompleted : percentCompleted,
					primeCount : primeCount
				});
			}

		}
		self.postMessage({
			type : "completed",
			start : req.start,
			end : req.end,
			primeCount : primeCount
		});
	}
});