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
