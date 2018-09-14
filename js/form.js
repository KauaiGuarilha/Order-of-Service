            
            var botaoAdicionar = document.querySelector("#adicionar-paciente");
            console.log(botaoAdicionar);

            botaoAdicionar.addEventListener("click", function(event){
            	event.preventDefault();  //Tirar comportamento padrão do botão
            	
            	var form = document.querySelector("#form-adiciona");

                //Extraindo as informações do paciente do FORM

                var paciente = obtemPacienteDoFormulario(form);

                var pacienteTr = montaTr(paciente);

                form.reset();
            	
            });
        

            function obtemPacienteDoFormulario(form){
                var paciente = {
                    nos: form.numeroOS.value,
                    nome: form.nome.value, 
                    cpf: form.cpf.value,
                    cidade: form.cidade.value,
                    bairro: form.bairro.value,
                    servico: form.servico.value,
                    data: form.data.value,
                    valor:  form.valor.value,
                    //servico: parseFloat(form.servico.value),
                }
                return paciente;
            }

            function montaTr(paciente){

                var pacienteTr = document.createElement("tr");  //cria uma Tr da tabela
                pacienteTr.classList.add("paciente");

                pacienteTr.appendChild(montaTd(paciente.nos, "info-nos")); 
                pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));   // appendChild faz com que a variável pai receba as variáveis filhas.
                pacienteTr.appendChild(montaTd(paciente.cpf, "info-cpf"));
                pacienteTr.appendChild(montaTd(paciente.cidade, "info-cidade"));
                pacienteTr.appendChild(montaTd(paciente.bairro, "info-bairro"));
                pacienteTr.appendChild(montaTd(paciente.servico, "info-servico"));
                pacienteTr.appendChild(montaTd(paciente.data, "info-data"));
                pacienteTr.appendChild(montaTd(paciente.valor, "info-valor"));

                var tabela = document.querySelector("#tabela-pacientes");

                tabela.appendChild(pacienteTr);
            
                return pacienteTr;

            }

            function montaTd(dado, classe){

                var td = document.createElement("td");
                td.textContent = dado;
                td.classList.add(classe);

                return td;
            }


                


















                /*var nomeTd = document.createElement("td");  //cria as informações da tabela
                var pesoTd = document.createElement("td");
                var alturaTd = document.createElement("td");
                var gorduraTd = document.createElement("td");
                var imcTd = document.createElement("td");

                nomeTd.textContent = paciente.nome;  //alimenta as tabelas da td, de acordo com oque o usuário preencheu
                pesoTd.textContent = paciente.peso;
                alturaTd.textContent = paciente.altura;
                gorduraTd.textContent = paciente.gordura;
                imcTd.textContent = paciente.imc;*/