export function useEnv() {
    const {VITE_BASE_URL} = import.meta.env
    return {VITE_BASE_URL}
}