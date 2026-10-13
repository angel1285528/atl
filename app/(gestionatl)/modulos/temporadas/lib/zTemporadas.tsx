import { z } from "zod";

export const zTemporadas = z.object ({
    Temporada: z.string(),
    fechaInicioTemporada: z.date(),
    fechaFinTemporada: z.date(),
}); 