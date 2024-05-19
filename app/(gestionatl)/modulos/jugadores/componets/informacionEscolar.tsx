import React, { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';

type SchoolFormData = {
    schoolarLevel: string;
    schoolarGrade: string;
    school: string;
};

const SchoolInfo: React.FC = () => {
    const { register, handleSubmit, watch } = useFormContext<SchoolFormData>();
    const selectedSchoolLevel = watch('schoolarLevel');

    const getSchoolGradeOptions = () => {
        switch (selectedSchoolLevel) {
            case 'Guardería':
                return <option value="Guardería">Guardería</option>;
            case 'Kinder':
                return (
                    <>
                        <option value="1ero">1ero</option>
                        <option value="2do">2do</option>
                        <option value="3ero">3ero</option>
                    </>
                );
            case 'Primaria':
                return (
                    <>
                        <option value="1ero">1ero</option>
                        <option value="2do">2do</option>
                        <option value="3ero">3ero</option>
                        <option value="4to">4to</option>
                        <option value="5to">5to</option>
                        <option value="6to">6to</option>
                    </>
                );
            case 'Secundaria':
                return (
                    <>
                        <option value="1ero">1ero</option>
                        <option value="2do">2do</option>
                        <option value="3ero">3ero</option>
                    </>
                );
            case 'Bachillerato o +':
                return <option value="Bachillerato o +">Bachillerato o +</option>;
            default:
                return null;
        }
    };

    return (
        <div>

            <div>
                <label>Nivel Escolar:</label>
                <select {...register("schoolarLevel")}>
                    <option value="">Seleccione el nivel escolar</option>
                    <option value="Guardería">Guardería</option>
                    <option value="Kinder">Kinder</option>
                    <option value="Primaria">Primaria</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Bachillerato o +">Bachillerato o +</option>
                </select>
            </div>
            {selectedSchoolLevel && (
                <div>
                    <label>Grado Escolar:</label>
                    <select {...register("schoolarGrade")}>
                        {getSchoolGradeOptions()}
                    </select>
                </div>
            )}
            <div>
                <label>Nombre de la Escuela:</label>
                <input type="text" {...register("school")} />
            </div>

        </div>

    );
};

export default SchoolInfo;
