import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { addMovie } from "./redux/actions/index";
import StarRatingComponent from "react-star-rating-component";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
Modal.setAppElement('#root')

class AddForm extends React.Component {
  state = {
    modalIsOpen: false,
    movieAdd: {
      name: "",
      year: "",
      image: "",
      rating: ""
    }
  };

  handelSubmit = e => {
    e.preventDefault();
    if (Object.values(this.state.movieAdd).indexOf("") > -1) {
      // this.setState({modalIsOpen:false})
      alert("Enter a valid informations");
    } else {
      this.setState({
        modalIsOpen: false,
        movieAdd: { ...this.state.movieAdd, name: "" }
      });
      this.props.addMovie({ id: Date.now(), ...this.state.movieAdd });
    }
  };
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handelName = e => {
    this.setState({
      movieAdd: { ...this.state.movieAdd, name: e.target.value }
    });
  };
  handelRating = e => {
    this.setState({
      movieAdd: {
        ...this.state.movieAdd,
        rating:
          /[0-9]{1}/.test(e.target.value) && e.target.value < 6
            ? e.target.value
            : ""
      }
    });
  };
  handelYear = e => {
    this.setState({
      movieAdd: {
        ...this.state.movieAdd,
        year:
          /^[0-9]{4}$/.test(e.target.value) && e.target.value > 1900
            ? e.target.value
            : ""
      }
    });
  };
  handelLink = e => {
    this.setState({
      movieAdd: {
        ...this.state.movieAdd,
        image: /^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)
          ? e.target.value
          : ""
      }
    });
  };

  render() {
    return (
      <div>
        <div className="card-container">
         <StarRatingComponent
          className="rating-star"
          name="rate1"
          starCount={5}
          value={0}/>

<button className='modale' onClick={this.openModal} type="button" class="btn btn-dark btn-lg btn-lg btn-block">Add Movies</button>
</div>

          
<Modal
isOpen={this.state.modalIsOpen}
onRequestClose={this.closeModal}
style={customStyles}>
<form className="form-container">
<h3 className="form-title">Add a Movie</h3>

<label>Movie Link</label><input type="url" onChange={this.handelLink} />
<label>Movie Name</label><input type="text" onChange={this.handelName} />
<label>Release Date</label><input type="number" onChange={this.handelYear} />
<label>Rating</label><input type="number" onChange={this.handelRating} />

<div className="btn-container">
<button onClick={this.closeModal}>Cancel</button>
<button onClick={this.handelSubmit}>Submit</button>
</div>
</form>
</Modal>
</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieData: state.movieData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMovie: playload => dispatch(addMovie(playload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

