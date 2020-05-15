import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";
import { search } from "./redux/actions/index";

class SearchBar extends React.Component {
  state = {
    rating: 1,
    search: ""
  };

  onStarClick = nextValue => {
    this.setState({ rating: nextValue }, () =>
      this.props.search({
        rating: this.state.rating,
        search: this.state.search,
        isLoading:true
      }),
      
    )
    setTimeout(()=> this.props.search({
      rating: this.state.rating,
      search: this.state.search,
      isLoading:false
    }),1500)
    
  };
  handelSearch = e => {
    this.setState({ search: e.target.value }, () =>
      this.props.search({
        rating: this.state.rating,
        search: this.state.search,
        isLoading:true
      }),
      
    )
    setTimeout(()=> this.props.search({
      rating: this.state.rating,
      search: this.state.search,
      isLoading:false
    }),1500)
    
  };

  render() {
    return (

<div>
<form className="form">
<label className="label" htmlFor="query">Movie Name</label>
<input  type="text" name="query"  placeholder="i.e. A Stork's Journey" className="search-input input"
onChange={this.handelSearch}/>
<button className="button" type="submit">Search</button>
</form>

<div className="rating-search">
<h1 className="minimum">Minimum Rating</h1>
<StarRatingComponent className="rating-star-search" name="rate1" starCount={5} 
value={this.state.rating} onStarClick={this.onStarClick} />
</div>
</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieData: state.movieData,
    isLoading:state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: playload => dispatch(search(playload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);


