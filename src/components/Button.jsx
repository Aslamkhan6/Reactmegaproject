import React from 'react'

const Button = ({
    clildren,
    type = "button",    
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) => {
  return (
   <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor}`} {...props}> {clildren}</button>
  )
}

export default Button