import React from 'react';
import { connect } from 'react-redux';

const App = (props) => {
    return (
        <div>
            <h1>123</h1>
        </div>
    )
}

export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return { dispatch };
    }
)(App);