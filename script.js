mapboxgl.accessToken =
  "pk.eyJ1IjoiaHJpdGhpa2hhZGthIiwiYSI6ImNreGZyNWFwMzFlczczMG1tcDhyNzExY2EifQ.GLadB7L7Lq_hlifxrNJ6eg";

//asks to allow the location of the user
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  //gets the location of user as accurate as possible
  enableHighAccuracy: true,
});

//gets and displays the location
function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([60.1699, 24.9384]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 12,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);
  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
