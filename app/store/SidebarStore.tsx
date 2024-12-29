import { create } from "zustand";

interface SidebarState {
    isSidebarOpened: boolean;
    handleToggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>()((set) => ({
    isSidebarOpened: false,
    handleToggleSidebar: () =>
        set((state) => ({ isSidebarOpened: !state.isSidebarOpened })),
}));
