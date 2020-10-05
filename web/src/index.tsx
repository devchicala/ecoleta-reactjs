import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGVsY2lvZnJhbmNpc2NvMSIsImEiOiJja2Q4bXlib2owNWF0MnJtaWh4anlidHpjIn0.yqP7Jnblqyw9iE5Dz8mGxw";

class Application extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
    };
  }

  componentDidMount = () => {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [5, 34],
      zoom: 2,
    });
  };
}

ReactDOM.render = () =>{
  return (
    <div>
      <div ref={el => this.mapContainer = el} className="mapContainer" />
    </div>
  )
}

ReactDOM.render(<Application />,
   document.getElementById("root"));
