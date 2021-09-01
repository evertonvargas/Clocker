import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { addDays, subDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Container } from "./styles";

export function DatePicker() {
  const [date, setDate] = useState(() => new Date());

  const removeDay = () => setDate(subDays(date, 1));
  const addDay = () => setDate(addDays(date, 1));
  const formatDate = (date: Date, pattern: string) =>
    format(date, pattern, { locale: ptBR });

  return (
    <Container>
      <button onClick={removeDay}>
        <MdKeyboardArrowLeft />
      </button>
      <p>{formatDate(date, "PPPP")}</p>
      <button onClick={addDay}>
        <MdKeyboardArrowRight />
      </button>
    </Container>
  );
}
