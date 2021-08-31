import { Button } from "./styles"
import { useTheme } from "../../hook/useTheme";
import Image from 'next/image'
import MoonDark from "../../../public/images/Moon.svg"
import MoonLight from "../../../public/images/Moon_Light.svg"

export function DarkMode(){
  const { theme, changeTheme } = useTheme();

  return(
    <Button onClick={()=>changeTheme()}>
      <Image src={theme.title === "light" ? MoonLight : MoonDark} alt="Moon Icon" width={32} />
      Dark Mode
    </Button>
  );
}