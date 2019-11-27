import React from "react"
import { render } from "react-dom"
import {Button} from '@component/button/button'
import '../style/theme.combined.less'
import '../style/afu.component.less'
class App extends React.Component{
    render() {
        return <div className="autofit-ui-debugger-platform main-color">
            autofit-ui-debugger-platform
            <Button>测试</Button>
        </div>
    }
}

render(
    <App/>,
    document.getElementById("root")
);