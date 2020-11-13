/* eslint-disable prettier/prettier */
import http from 'k6/http';

// export let options = {
//   vus: 4,
//   duration: '2s',
// };

export default function () {
  // recordRates(
  const resp = http.post(//AddToCourt($court_id: Int!, $nickname: String) {addUserToCourt(courtID: $court_id, nickname: $nickname)}
    'http://localhost:3000/graphql',
    '{"operationName":"AddToCourt","variables":{"court_id":1,"nickname":"tian"},"query":"  mutation AddToCourt($court_id: Int!, $nickname: String) {addUserToCourt(courtID: $court_id, nickname: $nickname)}"}',
    {
      headers: {
        'Content-Type': 'application/json',//$court_id: Int!, $nickname: String
      },
    }
  )
}

// to run just use k6 run {this file name}
// follow install instructions on this website https://k6.io/docs/getting-started/running-k6