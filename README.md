# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
 Tico Ligthart

  #### Je startniveau:
  blauw

  #### Je focus:
 responsive
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
 Ik ga de Bershka site namaken
 https://www.bershka.com/nl/dames/kleding/jassen-c1010240019.html

  #### Screenshot(s) van de eerste pagina (small screen): 
  Bershka selectie screen 1
  
  <img src="readme-images/bershkascreen1.jpg" width="375px" alt="omschrijving van de pagina">
  
  
 Bershka home screen
  
   <img src="readme-images/bershkascreen1_2.jpg" width="375px" alt="omschrijving van de pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  Bershka jassen selectie
  
  <img src="readme-images/Bershkascreen2.jpg" width="375px" alt="omschrijving van de pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>De responsiveness van de site is slecht. De extra tools die verschijnen om mensen met disabilities te helpen zorgen ervoor dat de hele site breekt. Het hele scherm wordt grijs, het menu werkt niet goed meer en de site doet eigenlijk gewoon niks meer. Sommige dingen zijn wel goed gelinkt, zoals het bershka logo. Dit wordt opgenoemd als "Bershka logo, back to homepage". Maar het meeste is niet goed bruikbaar voor iemand die een narrator gebruikt. Zo zijn alt descriptions hetzelfde als de omschrijving die onder plaatjes staan, en worden alle html woorden constant in het rond geslingerd. </summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  - De site is zonder zicht zeer slecht te navigeren.
  - Veel dingen zijn niet goed gelabeld.
  - Veel dingen staan klein en op elkaar, dus voor mensen die bijvoorbeeld parkisons hebben is het heel moeilijk om de site te navigeren. Ook zorgt dit ervoor dat   dingen snel onleesbaar worden als je zicht slechter is.

  #### Screenreader
Het is moeilijk te navigeren, veel dingen zijn slecht gelabeld.
Daarnaast breken de extra support tools de hele site.

Het is makkelijk om de html elementen de juiste namen en dat soort dingen te geven zodat de screen reader het niet fout afleest. Maar het feit dat de screen reader tools de site breken is niet makkelijk fix baar, want ik snap niet waarom dit gebeurt. 

  #### Muis en Toetsenbord 

De tab navigatie selecteert dingen die niet te zien zijn. Ook is de selector niet super duidelijk. Daarnaast is de volgorde waarin de tabselectie gaat niet super logisch, zo gaat het soms menus in die nog niet geopend zijn inplaats van naar de volgende item in het navigatie menu.

Een oplossing zou zijn de code semantisch correct maken. 



  #### Motoriek (shocks, elastiekjes)
De site is opzich prima navigeerbaar met de elastiekjes, maar veel dingen staan wel dicht op elkaar. Met de schokken maat dit het heel moeilijk om de site te navigeren.

Een makkelijke oplossing zou zijn om alle menutjes gewoon wat grooter te maken. De hoofd menus zijn dit al, maar de sub-menutjes zijn super klein. Geef ze gewoon wat meer ruimte, en ook maar direct wat meer letter grootte. Lost ook meteen het volgende probleem op:

  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
Met een visuele beperking zijn alle kleinere menus al heel snel onleesbaar. De darktheme van de site werkt wel prima en er is ook genoeg contrast voor kleure blinde mensen.

De menus moeten gewoon wat groter gemaakt worden.

Achteraf blijkt dat de site op telefoon en het vormaat " telefoon" op computer compleet verschillend zijn. Dit en dat de support tools de site breken hebben ervoor gezorgd dat ik maar van site ben verandert (op 17/11/2022).

</details>



## Breakdownschets (week 1)

