function setImageUri(value) {
    localStorage.setItem('image', value)

    const image = document.getElementById("image")
    if (value) { image.setAttribute('src', value) }
    else { image.removeAttribute('src') }
}

function setOutput(data) {
    // show data in the div element with ID "Details"
}

function handleFileUpload(event) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        setImageUri(reader.result)
    }
}

function submitImage() {
    fetch('http://localhost:5000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image: imageUri
        })
    })
    .then(res => res.json())
    .then(data => setOutput(data.output))
}