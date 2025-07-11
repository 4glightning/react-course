import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children, authentication = true}) {

  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if(authentication && authStatus !== authentication) {
      navigate('/login')
    } else if(!authentication && authStatus !== authentication) {
      navigate('/')
    }
    setLoader(false)
  }, [authStatus, authentication, navigate])

  return loader ? <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div> : <>{children}</>
}

export default Protected

