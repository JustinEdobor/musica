import React from 'react'
import '../assets/css/Chart.css';
import ChartCard from "./ChartCard";
import ChartCardData from "./ChartCardData"
import '../assets/css/Responsive.css';

class Charts extends React.Component {
  render() {
    return (
     <div class="chart">
       <h1>Top charts</h1>
          {ChartCardData.map((ide, num) =>{
               return (
                   <ChartCard
                   key={num}
                   imgsrc={ide.imgsrc}
                   title={ide.title}
                   artist={ide.artist}
                   time={ide.time}
                   />
               )
           })}
     </div>
    )       
  }
}

export default Charts;