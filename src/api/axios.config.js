import axios from "axios";


const instance = axios.create({
	baseURL: "https://api.github.com/users/curpracode",
	// headers: {
	// 	"Access-Control-Allow-Origin": "*",
	// },
});

export default instance