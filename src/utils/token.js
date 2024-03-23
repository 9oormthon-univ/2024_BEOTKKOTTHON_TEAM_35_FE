// Instance

const getRefreshToken = async () => {
  try {
    const response = await Instance.post(
      process.env.REACT_APP_REFRESH_URL,
      {
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken"),
      }
    );
    const { accessToken, refreshToken } = response.data;
    localStorage.setItem("accessToken", accessToken);
    if (refreshToken !== null) {
      localStorage.setItem("refreshToken", refreshToken);
    }
    return accessToken;
  } catch (e) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
};

module.exports = getRefreshToken;
