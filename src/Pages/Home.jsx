import React from 'react';
import Layout from './../Template/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="center-container">
        <h1 className="page-title">Home</h1>
        <hr />
        {/* เพิ่มรูปภาพ */}
        <img
          className="fullscreen-image"
          src="src/image/content2132009113436-.jpg"
          alt="เด็กกำลังใช้คอมพิวเตอร์ในห้องเรียน"
          width="1050"
          height="750"
        />
      </div>
    </Layout>
  );
};

export default Home;
