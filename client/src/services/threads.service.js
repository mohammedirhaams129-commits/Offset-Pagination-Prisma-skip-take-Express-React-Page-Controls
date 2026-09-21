import apiClient from "./apiClient";

export async function getThreads(page) {
  const res = await apiClient.get("/api/threads", {
    params: { page },
  });
  return res.data;
}
