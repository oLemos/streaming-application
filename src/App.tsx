import { useEffect } from "react"
import { api } from "./services/api"
import './styles/global.scss'
function App() {

    useEffect(() => {
        api
            .get('/discover/movie?api_key=b7243c9d233e7544393b846caa7a8765')
            .then(response => {
                console.log(response.data.results);
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div>
            hello world
        </div>
    )
}

export default App
