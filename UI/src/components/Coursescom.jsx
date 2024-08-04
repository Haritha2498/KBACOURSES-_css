import React from 'react'

const Coursescom = () => {
  return (
    <>
    <div style={{ backgroundColor: 'white', color: '#1a202c', marginBottom: '2.5rem', paddingBottom: '2.5rem' }}>
      <div style={{ maxWidth: '64rem', margin: 'auto', padding: '1.25rem' }}>
        <section>
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.25rem',
              gap: '0.25rem',
              fontWeight: '500'
            }}
            href='/courses'
          >
            Back to Courses
          </a>
        </section>

        <div style={{
          backgroundColor: '#f3e8ff',
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          borderRadius: '0.375rem',
          overflow: 'hidden'
        }}>
          <img
            src="../src/assets/images/banner-kba.png"
            alt="Course Thumbnail"
            style={{ width: '100%', height: '16rem', objectFit: 'cover' }}
          />
          <div style={{ padding: '1.5rem' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1rem'
            }}>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#5b21b6' }}>
                Ethereum Developer
              </h1>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '0.5rem'
              }}>
                <span style={{
                  fontSize: '1.5rem',
                  color: '#e53e3e',
                  fontWeight: '600',
                  marginRight: '1rem'
                }}>
                  Rs.5000
                </span>
                <button style={{
                  backgroundColor: '#805ad5',
                  color: 'white',
                  paddingLeft: '1.5rem',
                  paddingRight: '1.5rem',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease-in-out'
                }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#6b46c1'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#805ad5'}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#5b21b6', marginBottom: '0.5rem' }}>
                Description
              </h2>
              <p>
                Certified Ethereum Developer is designed for learning about Ethereum Public Blockchain and Decentralized Applications (Dapps). The course is mainly intended for a developer who wants to develop decentralized applications for the Ethereum Network. The course is structured in a zero to finish project development manner. The candidate gets to develop a decentralized application while learning about the various concepts of the application development on the Ethereum network.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#5b21b6', marginBottom: '0.5rem' }}>
                Prerequisites
              </h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1rem' }}>
                <li>Basic understanding of blockchain technology</li>
                <li>Familiarity with programming languages</li>
                <li>Internet access</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#5b21b6', marginBottom: '0.5rem' }}>
                Features
              </h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1rem' }}>
                <li>40 hours of content</li>
                <li>Certificate of completion</li>
                <li>Access to community forums</li>
                <li>Downloadable resources</li>
                <li>24/7 support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '1rem', marginRight: '12.8125rem' }}>
        <a href='/editcourse'
          style={{
            display: 'flex',
            backgroundColor: '#4299e1',
            hoverBackgroundColor: '#3182ce',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '9999px',
            height: '2.5rem',
            width: '8rem',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
        >
          Edit Course
        </a>
        <a
          style={{
            display: 'flex',
            backgroundColor: '#e53e3e',
            hoverBackgroundColor: '#c53030',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '9999px',
            height: '2.5rem',
            width: '8rem',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
        >
          Remove Course
        </a>
      </div>
    </div>
    </>
  )
}

export default Coursescom