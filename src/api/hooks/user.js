import { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery } from "react-query";
import { apiRequest } from "../axios";
import { API_URL } from "../urls";

// export const useKakaoLogin = () => {
//   return useMutation({
//     mutationKey: 'useKakaoLogin',
//     mutationFn: () => apiRequest.post(API_URL.KAKAO_LOGIN)
//   });
// };

export const useKakaoLogin = () => {
  return useMutation({
    mutationKey: 'useKakaoLogin',
    mutationFn: (code) => apiRequest.post(API_URL.KAKAO_LOGIN, { code })
  });
};