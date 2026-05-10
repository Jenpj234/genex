function Nearby() {
  const places = [
    { id: 1, emoji: '🏥', name: 'NYC Health + Hospitals', type: 'Hospital', distance: '0.3 miles', address: '462 First Ave, New York, NY' },
    { id: 2, emoji: '💊', name: 'CVS Pharmacy', type: 'Pharmacy', distance: '0.5 miles', address: '135 E 23rd St, New York, NY' },
    { id: 3, emoji: '💊', name: 'Walgreens', type: 'Pharmacy', distance: '0.8 miles', address: '322 E 14th St, New York, NY' },
    { id: 4, emoji: '🏥', name: 'Bellevue Hospital', type: 'Hospital', distance: '1.2 miles', address: '462 First Ave, New York, NY' },
    { id: 5, emoji: '💊', name: 'Rite Aid', type: 'Pharmacy', distance: '1.4 miles', address: '408 Grand St, New York, NY' },
  ]

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <span style={styles.title}>Nearby 🗺️</span>
        <span style={styles.subtitle}>Pharmacies & Hospitals</span>
      </div>

      {/* Map placeholder — we'll embed a real map later */}
      <div style={styles.mapPlaceholder}>
        <span style={{ fontSize: '40px' }}>🗺️</span>
        <p style={styles.mapText}>Map coming soon</p>
        <p style={styles.mapSub}>We'll embed Google Maps here</p>
      </div>

      <p style={styles.sectionLabel}>NEARBY LOCATIONS</p>
      <div style={styles.list}>
        {places.map(place => (
          <div key={place.id} style={styles.card}>
            <span style={styles.emoji}>{place.emoji}</span>
            <div style={styles.info}>
              <p style={styles.name}>{place.name}</p>
              <p style={styles.address}>{place.address}</p>
            </div>
            <div style={styles.right}>
              <span style={{
                ...styles.typeBadge,
                backgroundColor: place.type === 'Hospital' ? '#FFF0F0' : '#F0FFF8',
                color: place.type === 'Hospital' ? '#C0392B' : '#0F6E56',
                borderColor: place.type === 'Hospital' ? '#F5C6C6' : '#9FE1CB',
              }}>
                {place.type}
              </span>
              <p style={styles.distance}>{place.distance}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: '80px' }} />
    </div>
  )
}

const styles = {
  page: { fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' },
  header: { padding: '24px', backgroundColor: '#fff', borderBottom: '1px solid #eee' },
  title: { fontSize: '26px', fontWeight: '500', color: '#111', display: 'block', marginBottom: '4px' },
  subtitle: { fontSize: '16px', color: '#888' },
  mapPlaceholder: { margin: '24px', height: '180px', backgroundColor: '#E1F5EE', border: '1px solid #9FE1CB', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' },
  mapText: { fontSize: '18px', fontWeight: '500', color: '#085041' },
  mapSub: { fontSize: '14px', color: '#0F6E56' },
  sectionLabel: { fontSize: '13px', color: '#888', fontWeight: '500', letterSpacing: '0.05em', margin: '0 24px 14px' },
  list: { padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '14px' },
  card: { backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '16px', padding: '18px', display: 'flex', alignItems: 'center', gap: '16px' },
  emoji: { fontSize: '30px' },
  info: { flex: 1 },
  name: { fontSize: '17px', fontWeight: '500', color: '#111', marginBottom: '4px' },
  address: { fontSize: '14px', color: '#888', lineHeight: '1.4' },
  right: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' },
  typeBadge: { padding: '4px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: '500', border: '1px solid' },
  distance: { fontSize: '14px', color: '#888' },
}

export default Nearby