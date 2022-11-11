import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import PreviewImage from './components/PreviewImage'


function App() {
  const [imageUri, setImageUri] = useState('')
  const [output, setOutput] = useState('')

  const handleFileUpload = (event: any) => {
    c
    }
  }

  const submitImage = async () => {
    const response = await fetch('http://localhost:5000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image: imageUri
      })
    })

    const data = await response.json()
    setOutput(data.output)

    console.log(data)
  }

  return (
    <div className="App">
      <Header />
      
      <Footer />
    </div>
  )
}

export default App
