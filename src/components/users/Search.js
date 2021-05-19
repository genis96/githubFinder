import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }

    // were passing in the text here
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    // we are submitting the form using onsubmit here
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input 
                    type='text' 
                    name='text' 
                    value={ this.state.text } 
                    placeholder='Search Users' 
                    onChange={this.onChange}
                    />
                    <input 
                    type='submit' 
                    value='Search' 
                    className='btn btn-dark btn-block'
                    
                    />
                </form>
            </div>
        )
    }
}

export default Search
