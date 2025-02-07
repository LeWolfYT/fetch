function fetchnw(icao) {
  let resp
  console.log("resp")
  fetch("https://aviationweather.gov/api/data/metar?ids" + icao + "&format=json&taf=true")
  .then(response => response.json())
    .then(data => {
      resp = data;
    })
  return resp
}
var $module = {
  fetchNWS: fetchnw
}
export {fetchnw}
