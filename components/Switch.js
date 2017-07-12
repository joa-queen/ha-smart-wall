import { connect } from 'react-redux'
import Lightbulb from '../icons/lightbulb';
import Slider from 'react-rangeslider';

export default connect(state => state)(({ entityName, entities, changed, label }) => {
  const entity = entities[entityName];

  if (!entity) {
    return <div>Loading ...</div>
  }

  const style = entity.state == 'on' ? styles.on : styles.off;
  const action = entity.state == 'on' ? 'turn_off' : 'turn_on';
  return (
    <div style={container}>
      <div style={{...mainStyle, ...style}} onClick={() => changed(action, entityName)}>
        <div style={styles.iconWrapper}>
          <Lightbulb />
          <span>{label}</span>
        </div>
      </div>
    </div>
  );
});

const color = '#dada74';

const container = {
  display: 'flex',
  flex: 1,
}
const mainStyle = {
  margin: '20px',
  border: '2px solid ' + color,
  alignItems: 'center',
  fill: '#666',
  color: '#666',
  flex: '1',
  display: 'flex',
};
const styles = {
  on: {
    backgroundColor: color,
  },
  off: {
    backgroundColor: 'transparent',
    fill: color,
    color: color,
  },
  iconWrapper: {
    width: '120px',
    textAlign: 'center',
    margin: '0 auto',
  },
  sliderWrapper: {
    height: '100%',
    flex: '1',
    textAlign: 'center',
  },
  slider: {
    width: '10px',
    height: '100%',
    margin: '20px',
    background: 'white',
  }
}