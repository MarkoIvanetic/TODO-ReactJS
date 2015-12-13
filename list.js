var PeopleList = React.createClass({
    var people = [{
    	'name':'Testnane'
    },{
    	'name':'Testnane'
    },{
    	'name':'Testnane'
    }];
    
    increment: function() {
    	if ((1+this.state.counter) % 3 != 0) {
        this.setState({ counter: this.state.counter+1 });
        console.log("Works");
        } else {
        	this.setState({ counter: this.state.counter+2 });
        };
    },

    render: function() {
        return <div>
            <div>{this.state.counter}</div>
            <FancyButton text="Increment!" onClick={this.increment} />
        </div>;
    }
});
ReactDOM.render(<PeopleList />, document.getElementById('react-app'));
