import axios from 'axios'

export function generateJoke(){
    const config = {
        headers: {
          Accept: 'application/json'  
        }
    }

    //HTTP-Requests (Axios ist ein HTTP-Client)
    axios.get('https://icanhazdadjoke.com', config).then((res) => {
        document.getElementById('joke').innerHTML = res.data.joke
    })
}

// export default generateJoke 