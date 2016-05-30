var data = require("sdk/self").data;
// Construct a panel, loading its content from the "text-entry.html"
// file in the "data" directory, and loading the "get-text.js" script
// into it.
var text_entry = require("sdk/panel").Panel({
  contentURL: data.url("addon.html"),
  contentScriptFile: data.url("addon.js"),  
  height: 160
});

// Create a button
var button=require("sdk/ui/button/action").ActionButton({
  id: "show-panel",
  label: "Deals Picker",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-16.png",
    "64": "./icon-16.png"
  },
  onClick: handleClick
});

// Show the panel when the user clicks the button.
function handleClick(state) {
  text_entry.show({
      position: button
    });
}

text_entry.port.on("resultReceived", function (text) {  
  
  text_entry.height=500;
});

text_entry.port.on("newtab", function (text) {  
  var tabs = require("sdk/tabs");
  tabs.open(text);
});