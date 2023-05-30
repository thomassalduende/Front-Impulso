export const Product = ({ product }) => {
  return (
    <div className="mx-auto my-8 w-64 h-auto md:w-80 md:h-auto shadow-md overflow-hidden bg-white transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-95">
      <a href="#" className="text-black no-underline flex flex-wrap">
        <img src={product.images} alt={product.nombre} className="w-full h-48 md:h-56 object-cover mt-4" />
        <div className="p-4">
          <h2 className="text-lg font-bold mt-2">{product.nombre}</h2>
          <p className="mt-4">${product.precio}</p>
          <p className="mt-4">{product.descripcion}</p>
          {/* Aquí puedes agregar más atributos */}
        </div>
      </a>
    </div>
  );
};
