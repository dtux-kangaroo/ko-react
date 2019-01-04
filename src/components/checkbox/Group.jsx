import React ,{PureComponent} from 'react';
import Checkbox from './checkbox';
import { PropTypes } from '../../utils';


export default class CheckboxGroup extends PureComponent {
  static defaultProps = {
    options: [],
    defaultValue: [],
    onChange() {},
  }
  static propTypes = {
    defaultValue: PropTypes.array,
    value: PropTypes.array,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
  }
  constructor(props) {
    super(props);
    let value;
    if ('value' in props) {
      value = props.value || [];
    } else if ('defaultValue' in props) {
      value = props.defaultValue || [];
    }
    this.state = { value };
  }
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value || [],
      });
    }
  }
  shouldComponentUpdate(...args) {
    return PureRenderMixin.shouldComponentUpdate.apply(this, args);
  }
  getOptions() {
    const { options } = this.props;
    return options.map(option => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });
  }
  toggleOption = (option) => {
    const optionIndex = this.state.value.indexOf(option.value);
    const value = [...this.state.value];
    if (optionIndex === - 1) {
      value.push(option.value);
    } else {
      value.splice(optionIndex, 1);
    }
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    this.props.onChange(value);
  }
  render() {
    const options = this.getOptions();
    return (
      <div className="ko-checkbox-group">
        {
          options.map(option =>
            <Checkbox disabled={'disabled' in option ? option.disabled : this.props.disabled}
              checked={this.state.value.indexOf(option.value) !== -1}
              onChange={() => this.toggleOption(option)}
              className="ko-checkbox-group-item" key={option.value}
            >
              {option.label}
            </Checkbox>
          )
        }
      </div>
    );
  }
}