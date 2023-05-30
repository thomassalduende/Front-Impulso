import React from 'react';

export const BotonConfirmar = ({ onCancel, onConfirm }) => {
  return (
    <div className="p-6">
      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded mr-2"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={onConfirm}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

