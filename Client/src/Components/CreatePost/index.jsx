import { Avatar, Button, TextInput, Textarea } from "flowbite-react";
import React, { useState } from "react";
import CreatePostModal from "../Modals/CreatePostModal";
import IconPost from "../base/IconPost";

function CreatePost() {
  const [show, setShow] = useState(false);
  return (
    <div className="h-1/4 w-full rounded-lg shadow-lg p-2">
      <div className="flex gap-x-2">
        <div>
          <Avatar rounded />
        </div>
        <div className="w-full">
          <div className="bg-gray-100 rounded-2xl shadow-lg p-2 text-gray-400 hover:bg-gray-200 cursor-pointer" onClick={()=>setShow(true)}>What's happening?</div>
          <div className="flex gap-x-4 mt-2 justify-evenly text-sm">
            {/* <IconPost /> */}
            <div>
              <Button size="sm">Share</Button>
            </div>
          </div>
          <CreatePostModal show = {show} onClose={()=>setShow(false)}/>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
