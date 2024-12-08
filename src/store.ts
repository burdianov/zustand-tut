import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

// export interface UserSlice {
//     username: string;
//     email: string;
//     setUsername: (username: string) => void;
//     setEmail: (email: string) => void;
// }

// export interface CompanySlice {
//     name: string;
//     location: string;
//     setName: (name: string) => void;
//     setLocation: (location: string) => void;
// }

// export const createUserSlice: StateCreator<UserSlice> = (set) => ({
//     username: "John",
//     email: "john@gmail.com",
//     setUsername: (username: string) => set(() => ({ username })),
//     setEmail: (email: string) => set(() => ({ email })),
// });

// export const createCompanySlice: StateCreator<CompanySlice> = (set) => ({
//     name: "JLW",
//     location: "Ibn Battuta Gate",
//     setName: (name: string) => set(() => ({ name })),
//     setLocation: (location: string) => set(() => ({ location })),
// });

// export const useAppStore = create(
//     devtools<UserSlice & CompanySlice>(
//         (...a) => ({
//             ...createUserSlice(...a),
//             ...createCompanySlice(...a),
//         })
//     )
// );

export interface UserStore {
    username: string;
    email: string;
    setUsername: (username: string) => void;
    setEmail: (email: string) => void;
}

export const useUserStore = create(
    devtools<UserStore>(
        (set) => ({
            username: "John",
            email: "john@gmail.com",
            setUsername: (username: string) => set(() => ({ username })),
            setEmail: (email: string) => set(() => ({ email })),
        })
    )
);

export interface Post {
    id: string;
    title: string;
    content: string;
}

export interface PostsStore {
    posts: Post[];
    setPosts: (posts: Post[]) => void;
}

export const usePostsStore = create(
    devtools<PostsStore>(
        (set) => ({
            posts: [],
            setPosts: (posts: Post[]) => set(() => ({ posts }))
        })
    )
);