import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import noticia2 from '../photos/noticia2.png';


const datosbarra=[
    {href:'Home',label:'HOME'}, 
    {href:'About',label:'ACERCA DE MI'},
    {href:'Publication',label:'PUBLICACIONES'},
    {href:'Partners',label:'COLABORADORES'}, 
    {href:'Login',label:'INICIAR SESION'}
];

function Article2(){
    return (
        <>
            <Navbar links={datosbarra}/>
            <Logo/>
            <h1>Principio de presunción de inocencia, un desafío en tiempos de redes sociales</h1>
            <img src={noticia2} width='500'/>
            <h2>Realmente es aplicable la presunción de inocencia en tiempos de redes sociales, pandemia y cibercrimen? Un análisis de Chile, España e Italia.</h2>
            <p>by Hernán López</p>
            <p>En términos generales, entendemos la acción penal, como el ejercicio jurídico procesal que realiza la víctima, cuando ha resultado lesionada jurídicamente. En la legislación española, de “todo delito o falta nace acción penal para el castigo del culpable, y puede nacer también acción civil para la restitución de la cosa, la reparación del daño y la indemnización de perjuicios causados por el hecho punible”[1]. Estas acciones han de ser entendidas como manifestaciones del legítimo ejercicio del derecho a la tutela judicial efectiva. Este derecho por cierto que incluye el libre acceso a la representación letrada, en Chile institucionalizado por el Ministerio Público (ente persecutor) y la Defensoría Penal Pública (defensor).[2]

En Chile, materias como el ciberacoso, han sido abordadas a nivel de políticas públicas y en leyes relativas a educación. En particular, el maltrato escolar desde el concepto de convivencia escolar, y a través del fomento de ella evitar situaciones de violencia. En ese sentido la Ley N° 20.536 de Violencia Escolar, al definir acoso escolar consideró que la agresión u hostigamiento efectuado por medios tecnológicos podía también ser constitutivo de un acoso, sin embargo, no definió ni especificó con qué medios se efectúa acoso cibernético, ni consideró variantes, como si lo hacen otras legislaciones. Lo que si consideró es que el acoso escolar puede realizarse tanto dentro como fuera del establecimiento escolar.[3]

En Italia, en esta materia, la Ley 71 de 29 de mayo de 2017, que entró en vigencia el 18 de junio del mismo año, consagró de materia detallada, en el párrafo 2 del artículo 1 de la ley el ciberacoso como «cualquier forma de presión, agresión, acoso, chantaje, insulto, denigración, difamación, robo de identidad, alteración, adquisición ilícita, manipulación, tratamiento ilícito de datos personales en daño a menores, realizado por vía electrónica, así como la difusión de contenidos en línea relacionados con uno o más miembros de la familia del menor cuyo propósito intencional y predominante es aislar a un menor o un grupo de menores mediante la participación en abusos graves , un ataque malicioso, o su burla”.[4]

En Valencia, el protocolo de actuación escolar ante el ciberbullying es el primer resultado del equipo de un conjunto de profesionales que, agrupados bajo el nombre de EMICI[5] (Equipo Multidisciplinar de Investigación del Ciberbullying), tratan de dar respuesta a un problema que se manifiesta día a día en nuestra sociedad y, por ende, en las aulas: la presencia de situaciones del ciberbullying.[6]

Con relación a los derechos proclamados en la Carta de los Derechos Fundamentales de Europa, documento que comprende todo tipo de derechos, ya sean individuales, políticos y sociales, los derechos derivados de los avances de la bio-medicina y del desarrollo de las nuevas tecnologías. A propósito de este trabajo, es dable invocar el capítulo sexto, que regula la justicia, el derecho a un recurso efectivo y a acceder a un tribunal imparcial, la presunción de inocencia y los derechos de la defensa los principios de legalidad y proporcionalidad de los delitos y las penas y el derecho a no ser juzgado o castigado penalmente dos veces por una misma infracción.

Como señala el estudio del Parlamento Europeo Ciberbullying Among Young People criminalizar a los niños no se considera una solución ideal para enfrentar este fenómeno entre los estudiantes, pues penalizar el acoso cibernético produce diversos efectos negativos, tales como que el castigo impuesto puede ser desproporcionado con respecto a la conducta del niño; es inconveniente crear situaciones de vergüenza y humillación para los niños implicados; los acosadores debieran ser considerados también víctimas, pues mucha veces usan la agresión porque ellos mismos son niños que pueden estar siendo abusados en su hogar o en otro lugar, y por último, para los niños o jóvenes que acosan son preferibles los mecanismos de justicia restaurativa a las sanciones penales.[7]

Ser presunto inocente en tiempos de redes sociales, no resulta algo fácil para el derecho y menos aún en materia de Ciberbullying y adolescencia; como ya señalamos precedentemente el maltrato escolar comienza a discutirse en Chile, en el contexto de las políticas de convivencia escolar, permitiendo una escueta consagración normativa en la Ley N° 20.536 de Violencia Escolar, texto que introdujo una definición de convivencia y de acoso escolar. Las actuales redes sociales como tik-tok[8] ¿representarán un desafío a la luz del derecho preferente de los padres versus el ejercicio autónomo de éstos últimos?

Por último, se destaca de la normativa chilena que al definir acoso escolar también consideró que la agresión u hostigamiento efectuado por medios tecnológicos[9], el que también podría ser constitutivo de un acoso escolar. Sin embargo, no definió expresamente acoso cibernético o ciberbullying,[10] lo que ciertamente representa un actual desafío legislativo y por qué no imitar una legislación italiana en ese sentido, la que ciertamente está de vanguardia.

[1] Art. 100, Real decreto de 14 de septiembre de 1882 por el que se aprueba la Ley de Enjuiciamiento Criminal. – Boletín Oficial del Estado de 17-09-1882

[2] Dirección de Estudios del Tribunal Constitucional. Disponible en https://n9.cl/lea7q  

[3] Documento disponible en https://n9.cl/t8ez

[4] “Qualunque forma di pressione, aggressione, molestia, ricatto, ingiuria, denigrazione, diffamazione, furto d’identità, alterazione, acquisizione illecita, manipolazione, trattamento illecito di dati personali in danno di minorenni, realizzata per via telematica. Diffusione di contenuti on line, aventi ad oggetto anche uno o più componenti della famiglia del minore, o di un gruppo di minori, allo scopo intenzionale di isolare, abusare, attaccare o ridicolizzare” (Legge n. 71 del 2017 art. 1, co. 2).

[5] El EMICI (Equipo Multidisciplinar de Investigación del Ciberbullying). Disponible en https://n9.cl/5t4b5

[6] Centro Seguridad TIC de la Comunidad Valenciana. Disponible en https://n9.cl/il8g6

[7] Parlamento Europeo, (2016) p. 57-58.

[8] Chile “En 2019 la Brigada del Cibercrimen de la PDI informó que se investigaron más de 4 mil casos de acoso sexual contra menores; mientras el Ministerio de Desarrollo Social reportó 2 mil 200 denuncias por grooming y delitos asociados a abuso de menores en la red. Las cifras del último año reflejaron un aumento del 19% de los casos a nivel nacional y se prevé que estas continuarán creciendo debido al explosivo uso de internet y redes sociales durante la pandemia”. Disponible en https://n9.cl/c7ra4

[9] Artículo 16 B), Ley 20.536 Ley de Violencia Escolar, que promueve la creación de un comité de Buena Convivencia Escolar, y creación de un reglamento interno de convivencia.

[10] Pamela Cifuentes V. Maltrato escolar: Acoso cibernético o ciberbullying. Agosto de 2018. Asesoría Técnica Parlamentaria.</p>
            <Footer/>
            
            
            

               
        </>
    );
}
export default Article2;