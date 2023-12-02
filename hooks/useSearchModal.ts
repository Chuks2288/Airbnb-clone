import { create } from 'zustand';

interface SearchModalStore {
    isOPen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSearchModal = create<SearchModalStore>((set) => ({
    isOPen: false,
    onOpen: () => set({ isOPen: true }),
    onClose: () => set({ isOPen: false })
}))

export default useSearchModal;