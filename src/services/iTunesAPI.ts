import axios from 'axios'

const baseUrl: string = 'https://itunes.apple.com/search?term='

export default {
    getItunesData(search: string) {
        return axios.get(`${baseUrl}${search}&entity=album`)
    }
}