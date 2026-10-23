const TOKEN_KEY = 'user_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

const getBrowserStorage = (): Storage | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.localStorage;
};

export const storage = {
  async saveToken(token: string): Promise<void> {
    const browserStorage = getBrowserStorage();
    if (browserStorage) {
      browserStorage.setItem(TOKEN_KEY, token);
    }
  },

  async getToken(): Promise<string | null> {
    const browserStorage = getBrowserStorage();
    return browserStorage?.getItem(TOKEN_KEY) ?? null;
  },

  async removeToken(): Promise<void> {
    getBrowserStorage()?.removeItem(TOKEN_KEY);
  },

  async saveRefreshToken(token: string): Promise<void> {
    const browserStorage = getBrowserStorage();
    if (browserStorage) {
      browserStorage.setItem(REFRESH_TOKEN_KEY, token);
    }
  },

  async getRefreshToken(): Promise<string | null> {
    const browserStorage = getBrowserStorage();
    return browserStorage?.getItem(REFRESH_TOKEN_KEY) ?? null;
  },

  async removeRefreshToken(): Promise<void> {
    getBrowserStorage()?.removeItem(REFRESH_TOKEN_KEY);
  },

  async clearAll(): Promise<void> {
    await Promise.all([this.removeToken(), this.removeRefreshToken()]);
  },
};
