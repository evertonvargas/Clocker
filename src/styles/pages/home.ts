import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  section{
    align-self: center;
    max-width: 350px;

    .title{
      color: var(--gray);
      font-size: 16px;
      padding: 35px 0 30px;
      text-align: center;
    }

    .formLogin{
      background: var(--bg-modal);
      padding: 30px;
      border-radius: 10px;

      form{
      display: flex;
      flex-direction: column;

      & label:nth-child(1), & label:nth-child(3){
        margin-bottom: 3px;
      }

        label{
          color: var(--white);
          font-size: 18px;
        }

        input{
          background: var(--background);
          border: 1px solid var(--border);
          height: 40px;
          border-radius: 5px;
          color: var(--gray);
          font-size: 14px;
          padding: 2px 10px;

          &:focus{
            outline:none;
          }
        }

        .space{
          margin-bottom: 20px;
        }


        button{
          color: var(--white);
          background: var(--pink);
          padding: 6px;
          border-radius: 6px;

          transition: filter .2s;

          &:hover{
            filter: brightness(0.9);
          }
        }

        div{
          display: flex;
          align-items: center;

          input{
            width: 100%;
            margin-left: 8px;
          }
        }
      }
    }
    
  }
`