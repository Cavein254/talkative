const MessageProp = () => {
  const url =
    "https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="flex items-center mt-2 border-b-[1px] dark:border-gray-600 pb-2">
      <div>
        <img src={url} alt="user image" className="rounded-full w-[50px]" />
      </div>
      <div className="pl-2">
        <h5 className="font-bold">George Linderman</h5>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          numquam.
        </p>
      </div>
    </div>
  );
};

export default MessageProp;
