import React from "react";
import axios from "axios";

class Ticketlengh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myticket: [],
    };
  }

  componentDidMount() {
    axios.get("http://137.184.12.172:4001/api/NewTicke").then((res) => {
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

<h1>

NOMBRE DE TICKETS :
<br/>
{this.state.myticket.length}
</h1>


        
       

        
      </div>
    );
  }
}

export default Ticketlengh;
