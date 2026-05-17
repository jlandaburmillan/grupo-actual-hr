export type ContactPayload = {
  nombre: string;
  empresa: string;
  email: string;
  telefono?: string;
  necesidad: string;
  interes: string;
};

export type ContactValidationResult = {
  valid: boolean;
  errors: Partial<Record<keyof ContactPayload, string>>;
};

export function validateContactPayload(payload: Partial<ContactPayload>): ContactValidationResult {
  const errors: ContactValidationResult["errors"] = {};

  if (!payload.nombre || payload.nombre.trim().length < 2) {
    errors.nombre = "Ingresa tu nombre.";
  }

  if (!payload.empresa || payload.empresa.trim().length < 2) {
    errors.empresa = "Ingresa la empresa.";
  }

  if (!payload.email || !/^\S+@\S+\.\S+$/.test(payload.email)) {
    errors.email = "Ingresa un email válido.";
  }

  if (!payload.necesidad || payload.necesidad.trim().length < 12) {
    errors.necesidad = "Cuéntanos brevemente la necesidad.";
  }

  if (!payload.interes) {
    errors.interes = "Selecciona un interés principal.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}
