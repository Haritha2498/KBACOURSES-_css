import React from 'react'

const Contactdiv3 = () => {
  return (
    <>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <span style={{ padding: '0.75rem', color: '#a78bfa', borderRadius: '9999px', backgroundColor: 'rgba(209, 213, 219, 0.8)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      </span>
      
      <h2 style={{ marginTop: '1rem', fontSize: '1.125rem', fontWeight: '500', color: '#1f2937' }}>Phone</h2>
      <p style={{ marginTop: '0.5rem', color: '#6b7280' }}>Mon-Fri from 8am to 5pm.</p>
      <p style={{ marginTop: '0.5rem', color: '#a78bfa' }}>+1 (555) 000-0000</p>
    </div>
    </>
  )
}

export default Contactdiv3