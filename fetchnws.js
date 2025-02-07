export function fetchNWS(icao) {
  console.log("fetch")
  fetch("https://aviationweather.gov/api/data/metar?ids" + icao + "&format=json&taf=true")
  .then(response => response.json())
    .then(data => {
      return data
    })
}
