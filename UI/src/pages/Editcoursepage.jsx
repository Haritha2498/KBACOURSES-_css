import React, { useEffect } from 'react'
import Editcourse from '../components/Editcourse'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useState } from "react"
import { Coursesloader } from './Learnmore';


const Editcoursepage = () => {
  
  const [course,setCourse]=useState([])

  const {id}=useParams();


  useEffect(()=>{
    const fetchCourses=async ()=>
    {
      try{
        const res=await fetch(`/api/courses/${id}`);
        const data=await res.json()
        console.log(data,"hjkl")
        setCourse(data);
      }
      catch(error){
        console.log("error",error)
      }
      
    }
    fetchCourses();


},[])

  // const Courses=async ()=>
  //   {
      
  //       const res=await fetch(`/api/courses/${id}`);
  //       const data=await res.json()
  //       console.log(data);
  //       setCourse(data);
  //     }

console.log(course,"from edit page ")




    const [title,setTitle]=useState('');
    const [courseId,setCourseId]=useState('');
    const [type,setType]=useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState('');
    
    const navigate=useNavigate();
  
    const submitForm=(e)=>{
      e.preventDefault();
      const updatedCourse={
        title,              //shorthand of title=title,
        
        type,
        description,
        price
      }
      const res=updateCourseSubmit(updatedCourse);
      navigate(`/learnmore/${id}`)
      // console.log("text",res);
  
    }
    console.log(id)
    
  
    const updateCourseSubmit= async(updatedCourse)=>{
        const res=await fetch(`/api/courses/${id}`,{
                        method:'PUT',
                        headers:{
                          'Content-Type':'application/json',
                        },
                        body:JSON.stringify(updatedCourse)
    })
    console.log("msggh",res);
      return res;
    }
  
    return (
      <>
      {/* <Addform /> */}
      <section style={{ backgroundColor: 'white', marginBottom: '5rem' }}>
      <div style={{
        maxWidth: '42rem',
        margin: 'auto',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem'
      }}>
        <div style={{
          backgroundColor: '#FAF5FF',
          paddingInline: '1.5rem',
          paddingBlock: '2rem',
          marginBottom: '1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '0.375rem',
          border: '1px solid #E2E8F0',
          marginInline: '1rem',
        }}>
          <form onSubmit={submitForm}>
            <h2 style={{
              fontSize: '1.875rem',
              color: '#6B21A8',
              textAlign: 'center',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Add Course
            </h2>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                color: '#4A5568',
                fontWeight: '700',
                marginBottom: '0.5rem'
              }}>
                Course Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                style={{
                  border: '1px solid #E2E8F0',
                  borderRadius: '0.375rem',
                  width: '100%',
                  padding: '0.5rem 0.75rem',
                  marginBottom: '0.5rem'
                }}
                placeholder={course.title}
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="type" style={{
                display: 'block',
                color: '#4A5568',
                fontWeight: '700',
                marginBottom: '0.5rem'
              }}>
                Course Type
              </label>
              <select
                id="type"
                name="type"
                style={{
                  border: '1px solid #E2E8F0',
                  borderRadius: '0.375rem',
                  width: '100%',
                  padding: '0.5rem 0.75rem'
                }}
                required
                placeholder={course.type}
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Self-Paced">Self-Paced</option>
                <option value="Instructor-Led">Instructor-Led</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="description" style={{
                display: 'block',
                color: '#4A5568',
                fontWeight: '700',
                marginBottom: '0.5rem'
              }}>
                Description
              </label>
              <textarea
                id="description"
                name="description"
                style={{
                  border: '1px solid #E2E8F0',
                  borderRadius: '0.375rem',
                  width: '100%',
                  padding: '0.5rem 0.75rem'
                }}
                rows="4"
                placeholder={course.description}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="price" style={{
                display: 'block',
                color: '#4A5568',
                fontWeight: '700',
                marginBottom: '0.5rem'
              }}>
                Price
              </label>
              <select
                id="price"
                name="price"
                style={{
                  border: '1px solid #E2E8F0',
                  borderRadius: '0.375rem',
                  width: '100%',
                  padding: '0.5rem 0.75rem'
                }}
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="Rs.5000">Rs.5000</option>
                <option value="Rs.3500">Rs.3500</option>
                <option value="Rs.15000">Rs.15000</option>
              </select>
            </div>

            <div>
              <button
                style={{
                  backgroundColor: '#6B21A8',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  width: '100%',
                  marginTop: '2.5rem',
                  outline: 'none',
                  boxShadow: '0 0 0 3px rgba(107, 33, 168, 0.3)',
                  cursor: 'pointer'
                }}
                type="submit"
              >
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
      </>
    )
    
  
}

export default Editcoursepage