import React from 'react'
import '../assets/css/Head-img.css';
import '../assets/css/Responsive.css';
import Artist from '../assets/img/photo.png';
import Frame from '../assets/img/Frame 4.png';

class Headimg extends React.Component {
  render() {
    return (
      <div className="current_play">
         <div className="play_details">
              <p>current playlist</p>
              <div><h1>R & B Hits</h1>
              <p>All mine, Lie again, petty, call me everyday,<br /> Out of time, No love, Bad habit,<br />and so much more</p></div>
            <div class="frame">
               <img src={Frame} />
               <div><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M4.51993 0.666973C4.93993 0.679746 5.3466 0.75308 5.7406 0.88708H5.77993C5.8066 0.899746 5.8266 0.913746 5.83993 0.926413C5.98726 0.973746 6.1266 1.02708 6.25993 1.10041L6.51326 1.21375C6.61326 1.26708 6.73326 1.36641 6.79993 1.40708C6.8666 1.44641 6.93993 1.48708 6.99993 1.53308C7.7406 0.96708 8.63993 0.660413 9.5666 0.666973C9.98726 0.666973 10.4073 0.726413 10.8066 0.860413C13.2673 1.66041 14.1539 4.36041 13.4133 6.72041C12.9933 7.92641 12.3066 9.02708 11.4073 9.92641C10.1199 11.1731 8.70726 12.2797 7.1866 13.2331L7.01993 13.3337L6.8466 13.2264C5.3206 12.2797 3.89993 11.1731 2.6006 9.91975C1.70726 9.02041 1.01993 7.92641 0.593263 6.72041C-0.16007 4.36041 0.726597 1.66041 3.21393 0.846413C3.40726 0.779746 3.6066 0.73308 3.8066 0.70708H3.8866C4.07393 0.679746 4.25993 0.666973 4.4466 0.666973H4.51993ZM10.4599 2.77375C10.1866 2.67975 9.8866 2.82708 9.7866 3.10708C9.69326 3.38708 9.83993 3.69375 10.1199 3.79308C10.5473 3.95308 10.8333 4.37375 10.8333 4.83975V4.86041C10.8206 5.01308 10.8666 5.16041 10.9599 5.27375C11.0533 5.38708 11.1933 5.45308 11.3399 5.46708C11.6133 5.45975 11.8466 5.24041 11.8666 4.95975V4.88041C11.8866 3.94641 11.3206 3.10041 10.4599 2.77375Z" fill="#FFFFFF"/> </svg>
              </div>
               <div><p>33k Likes</p></div>
            </div>
         </div>
         <div className="artistimg">
            <img src={Artist} />
         </div>
      </div>
    )       
  }
}

export default Headimg;