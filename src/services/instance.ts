import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "", // можно оставить пустым для текущего домена
  timeout: 10000, // 10 секунд
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// 🔁 Запросы (можно добавить токен и т.п.)
axiosInstance.interceptors.request.use(
  (config) => {
    // Пример: добавить токен авторизации
    // const token = getTokenFromStorage();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  },
);

// 🛑 Ответы
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        console.warn(
          "Неавторизован! Возможно, нужно выйти или обновить токен.",
        );
        // Пример: logout или редирект
      }

      if (status >= 500) {
        console.error("Сервер вернул ошибку:", status);
      }
    } else if (error.request) {
      console.error("Нет ответа от сервера. Проверьте соединение.");
    } else {
      console.error("Ошибка при настройке запроса:", error.message);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
