import styled from "styled-components";

export const StyledArticleEditorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  width: 100%;
`;

export const StyledEditorFunctionsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  padding: 10px;
  border: 1px solid black;
`;

export const StyledFunctionsIcon = styled.img`
  width: 24px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledFunctionsBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
`;

export const StyledButton = styled.button`
  margin-right: 20px;
`;

export const StyledImageUrlListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledImageUrlList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 780px;
  margin-top: 50px;

  img {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  img:nth-of-type(6n) {
    margin-right: 0px;
  }
`;

export const StyledImageUrl = styled.img`
  width: 110px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledImageFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
