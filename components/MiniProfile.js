function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14">
      <img
        className="w-16 h-16 rounded-full border p-[2px] "
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      ></img>
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Sarode</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  );
}

export default MiniProfile;
