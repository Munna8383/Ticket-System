import React from 'react'

export default function Footer() {
  return (
    <div className='p-10 bg-black text-gray-300 mt-10'>
     <div className='flex flex-col md:flex-row gap-10'>
      <div className='flex-1 space-y-3'>
        <h1 className='text-xl font-bold'>CS - Ticket System</h1>
        <p className='text-justify'>Our Ticket Management System helps users create, track, and manage support tickets efficiently. It organizes issues by status and priority, making it easy to monitor progress. </p>
      </div>
      <div className='flex-1 space-y-3'>
        <h1 className='text-xl font-bold'>Company</h1>
        <h1>About Us</h1>
        <h1>Our Mission</h1>
        <h1>Conatct Saled</h1>
      </div>
      <div className='flex-1 space-y-3'>
        <h1 className='text-xl font-bold'>Services</h1>
        <h1>Product and Services</h1>
        <h1>Customer Starles</h1>
        <h1>Download Services</h1>
      </div>
      <div className='flex-1 space-y-3'>
        <h1 className='text-xl font-bold'>Information</h1>
        <h1>Privacy Policy</h1>
        <h1>Terms and Conditions</h1>
        <h1>Join Us</h1>
      </div>

      <div className='flex-1 space-y-3'>
        <h1 className='text-xl font-bold'>Social Links</h1>
        <h1>Facebook</h1>
        <h1>Instagram</h1>
        <h1>Tiktok</h1>
      </div>
     </div>
     <div className='mt-4'>
        <p className='text-center'> &copy; 2026 CS - Ticket System. All Rights Reserved.</p>
     </div>
    </div>
  )
}
