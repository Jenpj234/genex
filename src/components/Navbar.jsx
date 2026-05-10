import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const location = useLocation()
  const { cartItems } = useCart()

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav style={styles.nav}>
      <NavItem to="/" icon="🏠" label="Home" active={location.pathname === '/'} />
      <NavItem to="/categories" icon="🗂️" label="Categories" active={location.pathname === '/categories'} />
      <NavItem to="/cart" icon="🛒" label="Cart" active={location.pathname === '/cart'} badge={cartCount} />
      <NavItem to="/nearby" icon="🗺️" label="Nearby" active={location.pathname === '/nearby'} />
    </nav>
  )
}

function NavItem({ to, icon, label, active, badge }) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <div style={{ ...styles.navItem, color: active ? '#1D9E75' : '#888' }}>
        <div style={styles.iconWrapper}>
          <span style={styles.icon}>{icon}</span>
          {badge > 0 && (
            <span style={styles.badge}>{badge}</span>
          )}
        </div>
        <span style={styles.label}>{label}</span>
      </div>
    </Link>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '16px 0',
    borderTop: '1px solid #eee',
    backgroundColor: '#fff',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    cursor: 'pointer',
  },
  iconWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  icon: { fontSize: '24px' },
  label: { fontSize: '13px', fontWeight: '500' },
  badge: {
    position: 'absolute',
    top: '-6px',
    right: '-8px',
    backgroundColor: '#1D9E75',
    color: '#fff',
    fontSize: '11px',
    fontWeight: '700',
    borderRadius: '999px',
    minWidth: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 4px',
  },
}

export default Navbar