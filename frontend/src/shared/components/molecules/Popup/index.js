import { Component } from 'react'
import either from 'shared/components/utils/either'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Presentational = ({ fixedWidth = '50%', children }) => (
  <div className={loadClass`root`} style={{ width: fixedWidth }}>
    <div className={loadClass`content`}>{children}</div>
  </div>
)

class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpened: this.props.isOpened }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.isOpened !== undefined && !prevState.isOpened) return { isOpened: false }
    if (nextProps.isOpened) return { isOpened: nextProps.isOpened }
    return null
  }

  closing = () => {
    either(this.props.onClose)(() => this.setState({ isOpened: false }))()
  }

  componentDidMount() {
    if (this.props.autoClose) setTimeout(() => this.closing(), 1000)
  }

  render() {
    return !this.state.isOpened ? null : <Presentational {...this.props} />
  }
}

export default Popup