import { useState } from 'react'
import { useCart } from '../context/CartContext'
import products from '../data'
function Home() {

const [search, setSearch] = useState('')
const [activeCategory, setActiveCategory] = useState('All')

const filtered = products.filter(product => {
  const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
  const matchesCategory = activeCategory === 'All' || product.category === activeCategory
  return matchesSearch && matchesCategory
})

  const { addToCart } = useCart()

  return (
    <div style={styles.page}>

      {/* Header */}
      <div style={styles.header}>
        <span style={styles.logo}>Gen<span style={{ color: '#1D9E75' }}>Ex</span></span>
        <span style={styles.greeting}>Hi, Margaret 👋</span>
      </div>

<div style={styles.searchBar}>
  <span>🔍</span>
  <input
    style={styles.searchInput}
    placeholder="Search groceries, medications..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

      {/* Hero Banner */}
      <div style={styles.hero}>
        <div>
          <p style={styles.heroTitle}>Your weekly essentials,{'\n'}delivered fast.</p>
          <p style={styles.heroSub}>Free delivery on orders over $35</p>
          <button style={styles.heroBtn}>Shop now</button>
        </div>
        <span style={{ fontSize: '52px' }}>🛍️</span>
      </div>

      {/* Categories */}
      <p style={styles.sectionLabel}>CATEGORIES</p>
<div style={styles.categories}>
  {['All', 'Groceries', 'Personal Care', 'Household', 'Medications'].map(cat => (
    <div
      key={cat}
      style={{
        ...styles.pill,
        backgroundColor: activeCategory === cat ? '#E1F5EE' : '#fff',
        borderColor: activeCategory === cat ? '#5DCAA5' : '#ddd',
        color: activeCategory === cat ? '#085041' : '#555',
        fontWeight: activeCategory === cat ? '500' : 'normal',
      }}
      onClick={() => setActiveCategory(cat)}
    >
      {cat}
    </div>
  ))}
</div>

      {/* Products */}
      <p style={styles.sectionLabel}>RECOMMENDED FOR YOU</p>
      <div style={styles.grid}>
        {filtered.map(product => (
          <div key={product.id} style={styles.card}>
            <span style={styles.cardEmoji}>{product.emoji}</span>
            <p style={styles.cardName}>{product.name}</p>
            <p style={styles.cardDesc}>{product.desc}</p>
            <div style={styles.cardFooter}>
              <span style={styles.cardPrice}>${product.price.toFixed(2)}</span>
              <button style={styles.addBtn} onClick={() => addToCart(product)}>+</button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom padding so navbar doesn't cover content */}
      <div style={{ height: '80px' }} />
    </div>
  )
}

const styles = {
  page: { fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', backgroundColor: '#fff', borderBottom: '1px solid #eee' },
  logo: { fontSize: '26px', fontWeight: '500' },
  greeting: { fontSize: '17px', color: '#555' },
  searchBar: { display: 'flex', alignItems: 'center', gap: '12px', margin: '20px 24px', padding: '14px 20px', border: '1.5px solid #ddd', borderRadius: '12px', backgroundColor: '#fff' },
  searchInput: { border: 'none', outline: 'none', fontSize: '18px', width: '100%', backgroundColor: 'transparent' },
  hero: { margin: '0 24px 24px', padding: '26px', backgroundColor: '#E1F5EE', borderRadius: '16px', border: '1px solid #9FE1CB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  heroTitle: { fontSize: '20px', fontWeight: '500', color: '#085041', marginBottom: '8px', lineHeight: '1.4', whiteSpace: 'pre-line' },
  heroSub: { fontSize: '16px', color: '#0F6E56', marginBottom: '16px' },
  heroBtn: { backgroundColor: '#1D9E75', color: '#fff', border: 'none', padding: '13px 24px', borderRadius: '10px', fontSize: '17px', fontWeight: '500', cursor: 'pointer' },
  sectionLabel: { fontSize: '13px', color: '#888', fontWeight: '500', letterSpacing: '0.05em', margin: '0 24px 14px' },
  categories: { display: 'flex', gap: '12px', padding: '0 24px 24px', overflowX: 'auto' },
  pill: { padding: '12px 22px', borderRadius: '999px', border: '1px solid #ddd', fontSize: '16px', whiteSpace: 'nowrap', cursor: 'pointer', backgroundColor: '#fff', color: '#555' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))', gap: '16px', padding: '0 24px' },
  card: { backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '16px', padding: '16px', cursor: 'pointer' },
  cardEmoji: { fontSize: '34px', display: 'block', textAlign: 'center', backgroundColor: '#f5f5f5', borderRadius: '10px', padding: '14px', marginBottom: '12px' },
  cardName: { fontSize: '16px', fontWeight: '500', color: '#111', marginBottom: '5px' },
  cardDesc: { fontSize: '14px', color: '#777', marginBottom: '12px', lineHeight: '1.5' },
  cardFooter: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  cardPrice: { fontSize: '18px', fontWeight: '500', color: '#0F6E56' },
  addBtn: { backgroundColor: '#1D9E75', color: '#fff', border: 'none', width: '36px', height: '36px', borderRadius: '50%', fontSize: '22px', cursor: 'pointer' },
}

export default Home