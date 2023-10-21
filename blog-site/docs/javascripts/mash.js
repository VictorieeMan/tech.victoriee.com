// Mash: https://app.mash.com
window.MashSettings = {
    id: "56fe16a5-4f88-4944-8355-de30f80b51d9"
};

var loader = function () {
    window.Mash.init();
};

var script = document$.createElement("script");
script.type = "text/javascript";
script.defer = true;
script.onload = loader;
script.src = "https://app.mash.com/sdk/sdk.js";

var head = document$.getElementsByTagName("head")[0];
head.appendChild(script);