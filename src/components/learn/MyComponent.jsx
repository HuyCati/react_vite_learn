import "./style.css";

//component = html + css + js
const MyComponent = () => {
  return (
    <>
      <div>Huy & Reactjs</div>
      <div
        className="child"
        style={{
          borderRadius: "10px",
        }}
      >
        child
      </div>
    </>
  );
};

export default MyComponent;
