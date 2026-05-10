function Categories() {
  const categories = [
    {
      name: 'Groceries',
      emoji: '🛒',
      items: ['Whole Milk', 'Eggs', 'Bread', 'Butter', 'Orange Juice'],
    },
    {
      name: 'Personal Care',
      emoji: '🧴',
      items: ['Hand Lotion', 'Shampoo', 'Toothpaste', 'Soap', 'Deodorant'],
    },
    {
      name: 'Household',
      emoji: '🏠',
      items: ['Paper Towels', 'Dish Soap', 'Laundry Detergent', 'Trash Bags'],
    },
    {
      name: 'Medications',
      emoji: '💊',
      items: ['Vitamin D3', 'Aspirin', 'Insulin', 'Blood Pressure Meds'],
    },
  ]

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <span style={styles.title}>Categories</span>
      </div>

      <div style={styles.list}>
        {categories.map(cat => (
          <div key={cat.name} style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.emoji}>{cat.emoji}</span>
              <span style={styles.catName}>{cat.name}</span>
            </div>
            <div style={styles.items}>
              {cat.items.map(item => (
                <span key={item} style={styles.itemPill}>{item}</span>
              ))}
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
  title: { fontSize: '26px', fontWeight: '500', color: '#111' },
  list: { padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' },
  card: { backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '16px', padding: '20px' },
  cardHeader: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' },
  emoji: { fontSize: '28px' },
  catName: { fontSize: '20px', fontWeight: '500', color: '#111' },
  items: { display: 'flex', flexWrap: 'wrap', gap: '10px' },
  itemPill: { padding: '10px 16px', backgroundColor: '#f0faf5', border: '1px solid #9FE1CB', borderRadius: '999px', fontSize: '15px', color: '#085041', cursor: 'pointer' },
}

export default Categories