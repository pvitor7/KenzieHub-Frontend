import styled from "styled-components";

export const PageFormsMobile = styled.div`

    display: flex;
    width: 100vw;
    height: 100vh;
    min-height: 568.47px;
    min-width: 320px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:  #191919;
    padding: 30px 0;


    section {
     display: flex;
     width: calc(100% - 20px);
     max-width: 500px;
     justify-content: space-between;
    }

    button {

     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     padding: 0px 16.2426px;

     width: 80px;
     height: 30px;
     margin: 20px 0;
     font-size: 10px;

     /* grey-3 */
     color: rgba(248, 249, 250, 1);
     background: rgba(33, 37, 41, 1);
     border-radius: 4px;
     border: none;
 }
 
`

export const StyledForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 20px);
    max-width: 500px;
    height: calc(100% - 60px);
    padding: 20px 0;
    background-color: #212529;
   
    h2 {
     font-family: 'Inter', sans-serif;
     font-weight: 700;
     font-size: 15px;
     line-height: 22px;
    
     color: #F8F9FA;
 }

   
 p{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #868E96;
    }

 button{
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     padding: 0px 22.3336px;

     position: static;
     width: calc(100% - 40px);
     max-width: 300px;
     height: 40px;

     color: rgba(255, 255, 255, 1);
     background: #59323F;

     border: 1.2182px solid #59323F;
     border-radius: 4px;

     /* Inside auto layout */

     flex: none;
     order: 7;
     flex-grow: 0;
     margin: 14px 0px
 }

`

export const StyledSection = styled.div`

     display: flex;
     flex-direction: column;
     justify-content: space-around;
     height: 15%;
     width: calc(100% - 50px);
     max-width: 400px;
     align-items: flex-start;
     margin: 0 40px;


label{
     
     color: #F8F9FA;
     font-size: 10px;
    }


 input {
     box-sizing: border-box;
     border-radius: 3.19812px;
     background: #343B41;
     padding: 0px 12.9865px;
     width: 100%;
     height: 50%;
     border: none;
 }

`
export const StyledSelect = styled.select`

     display: flex;
     width: 100%;
     height: 40px;
     box-sizing: border-box;
     border-radius: 3.19812px;
     background: #343B41;
     padding: 0px 12.9865px;
     border: none;
     color: #868E96;
`