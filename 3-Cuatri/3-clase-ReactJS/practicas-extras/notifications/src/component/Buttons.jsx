import React from 'react'
import { ToastConfig, notify } from '../utils/toastify';

const Buttons = () => {
  
  // Funcion para mostrar carga
  const showLoadingThenSuccess = () => {
    const id = notify.loading('Procesando...');
    setTimeout(() => {
      notify.update(id, {
        render: '¡Completado!',
        type: 'success',
        isLoading: false,
        autoClose: 2000,
      });
    }, 2000);
  };

  return (
    <div>
      <button onClick={() => notify.success('Todo OK!')}>Success</button>
      <button onClick={() => notify.error('Algo falló')}>Error</button>
      <button onClick={() => notify.info('Dato curioso')}>Info</button>
      <button onClick={() => notify.warning('Cuidado')}>Warning</button>
      <button onClick={showLoadingThenSuccess}>Loading</button>

      <ToastConfig />
    </div>
  )
}

export default Buttons