import React from 'react';
import mapboxgl from 'mapbox-gl';
import mapboxToken from "../keys";

mapboxgl.accessToken = mapboxToken;

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: -98.49,
            lat: 29.42,
            zoom: 9
        }
    }




    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-98.49, 29.42],
            zoom: 9
        });

        const marker = new mapboxgl.Marker({
            color: "#941414",
            draggable: true
        }).setLngLat([-98.49, 29.42])
            .addTo(map);

    }




    render() {
        return (
            <div id="mapBoxArea">
                <div ref={el => this.mapContainer = el} className="mapContainer"/>
            </div>
        )
    }
}

export default Map;