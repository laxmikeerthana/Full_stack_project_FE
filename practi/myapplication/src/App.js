import React from "react";
import './App.css';
import Card from "react-bootstrap/Card";
import { ListGroup , ListGroupItem ,Badge ,Image} from 'react-bootstrap';
class App extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
    fetch(
      "https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data.results,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;

    return (
      <div className="App">
        <div className="row p-2"> {
          items.map((item, index) => (
            <ol key={index} className="col-md-4">
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={item.picture.medium} />
                <Card.Body>
                  <Card.Title className="float-left">{item.name.title+" "+item.name.first+item.name.last}</Card.Title>
                  <Image className="rounded-circle" src={item.picture.thumbnail}></Image>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroupItem><div className="text-primary">Gender</div> <div>{item.gender}</div></ListGroupItem>
                  <ListGroupItem><div className="text-primary">Email</div> <div>{item.email}</div></ListGroupItem>
                  <ListGroupItem><div className="text-primary">Location</div> <div>{item.location.city+","+item.location.state+","+item.location.country}</div></ListGroupItem>
                </ListGroup>
              </Card>
            </ol>
            
          ))
        }</div>
      </div>
    );
  }
}

export default App;