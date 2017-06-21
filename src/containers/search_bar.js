import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';


class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this); //2 onChange={this.onInputChange}
    //1 - onChange={(event) => this.onInputChange(event)}

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onInputChange(event){
    this.setState({term: event.target.value});

  }

  onFormSubmit(event){
      event.preventDefault(); // içinde this yok diye başta bind etmedik.

      //fetch weather
      this.props.fetchWeather(this.state.term);
      this.setState({term:''});
  }


  render(){

    return(
      //submit yapınca sayfa refresh oluyor. bunun olmasını istemeyiz.
    <form className="input-group" onSubmit={this.onFormSubmit}>
      <input placeholder="search cities" className="form-control" value={this.state.term} onChange={this.onInputChange}/>
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
      </span>
    </form>
    )
  }
}


//this.props. ile ulaşmayı sağladık
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);

}

//mapStateToProps null geçtik çünkü burda state ile çok ilgilenmiyoruz
export default connect(null,mapDispatchToProps)(SearchBar); //takes a function and a component
