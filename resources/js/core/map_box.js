let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export class MapBox {

  constructor () {
    this.map = null;
  }


  addMarker(lat, lng, popupText = '') {
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(popupText);
    let marker = new mapboxgl.Marker({
      color: '#EC4899',
    }).setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(this.map);

    return marker;
  }

  zoomOnPoint (lat, lng) {
    this.map.flyTo({
      center: [lng, lat],
      zoom: 17,
      speed: 0.7,
      curve: 1
    });
  }

  load (element) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9vdHMyMjUiLCJhIjoiY2psNmd2YzdyMHowaTN4cGJtMDlleHM1cSJ9.1VYqihb6zztfoxRct-F0Og';
    this.map = new mapboxgl.Map({
      doubleClickZoom: false,
      container: element,
      zoom: 13,
      // style: 'mapbox://styles/mapbox/streets-v11',
      style: 'mapbox://styles/mapbox/navigation-day-v1'
    });

    this.map.addControl(new mapboxgl.NavigationControl());
  }
}