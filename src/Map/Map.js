import React from 'react';
import mapboxgl from 'mapbox-gl';
import mapboxToken from "../keys";
import WeatherArea from "../WeatherArea/WeatherArea";

mapboxgl.accessToken = mapboxToken;

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: -98.498,
            lat: 29.428,
            zoom: 9
        }
    }


    position = {
        lat: 0,
        lng: 0
    }

    // weatherFunction = new WeatherArea(this.props);

    updateMarker(obj){
        this.setState({
            lng: obj.getLngLat.lng,
            lat: obj.getLngLat.lat,
            zoom: 9
        });

        this.position.lng = obj.getLngLat().lng;
        this.position.lat = obj.getLngLat().lat;

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

        marker.on('dragend', this.updateMarker.bind(this, marker));

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