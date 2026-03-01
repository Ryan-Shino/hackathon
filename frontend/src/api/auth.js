const API_URL = "http://localhost:5173";

export const loginUser = async (username, password) => {
  try {
    const response = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.detail || 'Unauthorized' };
    }

    const data = await response.json();
    return data;
  } catch (err) {
    return { error: 'Server connection failed' };
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
