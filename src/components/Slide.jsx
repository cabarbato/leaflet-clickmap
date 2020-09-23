import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Map, TileLayer } from 'react-leaflet';
import { set_coords, set_disabled, set_enabled } from '../actions/actions';
import 'leaflet/dist/leaflet.css';

const isDesktop = window.innerWidth > 750,
  DEFAULT_VIEWPORT = {
    center: [38.7, -96.6],
    zoom: isDesktop ? 4 : 3.5,
  },
  mapStateToProps = state => {
    return {
      is_enabled: state.progressReducer.is_enabled,
      slide: state.progressReducer.slide,
      cities: state.citiesReducer,
    };
  },
  mapDispatchToProps = dispatch => {
    return {
      onSetCoords: event => dispatch(set_coords(event)),
      onSetDisabled: event => dispatch(set_disabled(event)),
      onSetEnabled: event => dispatch(set_enabled(event)),
    };
  };

class AppSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewport: DEFAULT_VIEWPORT };
  }
  onViewportChanged = viewport => {
    this.setState({ viewport });
  };
  render() {
    console.log(this.state);
    const { slide, cities } = this.props;
    if (typeof window !== 'undefined') {
      return (
        <Container>
          <Row>
            <Col className="instructions">
              <h3>Find and Click on {cities[slide]['city']}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <div id="map">
                <Map
                  dragging={false}
                  maxBounds={[
                    [-90, -360],
                    [90, 360],
                  ]}
                  minZoom={isDesktop ? 2 : 1}
                  maxZoom={isDesktop ? 6 : 5}
                  onViewportChanged={this.onViewportChanged}
                  viewport={this.state.viewport}
                  zoomSnap={0.5}
                >
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  />
                </Map>
              </div>
            </Col>
          </Row>
        </Container>
      );
    }
    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSlide);
