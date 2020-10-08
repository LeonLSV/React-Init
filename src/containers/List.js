import React from "react";
// import { render } from "react-dom";
import Card from "../components/card/Card";

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=577cca3";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    // const res = await fetch("../../assets/data.json");
    const res = await fetch(`${API}&s=batman`);
    const resJSON = await res.json();
    this.setState({ data: resJSON.Search });
  }
  render() {
    return (
      <div className="row">
        {this.state.data.map((movie) => {
          return <Card movie={movie} />;
        })}
      </div>
    );
  }
}

export default List;
