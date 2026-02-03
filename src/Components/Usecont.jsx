import React, { useState, createContext } from 'react'
import Usecon from './Usecon'

export const ThemeContext = createContext()

const Usecont = () => {

  const langObj = {
    en: {
      greet: 'Welcome Dhanuj',
      btnTxt: 'Switch to Tamil',
      lang: 'English'
    },
    ta: {
      greet: 'வணக்கம் தனுஜ்',
      btnTxt: 'Switch to English',
      lang: 'தமிழ்'
    }
  }

  const [language, setLanguage] = useState('en')
  const [theme, setTheme] = useState('light')

  const changeLanguageAndTheme = () => {
    setLanguage(prev => (prev === 'en' ? 'ta' : 'en'))
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider
      value={{ language, theme, changeLanguageAndTheme, langObj }}
    >
      <Usecon />
    </ThemeContext.Provider>
  )
}

export default Usecont
