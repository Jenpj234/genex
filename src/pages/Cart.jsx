import { useCart } from '../context/CartContext'

function Cart() {
  const { cartItems, increaseQty, decreaseQty, total } = useCart()

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <span style={styles.title}>Your Cart 🛒</span>
        <span style={styles.count}>{cartItems.length} items</span>
      </div>

      <div style={styles.list}>
        {cartItems.length === 0 ? (
          <p style={styles.empty}>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} style={styles.card}>
              <span style={styles.emoji}>{item.emoji}</span>
              <div style={styles.info}>
                <p style={styles.name}>{item.name}</p>
                <p style={styles.price}>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div style={styles.controls}>
                <button style={styles.ctrlBtn} onClick={() => decreaseQty(item.id)}>−</button>
                <span style={styles.qty}>{item.quantity}</span>
                <button style={styles.ctrlBtn} onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div style={styles.footer}>
          <div style={styles.totalRow}>
            <span style={styles.totalLabel}>Total</span>
            <span style={styles.totalPrice}>${total.toFixed(2)}</span>
          </div>
          <button style={styles.checkoutBtn}>Proceed to Checkout</button>
        </div>
      )}

      <div style={{ height: '80px' }} />
    </div>
  )
}

const styles = {
  page: { fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', backgroundColor: '#fff', borderBottom: '1px solid #eee' },
  title: { fontSize: '26px', fontWeight: '500', color: '#111' },
  count: { fontSize: '16px', color: '#888' },
  list: { padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' },
  empty: { fontSize: '18px', color: '#888', textAlign: 'center', marginTop: '40px' },
  card: { backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '16px', padding: '18px', display: 'flex', alignItems: 'center', gap: '16px' },
  emoji: { fontSize: '32px' },
  info: { flex: 1 },
  name: { fontSize: '17px', fontWeight: '500', color: '#111', marginBottom: '4px' },
  price: { fontSize: '16px', color: '#0F6E56', fontWeight: '500' },
  controls: { display: 'flex', alignItems: 'center', gap: '12px' },
  ctrlBtn: { width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #ddd', backgroundColor: '#fff', fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  qty: { fontSize: '18px', fontWeight: '500', minWidth: '20px', textAlign: 'center' },
  footer: { margin: '0 24px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '16px', padding: '20px' },
  totalRow: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px' },
  totalLabel: { fontSize: '18px', color: '#555' },
  totalPrice: { fontSize: '22px', fontWeight: '500', color: '#085041' },
  checkoutBtn: { width: '100%', backgroundColor: '#1D9E75', color: '#fff', border: 'none', padding: '16px', borderRadius: '12px', fontSize: '18px', fontWeight: '500', cursor: 'pointer' },
}

export default Cart