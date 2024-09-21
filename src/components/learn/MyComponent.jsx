import "./style.css";

//component = html + css + js
const MyComponent = () => {
  const name = "HuyLuong"; //string
  const number = 23; //number
  const textBoolean = true; //boolean
  //   const check = undefined; //! underfined
  const check = null;
  const checkArray = [1, 2, 3]; //array
  const checkObject = {
    name: "Cati",
    age: 25,
  };
  return (
    <>
      <div>{JSON.stringify(checkObject)} & Reactjs</div>
      <div>{console.log("HuyLuong")}</div>
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
