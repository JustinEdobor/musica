import React, {useState, useEffect} from 'react'

export default function Slider() {
    const [value, onChange]=useState(1);
    const rangeInputs = document.querySelectorAll('input[type="range"]')
        function handleInputChange(e) {
        let target = e.target
          const min = target.min
          const max = target.max
          const val = target.value 
      target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})
    return (
       <div className="slider">
         <input type="range" min="0" max="100" value={value} id="seek_slider" className="seek" onChange={({ target: { value: radius } }) => {onChange(radius);}} />
       </div>
        ); 
}