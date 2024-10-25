/* eslint-disable react/prop-types */
function Greeting({ name, pos }) {
  return (
    <p className="sayeed">
      Hi, {name || "User"}! {pos ? pos : ""}
    </p>
  );
}

export default Greeting;
