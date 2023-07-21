import React from "react";
import { useState } from "react";

interface ElementsForm {
  id: string;
  date: string;
  distance: string;
  classDistance: string;
}
interface funcLineTask {
  props: Function
}

export const ElementInput = ({props}: funcLineTask) => {
  const [form, setForm] = useState<ElementsForm>({
    id: "",
    date: "",
    distance: "",
    classDistance: "style-distance"
  });
  let classErrorNum = 'style-distance';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.date || !form.distance || !/^(0|[1-9]\d*)(\.[0-9]{1,2})?$/.test(form.distance) || form.distance === '0') return;
    let [year, month, day]  = form.date.split("-");
    let create = Math.round(new Date(Number(year), Number(month)-1, Number(day)).getTime()/1000)

    props ({
      id: `${Date.now()}`,
      dateTask: create,
      date: form.date,
      distance: Number(form.distance)
    })
    form.distance = '';
    form.date = '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    classErrorNum = 'style-distance';
    if (name === 'distance' && !/^(0|[1-9]\d*)(\.[0-9]{1,2})?$/.test(value)) {
      classErrorNum = 'style-distance error-num';
    }
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
      classDistance: classErrorNum
    }));
  };
  
  return (
    <form className="container-input" autoComplete="off" onSubmit={handleSubmit}>
      <input
        id="date"
        className="style-date"
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
      />
      <input
        id="distance"
        className={form.classDistance}
        name="distance"
        type="text"
        value={form.distance}
        onChange={handleChange}
      />
      <button type="submit" className="btn-form">OK</button>
    </form>
  )
}
