/* eslint-disable prettier/prettier */
import http from 'k6/http';
import { Counter, Rate } from 'k6/metrics'

export let options = {
  executor: 'constant-vus',//'constant-vus',//ramping-vus
  vus: 10, // Do for 10, 50 , and 100
  iterations: 20, // 2x vus
  MaxDuration: '25s',
}

export default function () {
  // recordRates(
  // const resp = http.post(//AddToCourt($court_id: Int!, $nickname: String) {addUserToCourt(courtID: $court_id, nickname: $nickname)}
  //   'http://localhost:3000/graphql',
  //   '{"operationName":"AddToCourt","variables":{"court_id":1,"nickname":"tian"},"query":"  mutation AddToCourt($court_id: Int!, $nickname: String) {addUserToCourt(courtID: $court_id, nickname: $nickname)}"}',
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',//$court_id: Int!, $nickname: String
  //     },
  //   }
  // )

  //   const resp = http.post(//AddToCourt($court_id: Int!, $nickname: String) {addUserToCourt(courtID: $court_id, nickname: $nickname)}
  //   'http://localhost:3000/graphql',
  //   '{"operationName":"AddGame","variables":{"courtID":1},"query":"  mutation AddGame($courtID: Int) {addGame(courtID: $courtID)}"}',
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',//$court_id: Int!, $nickname: String
  //     },
  //   }


  // )

  const headers = {
    'Content-Type': 'application/json', //$court_id: Int!, $nickname: String
  }


  let query = `
  query courtKind{
   courtind(court_ID:1){
     courtID
     courtName
     lobby
   }
 }
  `


   http.post('http://localhost:3000/graphql', JSON.stringify({ query }), { headers })


  // recordRates(
  //   http.get('http://localhost:3000/app/index', { cookies: { authToken: '9f10c46a-98ff-4351-86bb-74a601eb5ac2' } })
  // )
}

// to run just use k6 run {this file name}
// follow install instructions on this website https://k6.io/docs/getting-started/running-k6

const count200 = new Counter('status_code_2xx')
const count300 = new Counter('status_code_3xx')
const count400 = new Counter('status_code_4xx')
const count500 = new Counter('status_code_5xx')

const rate200 = new Rate('rate_status_code_2xx')
const rate300 = new Rate('rate_status_code_3xx')
const rate400 = new Rate('rate_status_code_4xx')
const rate500 = new Rate('rate_status_code_5xx')

function recordRates(res) {
  if (res.status >= 200 && res.status < 300) {
    count200.add(1)
    rate200.add(1)
  } else if (res.status >= 300 && res.status < 400) {
    console.log(res.body)
    count300.add(1)
    rate300.add(1)
  } else if (res.status >= 400 && res.status < 500) {
    count400.add(1)
    rate400.add(1)
  } else if (res.status >= 500 && res.status < 600) {
    count500.add(1)
    rate500.add(1)
  }
}