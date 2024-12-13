import RequestHttp from "./http";

import { config } from "./config";

const axios = new RequestHttp(config);

export default axios;
