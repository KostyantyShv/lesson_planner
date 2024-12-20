import axios from "axios";
import {LessonPlanRequest} from "../models/modelLessonPlan.ts";


const API_URL = "https://scentia-api-app-esd2apfgcyhyhwdg.swedencentral-01.azurewebsites.net/ai_tools/lesson_planner";


const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: "Bearer k8Kx4w0Zr6qT9yB1U5nM7A2p",
    },
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

export const generateLessonPlan = async (data: LessonPlanRequest): Promise<string> => {
    try {
        const response = await apiClient.post<string>("", data);
        console.log("Raw API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error generating lesson plan:", error);
        throw error;
    }
};