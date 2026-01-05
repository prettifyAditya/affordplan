import { create } from 'zustand';

export const useModalStore = create((set) => {
  const closeAll = () =>
    set({
      isHamOpen: false,
      isEnquireOpen: false,
      isVideoOpen: false,
      isTeamPopOpen: false,
    });

  return {
    isHamOpen: false,
    isEnquireOpen: false,
    isVideoOpen: false,
    isTeamPopOpen: false,

    openHam: () => {
      closeAll();
      set({ isHamOpen: true });
    },
    closeHam: () => set({ isHamOpen: false }),

    openEnquire: () => {
      closeAll();
      set({ isEnquireOpen: true });
    },
    closeEnquire: () => set({ isEnquireOpen: false }),

    openVideo: () => {
      closeAll();
      set({ isVideoOpen: true });
    },
    closeVideo: () => set({ isVideoOpen: false }),

    openTeamPop: () => {
      closeAll();
      set({ isTeamPopOpen: true });
    },
    closeTeamPop: () => set({ isTeamPopOpen: false }),

    closeAll,
  };
});
