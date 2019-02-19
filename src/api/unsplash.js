import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 76072fd898ab392ffeef253696ef52054aa7171d7769f406ba3cc7c47a053d93'
    }
});