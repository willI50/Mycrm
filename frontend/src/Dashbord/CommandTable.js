import React from 'react'
import {Table} from 'react-bootstrap'

class CommandTable extends React.Component{

    constructor(props){
super(props);
this.state={}


    }
render(){

    return(
    
        <Table   style={{"color":"blue"}}>
          <thead>
          <tr >
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Command Date</th>
          <th>Livraison Date</th>


          </tr>

          </thead>
          <tbody>
          <tr  className='tb'>
          <td>1</td>
          <td>ssl issue</td>
          <td>Client Response Pending</td>
          <td>2022-2-14</td>
          <td>2022-2-14</td>

          </tr>

          <tr  className='tb'>
          <td>1</td>
          <td>ssl issue</td>
          <td>Client Response Pending</td>
          <td>2022-2-14</td>
          <td>2022-2-14</td>

          </tr>

          <tr  className='tb'>
          <td>1</td>
          <td>ssl issue</td>
          <td>Client Response Pending</td>
          <td>2022-2-14</td>
          <td>2022-2-14</td>

          </tr>


          <tr  className='tb'>
          <td>1</td>
          <td>ssl issue</td>
          <td>Client Response Pending</td>
          <td>2022-2-14</td>
          <td>2022-2-14</td>

          </tr>

          </tbody>



        </Table>





    )
}



}

export default CommandTable ;