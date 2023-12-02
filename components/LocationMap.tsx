import {FC} from "react";
import {
    YMaps,
    Map,
    Placemark,
    FullscreenControl,
    GeolocationControl,
    ZoomControl
} from '@pbe/react-yandex-maps';

const LocationMap:FC = () => {
    return (
        <>
            <YMaps>
                <Map
                    width="40vw"
                    height="40vh"
                    defaultState={defaultState}
                >
                    <Placemark geometry={[55.742751, 37.612732]} color='primary' />
                    <GeolocationControl options={{ float: "left" }} />
                    <ZoomControl options={{ float: "right" }} />
                    <FullscreenControl />
                </Map>
            </YMaps>
        </>

    )
}

export default LocationMap;
