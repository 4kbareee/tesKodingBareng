document.addEventListener('DOMContentLoaded', () => {
    getWarga();
});


// implementasi frontend
const tablebody = document.querySelector('#warga-list');

const getWarga = () =>{
    fetch('http://localhost:3000/getWarga',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(dataWarga => {

        dataWarga.data.forEach(data =>{
            tablebody.innerHTML += `
            <tr>
                <td>${data.id_warga}</td>
                <td>${data.nama_warga}</td>
                <td>${data.usia_warga}</td>
                <td>${data.status}</td>
             </tr>
            ` 
        });
    });
};





//  function biasa
function inifunction(){

};


// arrow function
const inifunction = () =>{

};
