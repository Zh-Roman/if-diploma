import styled from "styled-components";

export const StyleCategoryCard = styled.div`
  background-color: var(--category-bgc);
  padding: calc(var(--index) * 0.878) 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CategoryIcon = styled.div`
  margin-right: calc(var(--index) * 0.4);

  .category_icon {
    height: calc(var(--index) * 2.2);
    max-width: calc(var(--index) * 2.2);
  }
`;
export const CategoryTitle = styled.div`
  font-weight: 400;
  font-size: calc(var(--index) * 1.05);
  line-height: calc(var(--index) * 1.756);
`;
