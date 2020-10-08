import React from "react";
// import { render } from "react-dom";
import Card from "../components/card/Card";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const res = await fetch("../../assets/data.json");
    const resJSON = await res.json();
    this.setState({ data: resJSON });
  }
  render() {
    return this.state.data.map((movie) => {
      return <Card movie={movie} />;
    });
  }
}

export default List;
