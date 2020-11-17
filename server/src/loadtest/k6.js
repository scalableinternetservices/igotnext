import http from 'k6/http'

// short load test
export let options = {
  vus: 10,
  duration: '10s',
}

export default function () {
  http.post(
    // AddToCourt($court_id: Int!, $nickname: String) {addUserToCourt(courtID: $court_id, nickname: $nickname)}
    'http://localhost:3000/graphql',
    '{"operationName":"AddToCourt","variables":{"court_id":1,"nickname":"NewPlayer"},"query":"mutation AddToCourt($court_id: Int!, $nickname: String) {addUserToCourt(courtID: $court_id, nickname: $nickname)}"}',
    {
      headers: {
        'Content-Type': 'application/json',
        // $court_id: Int!, $nickname: String
      },
    }
  )
}

// cd igotnext
// k6 run ./server/src/loadtest/k6.js
// follow install instructions on this website https://k6.io/docs/getting-started/running-k6
