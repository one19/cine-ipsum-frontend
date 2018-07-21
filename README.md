# [CINEMA IPSUM](https://cine-ipsum.com)

### WHAT IT DO:
Generates an ipsum for any movie with dialogue.

### TODO:
0. style it
1. Slider for length of ipsum output
3. Optional introduction of paragraphs
4. Slider for markov chain strength
5. Move the serverless route to `https://api.cine-ipsum.com`
6. put the serverless code onto GH
7. Make the server give back the movie title
8. Pre-fetch movie title matching to let the user know they've selected a movie
9. Disable form on query properly with a spinner so you know it's thinking

### BUGS:
1. on refetch, ipsum isn't redrawn, possibly leading people to think they didn't fetch correctly
2. error propagation sucks. It should throw intelligently onto the form
3. don't delete `docs/cname` on build
