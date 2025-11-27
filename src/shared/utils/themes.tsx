
/**
 * Функция получения темы из локального хранилища
 * @returns Тему, у нас это light или dark, или null, если не меняли.
 */
export const getTheme = (): string | null  => localStorage.getItem(`THEME`)

/**
 * Функция записи используемой темы в локальное хранилище
 * @param theme тема, light или dark
 * @returns Ничего -_-
 */
export const setTheme = (theme: string) => localStorage.setItem(`THEME`, theme)
