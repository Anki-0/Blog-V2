import * as S from '../../../styles/Sidebar.style';
import { WbSunnyTwoTone, NightsStayTwoTone } from '@material-ui/icons';

import { useThemeTogglerValue } from '../../Context/ThemeTogglerContext';

const ThemeSwitcher = (): JSX.Element => {
  const { isDark, setIsDark } = useThemeTogglerValue();

  return (
    <S.ThemeSwitch onClick={() => setIsDark(!isDark)}>
      <S.Box />
      <S.Icon>
        {isDark ? <NightsStayTwoTone className='icon' /> : <WbSunnyTwoTone className='icon' />}
      </S.Icon>
    </S.ThemeSwitch>
  );
};
export default ThemeSwitcher;
