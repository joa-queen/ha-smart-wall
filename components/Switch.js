import { connect } from 'react-redux'
import Lightbulb from '../icons/lightbulb';
import { callService } from '../store'

export default connect(state => state, { callService })(({ entityName, entities, callService }) => {
  const entity = entities[entityName];

  if (!entity) {
    return <div>Loading ...</div>
  }

  const style = entity.state == 'on' ? styles.on : styles.off;
  const action = entity.state == 'on' ? 'turn_off' : 'turn_on';
  return (
    <div style={container} onClick={() => callService('light', action, {entity_id: entityName})}>
      <div style={{...mainStyle, ...style}}>
        <div style={styles.iconWrapper}>
          <Lightbulb />
          <span>Couch</span>
        </div>
      </div>
    </div>
  );
});

const color = '#dada74';

const container = {
  height: 'calc(100% - 40px)',
}
const mainStyle = {
  margin: '20px',
  border: '2px solid ' + color,
  height: '100%',
  width: '60%',
  alignItems: 'center',
  fill: '#666',
  color: '#666',
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
    margin: '150px auto',
  }
}