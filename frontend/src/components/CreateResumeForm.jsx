<<<<<<< HEAD
import React from 'react'
import {Input} from './Inputs'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { API_PATHS } from '../utils/apiPath'

const CreateResumeForm = () => {
  const [title , setTitle] = useState("");  
  const [error , setError] = useState(null);
  const navigate = useNavigate();


  const handleCreateResume = async (e) => {
    e.preventDefault();
    if(!title){
      setError("Please enter a title for the resume");
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post(API_PATHS.RESUME.CREATE , {title});
      if( response.data?._id){
        navigate(`/resumes/${response.data?._id}`);
      }
    } catch (error) {
      if(error.response && error.response.data.message ){
        setError( error.response.data.message);
      }
      else{
        setError("Failed to create resume. Please try again.");}
    }
  }
  
  


  return (
    <div className='w-full max-w-md p-8 bg-white rounded-2xl border border-gray-100 shodow-lg' >
        <h3 className='text-2xl font-bold text-gray-900 mb-2'>Create New Resume</h3>
        <p className='text-gray-600 mb-8'>Fill in the form to create a new resume</p>

        <form onSubmit={handleCreateResume}>
          <Input value={title} onChange={({target}) => setTitle(target.value)} label='Resume Title' placeholder='e.g. Software Engineer Resume' type='text' />
          {error && <p className='text-red-500 text-sm mb-4' >{error}</p>}

          <button type='submit' className='w-full py-3 bg-gradient-to-r from-rose-500 to-pink-600 
          text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-rose-200 transition-all '  >
            Create Resume

          </button>

        </form>

    </div>
  )
}

=======
import React from 'react'
import {Input} from './Inputs'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { API_PATHS } from '../utils/apiPath'

const CreateResumeForm = () => {
  const [title , setTitle] = useState("");  
  const [error , setError] = useState(null);
  const navigate = useNavigate();


  const handleCreateResume = async (e) => {
    e.preventDefault();
    if(!title){
      setError("Please enter a title for the resume");
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post(API_PATHS.RESUME.CREATE , {title});
      if( response.data?._id){
        navigate(`/resumes/${response.data?._id}`);
      }
    } catch (error) {
      if(error.response && error.response.data.message ){
        setError( error.response.data.message);
      }
      else{
        setError("Failed to create resume. Please try again.");}
    }
  }
  
  


  return (
    <div className='w-full max-w-md p-8 bg-white rounded-2xl border border-gray-100 shodow-lg' >
        <h3 className='text-2xl font-bold text-gray-900 mb-2'>Create New Resume</h3>
        <p className='text-gray-600 mb-8'>Fill in the form to create a new resume</p>

        <form onSubmit={handleCreateResume}>
          <Input value={title} onChange={({target}) => setTitle(target.value)} label='Resume Title' placeholder='e.g. Software Engineer Resume' type='text' />
          {error && <p className='text-red-500 text-sm mb-4' >{error}</p>}

          <button type='submit' className='w-full py-3 bg-gradient-to-r from-rose-500 to-pink-600 
          text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-rose-200 transition-all '  >
            Create Resume

          </button>

        </form>

    </div>
  )
}

>>>>>>> a36c4b3afb22ec33d55f98c1f135cb4b4bbfb571
export default CreateResumeForm