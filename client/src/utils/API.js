import axios from "axios"

export default {
    // Get info from numbeo
    getNumbeo: function (query) {
        return axios.get("https://www.numbeo.com/api/indices?api_key=gfc0idlc9cvrs2&query=" + query)
    },

    // Returns info
    // getNumbeo: function () {
    //     return axios.get("/api/cities");
    // },

    // Gets city with the given id
    // getNumbeo: function (id) {
    //     return axios.get("/api/cities/" + id);
    // },

    // Saves city info to the database
    // saveCity: function (savedCity) {
    //     console.log (savedCity)
    //     return axios.post("/api/cities", savedCities);
    // },

    // // Deletes city info with the given id
    // deleteCity: function (id) {
    //     return axios.delete("/api/cities/" + id);
    // }

    // Gets all scenarios
    getScenarios: function () {
    return axios.get("/api/scenarios");
},

    // Gets the scenarios with the given username
    getScenario: function (id) {
        return axios.get("/api/scenarios/" + id);
    },
    // Deletes the scenario with the given id
    deleteScenario: function (id) {
        return axios.delete("/api/scenarios/" + id);
    },
    // Saves a scenario to the database
    saveScenario: function (scenarioData) {
        alert(scenarioData.total_assets+ " "+scenarioData.income_in_retirement+" "+scenarioData.retirement_age+" "+scenarioData.target_city);
        console.log(scenarioData);
        return axios.post("/api/scenarios", scenarioData);
    },
    getLoginStatus: () => {
        return axios.get("/api/current_user");
    } 
}

