import React, { Component } from 'react'
import { render } from 'react-dom'
import './index.css'
import classNames from 'classnames';
import styled from 'styled-components'

const Title = styled.li`
    color: red
`

class App extends Component {
    render() {
        console.log(this.props);

        const style = { color: 'red' }
        return (
            <div>
                <h1 style={style}>JSX原理</h1>
                <ol>
                    <li style={style}>使用style内联创建</li>
                    <li className="has-text-red">使用class的方式</li>
                    <li className={classNames('a', { 'b': true, 'c': false })}>使用第三方依赖动态添加样式</li>

                    <Title>styled-components的使用</Title>
                </ol>
            </div>
        )
    }
}


render(
    <App />
    ,
    document.getElementById('root')
)