import {customFetch} from "~/utils/api";

export const useApi = () => {
    const fetch = customFetch
    const runtimeConfig = useRuntimeConfig()
    const apiUrl = runtimeConfig.public.apiUrl

}