/* 
1. criar uma nova reserva
    - nome do solicitante
    - data
    - horario
    - sala
    - finalidade da reuniao
2. visualizar a lista de todas as reservas com os detalhes 
3. editar nome do solicitante
4. editar data
5. editar horario
6. editar sala
7. editar finalidade da reuniao
8. cancelar reserva
9. mensagem de sucesso
10. mensagem de erro

---- colocar a reserva dentro de um objeto e todas as reservas dentro de um array?
*/

let mensagemDeErro = console.log('Erro, reserva não criada/alterada. Tente novamente. Preencha todos os dados corretamente.');
const reservas = [];


function criarReserva(nome, data, horario, sala, finalidade) {
    while (outraReserva === 'S'){
    nome = prompt('Digite o nome do solicitante/responsável pela reserva da sala.');
    data = prompt('Data da reserva. (DD/MM/AAAA)');
    horario = prompt('Horário da reserva. (HH:MM)');
    sala = prompt('Número da sala de reuniões');
    finalidade = prompt('Finalidade da reunião');
    let outraReserva = prompt('Deseja fazer outra reserva? Digite S para SIM ou N para não');
    
    if (nome === ""){
        mensagemDeErro
    } else if (data === ""){
        mensagemDeErro
    } else if (horario === ""){
        mensagemDeErro
    } else if (sala === ""){
        mensagemDeErro
    } else if (finalidade === "") {
        mensagemDeErro
    } else {
        console.log('Reserva criada com sucesso!')
    }
    const novaReserva = {
        nome: nome,
        data: data,
        horario: horario,
        sala: sala,
        finalidade: finalidade,
        }}
    reservas.push(novaReserva);
    console.log(reservas);
    exibirMenu();
    }   

  
  function visualizarReservas() {
    console.log(reservas);
    exibirMenu();
  }
  
  function editarReserva() {
    console.log('Digite o número da opção do que você deseja alterar');
    console.log('Digite 1 para NOME');
    console.log('Digite 2 para DATA');
    console.log('Digite 3 para HORARIO')
    console.log('Digite 4 para SALA');
    console.log('Digite 5 para FINALIDADE');
    let pergunta = Number(prompt('Qual dado você deseja alterar?'));

    // TROCAR ISSO AQUI POR SWITCH CASE
    if(!pergunta) {
        mensagemDeErro;
    } else if (pergunta === 1) {
        let novoNome = prompt('Digite o novo nome do solicitante/responsável pela reserva da sala.'); // NOME
            if (!novoNome){
            mensagemDeErro;
            } else {
            console.log('Nome alterado com sucesso!');
    }}
        else if (pergunta === 2){ 
        let novaData = prompt('Digite a nova data da reserva da sala (DD/MM/AAAA)'); // DATA
            if (!novaData){
                mensagemDeErro;
            } else {
                console.log('Data alterada com sucesso!');
            }
        }
        else if (pergunta === 3){
        let novoHorario = prompt('Digite o novo horário da reserva da sala (HH:MM)'); // HORARIO
            if (!novoHorario) {
                mensagemDeErro;
            } else {
                console.log('Horário alterado com sucesso!');
            }
        }
        else if (pergunta === 4){
        let novaSala = prompt('Digite o número da nova sala de reuniões'); // SALA
            if (!novaSala) {
                mensagemDeErro;
            } else {
                console.log('Sala alterada com sucesso!');
            }
        }
        else if (pergunta === 5){
        let novaFinalidade = prompt('Digite a nova finalidade da reunião'); // FINALIDADE
            if (!novaFinalidade){
                mensagemDeErro;
            } else {
                console.log('Finalidade da reunião alterada com sucesso!');
            }
    }
    else {
        console.log('Erro, refaça a operação!');
    }
    exibirMenu();
    }
  
  function deletarReserva() {
    // Implementar exclusão de reserva
  }
  
  function exibirMenu() {
    console.log("Menu:");
    console.log("1. Criar Reserva");
    console.log("2. Visualizar Reservas");
    console.log("3. Editar Reserva");
    console.log("4. Deletar Reserva");
    console.log("5. Sair");
    const opcao = prompt("Digite o número da opção desejada:");
  
    switch (opcao) {
      case "1":
        criarReserva();
        break;
      case "2":
        visualizarReservas();
        break;
      case "3":
        editarReserva();
        break;
      case "4":
        // Chamar função de deletar reserva
        break;
      case "5":
        console.log("Saindo do programa. Até logo!");
        return;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  
    // Chamar função de exibir menu novamente
  }
  
  exibirMenu();
