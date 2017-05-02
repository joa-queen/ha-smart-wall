import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, load, callService } from '../store'
import withRedux from 'next-redux-wrapper'

import App from '../components/App';
import Switch from '../components/Switch';


class Living extends React.Component {
  componentDidMount () {
    this.props.load();
  }

  render () {
    const Left = (
      <Switch
        entityName={'light.aeotec_dsc27103_micro_dimmer_2nd_edition_level_8_0'}
      />
    );
    return (
      <App left={Left} />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: bindActionCreators(load, dispatch),
    callService: bindActionCreators(callService, dispatch),
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Living)