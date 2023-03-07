import Spline from '@splinetool/react-spline';
import styled from "styled-components"
import Form from './form';

export default function Keyboard() {
  return (
    <Wrapper>
      
      <Spline className='Spline' scene="https://prod.spline.design/nzosY2x49J4Bt4Ob/scene.splinecode" />
    <Content><Form/></Content>
    
    </Wrapper>
    
  );
}



const Wrapper = styled.div `
   

    .Spline {
        position : absolute ; 
        margin : 0 ;
        top:0;
        right : 0 ;
        
    }




`
const Content = styled.div ` 
    
    position : absolute ;
    right : 780px ;
    

`



