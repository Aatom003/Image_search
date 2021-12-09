import React from "react";
import unsplash from "../API/unsplash";
import Search from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term }
        // headers: {
        //   Authorization: "Client-ID lN7WsG0Q9xu9EGEHL77d7kvdt44bKZaSPD1V6w9zTYQ"
        // }
      }
    );
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Search onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
