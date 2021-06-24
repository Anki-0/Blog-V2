import React, { createContext, useContext, useState } from 'react'

type contextType = {
  toggle: boolean
  setToggle: (val: boolean) => void
}

export const SidebarToggleContext = createContext<contextType>({
  toggle: false,
  setToggle: (toggle) => console.log(`toggle => ${toggle}`),
})

export const SidebarToggleProvider: React.FC = ({ children }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <SidebarToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </SidebarToggleContext.Provider>
  )
}

export const useSideabarToggleValue = (): contextType => useContext(SidebarToggleContext)
