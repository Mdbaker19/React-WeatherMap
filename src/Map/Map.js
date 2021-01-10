import React from 'react';
import mapboxgl from 'mapbox-gl';
import mapboxToken from "../keys";

mapboxgl.accessToken = mapboxToken;

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: -97.7,
            lat: 31.3,
            zoom: 5
        }
    }




    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-97.7, 31.3],
            zoom: 9
        });

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