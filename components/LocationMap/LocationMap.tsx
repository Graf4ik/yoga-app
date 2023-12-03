import { FC } from 'react';
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  GeolocationControl,
  ZoomControl,
} from '@pbe/react-yandex-maps';
import styles from './LocationMap.module.scss';

const defaultState = {
  title: 'ГЭС-2',
  center: [55.742751, 37.612732],
  zoom: 12,
};

const LocationMap:FC = () => (
  <YMaps>
    <Map
      className={styles.map}
      defaultState={defaultState}
    >
      <Placemark geometry={[55.742751, 37.612732]} color="primary" />
      <GeolocationControl options={{ float: 'left' }} />
      <ZoomControl />
      <FullscreenControl />
    </Map>
  </YMaps>

);

export default LocationMap;
