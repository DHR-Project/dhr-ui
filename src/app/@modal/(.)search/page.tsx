import { Modal } from "@/components/molecules/ModalWrapper";
import SearchPage from "@/components/pages/Search";

export default function SearchModal() {
  return (
    // <ModalWrapper initial={true}>
    <Modal
      // className="absolute h-screen w-screen inset-0 bg-white"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ stiffness: 100, staggerChildren: 0.5 }}
      href="/search"
    >
      <SearchPage />
    </Modal>
    // </ModalWrapper>
  );
}
