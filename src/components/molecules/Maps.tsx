import React, { Component, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = { lat: 53.1174093716405, lng: 23.148521834532723 };

const markers = [
    {
        id: 1,
        name: 'Wydział Mechaniczny',
        position: { lat: 53.1174093716405, lng: 23.148521834532723 },
    },
    {
        id: 2,
        name: 'Wydział Elektryczny',
        position: { lat: 53.117514176765255, lng: 23.149631577818923 },
    },
];

export const Maps: React.FC = ()=> {
    const [activeMarker, setActiveMarker] = useState(null);

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
                zoom={16}
                mapTypeId={'satellite'}
                mapContainerStyle={{ width: '400px', height: '400px' }}
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
  }
