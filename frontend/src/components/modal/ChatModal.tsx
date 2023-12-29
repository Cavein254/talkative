import { FaPlus } from "react-icons/fa6";

const ChatModal = () => {
  return (
    <div className="flex justify-center my-4">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn w-[60%]"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <div className="flex justify-between items-center w-full text-lg font-bold dark:hover:bg-purple-400">
          <div className="">
            <FaPlus />
          </div>
          <div className="">New Chat</div>
        </div>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ChatModal;
