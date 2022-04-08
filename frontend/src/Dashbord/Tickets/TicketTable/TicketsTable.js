import React from "react";
import { Table } from "react-bootstrap";
import "./TicketsTable.css";
import axios from "axios";
import { Button } from "react-bootstrap";

class TicketsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myticket: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4002/api/NewTicke").then((res) => {
      const inf = res.data;

      this.setState({
        myticket: inf,
      });

      // console.log(this.state.myticket);
    });
  }

  handletick(){

   
  }

  render() {
    return (
      <div>
        <Table  style={{ color: "blue" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Subjects</th>
              <th>Status</th>
              <th>Opened Date</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>

              { this.state.myticket.map((ticket,i) => 
                
                <tr key={i} className="tb">
                  <td>{i+1} </td>
                  <td>{ ticket.subject}</td>
                  <td>appending status</td>
                  <td>{ticket.date}</td>
                  <td>
                  <th>
                     <Button className="btn">
                    Update
                    </Button>
                    </th>
                    <th>
                     <Button className="btn">
                    Delete
                    </Button>
                    </th>
                    
                    </td>
                 </tr>
              ) }
            
        
          </tbody>
        </Table>

        {/* <Table style={{ color: "blue" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Subjects</th>
              <th>Status</th>
              <th>Opened Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tb">
              <td>1</td>
              <td>ssl issue</td>
              <td>Client Response Pending</td>
              <td>2022-2-14</td>
            </tr>

            <tr className="tb">
              <td>1</td>
              <td>ssl issue</td>
              <td>Client Response Pending</td>
              <td>2022-2-14</td>
            </tr>

            <tr className="tb">
              <td>1</td>
              <td>ssl issue</td>
              <td>Client Response Pending</td>
              <td>2022-2-14</td>
            </tr>

            <tr className="tb">
              <td>1</td>
              <td>ssl issue</td>
              <td>Client Response Pending</td>
              <td>2022-2-14</td>
            </tr>
          </tbody>
        </Table> */}
        {/* {this.state.myticket} */}
      </div>
    );
  }
}

export default TicketsTable;
