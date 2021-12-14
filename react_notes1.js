// React Class Component
class Welcome extends ReadableStreamDefaultController.Component {
    render(){
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

// React Functional Component
function Welcome(props) {
    return (
        <h1>Hello, {props.name}</h1>
    );
}