const API_URL = "http://localhost:5173";

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (!response.ok) return { error: data.detail || "Login failed" };
    return data;
  } catch (error) {
    return { error: "Server connection failed" };
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (!response.ok) return { error: data.detail || "Registration failed" };
    return data;
  } catch (error) {
    return { error: "Server connection failed" };
  }
};
