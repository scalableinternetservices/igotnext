/* eslint-disable prettier/prettier */
import http from 'k6/http';
import { sleep } from 'k6';
import {parseHTML} from "k6/html";

// export let options = {
//   vus: 10,
//   duration: '30s',
// };

export default function () {
  let res = http.get('http://localhost:3000/app/index');
  // Now, submit form setting/overriding some fields of the form
  res = res.submitForm({
    formSelector: 'form',
    fields: { latitude: 33, longitude: -117 , nickname: 'sean' },
  });
  sleep(2);

  console.log(res.body)
  const doc = parseHTML(res.body);
  const sel = doc.find('div').children();

  doc.find("div").children().toArray().forEach(function (item) {
      // console.log(item.get(0).innerHTML());
      // make http gets for it
      // or added them to an array and make one batch request
   });
}

// to run just use k6 run {this file name}
// follow install instructions on this website https://k6.io/docs/getting-started/running-k6
