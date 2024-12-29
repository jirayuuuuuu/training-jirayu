import React from 'react'
import Layout from './../Template/Layout';
import CourseCard from './../Components/CourseCard';

const Course = () => {
    const courseList =[
        {
            title: "Basic React Navtive",
            Duration: "5 Day",
            Price: "6900",
            },
            {
                title: "Power BI Dashboard",
                Duration: "4 Day",
            Price: "5500",
                },
                {
                    title: "UI Design with Figma",
                    Duration: "3 Day",
                    Price: "5000",
                    },
                    {
                        title: "Cross Platform with Flutter",
                        Duration: "5 Day",
                    Price: "6500",
                        },
    ]
  return (
    <Layout>
    <div >
  <h1 >หลักสูตรที่เปิดสอน</h1>
  
  
  <div >
  
      </div>
    </div>
    <hr/>
    {
    courseList.map((b)=>(
    <CourseCard key={b.name} {...b} />
    ))
    }
    
  </Layout>
  )
}

export default Course
