// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.
document.addEventListener('DOMContentLoaded', function () { // Waits until the document is fully loaded before running the given function
    let balloon = document.getElementById("balloon"); // Retrieves the balloon element by its ID
    let size = 20; // Sets the initial size of the balloon to 20 pixels
    document.addEventListener("keydown", function (event) { // Adds an event listener for keydown events
        if (balloon.innerHTML === "🎈") { // Checks for if the balloon emoji is displayed
            if (event.key === "ArrowUp") { // Checks if the up arrow key is the key being pressed
                size *= 1.1; // Increases the size of the balloon by 10%
                if (size > 100) { // Checks if the size of the balloon is greater than 100 pixels
                    balloon.innerHTML = "💥"; // Changes the balloon to an explosion emoji when past the 100px threshold
                    document.removeEventListener("keydown", arguments.callee); // Removes the event listener to stop further changes to the emoji
                } else {
                    balloon.style.fontSize = size + "px"; // Updates the font size of the balloon
                }
            } else if (event.key === "ArrowDown") { // Checks if the down arrow key is the key being pressed
                size *= 0.9; // Decreases the size of the balloon by 10%
                balloon.style.fontSize = size + "px"; // Updates the font size of the balloon
            }
        }
        event.preventDefault(); // Prevents the default action of the arrow keys, which would be scrolling the webpage
    });
});
// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it
