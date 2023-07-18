import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
        '8c89cac291msh72c8802083d2e52p1d939cjsn74fade4bd78f',
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        if (error.response && error.response.status === 403) {
            console.log("Error: 403 Forbidden");
        } else {
            console.log(`Error: ${error.message}`);
        }
        throw error;
    }
};
