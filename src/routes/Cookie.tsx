import { Anchor, Box, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Cookie() {



    return (
        <Box style={{textAlign: "center"}}>
            <Title>Politika súborov cookies</Title>
            <Text>Táto politika súborov cookies objasňuje používanie súborov cookies na webovej stránke <strong>www.prayforbelo.sk</strong> a ich účel.</Text>

            <Title style={{marginTop: "20px"}}>Definícia súborov cookies</Title>
            <Text>Súbory cookies sú malé textové súbory, ktoré sa ukladajú na vašom počítači alebo zariadení počas prehliadania webových stránok. Slúžia na zapamätanie si vašich akcií a preferencií, ako napríklad prihlasovacie údaje, jazyk, veľkosť písma a iné nastavenia zobrazenia, aby ste ich nemuseli opakovane zadávať počas návštev stránky alebo pri prechodoch medzi stránkami.</Text>

            <Title style={{marginTop: "20px"}}>Použitie súborov cookies</Title>
            <Text style={{fontSize: "20px"}}><strong>Google Analytics</strong></Text>
            <Text>Webová stránka www.praforbelo.sk využíva službu Google Analytics, poskytovanú spoločnosťou Google, Inc. ("Google"), na analýzu správania návštevníkov. Google Analytics používa súbory cookies na zber bežných informácií o prihlásení návštevníkov a ich správaní na webovej stránke www.praforbelo.sk, pričom nezachytáva osobné údaje. Získané informácie sú anonymné a slúžia na analýzu trendov na stránke bez identifikácie jednotlivých návštevníkov.</Text>

            <Text style={{fontSize: "20px"}}><strong>Súbory cookies pre prihlásenie</strong></Text>
            <Text>Táto webová stránka využíva súbory cookies na zapamätanie prihlásenia návštevníka počas jeho návštevy. Tieto súbory cookies sú nevyhnutné pre bezproblémové používanie stránky a správne fungovanie prihlasovacích funkcií.</Text>

            <Title style={{marginTop: "20px"}}>Správa súborov cookies</Title>
            <Text>Väčšina webových prehliadačov umožňuje odmietnutie používania súborov cookies alebo vás upozorní na ich odoslanie. Môžete nastaviť váš prehliadač tak, aby blokoval súbory cookies alebo vás upozornil pri ich odoslaní na váš počítač. Ak chcete zmeniť nastavenia súborov cookies, môžete to urobiť cez nastavenia vášho webového prehliadača. Poprípadne pomocou tlačítka nižšie.</Text>

            <Title style={{marginTop: "20px"}}>Súhlas</Title>
            <Text>Používaním súborov cookies vyjadrujete svoj súhlas prostredníctvom dolnej lišty, kde môžete prijať alebo odmietnuť používanie súborov cookies. Ak odmietnete súbory cookies, môže to viesť k nesprávnemu fungovaniu prihlasovania!</Text>
            
            
            <Title style={{marginTop: "20px"}}>Zmeny v politike súborov cookies</Title>
            <Text>Táto politika súborov cookies je platná od 21.10.2023 a môže byť občas aktualizovaná. Ak dôjde k akýmkoľvek zmenám, aktualizovaná verzia bude zverejnená na tejto webovej stránke.</Text>

            <Text style={{marginTop: "30px"}}>Ak máte akékoľvek otázky týkajúce sa tejto politiky súborov cookies, kontaktujte nás prostredníctvom e-mailu <Anchor component={Link} to="mailto:report@1fgbza.eu">report@1fgbza.eu</Anchor>.</Text>
        </Box>
    )
}
