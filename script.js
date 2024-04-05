window.onload = function () {


const slideValue1 = parseFloat(document.getElementById("range1").textContent); // Investimento por Mês (R$)

const slideValue2 = parseFloat(document.getElementById("range2").textContent); // Preço por Lead (R$)

const slideValue3 = parseFloat(document.getElementById("range3").textContent); //Taxa de agendamento (%)

const slideValue4 = parseFloat(document.getElementById("range4").textContent); //Taxa de Comparecimento (%)

const slideValue5 = parseFloat(document.getElementById("range5").textContent); //Taxa de Conversão (%)

const slideValue6 = parseFloat(document.getElementById("range6").textContent); //Ticket Médio (R$)


// Calcular a quantidade total de leads

function calcularTotalLeads(slideValue1, slideValue2) {
    return slideValue1 / slideValue2;
}
let totalLeads = calcularTotalLeads(slideValue1, slideValue2);


// Calcular a quantidade de leads agendados

function calcularLeadsAgendados(totalLeads, slideValue3) {
    return totalLeads * (slideValue3 / 100);
}

let leadsAgendados = calcularLeadsAgendados(totalLeads, slideValue3);


// Calcular a quantidade de leads que compareceram

function calcularLeadsCompareceram(leadsAgendados, slideValue4) {
    return leadsAgendados * (slideValue4 / 100);
}

let leadsCompareceram = calcularLeadsCompareceram(leadsAgendados, slideValue4);


// Calcular a quantidade de vendas

function calcularQuantidadeVendas(leadsCompareceram, slideValue5) {
    return leadsCompareceram * (slideValue5 / 100);
}

let quantidadeVendas = calcularQuantidadeVendas(leadsCompareceram, slideValue5);


// Calcular o faturamento

function calcularFaturamento(quantidadeVendas, slideValue6) {
    return quantidadeVendas * slideValue6;
}

let faturamento = calcularFaturamento(quantidadeVendas, slideValue6);


//Calcular o CAC 

function calcularCAC(slideValue1, quantidadeVendas) {
    return slideValue1 / quantidadeVendas;
}

let cac = calcularCAC(slideValue1, quantidadeVendas);


//Calcular o ROAS 

function calcularROAS(faturamento, slideValue1) {
    return faturamento / slideValue1;
}

let roas = calcularROAS(faturamento, slideValue1);


//Calcular o número de SDRs 

function calcularNumeroSDRs(totalLeads) {
    return Math.ceil(totalLeads / 880);

}

let sdrs = calcularNumeroSDRs(totalLeads);


//Calcular o número de  Closers

function calcularClosers(leadsCompareceram) {
    return Math.ceil(leadsCompareceram / 110);
}

let closers = calcularClosers(leadsCompareceram);



console.log("Total de Leads:", totalLeads);
console.log("Leads Agendados:", leadsAgendados);
console.log("Leads que Compareceram:", leadsCompareceram);
console.log("Quantidade de Vendas:", quantidadeVendas);
console.log("Faturamento:", faturamento);
console.log("CAC:", cac);
console.log("ROAS:", roas);
console.log("Número de SDRs:", sdrs);
console.log("Número de Closers:", closers);

}