import axios from "axios"

export default {
    // Get info from numbeo
    getNumbeo: function(query) {
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
    saveCity: function (savedCity) {
        console.log (savedCity)
        return axios.post("/api/cities", savedCities);
    },

    // Deletes city info with the given id
    deleteCity: function (id) {
        return axios.delete("/api/cities/" + id);
    }

}

------
import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};