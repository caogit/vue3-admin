import { http } from "@/utils/http";
interface ICrud {
  city: string;
  id: string;
}
interface IResult {
  code: number;
  message: string;
  data: ICrud[];
}
/** 登录 */
export const getAsyncCrudData = () => {
  return http.request<IResult>(
    "get",
    "http://127.0.0.1:4523/mock/2364042/hooks/city"
  );
};
