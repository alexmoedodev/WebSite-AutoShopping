"use client";

// Imports Components
import { Button } from "@/src/components/ux/Button";
import { Select } from "@/src/components/ux/Select";

//Import Icons
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoBookmarksOutline } from "react-icons/io5";
import { IoLogoModelS } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

//Imports dataCars
import { cars } from "@/src/data/dataCars";

import { useState } from "react";

type FilterCars = {
  modelo: string;
  ano: number;
  marca: string;
};

export function SearchFilter() {
  // Remove cars with year

  const markUnique = [...new Set(cars.map((car) => car.marca))];
  const modelsUnique = [...new Set(cars.map((car) => car.modelo))];
  const yearUnique = [...new Set(cars.map((car) => car.ano))].sort(
    (a, b) => a - b
  );

  const [filter, setFilter] = useState<FilterCars>({
    marca: "",
    ano: 0,
    modelo: "",
  });
  const filtered = cars.filter((car) => car.marca === filter?.marca);

  console.log(filtered);

  return (
    <>
      {/* Container Filter */}
      <div className="bg-white w-5/6 mx-auto max-w-5xl md:w-full grid grid-cols-1 md:grid-cols-4 p-2 rounded-md items-end  gap-5 py-6 px-10">
        {/* pickup Mark */}
        <Select
          icon={<IoBookmarksOutline className="text-blue-500" />}
          label="Marcas"
          title="Selecione a Marca"
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, marca: e.target.value }))
          }
        >
          <option value="" disabled>
            Selecione a marca
          </option>
          {markUnique.map((mark) => (
            <option value={mark} key={mark}>
              {mark}
            </option>
          ))}
        </Select>

        {/* pickup Models */}
        <Select
          icon={<IoLogoModelS className="text-blue-500" />}
          label="Modelos"
          title="Selecione o Modelo"
        >
          <option value="">Selecione o modelo</option>
          {modelsUnique.map((models) => (
            <option value={models} key={models}>
              {models}
            </option>
          ))}
        </Select>

        {/* pickup year */}
        <Select
          icon={<IoCalendarNumberOutline className="text-blue-500" />}
          label="Ano"
          title="Selecione o Ano"
        >
          <option value="">Selecione o ano</option>
          {yearUnique.map((ano) => (
            <option value={ano} key={ano}>
              {ano}
            </option>
          ))}
        </Select>

        <Button variant="blue" className="w-full" title="Pesquisar">
          <IoSearchSharp />
          Pesquisar
        </Button>
      </div>
    </>
  );
}
