import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialAllowed, setSpecialAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (specialAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?/"

    for (let i = 1; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(randomIndex)
    }

    setPassword(pass)
    
  }, [length, numberAllowed, specialAllowed])

  useEffect(() => {
    generatePassword()
  }
  , [length, numberAllowed, specialAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  return (
    <div className='w-full max-w-md mx-auto px-4 py-3 my-8 bg-gray-800 shadow-md rounded-lg text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Enter password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='ml-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'>
            Copy
          </button>
      </div>
      <div
      className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name=''
          id='' />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
          name=''
          id='' />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={specialAllowed}
          onChange={() => setSpecialAllowed((prev) => !prev)}
          name=''
          id='' />
          <label htmlFor="special">Special Characters</label>
          </div>
      </div>
      
    </div>
  )
}

export default App
