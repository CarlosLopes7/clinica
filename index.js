

const prompt = require("prompt-sync")({ sigint: true });

let pacientes = [];

while (true) {
    console.log(`
    //     === Agenda de consultas médicas ===
    //     1. Adicionar uma nova consulta
    //     2. Listar todas as consultas
    //     3. Atualizar uma consulta existente
    //     4. Cancelar uma consulta
    //     `);

    let opcao = prompt("Escolha uma opção: ");

    if (opcao === "1") {
    let paciente = prompt("Nome do paciente: ");
    let medico = prompt("Nome do medico: ");
    let data = prompt("Data da consulta: ");
    let hora = prompt("Hora da consulta: ");

    pacientes.push({ paciente, medico, data, hora });
    console.log("Consulta criada com sucesso!", pacientes);


    } else if (opcao === "2") {
        if (pacientes.length === 0) {
        console.log("Listar consultas agendadas.");
        break;
            } else {
            pacientes.forEach((pacientes, index) => {
            console.log(
            `${index + 1}. ${pacientes.paciente} - ${pacientes.medico} - ${pacientes.data} - ${pacientes.hora}`
        );
        });
        };
    } if (opcao === "3") {
        console.log('Digite o número da consulta a ser alterada');
        pacientes.forEach((pacientes, index) => {
            console.log(
            `${index + 1}. ${pacientes.paciente} - ${pacientes.medico} - ${pacientes.data} - ${pacientes.hora}`)
            });
            let escolha = prompt ('consulta a ser modificada');
            pacientes.pop(escolha - 1);

            let paciente = prompt("Nome do paciente: ");
            let medico = prompt("Nome do medico: ");
            let data = prompt("Data da consulta: ");
            let hora = prompt("Hora da consulta: ");
            pacientes.push({ paciente, medico, data, hora });

        }else if (opcao === "4"){
        console.log('Digite o numero da consulta a ser alterada: ');
        pacientes.forEach((pacientes, index) => {
            console.log(
            `${index + 1}. ${pacientes.paciente} - ${pacientes.medico} - ${pacientes.data} - ${pacientes.hora}`)
            });
            let escolha = prompt('consulta a ser excluida: ');
            pacientes.pop(escolha - 1);
    }else if (opcao === '0'){
        console.log('saindo do sistema.');
        break;
    // } else {
    //     console.log('opção invalida. tente novamente');
    }
    }