<details>
  <summary>Ik ben van site overgestapt naar de site 'https://mangasee123.com'.</summary>

  ### de hele pagina: 
  <img src="readme-images/mangaseebreakdownschets.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>Ik ben begonnen aan de html van mjn site uitschrijven. Opzich denk ik dat dit wel goed gelukt is, maar ik ga het in de meeting nog laten checken.De CSS il nog niet echt lukken dus ik ben vanplan de student assistenten hier later mee lastig te vallen.</summary>

  ### Stand van zaken
  Wat ging goed?
  Ik vind het leuk om hie raan te werken, maar er is nog niet super veel goed gegaan moet ik zeggen.
  
  Wat ging minder?
  Ondanks de opdrachten te hebben gedaan en de code terugbeken te hebben kom ik niet uit de css. De header wil niet met flexbox staan zoals ik wil, de articles   waar ik dan weer grid voor gebruik vallen niet mooi binnen een blokje. Ik snap er niks van. Ik moet maar in het gesprek later het er even over hebben (of      studentassistenten na afloop vragen).
     
  Hier de html, css en hoe het eruit ziet:
  <details>

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="../css/mangasee.css">
</head>

<body>
    
     <!--header waar in het logo, de zoek balk en het navigatie menu moeten zitten -->
    <header>
         <img src="../images/logoms.png" alt="The Mangasee logo, depicting the word Manga in white and the word See in blue">
         <input type="text" placeholder="Quick Search.." >
         
      
        <ul>
             <li>
                 <a href="../basiswebsite/indexmangasee.html" ><img src="../images/homeicon.png" alt="Home button"></a>
             </li>
             <li>
                 <img src="../images/">
             </li>
             <li>
                  <img src="../images/zoekicon.png" alt="Zoek knop">
             </li>
             <li>
                 <img src="../images/">
             </li>
             <li>
                 <p>Login</p>
             </li>
         </ul>
        
    </header>
 
    <main>
        <img src="../images/berserk.jpg" alt="promotional art for the manga Berserk">
        
         <ul>
            
            <li>
             <h3>Hot Update</h3> <h3>more >></h3>
            </li>
             
            <li>
                 <article>
                     <img src="../images/Kengan-Omega.jpg" width= "200px">
                     <h4>Kengan Omega</h4>
                     <p> Chapter 185</p>
                     <p> 3 hours ago</p>
                 </article>
                 
            </li>
            
             <li>
                 <article>
                     <img src="../images/Kengan-Omega.jpg">
                     <h4>Kengan Omega</h4>
                     <p> Chapter 185</p>
                     <p> 3 hours ago</p>
                 </article>
                 
            </li>
         </ul> 
    </main>
    
    
    
</body>
</html>
 
 Dan de css:
/*--bgcolor:  color: darkgray;
--bgcolor2: color: black; */
/* */
header{
    /*background-color:var(--bgcolor); */
    background-color: dimgray;
    
}

main{
    /*background-color: var(--bgcolor2);*/
    /*background-color: black;*/
}

main:nth-of-type(1) a{
/* om plaatje te positioneren ater */
}


/* the top nav */
/* makes it so the nav menu doesnt have those dots */
ul{
    list-style: none;
    display: flex;
}

ul:nth-of-type(1) li{
    flex-grow: 1;
}


/* The articles */

main ul{
        list-style:none; 
        background-color: darkgrey;
}

main:nth-of-type(1) li{
    
}

li article{
    background-color: white;
    display:grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1em;
}

article img{
  grid-row-start:1;
  grid-column-start: 1;
  grid-column-end: -1;
}

article h4{
    color: blueviolet;
  grid-row-start:1;
  grid-column-start: 2;
}

article:nth-child(1) p{
  grid-row:2;
  grid-column-start: 2;
}

article:nth-child(2) p{
  grid-row-start:3;
  grid-column-start: 2;
}

en hoe het eruit ziet:
  <img src="readme-images/horrorcss.jpg" width="375px" alt="lelijke site waar niks van de layout klopt">
 </details>

  ### Agenda voor meeting
  samen met je groepje opstellen
 1. Tico - html checken, misschien nog css hulp???
 2. Naomi - html checken, fouten eruit halen
 3. Kars - html checken
 4. Brett - html checken, breakdown schets doornemen

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. bron 1
  2. bron 2
  3. ...

</details>
