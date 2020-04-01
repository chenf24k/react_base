import React, { Component, Fragment } from 'react'
import {
    ToDoHeader,
    ToDoInput,
    ToDoList
} from './components'


export default class App extends Component {
    render() {
        return (
            <Fragment>
                <ToDoHeader />
                <ToDoInput />
                <ToDoList />
            </Fragment>
        )
    }
}
