import * as S from './styles';
import LogoImg from '../../assets/logo.png';

const Logo = () => {
  return (
    <S.Container>
      <img src={LogoImg} alt="Logo financial" />
      <S.LogoName>Bank</S.LogoName>
    </S.Container>
  );
};

export default Logo;
