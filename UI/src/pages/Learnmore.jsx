import React from 'react'
import Coursescom from '../components/Coursescom'
import { useEffect, useState, } from "react";
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { getUserType } from './LoginPage';

const Learnmore = () => {


const course=useLoaderData();
const navigate=useNavigate();

const {id}=useParams();


const userType=getUserType();

const deletecourse=async()=>{
  const confirm=window.confirm('Sure want to delete course');
  if(!confirm) return;
  console.log("delete")
  const res= await fetch(`/api/courses/${id}`,{
    method:'DELETE'
  });
  navigate('/courses')

}

  return (
    <>
    {/* <Coursescom /> */}
    {/* {loading?<h1>loading</h1>: */}

    <div style={{
      backgroundColor: 'white',
      color: '#1A202C',
      marginBottom: '2.5rem',
      paddingBottom: '2.5rem'
    }}>
      <div style={{
        maxWidth: '64rem',
        margin: '0 auto',
        padding: '1.25rem'
      }}>
        <section>
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '1.25rem 0',
              gap: '0.25rem',
              fontWeight: '500'
            }}
            href='/courses'
          >
            Back to Courses
          </a>
        </section>

        <div style={{
          backgroundColor: '#FAF5FF',
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          borderRadius: '0.5rem',
          overflow: 'hidden'
        }}>
          <img
            src="../src/assets/images/banner-kba.png"
            alt="Course Thumbnail"
            style={{
              width: '100%',
              height: '16rem',
              objectFit: 'cover'
            }}
          />
          <div style={{ padding: '1.5rem' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'start',
              marginBottom: '1rem',
              gap: '1rem',
              '@media (min-width: 640px)': {
                flexDirection: 'row',
                alignItems: 'center'
              }
            }}>
              <h1 style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#6B21A8'
              }}>
                {course.title}
              </h1>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '0.5rem',
                '@media (min-width: 640px)': { marginTop: '0' }
              }}>
                <span style={{
                  fontSize: '1.5rem',
                  color: '#DC2626',
                  fontWeight: '600',
                  marginRight: '1rem'
                }}>
                  {course.price}
                </span>
                <button style={{
                  backgroundColor: '#6B21A8',
                  color: 'white',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  outline: 'none',
                  border: 'none',
                  transition: 'background-color 0.3s',
                  ':hover': { backgroundColor: '#5B1991' }
                }}>
                  Add to Cart
                </button>
              </div>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1A202C',
                marginBottom: '0.5rem'
              }}>
                {course.description}
              </h2>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#6B21A8',
                marginBottom: '0.5rem'
              }}>
                Prerequisites
              </h2>
              <ul style={{ listStyleType: 'disc', paddingInlineStart: '1.25rem' }}>
                <li>Basic understanding of blockchain technology</li>
                <li>Familiarity with programming languages</li>
                <li>Internet access</li>
              </ul>
            </div>
            <div>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#6B21A8',
                marginBottom: '0.5rem'
              }}>
                Features
              </h2>
              <ul style={{ listStyleType: 'disc', paddingInlineStart: '1.25rem' }}>
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
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: '1rem',
        marginRight: '12.8125rem' // Adjusted for spacing
      }}>
        {userType === 'admin' && (
          <>
            <Link
              to={`/editcourse/${id}`}
              style={{
                display: 'flex',
                backgroundColor: '#3B82F6',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '9999px',
                height: '2.5rem',
                width: '8rem',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                textDecoration: 'none',
                ':hover': { backgroundColor: '#2563EB' }
              }}
            >
              Edit Course
            </Link>
            <button
              onClick={() => deletecourse(id)}
              style={{
                display: 'flex',
                backgroundColor: '#EF4444',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '9999px',
                height: '2.5rem',
                width: '8rem',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                border: 'none',
                outline: 'none',
                ':hover': { backgroundColor: '#DC2626' }
              }}
            >
              Remove Course
            </button>
          </>
        )}
      </div>
    </div>

  {/* } */}
    </>
  )
};


const Coursesloader=async ({params})=>
      {
        
          const res=await fetch(`/api/courses/${params.id}`);
          const data=await res.json()
          return data;
        }

export{Learnmore as default, Coursesloader}