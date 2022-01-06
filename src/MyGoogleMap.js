import { React } from 'react';
import { GoogleMap, useJsApiLoader, TrafficLayer } from '@react-google-maps/api';
import PropTypes from 'prop-types';

// Google Map
function MyGoogleMap(props) {

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
  
    const containerStyle = {
      width: props.width,
      height: props.height
    };
    // const [map, setMap] = useState(null)
  
    const center = { lat: props.lat, lng: props.lng };
    const zoom = props.zoom;
  
    // const onLoad = useCallback(function callback(map) {
    //   const bounds = new window.google.maps.LatLngBounds();
    //   map.fitBounds(bounds);
    //   setMap(map)
    // }, [])
  
    const onLoad = trafficLayer => {
      console.log('center.lat: ' + center.lat + ' center.lng: ' + center.lng)
      console.log('trafficLayer: ', trafficLayer)
    }
  
    // const onUnmount = useCallback(function callback(map) {
    //   setMap(null)
    // }, [])
  
    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        // onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <TrafficLayer
          onLoad={onLoad}
        />
      </GoogleMap>
    ) : <></>
  }
  
  
  MyGoogleMap.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    zoom: PropTypes.number
  }

  export default MyGoogleMap;