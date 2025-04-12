/* eslint-disable react/prop-types */
const Wrapper = ({ children }) => {
  return (
    <div className="relative w-full max-w-[1360px] px-4 sm:px-[4vw] mx-auto">
      {children}
    </div>
  );
};

export default Wrapper;
