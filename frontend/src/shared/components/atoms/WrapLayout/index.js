import PropTypes from 'prop-types'
import { compose, setPropTypes, mapProps } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const WrapLayout = props => <div {...props} />

const EnhancedComponent = compose(
  setPropTypes({ classes: PropTypes.string }),
  mapProps(({ classes, ...other }) => ({ ...other, className: loadClass`${classes}` })),
)(WrapLayout)

export default EnhancedComponent
