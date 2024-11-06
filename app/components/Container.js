// a Container component that wraps any child elements passed to it within a structured layout
const Container = ({ children }) => {
  return (
    <div className="content">
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </div>
  );
};

export default Container;
