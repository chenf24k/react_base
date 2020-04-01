import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class ToDoInput extends Component {
    static propTypes = {
        btnText: PropTypes.string.isRequired
    }

    static defaultProps = {
        btnText: '添加TODO'
    }

    render() {
        return (
            <div>
                <input type="text" />
                <button>{this.props.btnText || '添加'}</button>
            </div>
        )
    }
}
