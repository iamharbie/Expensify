import React from 'react';


class Form extends React.Component{


    render(){
        return (
            <div>
                <form onSubmit={
                        (e)=>{
                            e.preventDefault();
                            this.props.test(e.target[0].value)
                            console.log(e.target[0].value);
                        }
                        }>
                    <input type="text" placeholder="Enter Text" ></input>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}


export default Form