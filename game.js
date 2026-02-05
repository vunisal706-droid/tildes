// BANCO DE PALABRAS (~650 palabras)
const WORD_BANK = {
    agudas: [
        {word:'cafe',correct:'café',type:'aguda'},{word:'sofa',correct:'sofá',type:'aguda'},{word:'mama',correct:'mamá',type:'aguda'},
        {word:'papa',correct:'papá',type:'aguda'},{word:'alla',correct:'allá',type:'aguda'},{word:'sera',correct:'será',type:'aguda'},
        {word:'esta',correct:'está',type:'aguda'},{word:'aqui',correct:'aquí',type:'aguda'},{word:'alli',correct:'allí',type:'aguda'},
        {word:'ahi',correct:'ahí',type:'aguda'},{word:'rubi',correct:'rubí',type:'aguda'},{word:'jabali',correct:'jabalí',type:'aguda'},
        {word:'colibri',correct:'colibrí',type:'aguda'},{word:'mani',correct:'maní',type:'aguda'},{word:'tabu',correct:'tabú',type:'aguda'},
        {word:'bambu',correct:'bambú',type:'aguda'},{word:'menu',correct:'menú',type:'aguda'},{word:'iglu',correct:'iglú',type:'aguda'},
        {word:'peru',correct:'Perú',type:'aguda'},{word:'hindu',correct:'hindú',type:'aguda'},{word:'raton',correct:'ratón',type:'aguda'},
        {word:'camion',correct:'camión',type:'aguda'},{word:'avion',correct:'avión',type:'aguda'},{word:'leon',correct:'león',type:'aguda'},
        {word:'melon',correct:'melón',type:'aguda'},{word:'sillon',correct:'sillón',type:'aguda'},{word:'balon',correct:'balón',type:'aguda'},
        {word:'jamon',correct:'jamón',type:'aguda'},{word:'limon',correct:'limón',type:'aguda'},{word:'buzon',correct:'buzón',type:'aguda'},
        {word:'colchon',correct:'colchón',type:'aguda'},{word:'salon',correct:'salón',type:'aguda'},{word:'rincon',correct:'rincón',type:'aguda'},
        {word:'tacon',correct:'tacón',type:'aguda'},{word:'algodon',correct:'algodón',type:'aguda'},{word:'boton',correct:'botón',type:'aguda'},
        {word:'corazon',correct:'corazón',type:'aguda'},{word:'dragon',correct:'dragón',type:'aguda'},{word:'jabon',correct:'jabón',type:'aguda'},
        {word:'ladron',correct:'ladrón',type:'aguda'},{word:'marron',correct:'marrón',type:'aguda'},{word:'nacion',correct:'nación',type:'aguda'},
        {word:'pantalon',correct:'pantalón',type:'aguda'},{word:'sarten',correct:'sartén',type:'aguda'},{word:'tambien',correct:'también',type:'aguda'},
        {word:'ningun',correct:'ningún',type:'aguda'},{word:'algun',correct:'algún',type:'aguda'},{word:'comun',correct:'común',type:'aguda'},
        {word:'atun',correct:'atún',type:'aguda'},{word:'delfin',correct:'delfín',type:'aguda'},{word:'jardin',correct:'jardín',type:'aguda'},
        {word:'violin',correct:'violín',type:'aguda'},{word:'patin',correct:'patín',type:'aguda'},{word:'calcetin',correct:'calcetín',type:'aguda'},
        {word:'trampolin',correct:'trampolín',type:'aguda'},{word:'cajon',correct:'cajón',type:'aguda'},{word:'tiburon',correct:'tiburón',type:'aguda'},
        {word:'perdon',correct:'perdón',type:'aguda'},{word:'bombon',correct:'bombón',type:'aguda'},{word:'campeon',correct:'campeón',type:'aguda'},
        {word:'cancion',correct:'canción',type:'aguda'},{word:'leccion',correct:'lección',type:'aguda'},{word:'emocion',correct:'emoción',type:'aguda'},
        {word:'adios',correct:'adiós',type:'aguda'},{word:'despues',correct:'después',type:'aguda'},{word:'ingles',correct:'inglés',type:'aguda'},
        {word:'frances',correct:'francés',type:'aguda'},{word:'japones',correct:'japonés',type:'aguda'},{word:'portugues',correct:'portugués',type:'aguda'},
        {word:'cortes',correct:'cortés',type:'aguda'},{word:'marques',correct:'marqués',type:'aguda'},{word:'compas',correct:'compás',type:'aguda'},
        {word:'quizas',correct:'quizás',type:'aguda'},{word:'jamas',correct:'jamás',type:'aguda'},{word:'ademas',correct:'además',type:'aguda'},
        {word:'detras',correct:'detrás',type:'aguda'},{word:'autobus',correct:'autobús',type:'aguda'},{word:'canto',correct:'cantó',type:'aguda'},
        {word:'bailo',correct:'bailó',type:'aguda'},{word:'salto',correct:'saltó',type:'aguda'},{word:'jugo',correct:'jugó',type:'aguda'},
        {word:'pinto',correct:'pintó',type:'aguda'},{word:'estudio',correct:'estudió',type:'aguda'},{word:'camino',correct:'caminó',type:'aguda'},
        {word:'corrio',correct:'corrió',type:'aguda'},{word:'subio',correct:'subió',type:'aguda'},{word:'comio',correct:'comió',type:'aguda'},
        {word:'bebio',correct:'bebió',type:'aguda'},{word:'durmio',correct:'durmió',type:'aguda'},{word:'salio',correct:'salió',type:'aguda'},
        {word:'entro',correct:'entró',type:'aguda'},{word:'miro',correct:'miró',type:'aguda'},{word:'escucho',correct:'escuchó',type:'aguda'},
        {word:'hablo',correct:'habló',type:'aguda'},{word:'llamo',correct:'llamó',type:'aguda'},{word:'llego',correct:'llegó',type:'aguda'},
        {word:'paso',correct:'pasó',type:'aguda'},{word:'penso',correct:'pensó',type:'aguda'},{word:'volo',correct:'voló',type:'aguda'},
        {word:'gano',correct:'ganó',type:'aguda'},{word:'perdio',correct:'perdió',type:'aguda'},{word:'encontro',correct:'encontró',type:'aguda'},
        {word:'cayo',correct:'cayó',type:'aguda'},{word:'oyo',correct:'oyó',type:'aguda'},{word:'leyo',correct:'leyó',type:'aguda'}
    ],
    llanas: [
        {word:'arbol',correct:'árbol',type:'llana'},{word:'facil',correct:'fácil',type:'llana'},{word:'dificil',correct:'difícil',type:'llana'},
        {word:'util',correct:'útil',type:'llana'},{word:'fragil',correct:'frágil',type:'llana'},{word:'agil',correct:'ágil',type:'llana'},
        {word:'habil',correct:'hábil',type:'llana'},{word:'debil',correct:'débil',type:'llana'},{word:'movil',correct:'móvil',type:'llana'},
        {word:'fertil',correct:'fértil',type:'llana'},{word:'docil',correct:'dócil',type:'llana'},{word:'portatil',correct:'portátil',type:'llana'},
        {word:'crater',correct:'cráter',type:'llana'},{word:'caracter',correct:'carácter',type:'llana'},{word:'martir',correct:'mártir',type:'llana'},
        {word:'nectar',correct:'néctar',type:'llana'},{word:'azucar',correct:'azúcar',type:'llana'},{word:'almibar',correct:'almíbar',type:'llana'},
        {word:'ambar',correct:'ámbar',type:'llana'},{word:'cancer',correct:'cáncer',type:'llana'},{word:'cadaver',correct:'cadáver',type:'llana'},
        {word:'trebol',correct:'trébol',type:'llana'},{word:'tunel',correct:'túnel',type:'llana'},{word:'angel',correct:'ángel',type:'llana'},
        {word:'carcel',correct:'cárcel',type:'llana'},{word:'futbol',correct:'fútbol',type:'llana'},{word:'beisbol',correct:'béisbol',type:'llana'},
        {word:'poster',correct:'póster',type:'llana'},{word:'hamster',correct:'hámster',type:'llana'},{word:'lider',correct:'líder',type:'llana'},
        {word:'super',correct:'súper',type:'llana'},{word:'pixel',correct:'píxel',type:'llana'},{word:'album',correct:'álbum',type:'llana'},
        {word:'consul',correct:'cónsul',type:'llana'},{word:'lapiz',correct:'lápiz',type:'llana'},{word:'caliz',correct:'cáliz',type:'llana'},
        {word:'fenix',correct:'fénix',type:'llana'},{word:'torax',correct:'tórax',type:'llana'},{word:'climax',correct:'clímax',type:'llana'},
        {word:'biceps',correct:'bíceps',type:'llana'},{word:'triceps',correct:'tríceps',type:'llana'},{word:'record',correct:'récord',type:'llana'},
        {word:'cesped',correct:'césped',type:'llana'},{word:'huesped',correct:'huésped',type:'llana'},{word:'marmol',correct:'mármol',type:'llana'},
        {word:'mastil',correct:'mástil',type:'llana'},{word:'fosil',correct:'fósil',type:'llana'},{word:'datil',correct:'dátil',type:'llana'},
        {word:'dolar',correct:'dólar',type:'llana'},{word:'comic',correct:'cómic',type:'llana'}
    ],
    esdrujulas: [
        {word:'pajaro',correct:'pájaro',type:'esdrujula'},{word:'murcielago',correct:'murciélago',type:'esdrujula'},{word:'libelula',correct:'libélula',type:'esdrujula'},
        {word:'mamifero',correct:'mamífero',type:'esdrujula'},{word:'brujula',correct:'brújula',type:'esdrujula'},{word:'camara',correct:'cámara',type:'esdrujula'},
        {word:'lampara',correct:'lámpara',type:'esdrujula'},{word:'maquina',correct:'máquina',type:'esdrujula'},{word:'fabrica',correct:'fábrica',type:'esdrujula'},
        {word:'capsula',correct:'cápsula',type:'esdrujula'},{word:'sabana',correct:'sábana',type:'esdrujula'},{word:'platano',correct:'plátano',type:'esdrujula'},
        {word:'piramide',correct:'pirámide',type:'esdrujula'},{word:'pelicula',correct:'película',type:'esdrujula'},{word:'mascara',correct:'máscara',type:'esdrujula'},
        {word:'lagrima',correct:'lágrima',type:'esdrujula'},{word:'pagina',correct:'página',type:'esdrujula'},{word:'silaba',correct:'sílaba',type:'esdrujula'},
        {word:'formula',correct:'fórmula',type:'esdrujula'},{word:'celula',correct:'célula',type:'esdrujula'},{word:'molecula',correct:'molécula',type:'esdrujula'},
        {word:'america',correct:'América',type:'esdrujula'},{word:'africa',correct:'África',type:'esdrujula'},{word:'oceano',correct:'océano',type:'esdrujula'},
        {word:'atlantico',correct:'atlántico',type:'esdrujula'},{word:'pacifico',correct:'pacífico',type:'esdrujula'},{word:'peninsula',correct:'península',type:'esdrujula'},
        {word:'fantastico',correct:'fantástico',type:'esdrujula'},{word:'magnifico',correct:'magnífico',type:'esdrujula'},{word:'ridiculo',correct:'ridículo',type:'esdrujula'},
        {word:'tipico',correct:'típico',type:'esdrujula'},{word:'clasico',correct:'clásico',type:'esdrujula'},{word:'romantico',correct:'romántico',type:'esdrujula'},
        {word:'dramatico',correct:'dramático',type:'esdrujula'},{word:'tragico',correct:'trágico',type:'esdrujula'},{word:'comico',correct:'cómico',type:'esdrujula'},
        {word:'logico',correct:'lógico',type:'esdrujula'},{word:'historico',correct:'histórico',type:'esdrujula'},{word:'geografico',correct:'geográfico',type:'esdrujula'},
        {word:'biologico',correct:'biológico',type:'esdrujula'},{word:'ecologico',correct:'ecológico',type:'esdrujula'},{word:'tecnologico',correct:'tecnológico',type:'esdrujula'},
        {word:'cientifico',correct:'científico',type:'esdrujula'},{word:'publico',correct:'público',type:'esdrujula'},{word:'medico',correct:'médico',type:'esdrujula'},
        {word:'quimico',correct:'químico',type:'esdrujula'},{word:'fisico',correct:'físico',type:'esdrujula'},{word:'telefono',correct:'teléfono',type:'esdrujula'},
        {word:'microfono',correct:'micrófono',type:'esdrujula'},{word:'semaforo',correct:'semáforo',type:'esdrujula'},{word:'helicoptero',correct:'helicóptero',type:'esdrujula'},
        {word:'termometro',correct:'termómetro',type:'esdrujula'},{word:'kilometro',correct:'kilómetro',type:'esdrujula'},{word:'musica',correct:'música',type:'esdrujula'},
        {word:'matematicas',correct:'matemáticas',type:'esdrujula'},{word:'gramatica',correct:'gramática',type:'esdrujula'},{word:'numero',correct:'número',type:'esdrujula'},
        {word:'espiritu',correct:'espíritu',type:'esdrujula'},{word:'capitulo',correct:'capítulo',type:'esdrujula'},{word:'titulo',correct:'título',type:'esdrujula'},
        {word:'credito',correct:'crédito',type:'esdrujula'},{word:'debito',correct:'débito',type:'esdrujula'},{word:'codigo',correct:'código',type:'esdrujula'},
        {word:'metodo',correct:'método',type:'esdrujula'},{word:'periodo',correct:'período',type:'esdrujula'},{word:'proposito',correct:'propósito',type:'esdrujula'},
        {word:'simbolo',correct:'símbolo',type:'esdrujula'},{word:'estimulo',correct:'estímulo',type:'esdrujula'},{word:'angulo',correct:'ángulo',type:'esdrujula'},
        {word:'musculo',correct:'músculo',type:'esdrujula'},{word:'calculo',correct:'cálculo',type:'esdrujula'},{word:'vinculo',correct:'vínculo',type:'esdrujula'},
        {word:'obstaculo',correct:'obstáculo',type:'esdrujula'},{word:'curriculo',correct:'currículo',type:'esdrujula'},{word:'vehiculo',correct:'vehículo',type:'esdrujula'},
        {word:'ridiculo',correct:'ridículo',type:'esdrujula'},{word:'pelicula',correct:'película',type:'esdrujula'},{word:'particula',correct:'partícula',type:'esdrujula'},
        {word:'molecula',correct:'molécula',type:'esdrujula'},{word:'curicula',correct:'currícula',type:'esdrujula'},{word:'valvula',correct:'válvula',type:'esdrujula'},
        {word:'celula',correct:'célula',type:'esdrujula'},{word:'formula',correct:'fórmula',type:'esdrujula'},{word:'ultima',correct:'última',type:'esdrujula'},
        {word:'ultimo',correct:'último',type:'esdrujula'},{word:'proximo',correct:'próximo',type:'esdrujula'},{word:'maximo',correct:'máximo',type:'esdrujula'},
        {word:'minimo',correct:'mínimo',type:'esdrujula'},{word:'optimo',correct:'óptimo',type:'esdrujula'},{word:'intimo',correct:'íntimo',type:'esdrujula'},
        {word:'articulo',correct:'artículo',type:'esdrujula'},{word:'vehiculo',correct:'vehículo',type:'esdrujula'},{word:'obstaculo',correct:'obstáculo',type:'esdrujula'},
        {word:'espectaculo',correct:'espectáculo',type:'esdrujula'},{word:'circulo',correct:'círculo',type:'esdrujula'},{word:'triangulo',correct:'triángulo',type:'esdrujula'}
    ],
    hiatos: [
        {word:'dia',correct:'día',type:'hiato'},{word:'tia',correct:'tía',type:'hiato'},{word:'mia',correct:'mía',type:'hiato'},
        {word:'fria',correct:'fría',type:'hiato'},{word:'sandia',correct:'sandía',type:'hiato'},{word:'melodia',correct:'melodía',type:'hiato'},
        {word:'energia',correct:'energía',type:'hiato'},{word:'fantasia',correct:'fantasía',type:'hiato'},{word:'compania',correct:'compañía',type:'hiato'},
        {word:'geografia',correct:'geografía',type:'hiato'},{word:'biografia',correct:'biografía',type:'hiato'},{word:'filosofia',correct:'filosofía',type:'hiato'},
        {word:'tecnologia',correct:'tecnología',type:'hiato'},{word:'biologia',correct:'biología',type:'hiato'},{word:'psicologia',correct:'psicología',type:'hiato'},
        {word:'alegria',correct:'alegría',type:'hiato'},{word:'valentia',correct:'valentía',type:'hiato'},{word:'simpatia',correct:'simpatía',type:'hiato'},
        {word:'cortesia',correct:'cortesía',type:'hiato'},{word:'panaderia',correct:'panadería',type:'hiato'},{word:'libreria',correct:'librería',type:'hiato'},
        {word:'joyeria',correct:'joyería',type:'hiato'},{word:'cafeteria',correct:'cafetería',type:'hiato'},{word:'rio',correct:'río',type:'hiato'},
        {word:'frio',correct:'frío',type:'hiato'},{word:'mio',correct:'mío',type:'hiato'},{word:'lio',correct:'lío',type:'hiato'},
        {word:'navio',correct:'navío',type:'hiato'},{word:'desafio',correct:'desafío',type:'hiato'},{word:'rocio',correct:'rocío',type:'hiato'},
        {word:'vacio',correct:'vacío',type:'hiato'},{word:'pua',correct:'púa',type:'hiato'},{word:'grua',correct:'grúa',type:'hiato'},
        {word:'continua',correct:'continúa',type:'hiato'},{word:'actua',correct:'actúa',type:'hiato'},{word:'evalua',correct:'evalúa',type:'hiato'},
        {word:'buho',correct:'búho',type:'hiato'},{word:'duo',correct:'dúo',type:'hiato'},{word:'pais',correct:'país',type:'hiato'},
        {word:'maiz',correct:'maíz',type:'hiato'},{word:'raiz',correct:'raíz',type:'hiato'},{word:'oir',correct:'oír',type:'hiato'},
        {word:'reir',correct:'reír',type:'hiato'},{word:'freir',correct:'freír',type:'hiato'},{word:'baul',correct:'baúl',type:'hiato'},
        {word:'ataud',correct:'ataúd',type:'hiato'},{word:'caida',correct:'caída',type:'hiato'},{word:'oido',correct:'oído',type:'hiato'},
        {word:'leido',correct:'leído',type:'hiato'},{word:'creido',correct:'creído',type:'hiato'},{word:'traido',correct:'traído',type:'hiato'}
    ],
    diacritica: [
        {frase:'_____ niño come helado',correcta:'El',incorrecta:'Él'},{frase:'_____ es mi mejor amigo',correcta:'Él',incorrecta:'El'},
        {frase:'Dile a _____ que venga',correcta:'él',incorrecta:'el'},{frase:'_____ perro ladra mucho',correcta:'El',incorrecta:'Él'},
        {frase:'_____ eres muy listo',correcta:'Tú',incorrecta:'Tu'},{frase:'Dame _____ mochila',correcta:'tu',incorrecta:'tú'},
        {frase:'¿Vienes _____ también?',correcta:'tú',incorrecta:'tu'},{frase:'_____ casa es bonita',correcta:'Tu',incorrecta:'Tú'},
        {frase:'Esto es para _____',correcta:'mí',incorrecta:'mi'},{frase:'_____ hermano es alto',correcta:'Mi',incorrecta:'Mí'},
        {frase:'A _____ me gusta el fútbol',correcta:'mí',incorrecta:'mi'},{frase:'Dame _____ libro',correcta:'mi',incorrecta:'mí'},
        {frase:'_____ quiero ir',correcta:'Sí',incorrecta:'Si'},{frase:'_____ llueve, no salimos',correcta:'Si',incorrecta:'Sí'},
        {frase:'Dijo que _____',correcta:'sí',incorrecta:'si'},{frase:'_____ estudias, aprobarás',correcta:'Si',incorrecta:'Sí'},
        {frase:'Quiero _____ agua',correcta:'más',incorrecta:'mas'},{frase:'Lo intentó, _____ no pudo',correcta:'mas',incorrecta:'más'},
        {frase:'¿Quieres un _____?',correcta:'té',incorrecta:'te'},{frase:'_____ quiero mucho',correcta:'Te',incorrecta:'Té'},
        {frase:'El _____ está caliente',correcta:'té',incorrecta:'te'},{frase:'_____ lo dije ayer',correcta:'Te',incorrecta:'Té'},
        {frase:'Yo _____ la respuesta',correcta:'sé',incorrecta:'se'},{frase:'_____ cayó al suelo',correcta:'Se',incorrecta:'Sé'},
        {frase:'Quiero que me lo _____',correcta:'dé',incorrecta:'de'},{frase:'La casa _____ madera',correcta:'de',incorrecta:'dé'},
        {frase:'_____ no ha llegado',correcta:'Aún',incorrecta:'Aun'},{frase:'_____ así lo intentó',correcta:'Aun',incorrecta:'Aún'}
    ]
};

