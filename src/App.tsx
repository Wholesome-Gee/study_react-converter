import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components'
import Home from './Components/Home';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth:1023 });
  // const isDesktop = useMediaQuery({ minWidth: 1024 });
  
    return (
      <>
        <Helmet>
          <title>단위 변환기📏</title>
        </Helmet>
        <Container>
          <Home/>
          {/* {isMobile&&<Home/>} */}
          {/* {isTablet&&<Home/>} */}
          {/* {isDesktop&&<Home/>} */}
        </Container>
      </>
    )
}

export default App