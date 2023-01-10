import axios from "axios";

export default {
  getList: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url =
          "http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=1&page=" +
          page;
      } else {
        url =
          "http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=1";
      }
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
