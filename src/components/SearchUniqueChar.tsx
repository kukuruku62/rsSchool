import { Component } from "react";
import { SearchData } from "../utils/SearchData";

export class Search extends Component {

  state = {
    name: null,
    height: null,
    weight: null,
    imageUrl: null
  }

  searchData = new SearchData();

  updateItem = () => {
    const id = '100'
    this.searchData.getItemById(id).then(res => this.setState({
      name: res.name,
      height: res.height,
      weight: res.weight,
      imageUrl: res.sprites.front_default
    }))
  }
  

  render () {
    // const {name, description, imageUrl} = this.state;
    const {name} = this.state;
    return (
      // <div>{name}</div>
      // <div>{description}</div>
      // <div>{imageUrl}</div>
    )
  }
}