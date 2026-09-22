import { Background } from "./styles";
import UsersImage from "../../assets/users.png";

function TopBackground({ children, ...props }) {
  return (
    <Background>
      <img src={UsersImage} alt="Usuários" />
    </Background>
  );
}

export default TopBackground;
