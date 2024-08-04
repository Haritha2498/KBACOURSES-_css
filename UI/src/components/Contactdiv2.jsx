import React from 'react'

const Contactdiv2 = () => {
  return (
    <>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <span style={{ padding: '0.75rem', color: '#a78bfa', borderRadius: '9999px', backgroundColor: 'rgba(209, 213, 219, 0.8)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      </span>
      
      <h2 style={{ marginTop: '1rem', fontSize: '1.125rem', fontWeight: '500', color: '#1f2937' }}>Office</h2>
      <p style={{ marginTop: '0.5rem', color: '#6b7280' }}>Come say hello at our office HQ.</p>
      <p style={{ marginTop: '0.5rem', color: '#a78bfa' }}>100 Smith Street Collingwood VIC 3066 AU</p>
    </div>
    </>
  )
}

export default Contactdiv2