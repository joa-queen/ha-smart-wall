export default ({ left }) => (
  <div style={styles.app}>
    <div style={styles.leftPaine}>{left}</div>
    <div style={styles.rightPaine}></div>
  </div>
);

const styles = {
  app: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  leftPaine: {
    flex: 1
  },
  rightPaine: {
    flex: 1
  }
}