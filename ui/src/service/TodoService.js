import baseUrl from "@/config/base.url";

export async function getAllTasks() {
    const response = baseUrl.get('/task')
    return await response.json()
}