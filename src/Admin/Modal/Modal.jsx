
export const Modal = ({ isOpen, onClose, children, title }) => {
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
            <div className="bg-white rounded-lg p-6 z-10" style={modalStyle}>
                <div className="relative">
                <button
                    className="absolute -top-1 right-1 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    X
                </button>
                <h1 className="font-bold">{title}</h1>
                {children}
            </div>
        </div>
    </div>
  );
};

