import React from 'react'

type Props = {
  imagePath: string
}

const styles: { [key: string]: React.CSSProperties } = {
  image: {
    width: '50%',
    height: '50%'
  },
  preview: {
    display: 'flex',
    border: '1px solid #000',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

function PreviewImage({ imagePath }: Props) {
  return (
    <>
      <div style={styles.preview}>
        <img src={imagePath} alt='preview...'  style={styles.image} />
      </div>
    </>
  )
}

export default PreviewImage