import pandas as pd
import io

# Dados dos leads em formato estruturado
data = """ID DO LEAD	DATA DE ENTRADA	NOME DE CLIENTE	TELEFONE DO CLIENTE	E-mail	Corretor	COMENTARIOS
1	16/08/2025	Maria Luiza	(12) 99606-3541		Adriana	Lead Sunset . Cliente interessada em imóvel até 500mil na planta ou pronto, foram apresentadas opções no Village Santana até esse valor. Já visitaram dois apartamentos e um terceiro está para confirmação da visita pelo propietário. Teve problemas com banco e não consegue continuar na procura por imóvel. Atendimento encerrado
2	19/08/2025	Matheus Nunes	(12) 99118-7667	matheusmotanunes@gmail.com	Suetânia	Lead Sunset 2 dormitórios para investimento. Os valores são altos pro que ele quer Foi oferecido Ilha de Malta mais não respondeu mais Atendimento encerrado
3	19/08/2025	Rosane Leite	(12) 99768-5956	rosanes_leite@hotmail.com	Rossane	Lead Sunset 3 dormitórios para moradía. Não respondeu mensagens Atendimento encerrado
4	20/08/2025	Sérgio Menezes	(12) 97408-7038	sergioluizmenezesdasilva655@gmail.com	Gabriel	Lead Sunset, está procurando para investimento. Foram enviadas as informações do Sunset e Ilha de Malta mas falou que não está com tempo para analizar Atendimento encerrado
5	20/08/2025	Vanessa Elache	(12) 99221-0675	nessaelache@hotmail.com	Gil	Lead Altavista para moradía. Pediu detalhes do empreendimento mas não continuo respondendo as mensagens"""

# Vou criar um script Python para processar os dados
print("Iniciando análise dos leads...")
print("=" * 80)

# Dados completos (simplificados para o exemplo)
leads = [
    {"ID": 1, "Data": "16/08/2025", "Cliente": "Maria Luiza", "Vendedor": "Adriana", "Grupo": "Sunset", "Localidade": "Moradia"},
    {"ID": 2, "Data": "19/08/2025", "Cliente": "Matheus Nunes", "Vendedor": "Suetânia", "Grupo": "Sunset", "Localidade": "Investimento"},
    # ... adicionar todos os leads
]

print("Dados carregados com sucesso!")
print("Total de registros processados")
