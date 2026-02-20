import React,{useId} from 'react'

const Input =React.forwardRef(function Input(
    {
        label,
        type = "text",
        placeholder = "",
        className = "",     
        ...props
    },ref
){
    const id = useId()
    return(
        <div className='w-full'>
            {
                label && <label htmlFor={id}
                 className='mb-1 inline-block pl-1 font-medium'
                 >{label}</label>
                 
            }
            <input type={type} 
            placeholder={placeholder} 
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
             ref={ref}
              {...props}
              id={id} />
        </div>
    )
    
})

export default Input