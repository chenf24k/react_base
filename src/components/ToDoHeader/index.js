import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class ToDoHeader extends Component {
    static propTypes = {
        desc: PropTypes.string.isRequired
    }
    
    static defaultProps = {
        desc: '如果还有明天'
    }

    render() {
        console.log(this.props);

        return (
            <>
                <h1>
                    {this.props.children}
                </h1>
                <h3>
                    {this.props.desc}
                </h3>
            </>
        )
    }
}