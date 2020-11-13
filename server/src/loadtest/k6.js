/* eslint-disable prettier/prettier */
import http from 'k6/http'

export let options = {
  vus: 1000,
  duration: '10s',
}

export default function () {
  const headers = {
    'Content-Type': 'application/json', //$court_id: Int!, $nickname: String
  }
  /*
  const resp = http.post(
    //AddToCourt($court_id: Int!, $nickname: String) {addUserToCourt(courtID: $court_id, nickname: $nickname)}
    'http://localhost:3000/graphql',
    '{"operationName":"AddToCourt","variables":{"court_id":1,"nickname":"tian"},"query":"  mutation AddToCourt($court_id: Int!, $nickname: String) {addUserToCourt(courtID: $court_id, nickname: $nickname)}"}',
    {
      headers,
    }
  )
  */

  /*
  let query = `
query parkQ{
  park(latitude: 33, longitude: -117){
    parkID
    longitude
    latitude
    parkName
    courts{
      courtID
    }
  }
}
  `
  */

  /*
  let query = `
  query Games{
  allGames{
   matchID
    status
    court{
      courtID
    }
    roster

  }
}
  `
  */


  /*
  let query = `
  query Parkind{
  parkind(park_id:1){
   parkName
  }
}
`
*/

 let query = `
 query courtKind{
  courtind(court_ID:1){
    courtID
    courtName
    lobby
  }
}
 `

  const Query = http.post('http://localhost:3000/graphql', JSON.stringify({ query }), { headers })
}

// to run just use k6 run {this file name}
// follow install instructions on this website https://k6.io/docs/getting-started/running-k6
