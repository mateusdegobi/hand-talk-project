# BDD Specs

## Autenticação
### Cenário 1: Autenticação bem-sucedida
Dado que o usuário tem uma conta válida
Quando o usuário insere um e-mail e senha corretos na tela de autenticação
Então o usuário é redirecionado para a tela de renderização

### Cenário 2: Tentativa de autenticação com falha
Dado que o usuário não tem uma conta ou insere dados incorretos
Quando o usuário tenta se autenticar
Então uma mensagem de erro é exibida

## Renderização de Objetos 3D
### Cenário: Visualizar objetos 3D na tela de renderização
Dado que o usuário está autenticado
E as configurações de objetos 3D estão definidas
Quando o usuário acessa a tela de renderização
Então os objetos 3D são exibidos conforme as configurações

## Configurações de Objetos 3D
### Cenário: Alterar configurações de um objeto 3D
Dado que o usuário está autenticado
E na tela de configurações
Quando o usuário seleciona um novo tipo de forma, cor e rotação para um objeto 3D
E salva as configurações
Então essas novas configurações são aplicadas ao objeto 3D na tela de renderização

## Uso do Realtime Database para Salvar Configurações
### Cenário: Salvar configurações no Realtime Database
Dado que o usuário modificou as configurações de objetos 3D
Quando o usuário salva as configurações
Então as configurações são salvas no Realtime Database vinculadas ao usuário autenticado

## Sobrescrita de Configurações pelo Usuário
### Cenário: Configurações do usuário sobrescrevem as pré-definidas
Dado que configurações pré-definidas existem para objetos 3D
E o usuário criou suas próprias configurações
Quando o usuário visualiza os objetos 3D
Então as configurações do usuário sobrescrevem as pré-definidas