const WORLDS = [
    {id:'castle',name:'🏰 Castillo',levels:[1,2,3,4,5],bgClass:'bg-castle',platformClass:'platform-castle'},
    {id:'forest',name:'🌲 Bosque',levels:[6,7,8,9,10],bgClass:'bg-forest',platformClass:'platform-forest'},
    {id:'ocean',name:'🌊 Océano',levels:[11,12,13,14,15],bgClass:'bg-ocean',platformClass:'platform-ocean'},
    {id:'space',name:'🚀 Espacio',levels:[16,17,18,19,20],bgClass:'bg-space',platformClass:'platform-space'},
    {id:'candy',name:'🍬 Reino Dulce',levels:[21,22,23,24,25],bgClass:'bg-candy',platformClass:'platform-candy'}
];

let gameState = {
    numPlayers:1,mode:'competitive',currentPlayer:0,players:[],level:1,
    isPlaying:false,isPaused:false,currentWord:null,collectedTilde:false,
    wordsCompleted:0,wordsPerLevel:5,usedWords:new Set(),coopGoal:500,
    selectedVowelIndex:-1,selectedClassification:null,tildeCorrect:false,accentedWord:''
};

let player = {x:100,y:500,vx:0,vy:0,width:40,height:55,speed:5,jumpForce:-13,gravity:0.6,onGround:false,onLadder:false,isClimbing:false,facingRight:true};
let platforms=[],ladders=[],activeTilde=null,enemies=[],keys={},touchStates={left:false,right:false,up:false,down:false,jump:false};
let gameLoopId=null,enemySpawnInterval=null,tildeInterval=null;

