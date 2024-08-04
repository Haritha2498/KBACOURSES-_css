import React from 'react'
import Addform from '../components/Addform'
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Addcourse = () => {

  const [title,setTitle]=useState('');
  const [courseId,setCourseId]=useState('');
  const [type,setType]=useState('');
  const [description,setDescription]=useState('');
  const [price,setPrice]=useState();

  const navigate=useNavigate();

  const submitForm=(e)=>{
    e.preventDefault();
    const newCourse={
      title,              //shorthand of title=title,
      courseId,
      type,
      description,
      price
    }
    const res=addCourseSubmit(newCourse);
    toast.success("added succesfully");

    navigate("/courses")
    // console.log("text",res);

  }

  

  const addCourseSubmit= async(newCourse)=>{
      const res=await fetch('/api/courses',{
                      method:'POST',
                      headers:{
                        'Content-Type':'application/json',
                      },
                      body:JSON.stringify(newCourse)
  })
  console.log("msg",res);
    return res;
  }

  return (
    <>
    {/* <Addform /> */}
  <section style={{ backgroundColor: 'white', marginBottom: '20px' }}>
      <div style={{ margin: 'auto', maxWidth: '40rem', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div style={{
          backgroundColor: '#f3e8ff',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          marginBottom: '1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '0.375rem',
          border: '1px solid #e5e7eb',
          margin: '1rem'
        }}>
          <form onSubmit={submitForm}>
            <h2 style={{
              fontSize: '1.875rem',
              color: '#5b21b6',
              textAlign: 'center',
              fontWeight: 600,
              marginBottom: '1.5rem'
            }}>
              Add Course
            </h2>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                color: '#4a5568',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                Course Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.375rem',
                  width: '100%',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  paddingLeft: '0.75rem',
                  paddingRight: '0.75rem',
                  marginBottom: '0.5rem'
                }}
                placeholder="eg. Certified Blockchain Associate"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                color: '#4a5568',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                Course Id
              </label>
              <input
                type="text"
                id="courseId"
                name="courseId"
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.375rem',
                  width: '100%',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  paddingLeft: '0.75rem',
                  paddingRight: '0.75rem',
                  marginBottom: '0.5rem'
                }}
                placeholder="eg. 1"
                required
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                color: '#4a5568',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                Course Type
              </label>
              <select
                id="type"
                name="type"
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.375rem',
                  width: '100%',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  paddingLeft: '0.75rem',
                  paddingRight: '0.75rem'
                }}
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Self-Paced">Self-Paced</option>
                <option value="Instructor-Led">Instructor-Led</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                color: '#4a5568',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                Description
              </label>
              <textarea
                id="description"
                name="description"
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.375rem',
                  width: '100%',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  paddingLeft: '0.75rem',
                  paddingRight: '0.75rem'
                }}
                rows="4"
                placeholder="Small description on the course"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                color: '#4a5568',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                Price
              </label>
              <select
                id="price"
                name="price"
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.375rem',
                  width: '100%',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  paddingLeft: '0.75rem',
                  paddingRight: '0.75rem'
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
                  backgroundColor: '#805ad5',
                  color: 'white',
                  fontWeight: 'bold',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  borderRadius: '9999px',
                  width: '100%',
                  marginTop: '2.5rem',
                  marginBottom: '2.5rem',
                  outline: 'none',
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

export default Addcourse