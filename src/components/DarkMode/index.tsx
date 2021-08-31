import { Button } from "./styles"
import { useTheme } from "../../hook/useTheme";

export function DarkMode(){
  const { theme, changeTheme } = useTheme();

  return(
    <Button onClick={()=>changeTheme()}>
      <img src={theme.title === "light" ? "/images/Moon_Light.svg" : "/images/Moon.svg"} alt="icon" />  Dark Mode
    </Button>
  );
}