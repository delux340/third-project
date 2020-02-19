import React from 'react';
import { connect } from "react-redux"
import { getVacationsFollows } from "../../redux/actions"
import { Pie } from 'react-chartjs-2';
import { props, state } from "./interface"
import { initialState } from "../../redux/interface"
import { CardTypes } from "../UserCard/interface"

class Charts extends React.Component<props, state>{

  componentDidMount() {
    const { getVacationsFollows } = this.props.actions
    getVacationsFollows()
  }
  colorsArray = [
    '#FF6384', '#36A2EB', '#FFCE56', '#FF6633',
    '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
  ]


  render() {
    const { followers } = this.props
    const data = {
      labels: followers.map((itr: CardTypes) => itr.destination),
      datasets: [{
        data: followers.map((itr: CardTypes) => itr.followers_count),
        backgroundColor: this.colorsArray,
        hoverBackgroundColor: this.colorsArray
      }]
    };


    return (
      <div>
        <h2>vacations followers</h2>
        <br></br>
        <Pie data={data} height={200} width={500} />
      </div>
    );
  }
};

const mapStateToProps = (state: initialState) => {
  const { followers } = state
  return {
    followers
  }

}

const mapDispatchToProps = (dispatch: Function) => {

  return {
    actions: {
      getVacationsFollows: () => { dispatch(getVacationsFollows()) }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Charts)
