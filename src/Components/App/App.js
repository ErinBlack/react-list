import React, { Component } from 'react';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      starList: ['hadar', 'gacrux', 'fomalhout'],
    };
  }
starListItemArray

  render() {

    let starListItemArray = [];
    
    for(let i=0; i < this.state.starList.length; i++){

      const starListItem =  <li>{this.state.starList[i]}</li>;
      starListItemArray = [
        ...starListItemArray,
        starListItem,
      ]
    } 
    return (
      <div>
        <div >
           this.state {JSON.stringify(this.state)};
        </div>
        <div>
         this.state.starlist{this.state.starList}
       </div>
       <ul>
         <li>
           {starListItemArray}
         </li>
       </ul>
      </div>
      
    );
  }
}

export default App;
