function showDialog(headMessage, bodyMessage){
    // Create the main dialog section
    const dialog = document.createElement('section');
    dialog.className = 'dialog';
    dialog.id = 'dialog';

    // Create the dialog box container
    const dialogBox = document.createElement('div');
    dialogBox.className = 'dialogBox';
    dialogBox.id = 'dialogBox';

    // Create the dialog head container
    const dialogHead = document.createElement('div');
    dialogHead.className = 'dialogHead';
    dialogHead.id = 'dialogHead';

    // Create the head content
    const headContent = document.createElement('h2');
    headContent.className = 'headContent';
    headContent.id = 'headContent';
    headContent.innerHTML = headMessage; 

    // Append head content to dialog head
    dialogHead.appendChild(headContent);

    // Create the dialog body container
    const dialogBody = document.createElement('div');
    dialogBody.className = 'dialogBody';
    dialogBody.id = 'dialogBody';

    // Create the body content
    const bodyContent = document.createElement('h3');
    bodyContent.className = 'bodyContent';
    bodyContent.id = 'bodyContent';
    bodyContent.innerHTML = bodyMessage;  

    // Append body content to dialog body
    dialogBody.appendChild(bodyContent);

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.onclick = function() {
        document.body.removeChild(dialog);
    };

    // Append all parts to the dialog box
    dialogBox.appendChild(dialogHead);
    dialogBox.appendChild(dialogBody);
    dialogBox.appendChild(closeButton);

    // Append the dialog box to the main dialog section
    dialog.appendChild(dialogBox);

    // Append the dialog section to the body
    document.body.appendChild(dialog);

    // Add event listener to close the dialog when clicking outside of the dialog box
    dialog.addEventListener('click', function(event) {
        if (event.target === dialog) {
            document.body.removeChild(dialog);
        }
    });

    // Add CSS styles for the dialog
    const style = document.createElement('style');
    style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');

    .dialog {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .dialogBox {
        background-image: url('../../assets/futuristic-city.jpg'); /* Add the path to your background image */
        background-size: cover;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 200px 0px rgba(0,0,0,0.87) inset;
        -webkit-box-shadow: 0px 0px 200px 0px rgba(0,0,0,0.87) inset;
        -moz-box-shadow: 0px 0px 200px 0px rgba(0,0,0,0.87) inset;
        max-width: 500px;
        width: 100%;
        display: flex;
        flex-direction: column; 
    }
    .dialogHead {
        color: white;
        word-wrap: break-word;
        font-weight: 600; 
        font-family: 'Roboto Condensed', sans-serif;
    }
    .dialogBody {
        color: white;
        margin-bottom: 20px;
        word-wrap: break-word;
        font-weight: 600; 
        font-family: 'Roboto Condensed', sans-serif;
    }
    .dialog button {
        display: block;
        margin: 0 auto;
        padding: 10px 20px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .dialog button:hover {
        background-color: #0056b3;
    }
    `;
    document.head.appendChild(style);
}

// Call this function