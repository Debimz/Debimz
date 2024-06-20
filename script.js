document.getElementById('trackBtn').addEventListener('click', function() {
    // This is where you would initiate tracking logic
    // Example: Using Geolocation API to get current position
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Displaying on map (example with static image)
            const mapDiv = document.getElementById('map');
            mapDiv.innerHTML = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=400x300&sensor=false">`;
        }, function(error) {
            console.error('Error getting location:', error);
            alert('Error getting location. Please try again later.');
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});
