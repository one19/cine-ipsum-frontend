import React, {Fragment, Component} from 'react';
import {Form, ValidatorProvider, TextInput} from 'a-plus-forms';
import validator from 'a-plus-forms-json-validator';
import Markov from 'markov-json';
import axios from 'axios';
import {Button} from '../../various';
import MarkovBox from './markov-box';
import schema from './schema';

export default class QueryForm extends Component {
  state = {markov: undefined, search: '', showForm: true, disabled: false};

  onSubmit = async params => {
    if (this.state.disabled) return;

    this.setState({disabled: true});
    const {data} = await axios.get(
      'https://us-central1-cine-ipsum.cloudfunctions.net/searchToText',
      {params}
    );

    const markov = new Markov();
    markov.train(data);

    this.setState({showForm: false, markov, search: params.query});
  };

  render() {
    const {showForm, markov, search, disabled} = this.state;

    return (
      <Fragment>
        {showForm ? (
          <ValidatorProvider validator={validator}>
            <Form schema={schema} onSubmit={this.onSubmit} disabled={disabled}>
              <TextInput
                name="movie"
                label="Movie name"
                disabled={disabled}
                placeholder="Something like inception?"
              />
              <Button submit disabled={disabled}>
                Submit
              </Button>
            </Form>
          </ValidatorProvider>
        ) : (
          <Button
            onClick={() => this.setState({showForm: true, disabled: false})}
          >
            Show the input again
          </Button>
        )}
        {markov && <MarkovBox markov={markov} search={search} />}
      </Fragment>
    );
  }
}
