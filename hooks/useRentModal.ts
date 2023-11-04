import { create } from 'zustand';

interface RentModalStore {
    isOPen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRentModal = create<RentModalStore>((set) => ({
    isOPen: false,
    onOpen: () => set({ isOPen: true }),
    onClose: () => set({ isOPen: false })
}))

export default useRentModal;