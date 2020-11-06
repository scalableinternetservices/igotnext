/* eslint-disable prettier/prettier */
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://test.k6.io');
  sleep(1);
}

// to run just use k6 run {this file name}
// follow install instructions on this website https://k6.io/docs/getting-started/running-k6
