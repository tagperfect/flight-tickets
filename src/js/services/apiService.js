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
    // this.token = config.token;
  }
  async countries() {
    try {
      const responce = await axios.get(`${this.url}/countries.json`, {
        // const responce = await axios.get(`https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json`, {
        // headers: {
        // 'Content-Type': 'application/json;charset=utf-8',
        // 'Access-Control-Allow-Origin': '*',
        // 'User-Agent': 'PostmanRuntime/7.29.2',
        // 'Accept-Encoding': 'gzip, deflate, br',
        // Accept: '*/*',
        // "Connection": 'keep-alive',
        // "X-Access-Token": this.token,

        // }
      });
      return responce.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
  async cities() {
    try {
      const responce = await axios.get(`${this.url}/cities.json`, {
        // headers: {
        //   // 'Access-Control-Allow-Origin': '*',
        //   'Content-Type': 'application/json;charset=utf-8',
        //   Accept: "application/json",
        //   "X-Access-Token": this.token,

        // }
      });
      return responce.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
  async airlines() {
    try {
      const responce = await axios.get(`${this.url}/airlines.json`);
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
      const responce = await axios.get(`${this.url}/tickets.json`);
      return responce.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
}

const api = new Api(config);

export default api;