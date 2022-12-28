import React, { useState, useEffect } from "react";

import { URL } from "../Config";

import { Container, Table, TableBody, TableHead, TableRowHeader, TableHeadData, TableRow, TableData, TableDatas } from "./style";

export default function List() {
    const [quotes, setQuotes] = useState([]);

    const sortedData = quotes.sort((a, b) =>  a.author < b.author ? -1 : a.author > b.author ? 1 : 0);

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((json) => setQuotes(json));
    }, [])


    return (
        <Container>
            <Table>
                <TableHead>
                    <TableRowHeader>
                        <TableHeadData>AUTHOR</TableHeadData>
                        <TableHeadData>PHRASES</TableHeadData>
                    </TableRowHeader>
                </TableHead>

                <TableBody>
                    {sortedData?.map((quote, id) => (
                        <TableRow key={id}>
                            <TableData>{quote.author ? quote.author : "Unknown"}</TableData>
                            <TableDatas>{quote.text}</TableDatas>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}
