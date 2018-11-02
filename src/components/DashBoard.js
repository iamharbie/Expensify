import React from 'react';
import Form from './Form';
import Display from './Display';


class DashBoard extends React.Component{
constructor (props) {
    super(props)
    this.state= {text: 'The text'}
    this.test =this.test.bind(this);
}

test(text){
    return this.setState({text:text})
}



    render(){
      return ( 
          <div>
              <Form test={this.test}/>
                <Form test={(text)=>this.setState({text: text})}/>
                <Display text={this.state.text}/>
        </div> 
        )
    }
}

export default DashBoard