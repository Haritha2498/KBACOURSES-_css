import { useState } from "react"
import { Link } from "react-router-dom";

const Card = ( {courseproperty} ) => {


  const [showdescription,setdescription]=useState(false)
   const [isHovered, setIsHovered] = useState(false);

  let description=courseproperty.description;
  if(!showdescription){
    description=description.substring(0,100);
  }

  const contentlenth=()=>
  {
    setdescription(!showdescription)
  }

  // the card function get 'each course object' from parent cards as a arg(courseproperty=eachcourse) ,then value is taken as object.key method -title is taken as eachcourse.title;
  return (
    <>
   <div style={{
      backgroundColor: '#FAF5FF',
      borderRadius: '0.375rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginInline: '1.25rem',
      marginBlock: '1.25rem',
      paddingBlock: '2.5rem',
      paddingInline: '1.25rem'
    }}
    >
      <h2 style={{
        fontWeight: 'bold',
        fontSize: '1.125rem',
        color: '#6B21A8'
      }}>{courseproperty.title}</h2>
      <img src="./src/assets/images/rp.png" alt="course thumbnail" style={{
        width: '20rem',
        height: '10rem'
      }} />
      <p
        style={{
          color: isHovered ? 'white' : 'black',
          marginBlock: '0.5rem',
          marginInline: '1.25rem'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {description}
      </p>
      <button style={{
        color: '#6B21A8',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        outline: 'none',
        padding: 0,
        margin: 0
      }} onClick={contentlenth}>{showdescription ? '..read less' : 'read more..'}</button>
      <Link to={`/learnmore/${courseproperty.courseId}`} style={{
        backgroundColor: '#6B21A8',
        color: 'white',
        paddingInline: '1rem',
        paddingBlock: '0.5rem',
        borderRadius: '0.375rem',
        marginInline: 'auto',
        marginBlock: '1.25rem',
        textAlign: 'center',
        textDecoration: 'none',
        alignSelf: 'start'
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#5B1991'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#6B21A8'}
      >
        Learn More
      </Link>
    </div>
    </>
  )
}

export default Card