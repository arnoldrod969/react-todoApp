import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class List extends Component {
    render() {
        return (
            <table className="table table-stripered table-bordered" >
                <thead className="bg-dark text-light">
                    <tr>
                        <td>ID</td>
                        <td className="text-center" >Task</td>
                        <td className="text-center" >Actions</td>
                    </tr>        
                </thead>
                <tbody>
                {
                    this.props.task.map((el, k) => {
                        return(
                            <tr key={k}>
                                <td >{k+1}</td>
                                <td>{el} </td>
                                <td className="d-flex justify-content-center">
                                    <button 
                                        onClick={this.props.handleDelete}
                                        className="btn btn-danger "
                                        type="button">
                                            Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>              
            </table>
        )
    }
}
