import React, { useState } from 'react'
import { toast } from 'react-toastify'

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form data:', formData)
      toast.success("Thank you for your interest! We'll contact you soon.")
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className='py-16 px-4 md:px-8 lg:px-32 w-full bg-gradient-to-b from-gray-50 to-white' id='Contact'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-3 text-center text-gray-800'>
          Join <span className='text-blue-600'>With Us</span>
        </h1>
        <div className='w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4'></div>
        <p className='text-center text-gray-600 mb-10 max-w-lg mx-auto'>
          Become part of our community and help shape the future of technology
        </p>

        <div className='grid md:grid-cols-2 gap-10 items-start'>
          {/* Benefits Section */}
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>Why Join CSI?</h2>
            <ul className='space-y-3'>
              <li className='flex items-start'>
                <div className='bg-blue-100 p-2 rounded-full mr-3 mt-1'>
                  <svg className='w-5 h-5 text-blue-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Networking with industry professionals</span>
              </li>
              <li className='flex items-start'>
                <div className='bg-blue-100 p-2 rounded-full mr-3 mt-1'>
                  <svg className='w-5 h-5 text-blue-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Access to workshops and tech events</span>
              </li>
              <li className='flex items-start'>
                <div className='bg-blue-100 p-2 rounded-full mr-3 mt-1'>
                  <svg className='w-5 h-5 text-blue-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Skill development opportunities</span>
              </li>
              <li className='flex items-start'>
                <div className='bg-blue-100 p-2 rounded-full mr-3 mt-1'>
                  <svg className='w-5 h-5 text-blue-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Career guidance and mentorship</span>
              </li>
              <li className='flex items-start'>
                <div className='bg-blue-100 p-2 rounded-full mr-3 mt-1'>
                  <svg className='w-5 h-5 text-blue-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Collaboration on innovative projects</span>
              </li>
            </ul>
            
            <div className='mt-8 bg-blue-50 p-4 rounded-lg'>
              <h3 className='font-medium text-blue-800 mb-2'>Contact Information</h3>
              <p className='text-sm text-gray-700'>Email: csi@sjcetpalai.ac.in</p>
              <p className='text-sm text-gray-700'>Phone: +91 XXX XXX XXXX</p>
              <p className='text-sm text-gray-700'>Location: St. Joseph's College of Engineering & Technology, Palai</p>
            </div>
          </div>

          {/* Form Section */}
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h2 className='text-xl font-semibold text-gray-800 mb-6'>Express Your Interest</h2>
            <form onSubmit={handleSubmit} className='space-y-5'>
              <div className='text-left'>
                <label className='block text-gray-700 mb-2'>Your Name</label>
                <input 
                  className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                  name='name' 
                  type="text" 
                  placeholder='Your Name' 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className='text-left'>
                <label className='block text-gray-700 mb-2'>Your Email</label>
                <input 
                  className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                  name='email' 
                  type="email" 
                  placeholder='Your Email' 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className='text-left'>
                <label className='block text-gray-700 mb-2'>Why do you want to join?</label>
                <textarea 
                  className='w-full border border-gray-300 rounded-lg py-3 px-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                  name="message" 
                  placeholder='Tell us about your interests...' 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type='submit' 
                className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 w-full flex items-center justify-center'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Submit Interest'
                )}
              </button>
            </form>
            
            <p className='text-sm text-gray-500 mt-4 text-center'>
              We'll contact you with membership details and upcoming events
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs