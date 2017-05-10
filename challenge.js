// CHALLENGE TIME!
// RTFD!
// https://lodash.com/docs/4.17.4
// https://github.com/lodash/lodash/wiki/FP-Guide

_ = require('lodash/fp')

// log :: String -> a -> a
// debug helper for composed functions
const log = tag => data => {console.log(tag, data); return data}

const RESPONSE = {
  data: `[
    {
      "FIRST_NAME": "Jon",
      "LAST_NAME": "Doe"
    },
    {
      "FIRST_NAME": "Max",
      "LAST_NAME": "Mustermann"
    },
    {
      "FIRST_NAME": "Jon",
      "LAST_NAME": "Doe"
    },
    {
      "FIRST_NAME": "Max",
      "LAST_NAME": "Mustermann"
    },
    {
      "FIRST_NAME": "Jon",
      "LAST_NAME": "Doe"
    },
    {
      "FIRST_NAME": "Max",
      "LAST_NAME": "Mustermann"
    },
    {
      "FIRST_NAME": "Jon",
      "LAST_NAME": "Doe"
    },
    {
      "FIRST_NAME": "Max",
      "LAST_NAME": "Mustermann"
    }
  ]`
}

// hint: you will need each of the following functions exactly once:
// - _.map
// - _.mapKeys
// - _.chunk
// - _.camelCase
// - JSON.parse,

// parse :: HttpResponse -> [[UserData]]
parse = _.flow([
  log('START')
])

module.exports = parse(RESPONSE)
