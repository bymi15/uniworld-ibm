import { axiosConfig } from "../config";

class EventRoomService {
  url = "/eventrooms";

  async getAll() {
    return (await axiosConfig.get(`${this.url}`)).data.eventrooms;
  }

  async get(id) {
    return (await axiosConfig.get(`${this.url}/byid?id=${id}`)).data;
  }

  async create(data) {
    return (await axiosConfig.post(this.url, data)).data;
  }

  async update(data) {
    return (await axiosConfig.put(`${this.url}`, data)).data;
  }

  async delete(id, rev) {
    return await axiosConfig.delete(`${this.url}?id=${id}&rev=${rev}`);
  }
}

export default new EventRoomService();
