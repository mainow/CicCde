function RotatingWord({ words, className }) {

    let duration = words.length;
    let style = { animation: `movewords ${duration}s infite alternate` };
    let stylesheet = document.styleSheets[0];
    let keyframes = `
    @-webkit-keyframes movewords {
        0% { transform: translateY(-100%) }
        100% { transform: translateY(100%) }
    }`;

    return (
        <div style={style}>
            { words.map(word => <span key={word}>{word}</span>) }
        </div>
    );
}

export default RotatingWord;