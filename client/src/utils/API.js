import axios from "axios"

export default {
    // Get info from numbeo
    getNumbeo: function(query) {
        return axios.get("https://www.numbeo.com/api/indices?api_key=gfc0idlc9cvrs2&query=" + targetCity)
    },

    // Returns info
    getNumbeo: function () {
        return axios.get("/api/cities");
    },

    // Gets city with the given id
    getNumbeo: function (id) {
        return axios.get("/api/cities/" + id);
    },

    // Saves city info to the database
    saveCity: function (savedCity) {
        console.log (savedCity)
        return axios.post("/api/cities", savedCities);
    },

    // Deletes city info with the given id
    deleteCity: function (id) {
        return axios.delete("/api/cities/" + id);
    }

}

