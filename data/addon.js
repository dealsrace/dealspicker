
var textArea = document.getElementById("q");
textArea.addEventListener('resultReceived', function onResult(event) {  
    self.port.emit("resultReceived", "");
  
}, false);

textArea.addEventListener('newtab', function newTab(event) {  
    
	self.port.emit("newtab", event.detail.message);
  
}, false);


self.port.on("show", function onShow() {
  textArea.focus();
});



