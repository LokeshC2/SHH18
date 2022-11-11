function handleFileUpload(event) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        setImageUri(reader.result)
    }
}

function setImageUri(value) {
    localStorage.setItem('image', value)

    const image = document.getElementById("image")
    if (value) {image.setAttribute('src', value)}
    else {image.removeAttribute('src')}
}