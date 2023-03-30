import axios from "axios"

export class AxiosProvider{
    static async communication(method, path, hash, body) {
        try {
            const options = {
                method: method,
                // url: `https://server-final-project-12ki.onrender.com/${path}`,
                url: `http://localhost:3000/${path}`,
                headers: {
                  'Content-Type': 'application/json',
                  authorization: hash
                },
                data: body
              };
              return axios.request(options)
        } catch (err) {
            return err.response
        }   
    }
}