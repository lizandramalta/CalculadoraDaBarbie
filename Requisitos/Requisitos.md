# Requisitos

Requisitos são descrições detalhadas das funcionalidades, características e qualidades que um sistema, software ou produto deve ter para atender às necessidades dos usuários, clientes ou partes interessadas. Eles são uma parte fundamental do processo de desenvolvimento de software e são usados para definir e documentar o escopo e as expectativas do projeto.

Os requisitos podem ser classificados em diferentes categorias, dependendo do nível de detalhe e da perspectiva que eles abordam. Porém utilizaremos apenas dois:

- **Requisitos funcionais**: Descrevem as funcionalidades e comportamentos específicos que o sistema deve ser capaz de realizar. Eles definem as ações que o sistema deve executar em resposta a entradas específicas e as saídas esperadas.
- **Requisitos não funcionais**: Definem as qualidades e características que o sistema deve ter, além das funcionalidades. Eles podem abordar aspectos como desempenho, segurança, usabilidade, confiabilidade, escalabilidade e compatibilidade.

É importante que os requisitos sejam claros, completos, consistentes e testáveis. Eles fornecem uma base para o desenvolvimento, teste e validação do sistema, permitindo que as equipes de desenvolvimento e partes interessadas tenham uma compreensão compartilhada do que será entregue e do que é esperado do produto final.

## Requisitos Funcionais

Os Requisitos Funcionais definem as funcionalidades e comportamentos específicos que o sistema deve possuir. Eles descrevem as ações que o sistema deve ser capaz de realizar, as interações que ele deve permitir com o usuário e outros sistemas, e as respostas e resultados esperados dessas ações. Os requisitos funcionais descrevem o "o que" o sistema deve fazer. Esses requisitos são geralmente expressos em termos de casos de uso, fluxos de trabalho, cenários e operações do sistema.

| Adição |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| RF01   | A calculadora deve permitir que o usuário adicione dois números.                     |
| RF02   | O resultado da adição deve ser exibido no visor da calculadora.                      |
| RF03   | A calculadora deve ter um botão de adição claramente identificado no tema da Barbie. |

| Subtração |                                                                                         |
| --------- | --------------------------------------------------------------------------------------- |
| RF04      | A calculadora deve permitir que o usuário subtraia dois números.                        |
| RF05      | O resultado da subtração deve ser exibido no visor da calculadora.                      |
| RF06      | A calculadora deve ter um botão de subtração claramente identificado no tema da Barbie. |

| Multiplicação |                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------- |
| RF07          | A calculadora deve permitir que o usuário multiplique dois números.                         |
| RF08          | O resultado da multiplicação deve ser exibido no visor da calculadora.                      |
| RF09          | A calculadora deve ter um botão de multiplicação claramente identificado no tema da Barbie. |

| Divisão |                                                                                       |
| ------- | ------------------------------------------------------------------------------------- |
| RF10    | A calculadora deve permitir que o usuário divida dois números.                        |
| RF11    | O resultado da divisão deve ser exibido no visor da calculadora.                      |
| RF12    | A calculadora deve ter um botão de divisão claramente identificado no tema da Barbie. |

| Visor |                                                                                                                       |
| ----- | --------------------------------------------------------------------------------------------------------------------- |
| RF13  | A calculadora deve ter um visor com um design atraente no tema da Barbie.                                             |
| RF14  | O visor deve exibir corretamente os números digitados e os resultados das operações.                                  |
| RF15  | O visor deve ser legível e de fácil compreensão, utilizando cores e elementos visuais relacionados ao tema da Barbie. |

| Botões numéricos |                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| RF16             | A calculadora deve ter botões numéricos bem visíveis e identificados no tema da Barbie.           |
| RF17             | Os botões numéricos devem permitir que o usuário insira os números necessários para as operações. |

| Botão de igual |                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| RF18           | A calculadora deve ter um botão de igual claramente identificado no tema da Barbie.                       |
| RF19           | O botão de igual deve ser pressionado para realizar a operação selecionada e exibir o resultado no visor. |

