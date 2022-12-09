import axios from "axios";
import config from "../config/apiConfig";

/**
 * /countrues - array
 * /cities - array
 * /prices/cheap - array
 */

class Api {
  constructor(config) {
    this.url = config.url;
    this.token = config.token;
    this.headers = config.headers;
  }
  async countries() {
    try {
      // const responce = await axios.get(
      //   `${this.url}/data/en-GB/countries.json`,
      //   {
      //     headers: this.headers
      //   }
      // );
      const responce = await axios.get(`https://api.travelpayouts.com/data/en/countries.json`);
      return responce.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
  async cities() {
    try {
      const responce = await axios.get(`https://api.travelpayouts.com/data/en/cities.json`);
      return responce.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
  async airlines() {
    try {
      const responce = await axios.get(`https://api.travelpayouts.com/data/en/airlines.json`, {
        headers: this.headers
      });
      return responce.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }

  // async prices(params) {
  //   console.log(params);
  //   try {
  //     const responce = await axios.get(`${this.url}/tickets.json`, {
  //       params,
  //     });
  //     return responce.data;
  //   } catch (err) {
  //     console.log(err);
  //     return Promise.reject(err);
  //   }
  // }

  async prices(params) {
    try {
      const responce = await axios.get(`${this.url}/v1/prices/cheap`, {
        params: params
      });
      return responce.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
}

const api = new Api(config);

export default api;