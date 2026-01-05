const Colorcontent = ({ bgcolor, alto, ancho }) => {
  return (
    <div
      className={`text-center rounded-[50%] ${alto} ${ancho} ${bgcolor} block justify-center`}
    ></div>
  );
};

export default Colorcontent;
