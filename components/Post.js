import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, img, username, caption, userImg }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt="userImage"
        />
        <p className="flex-1 font-bold">{username} </p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* img */}
      <div>
        <img src={img} alt="img" className="object-cover w-full" />
      </div>

      {/* button */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="button" />
          <ChatIcon className="button" />
          <PaperAirplaneIcon className="button" />
        </div>
        <div>
          <BookmarkIcon className="button" />
        </div>
      </div>
      {/* caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>
      {/* comments */}
      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add coments.."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
