import React from 'react';
import '../css/form.css'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div className ="wrapper">
                <h2>Register your details below</h2>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                    <label>First Name: {''}
                    <input type="text"  />
                    </label>
                    <br/>
                    <label>Last Name: {''}
                    <input type="text"  />
                    </label>
                    <br />
                    <label>Email: {''}
                    <input type="email"  />
                    </label>
                    <br />
                    <label>Mobile: {''}
                    <input type="number"  />
                    </label>
                    </fieldset>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form