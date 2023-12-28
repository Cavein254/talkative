import MessageProp from "../messageprop/MessageProp";

const MinorSidebar = () => {
  return (
    <div role="tablist" className="tabs tabs-bordered">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="New Messages"
      />
      <div role="tabpanel" className="tab-content p-4">
        <MessageProp />
        <MessageProp />
        <MessageProp />
        <MessageProp />
        <MessageProp />
        <MessageProp />
        <MessageProp />
      </div>
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="My Groups"
        checked
      />
      <div role="tabpanel" className="tab-content p-4">
        <MessageProp />
        <MessageProp />
        <MessageProp />
      </div>
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Groups"
      />
      <div role="tabpanel" className="tab-content p-4">
        <MessageProp />
        <MessageProp />
        <MessageProp />
        <MessageProp />
      </div>
    </div>
  );
};

export default MinorSidebar;
