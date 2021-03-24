import Axios from 'axios';

var xsrfToken = document.head.querySelector('meta[name="csrf-token"]');

export const axios = Axios.create({
    baseURL : "http://localhost:8000/api",
    header: 'Bearer token',

    headers: {
        "X-XSRF-TOKEN": xsrfToken,
        "X-Requested-with": 'XMLHttpRequest',
        "Accept": 'application/json',
       // "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
    },
    timeout:3000
})