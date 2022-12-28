import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  
`

export const Table = styled.table`
  width: 80%;
  height: 85vh;
  padding: 20px;
  margin: 20px;
  background-color: #ECEDEF;
  border-radius: 10px;
`

export const TableHead = styled.thead`
  display: block;
`

export const TableBody = styled.tbody`
  display: block;
  height: 85%;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 20px;
  }
`


export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  height: 65px;
  cursor: pointer;
  align-items: center;
  word-wrap: break-all; 


  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  color: #000;
  border-bottom: 1px solid gray;

`
export const TableData = styled.td`
    width: 200px;
   
`
export const TableDatas = styled.td`
    width: 600px;
    text-align: end;
`

export const TableRowHeader = styled(TableRow)`
    
`

export const TableHeadData = styled.th`
`
