# HandTalk Project

## Apresentação

<div align="center">
    <img
    width="400"
    src="https://github.com/mateusdegobi/hand-talk-project/blob/develop/assets/github/ios1.jpeg?raw=true" 
    alt="Login" />
    <img
    width="400"
    src="https://github.com/mateusdegobi/hand-talk-project/blob/develop/assets/github/ios2.jpeg?raw=true" 
    alt="Home" />
    <img
    width="400"
    src="https://github.com/mateusdegobi/hand-talk-project/blob/develop/assets/github/ios3.jpeg?raw=true" 
    alt="EditObjectModal" />
    <img
    width="400"
    src="https://github.com/mateusdegobi/hand-talk-project/blob/develop/assets/github/ios4.jpeg?raw=true" 
    alt="Settings" />
  
</div>

## Desafios do projeto

### Arquitetura

Foi escolhido a Clean Architecture pensando em separar as responsabilidades, facilitando a manutenção, testes e escalabilidade da aplicação.

### ThreeJS

Como foi meu primeiro contato, tive um pouco de dificuldades para entender a iluminação dos objetos.
Consegui resolver estudando mais sobre a directionalLight do @react-three/fiber, pois pertence a ele.

### @react-three/fiber

Falando em @react-three/fiber, ele foi usado no projeto pensando em facilitar o desenvolvimento e tornar mais ágil, pois ele permite lidar com o threeJS de forma mais familiar ao React.
Nele também consegui entender mais a fundo sobre o ThreeJS.

### Firebase e Remote Config

Ao Firebase já tenho mais domínio pois uso-o frequentemente, entretanto como escolhi utilizar Expo enfrentei problemas com Remote Config porque o Expo não oferece suporte a ele.

## Rodando o app

1. Clone esse repositório:

```bash
git clone https://github.com/mateusdegobi/hand-talk-project.git
```

2. Sincronize sua versão do node para v20.11.1

```bash
  nvm use # ou outro gerenciador do node. e.g: fvm use
```

3. Entre na pasta do projeto e instale as dependências

```bash
  cd desafio-hand-talk && yarn
```

4. Inicie o app

```bash
 yarn start | npx expo start
```

## Contas

Para acessar o app, você pode utilizar as seguintes contas:

```
email: handtalk@teste.com
senha: 123456

email: rodrigo@handtalk.me
senha: 123456

email: matheus@handtalk.me
senha: 123456

email: livia@handtalk.me
senha: 123456
```

## Condiderações finais

Mesmo que o intuíto do teste técnico não é ser difícil, me ajudou a reforçar conhecimentos, aprender uma coisa nova, que foi o ThreeJS
Novos desafios sempre me agradam e este superou minhas expectativas.
