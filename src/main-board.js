javascript:(function() {
    // Hide everything on the page
    let body = document.querySelector("body");
    body.style.visibility = "hidden";
    body.style.overflow = "hidden";

    // Get the wrapper for the board, make it the same size as the window, and center its contents
    let wrapper = document.querySelector('#main_board_wrapper');
    wrapper.style.visibility = "visible";
    wrapper.style.position = "fixed";
    wrapper.style.top = "0";
    wrapper.style.left = "0";
    wrapper.style.margin = "0";
    wrapper.style.padding = "0";
    wrapper.style.width = "100vw";
    wrapper.style.height = "100vh";
    wrapper.style.display = "flex";
    wrapper.style.justifyContent = "center";
    wrapper.style.alignItems = "center";

    // Get the board
    let board = document.querySelector("#main_board");

    // Remove the goals
    let goals = document.querySelector("#goals");
    goals.style.display = "none";

    // This function scales the board to the size of the wrapper/window
    let scaleTheBoard = () => {
        // Reset the scale to get ratio measurements
        board.style.transform = 'scale(1)';
        
        // Get board width/height and wrapper width/height
        let { width: bw, height: bh } = board.getBoundingClientRect();
        let { width: ww, height: wh } = wrapper.getBoundingClientRect();
        
        // Calculate the wrapper/board scale ratio
        let ratio = Math.min(ww / bw, wh / bh);
        
        // Apply the scale transformation with the ratio
        board.style.transform = `scale(${ratio})`;    
    };

    scaleTheBoard();
    window.onresize = scaleTheBoard;
}());