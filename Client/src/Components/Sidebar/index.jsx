import React from 'react'

function Sidebar({children}) {
  return (
    <div className='min-h-screen flex flex-col gap-y-2'>
      {children}
    </div>
  )
}

export default Sidebar