import React from 'react'

type Props = {}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: '#282c34',
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
}

const Header = (props: Props) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>Prescription Scanner</h1>
      <h2 style={styles.h2}>SHH18 - Team HelpOut</h2>
    </header>
  )
}

export default Header;