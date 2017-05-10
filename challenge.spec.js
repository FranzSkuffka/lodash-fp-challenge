const test = require('ava')
const result = require('./challenge')

// data only, camelCased keys, paginated by 3
const EXPECTED = [ [ { firstName: 'Jon', lastName: 'Doe' },
    { firstName: 'Max', lastName: 'Mustermann' },
    { firstName: 'Jon', lastName: 'Doe' } ],
  [ { firstName: 'Max', lastName: 'Mustermann' },
    { firstName: 'Jon', lastName: 'Doe' },
    { firstName: 'Max', lastName: 'Mustermann' } ],
  [ { firstName: 'Jon', lastName: 'Doe' },
    { firstName: 'Max', lastName: 'Mustermann' } ] ]

test('CHALLENGE', t => t.deepEqual(result, EXPECTED))
