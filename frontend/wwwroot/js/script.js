document.getElementById('anexarForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('/api/anexar', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        const messageElement = document.getElementById('message');

        if (response.ok) {
            messageElement.textContent = result;
            messageElement.style.color = 'green';
        } else {
            messageElement.textContent = result;
            messageElement.style.color = 'red';
        }
    } catch (error) {
        document.getElementById('message').textContent = 'Error: ' + error.message;
        document.getElementById('message').style.color = 'red';
    }
});
