import {wrapRequest, xapi} from "../../../services/utils";

const getHomeDynamicInfos = wrapRequest(async () =>
  xapi.get('homedata')
);

export { getHomeDynamicInfos };