import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  section{
    align-self: center;

    div.rectangle{
      background: var(--bg-modal);
      border-radius: 10px;
      margin-top: 40px;
      padding: 10px 10px 20px 10px;

      >p{
        color: var(--gray);
        font-size: 12px;
        text-align: center;
        padding: 15px 0 30px;
      }

      .structure{
        display: flex;
        min-width: 320px;
        align-items: center;
        justify-content: space-between;
        color: var(--white);
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 6px;
        padding: 10px;
        margin: 10px;
        
        p{
          font-size: 14px;
          color: var(--gray);
        }

        div{   
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          & p:nth-child(1){
            letter-spacing: 1px;
            font-weight: bold;
            margin-bottom: 5px;
          }
        }
      }

      .free{
        text-align: center;
        color: var(--green);
        border: 1px solid var(--green);
        padding: 17px;
        margin: 0 10px;
        border-radius: 6px;

        p{
          font-size: 14px;
        }        
      }
    }
  }

  
`