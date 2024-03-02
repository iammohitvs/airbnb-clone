"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCountries } from "../lib/getCountries";
import { icon } from "leaflet";

const ICON = icon({
    iconUrl:
        "https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png",
    iconSize: [50, 50],
});

export default function Map({ locationValue }: { locationValue: string }) {
    const { getCountryByValue } = useCountries();
    const latLang = getCountryByValue(locationValue)?.latLang;
    return (
        <MapContainer
            scrollWheelZoom={false}
            className="h-[50vh] rounded-lg relative z-0 mt-8"
            center={latLang ?? [52.505, -0.09]}
            zoom={10}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={latLang ?? [52.505, -0.09]} icon={ICON}/>
        </MapContainer>
    );
}
