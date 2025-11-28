import { createContext } from "react";

/**
 * Контекст темы, чтобы получать ее из любой части проекта
 */
export const ThemeContext = createContext("dark")

/**
 * Контекст аутентификации, чтобы иметь информацию, залогинен юзер или нет
 */
export const AuthContext = createContext(true)