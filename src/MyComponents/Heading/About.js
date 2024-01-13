import React from 'react'
import img1 from './../../images/about-amg.png'
import img2 from './../../images/about-2.jpeg'
import img3 from './../../images/about-3.jpg'
import './style.css'

export const About = () => {
    return (
        <div className='about'>
            <div className='about-parent'>
            <div className='_about-p'>
            <p className='about-p'>Welcome to our vibrant community at <strong>Internworld</strong>! We are dedicated to shaping the future by connecting ambitious minds with valuable opportunities. Our platform serves as a bridge between aspiring interns and innovative companies, fostering a collaborative environment that fuels professional growth.
            </p>

<p className='about-p'>
At <strong>Internworld</strong>, we understand the pivotal role internships play in shaping careers. Our mission is to empower individuals with hands-on experience, helping them build a solid foundation for their future endeavors. Whether you are a student eager to kickstart your career or an employer seeking fresh perspectives, we are here to facilitate meaningful connections.</p>

<p className='about-p'>Driven by a passion for education and workforce development, we strive to make the internship journey seamless and rewarding. Our user-friendly interface and comprehensive resources ensure a smooth experience for both interns and employers alike. We believe in the transformative power of learning by doing, and our platform reflects this commitment.</p></div>
<img className='about-img' src={img1} alt="" />
</div>

<div className='about-parent'> 
<img className='about-img' src={img2} alt="" />
    <div className='_about-p'>
<p className='about-p'>
Join us in creating a community where talent meets opportunity, where curiosity is rewarded, and where the next generation of leaders is nurtured. Together, let's embark on a journey of growth, collaboration, and success. Welcome to <strong>Internworld</strong>, where possibilities unfold and dreams take flight!</p>


<p className='about-p'>In an era defined by rapid technological advancements and evolving industries, internships have become integral in shaping future leaders. At <strong>Internworld</strong>, we recognize the transformative power of experiential learning and its role in propelling careers forward. Our platform is designed to be the catalyst for this transformation, providing a seamless interface for students seeking invaluable hands-on experiences and companies eager to discover and nurture emerging talent.</p>

<p className='about-p'>What sets <strong>Internworld</strong> apart is our commitment to creating a holistic and enriching experience for all stakeholders. For interns, we offer more than just a platform – we provide a supportive community, a vast repository of resources, and a roadmap for personal and professional development. We understand the importance of aligning passion with purpose, and our curated internship opportunities reflect this ethos.</p>
</div>
 
</div>

<div className='about-parent'>
    <div className='_about-p'> 
<p className='about-p'>For companies, we offer a gateway to a pool of diverse and dynamic talent, carefully vetted to match their unique needs. We believe that innovation thrives in diverse environments, and our commitment to inclusivity ensures that companies have access to a broad spectrum of perspectives, ideas, and skills.</p>

<p className='about-p'>Navigating the internship landscape can be overwhelming, but  is here to simplify the process. Our user-friendly interface empowers users to seamlessly explore, apply, and connect. From comprehensive profiles that showcase the strengths of our interns to intuitive recruitment tools for companies, we've designed our platform to be intuitive and efficient.</p>

<p className='about-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime beatae cumque ratione, amet et ut quas expedita enim saepe nam! Sed voluptate quaerat et. Deleniti temporibus sapiente, tempora et repudiandae nulla molestias, nostrum aut maxime quae libero neque beatae tempore! Nisi, impedit, voluptatem sit asperiores hic doloribus sequi at amet quidem distinctio tempora sapiente. Velit deserunt illo ut quam, autem veniam? Consequuntur, saepe.  </p>

</div>
<img className='about-img' src={img3} alt="" />
</div>
 
</div>
 
    
    )
};
 