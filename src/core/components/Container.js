import _uniqueId from 'lodash/uniqueId';

function Container({ children, className, style, 
                    showFromBreakPoint, hideOnBreakPoint, flexBreakPoint,
                    grid, gridColumn="300px", gridBreakPoint }) {
    
    const gridAlign = !grid ? {} : {
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${gridColumn}, 1fr))`,
        justifyItems: "center",
        alignItems: "center",
    };

    const containerStyle = {
        ...gridAlign
    };

    // if (responsiveGrid) {
        // for (var i=0; i < bigarray.length; i += size) {
        //     arrayOfArrays.push(bigarray.slice(i,i+size));
        // }
    // }

    const id = `custom-container-${_uniqueId()}`;

    const display = `
        ${showFromBreakPoint ? `
        #${id} {
            display: none !important;
        }
        @media (min-width: ${showFromBreakPoint}) {
            #${id} {
                display: grid !important;
            }
        }` : ""}

        ${hideOnBreakPoint ? `
        @media (min-width: ${hideOnBreakPoint}) {
            #${id} {
                display: none !important;
            }
        }` : ""}

        ${flexBreakPoint ? `
        @media (max-width: ${flexBreakPoint}) {
            #${id} {
                flex-direction: column;
            }
        }
        `: ""}
    `;

    const gridTemplateColumns = `
        ${gridBreakPoint ? `
        @media (max-width: ${gridBreakPoint.maxWidth}) {
            #${id} { 
                grid-template-columns: repeat(auto-fit, minmax(${gridBreakPoint.columnWidth}, 1fr)) !important;
            }
        }` : ""}
    `

    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `${display} ${gridTemplateColumns}`}}></style>
            <div style={{ ...containerStyle, ...style }} id={id} className={`custom-container ${className}`}>
                { children }
            </div>
        </>
    );
}

export default Container;