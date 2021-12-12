# react

# Using ref
userNameInput = React.createRef();
handleSubmit = (event) => {
    event.preventDefault();
    console.log(
        this.userNameInput.current.value
    );
}
...
<input type="text" placeholder="foobar" ref={this.userNameInput} required>

# use of state
It is an alternate and maybe better way of controlling value of elements

state = {userName: ''};
<input onChange={event => this.setState({userName: event.target.value})}>

console.log(this.state.userName);