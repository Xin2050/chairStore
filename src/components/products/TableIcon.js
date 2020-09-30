import React from 'react';

const TableIcon = ({row,colum,onClickHandle,onSelected}) => {

    const css = Number(onSelected)===Number(colum)?" sortBar__tableIcon--selected":"";

    const onClick=()=>{
        onClickHandle(colum);
    }


    const renderTableTD = ()=>{
        const tds = [];
        for(let i=0;i<colum;i++){
            tds.push(<td key={i}>&nbsp;</td>);
        }
        return tds;
    }

    const renderTableRow = ()=>{
        const tbody = [];
        const tds = renderTableTD();
        for(let i=0;i<row;i++){
            tbody.push(<tr key={i}>
                {tds}
            </tr>);
        }
        return tbody;
    }
    return (

        <div className="sortBar__gridIcon" onClick={onClick}>
            <table className={`sortBar__tableIcon${css}`}>
                <tbody>
                {renderTableRow()}
                </tbody>
            </table>
        </div>
    );
};

export default TableIcon;