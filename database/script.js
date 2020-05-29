import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '30s', target: 500 },
    { duration: '60s', target: 800 },
    { duration: '3m', target: 2000 },
    { duration: '2m', target: 1500 },
    { duration: '1m', target: 1000 },
    { duration: '30s', target: 500 },
    { duration: '10s', target: 100 },
  ],
};

export default function() {
  let random = Math.floor(Math.random() * 1E7);
  let res = http.get(`http://localhost:3002/listings/${random}`);
  check(res, { 'status was 200': r => r.status == 200 });
//   sleep(1);
}
