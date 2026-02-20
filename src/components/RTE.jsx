import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
const RTE = ({name,control,label,defaultvalue =""}) => {
  return (
    <div className='w-full'>
{label && <label  className ="inline-block mb-1 pl-1">{label}</label>}
<controller

name={name || "content"}
control={control}
render={({field:{onchange}})=>(
    <Editor
    onEditorChange={onchange}
    value={defaultvalue}
    init={{
        height: 300,
        menubar: true,
        plugins: [
            `advlist autolink lists link 
            image table code help wordcount,
            insertdatetime media save table paste imagetools restore`,
            `searchreplace visualblocks fullscreen
                media template code help wordcount insertdatetime save table paste imagetools restore`
                `searchreplace visualblocks fullscreen
                media template code help wordcount insertdatetime save table paste imagetools restore 
            `
        ],
        toolbar: [
            `undo redo | bold italic underline |
             alignleft aligncenter alignright | 
             code | help | bullist numlist outdent indent
             | restore | save | image | table | link
| removeformat | fullscreen| contenttemplate | searchreplace | visualblocks | media | imagetools
content-style | insertdatetime`
        ]
    }}
/>
)}
 


/>

        </div>
  )
}

export default RTE