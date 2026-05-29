import styles from '../styles/styles';
export default function Analytics() {
  return (
    <section style={styles.analyticsSection}>
      <h2>Analytics Dashboard</h2>
      <div style={styles.analyticsGrid}>
        <div style={styles.chartCard}>
          <h3>Sales Analytics</h3>
          <div style={styles.barContainer}>
            <div style={{ ...styles.bar, height: '80px' }}></div>
            <div style={{ ...styles.bar, height: '140px' }}></div>
            <div style={{ ...styles.bar, height: '100px' }}></div>
            <div style={{ ...styles.bar, height: '170px' }}></div>
            <div style={{ ...styles.bar, height: '120px' }}></div>
          </div>
        </div>

        <div style={styles.chartCard}>
          <h3>Monthly Revenue</h3>
          <div style={styles.circleChart}>75%</div>
        </div>
      </div>
    </section>
  );
}