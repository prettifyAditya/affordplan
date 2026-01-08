import { create } from 'zustand';

export const useModalStore = create((set) => {
  const closeAll = () =>
    set({
      isHamOpen: false,
      isEnquireOpen: false,
      isVideoOpen: false,
      isTeamPopOpen: false,
      isPositionsOpen: false,
      isThankyouOpen: false,
      selectedTeamMember: null,
      selectedPosition: null,
    });

  return {
    isHamOpen: false,
    isEnquireOpen: false,
    isVideoOpen: false,
    isTeamPopOpen: false,
    isPositionsOpen: false,
    isThankyouOpen: false,
    selectedTeamMember: null,
    selectedPosition: null,

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

    openTeamPop: (memberData) => {
      closeAll();
      set({ isTeamPopOpen: true, selectedTeamMember: memberData });
    },
    closeTeamPop: () => set({ isTeamPopOpen: false, selectedTeamMember: null }),
    
    openPositionsPop: (positionData) => {
      closeAll();
      set({ isPositionsOpen: true, selectedPosition: positionData });
    },
    closePositionsPop: () => set({ isPositionsOpen: false, selectedPosition: null }),

    openThankyouPop: () => {
      closeAll();
      set({ isThankyouOpen: true });
    },
    closeThankyouPop: () => set({ isThankyouOpen: false }),

    closeAll,
  };
});