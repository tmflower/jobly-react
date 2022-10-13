import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;
  

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // get details on all companies, or list of companies filtered by names matching user search terms

  static async getCompanies(name) {
    let res = await this.request(`companies/`, {name});
    return res.companies;
  }

  // get details on all jobs

  static async getJobs(title) {
    let res = await this.request(`jobs/`, {title});
    return res.jobs;
  }

  // register a new user and provide token
  
  static async registerUser(newUser) {
    console.log('inside registerUser function in api')
    const data = await axios.post(`${BASE_URL}/auth/register/`, newUser);
    JoblyApi.token = data.data.token;
    // console.log(JoblyApi.token);
    return JoblyApi.token;
  }

  // provide token for logged in user

  static async authenticateUser(user) {
    console.log('inside authenticateUser in api');
    const data = await axios.post(`${BASE_URL}/auth/token`, user);
    JoblyApi.token = data.data.token;
    return JoblyApi.token;
  }

  // get details on an individual user

  static async getUser(username) {
    console.log('inside get user in api');
    let res = await this.request(`users/${username}`);
    console.log(res.user);
    return res.user;
  }

  // update details on an individual user
  // takes 2 arguments, first is username, second is the data to update

  static async updateUser(username, updatedUserData) {
    console.log('inside updateUser in api');
    console.log(username);
    let res = await this.request(`users/${username}`, updatedUserData, "patch");
    console.log(res.user);
    return res.user;
  }

  // Get details on a job by id.

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  // Add job to user's list of applied jobs

  static async addToAppliedJobs(username, jobId) {
    console.log(username, jobId)
    let res = await this.request(`users/${username}/jobs/${jobId}`, jobId, "post");
    return res.jobId;
  }

}
// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;