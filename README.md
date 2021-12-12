# react

# To create a react app
npx create-react-app jpmc-react-am

npm run start -- in memory
npm run build -- creates package for deployment (compiled files)
npm run eject -- to change defualt config changes

export PORT=3055
or edit start.js


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

# use of random
const starts = utils.random(1, 9);

# use of range
{utils.range(1,9).map(
    number => <button key={number} className="number">{number}</button>
)}