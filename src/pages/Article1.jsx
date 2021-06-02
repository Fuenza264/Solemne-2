import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import noticia1 from '../photos/noticia1.png';



const datosbarra=[
    {href:'Home',label:'HOME'}, 
    {href:'About',label:'ACERCA DE MI'},
    {href:'Publication',label:'PUBLICACIONES'},
    {href:'Partners',label:'COLABORADORES'}, 
    {href:'Login',label:'INICIAR SESION'}
];

function Article1(){
    return (
        <>
            <Navbar links={datosbarra}/>
            <Logo/>
            <h1>¿Qué son las cookies de internet? Autodeterminación informativa; un tema pendiente en tiempos de pandemia.</h1>
            <img src={noticia1} width='500'/>
            <h2>Qué duda cabe de la importancia y masividad que tiene la utilización de internet en tiempos de pandemia, y en ese contexto la navegación por diferentes sitios web, alimentándose esta gran red por inmensos mares de información provenientes de usuarios de todo el mundo.</h2>
            <p>Por Javier Valdés Vergara y Hernán López Hernández</p>
            <p>A comienzos del segundo año de una de las pandemias más grandes que ha acontecido en la historia registrable del ser humano, el aislamiento físico y social, han generado una infinidad de cambios entre los ciudadanos de todo el mundo, quienes cumplen un confinamiento obligatorio y en otros casos voluntario, propiciando el espacio perfecto para una mayor comunicación telemática y por qué no decirlo, también normalizando el funcionamiento de aquellas tareas de mayor complejidad, como lo es el desempeñar profesiones, oficios y diversas ocupaciones de manera remota.

Qué duda cabe de la importancia y masividad que tiene la utilización de internet en tiempos de pandemia, y en ese contexto la navegación por diferentes sitios web, alimentándose esta gran red por inmensos mares de información provenientes de usuarios de todo el mundo. Conviene subrayar que el procesamiento de dicha información en esta tecno-sociedad resulta ser cada vez más eficiente de la mano de la Inteligencia Artificial, (en adelante “IA”) dada su potencia, eficiencia y efectividad; los millones de procesos y datos por segundo, se gestionan y procesan, mediante algoritmos computacionales, los cuales persiguen el desarrollo, aprendizaje interactivo y predictivo, basándose en datos empíricos y en modificaciones de los parámetros de conexión.

Buen ejemplo de lo anterior y para entender tal sentido de estas magnitudes de datos, también conceptualizadas como big data, dicen relación con los mercados de datos, realizando la salvedad que muchas aplicaciones y/o sitios web, se presentan como gratuitos para sus usuarios/as, sin embargo, siempre debemos manifestar “si aceptamos o no las cookies”, siendo esta quizás la dinámica más valiosa para los mercados de datos. Ergo, entre más información recopile el big data, más acertado será el algoritmo de la IA y, por tanto, mayor será la rentabilidad de los datos.

Agregando a lo anterior, debemos tener presente que las Cookies no solo tienen una interacción plana desde y para el usuario que las genera, sino que, también se utilizan para otros sitios web en el contexto del señalado mercado de datos; dicho de otro modo, la mercantilización de la información personal de usuarios/as, en su navegación por sitios web o en aplicaciones descargadas en dispositivos inteligentes (Smartphone, Smartwatch, Smart-TV, entre otros similares) o al momento de realizar transacciones de compras y ventas web y en general todo tipo de descargas y utilización de redes sociales. En ese contexto y para precisar, según el sitio web de Google Chrome[1]:

“Las cookies son archivos que crean los sitios web que visitas y guardan datos de navegación para que disfrutes de una experiencia online más sencilla. Gracias a ellas, los sitios web no cierran tu sesión, recuerdan tus preferencias y te proporcionan contenido relevante según tu ubicación. Hay dos tipos, las cookies de origen, que las crea el sitio que visitas; y las cookies de terceros, que las crean otros sitios. Parte del contenido que ves en la página web que visitas, como anuncios o imágenes, pertenece a estos sitios”.

Cosa distinta a lo anterior, son las Cookies de terceros, las cuales, no pretendemos sostener que perturben o afecten el derecho a la vida privada per se; sin embargo, ante la importancia del actual escenario mundial económico, en que el mercado de datos se potencia cada vez más, queda de manifiesto la necesidad de una regulación que logre ser garante de los derechos y garantías fundamentales, en particular sobre el derecho a la privacidad.

Ante la evidente necesidad regulatoria anteriormente señalada, vale señalar el Reglamento general de protección de datos (en adelante “RGPD”), de la Unión Europea (en adelante “UE”), el cual establece los requisitos específicos para empresas y organizaciones, sobre recogida, almacenamiento y gestión de los datos personales. Se aplica tanto a las organizaciones europeas que tratan datos personales de ciudadanos en la UE, como a las organizaciones que tienen su sede fuera de la UE y cuya actividad se dirige a personas que viven en la UE.

La protección de datos, por tanto, no sería baladí ante este nuevo modelo u orden económico mundial, el cual crece sostenidamente y aun ritmo vertiginoso; además de la evidente penetración que en la actualidad presenta esta herramienta, cookies de terceros, en la web mundial, a modo de ejemplo, “según un reporte de la Unión Europea sobre protección de datos que analizó cerca de 500 páginas web, el 70% de las cookies son de terceros y rastrean nuestra actividad para ofrecernos publicidad personalizada”[2].

En este sentido, dado que el funcionamiento del mercado de datos es en tiempo real y a una velocidad cada vez más rápida con el 5G, los patrones y perfiles que se generan por el amplio espectro de interacción del usuario en internet, sobre todo a través de todas las herramientas gratuitas ofrecidas, solo a modo de mencionar algunas empresas, Google, Facebook, Amazon, etc., no solo registran nuestra actividad diaria y el perfil amplio de usuario, en cada momento, (conocen y saben que consumismos, cotizamos, buscamos, descargamos, nuestras preferencias, lo que no nos gusta, etc.) para sí mismos, sino que, dicha información se vende al mejor postor a las empresas de data brokers[3], accediendo a gran parte de nuestra actividad web; lo anterior, no solo se confirma la desigualdad en la relación, usuario y empresas (Ya latamente señalado en materia de derechos del consumidor), muchas de estas últimas transnacionales por cierto, sino que además, se confirma la instrumentalización de nuestra conductas, con fines de mercado, endosándonos la responsabilidad como usuarios, de entender y comprender, todo este funcionamiento, al tener que aceptar o rechazar el tratamiento de cookies.

¿Podemos plantear hoy la existencia de una voluntad real y pura, al realizar una compra mediante el comercio electrónico? ¿Podemos por otro lado, hablar de libre competencia entre empresas, en el sentido de que no todos acceden a la misma información del usuario? Haciendo un paragón simplificado de lo anterior, sería curioso que un vendedor del retail, por ejemplo, nos pidiese contestar una encuesta con preguntas de diversa índole personal, gustos por productos, colores, música, comida, club de futbol favorito, últimas páginas visitadas, películas favoritas, nuestros viajes, nuestras búsquedas en la web, donde vivimos, nuestra preferencia en el plebiscito, etc., en un contexto de compra. ¿Realmente consumimos lo que queremos? ¿Cuál es la causa? ¿Siempre es nuestra?

Señalado ello, es importante decir que, en el marco de la vida privada y la intimidad, como derechos fundamentales, y en particular, la autodeterminación informativa, en nuestra opinión, se ve seriamente amenazada al momento de autorizar el tratamiento de cookies de terceros, sea esté un usuario joven, al cual podríamos definir como nativo digital; como también una persona de la tercera edad; por tanto, opinamos que la tutela a este derecho debe ser estructural, dinámica y orgánica.

La información que es entregada por personas a través de su navegación en internet representa el nuevo petróleo de esta Cuarta Revolución Industrial, dicho de otra forma, los datos emitidos por el usuario y procesados a través de cookies de terceros, también conocidos como inputs, insumos o activos, constituyen un pilar fundamental para esta nueva economía de datos, que deriva de la información aportada por personas, y en la actualidad también por sistemas de IA. Todo lo anterior, nos lleva a concluir que los “datos” son un bien jurídico a proteger sin lugar a duda; datos personales y también sensibles como el color de piel, el sexo, la orientación sexual, diagnósticos sobre enfermedades crónicas, antecedentes patrimoniales, entre otros; así las cosas, dicha conceptualización e interés surge recién a fines del siglo XX en Alemania,

“A partir de la famosa sentencia del tribunal constitucional alemán de 1983, por la que se anuló en forma parcial la ley del censo de población de ese país, la doctrina y la legislación alemana han aceptado el derecho a la autodeterminación sobre los datos personales, como una emanación del derecho al desarrollo libre de la personalidad. Es decir, cada persona, para custodiar su autonomía y libertad, tiene derecho a la autodeterminación sobre sus datos personales. Sobre esta base, el hecho de recoger y registrar datos personales constituye una limitación en la esfera de los derechos de las personas; como tal, requiere una habilitación legal especial…” [4].

Es innegable sostener que la sentencia[5] alemana, fue un faro relevante, al menos para el derecho occidental, al sentar el precedente de la debida protección y autodeterminación de los datos personales, y lo más importante en nuestra opinión, su dimensión dogmática; tan solo, el hecho mismo de recoger y registrar datos personales ya constituye una limitación per se, a los derechos de la personalidad.

En Chile, queda de manifiesto la “influencia jurisprudencial”, en la génesis y redacción de Ley Nº19.628, sobre protección de la vida privada, sin embargo, dicho cuerpo normativo, no logra tutelar de buena manera, garantías fundamentales, dada la actual lógica de mercado y el acelerado avance de la tecnología (IA, data brokers, Big Data, etc.). Sin lugar a duda, al momento de actualizar y generar una nueva orgánica, es menester la comprensión macro, de que aquello, no es en aras de bloquear o entorpecer la circulación económica que ello conlleva, además de los sendos beneficios de muchos avances tecnológicos, y variadas herramientas, muchas de las cuales son “sin costo” para los usuarios,  por decirlo de algún modo; sino que, por el contrario, dichas restricciones, a nuestro parecer, son para potenciar y legitimar un mercado real y tremendamente poderoso a nivel global, evitando a toda costa la instrumentalización del ser humano, además de tutelar especialmente su autodeterminación informativa; “… se concentró en el refuerzo de la protección del consentimiento y, consiguientemente, del refuerzo del alcance de la (llamada en doctrina) “autodeterminación informativa”[6].

Según Bugueño[7], en enero de 2020, el Caribe fue una de las regiones cuyos países y territorios presentaron algunas de las más altas tasas de penetración de internet en América Latina y el Caribe, siendo las Bahamas el país líder en toda la región, con el 85% de su población conectada a la red. Chile es el único país del territorio continental cuyos usuarios online superaban el 80% de la población. En cuanto a número de internautas, Brasil y México lideran en la región.

Para ir resumiendo, resulta necesario e indispensable otorgarle mayor modulación y materialidad a la consagración del derecho a la protección de los datos personales, plasmados mediante reforma constitucional del año 2018, mediante ley Nº21.096, la cual modifica nuestra carta fundamental, en lo siguiente,

            “Artículo único. – Agrégase, en el numeral 4° del artículo 19 de la Constitución Política de la República, a continuación de la expresión «y su familia», lo           siguiente: «, y asimismo, la protección de sus datos personales. El tratamiento y    protección de estos datos se efectuará en la forma y condiciones que determine la   ley.”

Siguiendo el anterior orden de ideas, si bien es cierto, la reforma constitucional estableció un avance considerable en lo conceptual y en la jerarquía legal, es decir, protección a nivel constitucional, y la debida delimitación en relación con la protección de la vida privada y la intimidad (ambas estarían entrelazadas, mas, serían distintas); así las cosas, aún quedan importantes instituciones pendientes, en nuestra opinión, para la materialidad y funcionalidad de la garantía, a saber, los derechos ARCO[8] para los titulares de los datos, la acción de protección, habida inclusión en la carta fundamental de la garantía en comento, la acción de habeas data establecida en la Ley Nº19.628 y su compatibilidad con la acción constitucional; y, finalmente, el ente administrativo que de la orgánica necesaria para el debido control y fiscalización; sobre esto último, fluye de la experiencia europea con las agencias de protección de datos, en particular, la experiencia española, sobre todo con la pandemia, con diversas medidas implementadas por dicho ente, como lo es la orientación permanente de los usuarios/as, con respecto a los riesgos ante la contingencia sanitaria, y los datos personales de estos; así como también, recomendaciones a los trabajadores/as y empleadores/as, con respecto a sus datos personales, a propósito del teletrabajo permanente y sostenido que han tenido los españoles/as, hace más de un año[9];  en el anterior sentido, fue el ente en comento, el que zanjó la discusión, por ejemplo, con relación a la utilización de herramientas de reconocimiento facial, a modo de verificar la identidad del estudiante al rendir un examen, estableciendo que el estudiante debe dar su consentimiento para la utilización de dicho mecanismo de reconocimiento, debiéndose establecer, según corresponda, mecanismos alternativos de verificación de identidad[10].

Teniendo a la vista dicha experiencia, sumado a nuestro avances, consideramos que debiese orientarse el trabajo del legislador, hacia la construcción de normas más eficaces y eficientes, que atiendan a la realidad orgánica que se le pretenda dar al ente administrativo, agencia de protección de datos, por ejemplo, y los bienes jurídicos a tutelar, derechos ARCO; la anterior estructura normativa de protección, debe modularse de tal forma que esta tenga eficacia razonable inclusive ante las actuales contingencias sanitarias (impedir dentro de lo posible las zonas de sacrificio); sobre todo por la función del ente administrativo, como respuesta ex ante, orientadora e informadora ante la comunidad, y, en definitiva, como faro jurisprudencial administrativo, ante la considerable velocidad de estas temáticas, sumado a potestades sancionatorias reales y que permitan alcanzar los fines públicos del ente. (No tendría sentido replicar un león desdentado, como el actual SERNAC). Ardua tarea sin duda.

Por último y para concluir, dicha realidad hoy en día, la defensa de los datos personales, en la práctica, en medio de una de las pandemias más complejas de los últimos dos siglos, es un derrotero que invita al titular de aquellos datos, a lo heroico y utópico; lo anterior, obedecería en gran parte, en nuestra opinión, dado que la garantía aún estaría en estado platónico (falto de orgánica y a la espera de la reforma de la Ley 19.628[11]), y por tanto, se enfrentaría con diversos problemas, a saber:  consentimiento realmente informado de los efectos e importancia de los datos, al aceptar el tratamiento de cookies de terceros; existencia del mercado de datos tecno-sociedad de datos, riesgo de instrumentalización de la persona;  rápida evolución de estas tecnologías; crecimiento sostenido y progresivo del comercio electrónico y remedios jurídicos tardíos; envejecimiento de la población; dificultad por parte del posible afectado para entablar la acción habeas data, las dudas con la acción de protección (real eficacia ante su generalidad) y la habida reforma constitucional de la protección de derechos, problemas de legitimación pasiva en ambas acciones; entre otros muchos casos, y diversos efectos que pueden surgir en estas relaciones jurídicas. Infinitas, sin duda, y más complejas aún, en tiempos de pandemia. (Santiago, 15 abril 2021)

Bibliografía.

ALBERT, Catalina., “Big Data en campañas: Para los políticos es más fácil ganar una elección, pero les resulta muy difícil gobernar”., 2019. https://bit.ly/3d3gByt. Último acceso 24 de marzo de 2021.
LÓPEZ, Juan., “La protección de datos en la UE: el punto de vista del parlamento europeo”., El reglamento general de protección de datos un enfoque nacional y comparado. Especial referencia a la lo 3/2018 de protección de datos y garantía de los derechos digitales. Valencia, editorial Tirant lo Blanch. 2019. 1º edición p. 32.
PALMA, Pablo., “Sentencia de 15 de diciembre de 1983 (Ref. 1 BvR 209/83) (Fondo) Ley del Censo, del Tribunal Constitucional Federal Alemán”. Blog Derecho y Tecnología. 2016. Disponible en https://bit.ly/2QEvaB5. Último acceso 24 de marzo de 2021.
SALAS, Erick Burgueño., “Porcentaje de la población con acceso a internet en América Latina y Caribe por país en 2020”., Disponible en https://bit.ly/2QCpwPX. Último acceso 24 de marzo de 2021.
URIARTE, Julia Máxima., «Inteligencia Artificial». 2019. Caracteristicas.co. Disponible en https://bit.ly/3rnRueQ. Último acceso 26 de m

[1] Véase, sitio web de ayuda de Google Chrome https://bit.ly/3sopQj6. Último acceso 24 de marzo de 2021.

[2]Véase, agencia de marketing Kontacto, “Qué ocurre cuando aceptas las cookies y por qué es conveniente borrarlas del navegador de vez en cuando”. Disponible en https://bit.ly/3srAhCN. Último acceso 26 de marzo de 2021 y nota periodística BBC, Mundo Tecnología, “Qué ocurre cuando aceptas las cookies y por qué es conveniente borrarlas del navegador de vez en cuando”., disponible https://bbc.in/3tQnNVw. Último acceso 26 de marzo de 2021.

[3] Véase, que empresas que recopilan datos de la vida real y virtual de las personas y que luego venden a terceras empresas con fines lucrativos, dice relación con los data brokers o comerciantes de datos y su interés por nuestros datos en potencia podrían representar una amenaza a la protección de la propiedad privada. Disponible en https://bit.ly/3fcWY9K. Último acceso 24 de marzo de 2021.

[4] Véase, Historia de la Ley Nº19.628, sobre protección a la vida privada. P. 6. Disponible en https://bit.ly/3slq6zw. Último acceso 24 de marzo de 2021.

[5] PALMA, Pablo., “Sentencia de 15 de diciembre de 1983 (Ref. 1 BvR 209/83) (Fondo) Ley del Censo, del Tribunal Constitucional Federal Alemán”. Blog Derecho y Tecnología. 2016. Disponible en https://bit.ly/2QEvaB5. Último acceso 24 de marzo de 2021.

[6] LÓPEZ, Juan., “La protección de datos en la UE: el punto de vista del parlamento europeo”., El reglamento general de protección de datos un enfoque nacional y comparado. Especial referencia a la lo 3/2018 de protección de datos y garantía de los derechos digitales. Valencia, editorial Tirant lo Blanch. 2019. 1º edición p. 32.

[7] SALAS, Erick Burgueño., “Porcentaje de la población con acceso a internet en América Latina y Caribe por país en 2020”., Disponible en https://bit.ly/2QCpwPX. Último acceso 24 de marzo de 2021.

[8] Los derechos de acceso, rectificación, cancelación y oposición de los datos personales.

[9]  Véase, Abogacía Española, Consejo General, “Día Europeo de Protección de Datos: las lecciones de la pandemia”. Disponible en https://www.abogacia.es/actualidad/opinion-y-analisis/dia-europeo-de-proteccion-de-datos-las-lecciones-de-la-pandemia/. Último acceso 28 de marzo de 2021.

[10] Véase, Retina, diario El País, ‘Startups’ ¿Es tan fácil copiar en un examen virtual? Disponible en https://bit.ly/3s59pax. Último acceso 28 de marzo de 2021.

[11] Revísese la tramitación conjunta del proyecto de ley que regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales (Boletín N° 11.144-07, refundido con el Boletín Nº 11.092-07) y el proyecto de ley sobre protección de datos personales (Boletín N° 11.092-07). Disponible en https://www.camara.cl/pley/pley_detalle.aspx?prmID=11661&prmBoletin=11144-07. Último acceso 28 de marzo de 2021.</p>
            <Footer/>
            
            
            

               
        </>
    );
}
export default Article1;