| Botão de Limpar |                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------ |
| RF20            | A calculadora deve ter um botão de limpar claramente identificado no tema da Barbie.             |
| RF21            | O botão de limpar deve permitir que o usuário apague os números digitados e reinicie a operação. |

<br>

## Requisitos Não-Funcionais

Por outro lado, os Requisitos Não Funcionais descrevem as características e propriedades gerais que o sistema deve ter, além das funcionalidades específicas. Eles abordam aspectos como desempenho, segurança, usabilidade, confiabilidade, escalabilidade, manutenibilidade e outros atributos do sistema. Os requisitos não funcionais descrevem o "como" o sistema deve funcionar, definindo critérios, restrições e qualidades que são importantes para o sistema como um todo. Esses requisitos são geralmente expressos em termos de métricas, limitações, padrões e expectativas de desempenho.

| Usabilidade |                                                                                                                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RNF01       | A calculadora deve ter uma interface intuitiva e fácil de usar.                                                                                                                                             |
| RNF02       | Os botões e elementos da calculadora devem ser de tamanho adequado para não serem grandes demais ao ponto de serem exagerados e nem pequenos demais ao ponto de serem difícil da calculadora ser utilizada. |
| RNF03       | A resposta das operações deve ser exibida de forma clara e legível.                                                                                                                                         |

| Aparência e Tema |                                                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| RNF04            | A calculadora deve apresentar um design atraente e alegre, seguindo o tema da Barbie.                            |
| RNF05            | O layout e as cores utilizadas devem ser adequados ao público infantil e ao tema escolhido.                      |
| RNF06            | Elementos visuais relacionados à Barbie, como imagens e ícones, devem ser incorporados ao design da calculadora. |

| Responsividade |                                                                                    |
| -------------- | ---------------------------------------------------------------------------------- |
| RNF07          | A calculadora deve responder de forma rápida e eficiente às interações do usuário. |
| RNF08          | O tempo de resposta para a exibição dos resultados das operações deve ser mínimo.  |

| Portabilidade |                                                                                                                                                                              |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RNF09         | A calculadora deve ser desenvolvida para ser executada em diferentes dispositivos, como smartphones, tablets e computadores.                                                 |
| RNF10         | A interface da calculadora deve se adaptar ao tamanho da tela do dispositivo em que está sendo executada, garantindo uma experiência consistente em diferentes dispositivos. |

| Performance |                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| RNF11       | A calculadora deve ser otimizada para executar as operações de adição, subtração, multiplicação e divisão de forma rápida e eficiente. |
| RNF12       | O consumo de recursos, como memória e processamento, deve ser mínimo.                                                                  |

| Segurança |                                                                             |
| --------- | --------------------------------------------------------------------------- |
| RNF13     | A calculadora não deve permitir operações inválidas, como divisão por zero. |

| Manutenibilidade |                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| RNF14            | O código da calculadora deve ser organizado, legível e seguindo as melhores práticas de programação. |
| RNF15            | O código deve ser modular e bem documentado, facilitando futuras atualizações e manutenções.         |

## Cronograma

| Data  | Dia da semana | Atividades                                                                                                            | Check |
| ----- | ------------- | --------------------------------------------------------------------------------------------------------------------- | ----- |
| 29/06 | Quinta-Feira  | - Revisão dos requisitos, US e definição do cronograma do projeto                                                     | 💖    |
| 30/06 | Sexta-Feira   | - Implementação do esqueleto da calculadora <br> - Discussão de como vai ser o tema e as imagens da Barbie utilizadas |       |
| 03/07 | Segunda-Feira | - Implementação da funcionalidade de adição <br> - Implementação da funcionalidade de subtração                       |       |
| 04/07 | Terça-Feira   | - Implementação da funcionalidade de multiplicação <br> - Implementação da funcionalidade de divisão                  |       |
| 05/06 | Quarta-Feira  | - Testes e correções <br> - Revisão final                                                                             |       |
