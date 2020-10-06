import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

export default function Teste() {
    return(
        <div>
            <Map center={[-3.0773218, -60.0375103]} zoom={15}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-3.0773218, -60.0375103]} />
                    </Map>
        </div>
    );
}