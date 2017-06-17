import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, load, callService } from '../store'
import withRedux from 'next-redux-wrapper'

import App from '../components/App';
import Switch from '../components/Switch';


class Living extends React.Component {
  constructor(props) {
    super(props);
    this.entityName = 'light.aeotec_zw098_led_bulb_level_4_0';
  }

  componentDidMount () {
    this.props.load();
  }

  changed = (service, entityName) => {
    this.props.callService('homeassistant', service, {
      entity_id: entityName
    });
  }

  render () {
    const Left = (
      <div style={{...container}}>
        <Switch
          entityName={this.entityName}
          changed={this.changed}
          label="Bedroom"
        />
      </div>
    );
    return (
      <App left={Left} />
    )
  }
}

const container = {
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: bindActionCreators(load, dispatch),
    callService: bindActionCreators(callService, dispatch),
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Living)