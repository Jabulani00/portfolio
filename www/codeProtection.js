// Advanced Code Protection Script
(function() {
    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable keyboard shortcuts for developer tools and other actions
    document.addEventListener('keydown', function(e) {
        // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U
        if (
            e.keyCode === 123 || // F12
            (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
            (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
            (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
            (e.ctrlKey && e.keyCode === 85) // Ctrl+U
        ) {
            e.preventDefault();
            return false;
        }
    });
    
    // Detect DevTools opening by window size changes
    const threshold = 160;
    const checkDevTools = function() {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            document.body.innerHTML = '<div style="text-align: center; padding: 50px; font-family: Arial;"><h1>Page Protected</h1><p>Developer tools access is not permitted on this site.</p></div>';
        }
    };
    
    // Check periodically
    setInterval(checkDevTools, 1000);
    
    // Add a debugger trap for DevTools
    setInterval(function() {
        debugger;
    }, 100);
    
    // Add a warning message when DevTools is opened
    let devToolsWarning = function() {
        console.clear();
        console.log('%cStop!', 'color: red; font-size: 30px; font-weight: bold;');
        console.log('%cThis is a protected website. Viewing source code is not permitted.', 'font-size: 16px;');
    };
    
    // Another DevTools detection method using console timing
    let startTime = new Date();
    setInterval(function(){
        let currentTime = new Date();
        debugger;
        if(new Date() - currentTime > 100) {
            // DevTools was likely open
            document.body.innerHTML = '<div style="text-align: center; padding: 50px; font-family: Arial;"><h1>Page Protected</h1><p>Developer tools access is not permitted on this site.</p></div>';
        }
        startTime = currentTime;
    }, 200);
    
    // Disable viewing page source
    document.onkeypress = function(event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
            return false;
        }
    };
    
    // React to DevTools detection
    window.addEventListener('devtoolschange', function(e) {
        if(e.detail.open) {
            document.body.innerHTML = '<div style="text-align: center; padding: 50px; font-family: Arial;"><h1>Page Protected</h1><p>Developer tools access is not permitted on this site.</p></div>';
        }
    });
})();