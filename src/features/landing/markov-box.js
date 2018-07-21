import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Button} from '../../various';

const TextWrapper = styled.div`
  bold {
    color: limegreen;
    font-weight: 800;
  }
`;

export default class MarkovBox extends Component {
  state = {text: ''};

  static propTypes = {
    markov: PropTypes.object.isRequired,
    search: PropTypes.string
  };

  static defaultProps = {
    search: 'uhhhh.... some movie?'
  };

  cleanText(text) {
    return text
      .split('.')
      .filter(Boolean)
      .map(line =>
        line
          .replace(/<i>(.*)<\/i>/gi, '<bold>$1</bold>')
          .replace(/(<i>|<\/i>)/gi, '')
      )
      .join('.');
  }

  updateText = () => {
    const {markov} = this.props;

    const text = this.cleanText(markov.sentences(50));
    this.setState({text});
  };

  componentDidMount() {
    const {markov} = this.props;
    const text = this.cleanText(markov.sentences(50));
    this.setState({text});
  }

  render() {
    const {search} = this.props;
    const {text} = this.state;

    return (
      <Fragment>
        <h3>Movie title: {search}</h3>
        <Button onClick={this.updateText}>Generate more ipsum</Button>
        <TextWrapper dangerouslySetInnerHTML={{__html: text}} />
      </Fragment>
    );
  }
}
