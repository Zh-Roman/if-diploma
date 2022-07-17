class UserRequestClient {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  getUserRequest = (params = "") => this.apiClient.get("/api/catalog?", params);

  postUserRequest = (body = {}) => this.apiClient.post("/api/cart", body);

  postSubscription = (body = {}) =>
    this.apiClient.post("/api/subscription", body);
}

export default UserRequestClient;
