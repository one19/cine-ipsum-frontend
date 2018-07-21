export default {
  type: 'object',
  name: 'query_submission_form',
  properties: {
    movie: {
      type: 'string',
      description: 'the presumed name of the movie you want ipsum of',
      minLength: 3
    }
  },
  required: ['movie']
};
