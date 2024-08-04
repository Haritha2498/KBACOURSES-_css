import React from 'react'
import Contactdiv1 from './Contactdiv1'
import Contactdiv2 from './Contactdiv2'
import Contactdiv3 from './Contactdiv3'

const Contactcom = () => {
  return (
    <>
     <section style={{ backgroundColor: 'white', marginTop: '0.25rem', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
      <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '3rem', paddingBottom: '3rem', margin: 'auto' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: '500', color: '#a78bfa' }}>Contact us</p>

          <h1 style={{ marginTop: '0.5rem', fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', md: { fontSize: '1.875rem' } }}>
            Get in touch
          </h1>

          <p style={{ marginTop: '0.75rem', color: '#6b7280' }}>Our friendly team is always here to chat.</p>
        </div>

        <div style={{ display: 'inline-flex',marginLeft:'25rem', gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', gap: '3rem', marginTop: '2.5rem', md: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }, lg: { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' } }}>
          <Contactdiv1 />
          <Contactdiv2 />
          <Contactdiv3 />
        </div>
      </div>
    </section>
    </>
  )
}

export default Contactcom