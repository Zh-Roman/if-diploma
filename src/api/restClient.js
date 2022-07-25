class restClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  getConfig(method, body) {
    const config = {
      method: method.toUpperCase(),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    if (body) {
      config.body = JSON.stringify(body);
    }
    return config;
  }

  async request(endpoint, config) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, config);
      const { status } = response;

      if (status === 204) {
        return { status };
      }
      if (status >= 200 && status < 300) {
        return await response.json();
      }
    } catch (error) {
      return error;
    }
  }

  async get(endpoint = "", params = "") {
    const data = await this.request(
      `${endpoint}?${params}`,
      this.getConfig("get", null)
    );
    return data;
  }

  async post(endpoint = "", body = {}) {
    const data = await this.request(endpoint, this.getConfig("post", body));
    return data;
  }

  async put(endpoint = "", body = {}) {
    const data = await this.request(endpoint, this.getConfig("put", body));
    return data;
  }

  async patch(endpoint = "", body = {}) {
    const data = await this.request(endpoint, this.getConfig("patch", body));
    return data;
  }

  async delete(endpoint = "", body = {}) {
    const data = await this.request(endpoint, this.getConfig("delete", body));
    return data;
  }
}

export default restClient;
