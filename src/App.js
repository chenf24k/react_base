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
                <ToDoHeader 
                    desc="今日事，今日毕">
                    <i>待办事项列表</i>
                </ToDoHeader>
                <ToDoInput btnText="ADD" />
                <ToDoList />
            </Fragment>
        )
    }
}
