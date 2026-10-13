'use client'
import { useEffect, useState } from 'react';
import { countAsistencia } from '../lib/crudAsistencia';

type ContadorAsistenciaProps = {
  jornadaId: number;
};

const ContadorAsistencia: React.FC<ContadorAsistenciaProps> = ({ jornadaId }) => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCount() {
      try {
        const result = await countAsistencia(jornadaId);
        setCount(result);
      } catch (error) {
        console.error("Error fetching asistencia count", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCount();
  }, [jornadaId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Total Asistencias: {count}</h2>
    </div>
  );
};

export default ContadorAsistencia;
