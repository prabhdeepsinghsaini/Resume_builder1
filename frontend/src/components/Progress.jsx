<<<<<<< HEAD
import React from 'react'

const Progress = ({progress=0 , total=5 , color , bgColor}) => {
  return (
    <div className='flex gap-1.5'>
        {[...Array(total)].map(( _ , index) =>(
           <div key={index}
           className={`w-2 h-2 rounded transiton-all ${
            index < progress ? "bg-cyan-500" : "bg-cyan-100"}`}
            style={{backgroundColor:
                index < progress
                ? color || "rgba(1,1,1,1)"
                : bgColor || "rgba(1,1,1,0.1)"

            }}
            >

           </div> 
        ))}

    </div>
  )
}

=======
import React from 'react'

const Progress = ({progress=0 , total=5 , color , bgColor}) => {
  return (
    <div className='flex gap-1.5'>
        {[...Array(total)].map(( _ , index) =>(
           <div key={index}
           className={`w-2 h-2 rounded transiton-all ${
            index < progress ? "bg-cyan-500" : "bg-cyan-100"}`}
            style={{backgroundColor:
                index < progress
                ? color || "rgba(1,1,1,1)"
                : bgColor || "rgba(1,1,1,0.1)"

            }}
            >

           </div> 
        ))}

    </div>
  )
}

>>>>>>> a36c4b3afb22ec33d55f98c1f135cb4b4bbfb571
export default Progress