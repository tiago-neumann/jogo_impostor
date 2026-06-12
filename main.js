// Banco de palavras dividido por categorias
const gameData = {
    "Locais": [
        { word: "Hospital", hint: "Esterilizado" },
        { word: "Cemitério", hint: "Eternidade" },
        { word: "Escola", hint: "Diretoria" },
        { word: "Praia", hint: "Maresia" },
        { word: "Pizzaria", hint: "Forno" },
        { word: "Aeroporto", hint: "Turbulência" },
        { word: "Biblioteca", hint: "Silêncio" },
        { word: "Banco", hint: "Cifrão" },
        { word: "Cinema", hint: "Projeção" },
        { word: "Academia", hint: "Hipertrofia" },
        { word: "Teatro", hint: "Palco" },
        { word: "Museu", hint: "Acervo" },
        { word: "Igreja", hint: "Altar" },
        { word: "Supermercado", hint: "Gôndola" },
        { word: "Farmácia", hint: "Receituário" },
        { word: "Hotel", hint: "Recepção" },
        { word: "Restaurante", hint: "Cardápio" },
        { word: "Zoológico", hint: "Cativeiro" },
        { word: "Parque", hint: "Gramado" },
        { word: "Delegacia", hint: "Boletim" },
        { word: "Estádio", hint: "Arquibancada" },
        { word: "Rodoviária", hint: "Guichê" },
        { word: "Porto", hint: "Ancoradouro" },
        { word: "Escritório", hint: "Mesa" },
        { word: "Fábrica", hint: "Produção" },
        { word: "Shopping", hint: "Vitrine" },
        { word: "Posto de Combustível", hint: "Bomba" },
        { word: "Laboratório", hint: "Proveta" },
        { word: "Padaria", hint: "Fermento" },
        { word: "Oficina", hint: "Ferramenta" },
        { word: "Prisão", hint: "Cela" },
        { word: "Tribunal", hint: "Julgamento" },
        { word: "Universidade", hint: "Campus" },
        { word: "Observatório", hint: "Telescópio" },
        { word: "Planetário", hint: "Constelação" },
        { word: "Aquário", hint: "Tanque" },
        { word: "Cassino", hint: "Roleta" },
        { word: "Circo", hint: "Picadeiro" },
        { word: "Boate", hint: "Pista" },
        { word: "Castelo", hint: "Fosso" },
        { word: "Mosteiro", hint: "Clausura" },
        { word: "Farol", hint: "Névoa" },
        { word: "Mercado", hint: "Feira" },
        { word: "Palácio", hint: "Monarquia" },
        { word: "Spa", hint: "Relaxamento" },
        { word: "Garagem", hint: "Vaga" },
        { word: "Cemitério de Carros", hint: "Sucata" },
        { word: "Mansão", hint: "Luxo" },
        { word: "Sótão", hint: "Poeira" },
        { word: "Adega", hint: "Maturação" }
    ],
    "Esportes": [
        { word: "Futebol", hint: "Pelota" },
        { word: "Natação", hint: "Cloro" },
        { word: "Boxe", hint: "Nocaute" },
        { word: "Basquete", hint: "Tabela" },
        { word: "Vôlei", hint: "Bloqueio" },
        { word: "Tênis", hint: "Saque" },
        { word: "Corrida", hint: "Cronômetro" },
        { word: "Golfe", hint: "Buraco" },
        { word: "Xadrez", hint: "Monarquia" },
        { word: "Surfe", hint: "Crista" },
        { word: "Atletismo", hint: "Barreiras" },
        { word: "Ciclismo", hint: "Guidão" },
        { word: "Ginástica", hint: "Solo" },
        { word: "Judô", hint: "Tatame" },
        { word: "Caratê", hint: "Faixa" },
        { word: "Esgrima", hint: "Florete" },
        { word: "Tiro com Arco", hint: "Alvo" },
        { word: "Beisebol", hint: "Taco" },
        { word: "Rugby", hint: "Oval" },
        { word: "Handebol", hint: "Área" },
        { word: "Patinação", hint: "Patins" },
        { word: "Skate", hint: "Shape" },
        { word: "Escalada", hint: "Magnésio" },
        { word: "Automobilismo", hint: "Grid" },
        { word: "Motociclismo", hint: "Macacão" },
        { word: "Remo", hint: "Popa" },
        { word: "Vela", hint: "Quilha" },
        { word: "Hipismo", hint: "Obstáculo" },
        { word: "Polo", hint: "Macho" },
        { word: "Canoagem", hint: "Caiaque" },
        { word: "Badminton", hint: "Peteca" },
        { word: "Tênis de Mesa", hint: "Raquete" },
        { word: "Halterofilismo", hint: "Barra" },
        { word: "Taekwondo", hint: "Chute" },
        { word: "Muay Thai", hint: "Clinch" },
        { word: "Jiu-Jitsu", hint: "Finalização" },
        { word: "MMA", hint: "Octógono" },
        { word: "Críquete", hint: "Wicket" },
        { word: "Futebol Americano", hint: "Touchdown" },
        { word: "Hóquei", hint: "Disco" },
        { word: "Curling", hint: "Vassoura" },
        { word: "Bobsled", hint: "Trenó" },
        { word: "Snowboard", hint: "Prancha" },
        { word: "Esqui", hint: "Neve" },
        { word: "Paraquedismo", hint: "Altura" },
        { word: "Mergulho", hint: "Cilindro" },
        { word: "Windsurfe", hint: "Vela" },
        { word: "Triatlo", hint: "Transição" },
        { word: "Maratona", hint: "Resistência" },
        { word: "Capoeira", hint: "Berimbau" }
    ],
    "Cinema": [
        { word: "Matrix", hint: "Simulação" },
        { word: "Titanic", hint: "Iceberg" },
        { word: "Harry Potter", hint: "Cicatriz" },
        { word: "Jurassic Park", hint: "Fóssil" },
        { word: "Inception", hint: "Pião" },
        { word: "Star Wars", hint: "Galáxia" },
        { word: "Tubarão", hint: "Predador" },
        { word: "Avatar", hint: "Azul" },
        { word: "Coringa", hint: "Riso" },
        { word: "Psicose", hint: "Chuveiro" },
        { word: "Gladiador", hint: "Arena" },
        { word: "O Poderoso Chefão", hint: "Mafioso" },
        { word: "Pulp Fiction", hint: "Maleta" },
        { word: "Interestelar", hint: "Gravidade" },
        { word: "O Senhor dos Anéis", hint: "Anel" },
        { word: "De Volta para o Futuro", hint: "Capacitor" },
        { word: "O Rei Leão", hint: "Savana" },
        { word: "Toy Story", hint: "Brinquedo" },
        { word: "Os Vingadores", hint: "Joias" },
        { word: "Batman", hint: "Morcego" },
        { word: "Homem-Aranha", hint: "Teia" },
        { word: "Alien", hint: "Passageiro" },
        { word: "Predador", hint: "Selva" },
        { word: "Exterminador do Futuro", hint: "Ciborgue" },
        { word: "Rocky", hint: "Escadaria" },
        { word: "Rambo", hint: "Sobrevivência" },
        { word: "Indiana Jones", hint: "Chicote" },
        { word: "Piratas do Caribe", hint: "Bússola" },
        { word: "Clube da Luta", hint: "Sabonete" },
        { word: "O Iluminado", hint: "Machado" },
        { word: "Coração Valente", hint: "Liberdade" },
        { word: "Forrest Gump", hint: "Banco" },
        { word: "Resgate do Soldado Ryan", hint: "Desembarque" },
        { word: "Kill Bill", hint: "Catana" },
        { word: "Django Livre", hint: "Recompensa" },
        { word: "Bastardos Inglórios", hint: "Cinema" },
        { word: "O Silêncio dos Inocentes", hint: "Máscara" },
        { word: "Se Beber, Não Case", hint: "Tigre" },
        { word: "Shrek", hint: "Pântano" },
        { word: "Madagascar", hint: "Zoológico" },
        { word: "A Era do Gelo", hint: "Noz" },
        { word: "Procurando Nemo", hint: "Aquário" },
        { word: "WALL-E", hint: "Compactador" },
        { word: "Ratatouille", hint: "Tempero" },
        { word: "Viva: A Vida é uma Festa", hint: "Caveira" },
        { word: "Divertida Mente", hint: "Memória" },
        { word: "Whiplash", hint: "Baqueta" },
        { word: "La La Land", hint: "Jazz" },
        { word: "Parasita", hint: "Porão" },
        { word: "Mad Max", hint: "Deserto" }
    ],
    "Games": [
        { word: "Minecraft", hint: "Blocos" },
        { word: "Super Mario", hint: "Encanador" },
        { word: "GTA", hint: "Caos" },
        { word: "Pac-Man", hint: "Labirinto" },
        { word: "Tetris", hint: "Encaixe" },
        { word: "Zelda", hint: "Triforce" },
        { word: "Counter-Strike", hint: "C4" },
        { word: "Pokémon", hint: "Esfera" },
        { word: "Skyrim", hint: "Dragão" },
        { word: "God of War", hint: "Vingança" },
        { word: "The Last of Us", hint: "Cordyceps" },
        { word: "Resident Evil", hint: "Vírus" },
        { word: "Silent Hill", hint: "Névoa" },
        { word: "Tomb Raider", hint: "Relíquia" },
        { word: "Uncharted", hint: "Tesouro" },
        { word: "Assassin's Creed", hint: "Lâmina" },
        { word: "Red Dead Redemption", hint: "Lasso" },
        { word: "The Witcher", hint: "Mutante" },
        { word: "Cyberpunk 2077", hint: "Implante" },
        { word: "Fallout", hint: "Abrigo" },
        { word: "Doom", hint: "Inferno" },
        { word: "Halo", hint: "Anel" },
        { word: "Destiny", hint: "Luz" },
        { word: "World of Warcraft", hint: "Aliança" },
        { word: "Diablo", hint: "Santuário" },
        { word: "StarCraft", hint: "Estratégia" },
        { word: "League of Legends", hint: "Invocador" },
        { word: "Dota 2", hint: "Ancião" },
        { word: "Valorant", hint: "Spike" },
        { word: "Overwatch", hint: "Carga" },
        { word: "Fortnite", hint: "Construção" },
        { word: "Apex Legends", hint: "Campeão" },
        { word: "PUBG", hint: "Paraquedas" },
        { word: "Rocket League", hint: "Turbo" },
        { word: "FIFA", hint: "Chuteira" },
        { word: "Mortal Kombat", hint: "Fatalidade" },
        { word: "Street Fighter", hint: "Combo" },
        { word: "Tekken", hint: "Torneio" },
        { word: "Super Smash Bros", hint: "Arena" },
        { word: "Dark Souls", hint: "Fogueira" },
        { word: "Bloodborne", hint: "Sangue" },
        { word: "Elden Ring", hint: "Graça" },
        { word: "Sekiro", hint: "Postura" },
        { word: "Hollow Knight", hint: "Inseto" },
        { word: "Celeste", hint: "Montanha" },
        { word: "Undertale", hint: "Determinação" },
        { word: "Stardew Valley", hint: "Fazenda" },
        { word: "Animal Crossing", hint: "Ilha" },
        { word: "Among Us", hint: "Impostor" },
        { word: "Five Nights at Freddy's", hint: "Vigia" }
    ],
    "Profissões": [
        { word: "Advogado", hint: "Litígio" },
        { word: "Médico", hint: "Estetoscópio" },
        { word: "Engenheiro", hint: "Cálculo" },
        { word: "Professor", hint: "Lousa" },
        { word: "Bombeiro", hint: "Chamas" },
        { word: "Chef", hint: "Menu" },
        { word: "Programador", hint: "Sintaxe" },
        { word: "Jornalista", hint: "Furo" },
        { word: "Astronauta", hint: "Órbita" },
        { word: "Policial", hint: "Algema" },
        { word: "Arquiteto", hint: "Planta" },
        { word: "Dentista", hint: "Motorzinho" },
        { word: "Veterinário", hint: "Clínica" },
        { word: "Psicólogo", hint: "Divã" },
        { word: "Farmacêutico", hint: "Alquimia" },
        { word: "Enfermeiro", hint: "Triagem" },
        { word: "Fisioterapeuta", hint: "Reabilitação" },
        { word: "Nutricionista", hint: "Dieta" },
        { word: "Biólogo", hint: "Ecossistema" },
        { word: "Químico", hint: "Reação" },
        { word: "Físico", hint: "Partícula" },
        { word: "Astrônomo", hint: "Cosmos" },
        { word: "Historiador", hint: "Arquivo" },
        { word: "Geógrafo", hint: "Cartografia" },
        { word: "Arqueólogo", hint: "Escavação" },
        { word: "Antropólogo", hint: "Cultura" },
        { word: "Sociólogo", hint: "Sociedade" },
        { word: "Filósofo", hint: "Questionamento" },
        { word: "Escritor", hint: "Manuscrito" },
        { word: "Poeta", hint: "Verso" },
        { word: "Ator", hint: "Coxias" },
        { word: "Diretor", hint: "Claquete" },
        { word: "Músico", hint: "Partitura" },
        { word: "Cantor", hint: "Microfone" },
        { word: "Pintor", hint: "Tela" },
        { word: "Escultor", hint: "Argila" },
        { word: "Fotógrafo", hint: "Lente" },
        { word: "Designer", hint: "Vetor" },
        { word: "Ilustrador", hint: "Traço" },
        { word: "Animador", hint: "Quadro" },
        { word: "Editor", hint: "Corte" },
        { word: "Tradutor", hint: "Idioma" },
        { word: "Contador", hint: "Balanço" },
        { word: "Administrador", hint: "Gestão" },
        { word: "Economista", hint: "Mercado" },
        { word: "Publicitário", hint: "Campanha" },
        { word: "Vendedor", hint: "Meta" },
        { word: "Atendente", hint: "Balcão" },
        { word: "Motorista", hint: "Volante" },
        { word: "Piloto", hint: "Manche" }
    ],
    "Animais": [
        { word: "Leão", hint: "Juba" },
        { word: "Baleia", hint: "Cetáceo" },
        { word: "Águia", hint: "Altitude" },
        { word: "Camaleão", hint: "Camuflagem" },
        { word: "Cobra", hint: "Peçonha" },
        { word: "Tubarão", hint: "Cartilagem" },
        { word: "Morcego", hint: "Sonar" },
        { word: "Formiga", hint: "Colônia" },
        { word: "Pinguim", hint: "Antártida" },
        { word: "Canguru", hint: "Bolsa" },
        { word: "Elefante", hint: "Marfim" },
        { word: "Girafa", hint: "Pescoço" },
        { word: "Hipopótamo", hint: "Anfíbio" },
        { word: "Rinoceronte", hint: "Chifre" },
        { word: "Tigre", hint: "Listras" },
        { word: "Leopardo", hint: "Manchas" },
        { word: "Urso", hint: "Hibernação" },
        { word: "Lobo", hint: "Alcateia" },
        { word: "Raposa", hint: "Astúcia" },
        { word: "Esquilo", hint: "Noz" },
        { word: "Castor", hint: "Dique" },
        { word: "Lontra", hint: "Rio" },
        { word: "Foca", hint: "Gelo" },
        { word: "Morsa", hint: "Presas" },
        { word: "Golfinho", hint: "Inteligência" },
        { word: "Orca", hint: "Predador" },
        { word: "Polvo", hint: "Tentáculo" },
        { word: "Lula", hint: "Tinta" },
        { word: "Água-Viva", hint: "Queimadura" },
        { word: "Estrela-do-Mar", hint: "Regeneração" },
        { word: "Caranguejo", hint: "Carapaça" },
        { word: "Lagosta", hint: "Pinça" },
        { word: "Camarão", hint: "Crustáceo" },
        { word: "Tartaruga", hint: "Casco" },
        { word: "Jacaré", hint: "Pântano" },
        { word: "Lagarto", hint: "Escama" },
        { word: "Sapo", hint: "Coaxar" },
        { word: "Rã", hint: "Anfíbio" },
        { word: "Salamandra", hint: "Umidade" },
        { word: "Coruja", hint: "Noturno" },
        { word: "Gavião", hint: "Rapina" },
        { word: "Falcão", hint: "Velocidade" },
        { word: "Urubu", hint: "Carniça" },
        { word: "Cisne", hint: "Elegância" },
        { word: "Pato", hint: "Lagoa" },
        { word: "Ganso", hint: "Grasnado" },
        { word: "Pavão", hint: "Plumas" },
        { word: "Beija-Flor", hint: "Polinização" },
        { word: "Papagaio", hint: "Imitação" },
        { word: "Arara", hint: "Plumagem" }
    ],
    "Mitologia": [
        { word: "Zeus", hint: "Raio" },
        { word: "Thor", hint: "Martelo" },
        { word: "Medusa", hint: "Petrificação" },
        { word: "Minotauro", hint: "Labirinto" },
        { word: "Hércules", hint: "Trabalhos" },
        { word: "Anúbis", hint: "Chacal" },
        { word: "Poseidon", hint: "Tridente" },
        { word: "Fênix", hint: "Cinzas" },
        { word: "Vampiro", hint: "Estaca" },
        { word: "Lobisomem", hint: "Plenilúnio" },
        { word: "Odin", hint: "Corvo" },
        { word: "Loki", hint: "Trapaça" },
        { word: "Freya", hint: "Colar" },
        { word: "Balder", hint: "Visco" },
        { word: "Heimdall", hint: "Trombeta" },
        { word: "Ares", hint: "Guerra" },
        { word: "Atena", hint: "Coruja" },
        { word: "Apolo", hint: "Lira" },
        { word: "Ártemis", hint: "Arco" },
        { word: "Afrodite", hint: "Concha" },
        { word: "Hefesto", hint: "Forja" },
        { word: "Hermes", hint: "Sandálias" },
        { word: "Hades", hint: "Cérbero" },
        { word: "Perséfone", hint: "Romã" },
        { word: "Dionísio", hint: "Videira" },
        { word: "Rá", hint: "Disco" },
        { word: "Osíris", hint: "Múmia" },
        { word: "Ísis", hint: "Asas" },
        { word: "Hórus", hint: "Falcão" },
        { word: "Set", hint: "Caos" },
        { word: "Bastet", hint: "Felino" },
        { word: "Thoth", hint: "Íbis" },
        { word: "Shiva", hint: "Destruição" },
        { word: "Vishnu", hint: "Preservação" },
        { word: "Brahma", hint: "Criação" },
        { word: "Ganesha", hint: "Elefante" },
        { word: "Amaterasu", hint: "Sol" },
        { word: "Susanoo", hint: "Tempestade" },
        { word: "Tsukuyomi", hint: "Lua" },
        { word: "Quetzalcóatl", hint: "Serpente" },
        { word: "Ícaro", hint: "Cera" },
        { word: "Prometeu", hint: "Fogo" },
        { word: "Pandora", hint: "Caixa" },
        { word: "Édipo", hint: "Enigma" },
        { word: "Aquiles", hint: "Calcanhar" },
        { word: "Ulisses", hint: "Odisseia" },
        { word: "Jasão", hint: "Argonautas" },
        { word: "Perseu", hint: "Espelho" },
        { word: "Teseu", hint: "Fio" },
        { word: "Midas", hint: "Ouro" }
    ],
    "Tecnologia": [
        { word: "Internet", hint: "Rede" },
        { word: "Inteligência Artificial", hint: "Algoritmo" },
        { word: "Smartphone", hint: "Touchscreen" },
        { word: "Computador", hint: "Processador" },
        { word: "Bitcoin", hint: "Criptografia" },
        { word: "Nuvem", hint: "Servidor" },
        { word: "Drone", hint: "Hélice" },
        { word: "Satélite", hint: "Transmissão" },
        { word: "Hacker", hint: "Invasão" },
        { word: "Bluetooth", hint: "Frequência" },
        { word: "Wi-Fi", hint: "Roteador" },
        { word: "Blockchain", hint: "Bloco" },
        { word: "Metaverso", hint: "Virtual" },
        { word: "Robótica", hint: "Automação" },
        { word: "Impressora 3D", hint: "Filamento" },
        { word: "Realidade Virtual", hint: "Óculos" },
        { word: "Criptomoeda", hint: "Carteira" },
        { word: "Big Data", hint: "Volume" },
        { word: "Algoritmo", hint: "Lógica" },
        { word: "Software", hint: "Código" },
        { word: "Hardware", hint: "Placa" },
        { word: "Servidor", hint: "DataCenter" },
        { word: "Banco de Dados", hint: "Consulta" },
        { word: "Firewall", hint: "Barreira" },
        { word: "Antivírus", hint: "Quarentena" },
        { word: "Criptografia", hint: "Chave" },
        { word: "Backup", hint: "Cópia" },
        { word: "Sistema Operacional", hint: "Kernel" },
        { word: "Aplicativo", hint: "Ícone" },
        { word: "Nuvem", hint: "Armazenamento" },
        { word: "Fibra Óptica", hint: "Luz" },
        { word: "Processador", hint: "Clock" },
        { word: "Memória RAM", hint: "Volátil" },
        { word: "Disco Rígido", hint: "Disco" },
        { word: "Placa de Vídeo", hint: "Renderização" },
        { word: "Placa-Mãe", hint: "Barramento" },
        { word: "Monitor", hint: "Pixels" },
        { word: "Teclado", hint: "Membrana" },
        { word: "Mouse", hint: "Sensor" },
        { word: "Roteador", hint: "IP" },
        { word: "Modem", hint: "Sinal" },
        { word: "Switch", hint: "Porta" },
        { word: "Cabo de Rede", hint: "Par" },
        { word: "Sensor", hint: "Leitura" },
        { word: "Atuador", hint: "Movimento" },
        { word: "Microcontrolador", hint: "Embarcado" },
        { word: "Firmware", hint: "Memória" },
        { word: "Compilador", hint: "Binário" },
        { word: "Depurador", hint: "Bug" },
        { word: "Repositório", hint: "Commit" }
    ],
    "História": [
        { word: "Pirâmides", hint: "Faraó" },
        { word: "Coliseu", hint: "Gladiador" },
        { word: "Renascimento", hint: "Perspectiva" },
        { word: "Revolução Francesa", hint: "Guilhotina" },
        { word: "Primeira Guerra", hint: "Trincheiras" },
        { word: "Segunda Guerra", hint: "Radar" },
        { word: "Guerra Fria", hint: "Muro" },
        { word: "Império Romano", hint: "César" },
        { word: "Grécia Antiga", hint: "Pólis" },
        { word: "Idade Média", hint: "Feudo" },
        { word: "Descobrimento", hint: "Caravela" },
        { word: "Independência", hint: "Grito" },
        { word: "República", hint: "Urna" },
        { word: "Monarquia", hint: "Coroa" },
        { word: "Ditadura", hint: "Censura" },
        { word: "Democracia", hint: "Voto" },
        { word: "Feudalismo", hint: "Vassalo" },
        { word: "Cruzadas", hint: "Jerusalém" },
        { word: "Peste Negra", hint: "Roedores" },
        { word: "Inquisição", hint: "Fogueira" },
        { word: "Revolução Industrial", hint: "Vapor" },
        { word: "Iluminismo", hint: "Razão" },
        { word: "Código de Hamurabi", hint: "Talião" },
        { word: "Esparta", hint: "Falange" },
        { word: "Atenas", hint: "Ágora" },
        { word: "Cartago", hint: "Aníbal" },
        { word: "Cleópatra", hint: "Áspide" },
        { word: "Júlio César", hint: "Idos" },
        { word: "Alexandre o Grande", hint: "Górdio" },
        { word: "Napoleão", hint: "Waterloo" },
        { word: "Joana d'Arc", hint: "Orléans" },
        { word: "Leonardo da Vinci", hint: "Polímata" },
        { word: "Galileu Galilei", hint: "Luneta" },
        { word: "Isaac Newton", hint: "Prisma" },
        { word: "Albert Einstein", hint: "Relatividade" },
        { word: "Karl Marx", hint: "Manifesto" },
        { word: "Revolução Russa", hint: "Bolchevique" },
        { word: "Crise de 1929", hint: "Crash" },
        { word: "Nazismo", hint: "Suástica" },
        { word: "Fascismo", hint: "Fasces" },
        { word: "Pearl Harbor", hint: "Ataque" },
        { word: "Hiroshima", hint: "Átomo" },
        { word: "Corrida Espacial", hint: "Sputnik" },
        { word: "Queda do Muro", hint: "Berlim" },
        { word: "Atentado de 11/09", hint: "Torres" },
        { word: "Primavera Árabe", hint: "Protesto" },
        { word: "Apartheid", hint: "Segregação" },
        { word: "Nelson Mandela", hint: "Prisão" },
        { word: "Revolução dos Cravos", hint: "Portugal" },
        { word: "Queda de Constantinopla", hint: "Bizâncio" }
    ]
};

        let players = [];
        let assignedRoles = [];
        let currentPlayerIndex = 0;
        let currentWordObj = null;

        function showScreen(screenId) {
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
            document.getElementById(screenId).classList.add('active');
        }

        function handleKeyPress(e) {
            if (e.key === 'Enter') addPlayer();
        }

        function addPlayer() {
            const input = document.getElementById('player-name');
            const name = input.value.trim();
            if (name && !players.includes(name)) {
                players.push(name);
                input.value = '';
                updatePlayerList();
            }
        }

        function removePlayer(index) {
            players.splice(index, 1);
            updatePlayerList();
        }

        function updatePlayerList() {
            const list = document.getElementById('player-list');
            list.innerHTML = '';
            players.forEach((player, index) => {
                list.innerHTML += `
                    <li>
                        ${player} 
                        <button class="remove-btn" onclick="removePlayer(${index})">X</button>
                    </li>
                `;
            });
        }

        function startGame() {
            const impostorCount = parseInt(document.getElementById('impostor-count').value);
            
            if (players.length < 3) {
                alert("Adicione pelo menos 3 jogadores!");
                return;
            }
            if (impostorCount >= players.length) {
                alert("O número de impostores deve ser menor que o número de jogadores!");
                return;
            }

            // 1. Filtrar palavras baseado nos temas escolhidos
            const selectedThemes = Array.from(document.querySelectorAll('.theme-cb:checked')).map(cb => cb.value);
            if (selectedThemes.length === 0) {
                alert("Selecione pelo menos um tema para jogar!");
                return;
            }

            let availableWords = [];
            selectedThemes.forEach(theme => {
                if (gameData[theme]) {
                    availableWords = availableWords.concat(gameData[theme]);
                }
            });

            // Sorteia a palavra da rodada baseada no pool dos temas selecionados
            currentWordObj = availableWords[Math.floor(Math.random() * availableWords.length)];
            
            // 2. Definir papéis (Com lógica do Modo Caos)
            assignedRoles = Array(players.length).fill('cidadao');
            
            const allowAllImpostors = document.getElementById('all-impostors-mode').checked;
            let isAllImpostorsRound = false;

            // Se o modo estiver ligado, tem 25% de chance de todo mundo ser impostor naquela rodada
            if (allowAllImpostors) {
                isAllImpostorsRound = Math.random() < 0.25; 
            }

            if (isAllImpostorsRound) {
                // Modo Caos ativado para esta rodada! Todos são impostores.
                assignedRoles = Array(players.length).fill('impostor');
            } else {
                // Sorteio normal de impostores
                let impostoresSorteados = 0;
                while (impostoresSorteados < impostorCount) {
                    let randomIndex = Math.floor(Math.random() * players.length);
                    if (assignedRoles[randomIndex] !== 'impostor') {
                        assignedRoles[randomIndex] = 'impostor';
                        impostoresSorteados++;
                    }
                }
            }

            currentPlayerIndex = 0;
            setupNextPassScreen();
        }

        function setupNextPassScreen() {
            document.getElementById('current-player-name').innerText = players[currentPlayerIndex];
            showScreen('pass-screen');
        }

        function revealCard() {
            const role = assignedRoles[currentPlayerIndex];
            const displayBox = document.getElementById('secret-word-display');
            const roleDesc = document.getElementById('role-description');

            if (role === 'impostor') {
                roleDesc.innerText = "VOCÊ É O IMPOSTOR! Sua dica é:";
                roleDesc.style.color = "var(--danger)";
                displayBox.innerText = currentWordObj.hint;
                displayBox.style.borderColor = "var(--danger)";
            } else {
                roleDesc.innerText = "A palavra secreta de todos é:";
                roleDesc.style.color = "var(--text-muted)";
                displayBox.innerText = currentWordObj.word;
                displayBox.style.borderColor = "var(--primary)";
            }

            showScreen('reveal-screen');
        }

        function nextTurn() {
            currentPlayerIndex++;
            if (currentPlayerIndex < players.length) {
                setupNextPassScreen();
            } else {
                showScreen('end-screen');
            }
        }

        // 3. Função para revelar os impostores no final do jogo
        function revealImpostors() {
            const list = document.getElementById('final-impostor-list');
            list.innerHTML = '';

            const impostors = players.filter((p, index) => assignedRoles[index] === 'impostor');

            if (impostors.length === players.length) {
                // Caso o modo Caos tenha ativado
                list.innerHTML = `<li style="justify-content: center; color: var(--danger); font-size: 20px; border: 2px solid var(--danger);">TODO MUNDO ERA IMPOSTOR! 🤡</li>`;
            } else {
                // Revelação normal
                impostors.forEach(imp => {
                    list.innerHTML += `<li style="justify-content: center; color: var(--danger); font-size: 18px; font-weight: bold;">🕵️ ${imp}</li>`;
                });
            }

            showScreen('final-reveal-screen');
        }

        function resetGame() {
            showScreen('setup-screen');
        }

        function fullReset() {
            players = [];
            updatePlayerList();
            document.getElementById('impostor-count').value = 1;
            document.getElementById('all-impostors-mode').checked = false;
            showScreen('setup-screen');
        }