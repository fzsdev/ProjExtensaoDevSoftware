# CONTROLA+

## Resumo

CONTROLA+ é uma aplicação web desenvolvida como projeto acadêmico para demonstrar conceitos fundamentais de desenvolvimento de software front-end. A aplicação implementa um sistema de controle financeiro pessoal utilizando tecnologias web modernas, oferecendo funcionalidades completas de gerenciamento de transações financeiras com persistência de dados local.

---

## Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de aplicar conhecimentos teóricos de desenvolvimento web na prática, demonstrando a implementação de:

- Manipulação do DOM (Document Object Model)
- Programação orientada a objetos em JavaScript
- Persistência de dados utilizando Web Storage API
- Design responsivo e acessibilidade
- Validação de formulários e tratamento de erros
- Arquitetura de software modular

---

## Funcionalidades Implementadas

### Core Features

- **Registro de Transações:** Sistema completo para adicionar receitas e despesas com validação de dados
- **Visualização de Balanço:** Cálculo automático e exibição de entradas, saídas e saldo total
- **Persistência de Dados:** Armazenamento local utilizando LocalStorage API
- **Interface Responsiva:** Design adaptável para dispositivos desktop e mobile
- **Sistema de Validação:** Tratamento de erros com modais informativos

### Funcionalidades Avançadas

- **Pull-to-Refresh:** Implementação de atualização por gesto em dispositivos móveis
- **Formatação Monetária:** Sistema de formatação automática para valores em Real (BRL)
- **Gerenciamento de Estado:** Controle centralizado do estado da aplicação

---

## Arquitetura e Implementação

### Estrutura Modular

A aplicação foi desenvolvida seguindo princípios de modularização, dividida em objetos JavaScript responsáveis por diferentes aspectos do sistema:

#### 1. **Modal Object**

Gerencia a abertura e fechamento de modais da interface, controlando a interação do usuário com formulários.

#### 2. **Storage Object**

Implementa operações de persistência utilizando a Web Storage API (localStorage), garantindo que os dados sejam mantidos entre sessões do navegador.

#### 3. **Transaction Object**

Núcleo da lógica de negócio, responsável por:

- Gerenciamento do array de transações
- Operações CRUD (Create, Read, Update, Delete)
- Cálculos financeiros (receitas, despesas, saldo total)
- Utilização de métodos funcionais (reduce) para processamento de dados

#### 4. **DOM Object**

Controla a manipulação do Document Object Model, incluindo:

- Renderização dinâmica de elementos
- Atualização de informações em tempo real
- Geração de HTML através de template strings

#### 5. **Utils Object**

Biblioteca de funções utilitárias para:

- Formatação de valores monetários
- Conversão e validação de datas
- Processamento de entrada de dados

#### 6. **Form Object**

Gerencia interações com formulários, implementando:

- Captura e validação de dados
- Sanitização de entrada
- Feedback de erro ao usuário

#### 7. **App Object**

Controlador principal da aplicação, responsável pela inicialização e coordenação entre módulos.

### Tecnologias e Padrões Utilizados

#### Frontend

- **HTML5:** Estrutura semântica com foco em acessibilidade
- **CSS3:** Estilização moderna com variáveis CSS, Flexbox e Grid Layout
- **JavaScript ES6+:** Utilização de recursos modernos como arrow functions, destructuring e template literals

#### Padrões de Desenvolvimento

- **Module Pattern:** Organização do código em módulos independentes
- **Event-Driven Programming:** Sistema baseado em eventos do DOM
- **Functional Programming:** Uso de métodos funcionais para manipulação de arrays
- **Responsive Design:** Design adaptável seguindo princípios mobile-first

#### Persistência de Dados

- **Web Storage API:** Implementação de localStorage para persistência client-side
- **JSON:** Serialização e deserialização de dados para armazenamento

---

## Estrutura do Projeto

```
ProjExtensaoDevSoftware/
├── index.html              # Arquivo principal da aplicação
├── css/
│   └── style.css           # Folhas de estilo CSS
├── scripts/
│   └── scripts.js          # Lógica JavaScript da aplicação
├── assets/                 # Recursos gráficos e ícones
├── README.md              # Documentação do projeto
```

---

## Validação e Tratamento de Erros

A aplicação implementa um sistema robusto de validação que inclui:

- **Validação de Campos Obrigatórios:** Verificação de preenchimento de todos os campos
- **Validação de Formato:** Verificação de tipos de dados e formatos aceitos
- **Feedback Visual:** Modais informativos para comunicação de erros
- **Sanitização de Dados:** Limpeza e formatação automática de entrada de dados

---

## Considerações Técnicas

### Performance

- Manipulação eficiente do DOM através de DocumentFragment
- Uso de event delegation para otimização de eventos
- Lazy loading de funcionalidades não críticas

### Acessibilidade

- Implementação de ARIA labels
- Navegação por teclado
- Contraste adequado de cores
- Estrutura semântica do HTML

### Responsividade

- Design mobile-first
- Breakpoints otimizados para diferentes dispositivos
- Touch gestures para dispositivos móveis

---

## Conclusão

O projeto CONTROLA+ demonstra a aplicação prática de conceitos fundamentais de desenvolvimento web front-end, implementando uma solução completa e funcional para controle financeiro pessoal. A arquitetura modular, o uso de tecnologias modernas e a implementação de boas práticas de desenvolvimento evidenciam o cumprimento dos objetivos acadêmicos propostos.

---

## Contatos de Desenvolvimento

- **Camila:** [GitHub](https://github.com/c-camila)
- **Felipe:** [GitHub](https://github.com/fzsdev)
