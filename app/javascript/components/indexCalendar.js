// import React from "react"
import React, { useState } from 'react';

import PropTypes from "prop-types"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';



// function indexCalendar() {
//   const [value, setValue] = useState(new Date());
//   const onChange = (clickedValue) =>{
//     setValue(clickedValue)
//     alert(clickedValue)
//   }


//   return (
//     <React.Fragment>
//       <Calendar
//         onChange={onChange}
//         value={value}
//       />
//     </React.Fragment>
//   );
// }

class indexCalendar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: new Date(),

    }
  }

  onChange = (clickedValue) => {
    this.setState({
      value: clickedValue
    })
    alert(clickedValue)
  }


  render () {
    var today = new Date()
    // console.log(this.state.date.getMonth())
    return (
      <React.Fragment>
        <Calendar
          locale="en-US"
          value={this.state.value}
          onChange = {this.onChange}
        />
      </React.Fragment>


    );
  }
}

export default indexCalendar
