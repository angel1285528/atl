import { z } from "zod";

export const zTemporadas = z.object ({
    Periodo: z.string(),
    fechaInicioTemporada: z.date(),
    fechaFinTemporada: z.date(),
}); 