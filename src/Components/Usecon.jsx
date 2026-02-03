import React, { useContext } from 'react'
import { ThemeContext } from './Usecont'
import { Card, Button } from 'react-bootstrap'

const Usecon = () => {
  const context = useContext(ThemeContext)

  

   const { language, theme, changeLanguageAndTheme, langObj } = useContext(ThemeContext)



  return (
    <div
      style={{
        background: theme === 'light' ? '#fff' : '#111',
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <Card style={{ padding: '20px' }}>
        <h2>{langObj[language].greet}</h2>
        <p>Theme: {theme}</p>

        <Button onClick={changeLanguageAndTheme}>
          {langObj[language].btnTxt}
        </Button>
      </Card>

      <p>theme</p>
    </div>
  )
}

export default Usecon
