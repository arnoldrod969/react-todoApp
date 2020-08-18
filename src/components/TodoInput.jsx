import React, { Component } from 'react'
import List from './List'
// import { Router } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

export default class TodoInput extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            userInput :'',
            tasks : []
        }
        this.inp = React.createRef()
    }
    

    handleChange = () => {
        this.setState({
            userInput : this.inp.current.value
            // tasks: this.state.tasks.push(this.state.userInput)
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault() 
        this.setState({
            tasks : [...this.state.tasks, this.state.userInput ],
            userInput: ''

        })
        console.log("inp :", this.inp.current.value);
    }
    handleDelete = (e) => {
        e.preventDefault()
        let ind = this.state.tasks.indexOf(this.inp.current.value)
        let array = this.state.tasks
        array.splice(ind, 1)
        this.setState({
            tasks : array
        })
    }

    render() {
        console.log("userInput :", this.state.userInput)
        
        
        
        return (
            <div>
                <form className="form-inline" onSubmit={this.handleSubmit} >
                    <input
                        ref={this.inp}
                        className="form-control w-50" 
                        value={this.state.userInput}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Enter a task"
                    /> &nbsp;
                    <button className="btn btn-primary" type="submit">Save</button>
                </form>
                <br/>
                <BrowserRouter>
                    <List task={this.state.tasks} handleDelete={this.handleDelete} />
                </BrowserRouter>
            </div>
        )
    }
}
