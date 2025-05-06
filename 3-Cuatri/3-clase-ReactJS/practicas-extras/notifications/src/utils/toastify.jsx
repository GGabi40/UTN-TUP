import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Configuración general del ToastContainer
export const ToastConfig = () => (
  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />
);

// Métodos reutilizables
export const notify = {
  success: (msg = "¡Éxito!") => toast.success(msg),
  error: (msg = "Ocurrió un error") => toast.error(msg),
  info: (msg = "Información") => toast.info(msg),
  warning: (msg = "Advertencia") => toast.warn(msg),
  loading: (msg = "Cargando...") => toast.loading(msg),

  // Cierre manual si hace falta
  dismiss: (id) => toast.dismiss(id),
  update: (id, options) => toast.update(id, options),
};
