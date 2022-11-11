import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import PreviewImage from './components/PreviewImage'


function App() {
  const [imageUri, setImageUri] = useState('')
  const [output, setOutput] = useState('')

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setImageUri(reader.result as string)
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
      <div className="App-body">
        <div className="left">
          <h2>Upload a prescription</h2>
          <PreviewImage imagePath={imageUri} />
          <div>
            <input type="file" onChange={handleFileUpload} />
            <input type="submit" value="Submit" onClick={submitImage} />
          </div>
        </div>
        <div className="right">
          <h2>Prescription details</h2>
          <p id='Details'>
            {output ? output : "Prescription details will be displayed here"}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
