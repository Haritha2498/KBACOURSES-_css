import React from 'react'

const Addform = () => {
  return (
    <>
    <section style="background-color: white; margin-bottom: 20px;">
  <div style="margin: auto; max-width: 40rem; padding-top: 2rem; padding-bottom: 2rem;">
    <div style="background-color: #f3e8ff; padding-left: 1.5rem; padding-right: 1.5rem; padding-top: 2rem; padding-bottom: 2rem; margin-bottom: 1rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 0.375rem; border-width: 1px; margin: 1rem;">
      <form>
        <h2 style="font-size: 1.875rem; color: #5b21b6; text-align: center; font-weight: 600; margin-bottom: 1.5rem;">Add Course</h2>
        <div style="margin-bottom: 1rem;">
          <label style="display: block; color: #4a5568; font-weight: bold; margin-bottom: 0.5rem;">Course Name</label>
          <input
            type="text"
            id="title"
            name="title"
            style="border-width: 1px; border-radius: 0.375rem; width: 100%; padding-top: 0.5rem; padding-bottom: 0.5rem; padding-left: 0.75rem; padding-right: 0.75rem; margin-bottom: 0.5rem;"
            placeholder="eg. Certified Blockchain Associate"
            required
          />
        </div>
        <div style="margin-bottom: 1rem;">
          <label style="display: block; color: #4a5568; font-weight: bold; margin-bottom: 0.5rem;">Course Id</label>
          <input
            type="text"
            id="courseId"
            name="courseId"
            style="border-width: 1px; border-radius: 0.375rem; width: 100%; padding-top: 0.5rem; padding-bottom: 0.5rem; padding-left: 0.75rem; padding-right: 0.75rem; margin-bottom: 0.5rem;"
            placeholder="eg. 1"
            required
          />
        </div>
        <div style="margin-bottom: 1rem;">
          <label style="display: block; color: #4a5568; font-weight: bold; margin-bottom: 0.5rem;">Course Type</label>
          <select
            id="type"
            name="type"
            style="border-width: 1px; border-radius: 0.375rem; width: 100%; padding-top: 0.5rem; padding-bottom: 0.5rem; padding-left: 0.75rem; padding-right: 0.75rem;"
            required
          >
            <option value="Self-Paced">Self-Paced</option>
            <option value="Instructor-Led">Instructor-Led</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div style="margin-bottom: 1rem;">
          <label style="display: block; color: #4a5568; font-weight: bold; margin-bottom: 0.5rem;">Description</label>
          <textarea
            id="description"
            name="description"
            style="border-width: 1px; border-radius: 0.375rem; width: 100%; padding-top: 0.5rem; padding-bottom: 0.5rem; padding-left: 0.75rem; padding-right: 0.75rem;"
            rows="4"
            placeholder="Small description on the course"
          ></textarea>
        </div>
        <div style="margin-bottom: 1rem;">
          <label style="display: block; color: #4a5568; font-weight: bold; margin-bottom: 0.5rem;">Price</label>
          <select
            id="price"
            name="price"
            style="border-width: 1px; border-radius: 0.375rem; width: 100%; padding-top: 0.5rem; padding-bottom: 0.5rem; padding-left: 0.75rem; padding-right: 0.75rem;"
            required
          >
            <option value="Rs.5000">Rs.5000</option>
            <option value="Rs.3500">Rs.3500</option>
            <option value="Rs.15000">Rs.15000</option>
          </select>
        </div>
        <div>
          <button
            style="background-color: #805ad5; color: white; font-weight: bold; padding-top: 0.5rem; padding-bottom: 0.5rem; padding-left: 1rem; padding-right: 1rem; border-radius: 9999px; width: 100%; margin-top: 2.5rem; margin-bottom: 2.5rem; outline: none;"
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

export default Addform