function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}

function selectPlayers(num){
    gameState.numPlayers=num;
    document.querySelectorAll('.player-option').forEach(p=>p.classList.remove('selected'));
    document.querySelector(`[data-players="${num}"]`).classList.add('selected');
    if(num===1)startGame();else setTimeout(()=>showScreen('mode-screen'),200);
}

function selectMode(mode){
    gameState.mode=mode;
    document.querySelectorAll('.mode-option').forEach(m=>m.classList.remove('selected'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('selected');
    setTimeout(()=>startGame(),200);
}

function startGame(){
    gameState.players=[];
    for(let i=0;i<gameState.numPlayers;i++)gameState.players.push({name:`J${i+1}`,score:0,lives:3});
    gameState.currentPlayer=0;gameState.level=1;gameState.usedWords=new Set();gameState.wordsCompleted=0;gameState.isPlaying=true;
    if('ontouchstart' in window)document.getElementById('touch-controls').classList.add('active');
    showScreen('game-screen');showWorldIntro();
}

function getCurrentWorld(){for(let w of WORLDS)if(w.levels.includes(gameState.level))return w;return WORLDS[0];}

function showWorldIntro(){
    const world=getCurrentWorld();
    document.getElementById('world-intro-name').textContent=world.name;
    document.getElementById('world-intro-level').textContent=`Nivel ${gameState.level}`;
    document.getElementById('world-intro').classList.add('active');
    setTimeout(()=>{document.getElementById('world-intro').classList.remove('active');initLevel();},2000);
}

function initLevel(){
    const gameArea=document.getElementById('game-area');gameArea.innerHTML='';
    platforms=[];ladders=[];activeTilde=null;enemies=[];
    if(tildeInterval){clearInterval(tildeInterval);tildeInterval=null;}
    const world=getCurrentWorld();
    createWorldBackground(world);createPlatforms(world);createLadders();createGoalZone();selectNewWord();
    player.x=100;player.y=520;player.vx=0;player.vy=0;gameState.collectedTilde=false;
    createPlayerSprite();updateHUD();updateCollectedIndicator();
    if(gameLoopId)cancelAnimationFrame(gameLoopId);gameLoop();startEnemySpawner();
}

function createWorldBackground(world){
    const gameArea=document.getElementById('game-area');
    const bg=document.createElement('div');bg.className=`world-bg ${world.bgClass}`;
    if(world.id==='castle'){bg.innerHTML=`<div class="moon" style="top:30px;right:50px;"></div>`;}
    else if(world.id==='forest'){bg.innerHTML=`<div class="sun" style="top:20px;right:60px;"></div>`;}
    else if(world.id==='ocean'){for(let i=0;i<8;i++)bg.innerHTML+=`<div class="bubble" style="left:${Math.random()*100}%;bottom:${Math.random()*50}px;animation-delay:${Math.random()*4}s;"></div>`;}
    else if(world.id==='space'){for(let i=0;i<50;i++)bg.innerHTML+=`<div class="star" style="left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*2}s;"></div>`;bg.innerHTML+=`<div class="planet" style="width:80px;height:80px;background:linear-gradient(135deg,#E57373 0%,#C62828 100%);top:50px;right:80px;"></div>`;}
    else if(world.id==='candy'){bg.innerHTML=`<div class="lollipop" style="left:30px;"><div class="lollipop-candy"></div><div class="lollipop-stick"></div></div><div class="lollipop" style="right:40px;"><div class="lollipop-candy" style="background:conic-gradient(#4CAF50 0deg,white 60deg,#4CAF50 120deg,white 180deg,#4CAF50 240deg,white 300deg,#4CAF50 360deg);"></div><div class="lollipop-stick"></div></div>`;}
    gameArea.appendChild(bg);
}

function createPlatforms(world){
    const gameArea=document.getElementById('game-area');const gameWidth=gameArea.offsetWidth||900;
    const configs=[
        {y:580,x:0,width:gameWidth},
        {y:460,x:80,width:gameWidth-130},
        {y:340,x:50,width:gameWidth-100},
        {y:220,x:80,width:gameWidth-130},
        {y:100,x:150,width:gameWidth-300}
    ];
    configs.forEach(c=>{
        const p=document.createElement('div');p.className=`platform ${world.platformClass}`;
        p.style.left=c.x+'px';p.style.top=c.y+'px';p.style.width=c.width+'px';
        gameArea.appendChild(p);platforms.push({x:c.x,y:c.y,width:c.width,height:18});
    });
}

// ESCALERAS: Ahora hay más escaleras conectando todas las plataformas
function createLadders(){
    const gameArea=document.getElementById('game-area');const gameWidth=gameArea.offsetWidth||900;
    // Escaleras entre suelo y plataforma 1
    const configs=[
        {x:gameWidth-120,y1:460,y2:580},
        {x:200,y1:460,y2:580},
        // Escaleras entre plataforma 1 y 2
        {x:150,y1:340,y2:460},
        {x:gameWidth-200,y1:340,y2:460},
        {x:gameWidth/2,y1:340,y2:460},
        // Escaleras entre plataforma 2 y 3
        {x:gameWidth-180,y1:220,y2:340},
        {x:250,y1:220,y2:340},
        {x:gameWidth/2 + 100,y1:220,y2:340},
        // Escaleras entre plataforma 3 y meta
        {x:220,y1:100,y2:220},
        {x:gameWidth-250,y1:100,y2:220},
        {x:gameWidth/2 - 50,y1:100,y2:220}
    ];
    configs.forEach(c=>{
        const l=document.createElement('div');l.className='ladder';
        l.style.left=c.x+'px';l.style.top=c.y1+'px';l.style.height=(c.y2-c.y1)+'px';
        gameArea.appendChild(l);ladders.push({x:c.x,y:c.y1,width:28,height:c.y2-c.y1});
    });
}

function createGoalZone(){const g=document.createElement('div');g.className='goal-zone';g.textContent='🎯 META';document.getElementById('game-area').appendChild(g);}

function createPlayerSprite(){
    const gameArea=document.getElementById('game-area');
    const p=document.createElement('div');p.className='player';p.id='player-sprite';
    p.innerHTML=`<div class="player-sprite"><div class="player-head"><div class="player-hair"></div><div class="player-eyes"><div class="player-eye"></div><div class="player-eye"></div></div></div><div class="player-body"></div><div class="player-arms"><div class="player-arm"><div class="player-hand"></div></div><div class="player-arm"><div class="player-hand"></div></div></div><div class="player-legs"><div class="player-leg"><div class="player-shoe"></div></div><div class="player-leg"><div class="player-shoe"></div></div></div></div>`;
    p.style.left=player.x+'px';p.style.top=player.y+'px';gameArea.appendChild(p);
}

function selectNewWord(){
    const world=getCurrentWorld();
    if(world.id==='candy'){
        const unused=WORD_BANK.diacritica.filter(w=>!gameState.usedWords.has(JSON.stringify(w)));
        if(unused.length>0){
            const sel=unused[Math.floor(Math.random()*unused.length)];
            gameState.usedWords.add(JSON.stringify(sel));gameState.currentWord={type:'diacritica',data:sel};
            document.getElementById('word-display').textContent=sel.frase.replace('_____','___');return;
        }
    }
    const allWords=[...WORD_BANK.agudas,...WORD_BANK.llanas,...WORD_BANK.esdrujulas,...WORD_BANK.hiatos];
    const unused=allWords.filter(w=>!gameState.usedWords.has(w.word));
    let sel;
    if(unused.length>0){sel=unused[Math.floor(Math.random()*unused.length)];gameState.usedWords.add(sel.word);}
    else{gameState.usedWords.clear();sel=allWords[Math.floor(Math.random()*allWords.length)];gameState.usedWords.add(sel.word);}
    gameState.currentWord={type:'normal',data:sel};
    document.getElementById('word-display').textContent=sel.word.toUpperCase();
    startTildeSpawner();
}

// CONFIGURACIÓN DE DIFICULTAD POR NIVEL
function getTildeDifficulty(){
    const level = gameState.level;
    // Nivel 1-5: Fácil
    // Nivel 6-10: Medio
    // Nivel 11-15: Difícil
    // Nivel 16-20: Muy difícil
    // Nivel 21-25: Experto
    
    // Tiempo visible (ms): empieza alto, va bajando
    const visibleTime = Math.max(1500, 4000 - (level * 100));
    
    // Tiempo oculto (ms): empieza bajo, va subiendo un poco
    const hiddenTime = Math.min(2500, 1000 + (level * 50));
    
    // Velocidad de movimiento
    const speed = Math.min(6, 2 + (level * 0.15));
    
    // Velocidad de huida cuando el jugador se acerca
    const fleeSpeed = Math.min(8, 4 + (level * 0.15));
    
    return { visibleTime, hiddenTime, speed, fleeSpeed };
}

// SISTEMA DE TILDE QUE APARECE Y DESAPARECE
function startTildeSpawner(){
    if(tildeInterval){clearInterval(tildeInterval);tildeInterval=null;}
    if(gameState.collectedTilde || gameState.currentWord.type==='diacritica') return;
    
    spawnTilde();
}

function spawnTilde(){
    if(gameState.collectedTilde || !gameState.isPlaying || gameState.isPaused) return;
    if(gameState.currentWord && gameState.currentWord.type==='diacritica') return;
    
    // Eliminar tilde anterior si existe
    if(activeTilde && activeTilde.element){
        activeTilde.element.remove();
        activeTilde = null;
    }
    
    const gameArea=document.getElementById('game-area');
    const difficulty = getTildeDifficulty();
    
    // Crear el elemento de la tilde (solo el símbolo ´)
    const t=document.createElement('div');
    t.className='tilde running';
    t.innerHTML=`<div class="tilde-body"><div class="tilde-eyes"><div class="tilde-eye"></div><div class="tilde-eye"></div></div><span class="tilde-char">´</span></div><div class="tilde-legs"><div class="tilde-leg"></div><div class="tilde-leg"></div></div>`;
    
    // Elegir plataforma aleatoria (no el suelo, no la meta)
    const platIndex = 1 + Math.floor(Math.random() * 3); // Plataformas 1, 2 o 3
    const plat = platforms[platIndex];
    
    // Posición aleatoria en la plataforma
    const xPos = plat.x + 50 + Math.random() * (plat.width - 100);
    t.style.left = xPos + 'px';
    t.style.top = (plat.y - 52) + 'px';
    t.style.opacity = '0';
    t.style.transition = 'opacity 0.3s ease';
    
    gameArea.appendChild(t);
    
    // Aparecer con animación
    setTimeout(() => {
        t.style.opacity = '1';
    }, 50);
    
    activeTilde = {
        element: t,
        x: xPos,
        y: plat.y - 52,
        width: 44,
        height: 52,
        vx: (Math.random() > 0.5 ? 1 : -1) * difficulty.speed,
        platformIndex: platIndex,
        visible: true
    };
    
    // Programar desaparición
    setTimeout(() => {
        hideTilde();
    }, difficulty.visibleTime);
}

function hideTilde(){
    if(!activeTilde || gameState.collectedTilde) return;
    
    // Desvanecer
    if(activeTilde.element){
        activeTilde.element.style.opacity = '0';
        setTimeout(() => {
            if(activeTilde && activeTilde.element){
                activeTilde.element.remove();
                activeTilde = null;
            }
            // Programar reaparición en otra plataforma
            const difficulty = getTildeDifficulty();
            setTimeout(() => {
                if(!gameState.collectedTilde && gameState.isPlaying && !gameState.isPaused){
                    spawnTilde();
                }
            }, difficulty.hiddenTime);
        }, 300);
    }
}

function startEnemySpawner(){
    if(enemySpawnInterval)clearInterval(enemySpawnInterval);
    const rate=Math.max(1800,4000-(gameState.level*80));
    enemySpawnInterval=setInterval(()=>{if(!gameState.isPaused&&gameState.isPlaying)spawnEnemy();},rate);
}

function spawnEnemy(){
    const gameArea=document.getElementById('game-area');const gameWidth=gameArea.offsetWidth||900;
    const e=document.createElement('div');e.className='enemy pencil-enemy falling';
    e.innerHTML=`<div class="pencil-top"></div><div class="pencil-body"><div class="pencil-face"><div class="pencil-brows"><div class="pencil-brow"></div><div class="pencil-brow"></div></div><div class="pencil-eyes"><div class="pencil-eye"></div><div class="pencil-eye"></div></div></div></div><div class="pencil-tip"></div>`;
    const x=80+Math.random()*(gameWidth-160);e.style.left=x+'px';e.style.top='-70px';gameArea.appendChild(e);
    enemies.push({element:e,x:x,y:-70,width:18,height:70,vy:2.5+Math.random()*2+(gameState.level*0.15),vx:(Math.random()-0.5)*3});
}

function gameLoop(){
    if(!gameState.isPlaying)return;
    if(!gameState.isPaused){update();render();}
    gameLoopId=requestAnimationFrame(gameLoop);
}

function update(){handleInput();updatePlayer();updateTilde();updateEnemies();checkCollisions();}

function handleInput(){
    const ms=player.speed;
    if(keys['ArrowLeft']||keys['KeyA']||touchStates.left){player.vx=-ms;player.facingRight=false;}
    else if(keys['ArrowRight']||keys['KeyD']||touchStates.right){player.vx=ms;player.facingRight=true;}
    else player.vx=0;
    if(player.onLadder){
        if(keys['ArrowUp']||keys['KeyW']||touchStates.up){player.vy=-ms*0.7;player.isClimbing=true;}
        else if(keys['ArrowDown']||keys['KeyS']||touchStates.down){player.vy=ms*0.7;player.isClimbing=true;}
        else{player.vy=0;player.isClimbing=false;}
    }
    if((keys['Space']||touchStates.jump)&&player.onGround&&!player.onLadder){player.vy=player.jumpForce;player.onGround=false;keys['Space']=false;touchStates.jump=false;}
}

function updatePlayer(){
    const pe=document.getElementById('player-sprite');if(!pe)return;
    if(!player.onLadder)player.vy+=player.gravity;
    player.x+=player.vx;player.y+=player.vy;
    const ga=document.getElementById('game-area');const gw=ga.offsetWidth||900;const gh=ga.offsetHeight||700;
    player.x=Math.max(0,Math.min(gw-player.width,player.x));player.y=Math.max(0,Math.min(gh-player.height,player.y));
    player.onGround=false;player.onLadder=false;
    platforms.forEach(p=>{if(player.x+player.width>p.x&&player.x<p.x+p.width&&player.y+player.height>p.y&&player.y+player.height<p.y+p.height+15&&player.vy>=0){player.y=p.y-player.height;player.vy=0;player.onGround=true;}});
    ladders.forEach(l=>{if(player.x+player.width>l.x&&player.x<l.x+l.width&&player.y+player.height>l.y&&player.y<l.y+l.height)player.onLadder=true;});
    pe.style.left=player.x+'px';pe.style.top=player.y+'px';pe.style.transform=player.facingRight?'scaleX(1)':'scaleX(-1)';
    pe.classList.toggle('walking',Math.abs(player.vx)>0.5&&player.onGround);
}

function updateTilde(){
    if(!activeTilde||gameState.collectedTilde)return;
    
    const difficulty = getTildeDifficulty();
    const plat=platforms[activeTilde.platformIndex];
    
    // Movimiento horizontal
    activeTilde.x+=activeTilde.vx;
    
    // Rebotar en los bordes de la plataforma
    if(activeTilde.x<plat.x+10){
        activeTilde.x=plat.x+10;
        activeTilde.vx*=-1;
    }
    if(activeTilde.x>plat.x+plat.width-activeTilde.width-10){
        activeTilde.x=plat.x+plat.width-activeTilde.width-10;
        activeTilde.vx*=-1;
    }
    
    // Huir del jugador si está cerca
    const dx=player.x-activeTilde.x,dy=player.y-activeTilde.y,dist=Math.sqrt(dx*dx+dy*dy);
    if(dist<120){
        // Huye más rápido según el nivel
        activeTilde.vx=(dx>0?-1:1)*difficulty.fleeSpeed;
    }else if(Math.abs(activeTilde.vx)>difficulty.speed){
        // Volver a velocidad normal gradualmente
        activeTilde.vx*=0.95;
    }
    
    activeTilde.element.style.left=activeTilde.x+'px';
    activeTilde.element.style.transform=activeTilde.vx>0?'scaleX(-1)':'scaleX(1)';
}

function updateEnemies(){
    const ga=document.getElementById('game-area');const gh=ga.offsetHeight||700;const gw=ga.offsetWidth||900;
    enemies.forEach((e,i)=>{
        e.y+=e.vy;e.x+=e.vx;if(e.x<0||e.x>gw-e.width)e.vx*=-1;
        e.element.style.left=e.x+'px';e.element.style.top=e.y+'px';
        if(e.y>gh){e.element.remove();enemies.splice(i,1);}
    });
}

function checkCollisions(){
    if(activeTilde&&!gameState.collectedTilde&&player.x<activeTilde.x+activeTilde.width&&player.x+player.width>activeTilde.x&&player.y<activeTilde.y+activeTilde.height&&player.y+player.height>activeTilde.y)collectTilde();
    enemies.forEach(e=>{if(player.x<e.x+e.width&&player.x+player.width>e.x&&player.y<e.y+e.height&&player.y+player.height>e.y)hitByEnemy();});
    if(player.y<120&&gameState.collectedTilde)reachGoal();
}

function collectTilde(){
    gameState.collectedTilde=true;
    activeTilde.element.classList.add('collected');
    if(tildeInterval){clearInterval(tildeInterval);tildeInterval=null;}
    setTimeout(()=>{if(activeTilde){activeTilde.element.remove();activeTilde=null;}},400);
    updateCollectedIndicator();
}

function updateCollectedIndicator(){
    const ind=document.getElementById('collected-indicator');const pre=document.getElementById('collected-preview');
    if(gameState.collectedTilde){pre.textContent='´';ind.classList.add('active');}else ind.classList.remove('active');
}

function reachGoal(){
    gameState.isPaused=true;const world=getCurrentWorld();
    if(tildeInterval){clearInterval(tildeInterval);tildeInterval=null;}
    if(world.id==='candy')showDiacriticModal();else showTildeModal();
}

function showTildeModal(){
    const m=document.getElementById('tilde-modal');const wc=document.getElementById('tilde-word');
    const word=gameState.currentWord.data.word;wc.innerHTML='';
    const vowels='aeiouAEIOU';
    for(let i=0;i<word.length;i++){
        const s=document.createElement('span');s.className='letter-box';s.textContent=word[i].toUpperCase();s.dataset.index=i;
        if(vowels.includes(word[i])){s.classList.add('vowel');s.onclick=()=>selectVowel(s,i);}
        wc.appendChild(s);
    }
    gameState.selectedVowelIndex=-1;document.getElementById('tilde-confirm-btn').disabled=true;m.classList.add('active');
}

function selectVowel(el,idx){
    document.querySelectorAll('#tilde-word .letter-box').forEach(l=>l.classList.remove('selected'));
    el.classList.add('selected');gameState.selectedVowelIndex=idx;document.getElementById('tilde-confirm-btn').disabled=false;
}

function confirmTildePlacement(){
    if(gameState.selectedVowelIndex<0)return;
    const word=gameState.currentWord.data.word;const correct=gameState.currentWord.data.correct;
    const map={'a':'á','e':'é','i':'í','o':'ó','u':'ú'};
    let attempt='';for(let i=0;i<word.length;i++)attempt+=(i===gameState.selectedVowelIndex&&map[word[i].toLowerCase()])?map[word[i].toLowerCase()]:word[i];
    gameState.tildeCorrect=attempt.toLowerCase()===correct.toLowerCase();gameState.accentedWord=gameState.tildeCorrect?correct:attempt;
    document.getElementById('tilde-modal').classList.remove('active');showClassifyModal();
}

function showClassifyModal(){
    document.getElementById('classify-word-display').textContent=gameState.accentedWord.toUpperCase();
    document.querySelectorAll('.class-option').forEach(o=>o.classList.remove('selected'));
    gameState.selectedClassification=null;document.getElementById('class-confirm-btn').disabled=true;
    document.getElementById('classify-modal').classList.add('active');
}

function selectClassification(type){
    document.querySelectorAll('.class-option').forEach(o=>o.classList.remove('selected'));
    event.target.classList.add('selected');gameState.selectedClassification=type;document.getElementById('class-confirm-btn').disabled=false;
}

function confirmClassification(){
    if(!gameState.selectedClassification)return;
    const correctType=gameState.currentWord.data.type;const classCorrect=gameState.selectedClassification===correctType;
    document.getElementById('classify-modal').classList.remove('active');
    if(gameState.tildeCorrect&&classCorrect){showFeedback(true,'¡PERFECTO!');addScore(150);nextWord();}
    else if(gameState.tildeCorrect){showFeedback(true,'¡BIEN! +50');addScore(50);nextWord();}
    else{showFeedback(false,'¡INCORRECTO!');loseLife();}
}

function showDiacriticModal(){
    const m=document.getElementById('diacritic-modal');const s=document.getElementById('diacritic-sentence');const o=document.getElementById('diacritic-options');
    const d=gameState.currentWord.data;s.textContent=d.frase;o.innerHTML='';
    [d.correcta,d.incorrecta].sort(()=>Math.random()-0.5).forEach(opt=>{
        const b=document.createElement('button');b.className='diacritic-btn';b.textContent=opt;
        b.onclick=()=>checkDiacriticAnswer(opt,d.correcta);o.appendChild(b);
    });
    m.classList.add('active');
}

function checkDiacriticAnswer(sel,cor){
    document.getElementById('diacritic-modal').classList.remove('active');
    if(sel===cor){showFeedback(true,'¡CORRECTO!');addScore(100);nextWord();}
    else{showFeedback(false,'¡INCORRECTO!');loseLife();}
}

function showFeedback(success,text){
    const f=document.getElementById('feedback');f.textContent=text;f.className='feedback '+(success?'show-correct':'show-incorrect');
    setTimeout(()=>f.className='feedback',1200);
}

function addScore(pts){gameState.players[gameState.currentPlayer].score+=pts;updateHUD();}

function nextWord(){
    gameState.wordsCompleted++;
    if(gameState.wordsCompleted>=gameState.wordsPerLevel){
        gameState.level++;
        if(gameState.level>25)endGame();
        else{const oldW=getCurrentWorld();const newW=WORLDS.find(w=>w.levels.includes(gameState.level));if(newW&&newW.id!==oldW.id)showWorldIntro();else{gameState.wordsCompleted=0;initLevel();}}
    }else resetForNextWord();
}

function resetForNextWord(){
    player.x=100;player.y=520;player.vx=0;player.vy=0;
    gameState.collectedTilde=false;gameState.isPaused=false;
    if(tildeInterval){clearInterval(tildeInterval);tildeInterval=null;}
    updateCollectedIndicator();selectNewWord();
}

function hitByEnemy(){loseLife();}

function loseLife(){
    gameState.players[gameState.currentPlayer].lives--;updateHUD();
    if(gameState.players[gameState.currentPlayer].lives<=0)playerEliminated();else switchPlayer();
}

function switchPlayer(){
    let next=(gameState.currentPlayer+1)%gameState.numPlayers;let att=0;
    while(gameState.players[next].lives<=0&&att<gameState.numPlayers){next=(next+1)%gameState.numPlayers;att++;}
    if(att>=gameState.numPlayers||gameState.numPlayers===1){resetPlayerPosition();return;}
    gameState.currentPlayer=next;
    document.getElementById('transition-player').textContent=`Jugador ${gameState.currentPlayer+1}`;
    document.getElementById('player-transition').classList.add('active');gameState.isPaused=true;
}

function continueAfterTransition(){document.getElementById('player-transition').classList.remove('active');gameState.isPaused=false;resetPlayerPosition();updateHUD();}

function resetPlayerPosition(){
    player.x=100;player.y=520;player.vx=0;player.vy=0;gameState.collectedTilde=false;gameState.isPaused=false;updateCollectedIndicator();
    if(tildeInterval){clearInterval(tildeInterval);tildeInterval=null;}
    if(gameState.currentWord&&gameState.currentWord.type!=='diacritica')startTildeSpawner();
}

function playerEliminated(){const alive=gameState.players.filter(p=>p.lives>0);if(alive.length===0)endGame();else switchPlayer();}

function endGame(){
    gameState.isPlaying=false;
    if(enemySpawnInterval)clearInterval(enemySpawnInterval);
    if(tildeInterval)clearInterval(tildeInterval);
    if(gameLoopId)cancelAnimationFrame(gameLoopId);
    showResults();
}

function showResults(){
    const rc=document.getElementById('results-content');
    if(gameState.mode==='cooperative'){
        const total=gameState.players.reduce((s,p)=>s+p.score,0);const success=total>=gameState.coopGoal;
        rc.innerHTML=`<div class="coop-result"><div class="coop-total">${total} puntos</div><div class="coop-goal">Objetivo: ${gameState.coopGoal}</div><div class="coop-status">${success?'🎉 ¡CONSEGUIDO!':'😢 ¡Casi!'}</div></div>`;
    }else{
        const sorted=[...gameState.players].sort((a,b)=>b.score-a.score);
        let html='<div class="podium">';
        if(sorted.length>=2)html+=`<div class="podium-place second"><div class="podium-medal">🥈</div><div class="podium-name">${sorted[1].name}</div><div class="podium-score">${sorted[1].score}</div></div>`;
        html+=`<div class="podium-place first"><div class="podium-medal">🥇</div><div class="podium-name">${sorted[0].name}</div><div class="podium-score">${sorted[0].score}</div></div>`;
        if(sorted.length>=3)html+=`<div class="podium-place third"><div class="podium-medal">🥉</div><div class="podium-name">${sorted[2].name}</div><div class="podium-score">${sorted[2].score}</div></div>`;
        html+='</div>';rc.innerHTML=html;
    }
    showScreen('results-screen');
}

function updateHUD(){
    const cp=gameState.players[gameState.currentPlayer];
    document.getElementById('current-player-badge').textContent=`J${gameState.currentPlayer+1}`;
    const ld=document.getElementById('lives-display');ld.innerHTML='';
    for(let i=0;i<3;i++){const h=document.createElement('span');h.className='heart'+(i>=cp.lives?' lost':'');h.textContent='❤️';ld.appendChild(h);}
    document.getElementById('score-display').textContent=cp.score;
    document.getElementById('level-display').textContent=`${gameState.level}/25`;
    document.getElementById('world-badge').textContent=getCurrentWorld().name;
}

function render(){}
function pauseGame(){
    gameState.isPaused=true;
    document.getElementById('pause-overlay').classList.add('active');
}
function resumeGame(){
    gameState.isPaused=false;
    document.getElementById('pause-overlay').classList.remove('active');
}
function quitToMenu(){
    gameState.isPlaying=false;
    if(enemySpawnInterval)clearInterval(enemySpawnInterval);
    if(tildeInterval)clearInterval(tildeInterval);
    if(gameLoopId)cancelAnimationFrame(gameLoopId);
    document.getElementById('pause-overlay').classList.remove('active');
    showScreen('menu-screen');
}
function playAgain(){showScreen('players-screen');}

document.addEventListener('keydown',e=>{
    keys[e.code]=true;
    if(e.code==='Escape'&&gameState.isPlaying){
        const modalsOpen=document.getElementById('tilde-modal').classList.contains('active')||document.getElementById('classify-modal').classList.contains('active')||document.getElementById('diacritic-modal').classList.contains('active');
        if(gameState.isPaused&&!modalsOpen)resumeGame();else if(!gameState.isPaused)pauseGame();
    }
    if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault();
});
document.addEventListener('keyup',e=>keys[e.code]=false);

function setupTouchControls(){
    const btns={'btn-left':'left','btn-right':'right','btn-up':'up','btn-down':'down','btn-jump':'jump'};
    Object.entries(btns).forEach(([id,st])=>{
        const b=document.getElementById(id);if(b){
            b.addEventListener('touchstart',e=>{e.preventDefault();touchStates[st]=true;});
            b.addEventListener('touchend',e=>{e.preventDefault();touchStates[st]=false;});
            b.addEventListener('touchcancel',()=>touchStates[st]=false);
            b.addEventListener('mousedown',()=>touchStates[st]=true);
            b.addEventListener('mouseup',()=>touchStates[st]=false);
            b.addEventListener('mouseleave',()=>touchStates[st]=false);
        }
    });
}
document.addEventListener('DOMContentLoaded',setupTouchControls);
document.addEventListener('touchmove',e=>{if(e.scale!==1)e.preventDefault();},{passive:false});
