import React from 'react'

const Contactdiv1 = () => {
  return (
    <>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <span style={{ padding: '0.75rem', color: '#a78bfa', borderRadius: '9999px', backgroundColor: 'rgba(209, 213, 219, 0.8)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      </span>

      <h2 style={{ marginTop: '1rem', fontSize: '1.125rem', fontWeight: '500', color: '#1f2937' }}>Email</h2>
      <p style={{ marginTop: '0.5rem', color: '#6b7280' }}>Our friendly team is here to help.</p>
      <p style={{ marginTop: '0.5rem', color: '#a78bfa' }}>hello@merakiui.com</p>
    </div>
    </>
  )
}

export default Contactdiv1