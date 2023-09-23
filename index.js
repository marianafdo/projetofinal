const reservas = [];

function criarReserva() {
    const nome = prompt('Digite o nome do solicitante/responsável pela reserva da sala.');
    const data = prompt('Data da reserva. (DD/MM/AAAA)');
    const horario = prompt('Horário da reserva. (HH:MM)');
    const sala = prompt('Número da sala de reuniões');
    const finalidade = prompt('Finalidade da reunião');
        if (nome === "" || data === "" || horario === "" || sala === "" || finalidade === ""){
            console.log('Erro, reserva não criada/alterada. Tente novamente. Preencha todos os dados corretamente.');  
            return            
        }
    const novaReserva = {
        nome: nome,
        data: data,
        horario: horario,
        sala: sala,
        finalidade: finalidade,
        }
    
    reservas.push(novaReserva);
    console.log('Reserva criada com sucesso!')
    exibirMenu();  
}   

function visualizarReservas() {
    if (reservas.length === 0){
        console.log('Não há nenhuma reserva agendada');
        exibirMenu();
    }
    console.log('Lista de reservas:');
    for(let i = 0; i < reservas.length; i++){
        console.log(`Reserva ${i + 1}:`);
        console.log(`Nome: ${reservas[i].nome}`);
        console.log(`Data: ${reservas[i].data}`);
        console.log(`Horário: ${reservas[i].horario}`);
        console.log(`Sala: ${reservas[i].sala}`);
        console.log(`Finalidade: ${reservas[i].finalidade}`);
    }
    exibirMenu();
}

function editarReserva() {
    let qualReserva = Number(prompt('Digite o número da reserva que você deseja alterar:'));
    let pergunta = Number(prompt('Digite o número da opção do que você deseja alterar \n1. para NOME \n2. para DATA \n3. para HORARIO \n4. para SALA \n5. para FINALIDADE:'));
    
     switch (pergunta) {
        case !pergunta:
            console.log('Erro! Preencha os dados corretamente!')
            break;
        case 1:
            let novoNome = prompt('Digite o novo nome do solicitante/responsável pela reserva da sala.'); 
            if (!novoNome){
                console.log('Erro! Preencha os dados corretamente!')
            } else {
                reservas[qualReserva -1].nome = novoNome;
                console.log('Nome alterado com sucesso!');
            }        
            break;
        case 2:
            let novaData = prompt('Digite a nova data da reserva da sala (DD/MM/AAAA)'); 
            if (!novaData){
                console.log('Erro! Preencha os dados corretamente!');
            } else {
                reservas[qualReserva -1].data = novaData;
                console.log('Data alterada com sucesso!');
            }
            break;
        case 3:
            let novoHorario = prompt('Digite o novo horário da reserva da sala (HH:MM)'); 
            if (!novoHorario) {
                console.log('Erro! Preencha os dados corretamente!');
            } else {
                reservas[qualReserva -1].horario = novoHorario;
                console.log('Horário alterado com sucesso!');
            }
            break;
        case 4:
            let novaSala = prompt('Digite o número da nova sala de reuniões');
            if (!novaSala) {
                console.log('Erro! Preencha os dados corretamente!');
            } else {
                reservas[qualReserva -1].sala = novaSala;
                console.log('Sala alterada com sucesso!');
            }
            break;
        case 5:
            let novaFinalidade = prompt('Digite a nova finalidade da reunião');
            if (!novaFinalidade){
                console.log('Erro! Preencha os dados corretamente!');
            } else {
                reservas[qualReserva -1].finalidade = novaFinalidade;
                console.log('Finalidade da reunião alterada com sucesso!');
            }
            break;
        default:
            console.log('Erro, refaça a operação!');
            break;
    }
    exibirMenu();
    } 
  
  function deletarReserva() {
    let qualReservaDeletar = Number(prompt('Digite o número da reserva que você deseja deletar ou 9999 para todas:'));
    if (qualReservaDeletar < 1 || qualReservaDeletar === ''){
        console.log('Erro! Refaça a operação!');
        } else if (qualReservaDeletar === 9999){
            reservas.splice(0, reservas.length);
            console.log('Todas as reservas foram apagadas com sucesso!');
        }
        else {
        reservas.splice(qualReservaDeletar - 1, 1);
        console.log('Reserva deletada com sucesso!');
    }
    exibirMenu();
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
        deletarReserva();
        break;
      case "5":
        console.log("Saindo do programa. Até logo!");
        return;
      default:
        console.log("Opção inválida. Tente novamente.");
    }  
}
exibirMenu();
