import React from "react"
import PropTypes from "prop-types"
import Chart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['楽しい', '嬉しい', '悲しい', '怒り'],
        colors: ['#FADE03','#33691E', '#0D47A0', '#B71C1C']
      },
      series: [
        this.props.cardsHappy.length,
        this.props.cardsGrad.length,
        this.props.cardsSad.length,
        this.props.cardsAngry.length
      ],

    };
  }

  render () {
    console.log(this.props.cardsHappy)
    return (
      <React.Fragment>
        <div className="emotion-graph-img">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="pie"
                width="500"
              />
        </div>
      </React.Fragment>
    );
  }
}

export default PieChart
