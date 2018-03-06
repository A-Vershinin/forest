// Google map
// google.maps.event.addDomListener(window, "load", init);

function googleMap() {
    const mapOptions = {
        center: new google.maps.LatLng(50.013322, 36.281054),
        zoom: 13,
        // gestureHandling: "none",
        fullscreenControl: true,
        zoomControl: true,
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR },
        scaleControl: true,
        scrollwheel: false,
        streetViewControl: false,
        draggable: true,
        clickableIcons: false,
        fullscreenControlOptions: { position: google.maps.ControlPosition.RIGHT_CENTER },
        zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_TOP },
        streetViewControlOptions: { position: google.maps.ControlPosition.RIGHT_BOTTOM },
        mapTypeControlOptions: { position: google.maps.ControlPosition.TOP_LEFT },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{ featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#444444" }] }, { featureType: "landscape", elementType: "all", stylers: [{ color: "#f2f2f2" }] }, { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] }, { featureType: "road", elementType: "all", stylers: [{ saturation: -100 }, { lightness: 45 }] }, { featureType: "road.highway", elementType: "all", stylers: [{ visibility: "simplified" }] }, { featureType: "road.arterial", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "transit", elementType: "all", stylers: [{ visibility: "off" }] }, { featureType: "water", elementType: "all", stylers: [{ color: "#99b16a" }, { visibility: "on" }] }],
    };

    const mapElement = document.getElementById("map");

    mapElement.style.height = `${window.innerHeight + document.querySelector(".footer").offsetHeight}px`;
    mapElement.style.marginBottom = `-${document.querySelector(".footer").offsetHeight}px`;

    const map = new google.maps.Map(mapElement, mapOptions);
    const icon = {
        url: "/img/decor/map-marker.svg",
        scaledSize: new google.maps.Size(42, 56),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 56),
    };


    const marker = new google.maps.Marker({
        position: new google.maps.LatLng(50.013322, 36.338),
        map,
        clickable: true,
        title: "Вершинин Анатолий - разработка современных сайтов",
        icon,
        animation: google.maps.Animation.DROP,
    });

    const getCen = map.getCenter();
    google.maps.event.addDomListener(window, "resize", () => {
      map.setCenter(getCen);
    });
}

export default googleMap;
