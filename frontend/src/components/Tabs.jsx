import React from 'react'

const Tabs = ( {tabs ,activeTab , setActiveTab}) => {
  return (
    <div className='w-full my-2'>
        <div className='flex flex-wrap bg-violet-50 p-1 rounded-2xl border border-violet-100'></div>
        {tabs.map((tab ) => (
         <button key={tab.label} 
          className={`relative flex-1 sm:flex-none px-4 sm:px-6 py-6 sm:py-3 text-xs sm:text-sm font-bold  rounded-xl transition-all ${activeTab === tab.label ? 'bg-white-100 text-violet-700 shodow-lg' : 'text-slate-500 hover:text-violet-600 hover:bg-white/50' }`
            
          } onClick={() => setActiveTab(tab.label)}>
            <span className='relative z-10'>
                {tab.label}

                {activeTab === tab.label && (
                    <div className='sbsolute inset-0 bg-gradient-to-r from-violet-500/10 tofuchsia-50010 rounded-2xl'>

                    </div>
                ) }

            </span>

         </button>   
        ))}
    </div>
  )
}

export default Tabs