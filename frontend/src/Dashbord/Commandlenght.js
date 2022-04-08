import React from "react";

import axios from "axios";

class Commandlengh extends React.Component {
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

<h1>

NOMBRE DE COMMANDES :
<br/>
{this.state.myticket.length}
</h1>


        
       

        
      </div>
    );
  }
}

export default Commandlengh;
