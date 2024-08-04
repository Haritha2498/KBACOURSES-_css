

const Button = () => {
  return (
    <>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '10rem'
    }}>
      <button
        style={{
          width: '20rem',
          height: '2.5rem',
          borderRadius: '9999px',
          backgroundColor: '#6B21A8',
          color: 'white',
          fontWeight: '500',
          cursor: 'pointer',
          border: 'none',
          outline: 'none',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#5B1991'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#6B21A8'}
      >
        View all Courses
      </button>
    </div>
    </>
  )
}

export default Button