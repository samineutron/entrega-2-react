//Le pedi a la IA que me generara un objeto para simular una peticion a una API con contenido real

const catalogo = {
    productos: [
        {
        id: "0001",
        categoria: "zapatillas",
        titulo: "Nike Pegasus 42",
        marca: "Nike",
        precio: 145,
        descripcion: "Zapatilla de running pensada para entrenamientos diarios sobre asfalto. Entrega una pisada reactiva y cómoda gracias a su amortiguación de largo completo, con una sensación estable desde el talón hasta la punta. Su parte superior transpirable ayuda a mantener frescura y un ajuste agradable en sesiones cortas o recorridos largos."
        },
        {
        id: "0002",
        categoria: "zapatillas",
        titulo: "Nike Pegasus Premium SP",
        marca: "Nike",
        precio: 220,
        descripcion: "Modelo orientado a quienes buscan una experiencia más premium en cada salida. Combina una estética moderna con una sensación de impulso marcada, útil para ritmos medios y entrenamientos con cambios de velocidad. El diseño prioriza comodidad, respuesta y una presencia visual fuerte para usar tanto al correr como en estilo deportivo urbano."
        },
        {
        id: "0003",
        categoria: "zapatillas",
        titulo: "adidas Adizero Adios Pro 4",
        marca: "adidas",
        precio: 250,
        descripcion: "Zapatilla de alto rendimiento creada para corredores que buscan velocidad y eficiencia en distancias largas. Su construcción ligera favorece la transición rápida de la pisada y mantiene una sensación de impulso constante. Es una opción muy enfocada en rendimiento, ideal para días de competencia, trabajos de ritmo y entrenamientos exigentes."
        },
        {
        id: "0004",
        categoria: "zapatillas",
        titulo: "adidas Hyperboost Edge",
        marca: "adidas",
        precio: 180,
        descripcion: "Pensada para correr con una sensación suave y enérgica al mismo tiempo, esta zapatilla ofrece comodidad para kilómetros diarios y suficiente respuesta para subir el ritmo cuando hace falta. La silueta entrega soporte agradable en la zona media y una apariencia actual, adecuada para entrenamiento regular y uso deportivo fuera de pista."
        },
        {
        id: "0005",
        categoria: "zapatillas",
        titulo: "PUMA Fast-R Nitro Elite 3",
        marca: "PUMA",
        precio: 260,
        descripcion: "Modelo de competición enfocado en velocidad, con un diseño agresivo y sensación de impulso desde los primeros apoyos. Está orientado a corredores que quieren maximizar respuesta en sesiones intensas y carreras. Su construcción busca reducir peso, mejorar la eficiencia y mantener estabilidad razonable en ritmos altos sobre superficies urbanas."
        },
        {
        id: "0006",
        categoria: "zapatillas",
        titulo: "PUMA Velocity Nitro 3",
        marca: "PUMA",
        precio: 140,
        descripcion: "Zapatilla versátil para uso frecuente, preparada para entrenamientos diarios y salidas de ritmo cómodo. Combina amortiguación equilibrada, una base estable y una parte superior ligera que favorece la ventilación. Se adapta bien a corredores que quieren un modelo confiable para sumar kilómetros con confort y una respuesta moderada."
        },
        {
        id: "0007",
        categoria: "zapatillas",
        titulo: "Nike Vomero 18",
        marca: "Nike",
        precio: 160,
        descripcion: "Opción centrada en amortiguación abundante y confort para quienes priorizan suavidad en cada paso. Funciona muy bien en fondos, trotes regenerativos y rutinas semanales donde la protección del impacto es importante. La sensación bajo el pie es acogedora, con buena estabilidad y un ajuste amable para largas jornadas de uso."
        },
        {
        id: "0008",
        categoria: "zapatillas",
        titulo: "adidas Evo SL",
        marca: "adidas",
        precio: 150,
        descripcion: "Modelo liviano con enfoque ágil para quienes disfrutan una sensación rápida sin llegar a una zapatilla exclusivamente de carrera. Su diseño ayuda a mantener transiciones fluidas y una pisada viva en entrenamientos diarios, trabajos de tempo o sesiones variadas. También destaca por una silueta moderna fácil de combinar fuera del deporte."
        },
        {
        id: "0009",
        categoria: "zapatillas",
        titulo: "PUMA Deviate Nitro 3",
        marca: "PUMA",
        precio: 190,
        descripcion: "Zapatilla pensada para corredores que quieren mezclar entrenamiento rápido con rendimiento sólido en distancias medias y largas. Entrega una pisada dinámica, con buena combinación entre amortiguación y respuesta. La geometría favorece una transición continua y el upper ligero ayuda a mantener comodidad durante sesiones exigentes o progresivos."
        },
        {
        id: "0010",
        categoria: "zapatillas",
        titulo: "Nike Pegasus Plus",
        marca: "Nike",
        precio: 190,
        descripcion: "Versión orientada a una sensación más viva dentro de la familia Pegasus, manteniendo un equilibrio entre comodidad diaria y respuesta rápida. Resulta atractiva para corredores que alternan trotes suaves con entrenamientos de ritmo, y también para quienes valoran una estética deportiva limpia con tecnología moderna para uso cotidiano."
        },

        {
        id: "0011",
        categoria: "poleras",
        titulo: "adidas Essentials Boyfriend Tee",
        marca: "adidas",
        precio: 24,
        descripcion: "Polera casual de inspiración deportiva con calce relajado y tejido cómodo para uso diario. Funciona bien para combinar con shorts, joggers o jeans, entregando una estética simple pero actual. Su diseño prioriza libertad de movimiento, suavidad al tacto y versatilidad para rutinas urbanas, descanso en casa o salidas informales."
        },
        {
        id: "0012",
        categoria: "poleras",
        titulo: "PUMA Run Club Graphic Tee",
        marca: "PUMA",
        precio: 35,
        descripcion: "Prenda ligera pensada para acompañar entrenamientos suaves, caminatas o actividades casuales con inspiración running. El gráfico frontal le aporta identidad visual sin perder sencillez, mientras el tejido busca mantener comodidad prolongada. Es una polera versátil para quienes quieren un look deportivo fácil de usar dentro y fuera del ejercicio."
        },
        {
        id: "0013",
        categoria: "poleras",
        titulo: "Nike Dri-FIT Legend Tee",
        marca: "Nike",
        precio: 30,
        descripcion: "Polera deportiva orientada a sesiones de entrenamiento general, gimnasio y uso activo diario. Su tejido ayuda a gestionar la humedad y a mantener una sensación más seca durante el movimiento. El corte clásico facilita combinarla con distintas prendas, logrando una opción práctica para ejercicio regular con estética limpia y reconocible."
        },
        {
        id: "0014",
        categoria: "poleras",
        titulo: "adidas Club Tennis Climacool Tee",
        marca: "adidas",
        precio: 29.99,
        descripcion: "Diseñada con inspiración en el tenis, esta polera ofrece ligereza, frescura y una silueta enfocada en facilitar movilidad durante esfuerzos repetidos. Va bien para entrenar, jugar o simplemente vestir con un look técnico y ordenado. La sensación general es cómoda, funcional y preparada para climas cálidos o sesiones intensas."
        },
        {
        id: "0015",
        categoria: "poleras",
        titulo: "PUMA Essentials Logo Tee",
        marca: "PUMA",
        precio: 22,
        descripcion: "Polera básica con identidad de marca marcada y una construcción pensada para acompañar el día a día. Tiene una estética sencilla, fácil de combinar y adecuada para quienes prefieren prendas funcionales sin demasiados elementos. Resulta útil como fondo de armario deportivo, tanto para descanso como para actividad ligera o paseos."
        },
        {
        id: "0016",
        categoria: "poleras",
        titulo: "Nike Sportswear Club Tee",
        marca: "Nike",
        precio: 28,
        descripcion: "Prenda urbana de inspiración deportiva con calce cómodo y diseño minimalista. Está pensada para uso diario, con una textura agradable y una caída sencilla que combina con múltiples estilos. Funciona muy bien como polera base para outfits casuales, conservando una imagen limpia, versátil y reconocible dentro del catálogo de la marca."
        },
        {
        id: "0017",
        categoria: "poleras",
        titulo: "adidas Premium Essentials Tee",
        marca: "adidas",
        precio: 35,
        descripcion: "Modelo con enfoque más refinado dentro de una línea esencial, pensado para quienes valoran materiales agradables y una estética sobria. Su silueta favorece un uso casual continuo, mientras la construcción prioriza comodidad y sensación premium. Es una prenda simple, pero con suficiente presencia para elevar un look deportivo cotidiano."
        },
        {
        id: "0018",
        categoria: "poleras",
        titulo: "PUMA Train All Day Tee",
        marca: "PUMA",
        precio: 26,
        descripcion: "Polera diseñada para acompañar entrenamientos variados, desde trabajo funcional hasta sesiones ligeras en gimnasio. Busca mantener comodidad durante el movimiento y una sensación fresca en contextos activos. El diseño es directo, deportivo y fácil de combinar con shorts o pantalones, convirtiéndola en una opción práctica para rutina semanal."
        },
        {
        id: "0019",
        categoria: "poleras",
        titulo: "Nike Running Pegasus Tee",
        marca: "Nike",
        precio: 40,
        descripcion: "Polera inspirada en la línea Pegasus, orientada a corredores y usuarios que buscan una imagen conectada con el running. Presenta un estilo liviano, cómodo y apropiado para actividad física frecuente. También puede usarse fuera del entrenamiento, gracias a una estética limpia que mezcla tecnología deportiva con una presencia visual sobria."
        },
        {
        id: "0020",
        categoria: "poleras",
        titulo: "adidas Trefoil Essentials Tee",
        marca: "adidas",
        precio: 30,
        descripcion: "Polera de estilo clásico que mezcla herencia deportiva con uso urbano diario. El diseño destaca por su sencillez, buena combinabilidad y una identidad visual conocida dentro de la marca. Se adapta a diferentes contextos, desde salidas casuales hasta jornadas de descanso, ofreciendo comodidad consistente y una apariencia siempre fácil de llevar."
        },

        {
        id: "0021",
        categoria: "shorts",
        titulo: "adidas Premium Essentials Retro Washed Shorts",
        marca: "adidas",
        precio: 60,
        descripcion: "Short con estética relajada y sensación premium, pensado para uso casual, descanso o recorridos urbanos. El tejido de algodón y el acabado lavado entregan una apariencia suave y con personalidad. Su cintura elástica con cordón ayuda al ajuste, mientras los bolsillos laterales lo convierten en una prenda práctica y cómoda."
        },
        {
        id: "0022",
        categoria: "shorts",
        titulo: "PUMA TAD Essentials 7 Woven Shorts",
        marca: "PUMA",
        precio: 28,
        descripcion: "Short deportivo liviano pensado para entrenamientos generales y uso activo en días cálidos. Su construcción tejida favorece libertad de movimiento, secado rápido y una sensación cómoda durante rutinas funcionales o caminatas. Tiene una apariencia simple y utilitaria, ideal para quienes valoran practicidad, ligereza y estilo deportivo sin exceso."
        },
        {
        id: "0023",
        categoria: "shorts",
        titulo: "PUMA TAD Essentials 5 Woven Shorts",
        marca: "PUMA",
        precio: 27.95,
        descripcion: "Versión más corta y ágil dentro de la línea Essentials, adecuada para entrenar con mayor libertad en piernas. Resulta cómoda para gimnasio, sesiones rápidas o días de calor, manteniendo una silueta deportiva limpia. La cintura elástica aporta ajuste sencillo y el diseño general prioriza funcionalidad, ligereza y movilidad continua."
        },
        {
        id: "0024",
        categoria: "shorts",
        titulo: "Nike Dri-FIT Challenger Shorts",
        marca: "Nike",
        precio: 45,
        descripcion: "Short orientado a corredores y usuarios activos que necesitan una prenda ligera, cómoda y fácil de mover en cada zancada. Está diseñado para acompañar trotes, entrenamientos y actividad general, con una sensación fresca y estable. Su estilo deportivo lo hace útil tanto en running como en sesiones variadas de acondicionamiento."
        },
        {
        id: "0025",
        categoria: "shorts",
        titulo: "adidas Trefoil Essentials Woven Shorts",
        marca: "adidas",
        precio: 40,
        descripcion: "Short casual con inspiración clásica, pensado para uso diario y momentos de descanso con un look deportivo reconocible. La tela ligera y la cintura elástica hacen que sea una opción fácil de usar muchas horas. Encaja muy bien en outfits simples, combinando comodidad básica con identidad visual de la marca."
        },
        {
        id: "0026",
        categoria: "shorts",
        titulo: "PUMA Train All Day Big Logo Woven Shorts",
        marca: "PUMA",
        precio: 32,
        descripcion: "Short creado para entrenamientos cotidianos, con una construcción enfocada en comodidad, libertad de movimiento y manejo de humedad durante el esfuerzo. El logo grande aporta un estilo más visible y deportivo, mientras el ajuste permite usarlo en gimnasio, caminatas o actividad recreativa. Es una prenda funcional para rutinas frecuentes."
        },
        {
        id: "0027",
        categoria: "shorts",
        titulo: "Nike Club Flow Shorts",
        marca: "Nike",
        precio: 50,
        descripcion: "Short de estilo urbano-deportivo con una silueta cómoda y relajada para el día a día. Está pensado para quienes quieren una prenda versátil que funcione tanto en descanso como en salidas casuales. La sensación general prioriza suavidad, ajuste simple y facilidad para combinar con poleras, hoodies o zapatillas deportivas."
        },
        {
        id: "0028",
        categoria: "shorts",
        titulo: "adidas Club Climacool Shorts",
        marca: "adidas",
        precio: 29.99,
        descripcion: "Modelo liviano inspirado en ropa deportiva de cancha, con atención especial a ventilación, movilidad y comodidad en condiciones de calor. Puede usarse para tenis, entrenamiento ligero o looks deportivos casuales. La prenda entrega una sensación ágil y funcional, ideal para quienes prefieren shorts sencillos, frescos y bien equilibrados."
        },
        {
        id: "0029",
        categoria: "shorts",
        titulo: "PUMA Essentials Jersey Shorts",
        marca: "PUMA",
        precio: 25,
        descripcion: "Short cómodo de uso cotidiano, pensado para momentos de descanso, salidas informales o actividad ligera. El tejido tipo jersey aporta suavidad y una sensación flexible al vestirlo durante varias horas. Su diseño básico facilita combinarlo con prendas deportivas o casuales, convirtiéndolo en una opción útil y simple para cualquier día."
        },
        {
        id: "0030",
        categoria: "shorts",
        titulo: "Nike Form 7 Inch Shorts",
        marca: "Nike",
        precio: 55,
        descripcion: "Short deportivo versátil diseñado para entrenamiento general, trabajo funcional y actividades donde se necesita comodidad continua. Su largo equilibrado lo hace práctico para distintos tipos de movimiento, mientras la construcción prioriza ligereza y libertad. Es una opción adaptable para usuarios que quieren rendimiento básico con estética moderna y limpia."
        }
    ]
};

export default catalogo