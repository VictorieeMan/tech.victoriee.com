// for https://www.buymeacoffee.com/victorieeman
//<script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="victorieeman" data-description="Support me on Buy me a coffee!" data-message="Support this ad-free website:👉" data-color="#FF813F" data-position="Right" data-x_margin="18" data-y_margin="18"></script>

// Create a function to add the Buy Me A Coffee script
function addBMCScript() {
    // Create a new script element
    var script = document.createElement('script');

    // Set the script element attributes
    script.setAttribute('data-name', 'BMC-Widget');
    script.setAttribute('data-cfasync', 'false');
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
    script.setAttribute('data-id', 'victorieeman');
    script.setAttribute('data-description', 'Support me on Buy me a coffee!');
    script.setAttribute('data-message', 'Support this ad-free website:👉');
    script.setAttribute('data-color', '#FF813F');
    script.setAttribute('data-position', 'Right');
    script.setAttribute('data-x_margin', '18');
    script.setAttribute('data-y_margin', '18');

    // Append the script element to the document body or head
    document.body.appendChild(script);
    // or
    // document.head.appendChild(script);
}

// Subscribe to the document$ observable to run addBMCScript each time a new page is loaded
document$.subscribe(addBMCScript);

