<html>
	<body id="react-app">
	</body>
<script>
var PeopleList = React.createClass({
	propTypes:{
		vouch: React.PropTypes.string
	}
    var people = [{
    	'name':'Testnane'
    },{
    	'name':'Testnane'
    },{
    	'name':'Testnane'
    }];
    
    increment: function() {
		console.log(this.props.vouch);
    },

    render: function() {
        return <div>
            <div>{this.state.counter}</div>
            <FancyButton text="Increment!" onClick={this.increment} vouch="Test"/>
        </div>;
    }
});
ReactDOM.render(<PeopleList />, document.getElementById('react-app'));
</script>
</html>