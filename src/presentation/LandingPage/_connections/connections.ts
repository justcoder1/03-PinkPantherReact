import { DB_API } from "../../../_utils/hooks/functions";

// FIX - Not created yet
export const getSignIn = async (): Promise<any> => {
  return await DB_API.get("/").then((res) => res.data.data);
};
