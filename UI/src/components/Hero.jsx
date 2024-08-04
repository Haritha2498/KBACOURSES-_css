

const Hero = () => {
  return (
    <>
    <div style={{
        backgroundColor: '#FAF5FF',
        color: '#4C1D95',
        padding: '2.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '0.25rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontWeight: 'bold',
          fontSize: '1.25rem', // default size
          '@media (min-width: 768px)': { fontSize: '1.875rem' }, // md:text-3xl
          '@media (min-width: 1024px)': { fontSize: '2.25rem' } // lg:text-4xl
        }}>
          Learn Blockchain Technology From Kerala's First Dedicated Facility for Blockchain Education
        </h1>
        <h2 style={{
          marginTop: '1rem',
          fontSize: '1.125rem', // default size
          '@media (min-width: 768px)': { fontSize: '1.25rem' }, // md:text-xl
          '@media (min-width: 1024px)': { fontSize: '1.5rem' } // lg:text-2xl
        }}>
          Since 2017
        </h2>
      </div>

      <div style={{
        backgroundColor: '#FAF5FF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2.5rem',
        padding: '2.5rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontWeight: 'bold',
          fontSize: '1.5rem', // default size
          color: '#6B21A8',
          '@media (min-width: 768px)': { fontSize: '2.25rem' } // md:text-4xl
        }}>
          BROWSE OUR TOP COURSES
        </h1>
        <h2 style={{
          fontWeight: '500',
          fontSize: '1.125rem', // default size
          color: '#9F7AEA',
          marginTop: '1rem',
          '@media (min-width: 768px)': { fontSize: '1.25rem' } // md:text-xl
        }}>
          Choose the course that's right for your career goals.
        </h2>
      </div>

    </>
  )
}

export default Hero