/**
 * Cell
 * Width-limiting container
 */

import styled from "styled-components";

const Cell = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 0 5px 1rem 0 rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin-top: 10%;
  border-radius: 20px;
`;

export default Cell;
