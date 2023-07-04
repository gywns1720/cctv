import { Box } from '@chakra-ui/react';
import { IKakaoMapCenterProps } from './components/kakaoMap/type/mapType.ts';
import { KakaoMap } from './components/kakaoMap/KakaoMap.tsx';
import { MenuList } from './components/menu/MenuList.tsx';

function App() {
  const mapProps: IKakaoMapCenterProps = { lat: 36.4838071937, lng: 127.2948112797 };

  return (
    <Box w={'100vw'} h={'100vh'} bg={'#fefefe'} id={'map'} position={'relative'}>
      <KakaoMap center={mapProps}></KakaoMap>
      <Box position={'absolute'} zIndex={10} minW={'32rem'} left={0} top={0}>
        <MenuList></MenuList>
      </Box>
    </Box>
  );
}

export default App;
