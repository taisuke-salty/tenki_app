import React from "react"
import PropTypes from "prop-types"
import Calendar from 'react-calendar'

class indexCalendar extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Calendar
          locale="ja-JP"
          value={this.state.date}
        />
      </React.Fragment>
    );
  }
}

export default Calendar
