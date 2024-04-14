"use client";

const HomePage = () => {
  const handleButton = () => {
    alert("handleButton");
  };
  return (
    <>
      <button onClick={() => handleButton()}>Click me</button>
      <ChildrenSeaction fullName="Tamaghna" lastName="Ghosh" />
      {ChildrenSeaction({ fullName: "Tamaghna", lastName: "Ghosh" })}
    </>
  );
};
export default HomePage;

const ChildrenSeaction = (props) => {
  console.log("🚀 ~ ChildrenSeaction ~ props:", props);
  return <h1>ChildrenSeaction</h1>;
};
