import {ButtonType, ButtonSize, ButtonProps, ButtonState} from './api'
import * as React from 'react'
import classNames from 'classnames'
import * as PropTypes from 'prop-types'
class Button extends React.Component<ButtonProps, ButtonState> {

    static defaultProps = {
        loading: false,
        type: 'primary',
        size: 'default',
        disabled: false
    }

    static propTypes = {
        type: PropTypes.oneOf(ButtonType),
        size: PropTypes.oneOf(ButtonSize),
        onClick: PropTypes.func,
        className: PropTypes.string,
        icon: PropTypes.string,
    }

    constructor(props: ButtonProps) {
        super(props)
    }

    render () {
        let props = this.props
        let classname = classNames({
            [`btn-type-${props.type}`]: true,
            [`btn-size-${props.size}`]: true
        })
        return <div className={classname}>{this.props.children}</div>
    }
}

export {
    Button
}