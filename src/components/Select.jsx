import React ,{useId} from 'react'

const Select = ({
    options =[],
    label,
    className = "",
    ...props
},ref) => {
    const id = useId()
  return (
    <div className='w-full'>
        {
            label && <label htmlFor={id}
             className='mb-1 inline-block pl-1 font-medium'
             >{label}</label>
             }
             <select {...props} className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} ref={ref} id={id}>
        {options?.map((option,index)=>{

            return (
                <option  key={index} value={option}>{option}</option>
            )
        })}
             </select>
    </div>
  )
}

export default React.forwardRef(Select)