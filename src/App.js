import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "India",
        "America",
        "Japan",
        "Australia",
        "Germany",
        "Italy",
        "Srilanka"
      ],
      filtered: [],
      rowsToDisplay: 5,
      expand: false,
      input:'',
      addedbutton: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.showMore = this.showMore.bind(this);
    this.showLess = this.showLess.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  showMore() {
    let Length = this.state.filtered.length;
    this.setState({ rowsToDisplay: Length, expand: true });
  }
  showLess() {
    this.setState({ rowsToDisplay: 5, expand: false });
  }

  componentDidMount() {
    this.setState({
      filtered: this.state.list
    });
  }


  handleChange(e) {

    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.state.list;
      newList = currentList.filter(item => {
        const lc = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.list;
    }
    this.setState({
      filtered: newList,
      val:e.target.value,
      addedbutton: false
    });
  }

  addItem(e) {
    e.preventDefault();
    let list = this.state.list;
    let search_value = this.state.val
    if (search_value != "") {
      list.push(search_value);
      this.setState({
        list: list
      });
     
    }
    this.state.addedbutton = true;
  }

  handleLogout = () => {
    sessionStorage.removeItem("ROLE");
    window.location.href = '/'

  };
  render() {
    let store = sessionStorage.getItem('ROLE')

    return <div className="row" style={{ marginLeft: '480px', marginTop: '150px' }}>
    <table style={{ border: '1px solid black', width: '300px', height: '300px',background: "aqua" }}>
      <select className="form-control" style={{width: '470px', height: '40px' }}>
          {
            this.state.list.map(li => {
              return (
                <option >
                  {li}
                </option>

              )
            })
          }

        </select>

        
        <div style={{ marginTop: '30px' }}>

        <div class="search-container">
        <div class="searchbar">
          <label for="search-input" class="search-icon-wrapper">
          <div class="search-icon"></div>
          </label>
          <input type="text" onChange={this.handleChange} class="search-input" id="search-input" placeholder="Search Location"/>
        </div>
      </div>
      <br/>
          <ul>
          {this.state.filtered.length===0 && store === 'ADMIN'?<div>
            { this.state.addedbutton === false?
              <span style={{color:'red','font-size': '22px','font-family': 'cursive'}}><center>{this.state.val} {' '}not found</center></span>
              :<span style={{color:'red','font-size': '22px','font-family': 'cursive'}}><center>Added Successfully</center></span>
            }
            <br/>
            <button style={{marginLeft:'170px',color:'white',backgroundColor:'red',marginTop:'40px',width: '70px'}} onClick={this.addItem}>
              Add
              
            </button>
            </div>:
            this.state.filtered.slice(0, this.state.rowsToDisplay).map(item => (
              <li style={{ marginLeft: '160px', color: 'red','font-size': '22px','font-family': 'cursive'}} key={item}>{item}</li>
            ))
          }
            <br />
           
            <div style={{ marginLeft: '-50px',marginTop:'10px' }}>
              {this.state.expand ? <div style={{ textAlign: 'center' }}>
                <Link style={{ textDecoration: 'none' }} onClick={this.showLess}>Show Less</Link>
              </div> : <div style={{ textAlign: 'center' }}>
                  <Link style={{ textDecoration: 'none' }} onClick={this.showMore}>Show More...</Link>
                </div>

              }
            </div>
          
          </ul>

          <br />

        </div>


      </table>
      <button style={{ marginTop: '20px', marginLeft: '200px',color:'white',backgroundColor:'red' }} className="btn btn-sm btn-danger" onClick={this.handleLogout}>
        Logout
</button>
    </div>

  }
}

export default App;
