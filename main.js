document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('lista-contatos');
    const tableBody = document.querySelector('table tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

       
        const nome = document.getElementById('nome').value;
        const numero = document.getElementById('numero').value;

       
        const newRow = document.createElement('tr');

       
        const nameCell = document.createElement('td');
        const numberCell = document.createElement('td');

        
        nameCell.textContent = nome;
        numberCell.textContent = numero;

        
        newRow.appendChild(nameCell);
        newRow.appendChild(numberCell);

       
        tableBody.appendChild(newRow);

       
        form.reset();
    });
});
