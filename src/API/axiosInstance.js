import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
  headers: {
    'app-id': '61b724480aaff9678bd56847',
  },
})

export default axiosInstance
