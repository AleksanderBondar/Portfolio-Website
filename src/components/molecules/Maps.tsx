import React, { Component, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';


const options = {
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
};
export const Maps: React.FC<{ lat: number, lng: number, name: string}> = (lat, name) => {
    const [activeMarker, setActiveMarker] = useState(null);
    const center = {lat: lat.lat, lng: lat.lng}
    const named = lat.name
    const markers = [
        {
            id: 1,
            name: named,
            position: center,
        },
        {
            id: 2,
            name: named,
            position: center,
        },
        {
            id: 3,
            name: named,
            position: center,
        },
        {
            id: 4,
            name: named,
            position: center,
        },
        {
            id: 5,
            name: named,
            position: center,
        },
        {
            id: 6,
            name: named,
            position: center,
        },
    ];
    const handleActiveMarker = (marker: React.SetStateAction<any | null>) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyChVDA9K2zF25aIuzptWqieb44rPQ-Ya4I">
            <GoogleMap
                clickableIcons={false}
                onClick={() => setActiveMarker(null)}
                onDrag={() => setActiveMarker(null)}
                center={center}
                zoom={10}
                options={options}
                mapTypeId={'satellite'}
                mapContainerStyle={{ width: '100%', height: '100%' }}
            >
                {markers.map(({ id, name, position }) => (
                    <Marker key={id} position={position} onClick={() => handleActiveMarker(id)}>
                        {activeMarker === id ? (
                            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                <div>{name}</div>
                            </InfoWindow>
                        ) : null}
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    );
};
