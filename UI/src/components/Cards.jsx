
import Card from "./Card"
import { useEffect, useState, } from "react";
// import courses from '../courses.json'
import {GridLoader} from 'react-spinners'




const Cards = ( {isHome=false}) => {     
 

  const [course,setCourse]=useState([]);     //to store course list
  const [loading,setloading]=useState(true);        //to handle loading delay

  //syntax of use effect=useEffect((arrowfunction)=>{function description},[])         []=dependency array

  useEffect(()=>{
      const fetchCourses=async ()=>
      {
        try{
          const res=await fetch('/api/courses');
          const data=await res.json()
          setCourse(data);
        }
        catch(error){
          console.log("error",error)
        }
        finally{
          setloading(false);
        }
      }
      fetchCourses();


  },[])

  console.log(course);
  const courseList = isHome ? course.slice(0,3) : course;

  return (
    <>
      {isHome ? (
        <h1 style={{
          fontWeight: 'bold',
          fontSize: '1.125rem',
          color: '#6B21A8',
          textAlign: 'center'
        }}>TOP COURSES</h1>
      ) : (
        <h1 style={{
          fontWeight: 'bold',
          fontSize: '1.125rem',
          color: '#6B21A8',
          textAlign: 'center'
        }}>BROWSE ALL COURSES</h1>
      )}
      
      {loading ? (
        <h1><GridLoader /></h1>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
          marginInline: '1.25rem',
          marginBlock: '2.5rem'
        }}>
          {courseList.map((eachcourse) => (
            <Card key={eachcourse.id} courseproperty={eachcourse} />
          ))}
        </div>
      )}
    </>
  )
}

export default Cards