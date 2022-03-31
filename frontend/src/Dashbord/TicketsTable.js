import React from 'react'
import {Table} from 'react-bootstrap'

class TicketsTable extends React.Component{

    constructor(props){
super(props);
this.state={}


    }
render(){

    return(
    
        <Table  hover  style={{"color":"white"}}>
          <thead>
          <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>

          </tr>

          </thead>
          <tbody>
          <tr>
          <td>1</td>
          <td>ssl issue</td>
          <td>Client Response Pending</td>
          <td>2022-2-14</td>

          </tr>

          <tr>
          <td>1</td>
          <td>ssl issue</td>
          <td>Client Response Pending</td>
          <td>2022-2-14</td>

          </tr>

          <tr>
          <td>1</td>
          <td>ssl issue</td>
          <td>Client Response Pending</td>
          <td>2022-2-14</td>

          </tr>


          <tr>
          <td>1</td>
          <td>ssl issue</td>
          <td>Client Response Pending</td>
          <td>2022-2-14</td>

          </tr>

          </tbody>



        </Table>





    )
}



}

export default TicketsTable ;