import { axiosConfig } from "../config";

class LectureRoomService {
  url = "/lecturerooms";

  async get() {
    return (await axiosConfig.get(this.url)).data.lecturerooms;
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

export default new LectureRoomService();
