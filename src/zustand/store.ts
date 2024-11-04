import { create } from "zustand";
// Nutzer Form
type User = {
  name: string;
  email: string;
  password: string;
};

type UserState = {
  isAuthenticated: boolean;
  user: User | null;
  users: User[];
  admin: { email: string; password: string } | null;
  adminLogin: (email: string, password: string) => boolean;

  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
  loadUserFromLocalStorage: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  isAuthenticated: false,
  user: null,
  users: JSON.parse(localStorage.getItem("users") || "[]"),
  admin: { email: "admin@example.com", password: "admin123" },

  adminLogin: (email, password) => {
    const admin = { email: "admin@example.com", password: "admin123" };
    if (email === admin.email && password === admin.password) {
      set({ isAuthenticated: true, user: { name: "Admin", email, password } });
      return true;
    }
    alert("Admin-E-Mail oder Passwort ist falsch!");
    return false;
  },

  login: (email, password) =>
    set((state) => {
      const user = state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        localStorage.setItem("isAuthenticated", "true");
        return { isAuthenticated: true, user };
      }
      alert("Error!");
      return state;
    }),

  register: (name, email, password) => {
    set((state) => {
      const existingUser = state.users.find((user) => user.email === email);
      if (existingUser) {
        alert("E-Mail bereits registriert.");
        return state;
      }
      const newUser = { name, email, password };
      const updatedUsers = [...state.users, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return { users: updatedUsers };
    });
  },

  logout: () => {
    set({ isAuthenticated: false, user: null });
    localStorage.removeItem("isAuthenticated");
  },

  loadUserFromLocalStorage: () => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      set((state) => ({ isAuthenticated: true, user: state.user }));
    }
  },
}));

// Language State
type LanguageState = {
  language: "de" | "tr";
  changeLanguage: (lng: "de" | "tr") => void;
};

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "de",
  changeLanguage: (lng) => set({ language: lng }),
}));

// Theme State
type ThemeState = {
  theme: string;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

// Hausaufgaben-Upload
type UploadStore = {
  isUpLoading: boolean;
  setUpLoading: (status: boolean) => void;
};

export const useUploadStore = create<UploadStore>((set) => ({
  isUpLoading: false,
  setUpLoading: (status) => set({ isUpLoading: status }),
}));

// Commentlist

type Comment = {
  id: number;
  author: string;
  content: string;
  date: string;
};
type CommentStore = {
  comments: Comment[];
  addComment: (comment: Comment) => void;
  loadComments: () => void;
};

export const useCommentStore = create<CommentStore>((set) => ({
  comments: [],
  addComment: (comment) =>
    set((state) => {
      const updatedComments = [...state.comments, comment];
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      return { comments: updatedComments };
    }),
  loadComments: () => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      set({ comments: JSON.parse(storedComments) });
    }
  },
}));

// NewsStore
type NewsState = {
  category: string;
  setCategory: (category: string) => void;
};
export const useNewsStore = create<NewsState>((set) => ({
  category: "general",
  setCategory: (category) => set({ category }),
}));
