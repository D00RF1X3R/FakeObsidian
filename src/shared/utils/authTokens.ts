
/**
 * Получаем наш токен для авторизации из локального хранилища
 * @returns Auth Token
 */
export const getStoredToken = (): string | null => localStorage.getItem("TOKEN")

/**
 * Получаем наш токен для обновления токена аутентификации 
 * @returns Refresh Token
 */
export const getStoredRefreshToken = (): string | null => localStorage.getItem("REFRESH_TOKEN")

/**
 * Помещаем токен для авторизации в локальное хранилище
 * @param token Сам токен
 * @returns Nothing
 */
export const setStoredToken = (token: string): void => localStorage.setItem("TOKEN", token)


/**
 * Помещаем наш токен для обновления токена аутентификации 
 * @param token Сам токен
 * @returns Nothing
 */
export const setStoredRefreshToken = (token: string): void => localStorage.setItem("REFRESH_TOKEN", token)