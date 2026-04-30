import { useState } from 'react'
import './App.css'
import data from "./data/data.js"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex == index ? null : index)
  }
  return data.length === 0 || !data ? <div>No items available</div> : (
    <>
      <h1 className='headerTitle'>Accordian</h1>

      <div className='accordian'>
        {
          data.map((item) => (
            <div key={item.id} className='accordian_item'>
              <button className='accordian_title' onClick={() => handleToggle(item.id)}>{item.title}{openIndex === item.id ? <FaChevronUp className='right' /> : <FaChevronDown className='right' />}</button>
              {openIndex === item.id && <div className='accordian_content'>{item.content}</div>}
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
