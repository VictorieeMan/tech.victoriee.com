
window.MashSettings = {
  earnerID: "56fe16a5-4f88-4944-8355-de30f80b51d9",
};
var onMashScriptLoaded = function () {
  window.Mash.init();
};

// Load the external script dynamically
var mashScript = document.createElement('script');
mashScript.src = 'https://cdn.mash.com/mash/mash.js';
mashScript.defer = true;
mashScript.onload = onMashScriptLoaded;
document.head.appendChild(mashScript);