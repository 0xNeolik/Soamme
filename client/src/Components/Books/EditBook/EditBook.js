import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusSmIcon } from "@heroicons/react/solid";
import UpdateBook from "./UpdateBook";

function EditBook(props) {
  const [isOpen, setOpen] = useState(false);

  let book = props.book;
  let loadBook = props.loadBook;

  let openModal = () => {
    setOpen(true);
  };

  let closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-center mt-2">
      <button
        type="button"
        onClick={openModal}
        className="relative inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 border-2 border-indigo-500 hover:bg-indigo-600 hover:text-white"
      >
        <PlusSmIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        <span>Editar libro</span>
      </button>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto "
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0 "
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className=" sm:inline-block sm:align-middle sm:h-12"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Fragment>
                <UpdateBook
                  close={closeModal}
                  book={book}
                  loadBook={loadBook}
                />
              </Fragment>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default EditBook;
