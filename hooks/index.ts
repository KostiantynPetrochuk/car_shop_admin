import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";

import { useSession } from "next-auth/react";
import { BACKEND_URL } from "@/lib/Constants";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useFetchWithAuth = () => {
  const { data: session, update } = useSession();
  const fetchWithAuth = async (url: string, options: RequestInit) => {
    const response = await fetch(`${BACKEND_URL}${url}`, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${session?.backendTokens.accessToken}`,
      },
    });
    if (response.ok) {
      return await response.json();
    }
    if (!response.ok && response.status === 401) {
      const newSession = await update();
      const newAccessToken = newSession?.backendTokens.accessToken;
      const response = await fetch(`${BACKEND_URL}${url}`, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${newAccessToken}`,
        },
      });
      if (response.ok) {
        return await response.json();
      }
    }
    throw new Error(response.statusText);
  };
  return { fetchWithAuth };
};
