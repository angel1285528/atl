'use client'

import { z } from 'zod'

const NuevaCompetenciaSchema = z.object({
    nombreTorneo: z.string(),
    periodoTorneo: z.string(),
    sedeTorneo: z.string(),
    organizadorTorneo: z.string(),
    categoriasTorneo: z.array(z.string()),
})