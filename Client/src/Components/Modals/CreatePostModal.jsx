import React, { useState } from "react";
import BaseModal from "../base/BaseModal";
import { Button, Textarea, TextInput } from "flowbite-react";
import IconPost from "../base/IconPost";

function CreatePostModal({ show, onClose, title }) {
  const [toggleNext, setToggleNext] = useState(false);
  const [images, setImage] = useState([]);
  let imagesData = [...images];
  const updateImage = (e) => {
    imagesData = [...images, e.target.files[0]];
    setImage(imagesData);
  };
  return (
    <BaseModal height="50rem" show={show} onClose={onClose} title="Create Post">
      <div className="h-full flex flex-col">
        <div className="flex flex-col gap-y-3">
          <div>
            <Textarea
              className="border-none text-xl focus:ring-0 bg-white focus:border-none"
              placeholder="Enter the description..."
              rows={3}
            />
          </div>
          <div className="w-full h-28 inline-flex gap-x-1 overflow-x-auto">
            {imagesData.map((i) => (
              <div className="min-w-24 max-w-24 max-h-24 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={URL.createObjectURL(i)}
                ></img>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <div className="flex justify-evenly my-2 border p-4 rounded-lg border-gray-300">
            <IconPost updateImage={updateImage} />
          </div>
          <div className="ml-auto mt-4 w-fit flex gap-x-2">
            <Button
              color="gray"
              className=""
              onClick={() => setToggleNext(false)}
            >
              Back
            </Button>
            <Button onClick={() => setToggleNext(true)}>Next</Button>
          </div>
        </div>
      </div>
    </BaseModal>
  );
}

export default CreatePostModal;
